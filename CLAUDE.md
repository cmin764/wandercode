# wandercode

Portfolio site for WANDERCODE LIMITED — Cosmin Poieana's personal site as a Fractional AI Product Strategist. React 19 SPA deployed on Vercel at `wandercode.ltd`.

No backend, no database, no CMS. All content is hardcoded in page components and `src/lib/constants.ts`.

## Commands

```bash
bun install
bun dev          # dev server at http://localhost:5173
bun run build    # production build — run before committing to catch type/compile errors
bun run check    # tsc --noEmit + eslint — run before every commit
```

## Stack

- **React 19** with TypeScript 5, **Vite 8**
- **Tailwind CSS 3.4** — configured in `tailwind.config.ts`; HSL color tokens defined as CSS custom properties in `src/index.css`
- **shadcn/ui** — primitives in `src/components/ui/`; `components.json` present for future additions
- **React Router DOM 7** — flat route config in `src/App.tsx`
- **@vitejs/plugin-react** (not `-swc`) — the SWC variant doesn't support Vite 8's Oxc API and emits a deprecation warning; stay on the non-SWC plugin
- **lucide-react 1.x** — brand icons (`Github`, `Linkedin`) were removed in v1. Both `Footer.tsx` and `Contact.tsx` use inline SVGs for those; `Mail` and all generic icons remain as lucide imports
- **@calcom/embed-react** — two integration patterns: popup (`useCalPopup`) and inline embed (`CalEmbed`)
- **@vercel/analytics** — single `<Analytics />` mounted in `App.tsx`
- **Package manager**: bun only, never npm or yarn

## Coding Rules

**Navigation**
- `<Link to="...">` for all internal navigation, including the 404 page. Never `<a href="...">` for same-origin paths — it triggers a full page reload in the SPA. Same-page hash anchors (`href="#section"`) are the only acceptable exception; prefer `<Link to="#section">` even there for consistency.
- External links with `target="_blank"` need `rel="noopener noreferrer"`.
- `mailto:` links use plain `<a href="mailto:...">` — not `<Link>`.

**Dark mode**
- `darkMode: ["class"]` — the `dark` class is toggled on `<html>` by `useTheme`. Every component must work in both light and dark themes.
- Use semantic color tokens only: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`, `bg-muted`, etc. Hard-coded values like `bg-white` or `text-gray-700` break in dark mode.

**Styling**
- Conditional class merging uses `cn()` from `@/lib/utils`. Never concatenate class strings manually — tailwind-merge resolves conflicting utilities, string concatenation does not.
- Inline `style` is acceptable only for animation delays (`animationDelay` on `animate-fade-in` elements) and one-off layout constraints with no matching Tailwind scale step.
- All page sections use the `container` class (centered, max-width 1200px, 2rem padding). Full-bleed background sections intentionally break out of it.

**Components**
- Do not edit files in `src/components/ui/`. These are shadcn/ui primitives — customize via props, composition, or `tailwind.config.ts` theme extension. Direct edits break future `shadcn` updates.
- Static data arrays (nav links, service cards, etc.) belong outside the component function. Defined inside, they create new object references on every render.
- Use `interface` for component props, type aliases for data shapes.

**TypeScript**
- No `any`. Use `unknown` with narrowing if the type is genuinely unknown.
- No `React.FC`. Use standard function declarations or arrow functions with typed parameters.
- `import type` for type-only imports.

**Accessibility**
- Icon-only buttons need `aria-label`. Stateful toggles (menus, accordions) also need `aria-expanded={booleanState}`.
- CSS animations must have a `@media (prefers-reduced-motion: reduce)` fallback. Add it to `src/index.css`.
- The Cal.com inline embed iframe should have a `title` attribute. Verify in DevTools; add via `useEffect` + `ref` if the library doesn't inject one.

**SEO**
- Each page sets its own document title via the `useDocumentTitle` hook (`src/hooks/useDocumentTitle.ts`). Pattern: `"Page Name | Wandercode"`. Add the hook to any new page component.
- The 404 page injects `<meta name="robots" content="noindex">` via `useEffect` so crawlers ignore it.
- `<link rel="canonical">` is set in `index.html` pointing to `https://wandercode.ltd/`. For per-route canonicals, use a `useEffect` or `react-helmet-async` if needed in the future.

