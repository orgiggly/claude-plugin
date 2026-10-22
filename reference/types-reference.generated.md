# Orgiggly Node Types Reference

> Auto-generated from nodeModel.json. Do not edit manually.

TypeScript types describing all node option shapes.
Each node in the appConfig tree must have a `type` field set to its node type name.

```typescript
// ── Helper Types ──

/** Sort configuration */
interface SortOptions {
  /**
   * The field to sort by
   * The record field to sort by.
   * Examples: order, createdAt, rank
   */
  field?: string;
  /**
   * `asc`: Smallest first. The default, and 115 of 147 uses.
   * `desc`: Largest first — newest-first dates, highest scores.
   */
  direction?: "asc" | "desc";
}

/** Range-aware slot matching: records cover a RUN of the parent repeating node's iteration slots rather than a single one. Replaces a hand-written equality whereClause. Every member is optional in the codec because the editor emits an empty `span: {}` from its hidden subsection; requiredness is enforced by the closing gate (span-incomplete). */
interface Span {
  /**
   * Field on the bound record holding the first slot the record occupies
   * The record field holding the first slot this record occupies.
   * Together with the end field this defines the run of slots the record covers. Both are compared against the axis value of each slot, so they must hold the same kind of value the axis produces — dates against a date axis, numbers against a numeric one.
   * Examples: Start, firstLap, fromWeek
   */
  startField?: string;
  /**
   * Field holding the last slot occupied (inclusive). Omit for single-slot records
   * The record field holding the last slot occupied, inclusive. Leave empty for records that occupy one slot.
   * With no end field every record covers exactly its start slot, which is the behaviour you get without a span at all. A record whose end sorts before its start is treated as single-slot rather than rejected.
   * Examples: End, lastLap, toWeek
   */
  endField?: string;
  /**
   * Formula for the CURRENT slot's position on the iteration axis, evaluated in the slot's scope
   * A formula giving the current slot's position — usually the variable the parent repeating node computes for each row.
   * Evaluated once per slot in that slot's own scope, so it can read the parent's per-row variables and $index. This is what makes spans work on any axis, not just dates: point it at a day, a lap number, a week index, or $index itself.
   * Examples: @day, @lapNumber, @$index
   */
  axis?: string;
  /**
   * How a covering record renders across its run. A named enum (not an inline one) so it is laxEnum-wrapped: a later release can add a mode without an older client failing to decode the whole node — the transitionTrigger/onTimer precedent
   * `repeat`: The record renders in every slot it covers — use $spanPosition to style the run's start, middle and end so it reads as one continuous element
   * `once`: The record renders only in the slot where its run starts, the way a plain equality filter behaves — $spanEnd is still available so the card can show the full range
   * `grid`: The record renders ONCE per row segment as a single bar, positioned by the platform — name the repeating sibling supplying the slots and the run is segmented and lane-packed for you, so no $spanPosition styling tricks are needed
   */
  mode?: "repeat" | "once" | "grid";
  /**
   * Name of the repeating SIBLING in the same spatial container whose iterations supply the slots. Only read when mode is grid
   * The repeating sibling whose rows are the slots this record spans across.
   * Only used by the grid mode. The named sibling must be a repeating node in the same spatial container; its iterations supply both the slot positions and the axis values coverage is tested against, so the platform can work out which cells a record covers and draw one bar per row it crosses.
   * Examples: days, weeks, lanes
   */
  slots?: string;
}

/** Server-side callable that returns the data records. Used with source: "callable". */
interface CallableSource {
  /**
   * Name of the Firebase callable to invoke (required when used; left optional in the codec so admin-editor output containing an empty `callable: {}` from the hidden subsection still validates — runtime consumers gate on its presence)
   * Name of the Firebase callable to invoke.
   * Examples: listUserHome
   */
  functionName?: string;
  /**
   * Formula (prefix with @) producing the args object passed to the callable
   * Formula producing the arguments object passed to the callable.
   * Examples: @({ bio: bio })
   */
  args?: string;
}

/** Layout configuration for container nodes */
interface Layout {
  /**
   * How many columns the children may spread across. 1 keeps them in a single stack.
   * Examples: 1, 2, 3, 4
   */
  maxColumns?: number;
  /**
   * Child indices that force a new column, for a break the automatic flow would not choose.
   * Examples: []
   */
  columnBreaks?: number[];
  /**
   * `x`: Children run across the page.
   * `y`: Children run down the page. This is the default.
   */
  axis?: "x" | "y";
  /**
   * `columns`: Children flow down one or more columns. The default, and what 451 of 513 uses pick.
   * `grid`: Children fill a fixed grid of cells in order.
   * `spatial`: Children are positioned explicitly by their own `place` — a seating plan, a board.
   * `flow`: Children pack into as many columns as fit at `minColumnWidth`, wrapping to one column on a narrow screen. `maxColumns` is ignored — the tile-gallery mode.
   */
  mode?: "columns" | "grid" | "spatial" | "flow";
  /**
   * Narrowest a column may get, in px, before the layout drops to fewer columns.
   * This is what makes a multi-column layout collapse gracefully on a phone rather than squeezing. In `mode: "flow"` it is the ONE knob: the browser packs as many columns of at least this width as fit.
   * Examples: 350, 300, 400, 760
   */
  minColumnWidth?: number;
  /**
   * Relative widths of the columns, one number each.
   * A weight of 0 keeps that column at its natural width, so `[0, 1]` gives the second column all the slack.
   * Examples: [0, 1], [1, 1, 1]
   */
  columnWeights?: number[];
  /**
   * Spatial mode: number of columns in the coordinate space. Required when mode is "spatial" (gate-enforced, spatial-missing-cols); a formula is evaluated in the container's scope
   * How many cells wide the space is. Required in spatial mode; a formula lets the data decide.
   * Examples: 7, @length(sections), @bars * 16
   */
  cols?: number | string;
  /**
   * Spatial mode: number of rows. Omit to grow downward with content
   * How many cells tall the space is. Leave empty and the grid grows to fit whatever is placed.
   * Examples: 6, @length(seatRows)
   */
  rows?: number | string;
  /**
   * Spatial mode: fixed row height in px. Omit for content-driven row heights
   * Fixed height of each row in pixels. Leave empty for rows sized by their content — fix it when cell geometry has to line up, as in a month grid.
   */
  rowHeight?: number;
}

/** Position of a child inside a spatial container (layout.mode: "spatial"), in 0-based cell coordinates. Each member is a number or @-formula evaluated in the child's scope — per iteration for repeating children. Members are codec-optional (the editor emits an empty place: {}); x/y requiredness is enforced by the closing gate (place-incomplete). */
interface Place {
  /**
   * Column, 0-based. Formula evaluated in the child's scope
   * Column, 0-based. A formula is evaluated in the child's scope, so a repeating node can place each iteration itself.
   * Examples: @$index % 7, @Col
   */
  x?: number | string;
  /**
   * Row, 0-based. Formula evaluated in the child's scope
   * Row, 0-based. A formula is evaluated in the child's scope, so a repeating node can place each iteration itself.
   * Examples: @floor($index / 7), @Row
   */
  y?: number | string;
  /**
   * Width in columns (default 1)
   * Width in columns. Defaults to 1.
   */
  w?: number | string;
  /**
   * Height in rows (default 1)
   * Height in rows. Defaults to 1.
   */
  h?: number | string;
}

/** Container styling options */
interface ContainerStyle {
  /**
   * Spacing units (1 = 8px). Typical values: 1-4
   * Space below this node in spacing units, where 1 is 8px.
   * Examples: 2, 1, 3
   */
  marginBottom?: number;
  /**
   * `left`: Sits against the left edge of the space available.
   * `center`: Centred within the space available.
   * `right`: Sits against the right edge of the space available.
   */
  justifySelf?: "left" | "center" | "right";
  /**
   * Lift this node out of the flow and pin it to a corner of its parent container, over the siblings rendered there (a badge on an image, a video spotlight over a drawing).
   * `topLeft`: Pinned to the parent's top-left corner, over the siblings there.
   * `topRight`: Pinned to the parent's top-right corner, over the siblings there.
   * `bottomLeft`: Pinned to the parent's bottom-left corner, over the siblings there.
   * `bottomRight`: Pinned to the parent's bottom-right corner, over the siblings there.
   * Lifts the node out of the flow — a badge on an image, a video spotlight. Its siblings then lay out as though it were not there.
   * Examples: topLeft
   */
  overlay?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  /**
   * Distance from the pinned corner in spacing units (1 = 8px). Default 1. Only read when overlay is set.
   * Distance from the pinned corner in spacing units, where 1 is 8px. Defaults to 1.
   * Only read when `overlay` is set.
   * Examples: 1
   */
  overlayInset?: number;
  /**
   * Width in px of the overlaid node. Default: its natural width. Only read when overlay is set.
   * Width of the overlaid node in px. Defaults to its natural width.
   * Only read when `overlay` is set.
   */
  overlayWidth?: number;
  /**
   * Widest this node may get, in px; centred when the space is wider. On a screen it overrides the app's contentMaxWidth, and 0 removes that inherited cap (full width).
   * Widest this node may get, in px. It is centred when the space is wider.
   * Lines built-in inputs and widgets up with HTML that caps its own width. On a screen it overrides the app's `contentMaxWidth`; `0` removes that cap, for a screen that needs the full width (a calendar, a wide table).
   * Examples: 640, 0
   */
  maxWidth?: number;
}

interface Dimension {
  /** Width in pixels. */
  width?: number;
  /** Height in pixels. */
  height?: number;
}

/** Per-color overrides for the site chrome (header bar + tab strip). Any field omitted falls back to the active theme preset. */
interface ThemeColors {
  /**
   * Page/header background color.
   * Page and header background colour.
   * Examples: #081120, #0a0a0a
   */
  bg?: string;
  /**
   * Tab strip and elevated surface color.
   * Tab strip and elevated surface colour.
   * Examples: #0e1a30
   */
  surface?: string;
  /**
   * Selected tab indicator and icon highlight color.
   * Selected tab indicator and icon highlight colour.
   * Examples: #00e676, #0f766e
   */
  accent?: string;
  /**
   * Primary text color on the header and tabs.
   * Primary text colour on the header and tabs.
   * Examples: #f4f7fb
   */
  text?: string;
  /**
   * Secondary text color (byline, status).
   * Secondary text colour — bylines, status lines.
   * Examples: #93a3b8
   */
  mutedText?: string;
  /**
   * Bottom border color of the header and tab bar.
   * Bottom border colour of the header and tab bar.
   * Examples: rgba(255, 255, 255, 0.12)
   */
  border?: string;
}

type ImageOptions = Dimension & {
  /**
   * `jpeg`: Smallest files, no transparency. The only format any org currently asks for.
   * `png`: Lossless with transparency — logos and flat graphics.
   * `webp`: Smaller than PNG at similar quality, with transparency.
   */
  format?: "jpeg" | "png" | "webp";
};

/** Validation rule for input fields */
interface ValidationRule {
  /**
   * Valid if expression evaluates to true
   * The field is valid when this evaluates to true.
   * Examples: nameInput != null && nameInput != ''
   */
  expression: string;
  /**
   * Error message if validation fails. Start it with @ to make it a formula, evaluated in the same scope as `expression`, so the message can name what clashes; if the formula fails to evaluate, its own text is shown instead.
   * Shown under the field when `expression` is false. Say what to do, not what went wrong. Start with @ to build it from data, e.g. naming the slot that clashes.
   * Examples: Enter a name., End date must be on or after the start date, @clash.name + ' is already helping at ' + clash.job + ' then.'
   */
  errorMessage: string;
}

interface PickerOption {
  /**
   * The value stored when this option is chosen.
   * Examples: trip, ongoing
   */
  id: string;
  /**
   * The text the person sees.
   * Examples: A trip — settles at the end, Ongoing — runs indefinitely
   */
  label: string;
  /**
   * Optional group label. Options that share the same group value are rendered together under that heading. Insertion order of pickerValues determines group order.
   * Optional group label. Options sharing a group render together under that heading.
   * Insertion order of the options decides the order the headings appear in.
   * Examples: A, B
   */
  group?: string;
}

type StringOrPickerOption = string | PickerOption;

/** Tree node type definition */
interface TreeNodeOptions {
  /**
   * The node types that may be created under this one. An empty list makes the type a leaf.
   * Controls what the add-child menu offers on a row of this type, so it is how a tree's shape is enforced — a type absent from every list can never be created below the root.
   * Examples: [], ["Task"], ["Epic", "Task"]
   */
  allowedChildTypes: string[];
  /**
   * Material icon name shown on every row of this type.
   * Examples: task_alt, folder, flag, sticky_note_2
   */
  icon?: string;
  /**
   * CSS color for this type's icon, distinguishing types at a glance in a mixed tree.
   * Leave unset to inherit the tree's default icon color.
   */
  color?: string;
  /**
   * Groups this type with others in the add-child menu, for a tree with enough types that one flat list is unhelpful.
   * Purely an editor-side grouping — it has no effect on what may be created, which is `allowedChildTypes`.
   */
  category?: string;
  /**
   * Display label for the node type
   * Display name for this node type in the designer and the add-child menu. Falls back to the type name.
   */
  label?: string;
  /**
   * Record field used as the row label (default: best name field of the ObjectType).
   * The record field used as each row's label.
   * Defaults to the best name field of the bound ObjectType, so it is only worth setting when that guess is wrong or when a different field reads better in a tree.
   * Examples: title, body, name, text
   */
  labelField?: string;
  /**
   * Name of a child node of the tree rendered as this type's detail view, with the record as initial data.
   * Name of a child node of the tree rendered as this type's detail view, with the row's record as its initial data.
   * Lets one tree show a different detail screen per node type.
   * Examples: taskDetail
   */
  detail?: string;
  /**
   * Small badge chip on each row of this type. A value starting with @ is a formula evaluated with the record's fields in scope; anything else is a literal. Empty/undefined result hides the chip.
   * Small chip on each row of this type. A value starting with @ is a formula with the record's fields in scope; anything else is a literal.
   * An empty or undefined result renders no chip, which is how a badge shows only when it has something to say.
   * Examples: @status
   */
  badge?: string;
  /**
   * CSS color for the badge chip. A value starting with @ is a formula evaluated with the record's fields in scope; anything else is used literally.
   * CSS color for the badge chip. A value starting with @ is a formula with the record's fields in scope; anything else is used literally.
   * Returning an empty string falls back to the default chip color, so one formula can tint only the states worth calling out.
   * Examples: @status == 'done' ? '#E6F6EC' : status == 'in-progress' ? '#FFF4E0' : status == 'blocked' ? '#FDE8E8' : status == 'ready' || status == 'assigned' ? '#E8F0FE' : ''
   */
  badgeColor?: string;
  /**
   * Fields of this type that render read-only in the detail form. A literal array locks them for every record; a value starting with @ is a formula evaluated with the record's fields in scope that returns the array per record.
   * Fields that render read-only in this type's detail form. A literal array locks them for every record; a value starting with @ is a formula with the record's fields in scope returning the list per record.
   * A locked field still round-trips on save, so its value is never lost; it just cannot be typed into. Nothing is locked on a new record. Use it when some fields are owned by an external sync (a mirror, an import) and editing them would silently revert.
   * Examples: ["status", "priority"], @origin == 'gh-mirror' ? ['title', 'status'] : []
   */
  lockedFields?: string | string[];
  /**
   * Per-record gate on editing rows of this type, AND-ed with the tree's own canEdit. A value starting with @ is a formula evaluated with the record's fields in scope.
   * `true`: Rows of this type can be edited (subject to the tree's canEdit)
   * `false`: Rows of this type are read-only
   * Takes a formula with the record's fields in scope, so one type can be editable for some records and read-only for others: ownership, status, origin. The tree-level canEdit still wins when false.
   * Examples: @origin != 'gh-mirror'
   */
  canEdit?: boolean | string;
}

/** Ask before running the action. The dispatcher shows a small modal over the page and runs `script` only when the person confirms; dismissing it does nothing at all — no script, no navigation, no partial effect. It gates BOTH invocation channels, a template data-action click and a sandboxed widget's channel.runAction, so a widget can never skip a confirmation the config declared. */
interface ActionConfirm {
  /**
   * The question, as the modal's heading — e.g. "Leave the room?". Keep it to a few words.
   * The question, as the modal's heading. Keep it to a few words.
   */
  title: string;
  /**
   * One line under the title saying what confirming costs. Omit it when there is nothing to add — a line of empty reassurance is worse than none.
   * One line under the title saying what confirming costs. Omit it when there is nothing to add — a line of empty reassurance is worse than none.
   */
  body?: string;
  /**
   * Label for the confirming button (default "Confirm"). Prefer the verb — "Leave", "Delete" — so the button says what it does rather than restating the question.
   * Label for the confirming button; defaults to Confirm.
   * Prefer the verb — Leave, Delete — so the button says what it does rather than restating the question.
   */
  ok?: string;
  /**
   * Label for the dismissing button (default "Cancel").
   * Label for the dismissing button; defaults to Cancel.
   */
  cancel?: string;
  /**
   * Paint the confirming button in the error colour. For anything that discards data the person cannot get back.
   * `true`: Paints the confirming button in the error colour — for anything that discards data the person cannot get back.
   * `false`: An ordinary confirmation. This is the default.
   */
  destructive?: boolean;
  /**
   * Just tell the person something: one OK button and no Cancel, for a message with no decision in it (e.g. why a slot can't be taken). `script` is optional; if declared it runs on OK. `data-confirm-title`/`data-confirm-body` still override the wording.
   * `true`: One OK button, no Cancel — for telling the person something, not asking. The script, if any, runs on OK.
   * `false`: An ordinary two-button confirmation. This is the default.
   */
  info?: boolean;
}

/** A named click behaviour declared on a content node, invoked from its template by a data-action attribute naming it (on a button element, preferably, or an anchor). Param values are bound with data-param-<name> attributes whose values are render-time interpolated literals — click-time dispatch does zero formula evaluation. The action runs `script` with $params in scope; navigation is a host call inside the script (navigate / replaceScreen / back), normally its last statement. */
interface ContentAction {
  /**
   * Declared param names, bound at click time from the element's data-param-<name> attributes and exposed to `script` as $params. $params is deliberately not $args — $args means the current cursor's nav args and the two must never alias.
   * Declared parameter names, bound at click time from the element's data-param attributes and exposed to `script`.
   * They are deliberately not merged into the surrounding scope, so a param can never shadow a field of the record.
   * Examples: ["melds"]
   */
  params?: string[];
  /**
   * Inline script run through the same host machinery as flowStep:script, in the content node's scope, with $params injected. Navigate from it with navigate('screen', args?), replaceScreen('screen', args?) or back() — usually the last statement. A failure aborts the rest of the script and surfaces via the snackbar.
   * Inline script run through the same host machinery as a script flow step, in the content node's scope, with the declared params injected.
   * Navigate from it with the host navigate function rather than a link, so the action and the navigation stay one unit.
   */
  script?: string;
  /**
   * Ask before this action runs. The person sees a modal built from these strings, and `script` runs only if they confirm. The strings are STATIC — an action's options are not formula-evaluated — so for wording that depends on state, interpolate data-confirm-title / data-confirm-body on the element in the template; those are render-time literals like data-param-*, and override these.
   * Ask before this action runs. The person sees a modal built from these strings, and `script` runs only if they confirm.
   * The strings are static — an action cannot compute its own confirmation text from the record it is about to act on.
   */
  confirm?: ActionConfirm;
}

// ── Base Properties ──
// Shared property groups. Nodes inherit them via intersection (&).

/** Properties shared by all nodes */
interface CommonOptions {
  /**
   * Unique identifier within parent scope
   * The node's identifier — what formulas elsewhere use to reference its value. Unique among its siblings.
   * Also forms the node's pointer key, so renaming it breaks any formula that referenced the old name. Never shown to a visitor; `label` is the visible text.
   */
  name: string;
  /**
   * Display text (can be a formula with @prefix)
   * Visible heading or field label. Falls back to the node's name in Title Case when empty.
   * Formula-capable: plain text, or prefix with `@` to compute it.
   * Switch to a formula to compute it per row — it can read the iteration index, so one label definition serves every row.
   * Examples: @thingsToDo[$index].Name, @restaurants[$index].Name
   */
  label?: string;
  /** If true, creates multiple instances based on data */
  isRepeating?: boolean;
  /** If true, creates a new scope for child data */
  isOwnScope?: boolean;
  /**
   * Formula for the value this node starts with, until something stores a different one (use @prefix)
   * The value this node starts with. Anything the user types — or the app stores — replaces it.
   * Every node can hold a value, not just input fields. A screen, container or content block with a default value becomes a named slot the rest of the app can read by the node's name and write to. Write the formula with other fields referenced by their plain names, combined with the built-in functions (`+` concatenates strings, `formatDate`, `length`, `sum`, …) — open the formula reference for the full list. The formula applies until something stores a value at this node; from then on the stored value wins, and clearing it falls back to this formula again.
   * Examples: firstName + ' ' + lastName, price * quantity, formatDate(created, 'fullDate')
   */
  compute?: unknown;
  /** If true, value is computed, not stored */
  isDerived?: boolean;
  /** If true, value is not persisted */
  isTransient?: boolean;
  /**
   * Boolean or formula to hide the node
   * Hides the node. Usually a formula, so visibility can follow the data.
   * When this is true the node is hidden; leave it off (or false) to always show. Switch to a formula for conditional visibility — reference sibling fields and data by their plain names (e.g. `count`, `status`). There is no XPath and no element-id lookup, and you don't write `true`/`1` literally — just an expression that evaluates to a boolean.
   * Examples: count == 0, status != 'published', !isAdmin
   */
  hidden?: boolean | string;
  /**
   * Max items for repeating nodes
   * Caps how many items pagination will reveal. Needs `isRepeating` and `pageSize` to have any effect.
   * On a data-bound node the ceiling is min(rows returned, maxLength), so it trims how far "load more" can go rather than the query itself. Nodes that cannot repeat ignore it entirely.
   * Examples: 500, @matchCount, @length(curGroupMatches)
   */
  maxLength?: number | string;
  /**
   * Enable pagination for repeating nodes
   * Rows shown per page on a repeating node. Setting it turns pagination on; only meaningful when `isRepeating` is true.
   * The first page renders pageSize items and each "load more" adds another pageSize. Zero or less disables pagination, the same as leaving it unset.
   * Examples: @10, @50, @60
   */
  pageSize?: number | string;
  /**
   * Position inside a spatial container (the PARENT's layout.mode: "spatial"), as 0-based cell coordinates x/y plus optional w/h spans (default 1). Each member is a number or @-formula evaluated in this node's own scope — per iteration for a repeating node, so a seating plan is one repeating child with place: { x: "@Col", y: "@Row" }. Ignored (with a gate warning) when the parent is not spatial; omit it and the child auto-flows into the next free cell.
   * Which cell this node sits in when its parent is a spatial container. Leave empty to drop into the next free cell.
   * Column and row are 0-based, width and height are cell counts defaulting to 1. Each can be a formula evaluated in this node's scope, so a repeating node places every iteration separately from its own record or $index. Out-of-range values clamp to the edge rather than failing; a value that does not resolve to a number falls back to auto-flow.
   * Examples: { "x": 2, "y": 1 }, { "x": "@$index % 7", "y": "@floor($index / 7)" }, { "x": "@Col", "y": "@Row", "w": 2 }
   */
  place?: Place;
}

/** Data binding for container/collection nodes */
interface DataOptions {
  data?: {
    /**
     * Object type name for data binding
     * The object type this node binds to — one of the org's declared object types.
     * Names the collection whose records populate the node; the same name is what `$data.<Type>` refers to in a formula.
     * Examples: Recipe, QuizQuestion, Match
     */
    dataType?: string;
    /**
     * Sort configuration
     * Orders the bound records. Leave empty for the source's natural order.
     * An array applies its keys in priority order, and sorting runs after `whereClause` filtering. Missing values always sort last, whichever direction is set.
     * Examples: { "field": "order", "direction": "asc" }, { "field": "createdAt", "direction": "desc" }
     */
    sort?: SortOptions | SortOptions[];
    /**
     * Filter expression
     * A formula to filter the data. For example, `name == 'John'` to only show John.
     * Evaluated against each record; only records for which it returns true are shown. Reference the record's own fields as bare identifiers — no XPath, no element ids. Combine conditions with `&&` / `||`, compare dates with `today()`, and reference the signed-in user with `$username`.
     * Examples: status == 'active', dueDate < today(), assignee == $username
     */
    whereClause?: string;
    /**
     * Data source type
     * `embedded`: Uses the data embedded in the app (suitable for small amounts of data which doesn't change often)
     * `storage`: The data will be stored in the orgiggly cloud storage (suitable for large amounts of data which doesn't change often)
     * `realtime`: The data will be stored in the realtime database (the app will subscribe to changes in the data)
     * `callable`: Records come from a server-side Firebase callable. Specify the function name below.
     */
    source?: "embedded" | "storage" | "realtime" | "callable";
    /**
     * Data scope: global (shared), user (per-user partition), variant (per-URL-variant partition), or group (per-membership-group partition, served only through a membership-checked callable). On source "realtime", `user` selects the PRIVATE per-uid rail rather than a filter, and `inbox` (realtime only) the per-uid INBOX: a visitor writes and reads only their own records there, org admins read them all, and the transition engine watches it like the public rail.
     * `global`: Only records in the org's shared collection
     * `user`: Only the signed-in user's own records — on a realtime block, their own PRIVATE subtree, unreadable by anyone else
     * `variant`: Only records for the current URL variant
     * `group`: Only records for the group the current user is acting in — fetched through a membership-checked callable, never readable by non-members
     * `all`: No partition filter — every record of this type written to the global or user scope (never group data)
     * `inbox`: Realtime only: each visitor's own inbox — they write and read back only their own records, org admins read them all, and transition rules fire on them. For input that must never be public, like a phone number
     * The mechanism differs per source. On `storage`, `global` and `user` FILTER on a `_scope` marker that only the storage-fetch path stamps, so they narrow nothing on embedded data, and `variant` partitions by storage path rather than by filter. `group` also partitions by storage path (`…/groups/{groupKey}`), but that path is gated by the org's membership registry, so the partition is also the privacy boundary — and `all` never expands into it: group data is only ever loaded by an explicit `scope: "group"` binding. On `realtime`, `user` is not a filter at all: it switches the subscription to `realtimePrivate/{uid}/{Type}`, whose RTDB rules grant read only where `auth.uid` matches, so the PATH is the partition and the records never reach another player's client. That makes `scope` load-bearing for security on the realtime rail — the closing gate rejects `user` on `embedded`/`callable`, where it would look like a privacy control while narrowing nothing. `inbox` (realtime only, named orgs only) puts the type at `realtimeInbox/{uid}/{Type}`: the writer's own uid subtree, readable by them and the org's admins, never by other visitors. `setRealtime` and friends route a declared inbox type there by themselves, the engine fires rules on it and writes `_moveOutcome` back onto the inbox record, and a rule may watch an inbox type but never target one.
     */
    scope?: "global" | "user" | "variant" | "group" | "all" | "inbox";
    /**
     * Which group partition this node WRITES into. Only read when scope is "group". Reads never need it — the group set is discovered from the caller's membership — but a write does, because a member can belong to several groups at once.
     * Which group this node saves into. Only needed when `scope` is "group", and only for saving — reading finds the user's groups by itself.
     * A member can be in several groups at once, so a save has to name one; reads do not, because the platform loads every group the signed-in user belongs to. Usually a formula pointing at whichever group the screen is currently about, so one screen serves all of them. Without it a group-scoped save is refused rather than falling back to the shared collection.
     * Examples: @currentTab, @$args.groupKey, tab-lisbon
     */
    groupKey?: string;
    /**
     * When source is "callable", names the Firebase callable and the args formula
     * Names the Firebase callable that supplies this node's records. Only read when `source` is "callable".
     * Examples: { "functionName": "listUserHome" }, { "functionName": "listUserHome", "args": "@{}" }
     */
    callable?: CallableSource;
    /**
     * Range-aware slot matching for a repeating node: records cover a run of the parent's slots (startField..endField) instead of matching one slot by equality. Replaces the equality whereClause.
     * Lets a record occupy a RANGE of the parent's rows instead of just one — a multi-day event across the days it spans.
     * Name the record's start and end fields plus a formula for the current row's position, and the platform matches a record to every row its range covers. Formulas inside can read $spanStart, $spanEnd and $spanPosition to tell the start of a run from its middle and end. Replaces the filter you would otherwise write to match one row exactly.
     * Examples: { "startField": "Start", "endField": "End", "axis": "@day", "mode": "repeat" }
     */
    span?: Span;
  };
}

/** Layout and styling for container nodes */
interface ContainerOptions {
  /**
   * Layout configuration
   * How children are arranged — axis, column count, and minimum column width.
   * `mode: "columns"` flows children down one or more columns; `mode: "grid"` places them on a fixed grid. `minColumnWidth` makes the count responsive, so columns drop away on a phone instead of squashing. `mode: "spatial"` declares a cell grid `cols` wide (and optionally `rows` tall, `rowHeight` px each) and lets each child pick its own cell through the child's `place` field — a repeating child places every iteration separately, which is how one node draws a whole seating plan or month view. Too narrow a screen scrolls the space sideways instead of squashing it.
   * Examples: { "axis": "y", "mode": "columns", "maxColumns": 1, "minColumnWidth": 350 }, { "axis": "x", "mode": "grid", "maxColumns": 2, "minColumnWidth": 400 }, { "mode": "spatial", "cols": 7, "rows": 6, "rowHeight": 96 }
   */
  layout?: Layout;
  /**
   * Container styling
   * Spacing and alignment for the container itself, not its children.
   * `marginBottom` is in spacing units where 1 = 8px; 1–4 covers almost everything. `overlay` lifts the node out of the flow and pins it to a corner of its PARENT container, over whatever siblings render there — the parent establishes the positioning box, so wrap the thing you want to overlay together with the overlaid node in one subsection. `overlayInset` (spacing units, default 1) and `overlayWidth` (px) shape the pinned node.
   * Examples: { "marginBottom": 2 }, { "marginBottom": 2, "justifySelf": "center" }, { "overlay": "topRight", "overlayWidth": 96 }
   */
  containerStyle?: ContainerStyle;
}

/** Common input field properties */
type InputOptions = CommonOptions & {
  /**
   * Validation rules
   * Rules that must pass before the form can submit, each with its own error message.
   * `expression` is a formula evaluated in the input's scope, so sibling inputs can be referenced by name — which is how cross-field rules like "end after start" are written.
   * Examples: { "expression": "nameInput != null && nameInput != ''", "errorMessage": "Enter a name." }, { "expression": "!startDate || dateCompare(endDate, startDate) >= 0", "errorMessage": "End date must be on or after the start date" }
   */
  validation?: ValidationRule | ValidationRule[];
  /**
   * If true or expression evaluates to true, field is required
   * `true`: Submit is blocked until the field has a value
   * `false`: The field may be left empty
   * Accepts a formula, so a field can be conditionally required. For a custom message, or a rule spanning two fields, use `validation` instead — showcase orgs reach for it far more often than this flag.
   */
  required?: boolean | string;
  /**
   * Help text or formula
   * Hint shown under the input.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Written as a template literal so it can interpolate data. Keep it to a line — it renders under the field at every width, phones included. For a format example inside the empty field, use `placeholder`.
   * Examples: @`What should the story be about?`, @`A short blurb shown on your profile. Up to 500 characters.`
   */
  help?: string;
  /**
   * Placeholder text shown inside the empty field
   * Greyed example shown inside the field while it is empty.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Complements `help` rather than replacing it: a placeholder is a format example (e.g. an email address) and vanishes on the first keystroke, so never put anything in it the user still needs while typing — that belongs in `help`, under the field. Shown by text and number fields and the combobox picker; ignored by checkboxes, radios and plain select dropdowns.
   * Examples: @`jane@example.com`, @`e.g. 07700 900123`
   */
  placeholder?: string;
  /**
   * Display size
   * `small`: Compact field, for dense forms and inline edits
   * `medium`: Standard field height
   */
  size?: "small" | "medium";
  /**
   * Enable AI generation
   * `true`: Adds an AI generate button so the value can be drafted for the user
   * `false`: No AI assistance on this field
   * Wired for text/template inputs (an HTML generator) and for `fileInput` only when its `variant` is "image". Other input types accept the flag and ignore it.
   */
  aiEnabled?: boolean;
};

/** Properties for iterable/list-like nodes */
interface IterationOptions {
  /**
   * Label for each iteration
   * Label for one row, replacing the default "<nounLabel> <n>".
   * A formula evaluated in the row's scope. Left empty, rows fall back to nounLabel + ' ' + ($index + 1).
   * Examples: @value.id, @name || 'New Parameter'
   */
  iterationLabel?: string;
  /**
   * Noun label for items
   * Singular noun for one row, used to build the default row label. Defaults to "Item".
   * Rows with no `iterationLabel` are labelled "<nounLabel> <n>" — Pet 1, Pet 2. Try this before `iterationLabel`: it is one word and covers most cases.
   * Examples: Pet, Parameter
   */
  nounLabel?: string;
  /**
   * Material icon name
   * Icon shown beside each item.
   */
  icon?: string;
  /**
   * Color for iteration items
   * Accent colour for each item.
   */
  color?: string;
}

// ── Container Nodes ──
// These nodes structure the app's UI hierarchy.

/** Root node of the application. Contains all screens, settings, and auth configuration. */
type AppOptions = CommonOptions & DataOptions & {
  type: "app";
  /**
   * `public`: Anyone can open the site without signing in
   * `private`: Visitors must sign in before any screen renders
   */
  authMode?: "public" | "private";
  /**
   * Built-in theme preset for the site chrome (header bar + tab strip). 'dark' flips both surfaces to dark with a neon accent. Defaults to 'light'.
   * `light`: Light header and tab strip — the default
   * `dark`: Dark header and tab strip with a neon accent
   * Presets the site chrome only (header bar + tab strip), not the page body. Override individual colors with `themeColors`.
   */
  theme?: "light" | "dark";
  /**
   * Per-color overrides on top of the theme preset. Any field omitted falls back to the preset.
   * Per-color overrides on top of the theme preset. Anything omitted falls back to the preset.
   * Covers the chrome: `bg`, `surface`, `accent`, `text`, `mutedText` and `border`. Set `accent` alone to brand the org without redesigning it.
   */
  themeColors?: ThemeColors;
  /**
   * App-wide stylesheet, injected once and present on every screen. Plain CSS, not a formula. Per-screen <style> content nodes still work and, living later in the document, win ties for screen-specific overrides.
   * CSS that every screen shares — one copy here instead of a <style> block copied into each screen.
   * Injected once at the site root, so it survives navigation (a screen-scoped <style> unmounts when you leave the screen). Scope selectors with a class prefix the org owns, e.g. `.pd-card`, because this styles the whole document. Keep screen-specific rules in that screen's own <style> node — those still win on document order.
   * Examples: .card { border-radius: 12px; padding: 16px }
   */
  customCss?: string;
  /**
   * Default maximum width in px of every screen's content column, centred on wider windows, so built-in inputs and widgets line up with the HTML instead of stretching across the window. A screen overrides it with containerStyle.maxWidth (0 = full width). Unset = full width.
   * Widest every screen's content may get, in px. Centred on a wide window.
   * Set it for a form or content org (640–760 suits most) so inputs and widgets share one column with the HTML. Leave it unset for a dashboard or grid that wants the whole window, or give one screen `containerStyle: { maxWidth: 0 }` to opt that screen out.
   * Examples: 720
   */
  contentMaxWidth?: number;
};

/** Generic container. Authored only through its variants — `tabGroup`, `tab`, `folder` — each written as its own `type`; a bare `appNode` is a plain container that just groups its children. */
type AppNodeBaseOptions = CommonOptions & ContainerOptions & DataOptions & {
};

/** Renders its children as a tab bar; each `tab` child is one tab. */
type TabGroupOptions = AppNodeBaseOptions & {
  type: "tabGroup";
};

/** One tab inside a tabGroup. */
type TabOptions = AppNodeBaseOptions & {
  type: "tab";
};

/** Groups screens that aren't top-level in the designer tree; renders as a plain container. */
type FolderOptions = AppNodeBaseOptions & {
  type: "folder";
};

/** A navigable page/view in the app. Can contain subsections and inputs. */
type ScreenOptions = CommonOptions & ContainerOptions & DataOptions & {
  type: "screen";
  /**
   * Optional icon shown beside this screen in the top-level navigation (menu/tabs). An emoji (e.g. "🏆") or a Material icon name.
   * Shown beside this screen in the nav menu or tab strip.
   */
  icon?: string;
  /**
   * Hides the site header bar (logo, org name, sign-in, avatar menu, nav tabs) while this screen is showing, for an immersive screen such as a game table. Accepts a formula, evaluated in the screen's scope, so the header can hide only in one state (e.g. while a game is live). The screen must give the user its own way out, since the logo/home and avatar menu go with the header. The draft-preview banner still shows.
   * `true`: The site header is hidden while this screen is showing
   * `false`: The site header is shown (default)
   * Examples: true, @curPhase == 'playing'
   */
  hideHeader?: boolean | string;
};

/** A grouping container for organizing content. Repeating for collections; a repeating subsection can render inline (the default) or as a master/detail editor with add, remove and reorder controls. */
type SubsectionOptions = CommonOptions & ContainerOptions & IterationOptions & DataOptions & {
  type: "subsection";
  /**
   * `inline`: Every item rendered in a row, laid out by the subsection's layout
   * `masterDetail`: A list of the items beside a detail pane for the selected one, with Add, Delete and drag-to-reorder controls
   * Only read when the subsection is repeating. Master/detail is the editing shape: the master list captions each row with iterationLabel (falling back to nounLabel + index), and the detail pane shows the row's children. Inline is the display shape most orgs use for data-bound collections.
   * Examples: masterDetail
   */
  variant?: "inline" | "masterDetail";
  /**
   * Shows a labeled header bar above the subsection content. For repeating subsections, the header displays a generic label like 'Item 1', 'Item 2'. Only enable this when items lack their own visual title and need an external label to distinguish them. If the subsection content already contains a visible title or heading, leave showHeader off (the default) to avoid redundant labeling.
   * `true`: The subsection will have a header showing its title and a border
   * `false`: The subsection will not have a header, title or border
   */
  showHeader?: boolean | string;
  /**
   * `true`: The subsection will be collapsible
   * `false`: The subsection will not be collapsible
   */
  collapsible?: boolean | string;
  /**
   * `true`: The subsection will be collapsed by default
   * `false`: The subsection will not be collapsed by default
   */
  collapsedByDefault?: boolean | string;
  /**
   * Lets the user drag the items of a repeating subsection into a new order. For a data-bound list the order is written onto the records as a dense integer in orderField; an app-state list just moves its slots.
   * `true`: Each item gets a drag handle; dropping it writes the new order
   * `false`: Items render in query order with no drag handle
   * Takes a formula, so one list can be reorderable for the host only (@isHost). A data-bound list persists the order on the records: every displayed row whose position changed gets orderField written as 0..N-1, through updateData on the storage rail or updateRealtime on the realtime rail (owner-only there, so a host cannot reorder other players' records). Pair it with sort: {field: <orderField>} on the same data block or the drop will not stick visually.
   * Examples: true, @isHost
   */
  reorderable?: boolean | string;
  /**
   * The record field a reorderable data-bound subsection writes the integer order to (default sortIndex). Pair with sort: {field: <orderField>}.
   * The record field that holds each item's position; defaults to sortIndex.
   * Declare it on the ObjectType as a number field and sort the same data block by it, so the persisted order is what renders. The platform writes a dense 0..N-1 on every drop and only touches records whose value changed.
   * Examples: sortIndex, position
   */
  orderField?: string;
};

/** A reusable workflow/process that can be embedded in screens. */
type FlowOptions = CommonOptions & DataOptions & {
  type: "flow";
  /**
   * Hides the flow's step progress bar (the numbered stepper at the top). Use for a single-purpose flow whose chrome would be noise — pair with hideNav and let your own Content drive advancement via advanceFlow().
   * `true`: The step progress bar is hidden
   * `false`: The step progress bar is shown (default)
   */
  hideTopBar?: boolean | string;
  /**
   * Hides the flow's built-in navigation bar (Cancel / Back / Next / Finish). When hidden, the flow advances only via an advanceFlow() call from a Content anchor's data-script, so provide your own control.
   * `true`: The Cancel/Back/Next/Finish bar is hidden
   * `false`: The navigation bar is shown (default)
   */
  hideNav?: boolean | string;
};

/** A flow step that asks the same screens once per item, with "Add another?" in between, such as guests per booking or roles per rota. Only a direct child of a flow; its children are screens. Each pass is one iteration of the repeat, so a formula or script after it reads the repeat's name as an array of per-pass objects, with every screen's inputs merged flat into each one (roles reads as a list of name, from, until objects). Inside a pass, $index is the pass number. After each pass the platform draws a summary screen with Edit and Remove per pass, Add another, and Done. */
type RepeatOptions = CommonOptions & {
  type: "repeat";
  /**
   * One item's noun, used for "Add another {itemLabel}", the pass header ("Role 2 · 1 of 2") and the summary's empty state. Default "item".
   * The noun for one item, as people should read it in the buttons and headers.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Lower case reads best: the platform capitalises it where a sentence starts. A formula is evaluated in the flow's scope, so an earlier step can set it ("stall", "station").
   * Examples: guest, @roleSingular
   */
  itemLabel?: string;
  /**
   * One line of plain text per pass on the summary screen, evaluated in that pass's scope, so its inputs are bare names. Defaults to "{ItemLabel} {n}".
   * The line that stands for one pass on the summary screen. Plain text, evaluated in the pass's scope.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Every input on the pass's screens is in scope by its bare name, and $index is the pass number. Keep it to one line at phone width.
   * Examples: @name + ' · ' + email, @emoji + ' ' + name + ' · ' + hhmmFn(from) + '–' + hhmmFn(until)
   */
  summary?: string;
  /**
   * Done stays disabled until this many passes are complete. Default 0.
   * How many items are needed before Done is allowed. Default 0.
   * Examples: 1, @seats > 0 ? 1 : 0
   */
  min?: number | string;
  /**
   * "Add another" is hidden once there are this many passes. Default unlimited.
   * The most items allowed; Add another disappears at this count. Leave empty for no limit.
   * Examples: 20, @seats
   */
  max?: number | string;
};

/** A hierarchical data structure with typed nodes and parent-child relationships. When data-bound (data.source set), nodeTypes keys are ObjectType names and the hierarchy is linked via each type's parentRef field; renders as a mobile-first drill-in editor on the site. */
type TreeOptions = CommonOptions & IterationOptions & DataOptions & {
  type: "tree";
  /**
   * The kinds of row the tree can hold, keyed by type name.
   * Each entry declares `allowedChildTypes` — which is what makes the tree a tree rather than a list — plus optional `icon`, `color`, `label`, `labelField` (which record field titles the row) and `detail` (a child node rendered as that type's detail view).
   */
  nodeTypes: Record<string, TreeNodeOptions>;
  /**
   * Which of the `nodeTypes` sits at the top level.
   * Only rows of this type appear as roots; everything else has to be reachable through some type's `allowedChildTypes`.
   * Examples: Project, group
   */
  rootType: string;
  /**
   * Formula or literal gating record creation (default true).
   * `true`: The user can create rows
   * `false`: The tree is read-only for creation
   * Defaults to true, and takes a formula — so creation can depend on who is signed in or on the record being viewed.
   */
  canAdd?: boolean | string;
  /**
   * Formula or literal gating record editing/deletion (default true).
   * `true`: The user can edit and delete rows
   * `false`: Existing rows are read-only
   * Defaults to true, and takes a formula. Governs deletion as well as editing, so it is the one to gate on ownership.
   */
  canEdit?: boolean | string;
};

// ── Input Nodes ──
// These nodes capture user input and bind to data.

/** Text entry field. Variants: 'basic', 'multiline', 'stringArray'. */
type TextInputOptions = InputOptions & {
  type: "textInput";
  /**
   * `basic`: Single-line text field
   * `multiline`: Text area that grows with the content
   * `stringArray`: A list of strings the user can add to and remove from
   */
  variant?: "basic" | "multiline" | "stringArray" | string;
  /**
   * Auto-transform the field's text as the user types — e.g. force UPPERCASE for a room or booking code so the entry always matches a case-insensitive lookup.
   * `none`: Leaves the text exactly as typed
   * `uppercase`: Forces UPPERCASE as the user types
   * `lowercase`: Forces lowercase as the user types
   * Useful for codes a user reads off a screen or a card — forcing a room or booking code to uppercase means the entry always matches a case-insensitive lookup.
   */
  textTransform?: "none" | "uppercase" | "lowercase";
};

/** Numeric entry field. Variants: 'integer', 'slider', 'decimal', 'money', 'intArray'. */
type NumberInputOptions = InputOptions & {
  type: "numberInput";
  /**
   * `integer`: Whole numbers only
   * `slider`: Drag-to-set slider — pair with `min`, `max` and `step`
   * `decimal`: Decimal numbers, stepping by 0.01
   * `money`: Currency amount — decimal, stepping by 0.01, shown and stored to 2 places. No symbol: format that in the org's own formulas
   * `intArray`: A list of whole numbers the user can add to and remove from
   */
  variant?: "integer" | "slider" | "decimal" | "money" | "intArray" | string;
  /**
   * Lowest value allowed. Formula-capable.
   * Every variant honours it: a typed value below `min` is clamped up to it on commit. The slider defaults it to 1; the text variants have no lower bound unless set.
   * Examples: @0, @1
   */
  min?: number | string;
  /**
   * Highest value allowed. Formula-capable.
   * Every variant honours it, the same as `min` — a typed value above it is clamped down on commit. The slider defaults it to 100; the text variants have no upper bound unless set.
   * Examples: @100, @10
   */
  max?: number | string;
  /**
   * Increment the value moves in. Formula-capable.
   * The slider snaps to it; the text variants use it for the spinner arrows. When unset it follows the variant — 0.01 for `decimal` and `money`, 1 otherwise.
   * Examples: @1, @5
   */
  step?: number | string;
};

/** Toggle/checkbox field. Variants: 'checkbox', 'toggle'. */
type BooleanInputOptions = InputOptions & {
  type: "booleanInput";
  /**
   * `checkbox`: A checkbox
   * `toggle`: A switch
   */
  variant?: "checkbox" | "toggle";
};

/** Date/time picker. Formats: 'date', 'datetime', 'time'. */
type TemporalInputOptions = InputOptions & {
  type: "temporalInput";
  /**
   * `date`: Date only
   * `datetime`: Date and time together
   * `time`: Time of day only
   * Maps onto the native browser input, so the picker a visitor sees is their own platform's. `datetime` uses `datetime-local`, which stores a naive wall-clock time carrying no timezone.
   */
  format?: "date" | "datetime" | "time" | string;
};

/** Dropdown/picker field. Variants: 'single', 'multiple'. Idioms: 'radio', 'select', 'combobox'. */
type SelectInputOptions = InputOptions & {
  type: "selectInput";
  /**
   * `single`: The user picks one option
   * `multiple`: The user can pick several options
   */
  variant?: "single" | "multiple" | string;
  /**
   * `select`: Dropdown menu — the default
   * `radio`: Every option visible as a radio button; best for two to four choices
   * `combobox`: Type-to-filter box; best when the list is long
   * On touch devices a combobox renders as the plain dropdown instead, so focusing it never pops the virtual keyboard. Type-ahead is a desktop affordance.
   */
  idiom?: "select" | "radio" | "combobox" | string;
  /**
   * The options offered — a literal array, or a formula producing one.
   * An option is either a plain string, or an object with `id` and `label` (plus an optional `group` to divide the list) when the stored value differs from the text shown.
   * Examples: ["English (British)", "French", "Spanish", "German"], @concat([({ id: '', label: 'All teams' })], filter($data.Team, true).map(({ id: it.id, label: it.name, group: 'Group ' + it.group })))
   */
  pickerValues?: string | StringOrPickerOption[];
};

/** File upload field. Variants: 'image', 'file', 'video', 'audio'. */
type FileInputOptions = InputOptions & {
  type: "fileInput";
  /**
   * `image`: Image upload with preview, cropping and optional AI generation
   * `file`: Any file type — no preview or editing
   * `video`: Video upload, including in-app recording
   * `audio`: Audio upload, including in-app microphone recording
   */
  variant?: "image" | "file" | "video" | "audio" | string;
  /** Icon shown in place of a preview before anything is uploaded. Defaults to a person icon. */
  placeholderIcon?: string;
  /**
   * Output dimensions and encoding for uploaded images. Images are ALWAYS re-encoded — leaving this unset applies a default of 800px-wide JPEG, it does not store the original.
   * Resizes and re-encodes the image on upload. Unset means 800px-wide JPEG, not the original.
   * Every image upload is re-encoded and has its EXIF stripped: with no options set, `uploadFileToStorage` applies `{width: 800, format: "jpeg"}` to keep page weight down. Only video and audio (the `raw` path) keep their original bytes. So `width`/`height`/`format` here *override* that default rather than switching processing on. Set `width` explicitly for text-heavy images — 1568 is the useful value when the image is going to a vision AI step, because the 800px default loses fine print.
   * Examples: { "width": 1568, "format": "jpeg" }
   */
  imageOutputOptions?: ImageOptions;
  /**
   * Formula for AI image generation system prompt prefix
   * Prefix prepended to the user's prompt when generating an image with AI. Formula-capable.
   * Use it to pin a house style so every generated image in the org looks related.
   * Examples: @`An illustration for a short story: title: ${rightTitle} , ${rightText}`
   */
  aiSystemPromptFormula?: string;
  /**
   * Formula returning a Firebase uid; when present, the upload path becomes `public/{uid}/{fileName}.{ext}` (per-user avatar mode, mutable canonical). Overrides org-scoped path construction.
   * Formula returning a Firebase uid. When set, the upload path becomes the per-user avatar path instead of the org-scoped one.
   * The path becomes public/{uid}/{fileName}.{ext} — a mutable canonical location, so a new upload replaces the previous avatar rather than accumulating files.
   */
  userAvatarUid?: string;
  /**
   * Show the 'Take photo' button. Default true.
   * `true`: Offers a 'Take photo' button
   * `false`: Hides it
   * Defaults to true.
   */
  showCamera?: boolean;
  /**
   * Show the 'Choose file' button. Default true.
   * `true`: Offers a 'Choose file' button
   * `false`: Hides it
   * Defaults to true.
   */
  showFilePicker?: boolean;
  /**
   * Show the image 'Search' button. Default: only for variant 'image'.
   * `true`: Offers an image 'Search' button
   * `false`: Hides it
   * Defaults to on for the `image` variant only.
   */
  showSearch?: boolean;
  /**
   * Show the image edit/crop accordion. Default true.
   * `true`: Offers the crop/edit accordion
   * `false`: Hides it
   * Defaults to true.
   */
  showEdit?: boolean;
  /**
   * Show the 'Commit' (upload) button. Default true.
   * `true`: Offers an explicit 'Commit' button to start the upload
   * `false`: Uploads without a confirmation step
   * Defaults to true.
   */
  showCommit?: boolean;
  /**
   * Hold an array of files instead of a single file. Default false. When true the field value is an array of { name, url, ext, takenAt? }.
   * `true`: Holds an array of files
   * `false`: Holds a single file
   * Defaults to false. When true the value is an array of { name, url, ext, takenAt? }.
   */
  multiple?: boolean;
  /**
   * Maximum upload size in megabytes for PICKED files (in-app recorded video/audio is bounded by bitrate × duration instead). Rejected client-side before upload. Default: 10 for images, 30 for video, 10 for audio.
   * Largest picked file accepted, in megabytes. Rejected client-side before the upload starts.
   * Defaults to 10 for images, 30 for video, and 10 for audio. Video/audio recorded in-app is not checked against it — that is bounded by bitrate x duration instead.
   */
  maxSizeMb?: number | string;
};

// ── Special Nodes ──

/** An async step within a flow. */
type FlowStepBaseOptions = CommonOptions & {
  /**
   * Auto-advance flow on completion. Default true.
   * `true`: Moves to the next step as soon as this one finishes
   * `false`: Waits for the user to advance
   * Defaults to true. Turn it off when the user should read or check the result before moving on.
   */
  autoAdvance?: boolean;
  /**
   * Custom label for the primary action button. Falls back to variant default when unset.
   * Label on the step's primary button. Falls back to the variant's own default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: Save my picks, Save changes
   */
  actionLabel?: string;
  /**
   * Heading shown in the step's idle state. Falls back to variant default when unset.
   * Heading shown before the step runs. Falls back to the variant's own default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: Ready to save, @`Ready to create your story`
   */
  idleTitle?: string;
  /**
   * Body copy shown below the heading in the step's idle state. Omitted when unset.
   * Body copy under the idle heading. Omitted entirely when unset.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * The place to say what the step is about to do — especially worth setting on a step that costs credits or writes data.
   */
  idleDescription?: string;
  /**
   * Heading shown while the step is running. Falls back to variant default when unset.
   * Heading shown while the step runs. Falls back to the variant's own default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: Saving…, Publishing your expense…
   */
  runningTitle?: string;
  /**
   * Body copy shown below the running heading. Omitted when unset.
   * Body copy under the running heading. Omitted entirely when unset.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Worth setting on a step that can take a while on a slow connection — tell the user what is being saved while they wait.
   */
  runningDescription?: string;
  /**
   * Heading shown when the user must sign in before the step can run. Falls back to variant default when unset.
   * Heading shown to a visitor who has to sign in before this step can run. Falls back to the variant's own default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * This is the gateway moment for a new visitor, so say what signing in gets them. The Sign In button's label is fixed.
   * Examples: Your first story is on us, @`Sign in to create your story`
   */
  authTitle?: string;
  /**
   * Body copy shown below the sign-in heading. Falls back to the platform default when unset.
   * Body copy under the sign-in heading. Falls back to the platform default, which mentions free credits for new users.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: New users get 200 free credits, enough for about 60 stories.
   */
  authDescription?: string;
  /**
   * Heading shown when a signed-in user has no credits left. Falls back to variant default when unset.
   * Heading shown to a signed-in user with no credits left. Falls back to the variant's own default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: You're out of story credits
   */
  noCreditsTitle?: string;
  /**
   * Body copy shown below the no-credits heading. Falls back to the platform default when unset.
   * Body copy under the no-credits heading. Falls back to the platform default.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * The Buy Credits button's label is fixed, so the purchase action always reads the same in every org.
   * Examples: Top up to keep creating stories.
   */
  noCreditsDescription?: string;
};

/** AI query with structured output. */
type AiQueryStepOptions = FlowStepBaseOptions & {
  type: "aiQuery";
  /**
   * Formula for AI prompt template. References sibling step values via @prefix.
   * The prompt sent to the AI. It can interpolate earlier steps' values.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Reference a sibling step's input or result by name (`${qGoal}`, `story.result.title`). Written as a template literal, so it can run to many lines — the showcase orgs' prompts are full briefs, not one-liners.
   * Examples: @`You are an inventive home chef. Based on the user's inputs, design ONE complete recipe.`
   */
  promptTemplate?: string;
  /**
   * Formula resolving to one or more images to analyse — typically a sibling fileInput's uploaded value. When set, this step becomes a vision query.
   * The image(s) to analyse. Point it at a sibling image fileInput.
   * Accepts a fileInput value (`@photo`), its url (`@photo.url`), a multi-file fileInput (`@photos`, an array), or an imageGenerationStep result (`@generated.result.url`). Non-image items in a multi-file value are ignored. Up to 8 images per call. Images are sent to Anthropic and are readable by anyone with the Storage URL — do not point this at private documents you would not publish. For text-heavy images like receipts, set the source fileInput's `imageOutputOptions.width` to 1568; the 800px default loses fine print.
   * Examples: @photo, @photos, @receiptPhoto.url
   */
  imageSource?: string;
  /**
   * MetaModel object type name — indicative, used to derive default typeDescription.
   * Object type the result is shaped like. Indicative only — it seeds a default `typeDescription`.
   * Naming a type here saves writing `typeDescription` by hand. It does not itself constrain the AI: `typeDescription` is what the model is actually told.
   */
  resultObjectType?: string;
  /**
   * Type description string for structured AI output (e.g. '{ name: string; age: number }').
   * The shape the AI must return, as a TypeScript-ish type string.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * This is what actually constrains the output, so it is worth being fussy: inline `//` comments after each field are read by the model and are the cheapest way to steer a value.
   * Examples: @`{ name: string; // catchy recipe name\n  prepTime: number; // minutes }`
   */
  typeDescription?: string;
  /**
   * When true, skip AI calls and return mockResults instead.
   * `true`: Returns `mockResults` instead of calling the AI
   * `false`: Calls the AI for real
   * The switch that makes a flow testable without spending credits or waiting on a model.
   */
  mockEnabled?: boolean;
  /**
   * Number of mock result objects to generate. Default 1.
   * How many mock objects to generate. Defaults to 1.
   * Useful for checking a repeating result renders sensibly with more than one row.
   */
  mockResultCount?: number;
  /**
   * JSON string of mock results to return when mockEnabled is true.
   * The mock payload to return, as a JSON string.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Leave it empty to have mock objects generated from `typeDescription` instead — hand-write it only when a specific value matters to what you're checking.
   */
  mockResults?: string;
};

