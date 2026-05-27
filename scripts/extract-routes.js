const fs = require("fs");
const s = fs.readFileSync("source-bundle.js", "utf8");

const paths = new Set();
const canonicals = new Set();
const assets = new Set();

for (const m of s.matchAll(/path:\s*["']([^"']+)["']/g)) paths.add(m[1]);
for (const m of s.matchAll(/to:\s*["'](\/[^"']+)["']/g)) paths.add(m[1]);
for (const m of s.matchAll(/canonical",href:"https:\/\/www\.nonstopdroptaxi\.com([^"]+)"/g))
  canonicals.add(m[1]);
for (const m of s.matchAll(/href:"https:\/\/www\.nonstopdroptaxi\.com([^"]+)"/g))
  canonicals.add(m[1]);
for (const m of s.matchAll(/https:\/\/www\.nonstopdroptaxi\.com\/assets\/[^"'\s)]+/g))
  assets.add(m[0]);

const slugs = [...s.matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map((m) => m[1]);
const uniqueSlugs = [...new Set(slugs)];

console.log("=== ROUTE PATHS ===");
console.log([...paths].sort().join("\n"));
console.log("\n=== CANONICAL URLS ===");
console.log([...canonicals].sort().join("\n"));
console.log("\n=== SLUG COUNT ===", uniqueSlugs.length);
console.log(uniqueSlugs.join("\n"));
console.log("\n=== ASSETS ===");
console.log([...assets].sort().join("\n"));
