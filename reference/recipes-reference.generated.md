<!-- Auto-generated from src/prompts/recipes/. Do not edit manually. -->

# Recipes

Task-shaped, working config snippets. Each recipe is a complete minimal app that passes `og validate-org`. Copy the parts you need into your own config, renaming types and nodes to fit. `og reference recipes <name>` prints just one.

- `dates-and-rounding` — Dates and rounded numbers in templates
- `edit-record` — Edit a record with inputs, then save it
- `per-user-vs-shared` — Per-user vs shared data, and reading the current user
- `sign-in-gate` — Hide controls from signed-out visitors
- `template-buttons` — Buttons built inside a template formula

<!-- recipe: dates-and-rounding -->
## `dates-and-rounding` — Dates and rounded numbers in templates

Store a date as an ISO string (`"2026-09-14"`). To show it, parse it with `dateFrom` and
pass the result to `formatDate(date, format)`. The formats are `fullDate`, `weekdayShort`,
`weekdayLong`, `dayOfMonth`, `monthLong`, `monthShort`, `monthNumber`, `year` and
`monthYear`. `today()` is the current date. To stamp the current moment into a record
from a script, use `now()`, which gives a UTC ISO string. There is no number-formatting
function. To round to one decimal place, write `round(x * 10) / 10`. Use `floor` for
whole units, as the minutes:seconds pace here does, and `sumBy($data.Run, 'distanceKm')`
for a total. The rows are embedded so the recipe renders on its own. A real app usually
binds `"source": "storage"`.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": {
    "type": "app",
    "name": "runlog",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Runs",
        "_children": [
          {
            "type": "content",
            "name": "totals",
            "htmlTemplate": "@`<h2 style=\"margin: 0 0 4px;\">${round(sumBy($data.Run, 'distanceKm') * 10) / 10} km in total</h2><p style=\"margin: 0 0 16px; color: #64748b;\">Today is ${formatDate(today(), 'fullDate')}</p>`"
          },
          {
            "type": "subsection",
            "name": "runs",
            "isRepeating": true,
            "data": {
              "dataType": "Run",
              "source": "embedded",
              "sort": { "field": "date", "direction": "desc" }
            },
            "_children": [
              {
                "type": "content",
                "name": "runRow",
                "htmlTemplate": "@`<div style=\"padding: 8px 0; border-bottom: 1px solid #e2e8f0;\"><b>${formatDate(dateFrom(date), 'weekdayShort')} ${formatDate(dateFrom(date), 'dayOfMonth')} ${formatDate(dateFrom(date), 'monthShort')}</b> · ${round(distanceKm * 10) / 10} km · ${floor(minutes / distanceKm)}:${round((minutes / distanceKm - floor(minutes / distanceKm)) * 60) < 10 ? '0' : ''}${round((minutes / distanceKm - floor(minutes / distanceKm)) * 60)} per km</div>`"
              }
            ]
          }
        ]
      }
    ]
  },
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Run",
        "icon": "directions_run",
        "fields": [
          { "name": "date", "type": "text" },
          { "name": "distanceKm", "type": "number" },
          { "name": "minutes", "type": "number" }
        ]
      }
    ]
  },
  "objectInstances": {
    "type": "folder",
    "name": "",
    "_children": [
      { "id": "run-1", "type": "Run", "date": "2026-09-14", "distanceKm": 10.37, "minutes": 52.5 },
      { "id": "run-2", "type": "Run", "date": "2026-09-17", "distanceKm": 5.04, "minutes": 27.2 }
    ]
  },
  "plugins": {}
}
```
<!-- /recipe: dates-and-rounding -->

<!-- recipe: edit-record -->
## `edit-record` — Edit a record with inputs, then save it

An `<input>` inside a content template writes to **that content node's own value**, not
to a record field. So give each editable field its own content node: seed it from the
record with `compute`, put one input in its template, and read it back by the node's
name. A third content node's `save` action then patches the record with
`updateData({type, id, patch})`, which merges the patch over the stored record and writes
it to the same scope it was read from. Pass the record's `id` into the edit screen with
`navigate('editVisit', {id})` and resolve it once with `byId('Visit', $args.id)`.
Guard that with `|| ({})` so the screen still renders before the data arrives.
Use `publishData` instead of `updateData` to create a new record.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": {
    "type": "app",
    "name": "visits",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Visits",
        "_children": [
          {
            "type": "subsection",
            "name": "visitList",
            "isRepeating": true,
            "data": { "dataType": "Visit", "source": "storage" },
            "_children": [
              {
                "type": "content",
                "name": "visitRow",
                "htmlTemplate": "@`<button data-action=\"edit\" data-param-id=\"${id}\" style=\"display: block; width: 100%; text-align: left; padding: 12px 16px; margin-bottom: 8px; background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; font: inherit; cursor: pointer;\"><b>${country}</b> — ${visitedOn || 'no date yet'}<div style=\"color: #64748b;\">${note || ''}</div></button>`",
                "actions": {
                  "edit": {
                    "params": ["id"],
                    "script": "navigate('editVisit', {id: $params.id})"
                  }
                }
              }
            ]
          }
        ]
      },
      {
        "type": "screen",
        "name": "editVisit",
        "label": "Edit visit",
        "_children": [
          {
            "type": "variable",
            "name": "visit",
            "compute": "@byId('Visit', $args.id) || ({})"
          },
          {
            "type": "content",
            "name": "visitDate",
            "compute": "@visit.visitedOn || ''",
            "htmlTemplate": "@`<label style=\"display: block; margin-bottom: 12px;\">Date visited<br><input type=\"date\" value=\"${visitDate}\" style=\"font: inherit; padding: 8px;\"></label>`"
          },
          {
            "type": "content",
            "name": "visitNote",
            "compute": "@visit.note || ''",
            "htmlTemplate": "@`<label style=\"display: block; margin-bottom: 12px;\">Note<br><textarea rows=\"3\" style=\"font: inherit; padding: 8px; width: 100%; box-sizing: border-box;\">${visitNote}</textarea></label>`"
          },
          {
            "type": "content",
            "name": "saveBar",
            "htmlTemplate": "@`<div style=\"display: flex; gap: 8px;\"><button data-action=\"save\" style=\"padding: 10px 20px; background: #0e7490; color: #fff; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Save</button><button data-action=\"cancel\" style=\"padding: 10px 20px; background: #e2e8f0; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Cancel</button></div>`",
            "actions": {
              "save": {
                "script": "updateData({type: 'Visit', id: visit.id, patch: {visitedOn: visitDate, note: visitNote}}); back()"
              },
              "cancel": { "script": "back()" }
            }
          }
        ]
      }
    ]
  },
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Visit",
        "icon": "public",
        "fields": [
          { "name": "country", "type": "text" },
          { "name": "visitedOn", "type": "text" },
          { "name": "note", "type": "text", "variant": "multiline" }
        ]
      }
    ]
  },
  "objectInstances": {},
  "plugins": {}
}
```
<!-- /recipe: edit-record -->

<!-- recipe: per-user-vs-shared -->
## `per-user-vs-shared` — Per-user vs shared data, and reading the current user

Scope lives on the data binding. A binding with `"scope": "user"` shows each signed-in
person only their own records, and the write that adds to it must say the same:
`publishData({type: 'Wish', scope: 'user', data: {…}})`. Leave `scope` out for shared
data that everyone sees. Storage data loads app-wide for any type that some node binds.
If nothing on screen should list the records, bind the type from a hidden repeating
subsection (`"hidden": "@true"`) so `$data` and `byId` can still read it.

The signed-in person is read through `$userKey`, `$username`, `$email` and `$authKind`.
All four read `"anon"` (or nothing) for a signed-out visitor, so guard them as this
recipe does. `$userKey` also makes a good id for the one record per person, as in
`byId('Profile', $userKey)`.

Shared data is not yet locked to its owner. Anyone who goes around the buttons can
change it, so say so before publishing an app where one person keeps the shared
records.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": {
    "type": "app",
    "name": "wishlist",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Wishlist",
        "_children": [
          {
            "type": "content",
            "name": "whoAmI",
            "htmlTemplate": "@`<p style=\"color: #64748b;\">${$userKey != null && $userKey != 'anon' ? 'Signed in as ' + $username + ' — your list below is yours alone.' : 'Sign in (top right) to keep your own list.'}</p>`"
          },
          {
            "type": "subsection",
            "name": "myWishes",
            "label": "My wishes",
            "isRepeating": true,
            "hidden": "@$userKey == 'anon'",
            "data": { "dataType": "Wish", "source": "storage", "scope": "user" },
            "_children": [
              {
                "type": "content",
                "name": "wishRow",
                "htmlTemplate": "@`<div style=\"padding: 8px 0; border-bottom: 1px solid #e2e8f0;\">${title}</div>`"
              }
            ]
          },
          {
            "type": "content",
            "name": "newWish",
            "compute": "@''",
            "hidden": "@$userKey == 'anon'",
            "htmlTemplate": "@`<div style=\"display: flex; gap: 8px; margin: 12px 0 24px;\"><input value=\"${newWish}\" placeholder=\"Something you'd like\" style=\"flex: 1; font: inherit; padding: 8px;\"><button data-action=\"add\" style=\"padding: 8px 16px; background: #0e7490; color: #fff; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Add</button></div>`",
            "actions": {
              "add": {
                "script": "publishData({type: 'Wish', scope: 'user', data: {title: newWish}}); setValue('')"
              }
            }
          },
          {
            "type": "subsection",
            "name": "giftIdeas",
            "label": "Gift ideas from everyone",
            "isRepeating": true,
            "data": {
              "dataType": "Idea",
              "source": "storage",
              "sort": { "field": "createdAt", "direction": "desc" }
            },
            "_children": [
              {
                "type": "content",
                "name": "ideaRow",
                "htmlTemplate": "@`<div style=\"padding: 8px 0; border-bottom: 1px solid #e2e8f0;\">${title}</div>`"
              }
            ]
          }
        ]
      }
    ]
  },
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Wish",
        "icon": "star",
        "fields": [{ "name": "title", "type": "text" }]
      },
      {
        "type": "objectType",
        "name": "Idea",
        "icon": "lightbulb",
        "fields": [{ "name": "title", "type": "text" }]
      }
    ]
  },
  "objectInstances": {},
  "plugins": {}
}
```
<!-- /recipe: per-user-vs-shared -->

<!-- recipe: sign-in-gate -->
## `sign-in-gate` — Hide controls from signed-out visitors

With `"authMode": "public"` anyone with the link sees the app, and the header shows them a
sign-in button. Put `"hidden": "@$authKind == 'anon'"` on every control that saves
something, and show a short hint in its place (`"hidden": "@$authKind != 'anon'"`).
A control that saves **per-user** records gates on `"@$userKey == 'anon'"` instead.
Someone signed in with Google who hasn't picked a username yet is signed in, but can't
own records yet.

`hidden` only hides a control; the server doesn't check it. For shared data that one
person curates, warn that anyone could still change it until owner-only writes ship.
`"authMode": "private"` does not fix this. It only hides the whole app behind a sign-in
card.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": {
    "type": "app",
    "name": "clubresults",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Results",
        "_children": [
          {
            "type": "subsection",
            "name": "results",
            "isRepeating": true,
            "data": {
              "dataType": "Result",
              "source": "storage",
              "sort": { "field": "createdAt", "direction": "desc" }
            },
            "_children": [
              {
                "type": "content",
                "name": "resultRow",
                "htmlTemplate": "@`<div style=\"padding: 8px 0; border-bottom: 1px solid #e2e8f0;\"><b>${runner}</b> — ${time}</div>`"
              }
            ]
          },
          {
            "type": "content",
            "name": "signInHint",
            "hidden": "@$authKind != 'anon'",
            "htmlTemplate": "@`<p style=\"color: #64748b;\">Sign in (top right) to add a result.</p>`"
          },
          {
            "type": "content",
            "name": "newRunner",
            "compute": "@''",
            "hidden": "@$authKind == 'anon'",
            "htmlTemplate": "@`<input value=\"${newRunner}\" placeholder=\"Runner\" style=\"font: inherit; padding: 8px; margin: 12px 8px 0 0;\">`"
          },
          {
            "type": "content",
            "name": "newTime",
            "compute": "@''",
            "hidden": "@$authKind == 'anon'",
            "htmlTemplate": "@`<input value=\"${newTime}\" placeholder=\"Time (mm:ss)\" style=\"font: inherit; padding: 8px; margin: 12px 8px 0 0;\">`"
          },
          {
            "type": "content",
            "name": "addResult",
            "hidden": "@$authKind == 'anon'",
            "htmlTemplate": "@`<button data-action=\"add\" style=\"margin-top: 12px; padding: 8px 16px; background: #0e7490; color: #fff; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Add result</button>`",
            "actions": {
              "add": {
                "script": "publishData({type: 'Result', data: {runner: newRunner, time: newTime}}); setValues({newRunner: '', newTime: ''})"
              }
            }
          }
        ]
      }
    ]
  },
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Result",
        "icon": "emoji_events",
        "fields": [
          { "name": "runner", "type": "text" },
          { "name": "time", "type": "text" }
        ]
      }
    ]
  },
  "objectInstances": {},
  "plugins": {}
}
```
<!-- /recipe: sign-in-gate -->

<!-- recipe: template-buttons -->
## `template-buttons` — Buttons built inside a template formula

You can generate one button per record inside a single content template by mapping over
`$data`: `${join(map($data.Country, (c) => …), '')}`. Each button names a declared
action with `data-action` and passes its value as a `data-param-<name>` attribute. The
action declares the same name in `params` and reads it as `$params.<name>`. Write the
inner markup as a nested backtick template. Quoted strings also work, but backticks
keep `${…}` interpolation available inside. A ternary inside the map picks which button
a row gets, and the validator counts both branches as uses of their actions.

This recipe keeps one record per person (`id: $userKey`, `scope: 'user'`) and rewrites
it on every tap. The hidden `tripSync` subsection makes the app load `Trip` even though
nothing lists it.

```json
{
  "versionId": "v1",
  "apiVersion": "0.1",
  "users": {},
  "appConfig": {
    "type": "app",
    "name": "visited",
    "authMode": "public",
    "_children": [
      {
        "type": "screen",
        "name": "home",
        "label": "Countries",
        "_children": [
          {
            "type": "subsection",
            "name": "tripSync",
            "isRepeating": true,
            "hidden": "@true",
            "data": { "dataType": "Trip", "source": "storage", "scope": "user" },
            "_children": [
              { "type": "content", "name": "tripSyncRow", "htmlTemplate": "@``" }
            ]
          },
          {
            "type": "variable",
            "name": "visited",
            "compute": "@(byId('Trip', $userKey) || ({})).codes || []"
          },
          {
            "type": "content",
            "name": "countryChips",
            "hidden": "@$userKey == 'anon'",
            "htmlTemplate": "@`<p>${length(visited)} of ${length($data.Country)} visited</p><div style=\"display: flex; flex-wrap: wrap; gap: 8px;\">${join(map($data.Country, (c) => visited.includes(c.code) ? `<button data-action=\"unvisit\" data-param-code=\"${c.code}\" style=\"padding: 6px 12px; border-radius: 999px; border: 1px solid #0e7490; background: #0e7490; color: #fff; font: inherit; cursor: pointer;\">✓ ${c.name}</button>` : `<button data-action=\"visit\" data-param-code=\"${c.code}\" style=\"padding: 6px 12px; border-radius: 999px; border: 1px solid #0e7490; background: #fff; color: #0e7490; font: inherit; cursor: pointer;\">${c.name}</button>`), '')}</div>`",
            "actions": {
              "visit": {
                "params": ["code"],
                "script": "publishData({type: 'Trip', scope: 'user', data: {id: $userKey, codes: [...visited, $params.code]}})"
              },
              "unvisit": {
                "params": ["code"],
                "script": "publishData({type: 'Trip', scope: 'user', data: {id: $userKey, codes: filter(visited, (c) => c != $params.code)}})"
              }
            }
          }
        ]
      }
    ]
  },
  "objectTypes": {
    "type": "folder",
    "name": "",
    "_children": [
      {
        "type": "objectType",
        "name": "Country",
        "icon": "public",
        "fields": [
          { "name": "code", "type": "text" },
          { "name": "name", "type": "text" }
        ]
      },
      {
        "type": "objectType",
        "name": "Trip",
        "icon": "flight",
        "fields": [{ "name": "codes", "type": "list<text>" }]
      }
    ]
  },
  "objectInstances": {
    "type": "folder",
    "name": "",
    "_children": [
      { "id": "country-fr", "type": "Country", "code": "FR", "name": "France" },
      { "id": "country-jp", "type": "Country", "code": "JP", "name": "Japan" },
      { "id": "country-pe", "type": "Country", "code": "PE", "name": "Peru" }
    ]
  },
  "plugins": {}
}
```
<!-- /recipe: template-buttons -->
