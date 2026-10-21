> **In the plugin there is no `search_videos` tool.** Wherever this (or `og reference html`) says to use it, run `og search-videos <query>` once per video you need and use the `embedUrl` it prints. Each search costs 1 credit.

## Videos

When the org would benefit from embedded video content (tutorials, demos, walkthroughs, educational content), use the `search_videos` tool to find real, embeddable video URLs. **Never fabricate video URLs or embed codes** — use verified URLs from search results.

### How to use `search_videos`

1. Plan all your video searches before generating the org JSON
2. Call `search_videos` once with all queries in a single batch (max 5 queries)
3. Write specific, descriptive queries (e.g., "yoga sun salutation tutorial for beginners" not just "yoga")
4. Results include `embedUrl` — use this directly in an `<iframe>` within an HTML template

### Embedding videos

Use the `embedUrl` from search results in an HTML template `<iframe>`:

```json
{
  "type": "content",
  "htmlTemplate": "@`<iframe src=\"${videoUrl}\" width=\"100%\" height=\"400\" frameborder=\"0\" allowfullscreen></iframe>`"
}
```

Store the `embedUrl` as a variable value (e.g., in a data field or directly in the template) and reference it with `${...}`. The embed URL is ready to use — no transformation needed.

### When to use it

- Generating orgs about instructional topics (cooking, fitness, coding, crafts, music)
- When the content benefits from video demonstrations rather than just text/images
- When the user's prompt implies multimedia content (e.g., "tutorial site", "learning platform")

### When NOT to use it

- For generic/abstract app structures where video isn't natural (e.g., "a CRM", "a todo app")
- When the user only asks for text or image content
- When embedding video would clutter a simple interface

### Cost

Each query costs 1 credit. Be strategic — 5 well-crafted queries are better than 5 vague ones.

### If `search_videos` is not available

If the tool is not offered in the tools list, omit video embeds from the org. Do not fabricate video URLs or embed codes.
