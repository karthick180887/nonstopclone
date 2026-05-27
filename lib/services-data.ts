import { SITE, VEHICLES } from "./site-data";

export const SERVICES = [
  {
    title: "One Way Drop Taxi",
    description:
      "Pay only for the forward journey. Ideal for intercity drops with fixed per KM pricing and no return fare.",
    href: "/one-way-taxi",
  },
  {
    title: "Outstation Taxi",
    description:
      "Long distance travel across Tamil Nadu, Kerala and Karnataka with verified drivers and clean vehicles.",
    href: "/services",
  },
  {
    title: "Airport Drop Taxi",
    description:
      "On-time airport transfers from Chennai, Coimbatore, Madurai, Bangalore and other major airports.",
    href: "/services",
  },
  {
    title: "Round Trip Taxi",
    description: `Flexible multi-day trips with minimum ${SITE.minKmRoundTrip} KM billing and driver bata from ₹400–₹800 by vehicle.`,
    href: "/pricing",
  },
];

export const ONE_WAY_TERMS = [
  `Minimum ${SITE.minKmOneWay} KM billing`,
  "Driver bata ₹400 (Mini) to ₹500 (Sedan & above)",
  "Toll & parking extra (actual)",
  "No return fare charged",
  "Ideal for city-to-city drop trips",
];

export const ROUND_TRIP_TERMS = [
  `Minimum ${SITE.minKmRoundTrip} KM billing`,
  "Driver bata ₹400–₹500 per day (Tempo Traveller ₹800)",
  "Flexible return schedule",
  "Extra KM charged separately",
  "Best for multi-day trips",
];

export const PRICING_NOTES = [
  "Toll, parking and permit charges are billed as per actual",
  "Driver bata varies by vehicle (see pricing cards)",
  "Route or distance changes may affect final fare",
  "Vehicle provided based on availability and trip type",
  "Night travel and hill station charges may apply if required",
];

/** Short label for vehicle driver bata on pricing UI. */
export function formatDriverBataLabel(
  vehicle: (typeof VEHICLES)[number],
  tripType: "oneway" | "roundtrip"
): string {
  const bata = tripType === "roundtrip" ? vehicle.driverBataRoundTrip : vehicle.driverBataOneWay;
  if (vehicle.id === "tempo-traveller" && tripType === "roundtrip") {
    return `Driver Bata ₹${bata} (round trip only)`;
  }
  return `Driver Bata ₹${bata}`;
}
