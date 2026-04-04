# wandercode

Portfolio site for WANDERCODE LIMITED. React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui, deployed on Vercel.

## Package Manager

Always use `bun`. Never npm or yarn.

```bash
bun install
bun dev
bun run build
bun run check   # tsc --noEmit + eslint — run before every commit
```

## Custom Skills

### `/frontend-review [full]`

Self-review skill for frontend code before merge.

- `/frontend-review` — reviews the diff of the current branch vs `main`
- `/frontend-review full` — audits the entire codebase

Covers: accessibility, SEO, security, performance, component structure, TypeScript, Tailwind CSS, React Router, and code quality. Rules are in `.claude/skills/frontend-review/references/checklist.md`.
