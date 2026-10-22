# Orgiggly Ubiquitous Language

This is our shared vocabulary — the small set of words that have specific meanings inside Orgiggly. If a word is in this glossary, it means we've agreed on what it refers to and we use it that way consistently. If you find yourself reaching for a synonym ("the agent", "the engine", "the wizard"), check here first — odds are we already have a canonical term, and using it makes everyone's life easier.

The idea comes from Eric Evans' *Domain-Driven Design* — a **ubiquitous language** is the deliberate practice of having the team and the code agree on what things are called. It's a small habit with outsized payoff: code, conversation, documentation, and AI assistants all stay in sync.

Forty terms, grouped into nine sections, plus a meta entry up front and a disambiguation block at the end.

---

## Meta

### Ubiquitous language

> The deliberate practice of having the team and the code agree on what things are called. This file is its canonical record.

Lifted from Eric Evans' *Domain-Driven Design*. The point isn't the glossary itself — it's that when "pointer", "validator", or "closing gate" mean the *same thing* in conversation, in commit messages, in tests, and in AI prompts, the whole system stays in sync. Synonyms cost us; canonical terms compound.

*How we say it:* "Push that into the ubiquitous language." • "We don't have a canonical term for that yet — add it."

*Anchor:* `docs/GLOSSARY.md`

---

## 1. Platform

### Org

> A complete published mini-application owned by a creator under a namespace.

An org bundles an app config, plugins, object types, object instances, and (optionally) user-scoped or variant-scoped data. Orgs live at URL `{namespace}/{orgName}` and are addressable as a `qualifiedOrgId`.

*How we say it:* "Let's publish a new org under `dave/`." • "The mock orgs are showcases."

*Anchor:* `packages/firebase-admin/src/services/orgService.ts`

### Namespace

> A global, lowercase-canonicalized username slot that reserves a URL prefix and maps it to a uid.

Namespaces are the authoritative source of truth for usernames. Reads/writes go through `namespacePath(name)` — never built by hand. Aliases like `StoryLingo` / `storylingo` are the same slot.

*How we say it:* "Reserve the `dave` namespace." • "Mock orgs live under the `mock/` namespace."

*Anchor:* `packages/firebase-admin/src/services/namespaceService.ts`

### qualifiedOrgId

> The composite identifier `{namespace}/{orgName}` used in URLs, Storage paths, and CLI args.

Never includes a domain. Always lowercase namespace, original-case orgName.

*How we say it:* "Pass the qualifiedOrgId `mock/wang` to `fetch-org`."

*Anchor:* `packages/shared/src/utils/orgLogo.ts`

### Admin app

> The authenticated `/admin` sub-app where creators design, edit, and publish their orgs.

Always capitalized "Admin" when referring to the app itself, so it's distinct from generic admins/admin users.

*How we say it:* "I'll fix it in the Admin app." • "That's an Admin-only screen."

*Anchor:* `apps/web/src/apps/admin/`

### Site app

> The public-facing `/` sub-app that renders a published org's config for end users.

Read-only consumption of `appConfig`. User-scoped form submissions and data are still possible, but the structure is fixed by the published config.

*How we say it:* "The Site app is where visitors land." • "That bug only shows on the Site app, not Admin."

*Anchor:* `apps/web/src/apps/site/`

### Legacy

> A node type or property that is frozen: it still renders, decodes and round-trips, but nothing new writes it.

