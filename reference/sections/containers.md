## Container Nodes

Container nodes structure the app's UI hierarchy.

- **app** — Root node. Contains all screens. Always the top-level node of `appConfig`.
- **screen** — A navigable page/view. Can contain subsections, content, inputs and flows.
- **folder** — Groups screens or other nodes. Use for component/detail screens. Write `type: "folder"` — not `type: "appNode"` with a `variant`.
- **tabGroup** / **tab** — A tab bar and its tabs: `type: "tabGroup"` whose `_children` are `type: "tab"` nodes.
- **subsection** — Groups content within a screen. Set `isRepeating: true` to display a list of items.

### Common Layout Patterns

- Single column: `{ maxColumns: 1, axis: "y", mode: "columns", minColumnWidth: 350 }`
- Two-column grid: `{ maxColumns: 2, axis: "x", mode: "columns", minColumnWidth: 200 }`
- Three-column cards: `{ maxColumns: 3, axis: "x", mode: "columns", minColumnWidth: 200 }`
- Tile gallery, as many as fit: `{ mode: "flow", axis: "x", minColumnWidth: 250 }` — no `maxColumns`; the browser packs columns of at least the min width and wraps to one on a phone. Prefer it over a capped `columns` layout whenever the count of cards should follow the screen width (an org list, a photo grid, a blog index); keep `columns` with `maxColumns` for a deliberate editorial layout.
