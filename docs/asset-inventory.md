# Asset Inventory

All assets downloaded from public URLs on https://www.nonstopdroptaxi.com/ (authorized). Stored locally — **no hotlinking**.

## Directory structure

```
public/assets/logo/
public/assets/banners/
public/assets/vehicles/
public/assets/images/
public/assets/icons/
public/source-assets/   (legacy copy — keep for backup)
```

## Logo

| Original URL | Local path | Used on |
|--------------|------------|---------|
| `/nonstop-logo.avif` | `/assets/logo/nonstop-logo.avif` | Header, Footer, OG |

## Banners / hero

| Original URL | Local path | Used on |
|--------------|------------|---------|
| `/images/nonstop-hero.avif` | `/assets/banners/nonstop-hero.avif` | Hero, OG image |
| `/images/nonstop-highway.avif` | `/assets/banners/nonstop-highway.avif` | About, inner heroes |

## Vehicles (booking + pricing)

| Original URL | Local path | Alt text |
|--------------|------------|----------|
| `/assets/swift-dzire-cab.avif` | `/assets/vehicles/swift-dzire-cab.avif` | Swift Dzire taxi |
| `/assets/etios-sedan-cab.avif` | `/assets/vehicles/etios-sedan-cab.avif` | Etios sedan |
| `/assets/ertiga-mpv-taxi.avif` | `/assets/vehicles/ertiga-mpv-taxi.avif` | Ertiga MPV |
| `/assets/innova-mpv-taxi.avif` | `/assets/vehicles/innova-mpv-taxi.avif` | Innova |
| `/assets/innova-crysta-cab-service.avif` | `/assets/vehicles/innova-crysta-cab-service.avif` | Innova Crysta |

## Destination images

| File (local `/assets/images/`) | Used on |
|--------------------------------|---------|
| chennai-tourist-beach-view.avif | Homepage destinations |
| bangalore-palace-tour.avif | Destinations |
| coimbatore-waterfalls-nature.avif | Destinations |
| madurai-meenakshitemple-view.avif | Destinations |
| rameshwaram-temple-pamban-bridge.avif | Destinations |
| tirupati-balaji-temple-view.avif | Destinations |
| ooty-lake-hills-view.avif | Destinations |
| kodaikanal-lake-mountain-view.avif | Destinations |
| munnar-tea-estate-hills.avif | Destinations |
| pondicherry-beach-promenade.avif | Destinations |
| kanyakumari-vivekananda-rock.avif | Destinations |
| alleppey-backwater-houseboat.avif | Destinations |
| cochin-chinese-fishing-view.avif | Destinations |
| mysore-palace-tour.avif | Destinations |
| trichy-rockfort-temple-view.avif | Destinations |
| thanjavur-brihadeeswarar-temple.avif | Destinations |
| salem-yercaud-hills-view.avif | Destinations |
| tirunelveli-tamirabarani-river.avif | Destinations |
| kutralam-waterfalls-view.avif | Destinations |
| velankanni-church-basilica.avif | Destinations |

## Icons / favicons

| Original | Local path |
|----------|------------|
| `/favicon.ico` | `/assets/icons/favicon.ico` |
| `/favicon-32x32.png` | `/assets/icons/favicon-32x32.png` |
| `/favicon-16x16.png` | `/assets/icons/favicon-16x16.png` |
| `/apple-touch-icon.png` | `/assets/icons/apple-touch-icon.png` |

## Download status

- **32/32** URLs in `scripts/download-results.json` succeeded (`ok: true`)
- Organize script: `node scripts/organize-assets.js` copies to `/public/assets/`

## Format notes

- Primary format: **AVIF** (Next.js `images.formats` includes avif)
- Dimensions: served responsive via `next/image` with `sizes` attribute