/** A streaming AI conversation. The assistant opens from promptTemplate; the user replies, steers mid-stream, or stops; text renders as it generates. Ends on Done (or maxUserTurns), optionally distilling the transcript into a typed result at .result. The transcript is formula-visible at .chat.turns and the in-flight text at .chat.partialText. */
type AiChatStepOptions = FlowStepBaseOptions & {
  type: "aiChat";
  /**
   * The conversation brief — persona, level, task — sent as the opening user message. The assistant always takes the first turn from it.
   * The brief the assistant opens from: who it is, who the user is, what to do. It always speaks first.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Written as a template literal so it can interpolate earlier steps' values (`${lang}`, `${topic}`) and run to many lines. The user never sees this text — only the assistant's opening turn.
   * Examples: @`You are a warm ${lang} tutor. The learner wants to practise: ${topic}. Keep turns to 2–3 sentences and end each with a question.`
   */
  promptTemplate?: string;
  /**
   * MetaModel object type name — indicative, seeds a default typeDescription.
   * Object type the distilled result is shaped like. Indicative only — it seeds a default `typeDescription`.
   * Naming a type here saves writing `typeDescription` by hand. It does not itself constrain the AI: `typeDescription` is what the extraction pass is actually told.
   */
  resultObjectType?: string;
  /**
   * When set, a final extraction pass distils the finished conversation into this shape at .result. Unset: .result is { text, turnCount }.
   * Shape of the end-of-conversation summary, as a TypeScript-ish type string. Leave unset for a plain `{ text, turnCount }` result.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Setting it costs one extra non-streaming AI call when the user taps Done. Inline `//` comments after each field steer the extraction.
   * Examples: @`{ summary: string; // 2 sentences\n  vocabulary: string[]; corrections: { said: string; better: string }[] }`
   */
  typeDescription?: string;
  /**
   * Cap on user turns before the conversation auto-completes. Default 20.
   * How many user turns before the conversation ends itself. Defaults to 20.
   * Bounds cost, stored transcript size and the model's context in one number. Hitting it behaves exactly like tapping Done.
   */
  maxUserTurns?: number;
  /**
   * JSON array of canned steering strings, written as a backtick template (e.g. @`["Shorter", "Explain in English"]`), rendered as tappable chips.
   * Canned steers shown as tappable chips under the reply box.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * A JSON array of strings inside a backtick template — the step parses it, the same idiom as the AI-query step's mock results. Tapping a chip sends its text as the user's turn; mid-stream it interrupts and re-steers the assistant.
   * Examples: @`["Slower please", "Explain that in English", "Give me a harder one"]`
   */
  steeringChips?: string;
  /**
   * Adds a mic button to the reply row: record, transcribe (gpt-4o-transcribe), send as the user's turn.
   * `true`: Shows a mic button; recordings are transcribed and sent as the user's turn
   * `false`: Typed replies only (default)
   * Recorded audio is uploaded through the org's public Storage path before transcription, so anyone with the URL can fetch the clip. The transcript, not the audio, is what enters the conversation.
   */
  voiceInput?: boolean;
  /**
   * Speak assistant replies aloud as they stream, sentence by sentence (device Web Speech voices).
   * `true`: Reads each assistant sentence aloud as it arrives
   * `false`: Silent (default)
   * Uses the device's own Web Speech voices, so quality varies by phone. Pair with `speechLang` for anything other than the device default language.
   */
  speakReplies?: boolean;
  /**
   * Language for spoken replies — BCP-47 code or English language name. Only read when speakReplies is true.
   * Language of the spoken voice — a BCP-47 code or an English language name. Only read when `speakReplies` is on.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: @lang, fr-FR, Mandarin Chinese
   */
  speechLang?: string;
  /**
   * Placeholder text in the reply box.
   * Placeholder shown in the empty reply box.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: @`Say what comes to mind…`
   */
  inputPlaceholder?: string;
  /**
   * When true, skip AI calls and stream mockReplies locally instead.
   * `true`: Streams `mockReplies` locally instead of calling the AI
   * `false`: Calls the AI for real
   * The switch that makes a chat flow testable without spending credits — the full stop/steer state machine still runs.
   */
  mockEnabled?: boolean;
  /**
   * JSON array of assistant reply strings, written as a backtick template, consumed one per turn when mockEnabled is true.
   * Assistant replies to stream while mocking, one per turn.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * A JSON array of strings inside a backtick template, parsed by the step. When the array runs out the mock repeats its last reply.
   * Examples: @`["Bonjour ! Comment ça va ?", "Très bien. Et maintenant…"]`
   */
  mockReplies?: string;
};

