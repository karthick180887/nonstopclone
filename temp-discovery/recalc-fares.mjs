import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIN_OW = 150;
const MINI_RATE = 14;
const MINI_BATA = 400;

function oneWayFare(distanceKm, ratePerKm, bata) {
  return Math.round(Math.max(distanceKm, MIN_OW) * ratePerKm + bata);
}

const cityPath = path.join(root, "lib", "city-lm-data.json");
const city = JSON.parse(fs.readFileSync(cityPath, "utf8"));
for (const entry of Object.values(city)) {
  for (const route of entry.routes) {
    route.fare = oneWayFare(route.distance, MINI_RATE, MINI_BATA);
  }
}
fs.writeFileSync(cityPath, JSON.stringify(city));
console.log("Updated city-lm-data.json fares (Mini, 150 km min)");

const odPath = path.join(root, "lib", "route-od-data.json");
const od = JSON.parse(fs.readFileSync(odPath, "utf8"));
for (const route of Object.values(od)) {
  const km = parseInt(route.distance, 10);
  if (!Number.isFinite(km)) continue;
  const fare = oneWayFare(km, MINI_RATE, MINI_BATA);
  route.fare = `₹${fare.toLocaleString("en-IN")}`;
  route.driverAllowance = "Driver allowance from ₹400 (Mini; varies by vehicle)";
}
fs.writeFileSync(odPath, JSON.stringify(od));
console.log("Updated route-od-data.json fares");
