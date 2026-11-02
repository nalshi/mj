# Deploying to Cloudflare Pages

This project is configured for a static Next.js export. In Cloudflare Pages, use:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `.` when this repository is the Nalsh app; use `nalsh` only if it is a subdirectory in a larger repository |

If Cloudflare does not select a compatible Node.js version automatically, set the
`NODE_VERSION` environment variable to `22` in the Pages project settings.

The static export includes the landing page and `/guide/`. It does not provide
Next.js server features, API routes, or server-side rendering. Use a Cloudflare
Workers Next.js deployment if those features are added later.