/** Async data fetch. */
type FetchDataStepOptions = FlowStepBaseOptions & {
  type: "fetchData";
  /**
   * URL formula for data fetch.
   * URL to fetch. Formula-capable, so it can be built from earlier steps' values.
   * Examples: @'https://api.example.com/' + itemId
   */
  fetchUrl?: string;
};

/** Generates an image using AI with a configurable prompt. The prompt is a template formula — reference earlier flow step values to incorporate user input. */
type ImageGenerationStepOptions = FlowStepBaseOptions & {
  type: "imageGeneration";
  /**
   * Prompt as a backtick template — write plain prose and interpolate an earlier step's result inside ${...} (e.g. @`A scene: ${story.result.title}`). This is the complete prompt sent to the AI.
   * The complete prompt sent to the image model.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Reference an earlier step's result to describe what to draw by interpolating it inside a `${story.result.title}`-style span, written as a backtick template rather than a bare expression like the AI-query step's prompt. Unlike the AI-query step there is no separate type description — this string is the whole instruction.
   */
  prompt?: string;
  /**
   * Image generation model ID. If unset, user sees two buttons (Flux Schnell / Nano Banana). If set, user sees a single 'Create Image' button using this model. Accepts a literal model id or an @formula.
   * `flux-schnell`: Fast and cheap — the default choice for illustrations
   * `nano-banana-2`: Slower and stronger, for when quality matters more than cost
   * Leave it unset and the user picks, seeing a button per model. Set it (a literal id or an `@`formula) and they see one 'Create Image' button using your choice.
   */
  model?: "flux-schnell" | "nano-banana-2" | string;
  /**
   * When true, skip AI calls and return a mock image URL instead.
   * `true`: Returns `mockImageUrl` instead of generating
   * `false`: Generates for real
   * Image generation is one of the slower and costlier steps, so this is the one to reach for while building the flow around it.
   */
  mockEnabled?: boolean;
  /**
   * Mock image URL to return when mockEnabled is true. Leave empty to use a default placeholder.
   * Image URL to return while mocking. Leave empty for a default placeholder.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   */
  mockImageUrl?: string;
};

