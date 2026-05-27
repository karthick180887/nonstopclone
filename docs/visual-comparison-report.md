# Visual Comparison Report

**Date:** 2026-05-27  
**Original:** https://www.nonstopdroptaxi.com/  
**Clone:** http://localhost:3088 (dev)

## Method

Manual code audit + prior Playwright sessions. Automated screenshot pairs recommended:

```bash
npm run dev
# In separate terminal (if Playwright configured):
# Compare homepage, about, contact, services, booking at 1440px and 390px
```

Screenshots directory (when captured): `.playwright-mcp/` or `docs/screenshots/`

## Matching items

- Header: green top bar, yellow border, logo + tagline, nav order, Book Now gradient
- Promo ticker below header (marquee)
- Hero dark background, green accent headline, dual CTAs
- Booking form field order and trip-type cards
- Pricing One Way / Round Trip toggle with 5 vehicles
- Footer columns, phone, WhatsApp, route links
- Floating call + WhatsApp buttons (bottom-right)
- Brand colors `#0B6B2E`, `#1FAE4B`, `#FFC107`, `#0F172A`
- Homepage section order (15 sections + footer)

## Differences found

| Area | Original | Clone | Severity |
|------|----------|-------|----------|
| Booking form icons | Icon prefixes on inputs | Text-only inputs | Low |
| Blog body | Long-form HTML content | Summary + FAQ blocks | Medium |
| metadataBase | Production domain | Set to `SITE.url` in layout | Fixed |
| URL aliases | N/A | `/tariff`, `/terms-and-conditions` redirects | N/A (intentional) |
| Font | System sans | System sans (match) | — |

## Mobile issues addressed

- Trip type cards: fixed white-on-white text (`text-gray-900` on form)
- Header hamburger: `MobileMenu.tsx` drawer
- Hero stacks: form below copy on `< lg`

## Remaining issues

1. Pixel-perfect spacing on pricing vehicle grid at 360px — verify in browser
2. Blog posts need full article HTML if 1:1 content parity required
3. Run Playwright screenshot diff for quantitative QA

## Fixes applied this session

- `metadataBase` in `app/layout.tsx`
- `/tariff` and `/terms-and-conditions` redirect routes
- ESLint: removed unused imports in `HeroSection`, `HomeSections`
- Documentation pack (`/docs/*.md`)

## Build status

Run `npm run build` — expected pass with ~98 static pages.
