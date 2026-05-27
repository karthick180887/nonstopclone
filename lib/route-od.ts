import routeOdJson from "./route-od-data.json";

export type OdRoute = {
  from: string;
  to: string;
  distance: string;
  duration: string;
  fare: string;
  perKm: string;
  driverAllowance: string;
  description: string;
};

export const ROUTE_OD = routeOdJson as Record<string, OdRoute>;

const TOKEN_ALIASES: Record<string, string> = {
  trichy: "tiruchirappalli",
  trivandrum: "thiruvananthapuram",
  cochin: "kochi",
};

export function normalizeRouteToken(value: string): string {
  const normalized = value.toLowerCase().replace(/[\s-]+/g, "");
  return TOKEN_ALIASES[normalized] ?? normalized;
}

export function slugifyRouteToken(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function parseTaxiSlug(slug: string): { fromToken: string; toToken: string } | null {
  const base = slug.endsWith("-taxi") ? slug.slice(0, -5) : slug;
  const parts = base.split("-to-");
  if (parts.length < 2) return null;
  const fromToken = parts.shift() ?? "";
  const toToken = parts.join("-to-");
  if (!fromToken || !toToken) return null;
  return { fromToken, toToken };
}

export function findOdRouteBySlug(slug: string): OdRoute | null {
  const parsed = parseTaxiSlug(slug);
  if (!parsed) return null;
  const fromNorm = normalizeRouteToken(parsed.fromToken);
  const toNorm = normalizeRouteToken(parsed.toToken);
  return (
    Object.values(ROUTE_OD).find(
      (route) => normalizeRouteToken(route.from) === fromNorm && normalizeRouteToken(route.to) === toNorm
    ) ?? null
  );
}

export function buildTaxiSlug(from: string, to: string): string {
  return `${slugifyRouteToken(from)}-to-${slugifyRouteToken(to)}-taxi`;
}
