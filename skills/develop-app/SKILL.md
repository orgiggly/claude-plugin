---
name: develop-app
description: "Build or change an app on Orgiggly with Claude Code. Use when the user wants to create a new app or add/modify/improve an existing one — e.g. 'build me a book-club app', 'create an app for my running club', 'add a schedule to my app', 'change the colours', 'my app should also track X'. Claude writes the config, validates it, and publishes it to orgiggly.com under the user's own name with the `og` command. One skill for both creating and maintaining — you never have to decide which."
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
the signed-in user. Building the app uses **no Orgiggly AI backend, no credits,
and no Anthropic key**. The one exception is a generated logo, which is
optional and spends the user's own Orgiggly credits, or their own Gemini or
Replicate key if they've set one (see **Logo**, Step 6).

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
claimed** — or if `og` isn't on PATH at all — tell the user to type
**`/orgiggly`** first, and stop. That sets up `og`, signs them in, and picks
their name on Orgiggly (the `<name>` in `orgiggly.com/<name>/…`); it hands back
here for the actual build.

Otherwise note the namespace it prints — that's the `{username}` in every app id
below — and the **`apps:`** line, then carry on.

### The app limit — check it before building a NEW app

`apps:` reads `1 of 1 (free plan)`, `2 of 5 (paid plan)`, `1 of 3 (free plan,
raised to 3)` or `4 (unlimited)`. When it reads **`N of N`** (used equals limit),
the user can't create another app — `og create-org` will refuse it. Changing an
app they already have is unaffected.

So if the request is for a **new** app (Step 1 makes that plain, or Step 2's
fetch finds nothing) and they're at the limit, say so **before writing any
config**, in the same message where you'd start the build:

> You're on the free plan, which includes 1 app, and you already have one. A
> few options:
> • change your existing app, or add this as a new screen in it
> • upgrade — the Upgrade button on orgiggly.com/admin (£10/month, up to 5 apps)

Let them choose. For a paid plan or a raised limit, drop the upgrade option and
offer "email dave@orgiggly.com to raise it" instead. Never build a whole app the
platform is going to refuse.

---

## Recommended setup — one folder per app, tracked in git

You don't have to work this way, but the smoothest way to use this skill mirrors
how the Orgiggly team develops its own apps. **Advise it; don't force it.**

- **One folder per app**, named for the app, holding everything about it:

  ```
  {appname}/
    config.json     # the app's config in tree format — the file you edit
    CLAUDE.md       # the app's memory: what it's for, its data, how to regenerate, changes
    spec.md         # what the app is for: its screens, data types (optional)
    scripts/        # anything that GENERATES config.json or its data (gen.mjs, fetch.py)
    data/           # fetched or hand-kept inputs those scripts read
  ```

- **`{appname}/CLAUDE.md` is the app's memory, and this skill keeps it.** Claude
  Code loads a `CLAUDE.md` by itself whenever it works in that folder, so
  whatever goes in it reaches every later session with nothing to remember. The
  skill writes it when it creates the app and adds to it on every change (Steps
  2 and 6). Keep it short and written for Claude: facts the next session needs,
  not a diary.
- **Several apps in one folder?** Suggest, once, a one-line `CLAUDE.md` beside
  the app folders naming them and the user's Orgiggly name ("Apps for
  orgiggly.com/{username}: bookclub/, runs/"). Don't write it unasked.
- **A task the user repeats** ("update the results every week") can become its
  own skill at `.claude/skills/{appname}-{verb}/SKILL.md`, which Claude Code
  finds in that project. Offer to write one when the user describes such a task;
  note it in the app's `CLAUDE.md`.

- **Anything that produces `config.json` lives in the app folder — never in your
  scratchpad or `/tmp`.** If you write a script to build the config (a map with
  200 countries, a quiz from a word list, a page per record), save it as
  `{appname}/scripts/…` and its inputs under `{appname}/data/`. A scratchpad is
  gone next session; the config it produced is then a frozen blob nobody can
  regenerate. (A world-travel tracker once lost its generator this way, and the
  next session hand-edited 147 KB of generated HTML instead.)
