# Adding (or updating) a business

Business listings live in `src/content/businesses/` as Markdown files with frontmatter.

If you’re just getting started, this is the easiest way to contribute.

## Create a new business entry

1. Create a new file at `src/content/businesses/<slug>.md`
2. Use `kebab-case` for the filename (example: `moon-palace-books.md`)
3. Add frontmatter (see below)

## (Recommended) Add a business via CLI

This repo includes an interactive script that looks up a business via Google Places and creates the markdown entry for you.

1. Ensure you have a `.env` with `GOOGLE_PLACES_API_KEY` (see `.env.example`)
2. Run:

```bash
npm run add-business -- "Bang Brewing st paul" --justification "Short, factual justification of how this business supports the community."
```

- If **1 result** is returned, it auto-creates the file.
- If **2–5 results** are returned, it prompts you to select one.
- If **>5 results** are returned, it asks you to refine your search.

## Frontmatter fields

The schema is enforced at build time in `src/content/config.ts`. Valid categories are defined in `src/utils/categories.ts`.

Example:

```markdown
---
displayName: "Business Name"
category: "Food/Drink"
address: "123 Example St, Minneapolis, MN 55401, USA"
city: "Minneapolis"
state: "MN"
postalCode: "55401"
justification: "Short, factual justification of how this business supports the community."
websiteUrl: "https://example.com"
googleMapsUrl: "https://maps.app.goo.gl/..."
phone: "(612) 555-1234"
location:
  latitude: 44.9778
  longitude: -93.2650
websiteImageUrl: "https://.../photo.jpg"
---
```

### Required fields

- `displayName`
- `category`
- `justification`

### Links (required rule)

At least one of these must be present:

- `websiteUrl`
- `googleMapsUrl`

### Optional fields

- `address`
- `city`
- `state`
- `postalCode`
- `phone`
- `location` (lat/long object)
- `websiteImageUrl` (separate from `image`; typically used when sourced from Places)
- `placesId`, `placesName`, `primaryType`, `types` (Places metadata)

## Writing good justifications (important)

- **Keep it short**: 1–3 sentences is ideal
- **Keep it factual**: avoid rumors or personal attacks
- **Be specific**: what did they do, and for whom?
- **When in doubt, link**: if something is hard to summarize neutrally, include a relevant public link and keep wording simple

## Common reasons a build fails

- Category isn’t one of the values in `src/utils/categories.ts`
- Missing one of: `displayName`, `category`, `justification`
- Missing both `websiteUrl` and `googleMapsUrl`
- Invalid URL format in `websiteUrl`, `googleMapsUrl`, or `websiteImageUrl`

## Quick validation (recommended)

Run:

```bash
npm run build
```

The build will fail with a helpful error if a listing doesn’t match the schema.

