# Org outline notation

An **org outline** is a JSX-style rendering of an org's config (`RawOrgDataTree`) at one of
four detail levels. It answers "what is this org and how is it put together" in a tenth of the
bytes of `config.json`, and at its fullest level is the input the reverse transform
(`parseOutline`, epic #2067) compiles back into a config.

```ts
import { orgOutline, parseOutline } from "@orgiggly/shared";
const text = orgOutline(tree, { level: 1 }); // 0 | 1 | 2 | 3
const back = parseOutline(orgOutline(tree, { level: 3 })); // Either<RawOrgDataTree, OutlineParseError>
```

Pure and deterministic: the same tree always renders the same bytes, so outlines diff cleanly.

From the shell, `og outline` reads a local config with no network or admin key, or fetches one
by its org id:

```bash
og outline orgs/mock/webberoonies/config.json            # L1 structure of the committed config
og outline orgs/mock/webberoonies/config.json --level 3  # the lossless form
og outline orgs/mock/webberoonies/config.json --at appConfig.recipeBook --level 3   # one screen, in full
og outline mock/webberoonies --draft                     # fetched, like fetch-org
```

The intended reading order is L1 for the whole org, then `--at` for the part you are about to
change: `/develop-org` and `/init-org` work this way instead of loading `config.json` into
context.

Every committed org also carries its L1 outline as `orgs/{user}/{org}/outline.txt`, written by
`npm run generate:outlines` (and by `og fetch-org … --output …/config.json`) and drift-guarded by
`npm run generate:check`, so a config change shows up in review as a readable structural diff.

## Levels

| | L0 skeleton | L1 structure | L2 detail | L3 lossless |
|---|---|---|---|---|
| appConfig depth | screens and their direct children | every node | every node | every node |
| attributes | `name` only | + `label`, sugar, `purpose`, `maxLength` on an unbound repeat | + every scalar, nested as `{json}` | everything |
| `htmlTemplate` | — | — | stub: `html="first line… (n bytes)"` | element body text |
| `variable` runs | collapse runs of 2+ | collapse runs of 3+ | — | — |
| app rules | — | `<notification label=…/>`, `<transition label=…/>` | + every scalar | everything |
| `<users>` | — | names | + email, isAdmin | everything |
| `<objectTypes>` | type tags | + `<field name:type/>`, `parent` | + icon, field members | everything |
| `<objectInstances>` | `count` per type | + `eg` samples | + `eg` samples | full rows |
| `<plugins>` | plugin tags | + `params` names | + scalars, html stub | full `parameters`, body |

Bytes for the five snapshot orgs are pinned in `orgOutline.corpus.test.ts`: L1 stays under 12%
of the config's size on disk.

## Scoping with `at`

`orgOutline(tree, { level, at })` — `og outline … --at <path>` — renders one slot or one item as
the document root, at indent 0, in exactly the form it takes inside the whole-org outline. The
path is dotted names and its first segment is a slot:

| path | target |
|---|---|
| `appConfig` · `users` · `objectTypes` · `objectInstances` · `plugins` | the whole slot |
| `appConfig.recipeBook` · `appConfig.calendar.calendartabs.daily` | a node, each segment a child's `name` (its `label` when the name is empty, as the L0 line shows it) |
| `users.dave` | a user or group, walked the same way |
| `objectTypes.Recipe` | one object type |
| `objectInstances.Recipe` | one per-type instance group, as the outline regroups rows |
| `plugins.PictureLink` | one plugin |

```jsx
<subsection name="recipes" label="Recipes" repeating of="Recipe" source="storage">
  <PictureLink name="pictureLink"/>
</subsection>
```

Levels apply unchanged, with one deliberate difference: a screen named as the target shows its
direct children at L0 (in the whole-org view a screen's children are leaves only when the screen
is itself nested). `objectTypes.X`, `objectInstances.X` and `plugins.X` are one level deep; a
name containing a dot cannot be addressed. An unresolved path is a one-line message naming the
failing segment and the names available there — `resolveOutlinePath(tree, at)` returns it as an
`Either`, `og outline` prints it and exits 1, and `orgOutline` throws it.

## Grammar

### The root

```jsx
<org versionId="2026-09-08T13-04-26-523Z" apiVersion="0.1" minClientVersion={3}>
  <appConfig …>…</appConfig>
  <users>…</users>
  <objectTypes>…</objectTypes>
  <objectInstances>…</objectInstances>
  <plugins>…</plugins>
</org>
```

Slots always appear in that order; an absent slot is omitted. The slot roots are synthetic
folders and are folded into the slot tag — their children are what you see. `<appConfig>` *is*
the `app` node, so the app's own attributes ride on that tag, and its `notifications` and
`transitions` arrays render as `<notification …/>` / `<transition …/>` lines ahead of the tree.

### Elements

Every tree node is an element: its **`type` is the tag** and its **`name` is an attribute**.
Two spaces of indent per depth; a node with children closes with `</tag>`, a leaf is `<tag …/>`.
**Indentation is significant**: a child sits at exactly its parent's indent plus two spaces, and
that is how the parser tells a child element from the first line of an HTML body (below).

```jsx
<screen name="recipeBook" label="Recipe Book">
  <content name="New Recipe"/>
  <subsection name="recipes" label="Recipes" repeating of="Recipe" source="storage">
    <PictureLink name="pictureLink"/>
  </subsection>
</screen>
```

Attribute order is fixed: `name`, `label` (only when it differs from `name`), `purpose`, the
L1 sugar, then every remaining key sorted by plain code-unit order, and finally the HTML template
(`html=` stub or `htmlTemplate=` fallback). At L0 a node with no `name` shows its `label` instead.

A `repeating` node with no `of=` shows its `maxLength` at L1 — `<subsection name="days" repeating
maxLength="@365">` — because "repeat n times" is structure, the counterpart of "repeat over these
rows". At L2 and L3 `maxLength` is an ordinary sorted attribute like any other scalar.

`purpose` is a content node's one-sentence statement of what the block shows or does (never
rendered to visitors). It appears from L1, where the HTML itself is not shown, so a structure
outline still says what each block is for: `<content name="hero" purpose="Hero banner with the
tagline"/>`.

