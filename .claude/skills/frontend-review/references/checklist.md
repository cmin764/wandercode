# Frontend Review Checklist

Rules ordered by user-impact priority. IDs are used in review findings.
Skip rules that tsc + eslint already catches (unused vars, missing keys, hook rules).

---

## 1. Accessibility (a11y)

**A1** — Images have descriptive `alt` text. Decorative images use `alt=""`. The logo `<img>` should describe the brand (currently `alt="Wandercode"` — correct), not be empty or generic.

**A2** — Icon-only interactive elements need an accessible name. Buttons containing only a Lucide icon (no visible text) require `aria-label`. Check mobile menu toggle, theme toggle, and any icon-only buttons added in new code.

**A3** — Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text/UI). Check both light and dark themes. The site uses `darkMode: ["class"]` so custom color overrides must be tested in both modes.

**A4** — Focus is visible on all interactive elements. shadcn's Button already applies `focus-visible:ring-2 focus-visible:ring-ring`. Custom `<button>` elements (theme toggle, mobile menu) need explicit focus-visible styles or must not suppress the browser default.

**A5** — Each page has exactly one `<h1>`. Heading levels are sequential with no skipped levels (h1 → h2 → h3). Screen reader navigation depends on this.

**A6** — Landmark regions are present: `<header>`, `<nav>`, `<main>`, `<footer>`. The Layout component already wraps content in `<main>`. Flag any page that bypasses Layout or adds content outside the landmark structure.

**A7** — Links that open in a new tab (`target="_blank"`) should visually or semantically indicate this. Consider `aria-label` with "opens in new tab" suffix for icon-only social links.

**A8** — Mobile menu toggle communicates open/closed state. The `<button>` in Header.tsx uses `aria-label="Toggle menu"` but does not set `aria-expanded`. Add `aria-expanded={mobileMenuOpen}` so screen readers know the state.

**A9** — The Cal.com inline embed `<iframe>` (rendered by `@calcom/embed-react`) should have a title. If the Cal library does not inject one, wrap CalEmbed and add `title` via CSS/DOM workaround or verify the library sets it.

**A10** — CSS animations respect `prefers-reduced-motion`. The `animate-fade-in` keyframe and any transition utilities should have a `@media (prefers-reduced-motion: reduce)` fallback in `index.css`.

---

## 2. SEO & Meta

**S1** — Every route should set a unique `<title>` and `<meta name="description">`. Currently only `index.html` sets these globally — every page shows "Wandercode" as the title. Pages should override via `document.title` assignment in a `useEffect`, a custom `useDocumentTitle` hook, or `react-helmet-async`.

**S2** — Open Graph and Twitter Card tags exist in `index.html` (verified). But `og:url` is hardcoded to the root URL. Per-page routes should ideally update `og:url` to match the current path. At minimum, the base fallback is correct.

**S3** — `<html lang="en">` is set in `index.html` (verified). No action needed.

**S4** — `<link rel="canonical">` is missing. On Vercel, the site is accessible on both the `.vercel.app` subdomain and the custom domain. A canonical pointing to `https://wandercode.ltd/<path>` prevents duplicate content indexing.

**S5** — The NotFound page is served with HTTP 200 (Vercel SPA fallback). Add `<meta name="robots" content="noindex">` to NotFound so crawlers do not index error pages.

**S6** — Image assets in `public/` should be optimized (WebP or compressed PNG). Large unoptimized images hurt Core Web Vitals and Vercel's Lighthouse scores.

---

## 3. Security

**SEC1** — External links use `rel="noopener noreferrer"` when `target="_blank"` is set. Footer social links already do this correctly. Flag any new external links that skip the rel attribute.

**SEC2** — `@calcom/embed-react` is pinned to `^1.5.3`. Minor updates are auto-applied on reinstall. Be aware that Cal.com script updates could introduce new tracking or breaking changes. Consider pinning tightly in security-sensitive contexts.

**SEC3** — `CalEmbed.tsx` monkey-patches `Element.prototype.scrollIntoView` to suppress Cal's auto-scrolling. The patch is scoped to the container (`contains()` check) and properly restored on unmount (verified). Flag if cleanup logic is ever removed or the scope check is loosened.