/** Generates a short audio clip (jingle / sound effect / vocal song) using AI with a configurable prompt. The prompt is a template formula — reference earlier flow step values to incorporate user input. Supports two models: Replicate's meta/musicgen (instrumental, has duration knob) and minimax/music-2.5 (vocal with lyrics, length derived from lyrics). */
type AudioGenerationStepOptions = FlowStepBaseOptions & {
  type: "audioGeneration";
  /**
   * Prompt template formula. Reference sibling step values via @prefix (e.g. @'Upbeat jingle for: ' + intro.result.title). For musicgen this is the full prompt. For minimax-music-2.5 this is the style/scene only — put singable text in the lyrics field.
   * What to generate.
   * Formula-capable: plain text, or prefix with `@` to compute it.
   * For `musicgen` this is the whole prompt. For `minimax-music-2.5` it is the style or scene only — anything meant to be sung goes in `lyrics`.
   * Examples: @'Upbeat jingle for: ' + intro.result.title
   */
  prompt?: string;
  /**
   * Lyrics formula. Used when model is 'minimax-music-2.5'; ignored by 'musicgen'. Supports [Verse]/[Chorus]/[Bridge] structure tags and newline-separated lines.
   * Words to be sung. Used by `minimax-music-2.5` and ignored by `musicgen`.
   * Formula-capable: plain text, or prefix with `@` to compute it.
   * Takes `[Verse]` / `[Chorus]` / `[Bridge]` structure tags with newline-separated lines, and the lyrics' length is what drives the clip's length on this model.
   * Examples: @lyricsInput, @'[Verse]\nPop or plop\n[Chorus]\nPlop!'
   */
  lyrics?: string;
  /**
   * Audio generation model ID. Supported values: 'musicgen' (instrumental, durationSec honoured) and 'minimax-music-2.5' (vocal with lyrics, length content-driven). Accepts a literal model id or an @formula.
   * `musicgen`: Instrumental only; honours `durationSec`
   * `minimax-music-2.5`: Sings `lyrics`; length follows the words, and `durationSec` is ignored
   * The two models take their input differently, so switching between them usually means moving text between `prompt` and `lyrics`. Accepts a literal id or an `@`formula.
   */
  model?: "musicgen" | "minimax-music-2.5" | string;
  /**
   * Clip length in seconds (literal number or @formula). Honoured only by 'musicgen' (clamped to 1..30, default 8). 'minimax-music-2.5' derives length from the lyrics and ignores this field.
   * Clip length in seconds. Formula-capable.
   * Only `musicgen` honours it, clamped to 1–30 and defaulting to 8. `minimax-music-2.5` derives length from the lyrics and ignores this field.
   */
  durationSec?: number | string;
  /**
   * When true, skip AI calls and return a mock audio URL instead.
   * `true`: Returns `mockAudioUrl` instead of generating
   * `false`: Generates for real
   */
  mockEnabled?: boolean;
  /**
   * Mock audio URL to return when mockEnabled is true. Leave empty to use the default stub clip.
   * Audio URL to return while mocking. Leave empty for the default stub clip.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   */
  mockAudioUrl?: string;
};

