---
name: ip-sync
description: Re-review the /ip Background IP register at wandercode.ltd against its source repos after they change, and publish a new timestamped version. Use before signing any new client contract, after merging a PR in a source repo, or when the user says "sync the IP register", "check for IP register drift", or "/ip-sync".
allowed-tools: [Read, Glob, Grep, Bash, Edit, Write]
---

# IP Register Sync: Wandercode

Keeps `src/pages/BackgroundIp.tsx` honest against the repos it derives from.
Self-contained: the baseline lives in the page, the screening data lives in
the private `ai-tools` repo. No external file is needed.

## Step 1: Baseline

Read the last `changelog` row in `src/pages/BackgroundIp.tsx`. Its `sources`
map holds the last-reviewed commit per repo.

## Step 2: Diff

Sibling checkouts under `~/Work/cmin764/` (fetch first). For each repo,
`git log <hash>..origin/main --oneline`:

- Full sources: `ai-tools`, `configs`, `cmin764`, `wandercode`, `portfolio`.
- Hash-only: `NoMoreApply/services` (cite commits and dates, never content).
- Never a source: `Traced-AI`.

If a baseline hash is gone from `main` (squash merge), match it by the manifest's
tree hashes (`git rev-parse <commit>:<dir>`) instead.

All empty: report "no drift since <version>" and stop. Edit nothing.

## Step 3: Screen every new commit

1. **Banned terms.** Run `ai-tools/scripts/check-banned-terms.sh` over the diff.
   A hit excludes the commit; flag it, never include it.
2. **Engagements.** Compare the commit date and touched domains with
   `ai-tools/background-ip/ENGAGEMENTS.md`. A commit inside an engagement's
   window that touches its domains is excluded and flagged.
3. **Diff read.** Generic methodology or tooling is a candidate. Anything
   naming a client system, dataset or workflow is excluded.

Never guess a commit into "fine".

## Step 4: Classify

Per surviving change: extends an existing An item, new candidate item,
personal tooling (B), third-party use (E), or skip. Record the earliest date
with `git log --follow --diff-filter=A`.

## Step 5: Consistency audit (every run, even on no drift)

- Each A-id has a file in `ai-tools/background-ip/`, and each page card maps
  to A-ids.
- No page link points at a private repo (`gh api repos/<owner>/<repo> --jq .private`).
- Licences named on the page match the repos' LICENSE files.
- No "pending" SHA-256 left in `EVIDENCE.md`.

## Step 6: Propose, then wait

Draft the `background-ip/` and `EVIDENCE.md` edits, the page data, and a new
changelog row with a `sources` map. Show it and wait for explicit approval.

## Step 7: After approval

1. Commit and tag each source repo with its own next semver (`git tag -l --sort=-v:refname`).
2. Write `public/ip/vX.Y-manifest.txt`: repo, tag, commit, date per line, then the
   `ai-tools` tree hashes (`git rev-parse <commit>:<dir>` for `background-ip`,
   `how-we-work`, `dev-workflow`), which Step 2 relies on after a squash merge.
3. `ots stamp public/ip/vX.Y-manifest.txt`. Remind Cosmin to run `ots upgrade`
   a few hours later and commit the upgraded `.ots`.
4. Update the page, then `bun run check` and `bun run build`.
5. Grep `BackgroundIp.tsx` with the script's client pattern (the script itself scans
   the whole repo and trips on the consented About/Index credits):
   `grep -inE "$(sed -n '/^CLIENT_BANNED=(/,/^)/p' ../ai-tools/scripts/check-banned-terms.sh | grep -o '"[^"]*"' | tr -d '"' | paste -sd"|" -)" src/pages/BackgroundIp.tsx`
6. Report the version and manifest hash.
