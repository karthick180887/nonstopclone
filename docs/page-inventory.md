# Page Inventory — Nonstop Drop Taxi Clone

**Production URL base:** https://www.nonstopdroptaxi.com/  
**Clone base:** `SITE.url` in `lib/site-data.ts` (default `http://localhost:3088`)

## Static pages

| Original URL | Clone route | Page title (approx) | Main sections |
|--------------|-------------|---------------------|---------------|
| `/` | `/` | One Way Drop Taxi \| Nonstop Drop Taxi | Hero+booking, pricing, routes, vehicles, cities, why us, destinations, route groups, process, testimonials, FAQ, CTA |
| `/about` | `/about` | About Us | Hero, company story, values, CTA |
| `/contact` | `/contact` | Contact | Contact cards, map area, booking CTA |
| `/services` | `/services` | Services | Service cards, CTA |
| `/fleet` | `/fleet` | Fleet | Vehicle grid with specs |
| `/pricing` | `/pricing` | Pricing / Tariff | Vehicle rates, trip types |
| `/pricing` | `/tariff` | (redirect) | → `/pricing` |
| `/booking` | `/booking` | Book Taxi | Full booking form |
| `/one-way-taxi` | `/one-way-taxi` | One Way Taxi | Service explainer, routes, FAQ |
| `/faq` | `/faq` | FAQ | Accordion FAQs |
| `/blog` | `/blog` | Blog | Post list |
| `/privacy-policy` | `/privacy-policy` | Privacy Policy | Legal text |
| `/terms-of-service` | `/terms-of-service` | Terms of Service | Legal text |
| `/terms-of-service` | `/terms-and-conditions` | (redirect) | → `/terms-of-service` |
| `/gk-web-designs` | `/gk-web-designs` | GK Web Designs | Credit page |

## Dynamic route pages (23)

Pattern: `https://www.nonstopdroptaxi.com/{slug}` → `/{slug}`

| Slug | H1 pattern | Sections |
|------|------------|----------|
| chennai-to-madurai-taxi | Chennai to Madurai One Way Taxi | Hero, fare table, booking form, related routes, FAQ |
| chennai-to-coimbatore-taxi | … | Same template |
| chennai-to-salem-taxi | … | Same |
| chennai-to-trichy-taxi | … | Same |
| chennai-to-bangalore-taxi | … | Same |
| chennai-to-pondicherry-taxi | … | Same |
| chennai-to-vellore-taxi | … | Same |
| chennai-to-tirupati-taxi | … | Same |
| chennai-to-ooty-taxi | … | Same |
| chennai-to-kanchipuram-taxi | … | Same |
| coimbatore-to-ooty-taxi | … | Same |
| coimbatore-to-bangalore-taxi | … | Same |
| coimbatore-to-kodaikanal-taxi | … | Same |
| coimbatore-to-cochin-taxi | … | Same |
| madurai-to-rameswaram-taxi | … | Same |
| madurai-to-coimbatore-taxi | … | Same |
| madurai-to-kumbakonam-taxi | … | Same |
| bangalore-to-mysore-taxi | … | Same |
| bangalore-to-ooty-taxi | … | Same |
| trichy-to-madurai-taxi | … | Same |
| trichy-to-thanjavur-taxi | … | Same |
| salem-to-coimbatore-taxi | … | Same |
| salem-to-bangalore-taxi | … | Same |

**Layout notes:** Breadcrumbs on inner pages; mobile stacks fare + form vertically.

## City pages (42)

Pattern: `/city/{slug}` — see `lib/cities-data.ts` for full list.

**Sections:** City hero, one-way taxi copy, popular routes from city, booking CTA, contact buttons.

## Blog posts (12)

| Slug | Clone route |
|------|-------------|
| chennai-to-coimbatore-taxi-fare-distance | `/blog/chennai-to-coimbatore-taxi-fare-distance` |
| chennai-to-madurai-taxi-service-guide | `/blog/chennai-to-madurai-taxi-service-guide` |
| chennai-to-bangalore-one-way-taxi | `/blog/chennai-to-bangalore-one-way-taxi` |
| coimbatore-to-ooty-taxi-guide | `/blog/coimbatore-to-ooty-taxi-guide` |
| how-one-way-taxi-works | `/blog/how-one-way-taxi-works` |
| benefits-of-one-way-taxi | `/blog/benefits-of-one-way-taxi` |
| one-way-vs-roundtrip-taxi | `/blog/one-way-vs-roundtrip-taxi` |
| taxi-fare-calculation-guide | `/blog/taxi-fare-calculation-guide` |
| safe-taxi-travel-tips | `/blog/safe-taxi-travel-tips` |
| best-time-to-travel-tamil-nadu | `/blog/best-time-to-travel-tamil-nadu` |
| madurai-to-rameswaram-taxi-details | `/blog/madurai-to-rameswaram-taxi-details` |
| trichy-to-thanjavur-taxi-guide | `/blog/trichy-to-thanjavur-taxi-guide` |

## SEO (all pages)

- Implemented via `lib/seo.ts` + per-page `metadata` exports
- `app/sitemap.ts` — static + dynamic URLs
- `app/robots.ts` — allow all, sitemap reference
- JSON-LD: `LocalBusiness` / `TaxiService` in layout; FAQ on homepage

## Discovery notes

- Source `sitemap.xml` returned HTTP 500 during audit
- Routes extracted from Vite bundle + internal link crawl
- Total static pages at build: **~98** (including redirects)

## Forms & CTAs (site-wide)

| Location | Form / CTA |
|----------|------------|
| Homepage hero | BookingForm → WhatsApp + `/api/booking` mock |
| Route/city pages | Inline booking or WhatsApp |
| Header | Book Now → `/booking` |
| Floating | Call `tel:` + WhatsApp link |
