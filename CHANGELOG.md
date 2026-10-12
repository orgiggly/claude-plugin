# Orgiggly plugin — changelog

What changed for you in each release, newest first. After an update, Claude Code
shows the items since the version you last had.

## 0.6.2

- A live or multiplayer app's rules can now be tested before you publish. Claude writes short scenarios (players join, a move is made, ten minutes pass) and `og sim` runs them through the same rules engine the live app uses, on your machine. A rule that would never fire shows up as a failed check instead of a broken game.

## 0.6.1

- `og data upload` saves faster: it now reaches Orgiggly's server in Europe, next to where your app's data lives.

## 0.6.0

- A record type can be owner-only: set `writeAccess: "admins"` and only the app's creator and its admins can save its records, while everyone can still read them. Use it for a public collection, portfolio or results page that only you should edit.
- `$isOrgAdmin` tells a formula whether the visitor is the app's creator or an admin, so the app can hide the edit controls from everyone else.
- Saves from your apps and from `og data upload` now go through Orgiggly's server, which checks who is saving and records it truthfully.
- `og data consolidate` is gone: a type's records are folded back into one file automatically as they're saved.

## 0.5.2

- Apps no longer have a dev/prod `deployMode`. Each data block's `source` decides where it reads and writes: `embedded` stays on the device, while `storage` and `realtime` are live. An older app that still carries the setting keeps working, because it's ignored.
- Realtime and group script calls now always run. Before, they silently did nothing in an app set to `"dev"`.
- The bundled `og` command and the reference docs are updated with the latest platform changes.

## 0.5.1

- The bundled `og` command and the realtime-apps reference are updated with the latest platform changes.

## 0.5.0

- After the plugin updates, you see what's new since the version you last had.
- Once a day the plugin checks for a newer version and tells you how to update. Set `ORGIGGLY_PLUGIN_UPDATE_CHECK=0` to turn this off.
- Claude looks at a few apps on the Orgiggly showcase before building yours, and borrows their structure.
- Each app keeps its own `CLAUDE.md` with notes and a change log, which Claude reads before every edit.
- Generators and data for an app live in the app's own folder, so you can re-run them later.
- Claude checks a published draft against its real data and in a signed-out browser before handing it to you.
- `og whoami` shows how many apps your plan allows, and Claude checks it before starting a new one.
- New logos can be generated with your own Gemini or Replicate key (`OG_GEMINI_API_KEY` / `OG_REPLICATE_API_TOKEN`), with no Orgiggly credits.
- Clearer guidance on who can see and change your app's data, and a safe way to move existing data between per-user and shared storage.
- More reference docs for Claude: ready-made recipes, common pitfalls, a glossary, flows and realtime apps.
- Sign-in is smoother: Claude runs `og login` for you and `/orgiggly` picks up where you left off.

## 0.4.0

- `og edit-org` changes an existing app by editing only the parts a request needs, and saves the result as a draft for you to review.

## 0.3.0

- `og outline` prints a compact summary of any app's structure, at the level of detail you ask for.

## 0.2.0

- First public release: install from `orgiggly/claude-plugin`, sign in with `og login`, and build and publish apps with `/orgiggly`.
