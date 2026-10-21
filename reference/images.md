> **In the plugin there is no `search_images` tool.** Wherever this says to call it, run `og search-images <query>` once per image you need (`--source brave` for the paid web-wide search), and use the URLs it prints. Never fall back to placeholder URLs. When you use an Unsplash photo, credit the photographer as the output shows and run the `og search-images --track <url>` line printed with it. The user's own photos go up with `og upload` instead.

## Images

When the org needs images (galleries, cards, headers, avatars, etc.), use the `search_images` tool to find real, verified image URLs. **Never fabricate or guess image URLs** — hallucinated URLs are often broken or show unrelated content.

### How to use `search_images`

1. Plan all the images you need before generating the org JSON
2. Call `search_images` once with all queries in a single batch
3. Use descriptive search queries (e.g., "cute tabby cat lying on blanket" not just "cat")
4. You can combine `search_images` with `request_examples` in the same response

### Provider choice

- **unsplash** (default) — Free, high-quality stock photos. Best for: people, nature, food, architecture, lifestyle, general imagery.
- **brave** — Web-wide image search, costs 1 credit per query. Best for: specific brands, logos, niche topics, anything Unsplash is unlikely to have. Only use when Unsplash won't suffice.

Omit `source` to default to Unsplash. Set `source: "brave"` only when needed.

### If `search_images` is not available

If the tool is not offered in the tools list, use generic placeholder URLs like `https://placehold.co/400x300?text=Image` instead. Never fabricate Unsplash photo IDs or guess URLs from other services.
