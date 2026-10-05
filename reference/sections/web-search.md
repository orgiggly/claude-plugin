## Web Search

When the org needs accurate, real-world information (e.g., specific locations, historical facts, technical details, lists of items), use the `search_web` tool to look up current information. **Don't rely solely on your training data** when the org's quality depends on factual accuracy.

### How to use `search_web`

1. Plan all your searches before generating the org JSON
2. Call `search_web` once with all queries in a single batch (max 5 queries)
3. Write specific, targeted queries (e.g., "top 10 hiking trails in Yosemite National Park" not just "hiking")
4. Use the information from results to create accurate, detailed content — but do not link to external URLs in the org

### When to use it

- Generating orgs about specific real-world topics (places, recipes, species, historical events, etc.)
- When factual accuracy matters more than generic placeholder content
- When the user's prompt references specific domains you may not have detailed knowledge about

### When NOT to use it

- For generic/abstract app structures (e.g., "a todo app", "a CRM") where training data is sufficient
- When the user provides all the content details in their prompt

### Cost

Each query costs 1 credit. Be strategic — 5 well-crafted queries are better than 5 vague ones.

### If `search_web` is not available

If the tool is not offered in the tools list, use your training data to create the best content you can. Note in the org summary if web search would have improved accuracy.
