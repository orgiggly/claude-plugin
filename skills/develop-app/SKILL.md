---
name: develop-app
description: "Build or change an app on Orgiggly with Claude Code. Use when the user wants to create a new app or add/modify/improve an existing one — e.g. 'build me a book-club app', 'create an app for my running club', 'add a schedule to my app', 'change the colours', 'my app should also track X'. Claude writes the config, validates it, and publishes it to orgiggly.com under the user's namespace via the og CLI. One skill for both creating and maintaining — you never have to decide which."
user-invocable: true
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - AskUserQuestion
---

# develop-app

Build and manage an app hosted on [orgiggly.com](https://orgiggly.com). **You**
(Claude Code) are the generation engine: you author the app's config JSON from
the schema reference, validate it, and publish it through the `og` CLI running as
the signed-in user. There is **no Orgiggly AI backend, no credits, and no
Anthropic key** on this path.

This is **one skill for creating and maintaining**. Don't ask the user whether
they're creating or updating — detect it (Step 2) and do the right thing.

## What an "app" is

An app is a tree of typed nodes (screens, tabs, subsections, content, forms,
data types, plugins, …) described by a single config JSON, published under
`{username}/{appname}` on orgiggly.com. You author it in **tree format**
(`_children` arrays) — nodes nested inline with their children — which the CLI
accepts directly.

## Prerequisites

The `og` CLI must be installed, on `PATH`, and signed in. Probe once before you
start — it answers all of that in one call:

```bash
og whoami
```

If it reports **not signed in** (exit 1), **not enrolled**, or **no namespace
claimed** — or if `og` isn't on PATH at all — tell the user to run
**`/getting-started`** first, and stop. That skill installs the CLI, signs them
in, and claims their namespace; it hands back here for the actual build.

Otherwise note the namespace it prints — that's the `{username}` in every app id
below — and carry on.

---

## Recommended setup — one folder per app, tracked in git

You don't have to work this way, but the smoothest way to use this skill mirrors
how the Orgiggly team develops its own apps. **Advise it; don't force it.**

- **One folder per app**, named for the app, holding everything about it:

  ```
  {appname}/
    config.json     # the app's config in tree format — the file you edit
    notes.md        # decisions, gotchas, anything worth remembering (optional)
    spec.md         # what the app is for: its screens, data types (optional)
  ```

- **Track that folder in git.** Then every change this skill makes is a reviewable
  diff you can read, share, or roll back — and your app's whole history lives
  alongside the live version on orgiggly.com.

The skill checks once whether the working directory is a git repo. **If it is**, it
commits a snapshot of the app **before** it changes anything and again **after** it
publishes — so the history reads "here's what the app was → here's what I changed".
**If it isn't**, it suggests `git init` once, then proceeds without git and just
leaves the files in the folder. Either way the app itself lives on orgiggly.com;
the folder is your local working copy and record.

---

## Step 1 — Parse intent

Establish two things from the user's request (and the conversation):

- **App id** — `{username}/{appname}`. If you only have a name, ask for the
  username (or infer it from a previous command). If the user is clearly starting
  fresh and hasn't named it, propose a slug from their description and confirm.
- **What they want** — the feature/change in plain language, or the whole app if
  it's new.

Never guess the username silently — it scopes where the app is published.

---

## Step 2 — Fetch the app (detect create vs maintain)

The app's folder is `{appname}/` in the current directory (see **Recommended
setup**). Create it and try to fetch the existing config into it — draft first,
then published:

```bash
mkdir -p {appname}
og fetch-org {username}/{appname} --draft --tree --pretty --output {appname}/config.json 2>/dev/null \
  || og fetch-org {username}/{appname} --tree --pretty --output {appname}/config.json
```

- **Fetch succeeds** → **MAINTAIN**: you'll edit the fetched tree.
- **Both fail (not found / exit 1)** → **CREATE**: you'll author a new config.

Do not ask the user which mode — the fetch result decides.

### Make sure it's in git (the "before" snapshot)

Check once whether the working directory is a git repo:

```bash
git rev-parse --is-inside-work-tree 2>/dev/null
```

- **It is a repo** → on **MAINTAIN**, commit the freshly-fetched config as a
  baseline, so the change you're about to make shows up as a clean diff later:
  ```bash
  git add {appname}/config.json && git commit -m "chore({appname}): snapshot config before changes"
  ```
  (On **CREATE** there's nothing to snapshot yet — the "after" commit in Step 6
  captures the first version.)
- **It is not a repo** → suggest it **once** — "`git init` here so you can track
  your app's history and see diffs" — then carry on without git. Don't nag again
  this session.

---

## Step 3 — Load the schema

You author config from the generated reference docs. Pull whichever you need:

```bash
og reference types       # every node type, its fields, and codecs — always read this
og reference formula     # formula language: operators, $index/$data/etc., built-ins
og reference functions   # host / callable-datasource functions
```

`og reference` with no topic lists what's available. Read `types` before
authoring anything; read `formula`/`functions` when the feature needs dynamic
labels, computed values, or a datasource. This is your source of truth for the
schema — prefer it over guessing field names.