**SEC4** — No `dangerouslySetInnerHTML` in source. In a static site with hardcoded content this should never appear. Flag immediately if found.

**SEC5** — No hardcoded secrets, API keys, or tokens in `src/`. Cal.com links are constants in `constants.ts` (not secrets). The Gmail address in Footer/Contact is public. No action needed unless new integrations are added.

**SEC6** — No `vercel.json` sets Content-Security-Policy headers. This is a future improvement, not a current blocker. Note it if it comes up in a full audit.

---

## 4. Performance

**P1** — Images in `public/` (logo, OG image, favicons) should use appropriate formats. SVG for the favicon (verified: `favicon.svg` exists). The OG image should be a compressed WebP or optimized PNG under 200KB.

**P2** — The Cal.com popup (`useCalPopup`) dynamically imports `getCalApi` only when the user clicks "Book a Call". This is already optimally lazy — no bundling the full Cal SDK at startup. Do not change this pattern.

**P3** — `CalEmbed` (the inline embed on Contact page) loads `@calcom/embed-react` eagerly on that route. This is acceptable since it is the page's primary purpose. If the embed is moved to other pages, consider lazy-loading it.

**P4** — No `console.log`, `console.warn`, or `console.error` left in production code. The empty `catch` block in `useCalPopup.ts` is intentional error handling, not a debug statement — leave it.

**P5** — Tailwind's `content` array in `tailwind.config.ts` covers `src/**/*.{ts,tsx}` (verified). Tree-shaking unused CSS classes is working. No action needed.

**P6** — Inter font: referenced as a font-family in `tailwind.config.ts`. Verify it is loaded via a `<link>` in `index.html` or `@import` in `index.css` with `font-display: swap` to avoid FOIT. If not loaded explicitly, the browser falls back to system-ui.

**P7** — Static data arrays (service cards, nav links, etc.) defined outside component functions avoid object re-creation on each render. `navLinks` in Header.tsx is already outside the component (correct). Flag any new arrays defined inside a function body when they could be constants.

---

## 5. Component Structure & Composition

**C1** — Every page rendered in `App.tsx` should use `<Layout>` for consistent header/footer. The NotFound page intentionally skips Layout (full-screen 404). Flag any other page that skips it.

**C2** — Shadcn/ui primitives in `src/components/ui/` should not be directly edited for project-specific changes. Customize via props, composition, or `tailwind.config.ts` theme extension. This makes future `shadcn` updates easier.

**C3** — Custom components go in `src/components/`. Page-level components go in `src/pages/`. Hooks in `src/hooks/`. Utilities in `src/lib/`. Maintain this separation when adding files.

**C4** — Components that accept forwarded refs or need to compose with Radix primitives should use `asChild` pattern via Radix Slot, not wrap `<Link>` inside `<Button>` (invalid HTML nesting). Already used correctly in existing code.

**C5** — Props interfaces use `interface` for component props (consistent with `CalEmbedProps`). Type aliases are used for data shapes. Maintain this convention.

**C6** — Page components should stay under ~200 lines. Larger pages (About.tsx at 334 lines) are candidates for extracting named section components. Flag new pages added at over 200 lines.

---

## 6. TypeScript

**T1** — No `any`. If the type is genuinely unknown, use `unknown` with narrowing. Type assertions (`as Foo`) are acceptable only when the type is provably correct at that call site.

**T2** — No `React.FC` or `React.FunctionComponent`. Use standard function declarations or arrow functions with typed props parameters. Existing codebase is consistent on this.

**T3** — Event handlers use React's synthetic event types (`React.MouseEvent<HTMLButtonElement>`, etc.). Not `Event`, not `any`.

**T4** — `import type` for type-only imports (already used in `tailwind.config.ts`). Avoids unnecessary runtime imports.

**T5** — Default prop values go in the function signature destructuring, not via `defaultProps` (deprecated pattern).

**T6** — The ESLint config sets `@typescript-eslint/no-unused-vars` to off. This means dead code won't be flagged automatically. During review, check for imported components or utility functions that are never referenced in the file.

