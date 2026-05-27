const fs = require("fs");
const path = require("path");
const https = require("https");

const assetUrls = [
  "https://www.nonstopdroptaxi.com/nonstop-logo.avif",
  "https://www.nonstopdroptaxi.com/images/nonstop-hero.avif",
  "https://www.nonstopdroptaxi.com/images/nonstop-highway.avif",
  "https://www.nonstopdroptaxi.com/assets/swift-dzire-cab.avif",
  "https://www.nonstopdroptaxi.com/assets/etios-sedan-cab.avif",
  "https://www.nonstopdroptaxi.com/assets/ertiga-mpv-taxi.avif",
  "https://www.nonstopdroptaxi.com/assets/innova-mpv-taxi.avif",
  "https://www.nonstopdroptaxi.com/assets/innova-crysta-cab-service.avif",
  "https://www.nonstopdroptaxi.com/assets/chennai-tourist-beach-view.avif",
  "https://www.nonstopdroptaxi.com/assets/bangalore-palace-tour.avif",
  "https://www.nonstopdroptaxi.com/assets/coimbatore-waterfalls-nature.avif",
  "https://www.nonstopdroptaxi.com/assets/madurai-meenakshitemple-view.avif",
  "https://www.nonstopdroptaxi.com/assets/rameshwaram-temple-pamban-bridge.avif",
  "https://www.nonstopdroptaxi.com/assets/tirupati-balaji-temple-view.avif",
  "https://www.nonstopdroptaxi.com/assets/ooty-lake-hills-view.avif",
  "https://www.nonstopdroptaxi.com/assets/kodaikanal-lake-mountain-view.avif",
  "https://www.nonstopdroptaxi.com/assets/munnar-tea-estate-hills.avif",
  "https://www.nonstopdroptaxi.com/assets/pondicherry-beach-promenade.avif",
  "https://www.nonstopdroptaxi.com/assets/kanyakumari-vivekananda-rock.avif",
  "https://www.nonstopdroptaxi.com/assets/alleppey-backwater-houseboat.avif",
  "https://www.nonstopdroptaxi.com/assets/cochin-chinese-fishing-view.avif",
  "https://www.nonstopdroptaxi.com/assets/mysore-palace-tour.avif",
  "https://www.nonstopdroptaxi.com/assets/trichy-rockfort-temple-view.avif",
  "https://www.nonstopdroptaxi.com/assets/thanjavur-brihadeeswarar-temple.avif",
  "https://www.nonstopdroptaxi.com/assets/salem-yercaud-hills-view.avif",
  "https://www.nonstopdroptaxi.com/assets/tirunelveli-tamirabarani-river.avif",
  "https://www.nonstopdroptaxi.com/assets/kutralam-waterfalls-view.avif",
  "https://www.nonstopdroptaxi.com/assets/velankanni-church-basilica.avif",
  "https://www.nonstopdroptaxi.com/favicon.ico",
  "https://www.nonstopdroptaxi.com/favicon-32x32.png",
  "https://www.nonstopdroptaxi.com/favicon-16x16.png",
  "https://www.nonstopdroptaxi.com/apple-touch-icon.png",
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`${url} => ${res.statusCode}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", reject);
  });
}

async function main() {
  const dirs = {
    images: "public/source-assets/images",
    logos: "public/source-assets/logos",
    icons: "public/source-assets/icons",
  };
  Object.values(dirs).forEach((d) => fs.mkdirSync(d, { recursive: true }));

  const results = [];
  for (const url of assetUrls) {
    const filename = path.basename(new URL(url).pathname);
    let folder = dirs.images;
    if (filename.includes("logo") || filename.includes("nonstop-logo")) folder = dirs.logos;
    if (filename.includes("favicon") || filename.includes("apple-touch")) folder = dirs.icons;
    const dest = path.join(folder, filename);
    try {
      await download(url, dest);
      results.push({ url, dest, ok: true });
      console.log("OK", filename);
    } catch (e) {
      results.push({ url, dest, ok: false, error: e.message });
      console.log("FAIL", filename, e.message);
    }
  }
  fs.writeFileSync("scripts/download-results.json", JSON.stringify(results, null, 2));
}

main();