---

## Step 4 — Author or edit the config

**CREATE**: write `{appname}/config.json` in tree format from scratch, guided by
the schema. The config is an **envelope** with these required top-level fields:

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": { "type": "app", "name": "{appname}", "authMode": "public", "deployMode": "prod", "_children": [ /* screens */ ] },
  "objectTypes": { "type": "folder", "name": "", "_children": [ /* objectType nodes */ ] },
  "objectInstances": {},
  "plugins": {}
}
```

`versionId` and `users` are easy to forget and validate-org flags both as
critical — include them. Inside `appConfig`, a node is
`{ "type": "...", "name": "...", ...fields, "_children": [ ... ] }`; child order
in `_children` is render order. Top-level nav is **screens** (there is no `tab`
node type).

```json
{
  "type": "tab",
  "name": "schedule",
  "label": "Schedule",
  "_children": [
    { "type": "content", "name": "intro", "htmlTemplate": "@`<h1>This week</h1>`" },
    { "type": "subsection", "name": "sessions", "isRepeating": true,
      "data": { "dataType": "Session" },
      "_children": [
        { "type": "content", "name": "card", "htmlTemplate": "@`<div>${title}</div>`" }
      ]
    }
  ]
}
```

**MAINTAIN**: edit the fetched `{appname}/config.json` — append nodes to the
right `_children` array, change fields in place. Keep the user's existing
naming/style; make the smallest change that delivers the request.

Formula fields are prefixed with `@`. Static value: `@"playlist"`. Dynamic:
`@episodes[$index].youtubeId`. Consult `og reference formula` for the variables
and functions available.

Keep it **domain-agnostic** — there are no hardcoded schemas or app templates
here; everything comes from the request + the schema reference.

---

## Step 5 — Validate (loop until clean)

```bash
og validate-org {appname}/config.json
```

Read the findings. **Fix every `critical` finding and re-run** until validation
passes with no critical findings (exit 0). Address warnings where they're clearly
right. Don't publish a config that still has critical findings.

---

## Step 6 — Publish (as a draft first)

Publish to a draft so the user reviews before it goes live.

```bash
# CREATE
og create-org {username} {appname} --data "$PWD/{appname}/config.json" --draft

# MAINTAIN
og update-org {username}/{appname} --data "$PWD/{appname}/config.json" --draft
```

(The creator identity and org association come from the signed-in session — no
extra step.) Then give the user a tappable, phone-friendly preview link on its
own line so it renders as a link:

`**[📱 Preview the draft →](https://orgiggly.com/{username}/{appname}?preview=draft)**`

Use the **qualified** `/{username}/{appname}` path — a bare namespace alias does
not thread `?preview=draft` and would silently show the published version.
Identity-gated content ("your data" panels) needs the user signed in on that page
too — the preview param controls which config loads; sign-in controls identity.

When the user is happy with the draft, promote it to live:

```bash
og promote-draft {username}/{appname}
```

### Check the new version into git (the "after" commit)

Once the change is published (draft is fine — the folder is your working copy),
record it if the working directory is a git repo (detected in Step 2):

```bash
git add {appname}/config.json && git commit -m "feat({appname}): {short description of the change}"
```

Use a message that names what changed (e.g. `feat(bookclub): add a schedule
screen`). Paired with the Step 2 "before" snapshot, this gives a clean
before→after diff of the app. If the user later edited the app in the web admin
before promoting, re-fetch first so the commit captures the real live state:

```bash
og fetch-org {username}/{appname} --tree --pretty --output {appname}/config.json
git add {appname}/config.json && git commit -m "chore({appname}): sync config after admin edits"
```

If the working directory isn't a git repo, skip this — the updated
`{appname}/config.json` is still on disk in the app folder. Optionally jot what
you did and why in `{appname}/notes.md` so the next session (yours or Claude's)
has the context.

### Logo (optional)

A logo isn't in the config (it's stored separately). To set one, the user
supplies an image file:

```bash
og update-org-logo {username}/{appname} --file ./logo.png
```

AI logo generation is **not** available on this CLI — only `--file`.

---

## Step 7 — Confirm

Tell the user what changed and where it lives:

- Live app: `https://orgiggly.com/{username}/{appname}`
- Draft preview (if not yet promoted): the `?preview=draft` link above
- Local record: `{appname}/config.json` (and the git commit, if you made one)

Summarise the nodes/features you added or edited in one or two lines.

---

## Guardrails

- **One CLI, running as the user.** Every command is subject to the security
  rules; there's no admin key. Don't reach for commands outside the CLI's public
  surface (see `og --help`).
- **Never publish an invalid config** — Step 5 must be clean first.
- **Draft before live** — default to `--draft`; only promote on the user's say-so.
- **Smallest change that works** when maintaining — don't rewrite an app to add a
  tab.
- **Git is advised, never required.** Offer the folder + commit convention; if the
  user isn't in a repo (or declines), proceed anyway — the app lives on
  orgiggly.com regardless, and the folder is just their local working copy.
