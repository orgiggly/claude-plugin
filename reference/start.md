## Start here: writing an Orgiggly app

An Orgiggly app is one JSON config: screens, the records they show and save, and who may see what. There is no code to deploy. This page is the minimum to write a first app that validates and works. The "Read next" table at the end says which other reference to read for each kind of node, so you only read what the app uses.

### The config: an envelope of seven keys

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "plugins": {},
  "objectInstances": {},
  "objectTypes": { "type": "folder", "name": "", "_children": [ /* objectType nodes */ ] },
  "appConfig": { "type": "app", "name": "myApp", "label": "My App", "authMode": "public", "_children": [ /* screens */ ] }
}
```

All seven are required. `versionId` and `users` are the two people forget.

### Nodes: a tree

Every node is `{ "type": "...", "name": "...", ...fields, "_children": [ ... ] }`.

- `name` is camelCase and unique among its siblings. Formulas refer to inputs and variables by name.
- `_children` order is render order.
- The app's direct children that are `screen`s are its top-level pages, in the nav. The first one is the home screen.
- Put screens that are not top-level (a detail page, a form) in a `folder` child of the app. They are reached by navigating to them by name.

### Show something: `content`

A `content` node renders HTML from `htmlTemplate`. Write it as `@` followed by a backtick template; inside, `${...}` is the only interpolation:

```json
{ "type": "content", "name": "hello", "htmlTemplate": "@`<h1>Hello ${$username}</h1>`" }
```

A bare `@name` inside the template is literal text, never a value. Escape anything people typed with `${escapeHtml(title)}`.

**Clicks are declared actions.** A `<button data-action="open">` runs the action called `open` in the node's `actions` field. An action is a `script`, and `navigate('screenName')` moves to another screen. Pass a record's id with `data-param-id="${id}"`, declare `"params": ["id"]`, and read it as `$params.id`. A real hyperlink is a plain `<a href="https://...">`. Do not write `rel=`, `setValue=`, `data-script` or `href="@pop"`; they are legacy.

### List records: a repeating `subsection`

```json
{
  "type": "subsection", "name": "notices", "isRepeating": true,
  "data": { "dataType": "Notice", "source": "storage", "sort": { "field": "createdAt", "direction": "desc" } },
  "_children": [
    { "type": "content", "name": "card", "htmlTemplate": "@`<strong>${escapeHtml(title)}</strong>`" }
  ]
}
```

It repeats its children once per record. Inside, each field of the record is a bare name (`title`), and `id` is the record's id. Filter with `"whereClause": "@this.status == 'open'"`. `$data.Notice` is every Notice record, for counts and look-ups (`count($data.Notice)`).

**`source: "storage"` is what an app's records use**: what people add is saved there, and it starts empty. `"source": "embedded"` reads the config's own `objectInstances`. The node examples in the types reference come from demo patterns that use `embedded`, so their bindings are not a model for records people save.

### Open one record: a detail screen

Navigate with the id, `navigate('noticeDetail', {id: $params.id})`. On that screen, resolve the record once in a `variable`, `{ "type": "variable", "name": "notice", "compute": "@byId('Notice', $args.id) || ({})" }`, and read `notice.title`. The `|| ({})` keeps the screen rendering before the data arrives.

### Declare the data: `objectTypes`

`objectTypes` is a folder of `objectType` nodes, each with a `name` (capitalised, what `dataType` names) and `fields`. A field is `{ "name": "...", "type": "..." }`, where the type is one of:

- `text` (add `"variant": "multiline"` for a long one);
- `number`, `boolean` or `temporal`;
- `image`;
- `list<text>`;
- another type's name, for a link to one of its records.

Don't declare `id`, `createdAt`, `createdBy`, `updatedAt` or `updatedBy`. Every saved record gets those.

### Save a record: inputs plus a script

Put the inputs on a `screen` inside a `flow`, followed by a `script` step that saves them. Then:

- Give the flow `"hideNav": true, "hideTopBar": true` so it looks like a plain page.
- Make your Save button's action `advanceFlow()`, which runs the script.
- In the script, `publishData({type: 'Notice', data: {title: newTitle, ...}})` creates a record, naming each input by its `name`.
- `updateData({type: 'Notice', id: $args.id, patch: {...}})` changes one record.

A flow's inputs start empty each time it opens. Mark inputs `"required": true` rather than checking them in the script. A `fileInput`'s value is an object, so save `photo.url`.

The inputs are `textInput`, `numberInput`, `booleanInput`, `selectInput`, `temporalInput` and `fileInput`. Read each one's types slice before using it.

### Two choices to make on purpose: access and whose records

**1. Who can view the app.** `"authMode": "public"` (the usual choice) lets anyone with the link see it; signing in is needed only to save. Hide the controls that save from visitors with `"hidden": "@$authKind == 'anon'"`, or test `$authKind` in a template. `"private"` shows signed-out visitors a sign-in card and nothing else; use it only when the app must be private.

**2. Whose records they are.**
- **Shared** is the default (no `scope`): everyone sees the same records, such as a club's notices or results.
- **Per-user** is `"data": { "dataType": "Visit", "source": "storage", "scope": "user" }` on the binding: each person sees and saves only their own. Gate its save controls on `$userKey == 'anon'`, not `$authKind`, because someone signed in without a username can't own records yet.

**Tell the user which you chose.** Shared records are not locked to their owner: hiding a button only hides it, so anyone signed in could change them. Say so before the app goes live.

### A complete small app

A public noticeboard. Signed-in members post notices, everyone reads them, and each notice opens on its own page. It passes the validator with no findings.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "plugins": {},
  "objectInstances": {},
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Notice",
        "icon": "campaign",
        "fields": [
          { "name": "title", "type": "text" },
          { "name": "body", "type": "text", "variant": "multiline" },
          { "name": "postedBy", "type": "text" }
        ]
      }
    ]
  },
  "appConfig": {
    "type": "app",
    "name": "noticeboard",
    "label": "Noticeboard",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Notices",
        "_children": [
          {
            "type": "content",
            "name": "intro",
            "htmlTemplate": "@`<h1>Club notices</h1>${$authKind == 'anon' ? '<p>Sign in to post a notice.</p>' : '<button data-action=\"post\">Post a notice</button>'}`",
            "actions": { "post": { "script": "navigate('postNotice')" } }
          },
          {
            "type": "subsection",
            "name": "notices",
            "isRepeating": true,
            "data": {
              "dataType": "Notice",
              "source": "storage",
              "sort": { "field": "createdAt", "direction": "desc" }
            },
            "_children": [
              {
                "type": "content",
                "name": "noticeCard",
                "htmlTemplate": "@`<div style=\"border:1px solid var(--og-border);border-radius:12px;padding:12px;margin-bottom:8px\"><strong>${escapeHtml(title)}</strong><div style=\"color:var(--og-muted)\">by ${escapeHtml(postedBy || 'a member')}</div><button data-action=\"open\" data-param-id=\"${id}\">Read</button></div>`",
                "actions": {
                  "open": { "params": ["id"], "script": "navigate('noticeDetail', {id: $params.id})" }
                }
              }
            ]
          }
        ]
      },
      {
        "type": "folder",
        "name": "pages",
        "_children": [
          {
            "type": "screen",
            "name": "noticeDetail",
            "label": "Notice",
            "_children": [
              { "type": "variable", "name": "notice", "compute": "@byId('Notice', $args.id) || ({})" },
              {
                "type": "content",
                "name": "noticeBody",
                "htmlTemplate": "@`<h1>${escapeHtml(notice.title || '')}</h1><p style=\"white-space:pre-wrap\">${escapeHtml(notice.body || '')}</p><button data-action=\"back\">Back</button>`",
                "actions": { "back": { "script": "back()" } }
              }
            ]
          },
          {
            "type": "screen",
            "name": "postNotice",
            "label": "Post a notice",
            "_children": [
              {
                "type": "flow",
                "name": "postNoticeFlow",
                "label": "Post a notice",
                "hideNav": true,
                "hideTopBar": true,
                "_children": [
                  {
                    "type": "screen",
                    "name": "noticeForm",
                    "label": "Post a notice",
                    "_children": [
                      { "type": "textInput", "name": "newTitle", "label": "Title", "required": true },
                      { "type": "textInput", "name": "newBody", "label": "Notice", "variant": "multiline", "required": true },
                      {
                        "type": "content",
                        "name": "formButtons",
                        "htmlTemplate": "@`<button data-action=\"save\">Post</button> <button data-action=\"cancel\">Cancel</button>`",
                        "actions": {
                          "save": { "script": "advanceFlow()" },
                          "cancel": { "script": "back()" }
                        }
                      }
                    ]
                  },
                  {
                    "type": "script",
                    "name": "saveNotice",
                    "script": "publishData({type: 'Notice', data: {title: newTitle, body: newBody, postedBy: $username || ''}}); navigate('home')"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### Before you call it done

- Every screen should work on first load with no records yet. Show an empty state ("No notices yet"), never a blank card or `NaN`.
- Every type people own needs a way to add a record.
- Validate, fix every critical finding, and look at the draft before publishing.

### Read next

The types reference comes in slices: name a node type (`screen`, `subsection`, `content`, `textInput`, `objectType`, …) to get its fields, examples and pitfalls. A slice holds a node's own fields only. The `base` slice has the fields every node shares: `label`, `hidden`, `actions`, `data`, `layout`, and the inputs' `required`/`validation`. Read `base` once, then the slice for each node type you write.

| When you need to | Read |
|---|---|
| any node type's fields | the types reference, sliced by node name, plus `base` once |
| a working pattern for a common screen (vote, rate, a per-user list) | `recipes`, one recipe by name |
| templates in depth: lists in a card, state, more click actions | `html` |
| filters, sorting, scopes, `$data`, the signed-in user | `data` |
| forms in depth: edit screens, prefill, validation | `forms` |
| layout: columns, cards, tabs | `containers` |
| formula functions and operators | `formula` |
| a node that validates but misbehaves | `pitfalls` |
| a multi-step wizard | `flows` |
| a live or multiplayer app | `realtime` |
