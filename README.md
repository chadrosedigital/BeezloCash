# Beezlo Cash

A single-page customer demo built with Next.js App Router, React, and TypeScript.

## Deploy with GitHub and Vercel

1. Extract this ZIP.
2. Create a GitHub repository and upload the **contents** of the `beezlo-cash` folder. `package.json` should be at the repository root. Include the hidden `.gitignore` file.
3. In Vercel, choose **Add New > Project**, import the GitHub repository, and select the **Next.js** framework preset.
4. Use the repository root as the Root Directory. Keep the default installation and build settings; the build script is `pnpm build`.
5. Deploy. No environment variables or Supabase credentials are required.

If you upload the enclosing `beezlo-cash` folder instead, set Vercel's Root Directory to `beezlo-cash`.

This demo uses Next.js static export (`output: 'export'`). The build produces `out/`; Vercel's Next.js preset handles the deployment. No `vercel.json` is required.

## Local development

Use Node.js 22 LTS and pnpm 10.11.0 (declared in package.json).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by the development server.

```sh
pnpm build
pnpm typecheck
```

The production build is static. To preview it locally:

```sh
pnpm dlx serve out
```

## Features

- Supplied Beezlo logo and original yellow/black styling
- Eight fictional businesses and offers
- Search, category filtering, and alphabetical sorting
- Accessible deal dialogs with code reveal and clipboard copy
- Account placeholder; no registration or sign-in
- Responsive mobile and desktop layouts

## Supabase compatibility

Demo content and its `Deal` type live in `lib/deals.ts`. Replace that data source with a Supabase query when adding a backend. Supabase is not connected and no credentials are included. Introduce appropriate database row-level security before exposing private user or business data. Remove static export if future functionality needs server-rendered authenticated routes.

## Important demo details

All businesses, discounts, and promo codes are fictional and cannot be redeemed. There are no business integrations, billing, giveaways, or data collection. Clipboard access requires HTTPS or localhost; a manual-copy fallback message is shown when it is unavailable. Search indexing is disabled for this demo.

The supplied logo is in `public/images/beezlo-logo.png`. Photo provenance is in `ASSETS.md`. Fonts load from Google Fonts with system fallbacks; icons are from lucide-react.

## Repository contents

This archive includes source, images, TypeScript configuration, and the dependency lockfile. It excludes Git history, credentials, installed dependencies, build output, and private Sites hosting configuration.
