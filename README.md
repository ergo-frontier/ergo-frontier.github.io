# ergo-frontier.github.io

Landing page for [Ergo Frontier](https://github.com/ergo-frontier): trustless swaps between Web2 payments and Ergo, verified by TLS-Quorum.

Same stack as [celaut-project.github.io](https://github.com/celaut-project/celaut-project.github.io): SvelteKit + `@sveltejs/adapter-static`, fully prerendered, deployed to GitHub Pages by a GitHub Actions workflow.

## Developing

```bash
npm install
npm run dev      # dev server
npm run check    # svelte-check
npm run build    # static site in build/
npm run preview  # serve the build
```

## Where things are

- `src/lib/i18n/en.js`: all the copy. Edit text here, not in the components.
- `src/lib/components/`: one component per section.
- `src/app.css`: theme tokens (dark = Exchange palette, light = parchment from the logo) and shared section styles.
- `static/`: logo, favicons, OG image.
- `scripts/make-icons.py`: regenerates logo/favicons from `src/lib/assets/ergo-frontier-avatar.png` (the org avatar).
- `scripts/og-image.html`: template for `static/og-image.jpg` (instructions inside).
- `.github/workflows/deploy.yml`: builds on every PR, deploys on push to `main`.

## Adding a language

Same i18n layout as Celaut: copy `src/lib/i18n/en.js` to `xx.js` and translate it, add a loader to `LOADERS` and an entry to `LOCALES` in `src/lib/i18n/index.js`, and add the code to `SUPPORTED` in `src/hooks.server.js`. The page is then prerendered at `/xx`.

## Deploy

Settings → Pages → Source: **GitHub Actions**. Every push to `main` deploys.
