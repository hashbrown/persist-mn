# Site Search Spec

## Overview

PersistMN provides a fully static, client-side search experience across business listings. Search is powered by Fuse.js fuzzy matching and a build-time generated JSON index. No server/edge search, database, or third-party hosted search service is required.

This spec describes user-visible behavior and the key implementation choices that keep the feature simple, fast, and maintainable.

## Goals

- Let users quickly find businesses by **name** and **city** (with fuzzy matching).
- Support **category-scoped searching** when the user is on a category page.
- Keep the site **fully static** (Cloudflare Pages friendly) and low-maintenance.
- Keep runtime JS minimal and load it only when needed.

## Non-Goals

- Full-text search of long markdown body content.
- Semantic/AI search.
- Server-side/edge search.
- Multiple separate indexes (e.g., per-category/per-city).

## UX and Behavior

### Placement and responsive layout

- **Desktop/tablet**
  - Search box appears in the top header, **right-aligned**.
  - The **About** link is above the search box.
  - The search box is horizontally aligned with the **tagline** row.
- **Mobile**
  - Search box is **not** shown in the header.
  - Search box is rendered **between the header and the category pills**.

### Query + results

- Input is **debounced** (~200ms) to avoid excessive work on each keystroke.
- Search activates after **2+ characters**.
- Results are displayed in an inline dropdown list (top ~10).
- Each result shows:
  - Business name
  - City/state (when available)
  - Category badge

### Keyboard support / accessibility

The dropdown supports:

- **ArrowDown / ArrowUp**: move through results
- **Enter**: open the highlighted result
- **Escape**: close results

ARIA semantics are implemented using a combobox input and listbox/options.

### Clicking a result

- Clicking a search result navigates to the business detail page:
  - `/business/<slug>?from=<origin-path>`
- The `from` query parameter preserves the user’s context so the detail page can provide a “Back” link to the page they were on (including category and pagination).

### Clicking a listing card

- Business cards on listing pages are clickable and navigate to the same business detail route:
  - `/business/<slug>?from=<origin-path>`
- Links inside the card (Maps, phone, primary CTA) remain clickable and do not trigger navigation to the detail page.

## Data and Indexing

### Index contents

A single build-time JSON index is generated containing a minimal subset of business data needed for search:

- `id`
- `slug`
- `displayName`
- `city`, `state`
- `category`, `categorySlug`
- `justification` (included for relevance, not intended as full-text search)

### Index generation

- Implemented as an Astro endpoint:
  - `src/pages/search-index.json.ts`
- Output is emitted as a static file at:
  - `/search-index.json`

## Implementation Notes

### Fuse.js usage

- Uses the Fuse.js **Basic** build (standard fuzzy search only) via:
  - `import Fuse from 'fuse.js/basic'`
- Search configuration (high level):
  - Weighted keys: `displayName` (highest), `city`, `justification` (lowest)
  - `threshold` tuned for moderate fuzziness
  - `ignoreLocation: true` for more intuitive matching across short fields

Fuse.js docs reference: [Fuse.js](https://www.fusejs.io/) and the build guidance page: [Explanation of Different Builds](https://www.fusejs.io/getting-started/different-builds.html).

### Category scoping

- Category pages pass `categorySlug` into the search component.
- The search component restricts the Fuse dataset to that category when present.
- There is still only **one** index file.

### Business detail pages

- Route:
  - `src/pages/business/[...slug].astro`
- Back-link behavior:
  - Defaults to “Back to {category}”
  - If `?from=/some/path` is present, the back link is replaced to go back to that exact origin.

### Separate detail component

- Listing cards use: `src/components/BusinessCard.astro`
- Detail page uses: `src/components/BusinessDetailCard.astro`
  - Initially copied from `BusinessCard` so the detail layout can evolve independently.

## Performance Characteristics

- Search index is fetched lazily (first focus/interaction), then cached in memory for the session.
- The JS bundle for search is small and only loaded on pages where a search box is rendered.
- Expected scale: thousands of businesses remain reasonable for client-side Fuse search.

## Known Limitations / Future Enhancements

- Highlighting matched substrings is not implemented (could be added using `includeMatches` and UI highlighting).
- No dedicated `/search` page (current design intentionally stays inline).
- If index size grows significantly, consider building a precomputed Fuse index or switching to a static search solution like Pagefind/Typesense/Algolia.

