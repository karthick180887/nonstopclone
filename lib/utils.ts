import { SITE } from "./site-data";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function whatsAppUrl(message: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(message)}`;
}

export function buildFareMessage(opts: {
  pickup?: string;
  drop?: string;
  date?: string;
  vehicle?: string;
  tripType?: string;
}) {
  const lines = [
    "Hi Nonstop Drop Taxi,",
    "I need fare details for one way taxi.",
    opts.pickup ? `Pickup: ${opts.pickup}` : "Pickup: [Your Location]",
    opts.drop ? `Drop: ${opts.drop}` : "Drop: [Destination]",
    opts.date ? `Date: ${opts.date}` : "Date: [Travel Date]",
    opts.vehicle ? `Vehicle: ${opts.vehicle}` : "Vehicle: Sedan",
    opts.tripType ? `Trip Type: ${opts.tripType}` : "Trip Type: One Way",
    "Please share price and availability.",
  ];
  return lines.join("\n");
}

export function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function estimateFare(km: number, ratePerKm = 14, driverBata = SITE.driverBata) {
  const billableKm = Math.max(km, SITE.minKmOneWay);
  return billableKm * ratePerKm + driverBata;
}
