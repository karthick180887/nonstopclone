# Design System — Nonstop Drop Taxi Clone

Source: https://www.nonstopdroptaxi.com/ (authorized rebuild)

## Colors

| Token | Hex | Usage |
|-------|-----|--------|
| Brand green (primary) | `#0B6B2E` | Headings, accents, promo bar |
| Action green | `#1FAE4B` | Links hover, rates, borders |
| Accent yellow | `#FFC107` | Top bar border, CTA gradient, badges |
| Dark navy | `#0F172A` | Hero background, dark CTA buttons |
| Body text | `#374151` / gray-700 | Paragraphs |
| Muted text | `#6B7280` / gray-500 | Subtitles |
| WhatsApp green | `#25D366` | WhatsApp icon hover |
| White | `#FFFFFF` | Cards, header nav |
| Light surface | `#F8FAFC` | Alternate sections |

## Typography

- **Font family:** `ui-sans-serif, system-ui, sans-serif` (system stack)
- **Hero H1:** 3xl–5xl, extrabold, white + green accent line
- **Section H2:** 2xl–4xl, extrabold, `#0B6B2E` or `#0F172A`
- **Card H3:** base–lg, bold, `#0B6B2E`
- **Body:** sm–base, gray-600/700
- **Small / labels:** 11px–13px

## Spacing & layout

- **Container:** `max-w-7xl mx-auto px-4`
- **Section padding:** `py-16` (64px vertical)
- **Card padding:** `p-4`–`p-6`
- **Grid gaps:** `gap-3`–`gap-6`

## Components

### Header
- Top bar: 32px height, green bg, yellow bottom border 2px
- Main nav: min-height 80px, white/blur background
- Logo: 65–75px height
- Book Now: gradient `#1FAE4B` → `#FFC107`, rounded-xl

### Promo ticker
- Green bar below header, scrolling marquee, 36px height

### Buttons
- **Primary CTA:** green-600 bg, white text, rounded-xl
- **Book Now:** green-yellow gradient, black text
- **Outline:** border gray, rounded-lg

### Cards
- White bg, `rounded-2xl`, `border-gray-200`, shadow-sm
- Hover: shadow-xl, slight scale on images

### Forms
- Inputs: border gray-300, rounded-lg, focus ring green-500
- Trip type: 2-col grid, centered text, green border when selected

### Border radius
- Buttons/cards: `rounded-xl` / `rounded-2xl`
- Pills/toggles: `rounded-full`

## Breakpoints (Tailwind)

- Mobile: default (< 640px)
- `sm`: 640px
- `md`: 768px (desktop nav)
- `lg`: 1024px (2-col hero, 5-col vehicles)

## Z-index

- Header sticky: z-50
- Floating CTAs: z-40
