# Post-Mortem: Evergreen Guide Content Regression

**Date:** September 28, 2026
**Severity:** High — user-visible content loss on 10 pages
**Detected by:** Christian Wutz, after design review of live guides
**Resolved in:** commit `f7d92f1`
**Duration exposed:** approximately 1 day (introduced `1003b5f` on Sep 28, resolved same day)

---

## Summary

Ten evergreen guide pages on logicagencyinc.com had large portions of
their body content silently dropped from the rendered HTML. The
underlying guide data was intact in `lib/evergreen-guides.js`, but the
shared React renderer stopped supporting the block-based content
schema those guides use. Headings such as "When Logic gets involved"
appeared on the page with no body content beneath them, and displayed
articles were a fraction of their stated read time.

## Impact

- 10 guides affected: `sustainable-packaging-cpg`,
  `distributor-onboarding-playbook`, `cpg-gross-margin-playbook`,
  `co-manufacturer-selection`, `cpg-demand-forecasting`,
  `cpg-broker-selection-playbook`, `co-manufacturer-contracts-risk`,
  `regional-to-national-retail-expansion`, `cpg-channel-economics`,
  `cpg-operations-kpis`.
- 76 sections across those guides carried body content in
  `section.blocks[]` that the renderer never emitted to HTML.
- 21 block types in use, 0 rendered.
- No content was lost from disk. No URLs changed. No search-visible
  redirects, canonicals, or schema regressed.

## Root Cause

A prior SEO remediation batch (commit `1003b5f`, "SEO audit
remediation: 18 fixes across 81 files") replaced
`components/EvergreenGuidePage.js` — a 525-line block-aware renderer
that supported all 21 block types the guide data uses — with a
123-line renderer that only understood a legacy shape
(`section.paragraphs`, `section.cards`, `section.steps`,
`section.table`, `section.callout`).

The guide content had already migrated to `section.blocks[]` in commit
`6db4316` ("Add interactive tabs, reveal cards, sticky TOC across 10
evergreen guides"). When the renderer was simplified, the two systems
silently diverged: the data walked one schema and the renderer looked
at another. Every block-based section resolved to zero output.

The two subsequent SEO batches (`dccb65b`, `37b56ca`) did not
introduce the regression, and the improvements they added — Article
schema image/logo, Person author, visible Key Takeaways, evidence
note, corrected heading semantics — are preserved in the fix.

## Why QC Did Not Catch It

- The build compiled and passed all type checks because the renderer
  is legal JavaScript operating on missing properties: `section.blocks
  ?? undefined` simply yielded no output.
- HTTP-level QC checked page reachability, schema presence, sitemap
  coverage, and title/H1 preservation. It did not compare the rendered
  block count to the source block count.
- Rendered word counts were not compared to declared read times.
- No visual comparison per block-family template was performed after
  the renderer change.

## Fix (commit `f7d92f1`)

1. Restored the full block-aware renderer, covering all 21 in-use
   block types plus `h3`: `p, h3, list, callout, cards, steps, table,
   econ, math, formula, checklist, redFlags, caseStudy, wired, cta,
   diagram, tabs, revealCards, stages, timeline, chips, example`.
2. Preserved the recent SEO improvements on top of the restored
   renderer:
   - Article schema now includes `image` from `guide.ogImage`,
     `publisher.url`, and `publisher.logo`.
   - `author` remains a Person with `jobTitle`.
   - HowTo schema auto-generation now scans `section.blocks` for
     `type: 'steps'` (the correct location) instead of the legacy
     `section.steps` field.
   - Visible Key Takeaways above the TOC.
   - Evidence-methodology note callout above the article.
   - Sticky TOC when `guide.stickyToc` is set.
   - Guide-level `ctaHeading`, `ctaCopy`, and audience block.
3. Added `scripts/verify-guide-render.mjs` and wired it as an
   `npm run prebuild` step. The script walks every entry in
   `evergreenGuides`, collects the set of block types in use, and
   fails the build if any block type is not implemented by the
   renderer. Also exposed as `npm run verify:guides` for local checks.

## Verification (post-deploy, against live site)

- All 10 evergreen guides render 1,700–3,400 words each. Previously
  most sections beyond the TL;DR block were blank.
- `sustainable-packaging-cpg` "When Logic gets involved" section: 263
  words of body content and a bulleted engagement list now visible.
  Previously: 0 words.
- Sitemap: 67/67 URLs still return HTTP 200.
- Homepage title and H1: unchanged.
- Legacy hand-authored guides (`retail-ready-packaging`,
  `packaging-cost-reduction`, etc.): unaffected — they do not import
  `EvergreenGuidePage`.
- `ops-team-without-hiring`: still 308 → `/guides/ai-for-cpg-operations`.
- Robots: `/_next/` block still absent.
- Fonts: still genuine WOFF2 with immutable caching.

## Prevention

- The `prebuild` hook now blocks any deployment that would leave block
  types unrendered. If a future edit adds a new block type without
  extending the renderer, `next build` fails immediately.
- Future changes to shared renderers should include a rendered-block
  count comparison, not only structural HTTP checks. A follow-up
  improvement would be to extend `verify-guide-render.mjs` to also
  compare source-block count vs. rendered-block count per URL for
  every guide.

## Timeline (relative to Sep 28, 2026)

- Earlier: commit `6db4316` migrated guide content to `blocks[]` and
  introduced the 525-line renderer.
- Sep 28: commit `1003b5f` reduced the renderer to 123 lines during an
  SEO remediation batch. Live guide bodies silently truncated.
- Sep 28: commits `dccb65b` and `37b56ca` added SEO improvements on
  top of the reduced renderer without triggering or catching the
  regression.
- Sep 28: user reported design inconsistencies and missing content.
- Sep 28: commit `f7d92f1` restored the full renderer, layered the
  intervening SEO improvements on top, and added the prebuild guard.

## Notes

- No guide slug, URL, canonical, sitemap entry, or public route
  changed at any point during the regression or the fix.
- The publisher logo URL uses `og-homepage.jpg` as a fallback until a
  dedicated `/images/logos/logic-agency.svg` asset is published.