/** Transcribes an audio clip to text using a speech-to-text model. Point it at a sibling fileInput's uploaded audio (e.g. a fileInput with variant 'audio'); the resulting text is a plain value, so it flows into a downstream aiQueryStep exactly like any other step result. */
type TranscribeStepOptions = FlowStepBaseOptions & {
  type: "transcribe";
  /**
   * Formula resolving to the audio clip's URL — typically a sibling fileInput's uploaded value.
   * The audio clip to transcribe. Formula-capable — usually a sibling fileInput's uploaded url.
   * Point it at the `url` of a fileInput with `variant: "audio"`. A fileInput is an input node, not a flow step, so its uploaded value is read directly off its name — a field named `recordAudio` gives `@recordAudio.url`, with no `.result` in between.
   * Examples: @recordAudio.url
   */
  audioSourceUrl?: string;
  /**
   * Transcription model ID. Currently only 'gpt-4o-transcribe' (OpenAI) is supported. Accepts a literal model id or an @formula.
   * `gpt-4o-transcribe`: OpenAI's speech-to-text model — the default and only supported model today.
   * The only supported model today; the field exists so a future second model is additive, not a breaking rename.
   */
  model?: "gpt-4o-transcribe" | string;
  /**
   * Optional ISO-639-1 language hint (e.g. 'en') to improve transcription accuracy.
   * Optional language hint (e.g. `en`) to improve accuracy. Leave unset to let the model detect it.
   */
  language?: string;
  /**
   * When true, skip the AI call and return mockTranscript instead.
   * `true`: Returns `mockTranscript` instead of transcribing
   * `false`: Transcribes for real
   */
  mockEnabled?: boolean;
  /**
   * Mock transcript text to return when mockEnabled is true.
   * Transcript text to return while mocking.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   */
  mockTranscript?: string;
};

/** Publishes data to storage from a previous step's result. */
type PublishDataStepOptions = FlowStepBaseOptions & {
  type: "publishData";
  /**
   * Formula resolving to the data object to publish.
   * Formula resolving to the object to publish.
   * Usually assembles the record from earlier steps' results, which is why an object spread is the common shape — merging an AI result with a generated image, say.
   * Examples: @({ ...askai.result, illustration: imageGen.result }), @({ ...askai.result, image: imageGen.result.url })
   */
  sourceExpression?: string;
  /**
   * Object type name for the published data.
   * Object type to publish the record as.
   * Must be one of the org's declared object types — it decides which collection the record joins, and so where `$data.<Type>` will find it.
   */
  publishDataType?: string;
  /**
   * Data scope: 'global', 'user', or 'variant'. Default 'global'.
   * Which partition to publish into. Defaults to `global`.
   * `global` for shared records, `user` for records belonging to the signed-in user, `variant` for per-URL-variant content (which also needs `publishVariant`).
   */
  publishScope?: string;
  /**
   * Variant key (formula) used when publishScope is 'variant'.
   * Which variant key to publish under. Formula-capable; only read when `publishScope` is `variant`.
   * Variant records are stored per key rather than filtered at read time, so this decides the storage path the record lands on.
   */
  publishVariant?: string;
};

/** Runs a small imperative script as the flow's Finish action. The script uses the Orgiggly formula language with statements (`;`-separated) and assignments, plus a small allow-list of host functions. v1 hosts: `publishData({type, data})` — `data` is a single object or array, returns the created record(s) with id; `setAppValue(key, value)` — writes an app-level value (persisted via localStorage); `navigate(cursorKey)` — moves the cursor on completion. Async host calls must appear at statement top-level or as the RHS of an assignment (`postId = publishData(...)`) — not nested inside other expressions. Example for a new-post flow:
```
post = publishData({type: "TravelPost", data: {AuthorId: whoAmI, Details: comment}});
publishData({type: "Photo", data: photos.map((p) => ({Image: p.url, takenAt: p.takenAt, postId: post.id}))});
setAppValue("whoAmI", AuthorId)
``` */
type ScriptStepOptions = FlowStepBaseOptions & {
  type: "script";
  /**
   * Imperative script body (statements separated by `;`). See the node description for the host function allow-list and worked example.
   * Imperative script body — statements separated by `;`. Not an `@`formula: written raw.
   * Parenthesise any ternary before a following statement (`x = (a ? b : c);`) — the parser otherwise swallows the next statement into the ternary's else branch. Async host calls are only legal at statement top level or as the right-hand side of an assignment.
   */
  script?: string;
};

/** A single button that invokes a server-side Firebase callable on click. Evaluates `args` to produce the request payload, calls the named callable, then refreshes any listed callable-data sources and optionally navigates to a screen. Renders as a lean button + inline error message — no flow stepper chrome. Use when you have a 'Save' / 'Publish' / one-shot action that hits a callable. */
type CallableButtonOptions = CommonOptions & {
  type: "callableButton";
  /**
   * The Firebase callable to invoke. Constrained to a server-vetted allow-list — extending the list is a code change (web dispatcher + admin picker).
   * `setUserProfile`: Writes the signed-in user's profile
   * `triggerWorldcupSync`: Kicks off the World Cup results sync
   * A server-vetted allow-list, not a free-text name: adding a callable is a code change in both the web dispatcher and the admin picker.
   */
  functionName: "setUserProfile" | "triggerWorldcupSync";
  /**
   * Formula (prefix with @) producing the args object passed to the callable. Example: `@({ bio, avatarUrl: avatar.url })`.
   * Formula producing the arguments object passed to the callable.
   * Examples: @({ bio, avatarUrl: avatar.url })
   */
  args?: string;
  /**
   * Button label. Can be a formula (prefix with @) or template string.
   * Button label.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Examples: Save changes
   */
  actionLabel?: string;
  /**
   * Callable function names whose cached data should be refreshed after this button succeeds.
   * Comma-separated callable names whose cached data is re-fetched after this button succeeds — e.g. listUserHome.
   */
  refreshCallables?: string[];
  /**
   * Optional formula resolving to a screen pointer key — when set, the cursor is pushed there on success.
   * Formula resolving to a screen pointer key. When set, the user is taken there on success.
   * Leave it unset to keep the user where they are — pair that with `successMessage` so something still acknowledges the click.
   */
  onSuccessNavigate?: string;
  /**
   * Optional snackbar message shown on success. Can be a formula or template string.
   * Snackbar message shown on success.
   * Template string: an `@` prefix makes the value a backtick template, so `${...}` interpolates; a plain string with no `@` is used verbatim.
   * Worth setting whenever `onSuccessNavigate` is not, or a successful call looks like nothing happening.
   */
  successMessage?: string;
};

