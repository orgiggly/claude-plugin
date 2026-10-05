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
