# Adding (or updating) a business

Business listings live in `src/content/businesses/` as Markdown files with frontmatter.

If you’re just getting started, this is the easiest way to contribute.

## Create a new business entry

1. Create a new file at `src/content/businesses/<slug>.md`
2. Use `kebab-case` for the filename (example: `moon-palace-books.md`)
3. Add frontmatter (see below)

## Frontmatter fields

The schema is enforced at build time in `src/content/config.ts`. Valid categories are defined in `src/utils/categories.ts`.

Example:

```markdown
---
name: "Business Name"
category: "Food/Drink"
location: "Minneapolis, MN"
description: "Short, factual description of how this business supports the community."
website: "https://example.com"
googleMapsUrl: "https://maps.app.goo.gl/..."
phone: "(612) 555-1234"
address: "123 Example St, Minneapolis, MN"
image: "https://.../photo.jpg"
---
```

### Required fields

- `name`
- `category`
- `location` (prefer `City, MN`)
- `description`

### Links (required rule)

At least one of these must be present:

- `website`
- `googleMapsUrl`

### Optional fields

- `address`
- `phone`
- `image` (must be a valid URL; external URLs are preferred)

## Writing good descriptions (important)

- **Keep it short**: 1–3 sentences is ideal
- **Keep it factual**: avoid rumors or personal attacks
- **Be specific**: what did they do, and for whom?
- **When in doubt, link**: if something is hard to summarize neutrally, include a relevant public link and keep wording simple

## Common reasons a build fails

- Category isn’t one of the values in `src/utils/categories.ts`
- Missing one of: `name`, `category`, `location`, `description`
- Missing both `website` and `googleMapsUrl`
- Invalid URL format in `website`, `googleMapsUrl`, or `image`

## Quick validation (recommended)

Run:

```bash
npm run build
```

The build will fail with a helpful error if a listing doesn’t match the schema.

