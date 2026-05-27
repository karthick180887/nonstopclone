import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vehicleDir = path.join(root, "public", "assets", "vehicles");
const generated = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "f-nonstopclone",
  "assets"
);

const pairs = [
  ["innova-hycross-cab", "innova-hycross-cab-v2.png"],
  ["tempo-traveller-cab", "tempo-traveller-cab-v2.png"],
];

for (const [base, preferredPng] of pairs) {
  const candidates = [
    path.join(generated, preferredPng),
    path.join(generated, `${base}.png`),
    path.join(vehicleDir, `${base}.png`),
  ];
  const src = candidates.find((p) => fs.existsSync(p));
  if (!src) {
    console.warn("skip", base, "- no source png");
    continue;
  }
  const resized = sharp(src).resize({
    width: 560,
    height: 360,
    fit: "inside",
    withoutEnlargement: true,
  });
  await resized.clone().webp({ quality: 88 }).toFile(path.join(vehicleDir, `${base}.webp`));
  await resized.clone().avif({ quality: 82, effort: 4 }).toFile(path.join(vehicleDir, `${base}.avif`));
  console.log("wrote", base, "from", path.basename(src));
}

const odPath = path.join(root, "lib", "route-od-data.json");
const od = JSON.parse(fs.readFileSync(odPath, "utf8"));
for (const key of Object.keys(od)) {
  od[key].perKm = "From ₹14 / KM";
  od[key].description = od[key].description
    .replace(/@ ₹14\/km/gi, "from ₹14/km")
    .replace(/at ₹14\/km/gi, "from ₹14/km")
    .replace(/₹14\/km/gi, "from ₹14/km");
}
fs.writeFileSync(odPath, JSON.stringify(od));
