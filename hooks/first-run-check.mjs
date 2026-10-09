#!/usr/bin/env node
// SessionStart hook for the Orgiggly plugin (#1318, probe widened in #1353,
// what's-new after an update #2500).
//
// Two independent jobs, composed into one JSON output:
//   1. Greeting (additionalContext, read by Claude) — below.
//   2. What's new (systemMessage, shown to the USER) — when plugin.json's
//      version is newer than the one recorded in
//      ~/.orgiggly/plugin-last-seen-version, list the CHANGELOG.md items in
//      between plus a link to the full history, then record the new version.
//      First install is silent (the greeting covers it). Verified in a
//      disposable `claude -p` session: `systemMessage` lands as its own
//      `hook_system_message` entry, which the terminal shows the user;
//      `additionalContext` reaches Claude only.
//   3. Update nudge (systemMessage too, #2469) — at most once a day, fetch the
//      mirror's published plugin.json (1.5 s timeout) and, when it is newer
//      than the installed one, say how to update. Offline or any error is
//      silent. ORGIGGLY_PLUGIN_UPDATE_CHECK=0 turns it off;
//      ORGIGGLY_PLUGIN_LATEST_URL points it elsewhere (the tests use data:).
//
// Greeting — detect-and-guide only: if the user isn't ready to build an Orgiggly app yet,
// inject a one-line pointer to /orgiggly. "Not ready" is two cases —
// the `og` CLI isn't on PATH, or it is but no credential has been stored yet
// (never signed in, or signed out again). It NEVER mutates PATH (a hook can't
// safely do that) and NEVER blocks or errors the session — worst case it prints
// nothing. Idempotent: once the CLI is installed and signed in it stays silent.
//
// Fail-open: any uncertainty (unreadable home, odd filesystem, missing env)
// greets rather than silently swallowing onboarding, and the probe never
// throws — a throwing SessionStart hook would degrade every session start.

import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { argv, env as processEnv, exit, stdin, stdout } from "node:process";
import { delimiter, dirname, isAbsolute, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

/** Is the `og` binary resolvable on the given environment's PATH? */
const cliOnPath = (env) => {
  const raw = env && typeof env === "object" ? env.PATH : undefined;
  const dirs =
    typeof raw === "string" ? raw.split(delimiter).filter(Boolean) : [];
  const names = ["og", "og.exe", "og.cmd"];
  return dirs.some((dir) => names.some((n) => existsSync(join(dir, n))));
};

// Mirrors `authDir()` in packages/cli/src/services/credentialStore.ts:
// `<home>/.orgiggly/auth/<projectId>.json`. We look for a credential FILE, not
// just the directory — `og logout` removes the file and leaves the dir behind,
// and a signed-out user is exactly who this greeting is for.
const hasStoredCredential = (home) => {
  const dir = join(home, ".orgiggly", "auth");
  if (!existsSync(dir)) return false;
  return readdirSync(dir).some((name) => name.endsWith(".json"));
};

/**
 * Should we greet this user with a pointer to /orgiggly?
 *
 * Returns `true` (greet) if `og` is off PATH, or on PATH with no stored
 * credential, or if anything at all goes wrong while checking.
 */
export const probeShouldGreet = (home, env) => {
  try {
    if (!cliOnPath(env)) return true;
    return !hasStoredCredential(home);
  } catch {
    return true; // fail open — greeting a ready user beats stranding a new one
  }
};

const GREETING = {
  noCli:
    "The Orgiggly `og` command is not on your PATH yet. If you want to build " +
    "an Orgiggly app this session, type /orgiggly once — it sets up `og`, " +
    "signs you in, and builds your first app.",
  noCredential:
    "The Orgiggly `og` command is installed but you're not signed in yet. If " +
    "you want to build an Orgiggly app this session, type /orgiggly once — it " +
    "signs you in, picks your name on Orgiggly, and builds your first app.",
};

// --- what's new ------------------------------------------------------------

/** The plugin root: this file lives at `<root>/hooks/first-run-check.mjs`. */
const PLUGIN_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

export const CHANGELOG_URL =
  "https://github.com/orgiggly/claude-plugin/blob/main/CHANGELOG.md";

/** Items shown before "…and N more"; the link carries the rest. */
const MAX_ITEMS = 6;

export const compareVersions = (a, b) => {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d < 0 ? -1 : 1;
  }
  return 0;
};

/**
 * `## 0.5.0` sections of CHANGELOG.md, in file order, each with its `- `
 * bullet items. Any other `#`/`##` heading ends a section; prose is ignored.
 * Also used by scripts/plugin-mirror.mjs, so both read the file one way.
 */
