---
name: frontend-review
description: Review frontend code for accessibility, performance, SEO, security, and code quality. Use when self-reviewing changes before merge, or auditing the full codebase. Covers React 19, Vite 8, Tailwind, shadcn/ui, React Router 7, and Cal.com embed patterns specific to the wandercode project.
argument-hint: [full]
allowed-tools: [Read, Glob, Grep, Bash]
---

# Frontend Review — Wandercode

Self-review of the wandercode React site before merge.

## Mode detection

- `$ARGUMENTS` is empty: **diff mode** — review only files changed on the current branch vs `main`
- `$ARGUMENTS` is `full`: **full mode** — audit the entire codebase

---

## Step 1: Verify CI passes first

Run `bun run check` (tsc --noEmit + eslint). If it fails, report the errors at the top and stop — fix those before continuing. Type errors and lint errors take priority over every finding in this review.

---

## Step 2: Gather code

### Diff mode

Run `git branch --show-current` to get the current branch name.

Run `git diff main...HEAD --name-only -- '*.tsx' '*.ts' '*.css' '*.html' 'tailwind.config.ts'` to list changed files. If the list is empty and you are on a branch other than `main`, fall back to `git diff HEAD~1 --name-only` to catch the last commit. If already on `main` with no changed files, stop and report: "No diff found — run this skill on a feature branch, or use `/frontend-review full` to audit the entire codebase." Do not silently review HEAD~1 on main.

Run `git diff main...HEAD -- '*.tsx' '*.ts' '*.css' '*.html' 'tailwind.config.ts'` for the full patch content.

Read the **full content** of each changed file — the diff alone is not enough for structure and a11y checks. Also always read these cross-cutting files even if not in the diff:
- `src/App.tsx` (routing completeness, Layout wrapping)
- `index.html` (meta tags, canonical, lang)

### Full mode

Use `Glob("src/**/*.{tsx,ts}")` to enumerate all source files. Read every file, plus `index.html`, `tailwind.config.ts`, `src/index.css`.

---

## Step 3: Apply the checklist

Read `.claude/skills/frontend-review/references/checklist.md`.

Evaluate every rule against the gathered code. In diff mode, focus findings on changed files but still apply cross-cutting rules (routing, Layout wrapping, meta tags) by reading related files when a change could affect them.

---

## Step 4: Classify findings

Every finding goes into one of three tiers:

**🔴 Critical** — must fix before merge: runtime errors, security issues, broken a11y, broken behavior, data exposure.

**🟡 Important** — should fix before merge: type safety gaps, performance regressions, significant convention violations.

**🔵 Suggestion** — optional: readability, minor inefficiencies, style nits.

For each finding include:
- **File**: path from repo root
- **Line**: line number or range
- **Rule**: rule ID from checklist (e.g. `A3`, `S1`)
- **Issue**: what is wrong and why it matters
- **Fix**: concrete suggestion

Drop findings below 80% confidence. Mark borderline cases *(low confidence)*.

---

## Step 5: Summary report

Use the output template below. Skip categories with no findings. Order categories by priority as defined in the checklist.

After the report, apply fixes for all 🔴 Critical findings using the Edit tool. State what changed and why. Do not touch Important or Suggestion items unless explicitly asked.

---

## Output template

```
## Frontend Review — [diff | full]

Branch: `<branch>` vs `main`
Files reviewed: <n>

---

### <Category> (<n> findings | PASS)

#### [Short finding title] · 🔴 critical | 🟡 important | 🔵 suggestion
- **File**: `path/to/file.tsx` L<line>
- **Rule**: <ID>
- **Issue**: <description>
- **Fix**: <suggestion>

---

### Summary

| Category           | Result              |
|--------------------|---------------------|
| Accessibility      | PASS / n findings   |
| SEO & Meta         | PASS / n findings   |
| Security           | PASS / n findings   |
| Performance        | PASS / n findings   |
| Component Structure| PASS / n findings   |
| TypeScript         | PASS / n findings   |
| Tailwind CSS       | PASS / n findings   |
| React Router       | PASS / n findings   |
| Code Quality       | PASS / n findings   |

**Verdict**: ✅ Ready to merge | ⚠️ Needs attention | 🚫 Block merge
<n> critical · <n> important · <n> suggestions
```