**Constants**
- Shared strings (Cal.com links, contact email) live in `src/lib/constants.ts`. Never inline them — add to constants first.

**Cal.com integration**
- Popup: use `useCalPopup` hook (`src/hooks/useCalPopup.ts`). It lazy-imports `getCalApi` on first click — do not change this pattern.
- Inline embed: use `CalEmbed` component (`src/components/CalEmbed.tsx`). Use only on the Contact page where scheduling is the page's primary purpose.
- Cal.com links are constants in `src/lib/constants.ts`. Add new ones there, not inline.
- Known console warnings: `markdownToSafeHTML` should not be imported on the client side, zustand `createWithEqualityFn` deprecation, react-i18next instance missing, and `QuickAvailabilityCheck feature enabled: false` all originate from Cal.com's hosted Next.js app at `app.cal.com` — not our bundle. They are pre-existing, non-breaking, and not fixable from this codebase.

## Architecture

### Routes (`src/App.tsx`)

| Path | Component | Notes |
|---|---|---|
| `/` | `Index` | Hero, services overview, CTA |
| `/services` | `Services` | Services grid |
| `/services/consulting` | `Consulting` | Service detail |
| `/services/development` | `Development` | Service detail |
| `/services/workshops` | `Workshops` | Service detail |
| `/about` | `About` | Bio, background |
| `/contact` | `Contact` | Cal.com inline embed |
| `/privacy` | `Privacy` | Privacy Policy |
| `*` | `NotFound` | 404, intentionally skips Layout |

### Layout

All pages wrap in `<Layout>` (`src/components/layout/Layout.tsx`) which renders Header + `<main>` + Footer. The only exception is `NotFound` (full-screen 404 by design). Do not add pages that bypass Layout without a deliberate reason.

Hash navigation (`/services#consulting`) is handled by `ScrollToTop` (`src/components/ScrollToTop.tsx`), which reads `useLocation().hash`. New hash targets need a matching `id` on the element and `scroll-mt-16` to clear the sticky header.

### Theme

`useTheme` (`src/hooks/useTheme.ts`) persists preference to `localStorage` under key `theme` and toggles the `dark` class on `<html>`. The inline script in `index.html` reads this before React mounts to prevent a flash of the wrong theme.

### Data

No data layer. Content is inline in page components. Shared values (Cal.com links) live in `src/lib/constants.ts`. Add new shared constants there rather than duplicating strings across components.

## Writing & Copy

- No em-dashes anywhere in page content. Replace with a colon, comma, period, or parentheses.
- No AI-generated filler in copy: no "seamlessly", "effortlessly", "cutting-edge", "leverage", "unlock", "empower", or similar marketing-speak. If a phrase could appear on a SaaS homepage template, rewrite it.
- Copy voice matches Cosmin's personal style (see `~/.claude/CLAUDE.md` tone/voice rules): direct, first-person where appropriate, conviction without hype, short punchy sentences for simple points.
- Page copy is written as a practitioner talking to a peer, not a brand talking to a prospect.

## Custom Skills

### `/frontend-review [full]`

Self-review skill for frontend code before merge.

- `/frontend-review` — reviews the diff of the current branch vs `main`
- `/frontend-review full` — audits the entire codebase

Covers: accessibility, SEO, security, performance, component structure, TypeScript, Tailwind CSS, React Router, and code quality. Rules are in `.claude/skills/frontend-review/references/checklist.md`.

## Deployment

GitHub repo: `cmin764/wandercode`. Vercel is connected to `main` — every push deploys automatically. Domain: `wandercode.ltd`.
