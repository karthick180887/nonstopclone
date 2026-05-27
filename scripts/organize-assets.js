const fs = require("fs");
const path = require("path");

const mappings = [
  ["public/source-assets/logos/nonstop-logo.avif", "public/assets/logo/nonstop-logo.avif"],
  ["public/nonstop-logo.avif", "public/assets/logo/nonstop-logo.avif"],
  ["public/source-assets/images/nonstop-hero.avif", "public/assets/banners/nonstop-hero.avif"],
  ["public/source-assets/images/nonstop-highway.avif", "public/assets/banners/nonstop-highway.avif"],
  ["public/images/nonstop-hero.avif", "public/assets/banners/nonstop-hero.avif"],
  ["public/source-assets/images/swift-dzire-cab.avif", "public/assets/vehicles/swift-dzire-cab.avif"],
  ["public/source-assets/images/etios-sedan-cab.avif", "public/assets/vehicles/etios-sedan-cab.avif"],
  ["public/source-assets/images/ertiga-mpv-taxi.avif", "public/assets/vehicles/ertiga-mpv-taxi.avif"],
  ["public/source-assets/images/innova-mpv-taxi.avif", "public/assets/vehicles/innova-mpv-taxi.avif"],
  ["public/source-assets/images/innova-crysta-cab-service.avif", "public/assets/vehicles/innova-crysta-cab-service.avif"],
  ["public/source-assets/icons/favicon.ico", "public/assets/icons/favicon.ico"],
  ["public/source-assets/icons/favicon-32x32.png", "public/assets/icons/favicon-32x32.png"],
  ["public/source-assets/icons/favicon-16x16.png", "public/assets/icons/favicon-16x16.png"],
  ["public/source-assets/icons/apple-touch-icon.png", "public/assets/icons/apple-touch-icon.png"],
];

const destinationImages = [
  "chennai-tourist-beach-view.avif",
  "bangalore-palace-tour.avif",
  "coimbatore-waterfalls-nature.avif",
  "madurai-meenakshitemple-view.avif",
  "rameshwaram-temple-pamban-bridge.avif",
  "tirupati-balaji-temple-view.avif",
  "ooty-lake-hills-view.avif",
  "kodaikanal-lake-mountain-view.avif",
  "munnar-tea-estate-hills.avif",
  "pondicherry-beach-promenade.avif",
  "kanyakumari-vivekananda-rock.avif",
  "alleppey-backwater-houseboat.avif",
  "cochin-chinese-fishing-view.avif",
  "mysore-palace-tour.avif",
  "trichy-rockfort-temple-view.avif",
  "thanjavur-brihadeeswarar-temple.avif",
  "salem-yercaud-hills-view.avif",
  "tirunelveli-tamirabarani-river.avif",
  "kutralam-waterfalls-view.avif",
  "velankanni-church-basilica.avif",
];

for (const file of destinationImages) {
  mappings.push([
    `public/source-assets/images/${file}`,
    `public/assets/images/${file}`,
  ]);
}

for (const [, dest] of mappings) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
}

let copied = 0;
for (const [src, dest] of mappings) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    copied++;
  }
}
console.log(`Copied ${copied} assets to public/assets/`);
