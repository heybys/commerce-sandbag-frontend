# Project Guidelines

Project: commerce-sandbag-frontend
Last updated: 2025-09-09 07:20 (local)

Overview
- This is a Next.js 15 + React 19 + TypeScript frontend, styled with Tailwind CSS 4.
- Package manager: pnpm (scripts call Node helpers in ./scripts).
- Mock Service Worker (MSW) is set up for browser and server mocking under /mocks.
- API routes exist under app/api for local development endpoints.

Repository structure (high level)
- app: Next.js App Router pages and API routes (e.g., app/api/products, app/api/categories).
- public: Static assets and MSW worker output.
- mocks:
  - browser: MSW handlers for client-side mocking.
  - server: MSW handlers for server-side mocking.
- scripts: Node CLI helpers to run dev, build, and start (dev.mjs, build.mjs, start.mjs).
- .junie: Junie automation config and guidelines (this file).
- Config: eslint.config.mjs, next.config.ts, postcss.config.mjs, tsconfig.json, tailwind via @tailwindcss/postcss.

How to run
- Development (with default on-local env):
  - pnpm run local
  - Optional: specify env with -e dev|stg|prd (defaults to on-local if omitted). Copies .env.<env> to .env.development and runs next dev.
- Build (standalone):
  - pnpm run build -e on-local|dev|stg|prd (required). Copies .env.<env> to .env.production and runs next build, then prepares .next/standalone.
- Start (standalone server):
  - pnpm run start --port 3000 (port optional). Requires a prior build; runs node .next/standalone/server.js.

Mocks
- MSW is configured (msw.workerDirectory => public). Browser and server handler entrypoints exist at mocks/browser/index.ts and mocks/server/index.ts.
- Handlers are organized under mocks/browser/handlers and mocks/server/handlers. Data mock file at mocks/browser/handlers/data.ts.
- During development, app code may initialize MSW in the browser; check mocks/MockInitializer.tsx and mocks/index.ts if present.

Testing
- No dedicated test framework is configured in package.json. If tests are added later, document how to run them here. For now, rely on typechecking and linting.

Quality gates
- TypeScript: tsc (version 5.8.x). Next build will typecheck.
- Lint: pnpm run lint (uses eslint-config-next 15). Please run before submitting changes that affect JS/TS/TSX files.
- Formatting: Prettier 3 is present; follow standard Prettier defaults (2-space indent). If a Prettier config is added, adhere to it.

Environment management
- .env files per environment: .env.on-local, .env.dev, .env.stg, .env.prd (as applicable). Scripts copy to .env.development or .env.production automatically.

Junie-specific guidance
- For small changes (docs, config): no need to run build. Ensure lint passes if code is modified.
- For feature changes touching runtime code:
  - Run pnpm run local to verify dev server builds without errors.
  - If touching build/start logic, validate pnpm run build -e on-local and pnpm run start.
- Prefer minimal diffs. Do not modify scripts unless required by the issue.
- Keep MSW handlers consistent between browser and server folders when adding new mocked endpoints.

Submission checklist for Junie
- If code changed: run pnpm run lint and ensure no errors.
- If build behavior is impacted: run pnpm run build -e on-local and then pnpm run start to validate.
- For this issue (docs): only .junie/guidelines.md should be updated.
