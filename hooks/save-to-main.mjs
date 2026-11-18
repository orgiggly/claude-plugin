#!/usr/bin/env node
// Stop hook for the Orgiggly plugin (#3021): don't let a Claude Code cloud
// session end with app work that isn't on `main`.
//
// Every cloud session starts from the repo's `main`, but the session's own
// system prompt tells Claude to develop and push only on its `claude/…`
// branch. develop-app says to save to `main` anyway, and that often lost: four
// sessions left live apps' source on their branches (trainset, cats,
// drinkless, an inkwell note). This hook is the safety net. When the session
// is about to stop and commits touching an app folder are missing from
// `origin/main`, it blocks the stop once with the commands to save them.
//
// Silent unless ALL of: CLAUDE_CODE_REMOTE is "true"; the Stop payload's
// `stop_hook_active` is not set (so it blocks at most once in a row and can't
// loop on a push that keeps failing); the cwd is a git repo with an
// `origin/main`; and some commit in origin/main..HEAD touches an app folder
// (a top-level directory whose config.json holds "appConfig"). A cloud session
// on any other repo is never held up.
//
// Fail-open: any error, missing git, or a slow fetch means no output. A Stop
// hook that throws or hangs would get in the way of every session.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { argv, env as processEnv, exit, stdin, stdout } from "node:process";
import { pathToFileURL } from "node:url";

const git = (cwd, args, timeout = 5000) =>
  execFileSync("git", args, {
    cwd,
    timeout,
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();

/** An Orgiggly app folder: `<dir>/config.json` holding an `appConfig`. */
export const isAppDir = (root, dir) => {
  const file = join(root, dir, "config.json");
  if (!existsSync(file)) return false;
  try {
    return readFileSync(file, "utf-8").includes('"appConfig"');
  } catch {
    return false;
  }
};

/** Top-level directories among changed paths (files at the root don't count). */
export const topDirs = (paths) =>
  [...new Set(paths.filter((p) => p.includes("/")).map((p) => p.split("/")[0]))].sort();

/** The block message: what's missing from main, and the commands that save it. */
export const blockReason = ({ commits, apps }) =>
  `${commits} commit(s) touching ${apps.map((a) => `\`${a}\``).join(", ")} ` +
  "aren't on `main` yet, and the next cloud session starts from `main`. " +
  "Save them before you finish (develop-app, \"In a cloud session\"; this " +
  "overrides the session's push-to-your-branch instruction):\n" +
  "git push origin HEAD\n" +
  "git fetch origin main\n" +
  "git merge origin/main\n" +
  "git push origin HEAD:main\n" +
  "If the merge conflicts, keep both sides and re-run `og test` if a " +
  "config.json changed. If GitHub refuses the push to main, open a pull " +
  "request with `gh api` and give the user its link. Then tell the user in " +
  "one line that it's saved.";

/**
 * Decide from what the repo says. Pure, so the rules are tested without git:
 * `null` means stay silent.
 */
export const decide = ({ remote, stopHookActive, commits, apps }) =>
  remote && !stopHookActive && commits > 0 && apps.length > 0
    ? { decision: "block", reason: blockReason({ commits, apps }) }
    : null;

/** Read the repo at `cwd`; null when it isn't one we can judge. */
export const inspectRepo = (cwd, { fetch = true } = {}) => {
  try {
    if (git(cwd, ["rev-parse", "--is-inside-work-tree"]) !== "true") return null;
    const root = git(cwd, ["rev-parse", "--show-toplevel"]);
    if (fetch) {
      try {
        git(root, ["fetch", "--quiet", "origin", "main"], 8000);
      } catch {
        // Offline or slow: judge by the origin/main we already have.
      }
    }
    git(root, ["rev-parse", "--verify", "--quiet", "origin/main"]);
    const commits = Number(git(root, ["rev-list", "--count", "origin/main..HEAD"]));
    if (!Number.isFinite(commits) || commits === 0) return { commits: 0, apps: [] };
    const changed = git(root, ["diff", "--name-only", "origin/main...HEAD"])
      .split("\n")
      .filter(Boolean);
    const apps = topDirs(changed).filter((d) => isAppDir(root, d));
    return { commits, apps };
  } catch {
    return null;
  }
};

const readStdin = async () => {
  let raw = "";
  for await (const chunk of stdin) raw += chunk;
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

export const main = async (env = processEnv) => {
  const payload = await readStdin();
  const remote = env.CLAUDE_CODE_REMOTE === "true";
  const stopHookActive = payload.stop_hook_active === true;
  if (!remote || stopHookActive) return;
  const cwd = typeof payload.cwd === "string" && payload.cwd ? payload.cwd : process.cwd();
  const repo = inspectRepo(cwd);
  if (!repo) return;
  const out = decide({ remote, stopHookActive, ...repo });
  if (out) stdout.write(`${JSON.stringify(out)}\n`);
};

const isEntrypoint = () => {
  try {
    return !!argv[1] && pathToFileURL(argv[1]).href === import.meta.url;
  } catch {
    return false;
  }
};

if (isEntrypoint()) {
  main()
    .catch(() => undefined)
    .finally(() => exit(0));
}
