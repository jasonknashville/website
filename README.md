# Jason Kaczmarski Nashville

Unified Astro website for The Jason Kaczmarski Team's Middle Tennessee guides and planning tools.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

Mortgage-rate defaults live in `src/data/mortgage-rates.json`. A scheduled GitHub Action refreshes them from Freddie Mac's Primary Mortgage Market Survey each Thursday and can also be run manually.

## Deployment

The repository is structured for Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

The production URL is configured as `https://jasonknashville.com` in `astro.config.mjs`.
