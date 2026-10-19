# Orgiggly plugin — changelog

What changed for you in each release, newest first. After an update, Claude Code
shows the items since the version you last had.

## 0.12.2

- In a cloud environment, the "new version is out" message now tells you how to update there: change the setup script's comment line and start a new session. The README explains why (the environment reuses its first setup) and what the `claude/…` branches in your repo are.

## 0.12.1

- In a cloud session, a change that only updates an app's widget (a custom page such as a game board) is now saved to `main` as well, like any other published change.

## 0.12.0

- **In a Claude Code cloud environment, Claude now saves each published change to your repo's `main` branch**, not just to the session's own branch. Every new session starts from `main`, so your apps are always there next time. If `main` is protected, Claude opens a pull request and gives you the link.
- In a cloud session, Claude tells you its own browser check couldn't load the page and asks you to open the preview once, instead of reporting blocked trackers as errors.
- Behind a proxy, `og` no longer prints Node's "EnvHttpProxyAgent is experimental" warning before every command.
- The README's cloud section now explains how to pick your repo and give the Claude GitHub App access to a private one.
- When you already have an app, `/orgiggly` asks whether to change it or start a new one, without bringing up plan limits first.

## 0.11.1

- The README's cloud environment section now links to a step-by-step guide with copy buttons, and warns that on a Team or Enterprise Claude plan an Owner must turn on the GitHub connector before cloud sessions work.

## 0.11.0

- **Use Orgiggly from a Claude Code cloud environment**, with nothing installed on your own computer. The README walks through it: a two-line setup script, your sign-in token from orgiggly.com/connect/cli as `OG_TOKEN`, and the list of domains to allow. In a cloud session Claude pushes your app's folder after each publish, so your work is still there next session.
- If `og` can't reach one of the hosts it needs (a sandbox or company network blocking it), it now stops within seconds and names the domain to allow, instead of hanging or printing an error dump.
- `/orgiggly` no longer asks you to set up the `og` command: Claude Code makes it available as soon as the plugin is installed.

## 0.10.0

- You can now use Orgiggly where no browser can open, such as a Claude Code cloud environment or a server over SSH. Get a token from orgiggly.com/connect/cli (or run `og token` where you're already signed in) and set it as the `OG_TOKEN` environment variable: every session there starts signed in. `og login --token` stores one instead. Treat the token like a password.

## 0.9.0

- Claude can now **test your app's logic** before publishing. It writes small checks next to your app (does the Add button save the right record? does the total add up? is the edit button hidden when you're signed out?) and runs them with `og test` on your machine, in about a second, with nothing to install. You get one line — "12 checks pass" — and the checks stay with the app, so the next change proves it broke nothing.

## 0.8.0

- New: `/orgiggly:feedback` tells us how your test run went. It asks three quick questions, shows you exactly what it would send (your answers, plus your Orgiggly sessions with home folders, email addresses and keys removed), and sends nothing until you say yes. You can send just your answers instead.

## 0.7.0

- Your apps can now have their own **widgets**: interactive pieces such as a map you can pan and zoom, a drawing canvas, a game or a quiz that remembers where you are. Claude writes the widget as a small web page, and `og widget deploy` puts it online in a space only you can change. `og widget delete` removes one.
- Before deploying, Claude tests the widget on your machine in a preview page that shows it at phone and desktop widths. When you're fine-tuning a layout, it can add sliders to that page and build in the settings you like.
- `og reference widgets` explains when a widget is worth it and how one talks to your app.

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
