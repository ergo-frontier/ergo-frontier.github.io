<img src="src/lib/assets/ergo-frontier-avatar.png" alt="Ergo Frontier logo" width="120" />

# ergo-frontier.github.io

Landing page for [Ergo Frontier](https://github.com/ergo-frontier): trustless swaps between Web2 payments and Ergo, verified by TLS-Quorum.

Same stack as [celaut-project.github.io](https://github.com/celaut-project/celaut-project.github.io): SvelteKit + `@sveltejs/adapter-static`, fully prerendered, deployed to GitHub Pages by a GitHub Actions workflow.

In English at `/` and in Spanish at `/es`.

## Developing

```bash
npm install
npm run dev      # dev server
npm run check    # svelte-check
npm run build    # static site in build/
npm run preview  # serve the build
```

## Where things are

- `src/lib/i18n/en.js` and `es.js`: all the copy, same keys in both. Edit text here, not in the components.
- `src/lib/components/`: one component per section.
- `src/app.css`: theme tokens (dark = Exchange palette, light = parchment from the logo) and shared section styles.
- `static/`: logo, favicons, OG images.
- `src/lib/assets/ergo-frontier-avatar.png`: the logo, which is the ergo-frontier GitHub org avatar. Every logo file on the site is this image resized.
- `scripts/make-icons.py`: regenerates logo/favicons from that avatar.
- `scripts/og-image.html`: template for `static/og-image.jpg` and `og-image-es.jpg` (instructions inside).
- `.github/workflows/deploy.yml`: builds on every PR, deploys on push to `main`.

## Languages

Same i18n setup as Celaut. English is unprefixed (`/`) and Spanish is prerendered at `/es`. On `/`, the language comes from the visitor's saved choice, else the browser's languages, else English. `/es` is always Spanish. The switcher in the header is a plain link, so it works without JS.

To add a language: copy `src/lib/i18n/en.js` to `xx.js` and translate it, add a loader to `LOADERS` and an entry to `LOCALES` in `src/lib/i18n/index.js`, and add the code to the `supported` lists in `src/app.html` and `src/hooks.server.js`. The page is then prerendered at `/xx`. With more than two languages, the header toggle should become a menu like Celaut's.

## Deploy

Settings → Pages → Source: **GitHub Actions**. Every push to `main` deploys.