### Attribute values

| Value | Written as | Example |
|---|---|---|
| string | JSON string literal | `label="Recipe Book"`, `note="say \"hi\"\nnow"` |
| number | `{n}` | `pageSize={5}`, `weight={-1.5}` |
| `true` | bare key | `hidden`, `isTransient` |
| `false` | `{false}` | `hidden={false}` |
| `null` | `{null}` | `parent={null}` |
| object / array | compact JSON in braces | `layout={{"maxColumns":2}}`, `order={[1,"a"]}` |

One escaping rule: a quoted value is a JSON string, a braced value is JSON. **Empty values are
dropped at every level** — `""`, `[]`, `{}`, `undefined`, and empty members nested anywhere
inside a `{json}` value. `id` fields and `_children` are never written as attributes.

### L1 sugar

Three data-binding fields read as a sentence and appear from L1:

| Field | Sugar |
|---|---|
| `isRepeating: true` | bare `repeating` |
| `data.dataType` | `of="Recipe"` |
| `data.source` | `source="storage"` — omitted when `"embedded"`, the default |

The rest of `data` surfaces from L2 as `data={json}` minus those two members. The sugar is used
at every level, including L3: it is notation, not a lossy summary.

### HTML templates

`htmlTemplate` is omitted at L0 and L1 — the `purpose` attribute describes the block instead. At
L2 it is a stub, `html="<first line clipped to 60 chars>… (n bytes)"`. At L3 it is the element's
body, verbatim and unindented, between the opening tag's line and the closing tag:

```jsx
<content name="hero">
<h1>Hello</h1>
<p>world</p>
</content>
```

The line after an opening tag decides what follows: if it starts with the child indent and `<`
it is the first child element; anything else starts a body, which runs verbatim to the closing
tag. So the body form is used only when it is unambiguous — the template falls back to an
ordinary string attribute, `htmlTemplate="…"`, when the body would contain its own closing tag
(`</content>`), when the node also has children, or when the template's first line itself starts
with the child indent followed by `<` (it would read as a child). A node has children or a body,
never both.

