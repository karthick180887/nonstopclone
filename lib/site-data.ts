export const SITE = {
  name: "Nonstop Drop Taxi",
  tagline: "One Way & Outstation Cab Service South India",
  phone: "+91 81221 96198",
  phoneTel: "+918122196198",
  phoneWa: "918122196198",
  email: "nonstopdroptaxi2026@gmail.com",
  url: "https://www.nonstopdroptaxi.com",
  description:
    "Nonstop Drop Taxi provides convenient one way and outstation cab services across Tamil Nadu, Karnataka, Kerala and nearby regions. Well maintained vehicles, fair pricing and 24/7 booking support.",
  areas: ["Tamil Nadu", "Karnataka", "Kerala"],
  social: {
    facebook: "https://www.facebook.com/nonstopdroptaxi",
    instagram: "https://www.instagram.com/nonstopdroptaxi",
  },
  /** Default / Mini one-way driver bata (legacy references). */
  driverBata: 400,
  minKmOneWay: 150,
  minKmRoundTrip: 300,
} as const;

export type TripType = "oneway" | "roundtrip";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Fleet", path: "/fleet" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
] as const;

export const FOOTER_QUICK_LINKS = [
  { name: "Home", path: "/" },
  { name: "Taxi Fare & Pricing", path: "/pricing" },
  { name: "Available Cars", path: "/fleet" },
  { name: "One Way Taxi Service", path: "/one-way-taxi" },
  { name: "Travel Guides & Route Tips", path: "/blog" },
  { name: "Contact & Booking", path: "/contact" },
] as const;

export const FOOTER_LEGAL = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-of-service" },
  { name: "FAQ", path: "/faq" },
  { name: "GK Web Designs", path: "/gk-web-designs" },
] as const;

export const VEHICLES = [
  {
    id: "mini",
    name: "Mini",
    label: "MINI",
    oneWayRate: 14,
    roundTripRate: 13,
    passengers: "1–3",
    luggage: "1 Bag",
    tag: "Budget",
    image: "/assets/vehicles/mini-car-cab.avif",
    driverBataOneWay: 400,
    driverBataRoundTrip: 400,
  },
  {
    id: "sedan",
    name: "Sedan",
    label: "SEDAN",
    oneWayRate: 15,
    roundTripRate: 14,
    passengers: "1–4",
    luggage: "2 Bags",
    tag: "Best Price",
    image: "/assets/vehicles/swift-dzire-cab.avif",
    driverBataOneWay: 500,
    driverBataRoundTrip: 500,
  },
  {
    id: "suv",
    name: "SUV",
    label: "SUV",
    oneWayRate: 20,
    roundTripRate: 19,
    passengers: "1–6",
    luggage: "4 Bags",
    tag: "Family",
    image: "/assets/vehicles/ertiga-mpv-taxi.avif",
    driverBataOneWay: 500,
    driverBataRoundTrip: 500,
  },
  {
    id: "innova",
    name: "Innova",
    label: "INNOVA",
    oneWayRate: 22,
    roundTripRate: 21,
    passengers: "1–7",
    luggage: "3 Bags",
    tag: "Premium",
    image: "/assets/vehicles/innova-mpv-taxi.avif",
    driverBataOneWay: 500,
    driverBataRoundTrip: 500,
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    label: "INNOVA CRYSTA",
    oneWayRate: 23,
    roundTripRate: 22,
    passengers: "1–7",
    luggage: "3 Bags",
    tag: "Luxury",
    image: "/assets/vehicles/innova-crysta-cab-service.avif",
    driverBataOneWay: 500,
    driverBataRoundTrip: 500,
  },
  {
    id: "innova-hycross",
    name: "Innova High Cross",
    label: "INNOVA HIGH CROSS",
    oneWayRate: 26,
    roundTripRate: 25,
    passengers: "1–7",
    luggage: "4 Bags",
    tag: "Elite",
    image: "/assets/vehicles/innova-hycross-cab.webp",
    driverBataOneWay: 500,
    driverBataRoundTrip: 500,
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    label: "TEMPO TRAVELLER",
    oneWayRate: 30,
    roundTripRate: 29,
    passengers: "1–12",
    luggage: "8 Bags",
    tag: "Group",
    image: "/assets/vehicles/tempo-traveller-cab.webp",
    driverBataOneWay: 500,
    driverBataRoundTrip: 800,
  },
] as const;

