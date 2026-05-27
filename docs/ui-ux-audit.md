# UI/UX Audit — Nonstop Drop Taxi

**Source:** https://www.nonstopdroptaxi.com/  
**Clone:** Next.js 15 + TypeScript + Tailwind  
**Date:** 2026-05-27

## 1. Header structure

| Element | Original behavior | Clone status |
|---------|-------------------|--------------|
| Top social bar | FB, IG, X, WhatsApp + phone right-aligned | Implemented |
| Logo | `/nonstop-logo.avif`, ~75px height, with tagline | `/assets/logo/nonstop-logo.avif` |
| Nav items | Home, Company, Services, Fleet, Pricing, Contact | Match |
| Dropdown menus | None on main nav | N/A |
| Book Now CTA | Gradient pill, desktop only | Match |
| Sticky | `sticky top-0` | Match |
| Mobile hamburger | Slide-down menu + Book Now | `MobileMenu.tsx` |
| Promo ticker below header | Scrolling USPs + phone | `PromoTicker.tsx` |

## 2. Homepage sections (order)

1. Header + promo ticker  
2. Hero (dark bg, image overlay, H1, CTAs)  
3. Booking form (white card, right column on desktop)  
4. Pricing tabs (One Way / Round Trip toggle + 5 vehicles)  
5. Popular routes grid  
6. Vehicle fare by type (repeat cards + Call/WhatsApp)  
7. Featured cities  
8. Why choose us (4 columns)  
9. Destinations grid (images)  
10. Route groups (3 columns of lists)  
11. 4-step process  
12. Testimonials + stats  
13. FAQ accordion  
14. Contact CTA  
15. Footer  
16. Floating call + WhatsApp  

**Clone:** All sections present in `app/page.tsx` + `HomeSections.tsx`.

## 3. Inner pages

| Page | Original path | Clone path | Status |
|------|---------------|------------|--------|
| Home | `/` | `/` | Done |
| About | `/about` | `/about` | Done |
| Contact | `/contact` | `/contact` | Done |
| Services | `/services` | `/services` | Done |
| Fleet | `/fleet` | `/fleet` | Done |
| Pricing | `/pricing` | `/pricing` | Done |
| Tariff alias | — | `/tariff` → `/pricing` | Redirect |
| Booking | — | `/booking` | Done |
| One way taxi | `/one-way-taxi` | `/one-way-taxi` | Done |
| FAQ | `/faq` | `/faq` | Done |
| Blog index | `/blog` | `/blog` | Done |
| Blog posts | `/blog/[slug]` | `/blog/[slug]` | Done (12 posts) |
| Route pages | `/[slug]-taxi` | `/[slug]` | Done (23 routes) |
| City pages | `/city/[city]` | `/city/[city]` | Done (42 cities) |
| Privacy | `/privacy-policy` | `/privacy-policy` | Done |
| Terms | `/terms-of-service` | `/terms-of-service` | Done |
| Terms alias | — | `/terms-and-conditions` | Redirect |
| GK Web Designs | `/gk-web-designs` | `/gk-web-designs` | Done |

**Note:** Original `sitemap.xml` returns HTTP 500; routes discovered via SPA bundle + crawl.

## 4. Booking form UX

- Field order: Pickup, Drop, Name, Phone, Date, Time, Trip Type, Vehicle, Submit  
- Trip type: 2 cards, centered, 3 lines of copy  
- Vehicle: 2×2 grid with images  
- Submit opens WhatsApp (mock API at `/api/booking`)  
- **Fix applied:** `text-gray-900` on form to prevent white-on-white inheritance from hero  

## 5. Floating CTAs

- Green WhatsApp circle (bottom-right, higher on mobile)  
- Green call circle below WhatsApp  
- Match in `FloatingWhatsAppButton` + `FloatingCallButton`

## 6. Responsive notes

- Hero stacks on mobile (form below copy)  
- Nav collapses to hamburger < md  
- Route cards 1–2 columns on mobile  
- Footer 1–4 columns by breakpoint  

## 7. Remaining gaps vs original

- Booking form input icons (MapPin, User, Calendar) not yet added  
- Bottom sticky mobile CTA bar on original (if present on scroll) — verify  
- Exact font loading (original uses system fonts)  
- Some blog post body content is summary-only vs full long-form on source  
