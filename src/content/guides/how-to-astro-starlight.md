# eliana wiki

A starter Astro Starlight documentation site for `jubilancy.github.io`, configured for GitHub Pages deployment.

## Features

- Astro Starlight docs site
- Built-in search (Cmd/Ctrl + K)
- Built-in light/dark mode toggle
- GitHub Pages deployment via Actions
- Edit this page links to the GitHub web editor
- Sample Markdown notes and guides
- Starter sitemap page and themed callouts
- Custom color palette hooks for `#f4a261` and `#2a9d8f`

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Astro prints in your terminal.

## Deploy to GitHub Pages

1. Push this repo to `jubilancy/jubilancy.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` and let the workflow publish the site.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── astro.config.mjs
├── package.json
├── public/favicon.svg
├── src/content/docs/
├── src/components/
└── src/styles/custom.css
```

## Notes

- This repo is set up as a **user site**, so the public URL is `https://jubilancy.github.io`.
- Because this is a user site, no Astro `base` path is needed.
- Starlight already includes search, breadcrumbs, on-page table of contents, and dark mode.
- More advanced features like backlinks, graph view, hover previews, and git-history freshness need custom components or build scripts.
