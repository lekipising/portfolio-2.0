# Liplan Lekipising | Portfolio

Personal portfolio for senior engineering roles, product builds, and platform rebuilds. Built with Next.js, TypeScript, Framer Motion, and a lazy-loaded Three.js monogram.

## Development

```sh
corepack pnpm@10.14.0 install --frozen-lockfile
corepack pnpm@10.14.0 dev
```

## Checks

```sh
corepack pnpm@10.14.0 lint
corepack pnpm@10.14.0 exec tsc --noEmit
corepack pnpm@10.14.0 build
```

Project narratives live in `data/work.ts`; `/work/[slug]` statically generates four case studies. Project preview compositions are illustrative, with links to the live products.

The contact endpoint requires `RESEND_API_KEY`, `EMAIL_FROM` (a verified sender address), and `EMAIL_TO`. Without configuration it returns a service-unavailable response; the interface also provides a direct email link. No secrets belong in source control.

The 3D mark supports reduced motion and falls back to a static monogram if WebGL is unavailable. The former PWA is retired; the app unregisters its legacy `/sw.js` worker. SEO metadata, a social card, robots rules, and a sitemap are included.
