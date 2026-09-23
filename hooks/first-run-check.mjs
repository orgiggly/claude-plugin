#!/usr/bin/env node
// SessionStart hook for the Orgiggly plugin (#1318, probe widened in #1353).
//
// Detect-and-guide only: if the user isn't ready to build an Orgiggly app yet,
// inject a one-line pointer to /getting-started. "Not ready" is two cases —
// the `og` CLI isn't on PATH, or it is but no credential has been stored yet
// (never signed in, or signed out again). It NEVER mutates PATH (a hook can't
// safely do that) and NEVER blocks or errors the session — worst case it prints
// nothing. Idempotent: once the CLI is installed and signed in it stays silent.
//
// Fail-open: any uncertainty (unreadable home, odd filesystem, missing env)
// greets rather than silently swallowing onboarding, and the probe never
// throws — a throwing SessionStart hook would degrade every session start.

import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { argv, env as processEnv, exit, stdin, stdout } from "node:process";
import { delimiter, join } from "node:path";
import { pathToFileURL } from "node:url";

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
 * Should we greet this user with a pointer to /getting-started?
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
    "The Orgiggly `og` CLI is not on your PATH yet. If you want to build an " +
    "Orgiggly app this session, run /getting-started once — it installs the " +
    "CLI, signs you in, and builds your first app.",
  noCredential:
    "The Orgiggly `og` CLI is installed but you're not signed in yet. If you " +
    "want to build an Orgiggly app this session, run /getting-started once — " +
    "it signs you in, claims your namespace, and builds your first app.",
};

const main = () => {
  try {
    // Drain stdin (the hook payload) so we don't leave the pipe hanging; we
    // don't need its contents.
    stdin.resume();
    stdin.on("data", () => {});
  } catch {
    // ignore
  }

  try {
    if (probeShouldGreet(homedir(), processEnv)) {
      stdout.write(
        JSON.stringify({
          hookSpecificOutput: {
            hookEventName: "SessionStart",
            additionalContext: cliOnPath(processEnv)
              ? GREETING.noCredential
              : GREETING.noCli,
          },
        }),
      );
    }
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

if (isEntrypoint()) main();