The body is the template exactly as stored, so a committed org's body usually starts with the
canonical `` @` `` wrapper. A body written without it still renders: a plain template containing
`${…}` interpolates as if wrapped (#2129), so the `<h1>Hello</h1>` example above and
`<h1>${title}</h1>` are both valid bodies.

### Variable runs

Consecutive sibling `variable` nodes collapse to one line at the low levels — runs of two or
more at L0, three or more at L1, never at L2/L3:

```jsx
<variables n={5} names="monthIndex, viewYear, viewMonth, monthStart, gridStart"/>
```

## Slots

**`<users>`** — omitted at L0; one `<user name=…/>` or `<group name=…/>` per node, following the
ordinary attribute levels.

**`<objectTypes>`** — the object type's name is the tag. Fields are children written
`<field name:type …/>`; `isList: true` is a bare `list`. The `parent` relation is structure and
shows at L1; `icon` and the other members of the type and of each field follow at L2.

```jsx
<Post icon="post" parent={{"type":"Blog","idField":"blogId"}}>
  <field caption:text variant="multiline"/>
  <field tags:text list/>
</Post>
```

A name that is not an identifier falls back to `<objectType name="Two Words">` and
`<field name="odd name" type="text"/>`. So does a collection type: the canonical form is
`<field name="tags" type="list<text>"/>`. Lenient parsing (a compiled skeleton) also accepts the
sugar `<field tags:list<text>/>` / `<field byId:map<Member>/>` — one level, no `list` flag — and
reads it identically; strict parsing refuses it, so an L3 outline has one spelling.

**`<objectInstances>`** — instance folders are flattened and rows grouped by type, in first-seen
order. L0–L2 show one line per type, `<Post count={3} eg={["Beans on Toast","Pasta Bake"]}/>`,
where `eg` holds up to three display values (a row's `name`, else its first non-empty string
field that is not an id — taken in the object type's field order, then any remaining keys sorted,
so the sample never depends on JSON key order — clipped to 40 characters). L3 wraps the full rows:

```jsx
<Post count={2}>
  <row caption="first" pic={{"url":"u"}}/>
  <row caption="second"/>
