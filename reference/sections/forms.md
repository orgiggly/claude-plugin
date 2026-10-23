## Forms

A form is inputs (`textInput`, `numberInput`, `booleanInput`, `selectInput`, `temporalInput`, `fileInput`) plus a script that saves them. There is one way to write a record: the script calls `publishData` to create it or `updateData` to change it, naming each input. The `save-record` example shows both.

**Every user-owned object type still needs a way to add a record.** If your app defines `Recipe`, give users a screen where they add one. For user-owned data (recipes, tasks, bookings, sightings), a read-only app whose data only exists as static seed values is almost always wrong. The user should be able to add their own.

**Content the app's owner writes for its visitors is different**: lessons and quiz questions in a tutor, articles in a guide, dishes on a menu. A learner never writes the lessons. Keep those add screens off the home menu and out of the learner's path. Put them on a "Manage content" screen reached from a small link at the foot of the home screen, or leave them out. The home menu holds what the visitor does: learn, practise, play, browse.

### Where the inputs go

- **In a flow.** Put the inputs on a flow's `screen` step and save them in a `script` step after it. For a one-page form, set `hideNav: true` and `hideTopBar: true` on the flow so it looks like a plain screen, and give your own Save button the script `advanceFlow()`. A flow's inputs start empty every time it is opened, which is what "New recipe" and "Edit this recipe" both need.
- **On a plain screen**, only for one fixed record (the user's profile, the app's settings). A plain screen's inputs keep whatever was typed last, so an editor opened for record B would still show record A's typing. Save it with a declared content action: `"actions": { "save": { "script": "updateData({…}); back()" } }`.

### Saving is a script

```json
{
  "type": "script",
  "name": "createRecipe",
  "label": "Save",
  "script": "publishData({type: \"Recipe\", data: {name: newName, method: newMethod || \"\", pic: newPic.url || \"\"}});\nnavigate(\"recipeBook\")"
}
```

- Name every field in `data` from an input, by the input's `name`. Give optional ones a fallback (`|| ""`) so an untouched input writes an empty string, not nothing.
- A `fileInput`'s value is an object: save `pic.url`, never `pic`.
- To edit, call `updateData({type: "Recipe", id: $args.id, patch: {…}})`. It merges the patch over the stored record.
- A failing script stops before its navigation, so the user stays on the form with their typing intact.

### Prefill an edit

Open the editor with the record's id: `navigate('editRecipe', {id: $params.id})` from a row's Edit button. On the editor, resolve the record once in a `variable`, `"compute": "@byId('Recipe', $args.id) || ({})"`, and prefill each input from it with `"compute": "@rec.name"`. The `|| ({})` keeps the screen rendering before the data arrives.

### Required fields

Mark an input `"required": true`, or give it a `validation` rule. A flow's Next and Finish, and `advanceFlow()`, refuse to move on while a visible required input is empty, and the field turns red. Don't re-check it in the script.

### Shape a type so a person can fill it in

Each field gets its own input, and nobody can type a `list<T>` into one box. Store a multiple-choice question's options as separate text fields (`choiceA`, `choiceB`, `choiceC`, `choiceD`) and the right answer as its letter (`correct: "B"`). Never use a `|`-separated string or a zero-based index that someone has to count. A template gathers the choices with `[choiceA, choiceB, choiceC, choiceD]`.

### Legacy

Older orgs contain a `form` node (with `formConfig.dataType`), a `submitObjectType` on a container, and scripts calling `submit()`. These are legacy: recognise them when you read an org, never write them. Use inputs and a `publishData` / `updateData` script instead.
