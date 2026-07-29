# Palm Jebel Ali — Page Factory runbook

Autonomous daily procedure that generates **up to 5 new content pages** from the
curated backlog, wires them, builds, fact-checks, deploys, and verifies.
**Stops cleanly when the backlog is exhausted.** Auto-publishes to production
(no human review) — so the fact-discipline below is non-negotiable.

Project: `/Users/zoop/palm-jebel-ali` (Next.js, Vercel). Live: `https://www.jebelalipalmdubai.com`.

## Guardrails (MOST IMPORTANT)
- **Numbers:** use ONLY values from `lib/content/palm-facts.ts` (FACTS, COLLECTIONS, HANDOVER). Never invent prices, sizes, yields, %, dates, counts, or specs.
- **Pre-handover honesty:** nothing is completed. No live rents/yields; service charges not published; "from" prices only; handover dates hedged ("around/toward").
- **Competitors / tax / visa / legal:** keep qualitative and hedged ("confirm current rules / seek advice"). Never invent a competitor's prices or a jurisdiction's tax figures.
- **No fabricated proper nouns:** no invented hotel/school/restaurant/golf/marina names.
- If a page can't be written honestly from available facts, **skip it** and note why.

## Steps

1. **Scope.** Run `node scripts/pending.mjs 5`. If `exhausted` is true → do nothing, report "backlog exhausted", STOP. Otherwise take the `next` array (≤5 items).

2. **Draft (parallel).** For EACH item, spawn a `general-purpose` subagent (run them in parallel). Build the prompt from the item using the template below. All items in this backlog use the guide template unless a `template` field says otherwise.

3. **Verify files exist.** Confirm each `lib/content/<file>.ts` was written and exports the named const.

4. **Wire (deterministic).** Run `node scripts/gen-registry.mjs`. This regenerates `lib/content/registry.ts` from the content files — do NOT hand-edit the registry. The sitemap reads the registry automatically.

5. **Build.** `npm run build`. If it fails, read the error, fix the offending content file(s), rebuild. Do not proceed until green.

6. **Fact-check scan.** Run:
   `grep -rhoE "AED [0-9][0-9.]*\s?(million|M|billion)|[0-9]+(\.[0-9]+)?%" lib/content/guides/<each new file>.ts | sort | uniq -c`
   Only these are allowed: AED 2M / 2.5M / 18.5M / 30M; 20% / 60% / 80% (payment plan); 4% (DLD, must be hedged in prose); 50%/55% (imagePosition CSS). Anything else → open the file, remove/fix the fabricated figure, rebuild.

7. **Deploy.** `git add -A && git commit && git push origin main`. Commit message: `feat(cluster): page factory — <N> pages (<slugs>)` with the Co-Authored-By trailer.

8. **Verify deploy** (per workspace rules). Poll Vercel until the pushed SHA is `READY` (wait ~2 min, check; if building, 2 more min, check again). Then `curl -s -o /dev/null -w "%{http_code}"` each new URL — all must be 200. If any isn't, fetch logs, fix, redeploy.

9. **Report.** One line per page shipped + running totals (built / pending) from `pending.mjs`. Save nothing to state — "built" is derived from file existence, so the next run naturally continues.

## Subagent prompt template
> Write ONE content data file for the Palm Jebel Ali microsite (Next.js/TS at `/Users/zoop/palm-jebel-ali`).
> FIRST read: `lib/content/types.ts`, `lib/content/palm-facts.ts`, and the exemplar `lib/content/guides/palm-jebel-ali-investor-guide.ts` (for guides) or `lib/content/intent/offplan-palm-jebel-ali.ts` (for hub-style pages).
> THEN write `lib/content/<FILE>.ts` exporting `export const <EXPORT>: GuideContent = { ... }` (or `HubContent` for hub-style).
> TOPIC/ANGLE: `<ANGLE>`
> META: slug `<SLUG>`, title `<TITLE>`, description `<DESCRIPTION>`, keywords `<KEYWORDS>`, ogImage `IMG.<IMAGE>`, datePublished/dateModified "<TODAY, from args>".
> Include `atAGlance`, varied blocks, 5–6 FAQs, and these 3 `related` links: `<RELATED>`. CTA interest appropriate to the topic.
> RULES: ~1,300–1,800 words, unique editorial writing (do NOT copy the exemplar or binayah.ae). HONESTY: `<FACTNOTES>`. Use ONLY palm-facts numbers. Import exactly like the exemplar.
> Verify it type-checks: `cd /Users/zoop/palm-jebel-ali && npx tsc --noEmit 2>&1 | grep -i "<FILE basename>" || echo clean`. Fix only your file. Report path + word count.

Pass today's date in via the run (dates are frozen in scripts) — use the date from the run context for datePublished/dateModified.

## Topping up
When the backlog empties, add more vetted items to `scripts/content-backlog.json` (same shape). Keep each genuinely distinct and honestly writable — do NOT pad with thin/duplicate topics (Google penalises scaled content). Quality gate over volume, always.
