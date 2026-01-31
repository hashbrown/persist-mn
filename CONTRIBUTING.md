# Contributing to PersistMN

Thanks for helping build **PersistMN**, a small, purpose-driven directory that highlights Minnesota businesses supporting their community.

This project is intentionally simple: it’s a static site built with Astro, and most contributions are either **content** (business entries) or **small UI/UX improvements**.

## Before you start

- **Pick something from Issues**: check the repo’s GitHub Issues for bugs, improvements, and planned features. If you’re new, look for labels like “good first issue” / “help wanted” (when present).
- **No issue required**: you can also submit a small PR directly (especially for typos, broken links, or small content fixes).
- **For larger changes**: opening (or commenting on) an issue first helps avoid duplicated work.

## Key docs

- `DEVELOPER_GUIDE.md` (tech stack, architecture, project structure)
- `ADDING_A_BUSINESS.md` (how to add/update a listing)

## Ways to contribute

- **Add or update a business listing** (most common; see `ADDING_A_BUSINESS.md`)
- **Fix inaccuracies** (location, links, phone, justification, category)
- **Improve the site** (design, accessibility, layout, performance, copy)
- **Improve documentation** (clarify setup, scripts, and workflows)


## Community guidelines (small-community open source)

- **Be kind and constructive.** Assume good intent.
- **Keep it factual.** Avoid rumors or personal attacks in business justifications.
- **Don’t add sensitive personal data.** Business contact info is OK; private individual info is not.
- **Prefer public, verifiable sources.** When in doubt, link to a public page rather than summarizing claims.

## Quick start (local dev)

```bash
npm install
npm run dev
```

Local site runs at `http://localhost:4321`.

Before opening a PR, please run:

```bash
npm run build
```

## Pull request guidelines

### Scope and review

- **Small PRs are best.** One change-type per PR (e.g., “add 5 businesses” or “fix pagination spacing”).
- If you’re making a bigger change (new feature, category system changes, routing/layout refactors), prefer you open an issue first so we can align on approach.

### Checklist (content PRs)

- [ ] New/updated entries build successfully (`npm run build`)
- [ ] Category matches one of the values in `src/utils/categories.ts`
- [ ] At least one of `website` or `googleMapsUrl` is present
- [ ] justification is factual and not defamatory
- [ ] Links work and are relevant

### Checklist (code PRs)

- [ ] `npm run build` passes
- [ ] UI looks good on mobile + desktop (basic responsive check)
- [ ] Accessibility basics: readable contrast, semantic headings, keyboard navigation where relevant

## Git and branching

- Fork the repo and create a feature branch
- Use clear commit messages (e.g., “Docs: clarify business entry fields”, “Fix: correct links for X”)

## Questions / help

If anything here is confusing, please open an issue with:

- what you’re trying to change
- what you expected
- what happened instead (error output or screenshot if relevant)

