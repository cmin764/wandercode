# Wandercode

Portfolio website for **WANDERCODE LIMITED**: Fractional AI Product Strategist services targeting B2B startups.

**Positioning:** RaaS (Results as a Service): delivering outcomes, not billing hours.

## Tech Stack

- **Framework:** React 19 + TypeScript 6
- **Build:** Vite 8
- **Styling:** Tailwind CSS 4 + shadcn/ui components
- **Routing:** React Router DOM
- **Package Manager:** bun

## Prerequisites

- [bun](https://bun.sh)

## Getting Started

```bash
# Install dependencies
bun install

# Start development server (http://localhost:8080)
bun dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Development server with hot reload |
| `bun run build` | Production build |
| `bun run preview` | Preview production build locally |
| `bun run test` | Vitest route metadata checks |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | TypeScript type checking |
| `bun run check` | Typecheck + lint + tests (run before every commit) |

## Site Flow

```mermaid
flowchart LR
    Home --> Services --> Detail["Service Detail"]
    Home --> About
    Home & Services & About & Detail -->|Book a Call btn| Book(["Discovery Call"])
    Services & Detail -->|Contact link| Contact -->|inline embed| Book

    style Book fill:#000,color:#fff
```

## Pages Overview

| Page | Purpose |
|------|---------|
| **Home** | Hero with value prop, services preview, trust signals |
| **Services** | Three offerings: Consultancy, AI Development, Workshops |
| **About** | Background, expertise grid, "Why Fractional?" |
| **Contact** | Cal.com embed, email, LinkedIn, company details |

## Deployment

Hosted on **Vercel** at [wandercode.ltd](https://wandercode.ltd). Every push to `main` triggers a production deployment automatically.

## Company

**WANDERCODE LIMITED**
Hong Kong

## License

All rights reserved, public for reference only. See [LICENSE](./LICENSE).
