<!-- Auto-generated from formulaModel.json. Do not edit manually. -->

## Available Operators

**Arithmetic:** `+` `-` `*` `/` `%`  
**Comparison:** `==` `!=` `>` `>=` `<` `<=`  
**Logical:** `&&` `||` `??` `!`  
**Ternary:** `condition ? trueValue : falseValue` (preferred for conditionals)
**Let:** `let name = value; rest` (an immutable local for the rest of the statement chain)
**Match:** `match { cond -> value, …, _ -> fallback }  |  match expr { "a" -> value, …, _ -> fallback }` (arms top-down, the first winning arm's value, lazily; `_` is the default (without one the gate warns `match-no-default`, since no match yields undefined); the guard form wins on a true condition, the value form evaluates `expr` once and an arm wins when its value `==` it (null and undefined collapse, no coercion, so `match x { null -> … }` catches an unset x); `->` is only valid inside a match)

Note: `+` concatenates strings and adds numbers. When one side is a string, a missing value (null or undefined) on the other side counts as '' - `'Hi ' + p.name` is `'Hi '` when `p` is missing, never `'Hi undefined'`. Date objects can be added/subtracted with numbers (days).
Note: `>`, `>=`, `<` and `<=` are false when either side is nothing (null or undefined), so `stacks[pid] > 0` is false for a missing seat with no guard needed. `x == null` matches both null and undefined. `sort()` still places nothing last.
Note: `a ?? b` is `a` unless `a` is null or undefined - unlike `||` it keeps `0`, `''` and `false`. Member access on nothing is already nothing (`p.name` with `p` missing is undefined, never an error), so a guard chain like `a && a.b && a.b[k] ? a.b[k] : 0` is just `a.b[k] ?? 0`. `&&` and `||` short-circuit: the right side is only evaluated when the left side does not decide the result, so `length(board) < 3 || handRank(board).category >= 5` never calls `handRank` on a short board. They return an operand, as in JavaScript: `0 && x` is `0`, `a || 'default'` is `a` when truthy.

Arrow functions (`=>`) are first-class values: `(x) => x * 2` evaluates to a lambda that closes over the scope it was written in, so it can be bound to a name, passed through a `function` node's parameter, and called later — `double = (x) => x * 2; double(21)`. As a higher-order-function callback (map, filter, reduce, forEach, times, every, some, find, findIndex) an arrow's declared parameters bind positionally to that HOF's loop values (`(it, i)`, `(acc, it, i)` for reduce, `(it, i, arr)` for forEach, `(i)` for times) and NOTHING else is injected, so an outer variable named `it` or `i` stays visible inside the body. A callback written WITHOUT an arrow still reads those loop variables directly: `.map(it * 2)` is the older, equivalent form of `.map((x) => x * 2)`. Do not leave an arrow as the value of a whole formula or of a `${…}` template slot — a lambda is not a string, and the closing gate rejects it. Guard-clause match expressions are supported: `match { cond1 -> expr1, cond2 -> expr2, _ -> fallback }` evaluates arms top-down, the first true condition wins, only the winning arm's expression evaluates, and `_` is the default arm. Prefer match over three or more nested ternaries; always include a `_` arm (a match with none evaluates to nothing when no condition holds, and the closing gate warns). `->` is only valid inside a match block. Local bindings: `let name = value; rest` binds `name` for every later statement in the same `;` chain (and inside lambdas written there) and cannot be reassigned or redeclared — `let rows = filter(items, (r) => r.ok); publishData({data: rows})`. Prefer `let` over a plain `name = value` assignment: a `let` never flushes the engine's function-call memo, so a `function` node body that hoists a sub-result with `let` stays memo-safe, and a typo'd read of a `let` name is caught at publish time. A `function` node's `parameters` may carry type annotations — `game: Game, pid` types only `game` — and a `returns` field may declare its result type; both are checked by the closing gate only (member access on a typed parameter must name a declared field; an argument of an obviously different type warns) and never change evaluation.

## Available Functions

**Logical:**

- `if(condition, trueValue, falseValue)` - Conditional expression
- `and(...args)` - Logical AND (all args must be truthy)
- `or(...args)` - Logical OR (any arg must be truthy)

**Array operations:**

- `length(arrayOrString)` - The number of items in a list, or characters in a string.. Use this rather than `.length`: on a list, member access maps over the elements, so `xs.length` is a list of nothing, not a number.
- `sum(array)` - Sum numeric values
- `avg(array)` - Average of numeric values
- `min(...values)` - The smallest number - of one list, or of the arguments themselves. Nothing (null/undefined) is skipped; no values gives nothing.
- `max(...values)` - The largest number - of one list, or of the arguments themselves. Nothing (null/undefined) is skipped; no values gives nothing.
- `first(list)` - The first item of a list, or nothing when it is empty or not a list.. Same as `xs[0]`; reads better in a chain. For the first MATCH use `find`, not `filter(...)[0]`.
- `last(list)` - The last item of a list, or nothing when it is empty or not a list.. Replaces `xs[length(xs) - 1]` and `xs.slice(-1)[0]`.
- `flatten(listOfLists)` - Join a list of lists into one list, one level deep; items that are not lists are kept as they are. Nothing gives [].
- `split(string, separator?)` - Split string into array
- `join(array, separator?)` - Join array into string
- `concat(...arrays)` - Concatenate arrays into one. Non-array args are ignored.. Takes any number of lists, so `concat(a, b, c)` replaces `concat(concat(a, b), c)`.
- `uniq(array, field?: string)` - Extract unique values. With field param, plucks that field from each object first.
- `sort(array, field?: string, desc?: boolean)` - Sort an array ascending, returning a new array. With field param, sorts objects by that field (elements kept whole). Numbers sort numerically; anything else compares as strings. Pass desc=true to reverse. Stable; non-array input returns [].
- `shuffle(array, seed: number)` - Deterministically shuffle an array given a seed — the same seed always produces the same permutation. Pass $seed inside a transition rule so a shuffle survives RTDB transaction retries unchanged. Non-array input returns [].
- `forEach(string, template)` - Iterate over string lines and concatenate results (Use `it` for current line, `i` for index, `arr` for all lines)
- `filter(array, predicate)` - Filter array (Use `it` for current item, `i` for index)
- `map(array, mapper)` - Transform array (Use `it` for current item, `i` for index)
- `reduce(array, reducer, initialValue?)` - Reduce array to single value (Use `acc` for accumulator, `it` for current item, `i` for index)
- `every(array, predicate)` - True when the predicate holds for every element (true for an empty array). Stops at the first false element. (Use `it` for current item, `i` for index. Replaces the `and(...map(...))` idiom.)
- `some(array, predicate)` - True when the predicate holds for at least one element (false for an empty array). Stops at the first true element. (Use `it` for current item, `i` for index. Replaces the `or(...map(...))` and `length(filter(...)) > 0` idioms.)
- `find(array, predicate)` - The first element the predicate holds for, or nothing when none matches. Stops at the first match. (Use `it` for current item, `i` for index. Replaces the `filter(...)[0]` idiom.)
- `findIndex(array, predicate)` - The zero-based index of the first element the predicate holds for, or -1 when none matches. Stops at the first match. (Use `it` for current item, `i` for index.)
- `count(array, predicate?)` - How many elements the predicate holds for (the length of the list without one). Non-list input gives 0. (Use `it` for current item, `i` for index. Replaces `length(filter(...))`; to ask whether ANY match, use `some`.)
- `groupBy(array, key: expression | string)` - An object of lists: each element filed under its key - a field name, or an expression/arrow giving the key. Elements whose key is nothing are left out. Non-list input gives {}. (Use `it` for current item, `i` for index, or pass a field name as a string.)
- `sumBy(array, value: expression | string)` - The sum of one number per element - a field name, or an expression/arrow giving the number. Missing values add nothing. Non-list input gives 0. (Use `it` for current item, `i` for index, or pass a field name as a string. Replaces `sum(xs.map(...))`.)

**Date operations:**

- `today()` - Current date
- `dateFrom(string)` - Parse date from string
- `dateCompare(a: Date, b: Date)` - Compare dates (returns -1, 0, or 1)
- `formatDate(date: Date, format?: DateFormat)` - Format date. Formats: 'fullDate' (December 8, 2025), 'weekdayShort', 'weekdayLong', 'dayOfMonth', 'monthLong', 'monthShort', 'monthNumber' (unpadded 1-12), 'year', 'monthYear' (December 2025). monthNumber/year return digit strings, so `formatDate(d, 'year') * 12 + (formatDate(d, 'monthNumber') - 1)` is a month index for month arithmetic (parenthesise the subtraction: `+` with a digit string concatenates, `-` and `*` always go numeric); rebuild a date with dateFrom(year + '-' + mm + '-01').
- `formatPeriod(start: Date, end?: Date)` - Format date range. Friendly ranges: 'tomorrow', '3 days, from 31st Dec to 2nd Jan'. Wall-clock datetime inputs ('2026-06-05T14:30', no offset) include the time: 'today, 14:30–16:30'
- `now()` - The current time as a UTC ISO second-string (2026-06-11T18:55:00Z) - a point-in-time read taken when the formula runs, NOT reactive. Use $now when the formula should re-evaluate as time passes; use now() to stamp a moment into a record from a script.. Impure: a function calling now() is never memoised. Same string shape as $now, so the two compare lexicographically.
- `nextOccurrence(after, time: string, tz: string, days?: string)` - Epoch milliseconds of the next moment, strictly later than the starting instant, when the wall clock in the given time zone reads the given "HH:MM" time (24-hour, two-digit hour), optionally only on the listed weekdays. The building block of a recurring wall-clock transition rule: a schedule record's `next` sets `nextAt` with it, and the rule's `dueAt` reads `nextAt` back.. `after` is epoch ms (a transition rule's $now) or an ISO instant string. `tz` is an IANA zone name ('Europe/London'). `days` is a comma-separated list of three-letter weekdays ('mon,wed,fri'), case-insensitive; omit it for every day. Strictly after, so passing a firing's own $now yields the NEXT occurrence. DST-correct: a time inside a spring-forward gap resolves forward, and a repeated fall-back time takes the earlier instant, so a daily rule fires once a day. Any malformed argument returns undefined, which a timer rule's dueAt reads as "no timer" rather than a guessed time. Pure, so it is safe in `next`/`seed`; keep `dueAt` as a plain field read like '@$target.nextAt'.

**Repo lookup:**

- `byId(typeName: string, id: string)` - Look up a repo object by type and id. Returns the object or undefined. The standard way to resolve a record passed by id: a content action's script calls `navigate('detail', {id: $params.id})`, and the destination reads `byId('Type', $args.id)`.

**Other utilities:**

- `clamp(n, lo, hi)` - A number limited to the range lo..hi. A missing bound is no limit on that side; a missing number gives nothing.
- `upper(string)` - Uppercase a string (non-strings are coerced to string first; null/undefined → empty string).
- `lower(string)` - Lowercase a string (non-strings are coerced to string first; null/undefined → empty string).
- `floor(number: number)` - Largest integer ≤ the number (rounds toward -∞). Use for integer division: floor(a / b). Non-numbers are coerced.
- `ceil(number: number)` - Smallest integer ≥ the number (rounds toward +∞).
- `round(number: number)` - Round to the nearest integer (halves round toward +∞).
- `abs(number: number)` - Absolute value of the number.
- `generateId(length: number, seed?: number)` - Generate random ID
- `regex(pattern: string, flags?: string)` - Create regular expression
- `fuzzyMatch(userAnswer, correctAnswer)` - Fuzzy string matching
- `toJson(value, indent?: number)` - Convert to JSON string
- `rand(max: number)` - Random integer from 0 to max (exclusive)
- `handRank(cardIds: string[])` - Rank a Texas Hold'em hand of 5-7 card ids (card_{s|h|d|c}{2-9|T|J|Q|K|A}, the cassino/bluffy id grammar). Returns { category (0 high card … 8 straight flush), categoryName, rank (one comparable integer: higher wins, equal splits), best (the five ids used, strongest first), label ('two pair, kings and fours') }. Pure and deterministic. A malformed id, duplicate, or wrong count is a formula error, never a silent low rank.
- `replace(string, needle, replacement?)` - Replace every occurrence of a substring. The needle is literal text, never a regex. Null/undefined inputs degrade: a nothing subject gives '', a nothing needle returns the subject unchanged, a nothing replacement deletes the needle.
- `omit(object, keys: string | string[])` - Copy an object without the named keys. Keys can be an array or a single key; a non-object input gives {}. The standard way to strip meta fields before re-emitting a record.
- `pick(object, keys: string | string[])` - Copy an object keeping only the named keys. Keys can be an array or a single key; a non-object input gives {}.
- `toMap(list, keyFn: arrow | string, valueFn?: arrow | string)` - Build an object from a list: each item's key is `keyFn(item, i)` and its value is `valueFn(item, i)` (the item itself when omitted). Either may be an arrow or a field name. Items whose key is nothing are skipped; a later duplicate key wins. Non-list input gives {}.. Replaces the quadratic `xs.reduce((acc, k) => ({ ...acc, [k]: v }), {})` idiom.
- `keys(object)` - The keys of an object, as a list of strings. A list reads as an index-keyed map with empty slots skipped, so a realtime integer-keyed map gives its real keys. Nothing gives [].
- `values(object)` - The values of an object, as a list - in key order, skipping empty slots of a list. Nothing gives [].
- `entries(object)` - The [key, value] pairs of an object, as a list - skipping empty slots of a list. Nothing gives [].
- `mapValues(object, fn: arrow)` - A copy of an object with every value replaced by `fn(value, key)`; the keys are kept. `fn` is an arrow. Nothing gives {}.
- `escapeHtml(string)` - Escape a string for safe interpolation into HTML: the ampersand, angle brackets and both quote characters become entities (ampersand first, so nothing double-escapes). Null/undefined give ''. Prefer the html tagged template, which applies this automatically.
- `urlEncode(string)` - Percent-encode a string for use inside a URL query or path segment (encodeURIComponent semantics: encodes & # % ? / and spaces). Null/undefined give ''.
- `html(strings, ...values)` - Tagged template for building safe HTML: every interpolation is auto-escaped, null/undefined render as '' (never the literal text 'undefined'), arrays join with '', and a nested html`...` result passes through unescaped - composition is the escape hatch for trusted markup. Returns a safe-string that unwraps to its markup in any template slot or string concat.. Use as a tag: html`<b>${name}</b>`. Compose lists by mapping to nested html templates and interpolating the array. Prefer it over string-concat HTML builders in function nodes - it kills both the injection risk and the literal-'undefined' class. (Worked examples live in the notes because the docs pipeline cannot carry backticks inside example blocks.)
- `times(count: number, template)` - Repeat expression N times, returns array of results (Use `it` and `i` for current index)

<!-- BEGIN PROMPT-STRIP: special-variables -->
## Special Variables

Read-only values the platform supplies to every formula (or only in the scope named). They are never written to app state.

**Iteration:**

- `$index` - The zero-based iteration index of the scope the formula is evaluated in - a list row, a tree node, or one iteration of a repeating subsection. Resolves to nothing at global scope, so a formula that also runs outside a repeating node should guard it. It is the EVALUATING scope's index, not that of the nearest repeating node in the tree: a formula on a field inside a row reads that row's index.
- `$parentIndex` - The iteration index of the enclosing repeating scope, one level out from `$index`. Resolves to nothing when the current scope has no repeating parent.
- `$scopeKey` - The pointer key of the scope the formula is evaluated in, for example `matches[3]`. Mainly a debugging aid: when a formula resolves the wrong value, this shows which scope the engine actually used.
- `$spanStart` - The start of the current record's run on the iteration axis - the value of the `startField` named by the node's `data.span`. Only rows produced by a spanning query carry one; anywhere else it resolves to nothing, like every other special variable out of context.
- `$spanEnd` - The end of the current record's run on the iteration axis - the value of the `endField` named by the node's `data.span`. Equal to `$spanStart` for a record that covers a single slot.
- `$spanPosition` - Where the current row sits within the record's run: `start`, `middle`, `end`, or `single` when the run covers exactly one slot. Use it to style a `mode: "repeat"` span so the repeated rows read as one continuous element rather than N separate cards. Computed from the record's OWN bounds against the current slot, with no neighbouring-slot lookup. One consequence: a run that began before the visible window reports `middle` on the window's first row rather than `start` - the truthful reading, since it IS a middle segment and the run started off-screen.
- `$spanLength` - How many slots the current record's run covers, counted over the slots that actually exist. Available inside a `mode: "grid"` span, where the platform enumerates the slot supplier's rows; in `repeat` and `once` modes it resolves to nothing, because those never enumerate slots and so have nothing to count. Counted, never derived by arithmetic on the axis. A run from Monday to Friday is five slots on a daily axis and one on a weekly one, so only the slots can answer it - and a run extending past the rendered window counts the slots it actually covers, not the ones it would cover if the window were bigger.

**App state and data:**

- `$state` (anywhere, and in bot actors with another meaning) - The whole app state object - definition, instance data, context and repo - in an app formula; inside a botActor (app.botActors), the decision state the actor's own `state` formula built. In an app it is an escape hatch for what no named variable covers; prefer a specific variable or a plain node reference, because a formula reading it is coupled to platform internals. In a bot actor it is the numeric summary (pot odds, stack ratios, hand category) the decider judges, available to `questions`, `moveId`, `move` and `fallbackMove`. The app-wide object is not part of the stable authoring surface: if you need it for something an org ought to be able to express directly, that is worth raising as a platform gap. In a bot actor, compute numbers in `state` and let the decider judge them (TypeSafe Jev is literal and bad at arithmetic); it is `{}` when the actor has no `state` formula.
- `$data` - Every record loaded into the org's repo, grouped by object type: `$data.Match` is the array of all Match records. Use it for whole-collection work - counting, deriving option lists, aggregating - and `byId` when you want one record by id.
- `$rows(subsectionName: string)` - One repeating subsection's rows as a single array, one element per rendered row, with the visitor's stored input layered over the row's bound record fields so an edit that has not been submitted yet still wins. The argument must be a literal string; the closing gate rejects a computed one. An unknown subsection name resolves to nothing rather than erroring, so check the spelling if a formula silently yields nothing. Prefer this over indexing the subsection by name, where a bracket index can drop the row's inputs.

**Context:**

- `$args` - The arguments the current screen was navigated with - the args object passed to `navigate('screen', {…})` (or `replaceScreen('screen', {…})`), whether that call came from a flow step's script or a content action's. An empty object when the screen was reached without any.
- `$now` - The current time as a UTC ISO second-string such as 2026-06-11T18:55:00Z, re-read about every 15 seconds so a formula referencing it updates as time passes. Only orgs whose config mentions it pay for that tick. It resolves to nothing outside the web app - the CLI and the closing gate have no clock - and every ordering comparison with nothing is false, so `$now >= deadline` and `$now < deadline` are both false without a clock. Write the test so false is the safe outcome, or guard with `$now != null` when absence needs its own branch. Inside a transition rule `$now` is server milliseconds rather than an ISO string, hoisted once per event.
- `$speech` - The latest speech-recognition result, an object with `text` and `lang`, for orgs that take voice input. Both members are null until something has been captured.
- `$variant` - The optional third URL segment, so one config can serve several keyed editions: /mock/wang/1994 evaluates with `$variant` as 1994. Resolves to nothing on a plain two-segment org URL, which is how a config tells its picker page apart from a keyed one.

**The signed-in visitor:**

- `$email` - The signed-in visitor's email address. Resolves to nothing for an anonymous visitor, so guard it rather than assume presence. Identity variables are injected read-only on the context rail and never written to app state, so a formula may read them freely.
- `$username` - The signed-in visitor's Orgiggly username. Resolves to nothing for an anonymous visitor.
- `$userKey` - A collision-safe key for the signed-in visitor, derived by the platform in one place so no org re-derives one from the email address. This is the value to stamp into a record so the same person finds it again on the next visit. It is the literal string `anon` for a visitor who is not signed in - not nothing - so test for the signed-in case with `$authKind != 'anon'` rather than a null check.
- `$authKind` - How the visitor is signed in: `google`, `orgLogin` for an org-scoped handle login, or `anon` for a visitor who is not signed in at all.
- `$authUid` - The visitor's Firebase sign-in id - the same value the platform stamps as `ownerUid` on every realtime record they write. Anonymous visitors have one too, and it stays the same across reloads on that device, so this is how an anonymous visitor finds their own records. Resolves to nothing until sign-in has finished and in headless evaluation, so guard with `$authUid != null`. Signing in with Google or an org login gives a DIFFERENT id from the anonymous one, so records written before signing in no longer match.
- `$connections` - Which outside services the visitor has connected to Orgiggly, one true or false per service. Today that is `spotify`, set up at /connect/spotify. It updates when they connect or disconnect in this tab. Resolves to nothing until the connection has been read, in headless evaluation, and in orgs whose config never mentions it, so compare with `== true` or `== false` rather than testing for truthiness. Then neither branch shows while it loads. A visitor who is not signed in reads as not connected.
- `$isOrgAdmin` - True when the visitor is the app's creator or one of its admins. Use it to hide the controls for a record type set to writeAccess admins, which only they can save. Resolves to nothing while it is being checked, in headless evaluation, and in apps whose config never mentions it, so hide with `$isOrgAdmin != true` rather than testing for false. Hiding a control is cosmetic: what actually stops other visitors saving is the type's writeAccess. In a guest (demo) app anyone can make themselves an admin, so there it is cosmetic only.
- `$orgUser` - The signed-in visitor's entry in the app's own users list, matched on that entry's usernames (Orgiggly usernames, comma-separated): {id, name, usernames}. Null for anyone not listed — signed out, or signed in as someone else. Use it to show something only to the people the app lists, e.g. a family. Undefined in headless evaluation, so `!$orgUser` hides there too. List people by username, never by email: the published config is readable by anyone. Hiding is cosmetic — a hidden node's text and links are still in the config.

**Transition rules and bot actors only:**

- `$record` (only in transition rules) - The realtime record whose write triggered the rule - the move a player just made. Read it to decide whether the move is allowed and what the next state should be.
- `$recordId` (only in transition rules) - The triggering record's realtime key. Useful for stamping which move produced a state change, or for keying per-player records.
- `$target` (only in transition rules) - The current state of the record the rule transitions, read fresh inside the transaction so a `condition` is checked against the live value rather than a stale snapshot. Not available in `targetId`: that field's job is to name the target, so nothing has been read yet when it runs.
- `$records` (only in transition rules) - Every record of the triggering record's type, as an array - all the moves, or all the players. The engine reads the collection only for rules that mention this variable, so a rule that never names it costs no extra read. Not available in `targetId`, for the same reason as `$target`.
- `$params` (only in transition rules or a content action's script) - The context's bound parameters — one name with a distinct meaning in each of its two scopes. Inside a transition rule: which org the rule is running for, an object with `username` and `orgName`. Inside a content node's declared action (the action's `script` body): the values the clicked element bound with `data-param-*` attributes — render-time interpolated literals, so `data-param-id="${id}"` arrives as `$params.id` with no click-time evaluation. In an action, `$params` is not `$args` — `$args` stays the current screen's nav args. To hand a bound param to the destination screen, pass it explicitly as the args object: `navigate('detail', {id: $params.id})`.
- `$seed` (only in transition rules) - A per-event random number, hoisted once per event so a shuffle commits the same permutation however many times the transaction retries. Use it instead of `rand()` anywhere a rule needs randomness. The stability across retries is the point: the transaction updater runs at least twice, and fresh randomness on each pass would deal a different hand every time.
- `$seat` (only in bot actors) - Inside a botActor (app.botActors): the seat id that `isBotTurn` returned for this write - the bot that is about to act. Available to every later field on the actor (`privateKey`, `state`, `questions`, `moveId`, `move`, `fallbackMove`). Whatever truthy string `isBotTurn` returned, coerced to a string. The reserved private-rail key is conventionally derived from it (`'__bot' + $seat`), and the same value keys the move's idempotent id.
- `$decision` (only in bot actors) - Inside a botActor's `move` formula ONLY: the decider's answers keyed by question name. A choice answer is `{ choice, confidence, probabilities }`, a score `{ score, confidence, probabilities }`, a noul `{ noul }` (0-1). Absent in `fallbackMove`, which runs precisely when there was no decision. Branch on `confidence` when it matters - below about 0.5 the decider is guessing between options.
- `$private` (only in transition rules) - The hidden per-player records the rule asked for in `privateReadUids`, as an object keyed by the key that loaded each one - normally an auth uid taken off a seat map on the target record. This is how a rule reads state no client can see: a player's own hand, or a face-down draw pile. A key with no record is ABSENT rather than present-as-null, so a plain truthiness check distinguishes "this player has no hand yet". Read once BEFORE the transaction, so it does not re-resolve on a retry - order concurrent moves with a guard on the public target, whose compare-and-set is what actually serialises them. Empty on an `onTimer` rule, which the closing gate rejects rather than letting it starve silently.
<!-- END PROMPT-STRIP: special-variables -->

## Interactive Elements

<!-- BEGIN PROMPT-STRIP: click-channels -->
**Navigation & click channels** (the handler acts on the FIRST matching attribute in the order listed — channels do not combine; channels marked *(legacy)* are frozen but keep working):

- `<button data-action="openTab" data-param-id="${id}">Open</button>` - Invoke a named action declared in the node's `actions` field — a `script`; to move screens it calls `navigate('screen')`, usually as the last line. `data-param-*` values are render-time interpolated literals, read into `$params` with no click-time evaluation. If the action declares `confirm`, the click asks first and the script runs only on confirm; `data-confirm-title` and `data-confirm-body` override that confirm's wording per element (render-time literals, like `data-param-*` — they cannot create a confirm the action does not declare). See below
- `<a data-speak-action="stop">Stop</a>` - Stop Web Speech API playback started by `data-speak`. Only `stop` is supported *(legacy)*
- `<a data-speak="expr" data-speak-lang="expr" data-speak-rate="expr">Play</a>` - Speak text via the Web Speech API; the optional `data-speak-lang` and `data-speak-rate` attributes are evaluated as formulas alongside the text *(legacy)*
- `<a data-script='setAppValue("k", "${id}"); navigate("screen")'>Open</a>` - Run a script — app-state, realtime and publish writes — and optionally navigate, in a single tap with **no flow**. See below *(legacy)*
- `<a setValue="expression">Text</a>` - Evaluate expression and set as the current node's value *(legacy)*
- `<a href="https://example.com" target="_blank">Visit</a>` - A genuine hyperlink — `http(s):`, `mailto:`, `tel:` and `/`-absolute URLs are left to the browser
- `<a href="screenName">Go</a>` - Static link to another screen
- `<a href="@pop">Back</a>` - Pop the navigation stack *(legacy)*
- `<a href="@submit">Save</a>` - Submit the current form *(legacy)*
- `<a href="screenName" data-args="@{ key: value }">Go</a>` - Navigate and attach named arguments, readable on the destination as `$args.key`. Pair with `byId('Type', id)` for cross-record links (e.g. linking from one record's detail page to a different record's). Works on `rel=` too *(legacy)*
- `<a rel="screenName">View</a>` - From a repeating section — the destination inherits the current item's scope. Resolves *relative to the clicked row*, so it can only reach a screen nested inside that same subsection *(legacy)*
- `<a rel="formScreen" param="expression">Edit</a>` - Writes the evaluated value at the destination pointer before navigating. **Forms only** — a flow reads `data-args`/`$args`, never `param` *(legacy)*

The *(legacy)* channels are frozen, not deprecated-and-removed: they keep working indefinitely and existing orgs are not being migrated wholesale. New configs should use only `href` (genuine hyperlinks) and `data-action` (declared behaviour) — the generators emit nothing else.
<!-- END PROMPT-STRIP: click-channels -->

**Form inputs:**

- Form inputs inside content sync back to the node's own value automatically (bidirectional).
- `<input data-trigger="input">` - Update on every keystroke (default)
- `<input data-trigger="blur">` - Update only when the input loses focus
- Checkboxes return booleans, number inputs return numbers, others return strings.