</Post>
```

A type name that is not an identifier renders as `<instances of="…" count={n}>`.

**`<plugins>`** — the plugin's name is the tag. L1–L2 list the parameter names,
`<PictureLink params={["link","picUrl"]}/>`; L3 gives the full `parameters={[…]}` and the
plugin's HTML template as body text like any other node. A bare string in the slot renders as
`<pluginRef name="X"/>` — defensive only, no committed org has one, so it is pinned by the unit
test rather than a snapshot.

## Parsing

`parseOutline(text)` reverses L3. It is a line-based tokeniser plus a recursive descent — no XML
library, because bodies are raw HTML — and returns `Either<RawOrgDataTree, OutlineParseError>`,
where the error is `{ message, line, column }` (1-based; `formatParseError` renders
`line 12, col 7: …`) so a fix turn can point at the spot. The parser reverses notation only: it
does not know the node model, so whether `<PictureLink>` is a real node type is the validator's
question, not the parser's.

It rejects, with a location, everything that only exists at L0–L2 because those forms are lossy:
`<variables …/>`, `eg=`, `html=`, `params=`, and `<pluginRef/>` (a bare string plugin reference
has no tree representation; no committed org holds one). An instance group's `count=` is checked
against the rows that follow, since a generated outline can miscount. Slots may come in any order
but each at most once; `<org>` takes only `versionId`, `apiVersion` and `minClientVersion`.

**`lenientBody`** (`parseOutline(text, { lenientBody: true })`, also a `compileOutline` option) is
for an outline a *model* wrote rather than the emitter. The strict body rule — an HTML body starts
unindented and the closing tag sits at the element's exact indent — is exactly what a writer told
"indentation is significant" gets wrong, and #2076 measured 29 of 73 model-written screens failing
on it. Under `lenientBody` a `content` element, or a plugin under `<plugins>`, is always a body
however its HTML is indented (so a content node can no longer carry child elements); every closing
tag matches at any indent; and the body is dedented by its common leading whitespace. Strict mode
and the L3 round trip are unchanged.

## Compiling a sparse outline

`compileOutline(text)` (`@orgiggly/shared`, `validation/compileOutline.ts`) takes an L1 or L2
outline — the shape the org-gen agent writes first, before any HTML or data — and returns a
config that passes the **closing gate**: `validateOrg` with no blocking error and the io-ts
decode (`selectOrgData`) returning Right. It is `parseOutline(text, { lenient: true })` followed
by a fill pass, and it returns `Either<CompiledOrg, CompileError>`:

```ts
const r = compileOutline(orgOutline(tree, { level: 1 }));
// Right: { tree, fills, warnings }   Left: { kind: "parse", error } | { kind: "validation", errors, fills }
```

**Lenient parsing** accepts what strict mode refuses, mapping each stand-in to its nearest tree
form: `<variables n={k} names="a, b"/>` becomes k `variable` nodes; `html="…"` stubs and `eg=`
samples are dropped; `count={n}` with no rows is an empty group; `params="a, b"` on a plugin
becomes `parameters: [{ name: "a" }, { name: "b" }]`. `<pluginRef/>` is still an error, and rows
that do follow a `count=` must still add up.

**Fills** are everything the compiler had to invent, each on record in `fills` as
`{ path, kind, detail }` with an `at`-style path, so a later turn can show the model what it
still owes:

| kind | what | example |
|---|---|---|
| `id` | a fresh id on every node, row, type and plugin (`${type}-xxxx`) | `appConfig.home.id: screen-k3Fq` |
| `default` | a value the codec requires but the outline never carries | a plugin's empty `htmlTemplate`, empty `parameters` |
| `placeholder` | a stand-in the author must replace | `form.formConfig` — `dataType` from the enclosing `of=`, else the object type whose name prefixes the form's (`recipeForm` → `Recipe`), else the first type; `mediaRoom.roomKey` → `"<name>-room"`; a repeat with neither `of=` nor `maxLength` → `maxLength: 1`; a `content` with `purpose` but no template → `<!-- TODO(purpose): … -->`; every other field in the generated `REQUIRED_FIELDS` registry → its enum's first value or `"TODO"` |
| `dropped` | removed because no honest default exists | an L1 `<transition label=…/>` has no `next=`, so the rule is dropped rather than invented |

Measured on the five snapshot orgs, the whole L1 → gate gap was five error kinds: `formConfig`,
`roomKey`, an unbound repeat's `maxLength`, label-only transition rules and undeclared plugin
`params`. The compiler fills the first three, drops the fourth and reads the fifth; at L2 it
invents nothing but ids and a widget plugin's empty template (`compileOutline.corpus.test.ts`).

## What L3 loses

L3 is lossless **modulo** the **canonical form**, which `canonicalOrgTree(tree)` computes and
`parseOutline(orgOutline(tree, { level: 3 }))` returns:

- `id` fields — regenerated by the compiler, never written.
- Empty values, at any depth.
- Defaults that the sugar folds away: `data.source: "embedded"`, `isRepeating: false`,
  `isList: false`, and a `label` equal to its `name`.
- Instance folder names and the slot roots' own attributes (they are synthetic folders): every
  slot root comes back as a bare `{ type: "folder" }`, and instance rows come back in one folder
  per type, named after the type, in first-seen order.
- The raw variant-family spelling: `{ type: "appNode", variant: "tab" }` renders as `<tab>` and
  `{ type: "flowStep", variant: "script" }` as `<script>`; each comes back in its authored form,
  `{ type: "tab" }` / `{ type: "script" }` (#2090). Same `AppDef` either way.
- Implied types: an object type is `type: "objectType"`, a plugin `type: "plugin"`, a rule in
  `notifications`/`transitions` has no `type` at all, a row's `type` is its group's.
- JSON key order — attributes are sorted, so a parsed node's keys are in outline order.

Everything else round-trips mechanically: attributes to fields, children to `_children`, `{json}`
to nested values, body text to `htmlTemplate`.

## Tests

- `orgOutline.test.ts` pins every construct above on hand-built trees, including every `at`
  target kind and every unresolved-path message.
- `orgOutline.corpus.test.ts` snapshots five orgs at all four levels plus one `at`-scoped screen,
  asserts the L1 size ratio and that every construct listed in this document appears in at least
  one snapshot, and renders every `orgs/**/config.json` at every level without throwing.
- `parseOutline.test.ts` pins the reverse of every construct, and the located error for every
  rejected one, on hand-written outlines — plus what lenient mode accepts instead.
- `validation/compileOutline.test.ts` pins every fill kind on hand-written sparse outlines, and
  that every `REQUIRED_FIELDS` entry gets a fill; `compileOutline.corpus.test.ts` compiles the
  five snapshot orgs' L1 and L2 outlines through the closing gate and snapshots their fills.
- `roundTrip.corpus.test.ts` is the proof: for every `orgs/**/config.json`, the L3 outline parses,
  deep-equals `canonicalOrgTree(config)`, renders byte-for-byte the same outline at every level,
  and the canonical form is a fixed point.
