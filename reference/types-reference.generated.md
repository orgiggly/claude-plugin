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

interface FormConfigOptions {
  /**
   * The object type this form submits records of.
   * Examples: Recipe, Post, Todo
   */
  dataType?: string;
  /**
   * Data scope: global (shared), user (per-user partition), variant (per-URL-variant partition, admin-curated so not form-writable), or group (per-membership-group partition, written through a membership-checked callable)
   * `global`: One shared collection every visitor reads and writes.
   * `user`: A per-user partition.
   * `variant`: A per-URL-variant partition, admin-curated and so not form-writable.
   * `group`: A group partition, which needs `groupKey` to say which one.
   * `all`: Reads across every partition.
   */
  scope?: "global" | "user" | "variant" | "group" | "all";
  /**
   * Which group partition a submit writes into. Required when scope is "group" — a member can belong to several groups at once, so the key cannot be inferred from the session. Accepts an @-formula so the org can derive it from flow state.
   * Which group partition a submit writes into. Required when `scope` is group.
   * A member can belong to several groups at once, so the key cannot be inferred from the person.
   * Examples: A, B, C
   */
  groupKey?: string;
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
   * Error message if validation fails
   * Shown under the field when `expression` is false. Say what to do, not what went wrong.
   * Examples: Enter a name., End date must be on or after the start date
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
     * Data scope: global (shared), user (per-user partition), variant (per-URL-variant partition), or group (per-membership-group partition, served only through a membership-checked callable). On source "realtime", `user` selects the PRIVATE per-uid rail rather than a filter.
     * `global`: Only records in the org's shared collection
     * `user`: Only the signed-in user's own records — on a realtime block, their own PRIVATE subtree, unreadable by anyone else
     * `variant`: Only records for the current URL variant
     * `group`: Only records for the group the current user is acting in — fetched through a membership-checked callable, never readable by non-members
     * `all`: No partition filter — every record of this type written to the global or user scope (never group data)
     * The mechanism differs per source. On `storage`, `global` and `user` FILTER on a `_scope` marker that only the storage-fetch path stamps, so they narrow nothing on embedded data, and `variant` partitions by storage path rather than by filter. `group` also partitions by storage path (`…/groups/{groupKey}`), but that path is gated by the org's membership registry, so the partition is also the privacy boundary — and `all` never expands into it: group data is only ever loaded by an explicit `scope: "group"` binding. On `realtime`, `user` is not a filter at all: it switches the subscription to `realtimePrivate/{uid}/{Type}`, whose RTDB rules grant read only where `auth.uid` matches, so the PATH is the partition and the records never reach another player's client. That makes `scope` load-bearing for security on the realtime rail — the closing gate rejects `user` on `embedded`/`callable`, where it would look like a privacy control while narrowing nothing.
     */
    scope?: "global" | "user" | "variant" | "group" | "all";
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
  /**
   * Object type to submit data as
   * If specified, any descendent nodes which trigger submit will bubble up to this node, and an object of this type will be submitted to the server
   * Set this on a container that wraps a set of inputs forming one record — e.g. a screen whose fields together make up a single object to persist.
   */
  submitObjectType?: string;
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
   * Written as a template literal so it can interpolate data. Keep it to a line — it renders under the field at every width, phones included.
   * Examples: @`What should the story be about?`, @`A short blurb shown on your profile. Up to 500 characters.`
   */
  help?: string;
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
   * `dev`: All data sources will be treated as "embedded"
   * `prod`: "storage" and "realtime" data sources will be enabled
   * Controls which data sources are live. In dev, every data block behaves as embedded so you can prototype without provisioning storage; in prod, storage and realtime bindings connect to Firebase.
   */
  deployMode?: "dev" | "prod";
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
};

/** Generic container with variants: 'none' (default), 'tabGroup', 'tab', 'folder'. */
type AppNodeOptions = CommonOptions & ContainerOptions & DataOptions & {
  type: "appNode";
  /**
   * `none`: A plain container that just groups its children
   * `tabGroup`: Renders its children as a tab bar
   * `tab`: One tab inside a tabGroup
   * `folder`: Groups children in the designer tree
   */
  variant: "none" | "tabGroup" | "tab" | "folder";
};

/** A navigable page/view in the app. Can contain subsections and inputs. */
type ScreenOptions = CommonOptions & ContainerOptions & DataOptions & {
  type: "screen";
  /**
   * Optional icon shown beside this screen in the top-level navigation (menu/tabs). An emoji (e.g. "🏆") or a Material icon name.
   * Shown beside this screen in the nav menu or tab strip.
   */
  icon?: string;
};

/** A grouping container for organizing content. Can be repeating for lists. */
type SubsectionOptions = CommonOptions & ContainerOptions & DataOptions & {
  type: "subsection";
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
};

