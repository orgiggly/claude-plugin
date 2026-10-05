## Forms

Forms are data entry containers that auto-generate input fields from an object type.

**Every object type should have a form somewhere in the app for creating new instances.** If your app defines `Recipe` as an object type, include a screen with a `form` node bound to `formConfig.dataType: "Recipe"` so users can add recipes. A read-only app whose data only exists as static seed values is almost always wrong — the user should be able to add their own.

### Form Node

```json
{
  "id": "form-1",
  "type": "form",
  "name": "taskForm",
  "label": "Task Form",
  "formConfig": {
    "dataType": "Task"
  }
}
```

The `formConfig.dataType` must match an object type name exactly. The form automatically generates input fields for each field in the object type.

### Form with Submit Button

Place a form inside a screen, then add a content node whose buttons invoke declared actions. `submit()` is a host function available inside an action's script; because a failing script aborts the action's navigation, "save then close" is a single action that leaves the user on the form if the save fails:

```json
{
  "type": "screen",
  "name": "editTask",
  "_children": [
    {
      "type": "form",
      "name": "taskForm",
      "formConfig": { "dataType": "Task" }
    },
    {
      "type": "content",
      "name": "actions",
      "htmlTemplate": "@`<div style=\"display: flex; gap: 12px; margin-top: 16px;\">\n  <button data-action=\"save\" style=\"padding: 12px 24px; background: #3b82f6; color: white; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Save</button>\n  <button data-action=\"cancel\" style=\"padding: 12px 24px; background: #e2e8f0; color: #333; border: none; border-radius: 8px; font: inherit; cursor: pointer;\">Cancel</button>\n</div>`",
      "actions": {
        "save": { "script": "submit(); back()" },
        "cancel": { "script": "back()" }
      }
    }
  ]
}
```

