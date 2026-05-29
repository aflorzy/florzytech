# Florzy Tech

Marketing website for **Florzy Tech LLC** — a local PS5 repair service in the Twin Ports area.

Live at: [florzytech.com](https://florzytech.com)

## Stack

- **Angular 21** (standalone components) in an **Nx 22** monorepo
- **Angular Material** for UI components
- **SCSS** for styling — global theme variables in `apps/web/src/styles.scss`
- **Vitest** for unit tests
- Deployed to a self-hosted server via `./deploy-web.sh`

## Commands

```bash
# Dev server → http://localhost:4200
nx serve

# Production build (output: dist/apps/web/)
nx build web --configuration=production

# Tests
nx test web

# Lint
nx lint web

# Deploy (build + scp to docker.lan)
./deploy-web.sh
```

## Project Structure

```
apps/web/src/app/
  app.routes.ts          # Route definitions (/, /about, /contact, /faq)
  constants/             # Company details (phone, email, socials) — source of truth
  layout/                # Header, footer, navigation, shell Layout component
  pages/                 # One component per route
  styles.scss            # Global SCSS theme variables and utility classes
```

## Notes

- Company contact info lives in `constants/metadata.constant.ts` — do not hardcode it in templates.
- SEO meta tags and GTM (`GTM-P7LWDR9V`) are static in `apps/web/src/index.html`.
- `nav/nav.component` is an unused Nx scaffold — `layout/navigation/navigation` is the active nav.