export const parseChangelog = (text) => {
  const sections = [];
  let current = null;
  for (const line of String(text ?? "").split(/\r?\n/)) {
    const heading = line.match(/^##\s+v?(\d+(?:\.\d+)*)(?:\s.*)?$/);
    if (heading) {
      current = { version: heading[1], items: [] };
      sections.push(current);
    } else if (/^#{1,2}\s/.test(line)) {
      current = null;
    } else {
      const item = line.match(/^[-*]\s+(.*\S)/);
      if (current && item) current.items.push(item[1]);
    }
  }
  return sections;
};

/**
 * The user-facing what's-new message, or null when there is nothing to say:
 * no previous version (first install), or not an upgrade.
 */
export const whatsNew = ({ installed, lastSeen, changelog }) => {
  if (!installed || !lastSeen) return null;
  if (compareVersions(installed, lastSeen) <= 0) return null;
  const items = parseChangelog(changelog)
    .filter(
      (s) =>
        compareVersions(s.version, lastSeen) > 0 &&
        compareVersions(s.version, installed) <= 0,
    )
    .sort((a, b) => compareVersions(b.version, a.version))
    .flatMap((s) => s.items);
  const shown = items.slice(0, MAX_ITEMS).map((item) => `  • ${item}`);
  const more =
    items.length > MAX_ITEMS ? [`  …and ${items.length - MAX_ITEMS} more`] : [];
  return [
    `Orgiggly plugin updated to ${installed}.${items.length ? " What's new:" : ""}`,
    ...shown,
    ...more,
    `Full history: ${CHANGELOG_URL}`,
  ].join("\n");
};

// Both state files are written, so a home that isn't an absolute path ("" or
// a relative one) must be refused — join() would resolve it against the cwd
// and drop a stray .orgiggly/ into whatever project the session started in.
const usableHome = (home) => typeof home === "string" && isAbsolute(home);

const lastSeenFile = (home) => join(home, ".orgiggly", "plugin-last-seen-version");

/**
 * Read the installed version and the last-seen marker, return the message
 * (if any) and record the installed version. Silent on ANY error — a broken
 * marker must never cost the user a session start.
 */
export const takeWhatsNew = (home, pluginRoot = PLUGIN_ROOT) => {
  try {
    const manifest = join(pluginRoot, ".claude-plugin", "plugin.json");
    const installed = JSON.parse(readFileSync(manifest, "utf-8")).version;
    if (typeof installed !== "string" || !usableHome(home)) return null;
    const marker = lastSeenFile(home);
    const lastSeen = existsSync(marker)
      ? readFileSync(marker, "utf-8").trim()
      : null;
    if (lastSeen === installed) return null;
    let changelog = "";
    try {
      changelog = readFileSync(join(pluginRoot, "CHANGELOG.md"), "utf-8");
    } catch {
      // no changelog → the message still says what version arrived
    }
    const message = whatsNew({ installed, lastSeen, changelog });
    mkdirSync(dirname(marker), { recursive: true });
    writeFileSync(marker, `${installed}\n`);
    return message;
  } catch {
    return null;
  }
};

// --- update nudge ------------------------------------------------------------

export const LATEST_URL =
  "https://raw.githubusercontent.com/orgiggly/claude-plugin/main/.claude-plugin/plugin.json";

const CHECK_EVERY_MS = 24 * 60 * 60 * 1000;

/** The published version, or null on any failure (offline, slow, bad JSON). */
export const fetchLatestVersion = async (url = LATEST_URL) => {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    if (!res.ok) return null;
    const { version } = await res.json();
    return typeof version === "string" ? version : null;
  } catch {
    return null;
  }
};

const updateCheckFile = (home) =>
  join(home, ".orgiggly", "plugin-update-check.json");

/**
 * The "a newer plugin is out" line, or null. Fetches at most once a day
 * (`checkedAt` in ~/.orgiggly/plugin-update-check.json) and only nudges on the
 * session that did the check, so a user who stays behind hears it daily, not
 * every session. Never throws.
 */
export const updateNudge = async ({
  home,
  installed,
  fetchLatest = fetchLatestVersion,
  now = Date.now(),
}) => {
  try {
    if (typeof installed !== "string" || !usableHome(home)) return null;
    const file = updateCheckFile(home);
    let checkedAt = 0;
    try {
      checkedAt = Number(JSON.parse(readFileSync(file, "utf-8")).checkedAt) || 0;
    } catch {
      // first check, or an unreadable record — check now
    }
    if (now - checkedAt < CHECK_EVERY_MS) return null;
    const latest = await fetchLatest();
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `${JSON.stringify({ checkedAt: now, latest })}\n`);
    if (!latest || compareVersions(latest, installed) <= 0) return null;
    return (
      `Orgiggly plugin ${latest} is out (you have ${installed}). To update, ` +
      "run /plugin marketplace update orgiggly, then " +
      "/plugin update orgiggly@orgiggly, and restart Claude Code."
    );
  } catch {
    return null;
  }
};

const installedVersion = (pluginRoot = PLUGIN_ROOT) => {
  try {
    const manifest = join(pluginRoot, ".claude-plugin", "plugin.json");
    return JSON.parse(readFileSync(manifest, "utf-8")).version;
  } catch {
    return undefined;
  }
};

const main = async () => {
  try {
    // Drain stdin (the hook payload) so we don't leave the pipe hanging; we
    // don't need its contents.
    stdin.resume();
    stdin.on("data", () => {});
  } catch {
    // ignore
  }

  try {
    const home = homedir();
    const output = {};
    const news = takeWhatsNew(home);
    const nudge =
      processEnv.ORGIGGLY_PLUGIN_UPDATE_CHECK === "0"
        ? null
        : await updateNudge({
            home,
            installed: installedVersion(),
            fetchLatest: () =>
              fetchLatestVersion(processEnv.ORGIGGLY_PLUGIN_LATEST_URL || LATEST_URL),
          });
    const messages = [news, nudge].filter(Boolean);
    if (messages.length) output.systemMessage = messages.join("\n\n");
    if (probeShouldGreet(home, processEnv)) {
      output.hookSpecificOutput = {
        hookEventName: "SessionStart",
        additionalContext: cliOnPath(processEnv)
          ? GREETING.noCredential
          : GREETING.noCli,
      };
    }
    if (Object.keys(output).length) stdout.write(JSON.stringify(output));
  } catch {
    // ignore — never block or error the session
  }

  exit(0);
};

// Only run the hook when invoked as a script; importing this file (the test
// does) must not drain stdin, write to stdout, or exit the process.
const isEntrypoint = () => {
  try {
    return !!argv[1] && pathToFileURL(argv[1]).href === import.meta.url;
  } catch {
    return false;
  }
};

if (isEntrypoint()) void main();
