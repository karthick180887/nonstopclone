const fs = require("fs");
const s = fs.readFileSync("source-bundle.js", "utf8");

const routeSlugs = new Set();
for (const m of s.matchAll(/["']([a-z]+-to-[a-z]+-taxi)["']/g)) routeSlugs.add(m[1]);
for (const m of s.matchAll(/href:"\/([a-z0-9-]+-taxi)"/g)) routeSlugs.add(m[1]);

const colors = new Set();
for (const m of s.matchAll(/#[0-9A-Fa-f]{3,8}/g)) colors.add(m[0]);
for (const m of s.matchAll(/(?:bg|text|border)-\[([^\]]+)\]/g)) colors.add(m[1]);

const titles = [];
for (const m of s.matchAll(/title:\{children:"([^"]+)"/g)) titles.push(m[1]);
for (const m of s.matchAll(/children:"([^"]+\| Nonstop Drop Taxi)"/g)) titles.push(m[1]);

fs.writeFileSync(
  "scripts/discovery-data.json",
  JSON.stringify(
    {
      routeSlugs: [...routeSlugs].sort(),
      colors: [...colors].sort(),
      titles: [...new Set(titles)].sort(),
    },
    null,
    2
  )
);

console.log("Route slugs:", routeSlugs.size);
console.log([...routeSlugs].sort().join("\n"));