/** HTML content node with template syntax for dynamic rendering. */
type ContentOptions = CommonOptions & {
  type: "content";
  /**
   * The node's HTML, as a template literal. Interpolate data with `${…}`.
   * Evaluated by the formula engine, not JavaScript — so there is no `JSON.stringify`, no `typeof`, no optional chaining and no `new Date(...)`. Use `toJson(value)`, `length(arr)`, `formatDate(d, fmt)` and `if(...)` instead; an unknown call silently yields nothing rather than erroring. Clicks are wired through `actions`: a `<button data-action="name">` invokes a declared action, and an action whose script calls `setValue(…)` writes back to the node's own value, which is how a content node holds state.
   */
  htmlTemplate?: string;
  /**
   * One sentence saying what this block shows or does. Never rendered to visitors.
   * Read by people and by the org-gen agent rather than by the renderer: the org outline (`docs/OUTLINE.md`) shows it at L1 in place of the HTML, and staged generation emits it before any HTML exists (#2067). Describe intent, not markup — 'lists this week's events with a link to each' rather than 'a <ul> of events'.
   * Examples: Hero banner with the club's tagline and a join button, Shows the current player's hand as cards, Empty state shown when the member has no tabs yet
   */
  purpose?: string;
  /**
   * Named click actions for this node's template, keyed by action name. The template invokes one with data-action="<name>" on a <button> (preferred — a real button role) or <a>, binding param values via render-time interpolated data-param-<name> attributes. Each action is a `script`; navigation is a host call in the script (navigate / replaceScreen / back). Structured replacement for the legacy rel=/setValue=/data-script/data-args click attributes. A SANDBOXED WIDGET on this node can invoke the same actions by name (channel.runAction(name, params)) — the widget names the action, this config decides what it does; only params the action declares are passed through.
   * Named click behaviours the template invokes with data-action attributes — each one a script; to move screens it calls navigate('screen'), usually as the last line.
   * Each key is an action name; the template invokes it with a data-action attribute on a button (preferred — a real button role) or anchor, binding param values through render-time interpolated data-param attributes. Click-time dispatch evaluates no formulas: the action runs `script` with $params in scope. To move screens, end the script with navigate('screen', {id: $params.id}), replaceScreen('screen') or back(); a failure earlier in the script aborts the navigation. The structured replacement for the legacy rel=, setValue=, data-script and data-args click attributes. A second dispatch channel exists for a sandboxed-widget node: the widget calls channel.runAction(name, params) and the platform runs the action of that name declared HERE, so the widget can never do more than this config allows. That channel passes only the params the action declares (a widget is deployed separately from the org config, so an undeclared param means the two have drifted) and its params are runtime JSON rather than interpolated string literals.
   * Examples: { "openTab": { "params": ["id"], "script": "setAppValue('currentTabId', $params.id); navigate('tabDetail', {id: $params.id})" } }, { "cancel": { "script": "back()" } }
   */
  actions?: Record<string, ContentAction>;
};

/** A computed/derived value that can be referenced by other nodes. */
type VariableOptions = CommonOptions & {
  type: "variable";
};

/** A reusable parameterized computation callable from formulas. */
type FunctionOptions = CommonOptions & {
  type: "function";
  /**
   * Comma-separated parameter names, each optionally annotated `name: Type` (a field type: text, number, boolean, a declared objectType name, or list<T>/map<T>).
   * Comma-separated parameter names the function body can reference; add `: Type` to have the closing gate check member access against that type's declared fields.
   * The body itself is the inherited `compute` field. Arguments bind to these names in a child scope, so a function can call another function. A transition rule can call it too, and MUST pass any transition state it needs as an argument — see the help on the `compute` field (labelled Body in the designer). Annotations are gradual: `game: Game, pid` types only `game`, and an untyped list keeps working unchanged. Typing a parameter opts its body into strictness — `game.phaze` on a `Game` with no `phaze` field is a publish-time error rather than a silent `undefined` at runtime — and lets the gate check call sites whose argument type is statically known (a literal, a `$data.Type` element, a typed function's `returns`).
   * Examples: a, b, record, index, game: Game, move: Move, rows: list<Share>, n: number
   */
  parameters?: string;
  /**
   * Declared return type — a field type such as number, boolean, a declared objectType name, or list<T>. Supersedes returnTypeHint.
   * What the function returns, as a field type. Lets the closing gate type-check call sites that pass this function's result to a typed parameter.
   * Examples: number, Game, list<Card>
   */
  returns?: string;
  /**
   * Display-only return type hint. Superseded by `returns`.
   * Display-only legacy hint — prefer `returns`, which the closing gate understands.
   * Examples: number, string[]
   */
  returnTypeHint?: string;
};

/** A named constant (any JSON value), readable as a bare identifier from formulas AND transition rules. */
type ConstOptions = CommonOptions & {
  type: "const";
  /**
   * The constant's value — any JSON value (number, string, boolean, array or object). Never evaluated.
   * The constant's value, as plain JSON. It is stored as written — never evaluated as a formula and never overridden by user input.
   * Readable by its name from any formula (write the bare name or @name) and from a transition rule's condition/next/dueAt, so a tunable lives in one place instead of a zero-arg function repeated per org. The value is literal JSON: a string stays a string even if it starts with @.
   * Examples: 6, 30000, ["s","h","d","c"], { "mostCards": 2, "sweep": 1 }
   */
  value: unknown;
};

// All node types
type NodeOptions =
  | AppOptions
  | TabGroupOptions
  | TabOptions
  | FolderOptions
  | ScreenOptions
  | SubsectionOptions
  | FlowOptions
  | RepeatOptions
  | TreeOptions
  | TextInputOptions
  | NumberInputOptions
  | BooleanInputOptions
  | TemporalInputOptions
  | SelectInputOptions
  | FileInputOptions
  | AiQueryStepOptions
  | AiChatStepOptions
  | FetchDataStepOptions
  | ImageGenerationStepOptions
  | AudioGenerationStepOptions
  | TranscribeStepOptions
  | PublishDataStepOptions
  | ScriptStepOptions
  | CallableButtonOptions
  | ContentOptions
  | VariableOptions
  | FunctionOptions
  | ConstOptions;

```

## Object Types (objectTypes section)

Object types define the data schema for your app. They live in the
top-level `objectTypes` section — a SIBLING of `appConfig`, never inside it.
`objectTypes` is a FOLDER, not an array: each object type is an entry in its
`_children`, carrying `"type": "objectType"`. A bare array fails the
closing gate as `missing-objectType` on every `dataType` that names it (#1997):
`"objectTypes": { "type": "folder", "name": "", "_children": [ { "type": "objectType", "name": "Expense", "icon": "receipt", "fields": [ { "name": "merchant", "type": "text" } ] } ] }`.
Every node `dataType` and every foreign-key field `type` must match a
declared object type `name`. A field `type` is a builtin (`text`, `number`,
`boolean`, `temporal`, `variable`, `parentRef`, `image`, `imageUpload`), a
declared object type name, or a collection of either: `list<T>` / `map<T>`.
The framework stamps `id`, `createdAt`, `createdBy`, `updatedAt` and
`updatedBy` on every record — do not declare them as fields.

```typescript
/** One entry in the `_children` of the top-level `objectTypes` folder — a sibling of `appConfig`, NOT inside it, and a folder rather than an array: `{ "type": "folder", "name": "", "_children": [ { "type": "objectType", "name": "Expense", … } ] }`. Declares the data schema for one record type: its fields, an optional icon, and optionally the parent type its records belong to. Node `dataType` values and foreign-key field types must match a declared `name`. */
interface ObjectType {
  /**
   * Unique object type name — what `dataType`, foreign-key field types and `parent.type` refer to.
   * Names the record type that `dataType`, foreign-key field types and `parent.type` refer to; unique across the org.
   * Storage keys each collection by this name, so renaming a type does not move its existing records.
   * Examples: Post, Game, Submission
   */
  name: string;
  /**
   * The record's declared fields. Framework-owned meta fields (id, createdAt, createdBy, updatedAt, updatedBy) are stamped automatically and are not declared here.
   * Declares the record's own fields; `id`, `createdAt`, `createdBy`, `updatedAt` and `updatedBy` are stamped automatically and must not be listed.
   * Examples: [{"name":"postId","type":"text"},{"name":"url","type":"text"}]
   */
  fields: ObjectTypeField[];
  /**
   * Material icon name shown for this type in the admin and in record trees.
   * Shows this Material icon for the type in the admin Object Types tab and on record-tree rows.
   * Examples: article, image, fitness_center
   */
  icon?: string;
  /**
   * Declared on the CHILD: the type this type's records belong to, and the field holding that parent's id. Deleting a parent record cascades to every child that points at it.
   * Makes records of this type belong to a record of another type, so deleting that parent record deletes these too (declared on the CHILD).
   * Cascade runs on both rails: the realtime rail removes children in the cloud function; the Storage rail tombstones them (`isDeleted: true`) when a script calls `deleteData` or a form saves the parent with its delete toggle on — only children some node loads as a data source. Restoring a parent does not restore its children. This is ownership; a record tree's `parentRef` field is placement and never cascades.
   * Examples: {"type":"Game","idField":"gameId"}, {"type":"Post","idField":"postId"}
   */
  parent?: ParentRelation;
  /**
   * Who may save records of this type. Reading is unaffected: everyone who can open the app can read them. Defaults to anyone.
   * `anyone`: Anyone using the app can save records of this type. This is the default, and the right choice for forms, submissions and per-visitor records.
   * `admins`: Only the app's creator and its admins can save records of this type; everyone can still read them. Use it for an owner's public collection, portfolio or results.
   * An admin is the app's creator or a user listed in its admins. The server checks it on every save the app makes. Until a later release locks direct storage writes, an out-of-date copy of the app or a direct storage write can still get past it, so don't rely on it for anything secret yet. Hiding the matching controls is a separate step: give them a hidden formula on $isOrgAdmin. Guest (demo) apps refuse `admins` outright, because their admin list isn't protected.
   * Examples: admins
   */
  writeAccess?: "anyone" | "admins";
}

/** One field of an object type. `type` is a builtin (text, number, boolean, temporal, variable, parentRef, image, imageUpload), a declared object type name (a foreign key), or a collection of either: `list<T>` / `map<T>`. Every member is optional in the codec so a half-edited field never drops its object type out of the metamodel; a field the site can render needs at least `name` and `type` (the hand-kept `completeField` refinement in metamodel.ts). */
interface ObjectTypeField {
  /**
   * Field name — the key the value is stored under on every record of this type.
   * Sets the key the value is stored under on every record, and the name formulas read it by (`it.Content`, `$data.Post[0].AuthorId`).
   * Examples: Content, postId, gameId
   */
  name?: string;
  /**
   * A builtin, a declared object type name (foreign key), or `list<T>` / `map<T>` of either. A declared list reads back as [] when empty and dense when sparse; declare arrays instead of inlining them.
   * Chooses the value type: a builtin (`text`, `number`, `boolean`, `temporal`, `image`, `imageUpload`, `variable`, `parentRef`), a declared object type name for a foreign key, or `list<T>` / `map<T>` of either.
   * A declared `list<T>` reads back as `[]` when empty and dense when sparse; declare arrays here rather than inlining them. `parentRef` is the record-tree placement link (exactly one per child type) and is unrelated to `parent`. Multiline text is a `variant`, not a type.
   * Examples: text, number, list<text>, map<number>, SoloRun, parentRef
   */
  type?: string;
  /**
   * Input variant for the field's editor: `basic` or `multiline` for text fields.
   * Picks the input widget for a `text` field: `basic` (default), `multiline` or `stringArray`. Ignored on every other field type.
   * Only the text editor reads it; `variant: "integer"` on a number field has no effect.
   * Examples: multiline, basic
   */
  variant?: string;
  /**
   * @-formula whose value is stored in this field instead of user input.
   * Fills the field from an @-formula whenever the form renders, instead of user input, and stores the result on the record.
   * Evaluated in the form's scope, so it can reference sibling fields by name. Same mechanism as a `variable` node's `compute`.
   */
  compute?: string;
  /**
   * Computed for the form but never persisted onto the record.
   * `true`: Computed for the form but never written onto the record; pair with `compute` for a derived display value.
   * `false`: The value is saved (default).
   */
  isTransient?: boolean;
  /**
   * Help text shown below this field when editing instances; the org-gen agent also reads it as the field's meaning.
   * Shows as help text under the field in every form that edits this type, and tells the org-gen agent what the field means.
   * Examples: Currency the tab is kept in, Short shareable code others join with
   */
  description?: string;
  /**
   * imageUpload only: formula producing the stored file name. Defaults to `'<name>_' + generateId(4)`.
   * imageUpload only: formula producing the stored file name; defaults to `'<name>_' + generateId(4)`.
   * Examples: @name
   */
  fileNameFormula?: string;
  /**
   * imageUpload only: let the user generate the image with AI instead of uploading one.
   * `true`: imageUpload only; offers "Generate with AI" beside the upload button.
   * `false`: Upload or camera only (default).
   */
  aiEnabled?: boolean;
  /**
   * imageUpload only: formula for the AI system-prompt prefix; can reference other fields. Default: safe for work, high quality.
   * imageUpload with `aiEnabled`: formula for the system-prompt prefix sent with the user's image prompt; can reference other fields of the record.
   * Default is "safe for work, high quality".
   * Examples: @`An illustration for a short story: title: ${rightTitle} , ${rightText}`
   */
  aiSystemPromptFormula?: string;
  /**
   * image only: formula that pre-fills the image search term, e.g. value.name.
   * image only: formula that pre-fills the image search box, e.g. from the record's name.
   * Examples: @Name
   */
  searchFormula?: string;
}

