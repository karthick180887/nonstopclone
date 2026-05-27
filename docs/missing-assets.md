# Missing Assets

Assets that could not be downloaded or are not yet mapped in the clone.

## Download failures

None — all 32 assets in `scripts/download-results.json` returned `ok: true`.

## Not yet localized

| Item | Notes |
|------|--------|
| Social profile images | External links only (Facebook, Instagram) — no local copies needed |
| Google Maps embed | Contact page may use iframe — not an image asset |
| Per-city unique photos | City pages reuse generic hero/banner; original may use same pattern |

## Optional enhancements (not blocking)

| Asset | Reason |
|-------|--------|
| Input field icons (MapPin, Calendar, User) | Original booking form may use Lucide-style icons — clone uses plain inputs |
| Open Graph image dedicated | Clone reuses `nonstop-hero.avif` |
| Blog post featured images | Blog list uses text-only cards unless added later |

## Action if assets break

1. Re-run: `node scripts/download-assets.js`
2. Re-run: `node scripts/organize-assets.js`
3. Verify paths in `lib/site-data.ts` use `/assets/` not `/source-assets/`
