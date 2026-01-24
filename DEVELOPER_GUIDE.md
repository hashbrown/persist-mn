# Developer Guide

Technical documentation for the Persist-MN Business Directory.

## Tech Stack

- **Astro 4.16** - Static site generator with content collections
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **TypeScript 5.7** - Type safety with strict mode
- **Zod** - Runtime schema validation
- **Cloudflare Pages** - Hosting platform (free tier)

## Architecture

### Static Site Generation

The site is fully static with no runtime JavaScript needed for core functionality:
- All pages pre-rendered at build time
- 50 businesses per page for optimal performance
- Automatic pagination for main listing and category pages

### Content Collections

Astro's content collections provide type-safe content management:

```typescript
// src/content/config.ts
const businessCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['Restaurant/Bar', 'Retail', 'Services', 'Organization']),
    location: z.string(),
    // ... additional fields
  }).refine(
    (data) => data.website || data.googleMapsUrl,
    { message: 'At least one of website or googleMapsUrl must be provided' }
  ),
});
```

## Project Structure

```
persist-mn/
├── src/
│   ├── content/
│   │   ├── config.ts              # Zod schema definitions
│   │   └── businesses/            # Business markdown files
│   ├── layouts/
│   │   └── Layout.astro           # Base HTML layout
│   ├── components/
│   │   ├── BusinessCard.astro     # Business listing card component
│   │   ├── CategoryFilter.astro   # Category navigation pills
│   │   ├── Pagination.astro       # Page navigation component
│   │   └── Header.astro           # Site header
│   ├── pages/
│   │   ├── index.astro            # Home page (page 1)
│   │   ├── page/
│   │   │   └── [...page].astro    # Paginated routes (/page/2, /page/3, etc.)
│   │   └── category/
│   │       └── [category]/
│   │           └── [...page].astro # Category pages with pagination
│   ├── styles/
│   │   └── global.css             # Tailwind directives + base styles
│   └── utils/
│       └── categories.ts          # Category constants and helpers
├── public/
│   ├── images/
│   │   └── placeholder-business.svg
│   └── favicon.svg
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## Routes

The site generates the following routes:

### Main Listing
- `/` - First page of all businesses
- `/page/2`, `/page/3`, etc. - Subsequent pages

### Category Pages
- `/category/restaurant-bar` - Restaurant/Bar listings (page 1)
- `/category/restaurant-bar/page/2` - Restaurant/Bar page 2
- `/category/retail` - Retail listings
- `/category/services` - Services listings
- `/category/organization` - Organization listings

Category slugs are generated from category names:
```typescript
// "Restaurant/Bar" → "restaurant-bar"
function getCategorySlug(category: Category): string {
  return category.toLowerCase().replace(/\//g, '-');
}
```

## Content Schema

### Business Entry

```typescript
{
  name: string                    // Required
  category: Category              // Required: one of 4 categories
  location: string                // Required: "City, MN"
  address?: string                // Optional: full street address
  phone?: string                  // Optional: formatted phone number
  description: string             // Required: community support description
  image?: string                  // Optional: URL to image
  website?: string                // Optional: business website URL
  googleMapsUrl?: string          // Optional: Google Maps URL
}
```

**Custom Validation:** At least one of `website` or `googleMapsUrl` must be provided.

### Categories

Defined in `src/utils/categories.ts`:
```typescript
export const CATEGORIES = [
  'Restaurant/Bar',
  'Retail',
  'Services',
  'Organization',
] as const;
```

To add a new category:
1. Update the `CATEGORIES` array
2. Rebuild the site - routes are auto-generated

## Key Components

### BusinessCard.astro

The primary UI component for displaying business information:

**Features:**
- Responsive card layout (stacked on mobile, side-by-side on desktop)
- Image with fallback to placeholder
- Category badge
- Location icon
- Click-to-call phone links
- Primary CTA button (website or maps)
- Hover shadow effect

**Props:**
```typescript
interface Props {
  business: CollectionEntry<'businesses'>;
}
```

### Pagination.astro

Smart pagination with ellipsis for large page counts:

**Features:**
- Shows first page, last page, and pages near current
- Adds ellipsis (...) for gaps
- Previous/Next buttons
- Highlights current page
- Adapts to different base URLs (main vs. category)

**Props:**
```typescript
interface Props {
  currentPage: number;
  totalPages: number;
  baseUrl: string;  // "" for main, "/category/retail" for categories
}
```

### CategoryFilter.astro

Horizontal scrollable category navigation:

**Features:**
- "All Businesses" option
- Category pills
- Active state highlighting
- Mobile-friendly horizontal scroll

**Props:**
```typescript
interface Props {
  currentCategory?: string;  // Current category slug or undefined for "All"
}
```

## Development

### Scripts

```bash
# Start dev server with hot reload
npm run dev

# Type check
npm run astro check

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Adding Features

**New Component:**
```bash
# Create in src/components/
touch src/components/MyComponent.astro
```

**New Page:**
```bash
# Create in src/pages/ (becomes a route automatically)
touch src/pages/about.astro
```

**New Style:**
```css
/* Add to src/styles/global.css */
@layer components {
  .my-component {
    @apply bg-white p-4 rounded-lg;
  }
}
```

## Deployment

### Cloudflare Pages (via Workers + Static Assets)

The site uses Cloudflare's modern Workers with Static Assets approach, configured via `wrangler.jsonc`:

```jsonc
{
  "name": "persist-mn",
  "compatibility_date": "2026-01-24",
  "assets": {
    "directory": "./dist"
  }
}
```

**Deployment Workflow:**
1. Push code to GitHub
2. Connect repository to Cloudflare Pages dashboard
3. Cloudflare automatically detects `wrangler.jsonc` and uses:
   - **Build command:** `npm run build`
   - **Output directory:** `./dist` (from wrangler.jsonc)
4. Automatic deployments on every push to `main`

**Custom Domain (Optional):**
1. Add domain in Cloudflare Pages dashboard
2. Update `site` in `astro.config.mjs`
3. Configure DNS records

**Note:** Cloudflare Pages now runs on Workers infrastructure with static assets. The `wrangler.jsonc` file tells Cloudflare where to find your built files.

### Build Output

The `dist/` directory contains:
- Pre-rendered HTML pages
- Optimized CSS bundles
- Public assets (images, favicon)
- No JavaScript bundles (fully static)

## Performance

### Optimization Strategies

**Images:**
- External URLs (avoid repo bloat)
- Lazy loading with `loading="lazy"`
- SVG placeholder (minimal size)
- Future: Cloudflare Images for optimization

**CSS:**
- Tailwind CSS with purging (only used classes)
- Single CSS bundle per page
- No unused framework code

**JavaScript:**
- Zero runtime JS for core functionality
- Only Astro's minimal hydration scripts
- Future: Optional client-side search with Pagefind

**Build Time:**
- ~650ms for 5 pages (3 businesses)
- Linear scaling: ~1-2 seconds for 1000 businesses
- Pagination prevents single-page bottlenecks

## Testing

### Build Verification

```bash
# Verify build succeeds
npm run build

# Check output
ls -R dist/

# Test locally
npm run preview
```

### Content Validation

The Zod schema automatically validates:
- ✅ Required fields present
- ✅ Category is valid enum value
- ✅ URLs are properly formatted
- ✅ At least one link (website/maps) exists

**Test validation:**
```bash
# Create invalid entry (missing required field)
# Build will fail with descriptive error
npm run build
```

### Manual Testing Checklist

- [ ] All category pages render
- [ ] Pagination works (prev/next buttons)
- [ ] Category filter highlights active category
- [ ] Business cards display correctly
- [ ] Images load or show placeholder
- [ ] Phone links work (`tel:` URLs)
- [ ] External links open in new tab
- [ ] Mobile responsive (test in DevTools)
- [ ] Build completes without errors

## Troubleshooting

### Build Fails

**"ITEMS_PER_PAGE is not defined"**
- Ensure constant is defined inside `getStaticPaths()` function
- Astro requires static values to be in scope during build

**"At least one of website or googleMapsUrl must be provided"**
- Check business entry has either field
- Both can be present, but at least one required

### TypeScript Errors

**"Property does not exist on type"**
- Run `npm run astro check` for detailed errors
- Ensure props interfaces match usage
- Check `src/env.d.ts` exists

### Styles Not Applying

**Tailwind classes not working:**
- Verify `@tailwind` directives in `global.css`
- Check Tailwind config includes all content paths
- Restart dev server after config changes

## Future Enhancements

### Planned Features

**Search:**
- Integrate Pagefind for static search
- No backend required, works with static hosting
- Minimal bundle size (~20KB)

**Filtering:**
- Multi-select category filtering
- Location-based filtering
- Client-side filtering for better UX

**Submissions:**
- Public submission form
- Cloudflare Worker backend
- Creates GitHub PR with new business
- Admin approval workflow

**Analytics:**
- Cloudflare Web Analytics (privacy-friendly)
- No cookies, no tracking
- Free tier available

**SEO:**
- Schema.org LocalBusiness markup
- Meta tags for social sharing
- Sitemap generation
- robots.txt

### Scaling Considerations

**Current Design (1000 businesses):**
- ✅ 20 pages at 50 per page
- ✅ Fast build times (<2 seconds)
- ✅ Excellent performance

**If Scaling Beyond 5000:**
- Consider on-demand rendering for deep pages
- Implement search to reduce pagination depth
- Add caching layer (Cloudflare CDN handles this)

## Contributing

### Code Style

- Use TypeScript strict mode
- Follow Astro component conventions
- Tailwind CSS for all styling
- Meaningful component/file names

### Pull Request Process

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Make changes and test locally
4. Run `npm run build` to verify
5. Commit with descriptive messages
6. Push and create pull request

### Commit Messages

```
Add: New feature or component
Update: Modify existing functionality
Fix: Bug fix
Docs: Documentation only
Style: Formatting, no code change
Refactor: Code restructuring
```

## License

ISC
