---
name: update
description: "Update the Orgiggly plugin to its newest version without leaving the session. Fetches the new version, then has the user type /reload-plugins to switch to it. In a Claude Code cloud session, explains the setup-script route instead. Use when the user says 'update orgiggly', 'update the plugin', 'get the new version', 'a newer plugin is out', or references /orgiggly:update, or after the start-of-session line says a newer Orgiggly plugin is out."
user-invocable: true
allowed-tools:
  - Bash(printenv CLAUDE_CODE_REMOTE)
  - Bash(claude plugin marketplace update orgiggly)
  - Bash(claude plugin update orgiggly@orgiggly)
---

# update

Moves the user to the newest Orgiggly plugin without restarting Claude Code. Two
commands fetch the new version onto disk; the running session switches to it when
the **user** types `/reload-plugins`. You can't type that for them: slash commands
come only from the user.

## Steps

1. **Check for a cloud session first.** Run `printenv CLAUDE_CODE_REMOTE`. If it prints
   `true`, don't run the update commands. A cloud session can't switch to a new version
   while it runs (`/reload-plugins` isn't available there), and the next session starts
   from a saved copy of the environment's setup anyway. Tell the user instead: edit the
   environment's setup script, change its comment line (bumping the number is enough),
   save, and start a new session, which then installs the new version. Then stop.

2. **Fetch the catalogue, then the plugin.** Run them one after the other, exactly as
   written, and stop at the first failure:

   ```bash
   claude plugin marketplace update orgiggly
   claude plugin update orgiggly@orgiggly
   ```

   - The second prints either `updated from <old> to <new>` or `already at the latest
     version (<v>)`. If it's already the latest, say so in one line and stop.
   - If either fails, quote its error line. A network error usually means this
     machine can't reach `github.com`. Then give the slash-command route instead:
     `/plugin marketplace update orgiggly`, then `/plugin update orgiggly@orgiggly`.
   - It ends with "Restart to apply changes". Ignore that: step 3 replaces the
     restart.

3. **Ask the user to type `/reload-plugins`.** Say, in one line, that version `<new>` is
   downloaded and that typing `/reload-plugins` switches this session to it. Their
   conversation is kept, and the plugin's skills, commands, hooks and `og` CLI all
   become the new version. Until they type it, this session keeps running `<old>`.
   If they say `/reload-plugins` isn't available (it isn't over a remote connection),
   the new version is already installed: their next Claude Code session uses it.

4. **Point at what's new.** The next session start lists what changed since `<old>`.
   The full history is
   [CHANGELOG.md](https://github.com/orgiggly/claude-plugin/blob/main/CHANGELOG.md).

## Don't

- Don't run any other `claude plugin` command (install, uninstall, marketplace add or
  remove). Removing the marketplace uninstalls the plugin.
- Don't tell the user to restart Claude Code. `/reload-plugins` does the same job and
  keeps the conversation.