- **Commit small, readable inputs; regenerate big ones.** A CSV or a few hundred
  KB of JSON goes in `data/`. For a multi-MB download, commit the script that
  fetches it and add its output to `.gitignore`.

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

- **Fetch succeeds** → **MAINTAIN**: you'll edit the fetched tree. To see what
  data the app already holds, `og data list {username}/{appname}` names its
  collection types and `og data info {username}/{appname} {Type}` (add
  `--user {theirUsername}` for per-user data) gives a type's record count.
- **Both fail (not found / exit 1)** → **CREATE**: you'll author a new config —
  but first apply **The app limit** check above.

Do not ask the user which mode — the fetch result decides.

### The app's memory — `{appname}/CLAUDE.md`

- **CREATE** → copy `templates/app-CLAUDE.md` from this skill's base directory
  to `{appname}/CLAUDE.md`, fill in the app id, URL and purpose now, and the
  rest as you build it. Delete a section that has nothing to say rather than
  leaving its placeholder.
- **MAINTAIN** → read `{appname}/CLAUDE.md` before changing anything: it says how
  the app is built and what to watch out for. If it doesn't exist (an app made
  before this, or on another computer), write it from the template once you've
  read the config. If an old `notes.md` is there, fold what it says into
  `CLAUDE.md` and tell the user you did.

### Make sure it's in git (the "before" snapshot)

Check once whether the working directory is a git repo:

```bash
git rev-parse --is-inside-work-tree 2>/dev/null
```

- **It is a repo** → on **MAINTAIN**, commit the freshly-fetched config as a
  baseline, so the change you're about to make shows up as a clean diff later:
  ```bash
  git add {appname} && git commit -m "chore({appname}): snapshot config before changes"
  ```
  (On **CREATE** there's nothing to snapshot yet — the "after" commit in Step 6
  captures the first version.)
- **It is not a repo** → suggest it **once** — "`git init` here so you can track
  your app's history and see diffs" — then carry on without git. Don't nag again
  this session.

---

## Step 3 — Load the schema

**Start with the recipes.** They're short, working, validated apps for the jobs
that come up most: editing a record with inputs and saving it, per-user vs
shared data, hiding controls from signed-out visitors, buttons built inside a
template, dates and rounded numbers.

```bash
og reference recipes                 # the list, then every recipe in full
og reference recipes edit-record     # just one
```

When the change matches a recipe, start from its snippet and adapt it — that
beats assembling the same thing from the by-type references below. Then pull
whichever of those you need:

```bash
og reference types       # every node type, its fields, and codecs — always read this
og reference formula     # formula language: operators, $index/$data/etc., built-ins
og reference functions   # host / callable-datasource functions
```

Read `types` before authoring anything; read `formula`/`functions` when the
feature needs dynamic labels, computed values, or a datasource. This is your
source of truth for the schema — prefer it over guessing field names.

The schema says what fields exist; the how-to topics say how the pieces behave
together. Pull the one that matches the task in hand:

| You're about to… | Read |
|---|---|
| write or edit an `htmlTemplate` (click actions, lists, state in a card) | `og reference html` |
| bind a list or formula to data, pick a scope, read the signed-in user | `og reference data` |
| add a form | `og reference forms` |
| lay out screens, subsections, lists and repeats | `og reference containers` |
| use or define a plugin | `og reference plugins` |
| add images or videos | `og reference images` / `og reference videos` |
| debug a node that validates but misbehaves | `og reference pitfalls` |
| build a multi-step flow (wizard, scripted steps) | `og reference flows` |
| build a live / multiplayer app | `og reference realtime` |
| read `og outline` output | `og reference outline` |
| meet an Orgiggly term you don't know | `og reference glossary` |

`og reference` with no topic lists them all. `flows` and `realtime` were
written for Orgiggly's own developers: the authoring rules apply to your app,
but the repo paths they mention aren't files you have.

---

## Step 3b — Look at what exists

**CREATE, or a MAINTAIN change that adds a whole new feature** (a game mode, a
booking flow, a live view): before writing anything, look at how published
Orgiggly apps already solve something similar. Every published app's structure
is public, and seeing a working shape beats inventing one from the schema.

