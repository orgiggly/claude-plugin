# Widgets: your own interactive components

A **widget** is one self-contained web page (`index.html`) that an app shows inside
a locked-down frame. You write it, deploy it with `og widget deploy`, and point an
app's plugin at it. It's how an app gets things a content template can't do: a map
you can pan and zoom, a drawing canvas, a game, a quiz that remembers where you are.

## Widget or content template?

Use a **widget** when the thing needs any of:

- **state across interactions**: a game in progress, a drawing, a half-done quiz;
- **pointer gestures**: pan, zoom, pinch, drag;
- **a canvas, WebGL or animation** driven by script;
- **to update in place** when the data changes: the app re-sends the params and the
  widget redraws, with no reload and no lost state;
- **to send something back**: a value the app stores (`postValue`) or an app action
  it runs (`runAction`).

Markup with light interactivity (cards, lists, tables, badges, simple charts,
buttons that run an action) stays a **content template**. A widget costs a deploy
and a sandbox; a template costs neither. Never fake a widget with tens of KB of
inline SVG or data in a template: it bloats the config, re-renders on every data
change, and still can't zoom or pan.

## How it fits together

1. The page lives at `widgets/<name>/index.html` in your project.
2. `og widget deploy <name>` uploads it to your own widget folder (only you can
   write there) and prints a **plugin block**.
3. That plugin goes in the app's `plugins`; a node whose `type` is the plugin's name
   shows the widget, and its `parameters` are what the widget receives.
4. In the app, the page runs in an `<iframe sandbox="allow-scripts">` and talks to
   the app only through the **bridge**: `postMessage` messages wrapped by the small
   `OrgigglyWidget` script.

## Writing the page

Load the bridge with exactly this tag, and copy `widget-bridge.js` next to the page
while you test. `og widget deploy` replaces the tag with the bridge's code, so the
page you test is the page you deploy:

```html
<script src="widget-bridge.js"></script>
```

The bridge API (all on the global `OrgigglyWidget`):

| Call | What it does |
|---|---|
| `connectWidget((params) => { … })` | Tells the app the widget is ready. The callback gets the params, and is called **again every time they change**. Returns a channel with the calls below. |
| `channel.postValue(value)` | Stores a JSON value as the widget node's value. The app reads it as `@<node name>`. |
| `channel.runAction(name, params)` | Runs the action `name` declared on the widget node (`actions`), passing only the params that action lists. |
| `channel.postImage(dataUrl)` | Uploads an image (e.g. `canvas.toDataURL()`); the node's value becomes `{ url, ext }`. |
| `channel.setFullscreen(on)` | Asks the app to make the widget fill the screen, or go back. |
| `OrgigglyWidget.onCommand(name, (args) => …)` | Handles `sendToWidget(<node name>, name, args)` from an app script. |

The frame resizes to the page's height on its own; keep `body` auto-height.

### Rules that bite

- **Build the page at load, not inside the `connectWidget` callback.** Params can
  arrive late, and anything started at load (timers, resize listeners) must not
  depend on them. Paint a default, then let params refresh it.
- **The callback runs again on every param change.** Re-render from the params; don't
  reset state the user built up, and don't restart work that's already running.
- **No `localStorage`, `sessionStorage`, cookies or IndexedDB.** The frame has no
  origin of its own, so they throw. Keep state in memory, and send anything that must
  survive a reload back with `postValue`, then read it back as a param.
- **External files:** `<script src>` and images load from any CDN. `fetch()` needs
  the server to allow any origin (`Access-Control-Allow-Origin: *`), as jsdelivr,
  unpkg and cdnjs do.
- **Under 2 MB** after the bridge is inlined. Load big data or libraries from a CDN.
- **No embedded players or signed-in services.** A user widget always gets the
  strictest sandbox: YouTube or Spotify players, and the viewer's connected
  accounts, are not available inside it. Use the app's own video and embed nodes.

The plugin ships a starter page, `reference/examples/widget-hello.html`: params in,
a value out, and an action.

## The plugin and the node

`og widget deploy` prints the plugin; add a parameter for each param the page reads:

```json
{
  "type": "plugin",
  "name": "tapcounter",
  "runtime": "sandboxed",
  "widgetOwner": "<your uid, as printed>",
  "htmlTemplate": "",
  "parameters": [
    { "name": "name", "type": "text", "description": "Who to greet" },
    { "name": "start", "type": "number", "description": "Starting count" }
  ]
}
```

- `name` must stay the deployed widget's name: it's how the app finds the page.
- `runtime: "sandboxed"` and `htmlTemplate: ""` are both required.
- Set the app's top-level `"minClientVersion": 5` (or higher). An older app would
  otherwise ignore `widgetOwner`.
- `embedsThirdPartyMedia` and `connections` are first-party only; the validator
  rejects them on a plugin with `widgetOwner`.

Use it like any plugin. Each parameter value is a formula, and `actions` declares
what `runAction` may call:

```json
{
  "type": "tapcounter",
  "name": "counter",
  "parameters": { "name": "@$username", "start": "@0" },
  "actions": {
    "finished": {
      "params": ["count"],
      "script": "setAppValue('lastCount', $params.count); navigate('results')"
    }
  }
}
```

Elsewhere in the app, `@counter` is whatever the widget last sent with `postValue`.

## Testing locally

The deployed app shows one data state, behind a draft and a cache, so review the
widget locally first:

1. Put `index.html`, `widget-bridge.js` and `widget-harness.html` in the widget's
   folder. The plugin ships the last two as `reference/widget-bridge.js` and
   `reference/examples/widget-harness.html`.
2. Serve the folder: `npx --yes serve .` or `python3 -m http.server`. Opening the
   file directly (`file://`) doesn't work.
3. Open `widget-harness.html`. It frames the page as the app does, sends each
   scenario's params at 330, 414 and 900 px wide, logs every value, action and image
   the widget sends, and has **Reload widget** and **Re-send init** buttons.

Edit the harness's `SCENARIOS` to match the widget: the shapes that break layout
(empty, one item, very many, very long text) plus one worst case with everything on
at once. When the user is fine-tuning a layout, add controls that re-send `init`
with the values they're adjusting, and a "Copy settings" button whose output they
paste back to you, so you can bake the values in as defaults. If the harness says
**reduced motion is ON**, a widget that respects it won't animate; that isn't a bug.

## Deploying

```bash
og widget deploy <name>                 # reads ./widgets/<name>/index.html
og widget deploy <name> --file page.html
og widget delete <name>
```

Names are lower-case letters and digits, starting with a letter, at most 40
characters: no `-`, because the app calls the plugin by name like a function. A redeploy
shows up on the app's next plain reload. You need to be signed in (`og login`) on an
enrolled account (`og redeem`). Deleting a widget leaves any plugin that names it
showing an empty frame, so remove the plugin too.