Marked with a `legacy: { since, use }` block in `nodeModel.json`, where `use` names the replacement. The org-gen agent recognises a legacy node in an org it is editing but never writes one, and the closing gate reports it as a warning, never an error (the `legacy-node` / `legacy-prop` kinds, #2741). Removing it is a separate, later decision; the status carries no removal date. "Deprecated" means the same thing; mirror it back as "legacy". First marked: the `form` node, `submitObjectType`, and the `isList` / `multiline` field props (#2737).

*How we say it:* "`form` is legacy, so write the inputs on a screen and save them with `publishData`." • "That org still has a legacy `submitObjectType`, which is fine; it still works."

*Anchor:* `packages/shared/src/scripts/codegen/nodeModel.json` (the `legacy` key), `LEGACY_NODES` in `packages/shared/src/validation/generated/nodeRegistry.generated.ts`

---

## 2. Tree & addressing

### Pointer

> A dot-notation string key that addresses any node in an app tree, e.g. `contacts[0].name`.

Bracket indices appear on repeating nodes (each index is one iteration). Non-repeating nodes use plain dot paths. Canonical keys are the **shortest unique form** — `"name"`, not `"wizard.step1.name"`.

*How we say it:* "Update the value at pointer `contacts[0].name`." • "That selector takes a pointer key."

*Anchor:* `packages/shared/src/orgicore/types/appState.ts:60` (and `packages/shared/CLAUDE.md` for the full system)

### Scope

> The iteration context for a pointer — tracks which repeating node and which index the current location is inside.

A `Scope` carries `{key, node, index, parent?}`. Scopes chain through nested iterations. The scopeKey is what formula evaluation uses to resolve `$scopeKey`.

*How we say it:* "That formula runs in the `contacts[0]` scope." • "Scope-aware evaluation."

*Anchor:* `packages/shared/src/orgicore/types/appState.ts:53`

### Tree node

> A hierarchical, type-constrained, repeating data node (`TREE` node type).

Distinct from "the tree" (an app's overall structure). Tree nodes have `rootType`, `nodeTypes`, and allow nested children of declared types — e.g. groups containing contacts.

*How we say it:* "Wrap that in a tree node." • "Tree iterations are pointers like `t[0]`."

*Anchor:* `packages/shared/src/orgicore/types/constants.ts`

### AppDef

> The immutable design-time structure of an app — the `def` field on `AppState`.

What the builder API produces. What the published config encodes. Never mutated at runtime.

*How we say it:* "Add that field to the AppDef." • "AppDef vs AppInstance."

*Anchor:* `packages/shared/src/orgicore/types/appState.ts:41`

### AppInstance

> The mutable runtime state of an app: cursor, navStack, data, lengths.

The user's interactions accumulate here. Persisted to localStorage (and optionally Firebase) via a persistence key.

*How we say it:* "That value lives on the AppInstance." • "Reset the AppInstance for a fresh run."

*Anchor:* `packages/shared/src/orgicore/types/appState.ts:28`

---

## 3. Authoring & evaluation

### The core

> The `@orgiggly/shared` package — specifically `packages/shared/src/orgicore` — that powers both Admin and Site apps.

"The core" is shorthand for the framework that turns node trees into rendered, stateful UI. When we say "this lives in the core," we mean it's framework, not app code.

*How we say it:* "That selector belongs in the core, not the web app." • "The core handles rendering."

*Anchor:* `packages/shared/src/orgicore/`

### Builder

> The fluent API for declaring app structure as code: `b.app({ contacts: b.tree({...}) })`.

Object keys become node names; node names become pointer key segments. Builders are named after their model node: `b.app`, `b.screen`, `b.form`, `b.tree`, `b.subsection`, `b.textInput`, `b.numberInput`, `b.booleanInput`, `b.selectInput`, `b.temporalInput`, `b.fileInput`, `b.content`, `b.variable`, `b.flow`, `b.pluginLeaf`, etc. (generated from nodeModel.json; `b.list` and `b.record` are synthetic sugar for a master/detail repeating subsection).

*How we say it:* "Define it with the builder." • "Use `b.flow` to wrap those steps."

*Anchor:* `packages/shared/src/orgicore/builder/index.ts`

### Formula

> An `@`-prefixed [jsep](https://github.com/EricSmekens/jsep) expression evaluated at runtime against the current scope and `$data`.

Powers dynamic labels, computed values, conditional visibility, and WHERE clauses. Special variables: `$index`, `$parentIndex`, `$scopeKey`, `$state`, `$data`, `$speech`, `$variant`. Built-ins like `uniq(arr, field?)` are bound natively.

*How we say it:* "Wrap that label in a formula." • "Drop the `@` prefix when storing it."

*Anchor:* `packages/shared/src/orgicore/utils/evaluation/propDef.ts`

### Const node

> A named constant — `{ "type": "const", "name": "maxSeats", "value": 4 }`, any JSON value — read as a bare identifier from formulas and transition rules alike (#2317).

Never evaluated, never written, and never overridden by stored data, which is exactly what a `variable` cannot promise: a variable's `compute` is only a default. That makes it the way a transition rule reads a config value — the rules mirror stamps each rule's reachable consts beside its functions. Read it bare (`maxSeats`); `maxSeats()` is a closing-gate error. It replaces the old zero-arg `function` whose body was a literal.

*How we say it:* "Make the weights a const node, not a function." • "The rule can read it — it's a const."

*Anchor:* `packages/shared/src/scripts/codegen/nodeModel.json` (`const`), `cloud-functions/src/transition/rulesMirror.ts` (`extractConstNodes`)

### Selector

> A memoized [reselect](https://github.com/reduxjs/reselect)-based derivation from `AppState`.

"The selectors" (plural, with "the") refers to the whole family — `selectPointer`, `selectValue`, `selectChildPointers`, `selectOutput`, and the rest. Selectors do not mutate; they only derive.

*How we say it:* "The selectors compute that for free." • "Add a new selector to `propsSelectors.ts`."

*Anchor:* `packages/shared/src/orgicore/selectors/`

### Bulk action

> An atomic multi-dispatch reducer wrapper that groups several actions into one update.

Essential for avoiding React 18 batching race conditions. **`setCursor` must always be the last action in a bulk action.**

*How we say it:* "Wrap those three updates in a bulk action." • "That race is a missing bulk action."

*Anchor:* `packages/shared/src/orgicore/reducers/actions.ts`

### Validator

> The function `validateOrg(tree)` that runs structural, formula, reference, and rubric checks against an org config and returns `{ ok, errors[] }`.

Each finding has a **kind** (e.g. `duplicate-id`, `formula-syntax`, `empty-container`), a **severity** (`error` blocks publish and the closing gate; `warning` and `info` are surfaced but non-blocking), a path into the JSON tree, and an optional fix hint. Two known consumers today: the closing gate on AI generation, and the Admin app's pre-publish dialog (which also exposes a one-click "Repair duplicate IDs"). The CLI exposes it as `validate-org <file>` and `fetch-org --validate`.

*How we say it:* "Run that through the validator before publishing." • "The validator flagged duplicate IDs — repair them." • "Drop this as a warning so the validator doesn't block the publish."

*Anchor:* `packages/shared/src/validation/orgValidator.ts`

### Outline

> A JSX-style rendering of an org config (`orgOutline(tree, { level })`) at one of four detail levels — L0 skeleton, L1 structure, L2 detail, L3 lossless.

Node type is the tag, `name` an attribute, children nest: `<screen name="recipeBook">` reads as a sentence where the JSON does not. L1 is about a tenth of `config.json` and answers "what is this org and how is it put together". It is the **reading** format — for humans, for skills (`/develop-org` and `/init-org` read the outline and drill in with `--at`), and for the org-gen agent (`request_examples` returns an L2 outline) — and the structure-stage format for graph-edit generation. **JSON ops are the writing format** (settled by #2076/#2077, epic #2067). Every committed `orgs/**/config.json` has an `outline.txt` beside it, drift-guarded like any generated artifact.

*How we say it:* "Read the L1 outline before touching the config." • "Show me that screen at L3." • "The outline diff is ten lines; the JSON diff is three hundred."

*Anchor:* `packages/shared/src/orgicore/integration/transforms/outline/`, `docs/OUTLINE.md`, `og outline`

### Compile

> Turning a sparse L1/L2 outline into a config that passes the closing gate: `parseOutline` (lenient) then `compileOutline`, which regenerates ids, restores folded defaults and required fields, and records every fill.

Distinct from **parse**, which is mechanical and lossless at L3, and from the **closing gate**, which only judges. A compile's `fills` (`CompiledOrg.fills`, printed by `formatFill`) are a quality signal in their own right: a high placeholder count means the outline was thinner than the org it describes. Lives in `validation/`, not the outline module, because nothing under `orgicore/` may import the gate.

*How we say it:* "Compile the skeleton, then fill the screens." • "How many fills did that compile record?"

*Anchor:* `packages/shared/src/validation/compileOutline.ts`

---

## 4. Lifecycle & content

### Published config

> The frozen `appConfig` written to Firebase Storage at the canonical URL — what the Site app reads.

Immutable per publish; new publishes overwrite. Distinct from the local in-memory config Admin is editing.

*How we say it:* "Re-publish to get those changes live." • "The Site app only sees the published config."

*Anchor:* `packages/firebase-admin/src/services/orgService.ts`

### Draft config

> A mutable snapshot saved to Firebase under `orgiggly/orgs/{orgId}/apps/main/draft/` for later editing.

"Server draft" — distinct from "local draft" (the localStorage edits Admin makes between saves). Publishing does NOT auto-clear server drafts.

*How we say it:* "Save it as a draft, I'll come back to it tomorrow." • "Promote the draft to publish."

*Anchor:* `packages/firebase-admin/src/services/orgService.ts` (`saveDraft`, `fetchDraft`, `promoteDraft`)

### Plugin

> A registered, parameterized leaf component (e.g. `FormulaInput`, `IconInput`, an HTML template plugin) embeddable in any tree.

Plugins are not orgs and not apps — they're reusable UI fragments declared once, used many times. Marketplace plugins are shareable across orgs.

*How we say it:* "Wrap that in a plugin." • "Publish it to the plugin marketplace."

*Anchor:* `apps/web/src/apps/defs.ts`

### Function library

> A versioned set of `function` and `const` nodes shared by several orgs, sourced in-repo at `libraries/<owner>/<slug>/library.json` and published to the marketplace beside plugins (#298).

Not resolved at publish or runtime — **vendored**: `og library sync` copies the pinned version into each consuming org's `config.json` as a **library folder**, so packs, the validator and every publish path see a complete config. A change is a new `version` (old snapshots under `versions/` are immutable); each consumer moves by re-pinning and re-syncing. Don't call it a plugin — it reuses the plugin record (`kind: "library"`) but renders nothing.

*How we say it:* "That helper belongs in the cardroom library." • "Bump the library and re-sync both orgs."

*Anchor:* `libraries/README.md`, `packages/cli/src/services/librarySync.ts`, `og library`

### Library folder

> The `folder` in an org's config that holds one vendored function library, stamped `library: { id, version, hash, omitted? }` by `og library sync`.

Owned by the CLI: never edit inside it. The closing gate re-hashes its children (`library-folder-drift`) and rejects a name defined both inside and outside it (`library-name-clash`). An org **overrides** a library member by defining its own outside the folder and re-syncing, which records the name in `omitted`.

*How we say it:* "Don't touch `lib-pokerengine` — it's a library folder." • "Define it locally and re-sync — it'll land in `omitted`."

*Anchor:* `packages/shared/src/validation/libraries.ts` (`libraryChildrenHash`)

### Flow

> A guided multi-step wizard container (`FLOW` node type). Each immediate child is implicitly a step.

State for a flow is cleared atomically on entry (via `pushCursor`-driven `clearSubtree`). Renders as an MUI Stepper with Back/Next navigation.

Inside a flow, the **flow steps** are async leaves that auto-run and auto-advance. Each is a **variant child** of the runtime `FLOW_STEP` type and is authored as its variant: `{ "type": "aiQuery" }`, `"fetchData"`, `"imageGeneration"`, `"publishData"`, `"script"`, … — the same one authoring rule that writes `appNode` variants as `tab` / `tabGroup` / `folder` (#2090). `designToAppDef` maps the authored type to the runtime `{ type: "flowStep", variant }` pair.

*How we say it:* "Build it as a flow." • "Add an aiQuery flow step before the publish step."

*Anchor:* `packages/shared/src/orgicore/types/constants.ts` (`FLOW`, `FLOW_STEP`), `apps/web/src/components/ui/flow/Flow.tsx`

### Object type / Object instance

> A user-defined data schema (object type) + the records that conform to it (object instances).

Object types live in the org config's top-level `objectTypes` slot — a sibling of `appConfig`, not inside it. Object instances live in the top-level `objectInstances` slot (for design-time seeded data) or in Storage data collections (for runtime user submissions). Every published instance carries framework-owned metadata the author never declares (`enums.recordMetaField` in `nodeModel.json`): an identity (`id`), an audit trail (`createdAt`, `createdBy`, `updatedAt`, `updatedBy`, plus Firebase-uid mirrors `createdByUid`/`updatedByUid` that push tokens key on) and system markers (`type`, the in-memory `_scope`, and the soft-delete tombstone `isDeleted`).

*How we say it:* "Add a `Book` object type." • "Each row is a `Book` instance."

*Anchor:* `packages/shared/src/orgicore/integration/metamodel/types.ts`

---

## 5. AI generation

### The org-gen agent

> The multi-turn loop in `packages/shared/src/prompts/generate.ts` that drives org and plugin generation.

Canonical short form: **the generator**. In code comments, you'll also see **the orchestrator**. All three refer to the same thing — the shared `generate()` function parameterized by a `GenerationSpec`.

**Critical: this is NOT "the agent" / "Claude" / "Claude Code".** Those refer to the dev assistant (the one writing this glossary with you). See the disambiguation block below.

*How we say it:* "The org-gen agent called `search_images` three times." • "Did the generator hit the closing gate?"

*Anchor:* `packages/shared/src/prompts/generate.ts`, `packages/shared/src/prompts/generateOrg.ts`

### Turn

> One round-trip to the Anthropic API: either a `tool_use` (model asking for data) or a `result` (model done).

The org-gen agent runs a turn loop: send messages → receive tool_use → handle tool → append tool_result → send again, until the model emits a final result. A typical org generation takes 2–5 turns.

*How we say it:* "That took four turns." • "Turn 3 was the one that called `validate_partial`."

*Anchor:* `cloud-functions/src/generation.ts`, `packages/shared/src/prompts/generate.ts`

### Closing gate

> Post-result auto-validation. If the final org fails `validateOrg`, the orchestrator synthesizes a `validate_partial` tool_use/tool_result fix pair and re-invokes the model — up to 2 fix turns.

Lives in the shared orchestrator (not the cloud function), so it's reusable from browser, CLI, and any future server-side caller. Opt out per-call with `disableClosingGate: true`.

*How we say it:* "That's a closing-gate retry." • "We disabled the closing gate for the replay test."

*Anchor:* `packages/shared/src/prompts/generate.ts:186`, `packages/shared/src/validation/orgValidator.ts`

### Mock AI

> The dev/E2E deterministic-response harness gated by `isMockAI()`.

Enabled when `import.meta.env.DEV` is true *and* `sessionStorage.__e2e === "true"`. Used in Playwright E2E specs and local dev so generation runs never spend Anthropic budget. Distinct from `demoMode` and `demoSource`.

*How we say it:* "Run it under mock AI." • "isMockAI() short-circuits that effect."

*Anchor:* `apps/web/src/utils/firebase/firebase.ts:70`, `apps/web/e2e/helpers.ts`

### Demo mode

> The generation config knob (`demoMode: true`) that pins the model to Haiku and adds the `note_assumption` tool.

Used by the public `/demo` flow. It no longer disables `ask_user` — that is the separate `disableAskUser` knob, and the demo keeps questions on (it has a modal for them). Distinct from `demoSource: "demo"` (server-side tag that triggers `checkDemoGuards` + `checkDemoRateLimit` on the cloud function). Both can be set independently — e.g. inspired-from generation uses `demoMode: true` *without* `demoSource: "demo"` so free-form prompts aren't rejected.

*How we say it:* "Set demoMode but not demoSource for the inspired-from path."

*Anchor:* `packages/shared/src/prompts/generateOrg.ts`, `.claude/rules/shared-generation.md`

---

## 6. Test surfaces

### Unit tests

> Pure-logic Jest/Vitest tests in `packages/*/src/**/__tests__/` and `apps/web/src/**/*.test.ts`. No Firebase, no real HTTP, no browser.

The fastest tier. Run via `npm test --workspace=<pkg>`.

*How we say it:* "That belongs in the unit tests." • "Run the shared package unit tests."

*Anchor:* `packages/shared/src/__tests__/`, `apps/web/src/**/*.test.ts`

### Integration tests

> In-memory Firebase service-layer tests in `apps/web/src/integration/*.int.test.ts`.

Uses test helpers (`testHelpers.ts`) and identities (`test-uid-1`, `test-uid-2`). Wires real service code but against in-memory Firebase fakes. **NOT E2E**, and NOT the same as the dev-server-backed Playwright suite.

*How we say it:* "Add an integration test for that service." • "Run the integration tests." (= `npm run test:int --workspace=web-orgiggly`)

*Anchor:* `apps/web/src/integration/testHelpers.ts`

### Admin e2e tests

> Playwright tests against the local dev server's `/admin` app — `apps/web/e2e/*.spec.ts`.

Uses dev-only identities (`e2e-user-1`, `e2e-user-2`, etc.). Mock AI is enabled by default via `sessionStorage`. The default `npm run test:e2e` command runs these.

*How we say it:* "Add an Admin e2e for that." • "The Admin e2e tests are passing."

*Anchor:* `apps/web/e2e/`, `.claude/rules/e2e-tests.md`

### Site e2e tests

> Playwright tests for published Site apps — `apps/web/e2e/site/*.spec.ts`.

Read-only, no auth mocking. **Dual-mode** (feat/e2e-site-emulator): by default they run on the **Firebase emulator** against seeded org fixtures, via the `emulator-site` project inside `npm run test:e2e` (and therefore `npm run verify`) — no production traffic, no Google Analytics. The unconditionally-registered `site` project still runs the same specs against **real `orgiggly.com`** as an opt-in post-deploy canary via `npm run test:e2e:site --workspace=web-orgiggly` (hits GA — run sparingly). Each emulator-run spec calls `guardNoProdFirebase` so it provably makes zero prod Firebase requests. (The `worldcup2026` site spec is the one exception kept prod-only — that org is already emulator-covered by the richer `worldcup2026Site` spec.)

*How we say it:* "Site e2e flagged a regression on `mock/storylingo`."

*Anchor:* `apps/web/e2e/site/`, `.claude/rules/e2e-tests.md`

---

## 7. Identities

### Mock user / Lab user / E2E user

> The dev/test identity zoo defined in `apps/web/src/utils/firebase/auth/mock.ts`.

Three distinct purposes — qualify by which one:

- **Mock user** — `mock-user-123` / `mock@localhost.dev`. The single dev identity for manual local testing. "Sign in as Mock" on the localhost login page.
- **Lab user** — `lab-user-1` / `lab@localhost.dev`. The default identity for skill-created orgs under the `lab/` namespace.
- **E2E user** — `e2e-user-1` / `e2e-user-2` / `e2e-stripe-user`, etc. Isolated test identities, one per spec area, kept separate so test state doesn't leak across runs.

All three are whitelisted in `cloud-functions/src/auth.ts` (`ALLOWED_DEV_UIDS`) and only work on the `orgiggly-dev` Firebase project.

*How we say it:* "Sign in as Mock and try it." • "Use the Lab user for skill orgs." • "That spec needs its own E2E user."

*Anchor:* `apps/web/src/utils/firebase/auth/mock.ts`

---

## 8. Realtime & transitions

### Transition engine

> The generic, RTDB-triggered Cloud Function (`realtimeTransition`) that evaluates author-declared transition rules and writes results back authoritatively — a server-side state machine over realtime collections.

One `onValueWritten` trigger spans all realtime types and orgs; the publish-time rules mirror gives it a cheap no-rules exit, and matching rules run inside a guarded transaction on the target record. It replaced the bespoke per-org rotation CF (`squigglyRotate`) in the #1146 cutover. Don't call it "the engine" bare — that collides with the org-gen agent's "orchestrator"; say "the transition engine".

*How we say it:* "Squiggly runs on the transition engine now." • "That rotation is a transition-engine rule, not a bespoke CF."

*Anchor:* `cloud-functions/src/transition/engine.ts`

### Transition rule

> An author-declared formula rule (`condition` → `next`) on a realtime collection, carried in the portable published config under `app.transitions`.

Watches writes to one realtime type (`watchType`) and, when `condition` holds against the live target, writes the full `next` state to a target record. Rules are formulas evaluated in a transition scope (`$record`/`$target`/`$records`/`$params`/`$now`) and are `promptHidden` — a human or Claude authors them, never the org-gen agent. Authoring pitfalls live in `.claude/rules/realtime-orgs.md`.

*How we say it:* "Add a transition rule that advances the round on submission." • "That's a transition rule — watch `Submission`, target `Game`."

*Anchor:* `cloud-functions/src/transition/evalRule.ts`, `packages/shared/src/scripts/codegen/nodeModel.json` (`transitionRule`)

### Rules mirror

> The publish-time RTDB projection of an org's transition rules that the transition engine reads for a cheap no-rules exit.

The `transitionRulesMirror` CF triggers on a config publish (`latestVersion`), extracts `app.transitions`, and writes `…/transitionRules/byWatchType/{type}` — deleting it when no enabled rule exists. The engine does one shallow read of this node per event, so a write to an unwatched type exits without ever loading the config.

*How we say it:* "The publish didn't take until the rules mirror was deployed." • "Check the org's rules-mirror node."

*Anchor:* `cloud-functions/src/transition/rulesMirror.ts`

---

## 9. Issue reports

### Issue report / Target org / Watcher / `issues` org

> An **issue report** (short: *report*) is one record a signed-in user files from the Site app's "Report an issue…" menu, about one **target org**. The **watcher** is the Claude Code session that picks reports up, and the **`issues` org** is where people see their status.

- **Issue report** — stored at `orgiggly/orgs/{owner}/{slug}/issueReports/{id}` with a screenshot and client context, addressed by its ref `{owner}/{slug}/{reportId}`. Its status runs `new → claimed → fixed-draft → published`, or `→ closed` from any state. It is deliberately *not* called an "issue" (see the disambiguation below).
- **Target org** — the org a report is about. Its creator and `adminUids` are the report's owners: they can read it and move its status.
- **Watcher** — `og report watch` (it blocks until a `new` report exists, then exits), and by extension the session running `/watch-reports` around it. The watcher is the only thing that writes status.
- **`issues` org** — the read-only system org `mock/issues`, aliased to `orgiggly.com/issues` (`/issues/{owner}~{slug}` for one org).

*How we say it:* "Dave filed a report on webberoonies from his phone; the watcher claimed it." • "Track it on the issues org."

*Anchor:* `packages/shared/src/types/issueReport.ts`, `packages/cli/src/commands/report.ts`, `.claude/skills/watch-reports/SKILL.md`

---

## Disambiguation — words to qualify

Four words in our space are overloaded enough that bare usage is ambiguous. Always qualify them.

### "the agent"

- **In Orgiggly conversation, "the agent" always means the org-gen agent** (the multi-turn loop that generates orgs and plugins). Equivalent: "the generator", "the orchestrator".
- **"Claude" or "Claude Code" means the dev assistant** — the AI that pair-programs with the user in this terminal. Never call the dev assistant "the agent" when working on Orgiggly; it collides with the org-gen agent.

> ✗ "The agent should write that test."
> ✓ "Claude should write that test."
> ✓ "The org-gen agent should call `search_images` first."

### "mock"

Three different things:
- **Mock AI** — the `isMockAI()` dev/E2E harness for AI calls.
- **Mock user** — the `mock-user-123` dev identity.
- **Mock org** — a curated org under the `mock/` namespace (e.g. `mock/orgiggly`, `mock/wang`, `mock/blog`).

Always say which.

### "issue"

Two different things:
- **GitHub issue** — the engineering backlog (`gh issue`, `og issues`, epics and sub-tasks).
- **Issue report** — an in-app report about one org (`og report`, `orgiggly.com/issues`). It may be promoted to a GitHub issue later (phase 2), but it isn't one.

Say "report" for the in-app one.

### "demo"

Three different things:
- **The demo app** — the static `/demo` route in the web app.
- **Demo mode** — the `demoMode: true` generation config knob (Haiku + `note_assumption`).
- **demoSource** — the `demoSource: "demo"` server tag that triggers rate-limit + canonical-prompt guards.

Always say which.

---

## Maintenance

This file is the canonical reference. When the language shifts (we coin a new term, deprecate an old one, or land a disambiguation), update this file *first*, then propagate to:

- The Language section on `mock/orgiggly` (public-facing mirror)
- The blog post on `mock/blog` (if substantive enough to warrant a new post)
- Any rules under `.claude/rules/` that reference the deprecated term

Keep this file at ~30 terms. New terms have to earn their place — push area-specific vocabulary into `.claude/rules/*.md` instead.