/** A data entry container bound to an object type. Auto-generates input fields. */
type FormOptions = CommonOptions & DataOptions & {
  type: "form";
  /**
   * Which object type the form writes to, and which partition it writes into.
   * `dataType` names the collection a submit publishes to; `scope` picks the partition, defaulting to `global`. Without a `dataType` the form has nowhere to save.
   * Examples: { "dataType": "Recipe" }, { "dataType": "Post", "scope": "user" }
   */
  formConfig: FormConfigOptions;
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

/** An implicitly repeating container for displaying collections. */
type ListOptions = CommonOptions & IterationOptions & DataOptions & {
  type: "list";
  isRepeating: true;
  /**
   * `masterDetail`: List with a detail pane for the selected row
   * `table`: Not implemented
   * Nothing reads this field at render time — a list always renders as master/detail.
   */
  inputVariant: "masterDetail" | "table";
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

/** Text entry field. Variants: 'basic', 'multiline', 'richText'. */
type TextInputOptions = InputOptions & {
  type: "textInput";
  /**
   * `basic`: Single-line text field
   * `multiline`: Text area that grows with the content
   * `richText`: Not implemented — renders as a single-line field
   * `stringArray`: A list of strings the user can add to and remove from
   */
  variant?: "basic" | "multiline" | "richText" | "stringArray" | string;
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
   * `money`: No distinct input — renders like `integer`; it only changes how the field is described to the org-gen agent
   * `intArray`: A list of whole numbers the user can add to and remove from
   */
  variant?: "integer" | "slider" | "decimal" | "money" | "intArray" | string;
  /**
   * Lowest value the slider allows. Formula-capable.
   * Only the `slider` variant reads it — the text variants ignore `min`, `max` and `step` entirely. Defaults to 1.
   * Examples: @0, @1
   */
  min?: number | string;
  /**
   * Highest value the slider allows. Formula-capable.
   * Slider only, the same as `min`. Defaults to 100.
   * Examples: @100, @10
   */
  max?: number | string;
  /**
   * Increment the slider moves in. Formula-capable.
   * Slider only; defaults to 1. The text variants hardcode their step from the variant instead — 0.01 for `decimal`, 1 otherwise.
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
  type: "flowStep";
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
};

/** AI query with structured output. */
type AiQueryStepOptions = FlowStepBaseOptions & {
  variant: "aiQuery";
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
  variant: "aiChat";
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
  variant: "fetchData";
  /**
   * URL formula for data fetch.
   * URL to fetch. Formula-capable, so it can be built from earlier steps' values.
   * Examples: @'https://api.example.com/' + itemId
   */
  fetchUrl?: string;
};

/** Generates an image using AI with a configurable prompt. The prompt is a template formula — reference earlier flow step values to incorporate user input. */
type ImageGenerationStepOptions = FlowStepBaseOptions & {
  variant: "imageGeneration";
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
  variant: "audioGeneration";
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
  variant: "transcribe";
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
  variant: "publishData";
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
  variant: "script";
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

// All node types
type NodeOptions =
  | AppOptions
  | AppNodeOptions
  | ScreenOptions
  | SubsectionOptions
  | FormOptions
  | FlowOptions
  | ListOptions
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
  | FunctionOptions;

```

## Object Types (objectTypes section)

Object types define the data schema for your app. They live in the
top-level `objectTypes` array — a SIBLING of `appConfig`, never inside it.
Every node `dataType` and every foreign-key field `type` must match a
declared object type `name`. A field `type` is a builtin (`text`, `number`,
`boolean`, `temporal`, `variable`, `parentRef`, `image`, `imageUpload`), a
declared object type name, or a collection of either: `list<T>` / `map<T>`.
The framework stamps `id`, `createdAt`, `createdBy`, `updatedAt` and
`updatedBy` on every record — do not declare them as fields.

```typescript
/** One entry of the top-level `objectTypes` array — a sibling of `appConfig`, NOT inside it. Declares the data schema for one record type: its fields, an optional icon, and optionally the parent type its records belong to. Node `dataType` values and foreign-key field types must match a declared `name`. */
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
   * Cascade runs on both rails: the realtime rail removes children in the cloud function; the Storage rail tombstones them (`isDeleted: true`) when a script calls `deleteData` (a form's delete toggle does not cascade yet, #1999). Restoring a parent does not restore its children. This is ownership; a record tree's `parentRef` field is placement and never cascades.
   * Examples: {"type":"Game","idField":"gameId"}, {"type":"Post","idField":"postId"}
   */
  parent?: ParentRelation;
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
   * Deprecated — write `type: "list<T>"` instead. Still accepted as an alias so shipped configs keep working.
   * `true`: Deprecated alias for `type: "list<T>"`; still honoured so shipped configs keep working.
   * `false`: The field holds a single value (default).
   */
  isList?: boolean;
  /**
   * Deprecated — use `variant: "multiline"` on a text field instead.
   * `true`: Deprecated; write `variant: "multiline"` on the text field instead.
   * `false`: Single-line input (default).
   */
  multiline?: boolean;
  /**
   * Input variant for the field's editor: `basic`, `multiline` or `richText` for text fields.
   * Picks the input widget for a `text` field: `basic` (default), `multiline`, `richText` or `stringArray`. Ignored on every other field type.
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
