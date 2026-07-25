# AGENTS.md

## Project Overview
Astro SSR project (Vercel adapter) for a technical education website about systems/computing. Uses Tailwind CSS v4, Supabase (database), and Firebase (auth).

## Key Commands
- `npm run dev` — Start dev server (default: http://localhost:4321)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

## Architecture
- **SSR with authentication**: Middleware (`src/middleware/index.ts`) uses Firebase Auth to protect routes
- **Protected routes**: `/loginEstudiante`, `/courses`, `/recursos` — redirect to `/inicioSesion` if not logged in
- **Public-only routes**: `/inicioSesion`, `/registro` — redirect to `/` if already logged in

## Path Aliases (tsconfig.json)
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `@lib/*` → `src/lib/*`
- `@styles/*` → `src/styles/*`

## Environment
- Copy `.env.template` to `.env` and set all required variables
- Required env vars: `WEBSITE_URL`, `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`, `THE_NEWS_API_KEY`
- Firebase config is in `src/firebase/config.ts` (uses `import.meta.env`)
- Supabase config is in `src/supabase/index.ts`

## Component Structure
- **Shared components**: `src/components/Shared/` — Header, Footer, Container, Button, Pagination
- **Page-specific components**: Organized in subdirectories (`loginEstudiante/`, `resources/`, `Index/`)
- **Layouts**: `Layout.astro` (main), `AuthLayout.astro` (login/register)
- **Global styles**: `src/styles/global.css` — Tailwind imports and CSS variables

## No Test/Lint Scripts
The `package.json` does not define `test`, `lint`, or `typecheck` scripts. If you add them, document the commands here.

## Deploy
Deploys to Vercel via `@astrojs/vercel/serverless` adapter. The site URL is `https://infobyte.neider.dev`.
