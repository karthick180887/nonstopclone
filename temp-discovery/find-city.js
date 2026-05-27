const fs = require("fs");
const s = fs.readFileSync("source-bundle.js", "utf8");
const patterns = [
  "One Way Taxi in",
  "Popular Routes from",
  "city/${",
  "/city/",
  "chengalpattu",
  "City Taxi",
];
for (const p of patterns) {
  const i = s.indexOf(p);
  console.log(p, i);
}

// dump around chengalpattu if present
const idx = s.indexOf("chengalpattu");
if (idx > 0) console.log("\nSNIP\n", s.slice(idx - 400, idx + 2500));
