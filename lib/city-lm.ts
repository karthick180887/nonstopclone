import cityLmJson from "./city-lm-data.json";
import cityOxJson from "./city-ox-order.json";
import { LOWEST_ONE_WAY_RATE } from "./site-data";

export type CityLmRoute = {
  to: string;
  distance: number;
  time: string;
  fare: number;
};

export type CityLmEntry = {
  city: string;
  district: string;
  description: string;
  bestPlaces: string[];
  routes: CityLmRoute[];
};

export const CITY_LM_DATA = cityLmJson as Record<string, CityLmEntry>;

export type CityOxItem = { name: string; slug: string };

export const CITY_OX_ORDER = cityOxJson as CityOxItem[];

export function getCityLm(slug: string): CityLmEntry | undefined {
  return CITY_LM_DATA[slug.toLowerCase()];
}

export function cityRouteToSlug(toCityName: string): string {
  return toCityName.toLowerCase().replace(/\s+/g, "-");
}

/** Same path segment as original SPA: `{from}-to-{to}-drop-taxi` */
export function cityDropTaxiSlug(fromSlug: string, toCityName: string): string {
  return `${fromSlug}-to-${cityRouteToSlug(toCityName)}-drop-taxi`;
}

export function cityDropTaxiHref(fromSlug: string, toCityName: string): string {
  return `/city/${fromSlug}/${cityDropTaxiSlug(fromSlug, toCityName)}`;
}

/** Display fare on city cards: max(km,130)*rate + 400 */
export function cityCardEstimatedFare(distanceKm: number, ratePerKm = LOWEST_ONE_WAY_RATE): number {
  return Math.round(Math.max(distanceKm, 130) * ratePerKm + 400);
}

/** Per-vehicle fare on nested route pages: max(km,130)*rate + 400 */
export function cityRouteVehicleFare(distanceKm: number, ratePerKm: number): number {
  return Math.round(Math.max(distanceKm, 130) * ratePerKm + 400);
}

export function parseDropTaxiSlug(
  citySlug: string,
  dropSlug: string
): { toSlug: string } | null {
  const suffix = "-drop-taxi";
  if (!dropSlug.endsWith(suffix)) return null;
  const prefix = `${citySlug.toLowerCase()}-to-`;
  const core = dropSlug.slice(0, -suffix.length);
  if (!core.startsWith(prefix)) return null;
  const toSlug = core.slice(prefix.length);
  if (!toSlug) return null;
  return { toSlug };
}

export function findRouteForDropSlug(entry: CityLmEntry, toSlug: string): CityLmRoute | undefined {
  return entry.routes.find((r) => cityRouteToSlug(r.to) === toSlug);
}