/** A child object type's declaration of its parent (#1972): records of THIS type belong to a record of `type`, and `idField` on this type holds that record's id. Declared on the CHILD, so adding a child type is one line and cleanup is automatic — deleting a parent record deletes every record of this type that points at it. Both members are optional in the codec even though both are required in practice: `selectObjectTypes` filters on the codec, so a strict shape would silently drop a half-edited type out of the metamodel mid-edit. The closing gate is where a half-declared relation is rejected. */
interface ParentRelation {
  /**
   * Name of the parent object type. Must be a declared object type; the closing gate rejects an unknown name, a self-parent, or a cycle.
   * Names the parent object type whose records own records of this type.
   * Must be a declared object type; the closing gate rejects an unknown name, a self-parent and any cycle, because the cascade walks the graph as a tree.
   * Examples: Game, Post
   */
  type?: string;
  /**
   * The field on THIS type holding the parent record's id, e.g. gameId. Must name a field declared on this type; the gate hints at near-misses.
   * Names the field on THIS type that holds the parent record's id.
   * Must be one of this type's declared fields (the gate hints at near-misses). Any field type works; jumbly's `gameId` and feta-compli-sim's `postId` are plain `text`. The value links, not the type.
   * Examples: gameId, postId
   */
  idField?: string;
}
```

<!-- BEGIN PROMPT-STRIP: transitions -->
## Transition rules (app.transitions)

Realtime rules the server runs after publish: `appConfig.transitions` is an
array of these. A rule fires `onWrite` (a realtime write of `watchType`) or
`onTimer` (when the deadline `dueAt` computes for a `targetType` record
passes), then writes the next state of the target record and can send a push
(`notifyTo` + `notifyTitle`). A timer only arms on a record that exists: for
one schedule record (a daily reminder) use `perpetual: true` with a `targetId`
and a `seed`, which publishing creates. For a working example run
`og reference recipes daily-push-reminder`; `og reference realtime` has the
authoring rules, and `og sim` tests rules without publishing.

```typescript
/** Designer-authored realtime state-machine rule for the generic transition engine. When a record of `watchType` is written, the engine evaluates `condition` and, if it holds, transactionally writes the next state (from the `next` @-formula) to the `targetType` record identified by `targetId`. Rules are pure state→state; the engine owns reads, transactions, and the single authoritative write. A rule fires either `onWrite` (a realtime write of `watchType`) or `onTimer` (a per-record deadline computed by `dueAt`). */
interface TransitionRule {
  /**
   * Display name for this rule in the editor list.
   * What this rule is called in the editor's rule list. Never read at runtime, so name it for the effect — a realtime config often carries a dozen rules.
   * Examples: Prune abandoned presence, Reap abandoned video seats, Retire an abandoned game
   */
  label?: string;
  /**
   * Whether this rule is active. Defaults to on.
   * `true`: The rule fires normally. This is the default when unset.
   * `false`: The rule is kept in the config but never fires — the way to park a rule without deleting it.
   */
  enabled?: boolean;
  /**
   * What fires the rule. `onWrite` (the default when unset) fires on a realtime write of `watchType`, and needs `watchType` + `targetId`. `onTimer` fires when a deadline passes: the engine arms a timer against an individual `targetType` record from that record's own `dueAt` expression, so a timer rule needs `dueAt` and must leave `watchType`/`targetId`/`onDelete` unset (a `perpetual` timer is the exception: it names its one record with a literal `targetId`). An `onTimer` rule has NO input record, so `$record`/`$recordId` are absent from every formula it evaluates.
   * `onWrite`: Fires on a realtime write of `watchType`. Needs `watchType` and `targetId`, and is the default when unset.
   * `onTimer`: Fires when a deadline passes. The engine arms a timer on each `targetType` record from that record's own `dueAt`, so the rule needs `dueAt` and must leave `watchType`, `targetId` and `onDelete` unset. A `perpetual` timer is the exception: it names its one record with a literal `targetId`.
   * An `onTimer` rule has no input record, so `$record` and `$recordId` are absent from every formula it evaluates.
   */
  trigger?: "onWrite" | "onTimer";
  /**
   * Realtime object type name whose writes fire the rule. `onWrite` only — an `onTimer` rule is fired by a deadline rather than by a write, and must leave this unset.
   * The realtime object type whose writes fire this rule. `onWrite` only — an `onTimer` rule is fired by a deadline rather than a write, and must leave this unset.
   * Examples: Move, Submission
   */
  watchType?: string;
  /**
   * Also fire the rule when a watched record is removed. Defaults to off. `onWrite` only — an `onTimer` rule watches nothing.
   * `true`: Also fires when a watched record is removed, not just created or updated.
   * `false`: Only creates and updates fire the rule. This is the default.
   * `onWrite` only — an `onTimer` rule watches nothing.
   */
  onDelete?: boolean;
  /**
   * Realtime object type name the engine writes. For `onWrite` it must differ from `watchType` (no self-chains in v1). For `onTimer` it is ALSO the type whose records carry the timers — each record of this type gets its own deadline from `dueAt` — and `$records` means this type's records (target siblings), not the watched type's.
   * The realtime object type this rule writes.
   * For `onWrite` it must differ from `watchType` — v1 allows no self-chains. For `onTimer` it is also the type carrying the timers: every record of this type gets its own deadline from `dueAt`, and `$records` means this type's records (the target's siblings), not the watched type's.
   * Examples: Game, Player, VideoSeat
   */
  targetType?: string;
  /**
   * @-formula over $record producing the target record id to write. `onWrite` only — an `onTimer` rule's timer is already armed against one specific record, so there is nothing to compute and it must leave this unset. The one exception is a `perpetual` timer rule, which REQUIRES a literal id: the single schedule record it keeps alive.
   * Formula over `$record` producing the id of the record to write. `onWrite` only — an `onTimer` rule's timer is already armed against one specific record, so there is nothing to compute and it must leave this unset. A `perpetual` rule is the exception: it needs a plain id naming its one schedule record.
   * Examples: @$record.gameId, daily
   */
  targetId?: string;
  /**
   * @-formula guard. Evaluated cheaply before the transaction and again inside the transaction against the live $target; falsy inside aborts the write. Optional on an `onTimer` rule, where it answers WHETHER the rule should still fire once its `dueAt` deadline arrives — the in-transaction re-check is what makes a stale or duplicated firing a harmless no-op.
   * Formula guard deciding whether the write happens. Falsy aborts it.
   * Evaluated cheaply before the transaction and again inside it against the live `$target` — only the inner result can abort the write. On an `onTimer` rule it is optional and answers whether the rule should still fire now its `dueAt` deadline has arrived; that in-transaction re-check is what makes a stale or duplicated firing a harmless no-op.
   * Examples: @$target.online == false, @$record.kind == 'deal' && $target.phase == 'playing' && handsEmptyFn($target, $private) && stockLeftFn($private) > 0
   */
  condition?: string;
  /**
   * @-formula (or ;-separated script) returning the FULL next target state. The engine prunes undefined values and commits the result in a single transaction. On an `onTimer` rule it is also what MOVES the deadline — see `dueAt`.
   * Formula (or `;`-separated script) returning the FULL next state of the target record.
   * The engine prunes undefined values and commits the result in a single transaction, so this is a whole-record replacement rather than a patch. Returning `@null` deletes the record. On an `onTimer` rule this is also what moves the deadline — see `dueAt`.
   * Examples: @null, @dealGameFn($target, shuffle(deckIdsFn(), $seed), $now), @redealGameFn($target, $private, $now)
   */
  next?: string;
  /**
   * @-formula evaluated in the same context as `condition` (same $record/$target/$records/$params/$now/$seed scope), producing a player-facing message when the move is rejected. A rule with no reason still gets a generic rejection message. Never evaluated for operator-only outcomes (formula-error, bad-target-id, stale, missing-target) — those stay Cloud-Logging-only, unchanged. MUST be DETERMINISTIC for a given game state — do NOT reference $now or $seed. The engine stops the ack write from re-triggering itself by comparing the newly computed reason against the stored one and skipping an identical write; a reason that changes every firing (e.g. '@`Rejected at ${$now}`') never compares equal, so the write re-fires the trigger forever.
   * Formula producing a player-facing message when the move is rejected. A rule with no reason still gets a generic one.
   * Evaluated in the same scope as `condition`. Never evaluated for operator-only outcomes — formula errors, bad target ids, stale and missing targets stay in Cloud Logging. It must be deterministic for a given state: the engine suppresses a repeat ack write by comparing the newly computed reason against the stored one, so a reason embedding `$now` or `$seed` never compares equal and re-fires the trigger forever.
   * Examples: @moveRejectFn($record, $target), @moveRejectFn($record, $target, $private)
   */
  rejectionReason?: string;
  /**
   * Field name in this rule's committed `next` value whose string value is the FIREBASE AUTH uid of the player whose turn it now is. Setting this opts the rule into a web push ("it's your turn") sent to that player whenever the value changes from the last commit. It must be the auth uid, NOT a game-level player id — push tokens are registered against the auth uid, so pointing this at a `generateId()`-style playerId matches no device and sends nothing, silently. Every realtime record carries `ownerUid` (the auth uid of whoever wrote it), so a rule's `next` can carry that through. Leave unset for rules with no turn-notification concept.
   * Field in this rule's committed `next` whose value is the Firebase Auth uid of the player whose turn it now is. Setting it opts the rule into a turn push whenever that value changes from the last commit.
   * It must be the auth uid, not a game-level player id — push tokens are registered against the auth uid, so pointing this at a `generateId()`-style playerId matches no device and sends nothing, silently. Every realtime record carries `ownerUid`, the auth uid of whoever wrote it, so a rule's `next` can carry that through. Leave unset for rules with no turn-notification concept.
   */
  notifyTurnUidField?: string;
  /**
   * Push title. Supports ${field} interpolation against the committed next value (mirrors pushRule.titleTemplate). Defaults to "It's your turn!" when unset. Only used when notifyTurnUidField is set.
   * Title of the turn push. Supports `${field}` interpolation against the committed next value, and defaults to a stock it-is-your-turn title when unset.
   * Only used when `notifyTurnUidField` is set. Mirrors `pushRule.titleTemplate`.
   */
  notifyTitleTemplate?: string;
  /**
   * Push body. Supports ${field} interpolation against the committed next value. Blank by default. Only used when notifyTurnUidField is set.
   * Body of the turn push, blank by default. Supports `${field}` interpolation against the committed next value.
   * Only used when `notifyTurnUidField` is set.
   */
  notifyBodyTemplate?: string;
  /**
   * In-org screen to open when the push is tapped (mirrors pushRule.clickPath exactly — same in-app nav target, same rejection of absolute/cross-org paths). Used by both push kinds: the turn push (`notifyTurnUidField`) and the list push (`notifyTo`).
   * In-org screen to open when the turn push is tapped.
   * Mirrors `pushRule.clickPath` exactly — the same in-app nav target, and absolute or cross-org paths are rejected the same way. Used by both the turn push (`notifyTurnUidField`) and the list push (`notifyTo`).
   */
  notifyClickPath?: string;
  /**
   * @-formula returning the RECIPIENTS of a push sent after this rule commits (#2325) — on an `onWrite` AND an `onTimer` rule. An array whose items are Firebase auth uid strings, or `{ uid, title?, body? }` objects that override the rule's title/body for that one person (a reminder naming their own slot). `[]`, null or empty sends nothing. Evaluated against the COMMITTED target: `$target` is the value the rule just wrote, `$now` the same instant the commit used, plus `$record`/`$recordId` on an onWrite rule; `$private` is not available. A rejected, raced or failed commit sends nothing. Delivery is AT MOST ONCE per commit: the push goes out after the commit, so a crash between the two loses it, while a redelivered event or re-fired timer re-checks `condition` against the already-moved target and sends nothing. Tokens are matched on the uid each device registered with, so it must be the AUTH uid (every realtime record's `ownerUid`), never a game-level id. The reminder idiom: a timer rule whose `next` stamps `remindedAt: $now` on the people it covers and whose `notifyTo` picks exactly those (`it.remindedAt == $now`) — the stamp is what re-arms the timer for the next one. Requires `notifyTitle`; can't be combined with `notifyTurnUidField`.
   * @-formula returning who gets a push after this rule commits — auth uids, or `{ uid, title, body }` objects for per-person text.
   * Evaluated against the committed target, so `$target` is what the rule just wrote. Works on timer rules too. Pair with `notifyTitle`; a reminder rule stamps `remindedAt: $now` in `next` and sends to `filter($target.takers, it.remindedAt == $now)`.
   * Examples: @map(filter($target.takers, it.remindedAt == $now), it.uid), @[$target.ownerUid]
   */
  notifyTo?: string;
  /**
   * @-formula for the push title every `notifyTo` recipient gets unless their entry carries its own (#2325). Same committed-target scope as `notifyTo`. Required when `notifyTo` is set.
   * @-formula for the push title sent to the `notifyTo` recipients.
   * Evaluated against the committed target, like `notifyTo`. A recipient object's own `title` wins.
   * Examples: @'Reminder: ' + $target.title
   */
  notifyTitle?: string;
  /**
   * @-formula for the push body every `notifyTo` recipient gets unless their entry carries its own (#2325). Same committed-target scope as `notifyTo`. Blank when unset.
   * @-formula for the push body sent to the `notifyTo` recipients.
   * Evaluated against the committed target, like `notifyTo`. A recipient object's own `body` wins.
   * Examples: @'You are helping today'
   */
  notifyBody?: string;
  /**
   * @-formula naming this send for DEDUPE (#2325): a uid that has already been delivered a push from this rule, for this target record, under the same key is skipped. Same committed-target scope as `notifyTo`. Unset means no key dedupe — each applied commit sends once, which the commit itself already guarantees. Set it when the rule can apply more than once for the same news (a commit that doesn't move what `condition` reads), e.g. `@'remind-' + $target.date`. The marker is written only after a delivery to that uid, so a rate-limited or failed send stays retryable.
   * @-formula naming a send for dedupe — a uid already sent this key by this rule for this record is skipped.
   * Only needed when the rule can apply twice for the same news. Unset, each applied commit sends once.
   * Examples: @'remind-' + $target.date
   */
  notifyKey?: string;
  /**
   * @-formula naming the VARIANT the list push opens (#2385): a tap lands on `/{user}/{org}/{variant}?r=<notifyClickPath>` instead of the bare org path. Same committed-target scope as `notifyTo`. The value must be one path segment of letters, digits, `-` or `_`; anything else (or blank) falls back to the bare org path, like an unsafe `notifyClickPath`. List push only (`notifyTo`); the turn push ignores it.
   * @-formula naming the variant a tapped list push opens, e.g. the event's own page.
   * One path segment of letters, digits, `-` or `_`. Anything else, or blank, opens the bare org path. Combine with `notifyClickPath` to also pick the screen.
   * Examples: @$target.id
   */
  notifyClickVariant?: string;
  /**
   * @-formula returning the RECIPIENTS of an SMS sent after this rule commits (#2254) — on an `onWrite` AND an `onTimer` rule, the text channel beside `notifyTo`. An array whose items are phone strings, or `{ phone, body? }` objects whose `body` overrides `smsBody` for that one person. UK numbers are accepted as typed (`07700 900123`), as digits (`447700900123`) or in E.164 (`+447700900123`); an entry that is not a valid number is dropped and counted, never fatal. Duplicates collapse to one text. `[]`, null or empty sends nothing. Same committed-target scope as `notifyTo` (`$target` is the value the rule just wrote, `$now` the commit's own instant, plus `$record`/`$recordId` on an onWrite rule), PLUS `$private` when `smsReadUids` is set — the phone numbers normally come from there, because a number must never sit on the public rail. A rejected, raced or failed commit texts nobody, and delivery is AT MOST ONCE per commit (same contract as `notifyTo`). The sender name is NOT authored here: it is the org's platform-assigned sender ID, so a config cannot text as someone else. A number that has opted out is skipped, and per-org hourly and monthly caps apply. Requires `smsBody`.
   * @-formula returning who gets a text after this rule commits — phone numbers, or `{ phone, body }` objects for per-person text.
   * Evaluated against the committed target like `notifyTo`, and works on timer rules too. Numbers usually come from `$private` (see `smsReadUids`), never from the public record. The sender name is set per org by the platform, not by the config.
   * Examples: @map(filter($target.takers, it.remindedAt == $now), (t) => ({ phone: $private[$target.ownerUid].byTaker[t.id], body: 'Reminder: ' + t.name + ', you are on at ' + t.time }))
   */
  smsTo?: string;
  /**
   * @-formula for the text every `smsTo` recipient gets unless their entry carries its own `body` (#2254). Same scope as `smsTo`, including `$private` when `smsReadUids` is set. Required when `smsTo` is set. Name the event or organisation in the text: the sender ID is shared by every event the org runs. A text longer than two SMS segments (306 plain characters, or 134 once it contains an emoji or other non-GSM character) is cut to fit with an ellipsis.
   * @-formula for the text sent to the `smsTo` recipients.
   * A recipient object's own `body` wins. Keep it under two segments — about 300 plain characters, far fewer with an emoji — or it is cut short. Say which event it is about: the sender name is shared across the org.
   * Examples: @'Thanks for helping at ' + $target.title + '! See you there.'
   */
  smsBody?: string;
  /**
   * Private realtime type the SMS side effect READS after the commit (#2254) — the `{Type}` segment of `realtimePrivate/{key}/{Type}/{targetId}`, the same id as this rule's target. Requires `smsReadUids`, and vice versa. Independent of `privateType`: the read happens after the commit, outside the transaction, so it is allowed on an `onTimer` rule, which cannot read the private rail through `privateReadUids`. It sees the COMMITTED private state, so a rule that just stored a number via `nextPrivate` texts that number.
   * The private type whose records the SMS step reads to find phone numbers.
   * Read after the commit, so it works on timer rules too and sees what `nextPrivate` just wrote. Pair it with `smsReadUids`.
   */
  smsPrivateType?: string;
  /**
   * @-formula returning the KEYS whose `smsPrivateType` records the SMS side effect loads after the commit (#2254); they arrive as `$private` in `smsTo`/`smsBody` and nowhere else. Same containment as `privateReadUids`: the formula names keys and the engine builds the paths, so a rule can only read its own target's private records; capped at 64 keys; `[]` reads nothing; a non-array is a formula error that sends nothing. Same committed-target scope as `notifyTo`. Requires `smsPrivateType`.
   * Keys whose private records the SMS step reads, arriving as `$private` in `smsTo` and `smsBody`.
   * Usually the organiser's uid, under which the phone book is kept. Read after the commit, so timer rules can use it.
   * Examples: @[$target.ownerUid]
   */
  smsReadUids?: string;
  /**
   * `onTimer` only — required there, and rejected by the closing gate on an `onWrite` rule. @-formula over $target/$records/$now/$seed/$params (NO $record) returning WHEN this rule should next fire for this record, as an epoch-milliseconds timestamp, e.g. '@$target.turnStartedAt + 600000'. CONTRACT: a finite number arms the timer for that instant; `null`, `undefined` or `false` means "no timer for this record right now", which is how a rule arms conditionally (e.g. '@$target.online == false ? $target.awayAt + 3600000 : null'); any other value is a formula-error and fails closed, arming nothing. The result must be a PURE function of the record's own state — the closing gate REJECTS $now, $seed, rand() and generateId() in this formula (transition-timer-impure-due): an impure deadline recomputes differently on every write, so the timer re-arms an unchanged record forever. AUTHORING RULE: `dueAt` is a deadline your `next` should move — an unmoved deadline fires once and stops. Use `condition` for WHETHER the rule should still fire when the deadline arrives; it is re-checked inside the transaction.
   * `onTimer` only: formula over the target's own state returning when this rule should next fire, as epoch milliseconds. Required there, and rejected by the closing gate on an `onWrite` rule.
   * A finite number arms the timer for that instant; `null`, `undefined` or `false` means no timer for this record right now, which is how a rule arms conditionally. Any other value is a formula error and fails closed, arming nothing. The result must be a pure function of the record's own state — the closing gate rejects `$now`, `$seed`, `rand()` and `generateId()` here, because an impure deadline recomputes on every write and re-arms an unchanged record forever. Treat it as a deadline your `next` should move: an unmoved deadline fires once and stops, and `condition` is what decides whether it should still fire when it arrives.
   * Examples: @$target.online == false ? $target.awayAt + 300000 : null, @$target.phase == 'playing' && $target.turnStartedAt ? $target.turnStartedAt + 600000 : null
   */
  dueAt?: string;
  /**
   * @-formula returning a UID-KEYED MAP of private per-player records to write alongside the public target — `{ "<authUid>": <recordValue>, ... }`. Each entry is written to `realtimePrivate/{uid}/{privateType}/{targetId}`, reusing this rule's own `targetId`, so a card game's public `Game/g1` and each player's private `Hand/g1` share an id. Requires `privateType`. The keys must be FIREBASE AUTH uids — the RTDB rules grant read only where `auth.uid` matches the path segment, so a game-level playerId writes a subtree its owner cannot read, silently. Every realtime record carries `ownerUid` (the auth uid of whoever wrote it), so a rule can carry that through. Evaluated in the same scope as `next`, against the same live `$target`, inside the same guarded transaction — so the public and private values can never be computed from different states. The private records are then written in ONE atomic multi-path update, so they land all-or-nothing; that update follows the public commit, so a reader can briefly see the new public state before the private records exist (see deepHelp).
   * Private per-player records to write alongside the public target — a hand of cards each player alone can read.
   * Returns a map keyed by auth uid; the engine writes each value under that uid's private realtime subtree. Use it for hidden information: a hand, a shuffled deck order, a secret role. RTDB can compare-and-set only ONE location, so the engine commits the public target in its guarded transaction and then fans the private records out in a single atomic update. The private fan-out is indivisible, but it lands one round-trip AFTER the public commit — so design the public state so the gap is harmless (deal the cards in the same transition that moves the phase OUT of the one the UI reads hands in, or have the UI show a dealing state until its own private record arrives). If the transaction aborts, no private record is written at all.
   * Examples: @{ $target.playerA: { cards: $deck.slice(0, 13) }, $target.playerB: { cards: $deck.slice(13, 26) } }
   */
  nextPrivate?: string;
  /**
   * Realtime object type the `nextPrivate` records are written as — the `{Type}` segment of `realtimePrivate/{uid}/{Type}/{targetId}`. Required whenever `nextPrivate` is set, and rejected without it. Must be a realtime object type declared with `scope: "user"` (a data node binding it with `source: "realtime"`, `scope: "user"`) — the closing gate rejects a `privateType` the config exposes on the PUBLIC realtime rail, which would write records the engine believes are private into a collection every client subscribes to. Must also differ from `watchType`, like `targetType`.
   * The object type the private per-player records are written as.
   * Must be bound somewhere in the config by a data node with `source: "realtime"` and `scope: "user"`, which is what puts the reading client on the private rail. Declaring the same type publicly elsewhere is rejected — a type cannot be both hidden and shared.
   */
  privateType?: string;
  /**
   * @-formula returning an ARRAY OF KEYS whose private records this rule needs to READ — the symmetric half of `nextPrivate`. Each key `k` loads `realtimePrivate/{k}/{privateType}/{targetId}` and the results arrive as `$private`, a key-keyed map (a key with no record is absent from the map, so a truthiness check distinguishes "no hand yet"). Requires `privateType`. RTDB cannot wildcard a path segment, which is why the key list must be SUPPLIED rather than discovered — carry it on the target record (e.g. a seat→uid map written when the game started). As with `nextPrivate` the formula names the keys and the ENGINE builds the paths, so a rule can never address anything outside its own private records. READ BEFORE THE TRANSACTION, so `$private` is a snapshot that does not re-resolve on a retry: guard anything that must be serialised with a `condition` on the public target, whose compare-and-set is what actually orders concurrent moves. onWrite-only in v1 — the closing gate rejects it on an `onTimer` rule, whose context carries an empty `$private`. Capped at 64 keys; a longer list is an authoring error and is rejected, not truncated.
   * Keys whose private records this rule reads, arriving as `$private`.
   * The read counterpart of `nextPrivate`. A card game's turn rule reads the drawing player's hand and the hidden stock, moves a card between them, and writes both back via `nextPrivate` in the same rule — one atomic fan-out. Evaluated once before the transaction against the pre-read `$target`, so it may reference `$target` and `$record` but sees no in-transaction state.
   * Examples: @[$target.seatUids[$record.playerId], '__stock'], @$target.seats.map((s) => $target.seatUids[s])
   */
  privateReadUids?: string;
  /**
   * `onTimer` only — declares that this rule's `next` is this object's end-of-life: once it fires, the record is expected to be gone. An intent marker only (the gate cannot prove a `next` actually deletes) — every `targetType` that carries any `onTimer` rule must carry at least one `endOfLife: true` rule too, or the closing gate rejects the config, since EOL is what bounds a re-arming timer's loop. Convention: an EOL rule's `next` returns `@null` (verified to delete the record via the transaction; `@{}` also deletes but reads like an accident).
   * `true`: This rule's `next` is the record's end of life — once it fires, the record is expected to be gone. The convention is a `next` of `@null`, which deletes it.
   * `false`: An ordinary timer rule. This is the default.
   * An intent marker only — the gate cannot prove a `next` actually deletes. Every `targetType` carrying any `onTimer` rule must also carry at least one end-of-life rule, or the closing gate rejects the config: end-of-life is what bounds a re-arming timer's loop.
   */
  endOfLife?: boolean;
  /**
   * `onTimer` + `endOfLife` only — just before the end-of-life delete commits, copy the record into the org's Storage collection for its type (same id, global scope), so a `source:"storage"` read of that type keeps showing it after it leaves the realtime database. `archiveData`, `archiveType` and `archiveId` change what is copied, as which type, and under which id. A failed copy blocks the delete and the timer retries, so nothing is lost. The closing gate rejects it on an `onWrite` rule or a rule without `endOfLife: true`. An archive write counts as a publish, so a push rule on that type fires for it.
   * `true`: Copy the record to Storage before it is deleted, so finished records stay browsable through a storage read of this type.
   * `false`: The record is simply deleted. This is the default.
   * Only valid with `endOfLife: true` on a timer rule. The copy keeps the record's id, so a retried firing overwrites rather than duplicating, and a failed copy stops the delete.
   */
  archive?: boolean;
  /**
   * Only with `archive: true` — the objectType the archive copy is published as, instead of `targetType` (#2324). Must be a declared objectType; read it back with a subsection declaring `source: "storage"` for that type. A separate type keeps finished records apart from live ones, e.g. an `EventArchive` beside the realtime `Event`.
   * Publish the archive copy as this objectType instead of the record's own type — keeps finished records apart from live ones.
   * Examples: EventArchive
   */
  archiveType?: string;
  /**
   * Only with `archive: true` — @-formula returning the OBJECT to archive instead of the whole record (#2324), evaluated against the final `$target` in the same scope as `next` ($target/$records/$params/$now/$seed, no $record). Storage records are world-readable, so this is where a projection keeps private fields (phone numbers, uids) out of the copy. Must evaluate to a plain object; any other value is a formula-error and the record is NOT deleted. The closing gate warns on a bare `@$target`, which is the same as leaving it unset.
   * @-formula returning what to archive instead of the whole record. Storage is world-readable, so pick only the fields that may be public.
   * Evaluated against the final `$target`, like `next`. It must return an object; anything else stops the delete and reports a formula error, so nothing is lost.
   * Examples: @{ title: $target.title, date: $target.date, helpers: map($target.takers, (t) => t.name) }
   */
  archiveData?: string;
  /**
   * Only with `archive: true` — @-formula returning the id the archive copy is published under, instead of the record's own id (#2324). Same scope as `archiveData`. Must be DETERMINISTIC for a given record — never $now, $seed or generateId() — because a retried firing must overwrite its own earlier copy rather than add a second one. Use it when a record's id is reused, e.g. a yearly event on the same slug: `@$target.id + '-' + $target.date`. Must evaluate to a non-empty string with no '/'; anything else is a formula-error and the record is NOT deleted.
   * @-formula returning the id to archive under, instead of the record's own — for ids that get reused, like a yearly event's slug.
   * Must be deterministic: a retried firing overwrites its own earlier copy only if it computes the same id. Never use `$now`, `$seed` or `generateId()` here.
   * Examples: @$target.id + '-' + $target.date
   */
  archiveId?: string;
  /**
   * `onTimer` only — marks a recurring wall-clock rule (#1521): ONE schedule record, named by a literal `targetId`, that lives forever and re-arms itself. Its `dueAt` must be a plain field read (`@$target.nextAt`) and its `next` moves that field to the next occurrence, usually with `nextOccurrence($now, 'HH:MM', 'Europe/London')`. Requires `targetId` and `seed`; publishing creates the record from `seed` when it is absent. Exempt from the end-of-life requirement, so the gate allows exactly one perpetual rule per `targetType` and no other timer rules on that type.
   * `true`: A recurring schedule: one record that never ends and fires at a wall-clock time, then sets its own next time. Needs `targetId` and `seed`.
   * `false`: An ordinary timer rule. This is the default.
   * Give the schedule its own object type, with one perpetual rule and no other timer rules on it. `dueAt` must read a single field such as `@$target.nextAt`, and `next` must move that field forward, typically with `nextOccurrence`. A re-arm to a past time waits at least 60 seconds, so a rule that forgets to move it fires at most once a minute rather than in a tight loop.
   */
  perpetual?: boolean;
  /**
   * `perpetual` rules only — @-formula for the schedule record's initial state, evaluated at publish (scope: $now, $params) when the `targetId` record does not exist yet. It must set the field `dueAt` reads, e.g. `@{ nextAt: nextOccurrence($now, '05:17', 'Europe/London'), round: 0 }`. A record that already exists is left alone, so a re-publish never resets a running schedule.
   * The schedule record's starting state, written when the rule is published and the record does not exist yet. It must set the field `dueAt` reads.
   * Examples: @{ nextAt: nextOccurrence($now, '05:17', 'Europe/London'), round: 0 }
   */
  seed?: string;
}
```

<!-- END PROMPT-STRIP: transitions -->

## Plugins (plugins section)

Plugins are reusable HTML components with parameters.

```typescript
interface Plugin {
  name: string;
  parameters: PluginParameter[];
  htmlTemplate: string;
  icon?: string;
}

interface PluginParameter {
  name: string;
  type?: string;
  description?: string;
}
```

## Legacy — recognise, never write

These still decode and render in existing orgs, so you may meet them when reading or editing one. They are left out of the types above on purpose: never write them in new output, and when you touch a node that uses one, write the replacement.

- `form` (node type), legacy since 2026-10. Write instead: inputs on a screen or flow screen, saved by `publishData` / `updateData` in a script.
- `submitObjectType` (on any container node), legacy since 2026-10. Write instead: a declared action or a flow `script` step that calls `publishData({type, data: {...}})` with the inputs named explicitly.
- `isList` (on `ObjectTypeField`), legacy since 2026-10. Write instead: `type: "list<T>"`.
- `multiline` (on `ObjectTypeField`), legacy since 2026-10. Write instead: `variant: "multiline"` on a text field.
