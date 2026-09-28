---
name: ip-sync
description: Re-review the /ip Background IP register at wandercode.ltd against its source repos (ai-tools, configs, cmin764) after they change. Use before signing any new client contract, or whenever the user says "sync the IP register", "check for IP register drift", or "/ip-sync".
allowed-tools: [Read, Glob, Grep, Bash, Edit, Write]
---

# IP Register Sync: Wandercode

Keeps `src/pages/BackgroundIp.tsx` honest against the repos it's derived from,
without re-deriving the whole register from scratch each time.

## Step 1: Find the last-reviewed state

Read the last row of the `changelog` array in `src/pages/BackgroundIp.tsx`.
Its `tag` field names the `ai-tools` tag reviewed last (a normal semver tag,
e.g. `v1.1.0`). Clone or fetch `ai-tools`, `configs`, and `cmin764` locally if
not already present as siblings, and resolve that tag to a commit in
`ai-tools`. Each of `configs` and `cmin764` has its own independent semver
history (these are the repos' normal version tags, not register-specific);
find the tag in each that was created at the same time as the `ai-tools` tag
above (matching commit date, or check the EVIDENCE.md cross-repo evidence
table) and use that as each repo's own last-reviewed point.

## Step 2: Diff since then

For each of the three repos: `git log <last-reviewed-tag>..HEAD --oneline`.
If all three come back empty, report "no drift since <version>" and stop.
Nothing gets edited on a no-drift result.

## Step 3: Screen every new commit

For each new commit, in order:

1. **Banned terms.** Run `ai-tools/scripts/check-banned-terms.sh` (it already
   covers all three repos' shared denylist pattern) against the diff. Any
   client or employer name found excludes that commit; never include it,
   flag it to Cosmin instead.
2. **Active-engagement window.** Cross-check the commit date against the
   private register at the path Cosmin keeps outside every repo (ask him for
   it if not already known; never assume a path). A commit inside an active,
   undisclosed engagement's window that also touches that engagement's
   subject matter is excluded, flagged, never guessed into "fine."
3. **Subject matter.** Read the actual diff. Generic tooling/methodology
   changes are candidates for inclusion; anything naming a client-specific
   system, dataset, or workflow is excluded regardless of the date check.

## Step 4: Propose, don't apply

For everything that survives Step 3, draft:

- Any new or changed `licensedMethods` entries (name, one-paragraph public
  description, evidence date) for `BackgroundIp.tsx`.
- A new `changelog` row: next register version number, today's date, a
  one-line plain summary, and the `ai-tools` tag to be created.
- The matching entries for `ai-tools/background-ip/EVIDENCE.md` if the new
  evidence needs a label.

Show this diff to Cosmin and wait for explicit approval. Never publish
unapproved changes.

## Step 5: After approval

1. In `ai-tools` (and `configs`/`cmin764` if either has new reviewable
   content): commit, then tag with each repo's own next free semver tag
   (check `git tag -l --sort=-v:refname` first; these repos keep their own
   version history, so never assume the next register version number is
   also the next repo tag number).
2. Update `BackgroundIp.tsx` with the approved content and push the tag
   references.
3. Run `bun run check` and `bun run build` in `wandercode`.
4. Run `ai-tools/scripts/check-banned-terms.sh` against `BackgroundIp.tsx`
   itself (copy or symlink the script's pattern; it does not need to live in
   this repo to apply the same regex to this one file).
5. Report the new version and tag to Cosmin. Committing and pushing the
   wandercode side follows the same commit/PR conventions as any other
   change to this repo.
