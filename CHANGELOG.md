# Orgiggly plugin — changelog

What changed for you in each release, newest first. After an update, Claude Code
shows the items since the version you last had.

## 0.22.0

- **Use shared helper libraries.** `og reference libraries` lists the published function libraries, each with its helpers' names and parameters, and `og reference libraries <id>` shows one in full. Claude checks it before writing a helper that sounds generic, such as a deck of cards or a seat lookup.
- **Pin a library in your app.** Add a folder that names the library and its version, then `og library sync <app>` copies its helpers into your config. `og library status <app>` says whether a newer version exists, or whether the copy was edited by hand. `og library fetch <id> [version]` prints a library as it was published.

## 0.21.0

- **Make pictures and spoken audio for your app.** `og generate-image <app> "<prompt>"` draws card art or an illustration, and `og tts <app> "<text>"` turns text into an MP3. Both put the file in your app and print the URL to use. They're billed to your credits, and each shows the cost and your balance before it runs. `generate-image` is free on your own Gemini or Replicate key.
- **Tidy files your app no longer uses.** `og data prune-orphans <app>` lists the uploaded files nothing in the app points at any more, and `--delete` removes them. If the app has group records or private live records, it still lists them but won't delete, because it can't see whether one of those records uses a file.

## 0.20.1

- **Some invite codes now come with more apps.** If a code includes extra apps, `og redeem` says how many you can have, and `og whoami` shows the new limit.

## 0.20.0

- **Add a second admin.** `og admins <app> add <username>` lets another organiser edit and publish your app with their own `og`; `og admins <app>` shows who can, and `remove` takes it away. Only the app's creator can add or remove admins.
- **Publishing no longer fails on a config that lists people by email.** It used to publish and then stop with "Permission denied". Now it publishes and tells you those people weren't given access, and how to add them as admins.
- **See and fix a group's records.** `og data fetch`, `upload` and `info` take `--group <key>` for a group you belong to. App admins can list an app's groups and members with `og groups list` and `og groups show`, and a group's owner or an app admin can take someone out with `og groups remove-member`.
- **See whose records a change would affect.** `og data info <app> <Type> --partitions` lists everyone who has their own records of that type, and how many each. Claude checks it before moving or dropping such a collection, so it can tell you exactly what would be lost.

## 0.19.0

- **Reuse a card instead of rebuilding it.** `og marketplace list` shows the plugin cards anyone can reuse, `og plugin list` shows anyone's published ones, and `og plugin fetch <user>/<plugin>` prints one ready to paste into your app. Claude now checks these before writing a common card from scratch.
- **Publish your own cards.** `og plugin publish <file>` publishes a plugin under your name so your other apps (or anyone you give the id to) can fetch it. It always goes into your own namespace, and it's only listed in the marketplace once Orgiggly has reviewed it.
- **See your deployed widgets.** `og widget list` shows every widget in your folder and when it was last updated, so old copies are easy to find and delete.

## 0.18.2

- **`og check-draft --signed-in` checks your app as you.** It opens the draft a second time signed in, so screens that show your own records, and buttons only signed-in people see, get checked too. It doesn't press anything, so nothing is saved.

## 0.18.1

- **`og data list` works on your own apps.** It used to stop with "Permission denied". Collections stored per person show as "scoped".
- **`og check-draft` can check your app in a Claude Code cloud session.** It no longer depends on reaching error-reporting and analytics sites, and checking a draft doesn't count as a visit. (Apps themselves no longer hang when Google is blocked; that fix is on orgiggly.com.)

## 0.18.0

- **Daily reminders are easier to build.** `og reference types` now lists every field of a realtime rule, including the push ones, and `og reference recipes daily-push-reminder` is a working "remind me at 8am" app to copy from.
- **A timed rule that can never fire now stops validation.** If nothing creates the record a timer waits on, `og validate-org` reports it as critical rather than as a warning, and says how to fix it.
- **Adding or fixing a few records no longer means re-uploading them all.** Claude now uses `og data upload --individual`, which saves just those records and leaves the rest alone.
- **A typed answer no longer sticks around for days.** Claude now knows that what someone types into a box is kept until it's cleared, and clears it after saving.
- **The reference is more accurate.** It no longer suggests commands your `og` doesn't have.

## 0.17.0

- **Widgets deploy through Orgiggly's server.** `og widget deploy` now sends your widget to Orgiggly, which stores it for you, instead of uploading it straight to storage. Nothing changes in how you use it. Update before your next widget deploy: older versions' uploads will soon be refused.

