---
name: getting-started
description: "Set up Orgiggly from scratch and build your first app. Use when the user is new to Orgiggly and needs onboarding — e.g. 'get started with Orgiggly', 'set up Orgiggly', 'help me build my first app', 'onboard me', 'I just installed this', '/getting-started' — or when any Orgiggly command reports they're not signed in, not enrolled, or have no namespace. Sets up the `og` command, signs them in, redeems an invite code, claims their name on Orgiggly, then hands the actual build to the develop-app skill."
user-invocable: true
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - AskUserQuestion
  - Skill
---

# getting-started

Carry someone from a cold plugin install to a **live first app**, then orient
them. This skill **orchestrates** the `og` CLI and **delegates the build** to the
`develop-app` skill — it never authors config itself.

Assume nothing but the installed plugin and a human at the keyboard: no repo, no
`orgs/` folders, no git, no monorepo checkout.

## How to run this

**Probe before you act, at every step.** `og whoami` is the state of the world;
read it and skip whatever's already done. That makes this skill idempotent and
resumable — someone who gets halfway, quits, and types `/orgiggly` again
tomorrow picks up exactly where they left off, and someone already set up drops
straight to Step 5.

Be brief. This is a welcome, not a manual — a couple of lines per step. Every
branch must end in either a next action or an explicit stop; never leave the user
staring at an error with nothing to do.

---

## Step 0 — Welcome

Two lines, no more:

> Orgiggly hosts small apps you can *see and edit* — a live site at
> `orgiggly.com/yourname/yourapp`, backed by real data, with no deployment or
> hosting to set up.
> I'll get you signed in and then build your first one. Takes a few minutes.

Then go straight to Step 1. Don't wait for a reply.

---

## Step 1 — Get the `og` CLI working

```bash
node --version        # needs v22 or newer
command -v og && og --version
```

- **`og` prints a version** → done, go to Step 2.
- **Node is older than 22, or missing** → tell them to install Node 22+ and
  **stop**. Nothing downstream works without it.
- **`og` not found, *or* found but erroring** (a stale symlink from an older
  install points at a path that's gone) → (re)link it. The CLI ships *inside this
  plugin* at `$CLAUDE_PLUGIN_ROOT/bin/og`; there's nothing to download, and
  `ln -sf` below overwrites a broken link safely.

  Find a writable directory already on their PATH — prefer `~/.local/bin`:

  ```bash
  case ":$PATH:" in *":$HOME/.local/bin:"*) echo on-path;; *) echo not-on-path;; esac
  ```

  If one exists, symlink and verify:

  ```bash
  ln -sf "$CLAUDE_PLUGIN_ROOT/bin/og" ~/.local/bin/og && og --version
  ```

  **Never edit their shell rc files yourself.** If no suitable directory is on
  PATH, create the symlink into `~/.local/bin` anyway (`mkdir -p` first) so it
  works the moment PATH picks it up, then hand them the one line to add and
  **stop**:

  > Add this to your shell profile, open a new terminal, and type `/orgiggly`
  > again:
  > `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc`

---

## Step 2 — Identity

```bash
og whoami
```

This one command answers all three of the questions below — read its output
before doing anything else.

- **"Not signed in"** (exit 1) → say in one line that Orgiggly runs entirely as
  *them* — their own Google account, their own apps — then **run it yourself**:

  ```bash
  og login
  ```

  You can do this: `og login` opens **their** browser for Google sign-in and
  waits for the callback, then stores a credential under `~/.orgiggly/`. Don't
  pre-emptively hand it over because you "can't open a browser" — the command
  opens it, not you. Tell them a browser tab is about to open, then run it.

  Only if it **exits non-zero without having opened a browser** do you hand it
  over, with one line of explanation, and **stop**:

  > Please type `! og login` — the `!` runs the command in your own terminal, so
  > the browser can open. Then type `/orgiggly` again and I'll carry on.

- **Already signed in** → say who as, one line, and move on.

Re-run `og whoami` after a fresh login to confirm, and use *that* output for
Steps 3 and 4.

---

## Step 3 — Enrollment (invite code)

Read the `enrollment:` line from Step 2's `og whoami`.

- **`enrolled ✓`** → say nothing, go to Step 4.
- **`not enrolled`** → ask whether they were given an invite code. (To them
  it's "no invite code recorded yet" — "enrolled" is the CLI's word, not theirs.)

  **With a code:**

  ```bash
  og redeem YOUR-CODE
  ```

  Re-redeeming a code you've already used is fine — it succeeds without
  consuming another use. If it's rejected (revoked, exhausted, typo'd), say what
  the CLI said, offer one retry, then continue to Step 4 regardless.

  **Without a code**, say this and **keep going**:

  > No code? Email **dave@orgiggly.com** with a line about what you want to
  > build and you'll get one. You don't have to wait for it — carry on and
  > build your app now; redeeming later just records how you found us.