---

## 7. Tailwind CSS

**TW1** — Conditional class merging uses `cn()` from `@/lib/utils` (clsx + tailwind-merge). Never concatenate class strings manually — tailwind-merge resolves conflicting utilities, string concatenation does not.

**TW2** — Layout is mobile-first. Default classes apply to small screens; `md:` and `lg:` prefixes apply to larger screens. Flag any component that defaults to a desktop layout and wraps it with `sm:` or smaller.

**TW3** — Colors use semantic tokens from the shadcn theme: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, etc. Hard-coded colors like `bg-white` or `text-gray-700` break in dark mode and should use semantic equivalents.

**TW4** — Spacing and sizing use Tailwind scale values. Arbitrary values (`[32px]`, `[18px]`) are acceptable only for one-off layout constraints with no matching scale step. Flag arbitrary values that duplicate standard steps (e.g., `[16px]` instead of `4`).

**TW5** — All page sections use the `container` class for horizontal containment (configured with `center: true`, `padding: "2rem"`, `max-width: 1200px`). Content that bleeds outside the container is intentional (e.g., full-bleed background sections) — flag it only if it looks unintentional.

**TW6** — No `outline-none` without a replacement focus style. Removing outlines without `focus-visible:ring-*` breaks keyboard accessibility.

**TW7** — `animate-fade-in` is used throughout Index.tsx with `animationDelay` inline styles. These inline `style` props are acceptable here since animation delay values require dynamic calculation or are too specific for the Tailwind scale. No action needed unless the pattern spreads to non-animation styling.

---

## 8. React Router

**RR1** — Internal navigation uses `<Link to="...">` not `<a href="...">`. The `<a>` tag causes a full page reload in an SPA. Footer.tsx and all page components already use `<Link>` correctly (verified).

**RR2** — The catch-all `<Route path="*" element={<NotFound />} />` is the last route in `App.tsx` (verified). Keep it last.

**RR3** — Hash navigation (`/services#consulting`) works via `ScrollToTop` reading `useLocation().hash`. Any new hash target needs a matching `id` attribute on the element. Also ensure `scroll-mt-16` (or equivalent) is set to offset the sticky header height.

**RR4** — Active nav link styling uses exact `location.pathname === link.href` match. Sub-routes like `/services/consulting` do not highlight the "Services" nav item. This is a known behavior — decide if `startsWith` matching is preferred. Flag if new pages are added that create an inconsistent active state.

**RR5** — The NotFound page uses `<a href="/">` (a full reload). This is defensible as intentional (clean state after 404) but worth noting.

**RR6** — `<NavLink>` from react-router-dom is not used — active state is derived manually via `useLocation`. Both approaches are valid. If the nav component is refactored, `NavLink` with `className` callback is the idiomatic pattern.

---

## 9. Code Quality

**Q1** — No commented-out code. Dead code blocks should be deleted, not commented. If a block is intentionally deferred, add a `// TODO:` comment with a reason.

**Q2** — No `console.log` or debug output in production code paths. The `catch {}` in `useCalPopup.ts` is intentional silent fallback — leave it.

**Q3** — File naming: page files are PascalCase (`About.tsx`), hook files are camelCase with `use` prefix (`useTheme.ts`), utility files are camelCase (`utils.ts`). Shadcn/ui files in `components/ui/` are lowercase (`button.tsx`) — that is the shadcn convention, leave it.

**Q4** — All imports from `src/` use the `@/` alias. No relative paths like `../../components/`. This is enforced by the existing codebase pattern.

**Q5** — The Medium SVG icon is inlined in `Footer.tsx`. If it appears in other components, extract to a shared `MediumIcon` component or a constant in a shared icons file.

**Q6** — Repeated literal strings (Cal.com links, email address) should be centralized. Cal links are already in `constants.ts`. Email `cmin764@gmail.com` appears in at least Footer and Contact — consider adding it to `constants.ts` as `CONTACT_EMAIL`.

**Q7** — `bun run check` (tsc --noEmit + eslint) should pass cleanly. If it does not, those errors take priority over any finding in this review. Report them at the top and stop reviewing until they are resolved.