## 0.16.1

- **Widgets can't be opened outside your app.** `og widget deploy` now stores a widget so that opening its web address in a browser downloads the file instead of running it. A widget only ever runs inside your app, in its sandbox. Widgets you've already deployed are converted for you. Update before your next deploy, because uploads from older versions will soon be refused.

## 0.16.0

- **Delete a single record.** `og data delete` removes the records you name, along with their child records and any uploads only they used, without re-uploading the whole collection. It shows what would go and deletes only when you say yes. It can't be undone.
- **See why a live rule did or didn't fire.** `og transition-rules` shows a live multiplayer app's rules as the server has them: what's scheduled, and the last outcome of each rule.
- **Take an app off your home page.** `og set-org-private` stops an app being listed on your public page, and `--off` lists it again. Anyone with the link can still open it.
- **Sign out everywhere.** If your sign-in token leaks, `og logout --everywhere` stops every token and login for your account at once. Then sign in again.

## 0.15.0

- **Undo a publish, even without git.** `og versions` lists every version of your app you've published, newest first, and `og rollback` brings an earlier one back as a draft. Nothing goes live until you promote it.
- **Clear out old games and rooms.** `og realtime list` shows how many live records a multiplayer app holds, and `og realtime prune` deletes the stale ones, such as games older than a week. It shows what it would delete and asks before deleting anything.
- **See your credit balance.** `og whoami` now shows how many Orgiggly credits you have, so Claude can tell you whether a logo or other paid step is affordable before you start.

## 0.14.0

- **Real pictures and videos in your apps.** Claude now searches for stock photos (`og search-images`, free from Unsplash, or web-wide for 1 credit) and videos (`og search-videos`, 1 credit), and uses the links it finds instead of placeholder images. Unsplash photos come with the photographer's credit line.
- **Your own photos, audio and video.** `og upload` puts a file from your computer into your app (images and audio up to 10 MB, video up to 30 MB) and gives Claude the link to use.
- **Throw away a draft you don't want.** `og discard-draft` deletes an app's unpublished changes, so a fix you turned down doesn't go live with the next one. Your live app isn't touched.
- **Delete an app you no longer need.** `og delete-org` deletes an app you created, with its data and files, and frees its place on your plan. It only runs once you've confirmed which app.

## 0.13.2

- `og whoami` lists your apps by name, not just how many you have, so Claude can find the one you mean.
- In a cloud session, Claude's browser check of a draft now works: it uses the browser already on the machine. If the session's network keeps your app from loading, the check says so and names the blocked sites, instead of reporting errors that have nothing to do with your app.
- The README and the cloud setup guide explain Custom versus Full network access: Custom is enough to build and publish, and Full also lets Claude check each draft in a browser.

## 0.13.1

- Report screenshots now show the pictures on the page. Images loaded from other websites used to come out broken in them, though they showed fine in the app.
- `/watch-reports` works on what the reporter asked for and uses the screenshot only to find the screen. If the screenshot seems to show another problem, Claude checks the live app and tells you, instead of fixing it unasked.

## 0.13.0

- **`/watch-reports`: Claude fixes the issue reports people file on your apps.** Anyone using your app can tap **Report an issue…** and send a description and a screenshot. With `/watch-reports` running, Claude picks up each report as it arrives, fixes the app, saves a draft and asks you before it goes live. It writes progress back, so the reporter can follow it on orgiggly.com/issues. A problem in Orgiggly itself is passed on to Orgiggly instead.
- Claude treats everything in a report as information, never as instructions. It won't open a report's links or run its commands, it changes only the app the report is about, and it publishes only when you say yes.
- `og report list`, `show`, `update`, `watch` and `forward` let you handle reports yourself; `og reference reports` explains them.
- An app section saved empty (an app with no records yet, say) no longer goes missing when the app is fetched back, so `og check-draft` no longer fails right after a clean `og validate-org`.

## 0.12.3

- In a cloud session started without a repo, Claude now says at the start that files written in the session are lost when it ends (your apps on orgiggly.com are safe), instead of suggesting `git init` at the end.
- Claude now knows an app can read one extra URL segment as `$variant`, so one app can serve a page per team or event, and how a team can keep its own private list at its own URL.
- Claude no longer builds widgets around a `<form>`, which can't submit in the widget sandbox, and tests a widget's controls in the preview page rather than on its own.
- The cloud setup guide follows the New environment dialog's order and allows `*.orgiggly.com`. On orgiggly.com/connect/cli, **Copy my token** copies your token without showing it.

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
