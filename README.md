# Wandercode

Portfolio website for **WANDERCODE LIMITED** — Fractional AI Product Engineer services targeting B2B startups.

**Positioning:** RaaS (Results as a Service) — delivering outcomes, not billing hours.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite with SWC
- **Styling:** Tailwind CSS + shadcn/ui components
- **Routing:** React Router DOM

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   └── ui/              # shadcn/ui components
├── hooks/               # Custom React hooks
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

Static site — deploy to any static hosting provider.

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — zero configuration needed
4. Every push to `main` triggers deployment

### Netlify

1. Push code to GitHub
2. Import at [app.netlify.com](https://app.netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual

```bash
npm run build
# Upload ./dist to any static host
```

## Environment Variables

Optional. Copy `.env.example` to `.env` if needed:

```bash
cp .env.example .env
```

Variables prefixed with `VITE_` are exposed to the client.

## Customization Checklist

Before going live:

- [ ] Update Header logo/name (`src/components/layout/Header.tsx`)
- [ ] Add real contact info (`src/pages/Contact.tsx`)
- [ ] Integrate Calendly embed
- [ ] Update Footer links (`src/components/layout/Footer.tsx`)
- [ ] Add favicon and meta tags (`index.html`)
- [ ] Add Open Graph tags for social sharing

See `docs/website-plan.md` for detailed content plan and todos.

## Company

**WANDERCODE LIMITED**
Hong Kong

## License

Private — not for redistribution.
