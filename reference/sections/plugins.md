## Plugins

Plugins are reusable HTML components defined in the `plugins` section and referenced by name in `appConfig`.

### Defining a Plugin

```json
{
  "plugins": {
    "id": "plugins-folder",
    "type": "folder",
    "_children": [
      {
        "id": "plugin-1",
        "type": "plugin",
        "name": "CardLink",
        "icon": "link",
        "parameters": [
          { "name": "link", "type": "text", "description": "Target screen name" },
          { "name": "title", "type": "text", "description": "Card title" },
          { "name": "icon", "type": "text", "description": "Emoji or icon" }
        ],
        "htmlTemplate": "@`<a href=\"${link}\" style=\"display: flex; flex-direction: column; align-items: center; padding: 24px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-decoration: none; color: #333;\">\n  <span style=\"font-size: 32px; margin-bottom: 8px;\">${icon}</span>\n  <span style=\"font-weight: 600; font-family: system-ui;\">${title}</span>\n</a>`"
      }
    ]
  }
}
```

### Using a Plugin in appConfig

Reference the plugin's `name` as the node's `type`:

```json
{
  "id": "CardLink-1",
  "type": "CardLink",
  "name": "menuCard",
  "parameters": {
    "link": "@screen",
    "title": "@title",
    "icon": "@icon"
  }
}
```

### Pre-built Plugin Templates

When generating apps, prefer reusing these standard plugins:

**CardLink** — Navigation card linking to a screen. Parameters: `link` (screen name), `title`, `icon` (emoji).

**ItemCard** — Displays object fields in a card layout with optional edit link. Parameters: `title`, `subtitle`, `editLink` (screen name).

Define these in the `plugins` section and reference them in repeating subsections to keep HTML generation consistent and minimal.