```bash
og data fetch mock/orgiggly showcase --pretty   # the showcase: one row per app
```

Each row has `qualifiedOrgId`, `name`, `description`, `category`, `complexity`
and `features` (e.g. `realtime`, `flows`, `forms`, `ai-chat`,
`html-templates`). Pick **at most three** whose `features` or `description`
match the brief, then outline each:

```bash
og outline <user/app> --level 1   # screens, sections, types: ~10% of the config's bytes
og outline <user/app> --level 3   # every field, when one node is worth a close look
```

Always pass the qualified `<user/app>` id: a local file with the same name wins
over the app (`og reference outline` explains the notation). Borrow the
**structure** (how screens, data types and flows are put together) and never
the content (text, images, data). Reach for `og fetch-org <user/app>` only to
copy one specific node, after a level-3 outline showed it's the one you want.

Skip this step for a small edit to an existing app. Name any app you borrowed a
shape from in the Step 7 summary.

---

## Step 4 — Author or edit the config

**CREATE**: write `{appname}/config.json` in tree format from scratch, guided by
the schema. The config is an **envelope** with these required top-level fields:

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": { "type": "app", "name": "{appname}", "authMode": "public", "_children": [ /* screens */ ] },
  "objectTypes": { "type": "folder", "name": "", "_children": [ /* objectType nodes */ ] },
  "objectInstances": {},
  "plugins": {}
}
```

`versionId` and `users` are easy to forget and validate-org flags both as
critical — include them. Before adding screens, settle **Access & data scope**
(below). Inside `appConfig`, a node is
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

### Access & data scope — two choices, made on purpose

Any app that saves something needs both answers. Make them deliberately and say
them in the Step 7 summary — never let one fall out of the other.

**1. Who can view it.** Default to `"authMode": "public"`: anyone with the link
sees the app, and signing in is needed only for the things that save. Hide those
controls from signed-out visitors:

```json
"hidden": "@$authKind == 'anon'"
```

A control that saves **per-user** records gates on `$userKey` instead —
`"hidden": "@$userKey == 'anon'"` — because someone signed in with Google who
hasn't picked a username yet can't own records. Use `"authMode": "private"` only
when the brief asks for privacy (a family diary, a team-only tracker): signed-out
visitors then see a sign-in card and nothing else. If it's genuinely unclear, ask
once: "Just for you, or will you share the link?"

**2. Whose records they are.** Chosen on the type's data binding:

- **Per-user** — `"data": { "dataType": "Visit", "source": "storage", "scope": "user" }`.
  Each signed-in person sees and saves only their own. Pick this when the data is
  personal or private.
- **Shared** — leave `scope` out. Everyone sees the same records. Pick this when
  one person (or a club) keeps something others look at: a portfolio, a travel
  map, a results table.

Tell the user which you chose in one sentence they can follow, e.g. "Your visits
are saved per person — everyone who signs in gets their own map." `og reference
recipes` has working snippets for both gates and both scopes.

**Shared data isn't locked to its owner yet.** Hiding the edit controls only
hides them; it doesn't stop a determined visitor saving to the shared records.
Until owner-only writes ship, before the first publish of an app with shared
data that the user edits, say:

> Anyone who opens this app could change its shared data — not just add to it —
> if they went around the buttons. Hiding them only hides them. Say if that's a
> problem before we publish.

Never offer `"authMode": "private"` as the fix: it hides screens, not data.

**MAINTAIN**: edit the fetched `{appname}/config.json` — append nodes to the
right `_children` array, change fields in place. Keep the user's existing
naming/style; make the smallest change that delivers the request.

### Changing scope on a live app — copy, never re-enter

Records already saved live in the old scope; a binding switched to the new one
won't see them. **Never tell the user to enter them again** — copy them across
first, while `og whoami` shows the app owner signed in. Per-user → shared:

```bash
mkdir -p {appname}/data
og data fetch {username}/{appname} Visit --user {theirUsername} --output {appname}/data/visit-backup.json
og data upload {username}/{appname} Visit --data {appname}/data/visit-backup.json
og data fetch {username}/{appname} Visit --output {appname}/data/visit-check.json
```

(Shared → per-user is the same hop the other way round: fetch without `--user`,
upload with `--user {theirUsername}`.) `--user` takes the username, not an
email; keep the records' `id`s as they come back.

- **Confirm the count**: the check file must hold as many records as the backup.
  Tell the user the number ("copied your 23 visits across").
- **An upload replaces the target's whole collection.** If the target scope
  already has records, fetch those too and combine both into one file first.
- **Then** switch the binding, validate, and publish the draft.
- If anything can't come across — say several people have per-user records and
  only one partition can receive them — say exactly what will be lost **before**
  promoting, and let the user decide.

**But if the config is generated, change the generator, not the output.** The
signs: a `{appname}/scripts/` folder, or a **Regenerate** command in `CLAUDE.md`.
Then edit the script (or its `data/`), re-run it, and validate what it writes —
never hand-edit a generated `htmlTemplate`, because the next regeneration wipes
the edit. A change made in the web admin to a generated part has to be folded
back into the script the same way, or the next run reverts it.

**Building something repetitive from scratch?** Write the generator into
`{appname}/scripts/` from the start (see **Recommended setup**) and record how
to run it under **Regenerate** in `CLAUDE.md` — don't write it in your scratchpad and keep only its
output.

Formula fields are prefixed with `@`. Static value: `@"playlist"`. Dynamic:
`@episodes[$index].youtubeId`. Consult `og reference formula` for the variables
and functions available.

Keep it **domain-agnostic** — there are no hardcoded schemas or app templates
here; everything comes from the request + the schema reference.

### Widget or content template?

A **content template** (`htmlTemplate` on a `content` node, or an `html` plugin)
is the right tool for markup: cards, lists, tables, badges, simple charts, and
light interactivity through `actions`. It is re-rendered from data, so keep it
small.

Pan-and-zoom maps, drawing canvases and games need a **sandboxed widget**: a
self-contained page the app hosts in a locked-down frame. You can't deploy
widgets from here yet. When a request needs one, say so plainly, build the rest
of the app with templates, and offer a simpler visual meanwhile. For example, a
"countries I've visited" map can be a list or a flag grid, with the interactive
map to come.

**Don't fake a widget with a huge inline SVG or data blob in a template.** A
template carrying tens of KB of SVG paths bloats the config, re-renders on every
data change, and still can't zoom or pan.

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
extra step.) **Then check the draft yourself, every time** — don't ask the user
to click around to find out whether it works:

```bash
og check-draft {username}/{appname}
```

It validates the draft against the app's **real saved records** (the validator
alone only sees the config) and, when Playwright is installed, opens the draft
preview **signed out** in a headless browser. It reports, one line each: page
errors, `undefined`/`NaN` showing on the page, and images that don't load.
Exit 1 means a problem — fix it and publish the draft again. Quote its output to
the user, and say plainly what it does and doesn't cover:

- **Checked:** the draft renders signed-out, and the config works with the saved
  data.
- **Not checked:** anything that needs someone signed in — saving, per-user
  data, buttons only signed-in people see. Ask the user to try those once, by
  name ("sign in on the preview and mark a country").

If it says the browser check was skipped (no Playwright), the render wasn't
checked — say so. If your Claude Code has the Playwright MCP tools, you can open
the preview link with them instead.

Then give the user a tappable, phone-friendly preview link on its own line so it
renders as a link:

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
git add {appname} && git commit -m "feat({appname}): {short description of the change}"
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
`{appname}/config.json` is still on disk in the app folder.

### Update the app's memory

Every time, git or not, bring `{appname}/CLAUDE.md` up to date before you
finish (commit it with the config when you're in git):

- Add one line under **Changes**: the date, what changed, and why.
- Fix whatever the change made untrue: a new data type, a scope that moved
  from per-user to shared, a gotcha you hit.

**If a script generated the config, `CLAUDE.md` must say how to regenerate it** —
the exact command, from the app folder, e.g.:

```markdown
## Regenerate
`node scripts/gen.mjs > config.json` — reads `data/countries.json` and
`data/shapes.json`. Edit the script, not config.json.
```

That one line is what lets the next session change the app instead of
reverse-engineering it.

### Logo (optional)

A logo isn't in the config (it's stored separately). The app header, sign-in
card, browser icon and link-preview card all use this one logo automatically;
there's nothing else to upload.

**Offer to generate one first:** "Describe the logo you'd like and I'll generate
it — that uses about 11 of your Orgiggly credits." The cost comes out of the
signed-in user's own credits, and the command prints it before generating:

```bash
og update-org-logo {username}/{appname} --prompt "a red fox head, flat icon, bold simple shapes, solid teal background, icon only, no text, no lettering"
```

- Write the prompt as an **icon**: one subject, flat shapes, a solid background
  that fills the square. Image models add captions unless told not to, so
  always end with "icon only, no text, no lettering".
- `--model flux-schnell` costs about 1 credit, but it's lower quality. Offer it
  if they're short on credits or want to try a few ideas cheaply.
- `--reference-org <user/app>` matches the style of another app's logo
  (default model only).
- If the balance is too low, the command refuses **before** spending anything.
  It names the top-up page and the cheaper model; pass that on.
- **Their own key, no credits:** if they already pay Google or Replicate, they
  can `export OG_GEMINI_API_KEY=…` (for nano-banana-2) or
  `export OG_REPLICATE_API_TOKEN=…` (for flux-schnell) in their shell, and
  the same command bills that key instead. Ask them to set it themselves. Never
  write a key into a file or a command yourself, and never echo it back.
  `--use-credits` goes back to credits while a key is set.
- Show them the result (the command prints the logo's URL). If they don't
  like it, change the prompt and generate again. Each try costs the same again,
  so say so.

**Or use their own image:** a **square PNG, at most 1024×1024 and 1 MB**
(512×512 is ideal; WebP and JPEG work too):

```bash
og update-org-logo {username}/{appname} --file ./logo.png
```

It's uploaded as-is, not resized, so get the shape right first: a non-square,
oversized or SVG file is refused with a one-line reason saying what to fix. If
you're drawing the logo yourself, render it to a 512×512 PNG — SVG isn't
accepted.

### Link-preview title and description (optional)

When someone shares the app's link, the preview card shows a title and a
one-line description. Check what it says now, then offer to set both:

```bash
og set-org-meta {username}/{appname}
og set-org-meta {username}/{appname} --display-name "World Tracker" --description "Mark the countries you've visited and see them on a map."
```

Unset, the title falls back to the app's name and the description to a generic
Orgiggly line. It takes effect straight away; no publish needed.

---

## Step 7 — Confirm

Tell the user what changed and where it lives:

- Live app: `https://orgiggly.com/{username}/{appname}`
- Draft preview (if not yet promoted): the `?preview=draft` link above
- Local record: `{appname}/config.json` and `{appname}/CLAUDE.md` (and the git
  commit, if you made one)
- **Who can see it and who can change it**, in one line — e.g. "Anyone with the
  link can view; sign in to mark countries. Visits are saved per person."

Summarise the nodes/features you added or edited in one or two lines, and name
any showcase app whose structure you borrowed (Step 3b).

---

## Guardrails

- **One CLI, running as the user.** Every command is subject to the security
  rules. Don't reach for commands outside the CLI's public
  surface (see `og --help`).
- **Never publish an invalid config** — Step 5 must be clean first.
- **Draft before live** — default to `--draft`; only promote on the user's say-so.
- **Smallest change that works** when maintaining — don't rewrite an app to add a
  tab.
- **Never leave a generator in the scratchpad.** Scripts and data that build
  `config.json` go in `{appname}/scripts/` and `{appname}/data/`; a generated
  config is changed by re-running its script, not by hand.
- **Git is advised, never required.** Offer the folder + commit convention; if the
  user isn't in a repo (or declines), proceed anyway — the app lives on
  orgiggly.com regardless, and the folder is just their local working copy.
