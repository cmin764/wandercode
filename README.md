# Wandercode

Portfolio website for **WANDERCODE LIMITED** — Fractional AI Product Engineer services targeting B2B startups.

**Positioning:** RaaS (Results as a Service) — delivering outcomes, not billing hours.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite with SWC
- **Styling:** Tailwind CSS + shadcn/ui components
- **Routing:** React Router DOM
- **Package Manager:** bun (npm compatible)

## Prerequisites

- [bun](https://bun.sh) (recommended) or Node.js 18+ with npm

## Getting Started

```bash
# Install dependencies
bun install

# Start development server (http://localhost:8080)
bun dev
```

<details>
<summary>Using npm instead</summary>

```bash
npm install
npm run dev
```

</details>

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Development server with hot reload |
| `bun run build` | Production build |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | TypeScript type checking |
| `bun run check` | Run both typecheck + lint |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   └── ui/              # shadcn/ui components
├── lib/                 # Utilities
├── pages/
│   ├── Index.tsx        # Home - hero, services preview, CTAs
│   ├── Services.tsx     # Service offerings detail
│   ├── About.tsx        # Background, expertise, philosophy
│   ├── Contact.tsx      # Calendly booking, contact info
│   └── NotFound.tsx     # 404 page
├── App.tsx              # Routes and providers
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## Pages Overview

| Page | Purpose |
|------|---------|
| **Home** | Hero with value prop, services preview, trust signals |
| **Services** | Three offerings: Consultancy, AI Development, Workshops |
| **About** | Background, expertise grid, "Why Fractional?" |
| **Contact** | Calendly embed, email, LinkedIn, company details |

## Deployment

Hosted on **Vercel** at [wandercode.ltd](https://wandercode.ltd). Every push to `main` triggers a production deployment automatically.

## Company

**WANDERCODE LIMITED**
Hong Kong

## License

Private — not for redistribution.
