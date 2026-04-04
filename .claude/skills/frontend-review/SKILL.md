---
name: frontend-review
description: Review frontend code for accessibility, performance, SEO, security, and code quality. Use when self-reviewing changes before merge, or auditing the full codebase. Covers React 18, Vite, Tailwind, shadcn/ui, React Router, and Cal.com embed patterns specific to the wandercode project.
argument-hint: [full]
allowed-tools: [Read, Glob, Grep, Bash]
---

# Frontend Review

Self-review of the wandercode React site before merge.

## Mode Detection

- `$ARGUMENTS` is empty: **diff mode** — review only files changed on the current branch
- `$ARGUMENTS` is `full`: **full mode** — audit the entire codebase

## Step 1: Gather Code

### Diff mode

Run `git diff main...HEAD --name-only -- '*.tsx' '*.ts' '*.css' '*.html' 'tailwind.config.ts'` to list changed files.

If the list is empty (already on main, or no TypeScript/CSS changes), fall back to `git diff HEAD~1 --name-only` to catch the last commit.

Then run `git diff main...HEAD -- '*.tsx' '*.ts' '*.css' '*.html' 'tailwind.config.ts'` to get the full patch content.

Also Read the full content of each changed file (diff context alone is not enough for structure and a11y checks). Additionally always read `src/App.tsx` and `index.html` for cross-cutting checks (routing completeness, meta tags), even if they didn't change.

### Full mode

Use `Glob("src/**/*.{tsx,ts}")` to enumerate source files. Read every file, plus `index.html`, `tailwind.config.ts`, `src/index.css`.

## Step 2: Apply Checklist

Read `.claude/skills/frontend-review/references/checklist.md`.

Evaluate every rule against the gathered code. For diff mode, focus findings on changed files, but still check cross-cutting rules (routing, Layout wrapping, meta tags) by reading related files when a change could affect them.

Skip rules that `bun run check` (tsc + eslint) already catches automatically — those take priority and should be fixed first. If type errors or lint errors are present, note them at the top of the report and stop there.

## Step 3: Produce Report

Use the format below. Skip categories entirely if there are no findings. Order categories by priority as defined in the checklist.

For each finding:
- **File**: path from repo root
- **Line**: line number or range
- **Rule**: rule ID from checklist (e.g. `A3`, `S1`)
- **Issue**: what is wrong and why it matters
- **Fix**: concrete suggestion

Label each finding as **critical** (affects users: a11y, security, broken behavior) or **suggestion** (code quality, nice-to-have improvements).

---

## Output Template

```
## Frontend Review — [diff | full]

Branch: `<branch>` vs `main`
Files reviewed: <n>

---

### <Category> (n findings / PASS)

#### [Short finding title] · critical|suggestion
- **File**: `path/to/file.tsx` L<line>
- **Rule**: <ID>
- **Issue**: <description>
- **Fix**: <suggestion>

---

### Summary

| Category | Result |
|---|---|
| Accessibility | PASS / n findings |
| SEO & Meta | PASS / n findings |
| Security | PASS / n findings |
| Performance | PASS / n findings |
| Component Structure | PASS / n findings |
| TypeScript | PASS / n findings |
| Tailwind CSS | PASS / n findings |
| React Router | PASS / n findings |
| Code Quality | PASS / n findings |

**Verdict**: PASS / NEEDS ATTENTION — <n> critical, <n> suggestions
```
