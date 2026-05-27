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
  driverBata: 400,
  minKmOneWay: 130,
  minKmRoundTrip: 250,
} as const;

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
    id: "sedan",
    name: "Sedan",
    label: "SEDAN",
    oneWayRate: 14,
    roundTripRate: 13,
    passengers: "1–4",
    luggage: "2 Bags",
    tag: "Best Price",
    image: "/assets/vehicles/swift-dzire-cab.avif",
  },
  {
    id: "etios",
    name: "Etios",
    label: "ETIOS",
    oneWayRate: 14,
    roundTripRate: 13,
    passengers: "1–4",
    luggage: "2 Bags",
    tag: "Most Booked",
    image: "/assets/vehicles/etios-sedan-cab.avif",
  },
  {
    id: "suv",
    name: "SUV",
    label: "SUV",
    oneWayRate: 19,
    roundTripRate: 18,
    passengers: "1–6",
    luggage: "4 Bags",
    tag: "Family",
    image: "/assets/vehicles/ertiga-mpv-taxi.avif",
  },
  {
    id: "innova",
    name: "Innova",
    label: "INNOVA",
    oneWayRate: 20,
    roundTripRate: 19,
    passengers: "1–7",
    luggage: "3 Bags",
    tag: "Premium",
    image: "/assets/vehicles/innova-mpv-taxi.avif",
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
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Well Maintained Cars",
    description: "Clean sedan and SUV options for long distance travel.",
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