**Never treat a missing code as a wall.** Enrollment is attribution, not
permission — nothing on the create-or-publish path checks it, so a user with no
code reaches a live app exactly like anyone else. Blocking them here would be a
gate the platform doesn't actually have.

---

## Step 4 — Claim their name on Orgiggly

Read the `namespace:` line from Step 2's `og whoami` (that's the CLI's word for
it; to the user it's "your name on Orgiggly", the `<name>` in
`orgiggly.com/<name>/…`).

- **A name is shown** → that's theirs; mention it and go to Step 5.
- **`none claimed`** (including the "profile says X, but the namespace isn't
  yours" variant — that's *unclaimed*) → propose a name and confirm it before
  claiming. Slug it from their name or what they've said they want to build. The
  rules: **2–20 characters, letters/digits/underscores only** — no hyphens, dots
  or spaces.

  ```bash
  og claim-namespace theirname
  ```

  Their apps then live at `orgiggly.com/theirname/appname`. This is a public,
  lasting handle — worth three seconds of thought, so show them the resulting URL
  before they commit.

  If the name is taken or reserved, the CLI suggests alternatives. Offer them,
  let the user pick or supply their own, and retry.

**Confirm with a fresh `og whoami`, not the claim's output.** The name's
reservation record — not the profile — is what actually decides ownership, so re-probing is
the only honest confirmation.

---

## Step 5 — Build the first app

This is the moment the whole setup exists for. Ask what they want to build, with
two or three nudges to make it concrete:

> What do you want to build? A few things people start with:
> • a club or team page — schedule, members, results
> • a personal collection — books, recipes, places you've been
> • a small business page — services, prices, contact

Then **hand off to the `develop-app` skill** — invoke it with their answer and
their name from Step 4, e.g. `Skill(skill="develop-app", args="a running-club
page for {name}")`. It fetches-or-creates, authors the config, validates,
and publishes a draft with a preview link.

**Do not author config here.** No schema reading, no JSON, no `create-org`. If
you find yourself writing a node, you're in the wrong skill.

---

## Step 6 — What's next

Once `develop-app` has published and the user has seen their app live, close the
loop with the three things they'll want next — short, as a list, not a lecture:

- **Add data** — "your app has a `Session` type but no sessions yet; want to add
  some?" Another `develop-app` turn handles it, or `og data upload` /
  `og data consolidate` for a batch they already have in a file.
- **Edit it visually** — `https://orgiggly.com/admin`, pick the app. Changes
  preview live. Anything they change there, `develop-app` will pick up next time
  it fetches.
- **Share it** — the public URL `https://orgiggly.com/{name}/{appname}`.
  It's live for anyone with the link.

Then stop. They have a working app; let them enjoy it.

### If they ask about plans, more apps, or custom domains

The free plan includes **1 app**. The paid plan is **£10/month (or £100/year)
for up to 5 apps** — they upgrade with the **Upgrade button on
`orgiggly.com/admin`**. `og whoami`'s `apps:` line shows where they stand.
Custom domains aren't shipped yet; for that, or for more than 5 apps, point
them at **dave@orgiggly.com**.

Don't pitch: raise this only if *they* bring it up, or when `develop-app` finds
them at the limit before a new app. Never up front.

---

## Guardrails

- **Probe, don't assume.** `og whoami` before every branch. A user who ran half
  of this last week must not be walked through it again.
- **The invite gate is soft.** No code is never a stop.
- **Delegate the build.** Step 5 hands to `develop-app`; this skill authors
  nothing.
- **Never edit shell rc files** on the user's behalf — hand them the line.
- **No dead ends.** Every failure branch ends in a concrete next action or an
  explicit stop that says how to resume (type `/orgiggly` again).
- **Don't promise what isn't built.** No custom domains, no features that
  aren't live.
