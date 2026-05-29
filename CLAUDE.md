# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (http://localhost:4200)
nx serve

# Production build (output: dist/apps/web/)
nx build web --configuration=production

# Run tests (Vitest)
nx test web

# Lint
nx lint web

# Deploy (build + scp to docker.lan)
./deploy-web.sh
```

All `nx` commands can also be run via `npm run` aliases (`start`, `build`, `test`) defined in the root `package.json`.

## Architecture

**Nx monorepo** with a single Angular 21 app at `apps/web/`. No shared libs yet — all code lives under `apps/web/src/app/`.

**Routing** — four page components registered in `app.routes.ts`, all eagerly loaded:
- `/` → `Home`, `/about` → `About`, `/contact` → `Contact`, `/faq` → `Faq`

**Shell** — `AppComponent` renders `<app-layout>`, which wraps `<app-header> / <router-outlet> / <app-footer>`. The `Layout` component in `layout/layout/` is the active shell; the `nav/nav.component` is an unused scaffold from Nx generation.

**Styling** — global dark theme variables (`$bg`, `$surface`, `$accent`, etc.) and utility classes (`.container`, `.surface`, `.price-badge`) are defined in `apps/web/src/styles.scss`. All component styles use SCSS. Prettier enforces formatting; stylelint-prettier is configured via `.stylelintrc`.

**UI library** — Angular Material (`@angular/material`). Import only the specific module needed per component (e.g. `MatCardModule`, `MatButtonModule`).

**Company data** — canonical contact info, phone, and social links live in `apps/web/src/app/constants/metadata.constant.ts` (`companyDetails`). Use this as the single source of truth — do not hardcode contact details in templates.

**SEO / Analytics** — meta tags and GTM (`GTM-P7LWDR9V`) are static in `apps/web/src/index.html`. Update tags there when copy changes.

**Deploy target** — `./deploy-web.sh` builds production and SCPs the output to `aflorzy@docker.lan:/config/florzytech`.