export type Vehicle = (typeof VEHICLES)[number];

export function getDriverBata(vehicle: Pick<Vehicle, "driverBataOneWay" | "driverBataRoundTrip">, tripType: TripType): number {
  return tripType === "roundtrip" ? vehicle.driverBataRoundTrip : vehicle.driverBataOneWay;
}

export function vehicleIdForOneWayRate(ratePerKm: number): Vehicle["id"] {
  return VEHICLES.find((v) => v.oneWayRate === ratePerKm)?.id ?? "sedan";
}

export function estimateTripFare(
  distanceKm: number,
  ratePerKm: number,
  tripType: TripType = "oneway",
  vehicleId?: Vehicle["id"]
): number {
  const minKm = tripType === "roundtrip" ? SITE.minKmRoundTrip : SITE.minKmOneWay;
  const vehicle = vehicleId ? VEHICLES.find((v) => v.id === vehicleId) : undefined;
  const resolved =
    vehicle ??
    VEHICLES.find((v) => (tripType === "roundtrip" ? v.roundTripRate : v.oneWayRate) === ratePerKm) ??
    VEHICLES[0];
  const bata = getDriverBata(resolved, tripType);
  return Math.round(Math.max(distanceKm, minKm) * ratePerKm + bata);
}

/** Lowest one-way per-km rate (Mini). */
export const LOWEST_ONE_WAY_RATE = VEHICLES[0].oneWayRate;

/** Default sedan rate used for route fare estimates on homepage cards. */
export const DEFAULT_ESTIMATE_RATE = VEHICLES.find((v) => v.id === "sedan")?.oneWayRate ?? 15;

export function estimateOneWayFare(distanceKm: number, ratePerKm: number = DEFAULT_ESTIMATE_RATE): number {
  return estimateTripFare(distanceKm, ratePerKm, "oneway", vehicleIdForOneWayRate(ratePerKm));
}

export const WHY_CHOOSE = [
  {
    title: "Well Maintained Cars",
    description: "Clean mini, sedan, SUV and traveller options for long distance travel.",
  },
  {
    title: "Flexible Pickup",
    description: "Schedule your ride anytime based on your convenience.",
  },
  {
    title: "Verified Drivers",
    description: "Experienced drivers focused on safe travel.",
  },
  {
    title: "Wide Route Coverage",
    description: "Serving major cities and destinations across South India.",
  },
] as const;

export const BOOKING_STEPS = [
  { step: "01", title: "Enter Route", description: "Pickup and drop city" },
  { step: "02", title: "Confirm Fare", description: "Fixed price, no hidden charges" },
  { step: "03", title: "Choose Time", description: "Flexible pickup scheduling" },
  { step: "04", title: "Driver Assigned", description: "Verified driver for your trip" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "On-time pickup and exact fare as quoted. Smooth long-distance ride.",
    name: "Karthik R",
    route: "Chennai → Coimbatore",
  },
  {
    quote: "Driver handled hill roads well. Comfortable journey overall.",
    name: "Divya S",
    route: "Madurai → Kodaikanal",
  },
  {
    quote: "Booked via WhatsApp, got quick confirmation and clean vehicle.",
    name: "Sanjay V",
    route: "Bangalore → Salem",
  },
  {
    quote: "Family trip was smooth. Good space for luggage.",
    name: "Lakshmi P",
    route: "Trichy → Rameswaram",
  },
  {
    quote: "Reliable service for intercity travel. No hidden charges.",
    name: "Arvind K",
    route: "Coimbatore → Kochi",
  },
] as const;
