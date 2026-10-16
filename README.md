# Orgiggly — Claude Code plugin

Build and manage apps on [orgiggly.com](https://orgiggly.com) from Claude Code.
Describe the app you want; Claude writes the config and publishes it live under
your own name (`orgiggly.com/<name>/…`) — with auth, realtime data, storage and hosting built in.

## Install

Inside Claude Code:

```
/plugin marketplace add orgiggly/claude-plugin
/plugin install orgiggly@orgiggly
/orgiggly
```

`/orgiggly` runs the on-ramp: it checks Node (≥ 22), puts the `og` command on
your PATH, signs you in, picks your name on Orgiggly, and hands off to building your
first app — stopping at whichever step you've already done. Safe to re-run at
any point; it picks up where you left off.

To update later: `/plugin marketplace update orgiggly`, then
`/plugin update orgiggly@orgiggly`, and restart Claude Code. The plugin checks
once a day and tells you when a new version is out, and after an update it
shows what's new ([full history](CHANGELOG.md)).

**No invite code?** Email dave@orgiggly.com with a line about what you want to
build. You don't need one to get started — the code records how you found us,
it doesn't unlock anything.

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

- **`getting-started`** — the on-ramp: install → sign in → invite code →
  your name → your first app. Type `/orgiggly` to start it, or to resume —
  it's idempotent, so running it again is always safe.
- **`develop-app`** — the one skill for both creating and maintaining an app.
  It figures out whether the app already exists and does the right thing:
  fetch-if-exists → author/edit config → `validate-org` → `create-org` /
  `update-org`. You never have to decide "am I creating or maintaining?".

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
```

## Reference

- Product docs and the full node-model reference: [orgiggly.com/docs](https://orgiggly.com/docs)
- Showcase of apps built this way: [orgiggly.com](https://orgiggly.com)
- Questions, bugs, ideas: [github.com/orgiggly/claude-plugin/issues](https://github.com/orgiggly/claude-plugin/issues)
  or dave@orgiggly.com

This repository is a published snapshot of the plugin; see [LICENSE](./LICENSE)
for terms.
