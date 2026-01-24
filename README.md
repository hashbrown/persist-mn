# Persist-MN Business Directory

**Persist to resist.** Supporting Minnesota businesses that support humankind.

A Minnesota local business directory showcasing businesses that are actively helping their community.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:4321 to see the site.

## Adding a Business

Create a new markdown file in `src/content/businesses/` with the business name (e.g., `my-business-name.md`):

```markdown
---
name: "Business Name"
category: "Restaurant/Bar"
location: "Minneapolis, MN"
description: "How this business is helping the community"
website: "https://example.com"
---
```

### Required Fields
- `name` - Business name
- `category` - One of: "Restaurant/Bar", "Retail", "Services", or "Organization"
- `location` - City and state
- `description` - Brief description of how they support the community
- `website` OR `googleMapsUrl` - At least one link must be provided

### Optional Fields
- `address` - Full street address
- `phone` - Phone number (e.g., "(612) 555-1234")
- `image` - URL to business photo
- `googleMapsUrl` - Google Maps link

See existing files in `src/content/businesses/` for examples.

## Deployment

The site automatically deploys to Cloudflare Pages when you push to the `main` branch on GitHub.

**Setup:**
1. Push this repository to GitHub
2. Connect the repository in Cloudflare Pages dashboard
3. Cloudflare will use `wrangler.jsonc` to configure the deployment

For technical documentation and deployment details, see [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).
