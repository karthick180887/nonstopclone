import http from "node:http";

const BASE = "http://localhost:3088";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve({ status: res.statusCode ?? 0, text: data });
        });
      })
      .on("error", reject);
  });
}

function fetchStatus(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      res.resume();
      res.on("end", () => resolve({ url, status: res.statusCode ?? 0 }));
    });
    req.on("error", () => resolve({ url, status: 0 }));
  });
}

const sitemap = await fetchText(`${BASE}/sitemap.xml`);
if (sitemap.status !== 200) {
  console.error(`Failed to load sitemap.xml (${sitemap.status})`);
  process.exit(1);
}

const urls = [...sitemap.text.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => m[1].trim())
  .map((u) => u.replace("https://www.nonstopdroptaxi.com", BASE));

const unique = [...new Set(urls)];
const limit = 20;
const results = [];

for (let i = 0; i < unique.length; i += limit) {
  const batch = unique.slice(i, i + limit);
  const batchResults = await Promise.all(batch.map((u) => fetchStatus(u)));
  results.push(...batchResults);
}

const bad = results.filter((r) => r.status !== 200);
console.log(`Checked ${results.length} URLs from sitemap`);
console.log(`200 OK: ${results.length - bad.length}`);
console.log(`Non-200: ${bad.length}`);
if (bad.length > 0) {
  for (const item of bad.slice(0, 50)) {
    console.log(`${item.status} ${item.url}`);
  }
  process.exitCode = 2;
}
