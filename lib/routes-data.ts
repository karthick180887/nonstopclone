import { estimateOneWayFare } from "./site-data";

export type RoutePage = {
  slug: string;
  from: string;
  to: string;
  fromSlug: string;
  distanceKm: number;
  duration: string;
  estimatedFare: number;
  ratePerKm?: number;
};

const ROUTE_DEFS: Omit<RoutePage, "estimatedFare">[] = [
  { slug: "chennai-to-madurai-taxi", from: "Chennai", to: "Madurai", fromSlug: "chennai", distanceKm: 458, duration: "7h 30m" },
  { slug: "chennai-to-coimbatore-taxi", from: "Chennai", to: "Coimbatore", fromSlug: "chennai", distanceKm: 500, duration: "8h" },
  { slug: "chennai-to-salem-taxi", from: "Chennai", to: "Salem", fromSlug: "chennai", distanceKm: 340, duration: "5h 30m" },
  { slug: "chennai-to-trichy-taxi", from: "Chennai", to: "Trichy", fromSlug: "chennai", distanceKm: 320, duration: "5h" },
  { slug: "chennai-to-bangalore-taxi", from: "Chennai", to: "Bangalore", fromSlug: "chennai", distanceKm: 348, duration: "6h" },
  { slug: "chennai-to-pondicherry-taxi", from: "Chennai", to: "Pondicherry", fromSlug: "chennai", distanceKm: 150, duration: "3h" },
  { slug: "chennai-to-vellore-taxi", from: "Chennai", to: "Vellore", fromSlug: "chennai", distanceKm: 140, duration: "3h" },
  { slug: "chennai-to-tirupati-taxi", from: "Chennai", to: "Tirupati", fromSlug: "chennai", distanceKm: 135, duration: "3h" },
  { slug: "chennai-to-ooty-taxi", from: "Chennai", to: "Ooty", fromSlug: "chennai", distanceKm: 550, duration: "10h" },
  { slug: "chennai-to-kanchipuram-taxi", from: "Chennai", to: "Kanchipuram", fromSlug: "chennai", distanceKm: 75, duration: "2h" },
  { slug: "coimbatore-to-ooty-taxi", from: "Coimbatore", to: "Ooty", fromSlug: "coimbatore", distanceKm: 90, duration: "2h 30m" },
  { slug: "coimbatore-to-bangalore-taxi", from: "Coimbatore", to: "Bangalore", fromSlug: "coimbatore", distanceKm: 360, duration: "6h" },
  { slug: "coimbatore-to-kodaikanal-taxi", from: "Coimbatore", to: "Kodaikanal", fromSlug: "coimbatore", distanceKm: 175, duration: "3h 30m" },
  { slug: "coimbatore-to-cochin-taxi", from: "Coimbatore", to: "Cochin", fromSlug: "coimbatore", distanceKm: 190, duration: "4h 30m" },
  { slug: "madurai-to-rameswaram-taxi", from: "Madurai", to: "Rameswaram", fromSlug: "madurai", distanceKm: 165, duration: "3h" },
  { slug: "madurai-to-coimbatore-taxi", from: "Madurai", to: "Coimbatore", fromSlug: "madurai", distanceKm: 210, duration: "4h" },
  { slug: "madurai-to-kumbakonam-taxi", from: "Madurai", to: "Kumbakonam", fromSlug: "madurai", distanceKm: 210, duration: "4h" },
  { slug: "bangalore-to-mysore-taxi", from: "Bangalore", to: "Mysore", fromSlug: "bengaluru", distanceKm: 150, duration: "3h" },
  { slug: "bangalore-to-ooty-taxi", from: "Bangalore", to: "Ooty", fromSlug: "bengaluru", distanceKm: 270, duration: "5h" },
  { slug: "trichy-to-madurai-taxi", from: "Trichy", to: "Madurai", fromSlug: "tiruchirappalli", distanceKm: 135, duration: "2h 30m" },
  { slug: "salem-to-coimbatore-taxi", from: "Salem", to: "Coimbatore", fromSlug: "salem", distanceKm: 160, duration: "3h" },
  { slug: "salem-to-bangalore-taxi", from: "Salem", to: "Bangalore", fromSlug: "salem", distanceKm: 200, duration: "4h" },
  { slug: "trichy-to-thanjavur-taxi", from: "Trichy", to: "Thanjavur", fromSlug: "tiruchirappalli", distanceKm: 60, duration: "1h 30m" },
];

export const ROUTE_PAGES: RoutePage[] = ROUTE_DEFS.map((route) => ({
  ...route,
  estimatedFare: estimateOneWayFare(route.distanceKm),
}));

export function getRouteBySlug(slug: string) {
  return ROUTE_PAGES.find((r) => r.slug === slug);
}

export const FOOTER_ROUTE_LINKS = ROUTE_PAGES.slice(0, 8).map((r) => ({
  name: `${r.from} to ${r.to} Taxi`,
  path: `/${r.slug}`,
}));

export const ROUTE_GROUPS = [
  {
    heading: "Most Booked City-to-City Taxi Routes",
    routes: ["Chennai → Coimbatore", "Chennai → Madurai", "Chennai → Trichy", "Chennai → Salem"],
  },
  {
    heading: "Popular Routes to Bangalore",
    routes: ["Chennai → Bangalore", "Coimbatore → Bangalore", "Salem → Bangalore", "Vellore → Bangalore"],
  },
  {
    heading: "Kerala One Way Taxi Routes from Tamil Nadu",
    routes: ["Coimbatore → Kochi", "Coimbatore → Palakkad", "Coimbatore → Thrissur", "Chennai → Trivandrum"],
  },
  {
    heading: "Temple & Pilgrimage Taxi Routes",
    routes: ["Madurai → Rameswaram", "Chennai → Kanchipuram", "Trichy → Thanjavur", "Thanjavur → Kumbakonam"],
  },
  {
    heading: "Hill Station Taxi Routes for Weekend Trips",
    routes: ["Coimbatore → Ooty", "Madurai → Kodaikanal", "Salem → Yercaud", "Chennai → Yelagiri"],
  },
];
