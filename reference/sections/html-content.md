## HTML Content Nodes

Content nodes render dynamic HTML using template literals:

```json
{
  "type": "content",
  "name": "header",
  "htmlTemplate": "@`<div style=\"padding: 16px;\"><h1>${title}</h1></div>`"
}
```

Use `${fieldName}` for dynamic values. The `@` + backtick wrapper shown above is the canonical stored form, but a template written without it interpolates the same way.

**Important:** Inside the template, `${...}` is the ONLY interpolation syntax — including for function calls like `${length(items)}`. Do not use `@()` or `@variable` inside:

- ✅ `@` `` `<span>${name}</span>` ``
- ❌ `@` `` `<span>@(items[$index].name)</span>` ``
- ❌ `@` `` `<span>@name</span>` `` — renders the literal characters `@name`
- ❌ `@` `` `<span>@length(items)</span>` `` — write `${length(items)}`

A bare `@name` in template text is never interpolated; it is literal text, and
the closing gate warns about it.

### Reactive Templates

Templates are re-rendered whenever values change. The rendering engine uses **DOM morphing** — only changed parts of the DOM are patched, preserving input focus, values, and cursor position. This means you can safely interpolate input and computed values in display elements alongside input elements.

**Reactive patterns:**

- **Conditional classes:** `class="card ${status}"` with `.card.active { ... }`
- **Conditional text:** `${score > 90 ? 'Excellent!' : 'Keep going'}`
- **Dynamic styles:** `style="color: ${isValid ? '#22c55e' : '#ef4444'}"`
- **CSS custom properties:** `calculatedPluginProps` are available as `var(--propName)` on the container, e.g. `background: var(--color)`

### Styling Rules

1. **Inline styles or `<style>` tags** — both work. Use `<style>` for complex state-dependent CSS
2. **System fonts:** `font-family: system-ui, -apple-system, sans-serif`
3. **Modern CSS:** flexbox, grid, gradients, transitions, box-shadow
4. **Responsive sizing:** use %, em, rem over fixed px where possible
5. **Rich visuals:** gradients, rounded corners (`border-radius`), shadows for depth
6. **Progress and trends:** draw a bar, ring or trend line with the builtins, never hand-built divs: `${progressBar(done, {max: goal})}`, `${progressRing(score, {max: 100})}`, `${sparkline(map(weeks, (w) => w.total))}`. They work anywhere in a template, including inside a card.
7. **Theme colours:** `var(--og-accent)`, `var(--og-text)`, `var(--og-muted)`, `var(--og-border)`, `var(--og-surface)` and `var(--og-bg)` follow the app's theme. The builtins above use them by default.

### Navigation & Click Actions

<!-- BEGIN GENERATED: click-vocabulary — edit packages/shared/src/prompts/clickAttributes.ts and run `npm run generate:model`; do not edit this block by hand -->
A Content node's `htmlTemplate` is the platform's click surface, and it has exactly **two** channels: a real `href` for a genuine hyperlink, and `data-action` for every behaviour. Behaviour is never spelled out in the attribute — it is a named action declared in the node's `actions` field, which the template invokes by name.

| Pattern | HTML | Purpose | Status |
|---------|------|---------|--------|
| Declared action | `<button data-action="openTab" data-param-id="${id}">Open</button>` | Invoke a named action declared in the node's `actions` field — a `script`; to move screens it calls `navigate('screen')`, usually as the last line. `data-param-*` values are render-time interpolated literals, read into `$params` with no click-time evaluation. If the action declares `confirm`, the click asks first and the script runs only on confirm; `data-confirm-title` and `data-confirm-body` override that confirm's wording per element (render-time literals, like `data-param-*` — they cannot create a confirm the action does not declare). See below | current |
| External link | `<a href="https://example.com" target="_blank">Visit</a>` | A genuine hyperlink — `http(s):`, `mailto:`, `tel:` and `/`-absolute URLs are left to the browser | current |
| Navigate to screen | `<a href="screenName">Go</a>` | Static link to another screen | current |

Put `data-action` on a `<button>`, not an `<a>` — a button has a real button role, which an anchor carrying no `href` never gets. Reserve `<a>` for genuine hyperlinks.

**Do NOT emit these legacy channels** — `rel=`, `setValue=`, `param=`, `data-script`, `data-args`, `data-speak`, `data-speak-lang`, `data-speak-rate`, `data-speak-action`, `href="@pop"`, `href="@submit"`. They still work (existing orgs use them, and you will see them in any example org you are shown) but they are frozen, and the closing gate warns on them in new configs. Reach for the structured equivalent instead:

- `rel="screen"` / `href="screen" data-args=…` → an action whose script calls `navigate('screen', {id: $params.id})`
- `setValue="expr"` → an action whose `script` calls `setValue(expr)`
- `data-script='…'` → an action's `script` (same script language, same host functions)
- `data-speak=…` → an action whose `script` calls `speak(text, lang?, rate?)`; `data-speak-action="stop"` → `stopSpeech()`
- `href="@submit"` → an action whose `script` calls `publishData({type, data: {…}})`, naming each input
- `href="@pop"` → an action whose script is `back()`
- `param="expr"` → pass the value as a `data-param-*` binding and read it as `$params.<name>`

Form inputs inside content sync back to the node's own value automatically (bidirectional).

- `<input data-trigger="input">` — Update on every keystroke (default)
- `<input data-trigger="blur">` — Update only when the input loses focus

Checkboxes return booleans, number inputs return numbers, others return strings.
<!-- END GENERATED: click-vocabulary -->

#### Declared actions (`data-action`) — the structured click channel

The node's `actions` field names each behaviour once; the template invokes it with `data-action="<name>"` on a `<button>`. Bind identifying values with `data-param-<name>` attributes whose values are render-time `${…}` interpolations — by click time they are literals, so the dispatch layer evaluates **no** formulas.

An action has two optional members:

- **`params`** — the declared param names, bound from the element's `data-param-*` attributes and exposed to the script as `$params`.
- **`script`** — runs in the node's scope, with `$params` available. Same language and host functions as a `flowStep:script`.

Navigation is a host call **inside the script**, normally its last statement: `navigate('screen', args?)` pushes (adds a back step, the ordinary drill-down), `replaceScreen('screen', args?)` swaps the current screen without a back step, and `back()` goes back one entry. Anything the `args` object holds is exposed as `$args.<key>` on the destination.

A failure earlier in the script **aborts** the rest of it, navigation included, and surfaces as an error — which is why "save then close" is one action (`updateData({…}); back()`), not two. `$params` is not `$args`: `$params` is what this click bound, `$args` is the *current screen's* nav args.

```json
{
  "htmlTemplate": "@`<button data-action=\"openTab\" data-param-id=\"${tabs[$index].id}\">${tabs[$index].name}</button>`",
  "actions": {
    "openTab": {
      "params": ["id"],
      "script": "setAppValue('currentTabId', $params.id); navigate('tabDetail', {id: $params.id})"
    }
  }
}
```

An action's `script` runs the same `;`-separated script language as a `flowStep:script`, with the same host functions, from one tap on an ordinary screen — no flow, no screen-hop. The host-functions reference lists everything callable there; `speak()`, `stopSpeech()`, `setValue()`, `setValues()` and `submit()` are action-only.

- **A one-step flow is the wrong shape for a one-shot action.** A freshly-entered flow's script step has `autoRun = false`, so it renders an idle card and waits for a *second* tap. An action is one tap. Routing a "pick a record, then act on it" action through a `selectInput` picker flow is the same mistake — make the record's own card the control instead, with the record's id bound as a param.
- **Interpolate identifying values at render time** — `data-param-id="${id}"`, never the bare identifier. The attribute holds a literal by the time it is clicked, and click-time dispatch evaluates no formulas at all, so there is nothing left to fail.
- **Use `<button>`, not `<a>`, for a `data-action`.** Reset the browser's button chrome in the style attribute — `border: none; font: inherit; cursor: pointer;`, plus `text-align: left; width: 100%;` for a card-shaped control — or it will not look like the surrounding UI.
- **One action, one behaviour.** The normal list-item → detail click is a one-line script: `navigate('detail', {id: $params.id})`. The converse too — if the action only writes data and the user should stay where they are, **make no nav call at all**. There is no "stay here" navigation, and re-rendering after a write is automatic.
- **Back and Cancel are actions too** — `"back": { "script": "back()" }`, invoked from a `<button data-action="back">`. There is no `href` form for going back. This catches people out: a row of buttons where the primary control is a declared action and the Back beside it is an `href` is wrong in the same breath as being right.

#### Holding state in a content node

A content node can hold its own value — the org-author's `useState`. Give it a `compute` for the initial value and have an action write to it with the `setValue()` host function. **Read the value back by the node's own name**, in its template and in its scripts alike. There is no `value` variable: a bare `value` is undefined, so `value.index` renders `NaN` and `setValue(value…)` writes garbage.

```json
{
  "type": "content",
  "name": "tagFilter",
  "compute": "@[]",
  "htmlTemplate": "@`<div>${join(map(uniq($data.Recipe, 'tag'), (t) => `<button data-action=\"toggle\" data-param-tag=\"${t}\" style=\"border: none; font: inherit; cursor: pointer; font-weight: ${tagFilter.includes(t) ? 700 : 400};\">${t}</button>`), '')}</div>`",
  "actions": {
    "toggle": {
      "params": ["tag"],
      "script": "setValue(tagFilter.includes($params.tag) ? tagFilter.filter((x) => x != $params.tag) : [...tagFilter, $params.tag])"
    }
  }
}
```

`.includes()` tests membership, `.filter()` removes, `[...arr, x]` adds. Another node's `whereClause` reads the same name (`length(tagFilter) == 0 || tagFilter.includes(this.tag)`). An object works the same way for a multi-step widget such as a quiz: `"compute": "@({index: 0, score: 0})"`, then `${quiz.index}` in the template and `setValue({index: quiz.index + 1, score: quiz.score})` in an action, where `quiz` is the node's name.

#### Writing several sibling fields at once

A control that must move two or more fields together — a swap button between two inputs, a "reset filters" button, an "apply preset" chip — uses `setValues({name: value, …})`. Names resolve from the content node's scope outward, exactly the names a formula on this node could read, and every value is taken from the same state snapshot before any write lands, so the swap below is a real swap:

```json
{
  "htmlTemplate": "@`<button data-action=\"swap\" title=\"Swap languages\" style=\"border: none; font: inherit; cursor: pointer;\">⇄</button>`",
  "actions": {
    "swap": {
      "script": "setValues({myLanguage: otherLanguage, otherLanguage: myLanguage})"
    }
  }
}
```

One `setValues` call is one state update; N separate `setAppValue` calls would render N times and, for a swap, need a temporary. A name nothing in scope declares throws and writes nothing.

### Dynamic Lists in Templates

Use `map()` + `join()` to render arrays inline. Higher-order functions use `it` for the current item and `i` for the index. Arrow function syntax is also supported — parameter names become aliases for `it`/`i`:

`@` `` `<div>${tags.split(',').map(`<label>${it}</label>`).join('')}</div>` ``

`@` `` `<div>${tags.split(',').map((tag) => `<label>${tag}</label>`).join('')}</div>` ``

### Boards and Grids

When the subject is something people look at (a chessboard, a game grid, a seat map), draw it. Store the layout as one text field: rows separated by `/`, one character per cell, `.` for empty, e.g. `"rnbqkbnr/pppppppp/......../......../......../......../PPPPPPPP/RNBQKBNR"`. Render it with nested `map`s; the index arguments give the row and column:

```json
{
  "type": "variable",
  "name": "pieceGlyphs",
  "compute": "@({k: '♚︎', q: '♛︎', r: '♜︎', b: '♝︎', n: '♞︎', p: '♟︎'})"
}
```

`@` `` `<div style="display: grid; grid-template-columns: repeat(8, 1fr); grid-template-rows: repeat(8, 1fr); max-width: 320px; aspect-ratio: 1;">${join(map(split(board, '/'), (rank, r) => join(map(split(rank, ''), (sq, f) => `<div style="display: flex; align-items: center; justify-content: center; font-size: 28px; background: ${(r + f) % 2 == 0 ? '#f0d9b5' : '#b58863'};"><span style="color: ${sq == sq.toLowerCase() ? '#1a1a1a' : '#ffffff'}; text-shadow: 0 0 2px #000;">${pieceGlyphs[sq.toLowerCase()] ?? ''}</span></div>`), '')), '')}</div>` ``

Use the solid chess symbols for both sides and colour them by the letter's case (upper case is white): fonts disagree about the outline "white" symbols. Give the grid `grid-template-rows` as well, or empty rows collapse. A lesson, puzzle or opening record then carries a `board` field, and its card or detail screen draws it. The same shape draws noughts and crosses, a sudoku or a seat map.

### Video Embeds

Use `<iframe>` to embed videos from `search_videos` results. The `embedUrl` from results is ready to use:

```json
{
  "htmlTemplate": "@`<div style=\"position: relative; width: 100%; padding-top: 56.25%; border-radius: 8px; overflow: hidden;\"><iframe src=\"${videoUrl}\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;\" allowfullscreen></iframe></div>`"
}
```

The `padding-top: 56.25%` creates a 16:9 aspect ratio container. Always use `allowfullscreen` for video iframes.

### Example: List Item with Navigation

The standard repeating-row → detail click. Bind the row's record id as a param; the action's script navigates with it as a nav arg.

```json
{
  "htmlTemplate": "@`<button data-action=\"open\" data-param-id=\"${id}\" style=\"display: block; width: 100%; text-align: left; padding: 16px; background: white; border: none; border-radius: 8px; color: #333; font: inherit; margin-bottom: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer;\">\n  <div style=\"font-weight: 600;\">${name}</div>\n  <div style=\"font-size: 14px; color: #666;\">${status}</div>\n</button>`",
  "actions": {
    "open": {
      "params": ["id"],
      "script": "navigate('taskDetail', {id: $params.id})"
    }
  }
}
```

### Identity: pass the record id, resolve with `byId`

**Always identify a record by its id, never by its position in a list.** A destination screen that reads the clicked row's scope only works from that one list; a destination that reads `$args.id` works from every entry point — a list, a search result, a link on another record's page, a deep link.

So the destination screen resolves the record once, at the top, and every formula below reads from that:

```json
{
  "type": "variable",
  "name": "currentTask",
  "compute": "@byId('Task', $args.id)"
}
```

Downstream nodes then reference `currentTask.name`, `currentTask.status`, and so on.

### Example: Card That Branches on a Link Field

A card whose `link` field may hold an external URL or another record's id. External URLs are a genuine hyperlink, so they use `href`; the internal case is behaviour, so it uses an action.

```json
{
  "htmlTemplate": "@`${link.startsWith('http') ? `<a href=\"${link}\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"display:block; padding:16px; background:#fff; border-radius:8px; text-decoration:none; color:#333;\"><h3 style=\"margin:0 0 4px 0;\">${title}</h3></a>` : `<button data-action=\"openEpisode\" data-param-id=\"${link}\" style=\"display:block; width:100%; text-align:left; padding:16px; background:#fff; border:none; border-radius:8px; color:#333; font:inherit; cursor:pointer;\"><h3 style=\"margin:0 0 4px 0;\">${title}</h3></button>`}`",
  "actions": {
    "openEpisode": {
      "params": ["id"],
      "script": "navigate('episodeScreen', {id: $params.id})"
    }
  }
}
```

Note the one legitimate `rel=` in the platform: `rel="noopener noreferrer"` on an external link is the standard HTML attribute and has nothing to do with the old `rel=` navigation channel.
