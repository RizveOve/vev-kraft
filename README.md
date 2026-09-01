# VevKraft

Marketing site for VevKraft — an accessibility and applied-AI software consultancy for Norwegian SMEs, based in Oslo.

Built with React, TypeScript, Vite and Tailwind CSS v4. Content is fully trilingual (English, Norwegian, Bangla) via a small custom i18n layer in `src/i18n/`.

## Development

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build to dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint
```

## Publishing a self-contained bundle

`scripts/build-artifact.mjs` inlines the production build (JS, CSS, fonts, logos) into a single `artifact/index.html` file with no external asset requests, for hosting anywhere that only accepts a single static file:

```bash
npm run build
node scripts/build-artifact.mjs
```
