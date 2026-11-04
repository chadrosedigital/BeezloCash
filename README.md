# Beezlo Cash

A single-page Next.js, React and TypeScript customer deals site.

## GitHub and Vercel

1. Extract the ZIP and upload the contents of `beezlo-cash` to a GitHub repository, including `.gitignore`. Put `package.json` at the repository root.
2. Import the repository into Vercel and select the Next.js framework preset. If you upload the enclosing folder, set Root Directory to `beezlo-cash`.
3. Keep default install/build settings (`pnpm build`). No environment variables or Supabase credentials are needed.

The project uses Next.js static export and generates `out/`. No custom Vercel configuration is necessary.

## Development

Use Node.js 22 LTS and pnpm 10.11.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Production build and type checks:

```sh
pnpm build
pnpm typecheck
```

To serve the production static export locally: `pnpm dlx serve out`.

## Listings

Beezlo Clothing is a real listing supplied by the owner: 15% off, code `BEEZLOCASH1`, shop URL https://beezloclothing.co.za/discount/BEEZLOCASH1. Its card uses the supplied product PNG, and its popup supports code copying and a shop link. Final discount eligibility is determined by the merchant checkout. No expiry or unprovided exclusions have been invented.

The other eight businesses are fictional examples, labelled Demo, and their codes cannot be redeemed. Sign Up and Log In simulate accounts for the current page visit only. Any valid-looking email and made-up password of at least 8 characters work. No credentials are saved or verified; reload or Log Out resets access. This is a UI demonstration, not secure authentication: codes still exist in the public client bundle. Replace this with Supabase Auth and server-enforced code access before production. There are no business integrations, checkout integrations, payments, or giveaway entry systems.

Edit listings in `lib/deals.ts`. Each listing has an explicit `isDemo` flag, image filename, code, and optional shop URL. Supabase can replace this data source later; no connection is configured. Add database access policies before introducing private data, and remove static export if adding authenticated server routes.

## Assets and packaging

See ASSETS.md for photo provenance. The Beezlo logo and clothing image were supplied by the owner. The ZIP includes the original product PNG, source, dependency lockfile, and configuration. Git history, private Sites configuration, credentials, installed dependencies, and build output are excluded.

The code reveal/copy flows and production build were checked. Merchant checkout redemption was not tested. Search indexing remains disabled for this initial preview.
