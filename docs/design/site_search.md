## Site Search Architecture & Design Spec

### Context

* Static site built with **Astro**
* ~1,000 business listings today, max ~2,000 expected
* Listings stored as **Markdown files** with **YAML frontmatter**
* Frontmatter validated with **Zod**
* Hosted on **Cloudflare Pages**
* No authentication required
* Existing category pages and pagination generated at build time

---

### Goals

* Allow users to quickly find businesses by **name** and **city**
* Support searching **within a category** when on category pages
* Keep solution:

  * Fully static
  * Low maintenance
  * Fast for users
* Avoid premature infrastructure (Workers, hosted search, DBs)

---

### Non-Goals

* Full-text search of long markdown bodies
* Semantic / AI search
* Server-side or edge-based search
* Per-category or per-city indexes

---

### High-Level Approach

* Use **client-side search** with **Fuse.js**
* Generate **one build-time JSON search index**
* Filter results client-side for category-scoped searches
* Keep search logic entirely separate from Astro’s build-time routing logic

---

### Search Index Design

**Index generation**

* Runs at Astro build time
* Source: business content collection
* Output: `/search-index.json`

**Included fields (minimal set)**

* `id`
* `name`
* `city`
* `categories[]`
* `websiteUrl`
* `slug`

**Excluded**

* Full markdown body
* Images
* Non-searchable metadata

**Schema**

* Reuse or derive from existing Zod schema to ensure consistency

---

### Client-Side Search

**Library**

* Fuse.js

**Index usage**

* Single index loaded lazily on search interaction
* No multiple indexes (filtering ≠ indexing)

**Search weighting (example)**

* `name` (highest priority)
* `city`
* `description` (lowest priority)

**Category filtering**

* When on a category page, pass the category as a prop
* Filter Fuse results in-memory by category
* Same search component used globally and on category pages

---

### UX Behavior

**Global search**

* Searches across all businesses
* Intended for name and city lookups

**Category page search**

* Searches only within the current category
* Uses same index, filtered results

**Performance**

* Debounced input
* Client-only hydration (`client:load`)
* Expected index size < 300KB → no performance concerns

---

### Scalability & Future Considerations

* Current approach scales comfortably to ~10k listings
* Easy migration path to:

  * Algolia / Typesense
  * Cloudflare Workers
  * Semantic search
* No vendor lock-in

---

### Decision Summary

This solution intentionally optimizes for **simplicity and speed today**, while keeping future upgrades low-cost and low-risk. Cloudflare-based or hosted search solutions are explicitly deferred until real scaling or relevance issues emerge.
