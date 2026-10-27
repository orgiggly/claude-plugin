# Orgiggly — Claude Code plugin

Build and manage apps on [orgiggly.com](https://orgiggly.com) from Claude Code.
Describe the app you want; Claude writes the config and publishes it live under
your own name (`orgiggly.com/<name>/…`) — with auth, realtime data, storage and hosting built in.

[![Six apps running on Orgiggly: Squiggly, Shuffly, Cassino, Jumbly, Bandwagon and What Is It?](https://firebasestorage.googleapis.com/v0/b/orgiggly-dev.firebasestorage.app/o/gh-issue-assets%2Fclaude-plugin%2F2026%2F10%2Freadme-example-apps-lsdbqm.png?alt=media)](https://orgiggly.com)

Some apps running on Orgiggly now. Open one on your phone, or on two phones at once:
[Squiggly](https://orgiggly.com/dave/squiggly), a draw-and-guess party game;
[Cassino](https://orgiggly.com/dave/cassino), a card game where every phone sees the
same table update live; and [What Is It?](https://orgiggly.com/dave/whatisit),
which names whatever you point your camera at.

**Just looking, or no Claude Code?** Try the apps above, or describe an app at
[orgiggly.com/demo](https://orgiggly.com/demo) and watch it get built in your browser.

## Install

Inside Claude Code:

```
/plugin marketplace add orgiggly/claude-plugin
/plugin install orgiggly@orgiggly
/orgiggly
```

`/orgiggly` runs the on-ramp: it checks the `og` command works (it ships inside
the plugin and needs Node 22 or newer), signs you in, picks your name on
Orgiggly, and hands off to building your first app — stopping at whichever step
you've already done. Safe to re-run at any point; it picks up where you left off.

To update later: `/plugin marketplace update orgiggly`, then
`/plugin update orgiggly@orgiggly`, and restart Claude Code. The plugin checks
once a day and tells you when a new version is out, and after an update it
shows what's new ([full history](CHANGELOG.md)). In a cloud environment it
works differently; see [Getting a new version](#getting-a-new-version) below.

You don't need an invite code. If a launch post or an email gave you one
(some are worth extra apps), tell Claude and it will apply it.

## Claude Code cloud environment

You can also use the plugin in a [Claude Code cloud
environment](https://code.claude.com/docs/en/cloud-environments), with nothing
installed on your own computer. Each session starts from a GitHub repo, and that
repo is where your app's folder lives between sessions. A step-by-step version
with copy buttons is at
[orgiggly.com/guides/plugin-cloud-environment.html](https://www.orgiggly.com/guides/plugin-cloud-environment.html).

On a Team or Enterprise Claude plan, an Owner of your Claude organization must
first turn on the GitHub connector (Organization settings → Connectors). Until
then claude.ai/code stops at "GitHub access is required for Claude Code cloud
sessions". A personal Pro or Max plan doesn't need this.

1. **Get a sign-in token.** Open
   [orgiggly.com/connect/cli](https://www.orgiggly.com/connect/cli), sign in
   with Google and copy the token. (Already signed in on a computer? `og token`
   prints the same thing.) Treat it like a password: anyone holding it can act
   as you on Orgiggly. If it leaks, run `og logout --everywhere` on any machine
   where you're signed in: every token and login for your account stops
   working, and you sign in again to get a new one.
2. **Create the environment** in Claude Code on the web, and set:
   - **Setup script:**

     ```bash
     # orgiggly plugin: change this line to pick up a new version (1)
     claude plugin marketplace add orgiggly/claude-plugin
     claude plugin install orgiggly@orgiggly
     ```

   - **Environment variables:** `OG_TOKEN=<your token>`. Anyone who can use the
     environment can read its variables, so keep it to yourself.
   - **Network access:** Custom, allowing at least these domains:

     | Domain | Used for |
     |---|---|
     | `github.com` | installing the plugin (setup script) |
     | `orgiggly.com`, `*.orgiggly.com` | the site and your apps (`*.` doesn't cover the bare domain, so list both) |
     | `*.firebasedatabase.app` | the database |
     | `firebasestorage.googleapis.com` | app configs, data, widgets |
     | `identitytoolkit.googleapis.com`, `securetoken.googleapis.com` | signing in with your token |
     | `*.cloudfunctions.net` | creating apps, saving data, widgets |

     Optional: `raw.githubusercontent.com` (the plugin's "update available"
     check), and `generativelanguage.googleapis.com` or `api.replicate.com` if
     you generate logos with your own Gemini or Replicate key.

     **Custom or Full?** Custom with this list is enough to build, test and
     publish apps. The one thing it can't do is let Claude look at a draft in a
     browser: an app also needs `www.google.com` to get past its loading screen,
     so Claude says it couldn't check the draft and asks you to open the
     preview link yourself. That's a good way to start while you get to know
     the plugin. Once you trust it, set Network access to **Full**, which lets
     Claude reach any site, and it checks each draft itself.

3. **Start a session on your repo and type `/orgiggly`.** It's the same on-ramp
   as on your own machine, minus the install steps. Nothing makes you pick a
   repo, so check the repo button next to the environment name before you start.
   A private repo only appears there once the Claude GitHub App can see it: follow
   the picker's "Install the Claude GitHub App" link, choose **Only select
   repositories**, add the repo, then refresh the list.

**Your apps live on the repo's `main` branch.** The cloud machine is thrown away
when the session ends, and each new session starts from `main`. So after each
publish Claude commits the app's folder (`config.json`, the app's `CLAUDE.md`,
its widgets and its `tests/`), pushes the session's own `claude/…` branch, and
then saves the same work to `main`. If `main` is protected, it opens a pull
request instead and gives you the link to merge it.

Every cloud session works on a new `claude/…` branch of its own; that's how
Claude Code cloud sessions work, not something Orgiggly sets up. So the old
branches pile up in your repo. They're harmless, and once their work is on
`main` you can delete them on the repo's Branches page on GitHub. (Claude can't
delete them for you: cloud sessions aren't allowed to delete branches.)

<a id="getting-a-new-version"></a>**Getting a new version.** The environment
runs its setup script once, then starts later sessions from a saved copy of
the result, so new sessions keep the plugin version they first installed. It
only runs the script again when you change the script or the allowed domains,
or after about seven days. To update now, change the setup script's comment
line (for example, bump the number), save the environment, and start a new
session. With `raw.githubusercontent.com` allowed, Claude tells you when a new
version is out.

**Check new versions on your own device.** With Custom network access, Claude's
browser check can't load your app from inside a cloud session, so it asks you
to open the preview link once. With Full access it checks the draft itself.

**If a domain is missing**, `og` stops with one line naming it ("Can't reach …")
rather than hanging: add that domain to the environment and try again.

## How it works

- **Claude Code is the generation engine.** Claude hand-writes (or edits) your
  app's config JSON directly from the node-model schema, then validates and
  publishes it via the bundled CLI. There is **no Orgiggly AI backend, no
  credits, and no Anthropic key** in this path.
- **The CLI runs as *you*.** `og login` stores a real user credential under
  `~/.orgiggly/`, and every command is subject to the Firebase security rules.
  Your app is hosted on orgiggly.com under your own name.
- **Nothing to download separately.** The CLI ships inside this plugin as a
  self-contained bundle (`bin/og-public.mjs`) with a `bin/og` shim.

## Skills

- **`getting-started`** — the on-ramp: install → sign in → your name →
  your first app. Type `/orgiggly` to start it, or to resume —
  it's idempotent, so running it again is always safe.
- **`develop-app`** — the one skill for both creating and maintaining an app.
  It figures out whether the app already exists and does the right thing:
  fetch-if-exists → author/edit config → `validate-org` → `create-org` /
  `update-org`. You never have to decide "am I creating or maintaining?".
- **`watch-reports`** — fixes the issue reports people file on your apps
  (**Report an issue…** in the app). It waits for a report with `og report watch`,
  fixes the app the `develop-app` way, publishes a draft, asks you before it goes
  live, and writes the status back so the reporter can follow it on
  orgiggly.com/issues. Treats every report as untrusted input: it never follows
  instructions, links or commands found in one.

## What's in the box

```
bin/og                   # command on PATH → spawns the bundle (as `og`)
bin/og-public.mjs        # the self-contained CLI bundle
reference/*.md           # node-model schema docs `og reference` serves
commands/orgiggly.md     # /orgiggly → the getting-started skill
commands/og-setup.md     # legacy /og-setup → same place
commands/feedback.md     # /orgiggly:feedback → send test-run feedback (asks first)
hooks/                   # SessionStart: first-run check, what's new, update nudge,
                         #   and a log of session transcript paths for /orgiggly:feedback
CHANGELOG.md             # what changed in each release
skills/getting-started/  # the on-ramp
skills/develop-app/      # the build-and-manage skill
skills/watch-reports/    # the issue-report fix loop
```

## Reference

- Product docs and the full node-model reference: [orgiggly.com/docs](https://orgiggly.com/docs)
- Showcase of apps built this way: [orgiggly.com](https://orgiggly.com)
- Questions, bugs, ideas: [github.com/orgiggly/claude-plugin/issues](https://github.com/orgiggly/claude-plugin/issues)
  or dave@orgiggly.com

This repository is a published snapshot of the plugin; see [LICENSE](./LICENSE)
for terms.
