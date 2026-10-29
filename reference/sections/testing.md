# Testing an app: checks you write and run with `og test`

An app's **test pack** is a folder of small checks that drive the app's real
`config.json` through the real app engine on your machine: set an input,
evaluate a formula, render a content node, run a button's script against stub
writers and look at what it would have saved. No browser, no sign-in, nothing
to install (Node's built-in runner), and a whole pack runs in about a second.
The user never reads these files. They get one line — "12 checks pass" —
before a draft is promoted, and the pack is how the next change proves it
broke nothing.

## Layout and running

```
{appname}/
  config.json            the app (tree format, as `og fetch-org --tree` writes it)
  tests/
    home.test.mjs        one file per screen or feature; name it for what it checks (top level only)
    fixtures.mjs         optional: shared records, as plain data
```

```bash
og test {appname}        # runs every tests/*.test.mjs; exit 1 on a failed check
```

A test file is a plain ES module using Node's own `node:test` and
`node:assert/strict`. The harness is imported as `@orgiggly/orgpack`; `og test`
resolves that name itself, so there is no `npm install`, no `package.json`, and
the file cannot be run with bare `node --test`.

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { createOrgPackApi, loadOrgTree } from "@orgiggly/orgpack";

const tree = loadOrgTree(new URL("../config.json", import.meta.url));

test("the greeting uses the visitor's name once typed", () => {
  const pack = createOrgPackApi(tree);
  assert.match(pack.renderHtml("greeting"), /Hello stranger/);
  pack.setValue("visitor", "Ada");
  assert.match(pack.renderHtml("greeting"), /Hello Ada/);
});
```

`loadOrgTree` takes that `URL` (or a path) and reads the file in tree or
pointer format, throwing a readable error on anything else; load it once per
file. Pass the `URL` itself, never its `.pathname` — that is percent-encoded,
so an app under `My Apps/` would fail as `My%20Apps`. `createOrgPackApi(tree, options)`
builds a fresh app instance each time it is called, so make one per test and
nothing leaks between checks.

## The harness

`createOrgPackApi(tree, { records, context, init, plugins })` returns a pack.
**Node names are the addresses**: a bare name (`"greeting"`, `"visits"`)
reaches a node anywhere in the app; a repeated child is addressed by index
through its parent (`"visits[1].card"`).

| Call | What it does |
|---|---|
| `evalAt(formula, at?)` | Evaluates a formula (the leading `@` is optional) at a node, with that node's scope — `evalAt("length(visits)")`, `evalAt("place", "visits[0]")`. |
| `value(name)` | The node's current value: what the user typed, or its `compute`. |
| `lengthOf(name)` | How many times a repeating node repeats. |
| `setValue(name, v)` | Stores a value as a user input would. |
| `clearValue(name)` | Clears a stored value (and its descendants) so the `compute` default shows again. |
| `setCursor(name, args?)` | Navigates. `args` become `$args` — the **only** way to reach a detail screen built on `byId('Type', $args.id)`; an id put in `context` silently yields an empty record. |
| `renderHtml(name)` | Renders a content node's `htmlTemplate` exactly as the page would. It ignores `hidden` (see `isVisible`). Throws, as the page does, when the template evaluates to a non-string. |
| `isVisible(name)` | Whether the node would be on the page: its own `hidden` and every ancestor's. On a screen gated by sign-in or phase, this IS the logic — test it here, not with `renderHtml`. |
| `visibleChildren(name)` | The child names the page would draw under `name`; `[]` when `name` itself is hidden. |
| `childKeys(name)` | Every child address of a node, hidden or not. |
| `nodeAt(name)` | The node's raw config — read a button's `actions.<name>.script` from it to run the real script. |
| `runScriptAt(name, hosts, script?, staticContext?)` | Runs the script at `name` (a flow step, or a script you pass) with your stub hosts. **Returns a promise — always `await` it.** Result is `{ right: value }` or `{ left: error }`. |
| `widgetCommands` | Every `sendToWidget(...)` the scripts made, in order: `{ widget, key, command, args }`. |

Four hosts run for real, because they only change the page's own values:
`setValue` and `setValues` (assert with `pack.value()`), `clearValues` (assert
the value is gone) and `sendToWidget` (recorded in `widgetCommands`).

Every other host — `publishData`, `updateData`, `deleteData`, `navigate`,
`setAppValue`, `callFunction`, `createGroup`, `speak`, `submit` and the rest —
does not exist in a pack. You pass it as an `async` stub in `hosts.asyncHosts`,
record what it was called with, and assert on that: the test proves what the
app *would* have saved, with the exact shape. A script that calls a host you
didn't stub fails, with `left.message` naming it ("setAppValue isn't
available in a test pack: stub it in hosts.asyncHosts"), so add a stub even
for a call you don't assert on: `navigate: async () => undefined`. A stub in
`syncHosts` doesn't count. Your own stub always wins, including over the four
that run for real.

A failed run's `left` is `{ message, expression }`, the error and the source
of the part that failed, so `JSON.stringify(result)` prints it.

```js
test("adding a visit publishes a Visit record for the typed place", async () => {
  const pack = createOrgPackApi(tree, { context: { $authKind: "google" } });
  pack.setValue("visitor", "Lisbon");
  const published = [];
  const script = pack.nodeAt("addVisit").actions.add.script;
  const result = await pack.runScriptAt(
    "addVisit",
    { asyncHosts: { publishData: async (args) => (published.push(args), { id: "V3", ...args.data }) } },
    script,
  );
  assert.ok("right" in result, JSON.stringify(result));
  assert.deepEqual(published, [{ type: "Visit", data: { place: "Lisbon" } }]);
});
```

A button action that declares `params` (a `data-param-id` on the element) gets
them through the fourth argument: `runScriptAt("card", hosts, script, { $params: { id: "V1" } })`.
A value the script sets with `setAppValue` is read from your stub's capture,
not from `pack.value()`. One set with `setValue` is read with `pack.value()`:

```js
test("tapping a size chip fills in the size", async () => {
  const pack = createOrgPackApi(tree, { context: { $authKind: "google" } });
  const script = pack.nodeAt("size").actions.pick.script; // setValue($params.v)
  const result = await pack.runScriptAt("size", {}, script, { $params: { v: "568" } });
  assert.ok("right" in result, JSON.stringify(result));
  assert.equal(pack.value("size"), "568");
});
```

### Records and identity

`records` stand in for the app's saved data, the way the live app loads it:

```js
const visits = [
  { id: "V1", type: "Visit", place: "Lisbon" },
  { id: "V2", type: "Visit", place: "Porto" },
];
const pack = createOrgPackApi(tree, { records: visits, context: { $userKey: "ada" } });
```

- A record's `type` must be a data type **some node binds to** (`data:
  { dataType: "Visit", source: "storage" }`). A type only ever read as
  `$data.Visit` in a formula is not bound, the live app would never load it,
  and the harness refuses the record rather than let a check pass that the
  page would fail.
- A record for a binding with `scope: "user"` or `scope: "global"` must carry
  `_scope: "user"` / `_scope: "global"` — the marker the live load stamps —
  or the repeating list is empty while `$data.Visit` still sees it, which
  looks like two bugs. Per-user records also need an identity:
  `context: { $userKey: "ada" }`.
- Soft-deleted records (`isDeleted: true`) are dropped, as on the page.

`context` is the app context: `$authKind` (`"google"`, `"orgLogin"`, or
`"anon"` for a visitor), `$userKey` (a username, or `"anon"` — a Google user
with no username yet is signed in but keyed `"anon"`, which is why saving
gates on `$userKey != 'anon'` and viewing on `$authKind != 'anon'`), `$email`,
`$now` (a UTC ISO string such as `"2026-10-20T09:15:00Z"`, which pins the
clock; unset, `$now` is undefined, so formulas guard `$now != null`), and any
other `$`-variable the config reads. `init`
pre-fills inputs by name; `plugins: true` makes the app's own html plugins
callable when a template uses one.

### Live (realtime) apps

`createRealtimeStore(records)` gives a fake live store for scripts that call
`setRealtime` / `updateRealtime`: spread its `asyncHosts` into the hosts you
pass to `runScriptAt`, then assert on `store.record("Game/g1")` — the record a
write *leaves behind*, which is the only assertion that tells a merge from a
data-destroying replace. `store.writes` lists them in order. The app's server
rules (`app.transitions`) do not run in a pack: test those with `og sim`.

## When to write a check, and what to check

Write the pack as you build, not after:

- **Every screen with a write** (a button or flow step that saves, updates or
  deletes): run its real script with stubs and assert the exact record shape.
  This is where bugs live — a wrong field name, a missing id, a merge that
  replaces.
- **Every computed value the user asked for by name** (a total, a count, a
  rank, "who's winning"): `evalAt` it with records that make the answer
  obvious by hand.
- **Every sign-in or phase gate**: `isVisible` for a signed-out visitor
  (`$authKind: "anon"`) and a signed-in one (`"google"`); a per-user save
  gate needs `$userKey` too.
- **A detail screen**: `setCursor("detail", { id: "V1" })`, then render it.
- **A change to logic that already works**: write the check for the new
  behaviour first, watch it fail against the current config, then change the
  config until it passes. The failure proves the check is looking at the
  right thing.

One file per screen or feature, three to eight checks each, plain names a
person could read aloud. Fixtures are a few hand-written records with values
that make the expected answer obvious; never copy real data in.

When a check fails, read the assertion: it names the node and the value. Fix
the **config**, unless the check itself encoded the wrong expectation — then
fix the check and say so. Run `og test` before every draft publish and again
before `og promote-draft`; tell the user the one-line result.

## What a pack can't see

- **Anything the stubs stand in for**: the real save, permissions, email,
  push. A pack proves the app *asked* for the right write.
- **Widgets** (sandboxed pages) and their messages: only `sendToWidget` calls
  are recorded.
- **Server rules** (`app.transitions`): use `og sim`.
- **The rendered look**: `renderHtml` gives the markup, not the layout. The
  draft preview and `og check-draft` cover the page itself.

A pack is the place for an app's logic: field maths, filters, who sees what,
what gets saved. Keep looks and feel for the preview.
