## Data Binding

### Repeating Sections

To display a list of items, set `isRepeating: true` on a subsection and bind it to an object type via `data`:

```json
{
  "type": "subsection",
  "name": "taskList",
  "isRepeating": true,
  "data": {
    "dataType": "Task",
    "source": "embedded",
    "sort": { "field": "name", "direction": "asc" },
    "whereClause": "@this.status == 'active'"
  },
  "_children": [...]
}
```

### Data Sources

- `"embedded"` — Uses objectInstances data directly. **Best for generated orgs with sample data.** Data is visible immediately.
- `"storage"` — Persists to Firebase. For production apps where users add their own data.

**Always use `"embedded"` for generated orgs** so sample data appears when testing.

### Automatic Metadata

When data is published to storage (via forms or programmatically), each record automatically receives metadata fields:

- `id` — auto-generated unique ID (e.g., `"Story-0001"`) if not already set
- `createdAt` — ISO 8601 timestamp, set on first publish only
- `createdBy` — user ID of the creator
- `updatedAt` — ISO 8601 timestamp, refreshed on every publish
- `updatedBy` — user ID of the last editor

These fields are available for sorting (`"sort": { "field": "createdAt", "direction": "desc" }`) and in templates/formulas without defining them on the object type. **Do not add these fields to object type definitions or AI generation prompts** — they are injected server-side.

Note: `"embedded"` data (objectInstances) does not go through the publish pipeline, so embedded records lack these metadata fields unless manually added.

### whereClause and `this`

In a whereClause, each record is tested against the expression. Use `this` to explicitly reference the record being tested:

```json
"whereClause": "@this.categoryId == selectedCategoryId"
```

- `this.categoryId` — the record's `categoryId` field (explicit)
- `selectedCategoryId` — resolves from the parent scope

Without `this`, bare field names also resolve from the record first, then the parent scope. Use `this.field` when the record and parent scope may share field names (e.g., both have `id`) to make intent clear.

### Referencing Data in Formulas

Inside a repeating section, field names resolve to the current item automatically:
- `@name` — current item's name field
- `@status` — current item's status field

The `$index` variable holds the current iteration index (useful for display, e.g., `@$index + 1`).

### Cross-Type Data Access

The `$data` special variable provides access to all data objects grouped by type:

- `$data.Story` — all Story objects as an array
- `$data.Task` — all Task objects as an array

Use with `uniq()` to extract unique field values:
- `uniq($data.Story, "category")` — unique category values across all Stories

Example: filter a repeating section based on a toggle component's value:
```json
"whereClause": "@langFilter.includes(rightLang) || length(langFilter) == 0"
```
Here `langFilter` is a content node whose value is an array of selected strings, while `rightLang` comes from each record being tested. The `.includes()` method checks array membership.

### Current Time: `$now`

The `$now` special variable holds the current UTC time as an ISO second-string (`"2026-06-11T18:55:00Z"`), re-evaluating roughly every 15 seconds — formulas using it react to the passage of time without a reload. Use it for time-gated visibility/locking, countdowns, and "is this in the past?" checks.

Compare it lexicographically against strings in the **same 20-char UTC format** — no date arithmetic needed:

```json
"hidden": "@$now != null && $now >= revealAtUtc"
```

Two rules:
- **Decide what "no clock" should mean.** `$now` is undefined outside the browser (validation, headless evaluation). Every ordering comparison with nothing is `false` — `$now >= x` and `$now < x` alike — so write the condition so that `false` is the safe outcome, or guard explicitly with `$now != null` when absence needs its own branch.
- Only compare against full UTC strings of the identical format (e.g. a `"2026-06-11T18:55:00Z"` field value). Mixed formats or local-time strings break the lexicographic ordering.

### Signed-in user identity: `$userKey`, `$authKind`, `$username`, `$email`

For orgs with login (per-user state — profiles, predictions, anything "saved to my account"), the platform supplies the current user's identity as read-only special variables. Never re-derive identity from the email or invent your own key.

- **`$userKey`** — a stable, collision-proof key for the signed-in user. Use it as the `id` (and a `userKey` field) when upserting one record per user: `publishData({type: "Profile", data: {id: $userKey, userKey: $userKey, …}})`, and to find the current user's record: `@filter($data.Profile, it.userKey == $userKey)[0] || ({})`.
- **`$authKind`** — `"google"`, `"orgLogin"`, or `"anon"` (anonymous visitors are `"anon"`). Two different gates: **signed-in is `$authKind != 'anon'`** (`"hidden": "@$authKind == 'anon'"`); **"this person's data can be saved / they can own records" is `$userKey != 'anon'`** — a Google user with no username yet is signed in (`google`) but keyed `"anon"`, so a per-user write or a host/create action gates on `$userKey`, never on `$authKind`. `$userKey` is `"anon"` for visitors, never empty.
- **`$username`** — the reserved global username (may be `"anon"`). **`$email`** — the user's email (synthetic for name+PIN sessions). For a friendly name to display, prefer the platform `displayName` context var.
- **`$authUid`** — the raw Firebase auth uid, **anonymous visitors included**. It equals the `ownerUid` the platform stamps on every realtime record the visitor writes, so an anonymous visitor's own records are `@filter($data.Claim, it.ownerUid == $authUid)` — `$userKey` can't do this (it is `"anon"` for every visitor). Signing in mints a different uid than the anonymous one.

`$email`/`$username`/`$userKey`/`$authKind` are `undefined`/`"anon"` for anonymous visitors; all five are absent in headless/validation evaluation, so guard like `$now`. They are read-only context — they are never written to app state.

### Bulk-editing repeating rows: `$rows('subsectionName')`

When a repeating subsection lets the user edit one input per row (a score per match, a quantity per item, an answer per question), `$rows('subsectionName')` reads **every row's current state back as one array** — one element per rendered row — so a single script can save them all at once.

Each element is the row's bound record merged with the user's per-row inputs, **input-over-record** (the user's edit wins on a name collision). The argument **must be a string literal** — the subsection's name — so `$rows('matchRows')`, never `$rows(someVar)`.

`$rows` is available in `flowStep:script` bodies, formula values (`compute`, `label`, `hidden`, …), and `htmlTemplate` formulas.

This is the **declare-once bulk-save idiom**: declare the editable row once as a repeating subsection, then save the whole set in one script step:

```
publishData({ type: "Prediction", data: $rows('matchRows').map((r) => ({ id: r.id, score: r.score })) })
```

Without `$rows`, a bare reference to the subsection name resolves **record-over-input**, so a per-row input named like a bound record field is silently shadowed (the "edited value reads back as the original / live tally reads 0" trap). Use `$rows('name')` whenever a script or summary must see what the user actually typed into the rows.
