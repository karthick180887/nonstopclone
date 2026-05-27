export type CityPage = {
  slug: string;
  name: string;
  displayName: string;
  tagline?: string;
  image?: string;
};

export const CITIES: CityPage[] = [
  { slug: "chennai", name: "Chennai", displayName: "Chennai", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "coimbatore", name: "Coimbatore", displayName: "Coimbatore", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "madurai", name: "Madurai", displayName: "Madurai", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "salem", name: "Salem", displayName: "Salem", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "tiruchirappalli", name: "Tiruchirappalli", displayName: "Tiruchirappalli", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "tirunelveli", name: "Tirunelveli", displayName: "Tirunelveli", tagline: "One way taxi • Outstation • Airport drop" },
  { slug: "ariyalur", name: "Ariyalur", displayName: "Ariyalur" },
  { slug: "bengaluru", name: "Bengaluru", displayName: "Bengaluru" },
  { slug: "chengalpattu", name: "Chengalpattu", displayName: "Chengalpattu" },
  { slug: "cuddalore", name: "Cuddalore", displayName: "Cuddalore" },
  { slug: "dharmapuri", name: "Dharmapuri", displayName: "Dharmapuri" },
  { slug: "dindigul", name: "Dindigul", displayName: "Dindigul" },
  { slug: "erode", name: "Erode", displayName: "Erode" },
  { slug: "kallakurichi", name: "Kallakurichi", displayName: "Kallakurichi" },
  { slug: "kanchipuram", name: "Kanchipuram", displayName: "Kanchipuram" },
  { slug: "kanyakumari", name: "Kanyakumari", displayName: "Kanyakumari" },
  { slug: "kodaikanal", name: "Kodaikanal", displayName: "Kodaikanal" },
  { slug: "krishnagiri", name: "Krishnagiri", displayName: "Krishnagiri" },
  { slug: "kumbakonam", name: "Kumbakonam", displayName: "Kumbakonam" },
  { slug: "mayiladuthurai", name: "Mayiladuthurai", displayName: "Mayiladuthurai" },
  { slug: "nagapattinam", name: "Nagapattinam", displayName: "Nagapattinam" },
  { slug: "namakkal", name: "Namakkal", displayName: "Namakkal" },
  { slug: "nilgiris", name: "Nilgiris", displayName: "Nilgiris" },
  { slug: "perambalur", name: "Perambalur", displayName: "Perambalur" },
  { slug: "puducherry", name: "Puducherry", displayName: "Puducherry" },
  { slug: "pudukkottai", name: "Pudukkottai", displayName: "Pudukkottai" },
  { slug: "ramanathapuram", name: "Ramanathapuram", displayName: "Ramanathapuram" },
  { slug: "rameswaram", name: "Rameswaram", displayName: "Rameswaram" },
  { slug: "ranipet", name: "Ranipet", displayName: "Ranipet" },
  { slug: "sivaganga", name: "Sivaganga", displayName: "Sivaganga" },
  { slug: "tenkasi", name: "Tenkasi", displayName: "Tenkasi" },
  { slug: "thanjavur", name: "Thanjavur", displayName: "Thanjavur" },
  { slug: "theni", name: "Theni", displayName: "Theni" },
  { slug: "thoothukudi", name: "Thoothukudi", displayName: "Thoothukudi" },
  { slug: "tirupathur", name: "Tirupathur", displayName: "Tirupathur" },
  { slug: "tiruppur", name: "Tiruppur", displayName: "Tiruppur" },
  { slug: "tiruvallur", name: "Tiruvallur", displayName: "Tiruvallur" },
  { slug: "tiruvannamalai", name: "Tiruvannamalai", displayName: "Tiruvannamalai" },
  { slug: "tiruvarur", name: "Tiruvarur", displayName: "Tiruvarur" },
  { slug: "vellore", name: "Vellore", displayName: "Vellore" },
  { slug: "virudhunagar", name: "Virudhunagar", displayName: "Virudhunagar" },
  { slug: "villupuram", name: "Villupuram", displayName: "Villupuram" },
];

export const FEATURED_CITIES = CITIES.filter((c) =>
  ["chennai", "coimbatore", "madurai", "salem", "tiruchirappalli", "tirunelveli"].includes(c.slug)
);

export const SECONDARY_CITIES = CITIES.filter(
  (c) => !["chennai", "coimbatore", "madurai", "salem", "tiruchirappalli", "tirunelveli"].includes(c.slug)
);

export const DESTINATION_TAG_COLORS: Record<string, string> = {
  city: "bg-blue-600",
  temple: "bg-orange-500",
  hill: "bg-green-600",
  coastal: "bg-cyan-500",
  business: "bg-indigo-600",
  scenic: "bg-purple-600",
};

export const DESTINATIONS = [
  { name: "Chennai", slug: "chennai", category: "city", line: "Airport & city travel", image: "/assets/images/chennai-tourist-beach-view.avif" },
  { name: "Bangalore", slug: "bengaluru", category: "business", line: "Interstate business trips", image: "/assets/images/bangalore-palace-tour.avif" },
  { name: "Coimbatore", slug: "coimbatore", category: "business", line: "Industrial & city travel", image: "/assets/images/coimbatore-waterfalls-nature.avif" },
  { name: "Madurai", slug: "madurai", category: "temple", line: "Temple & family trips", image: "/assets/images/madurai-meenakshitemple-view.avif" },
  { name: "Rameswaram", slug: "rameswaram", category: "temple", line: "Pilgrimage travel", image: "/assets/images/rameshwaram-temple-pamban-bridge.avif" },
  { name: "Tirupati", slug: "tirupati", category: "temple", line: "Spiritual journeys", image: "/assets/images/tirupati-balaji-temple-view.avif" },
  { name: "Ooty", slug: "nilgiris", category: "hill", line: "Hill station rides", image: "/assets/images/ooty-lake-hills-view.avif" },
  { name: "Kodaikanal", slug: "kodaikanal", category: "hill", line: "Scenic mountain travel", image: "/assets/images/kodaikanal-lake-mountain-view.avif" },
  { name: "Munnar", slug: "munnar", category: "hill", line: "Nature & tea estates", image: "/assets/images/munnar-tea-estate-hills.avif" },
  { name: "Pondicherry", slug: "puducherry", category: "coastal", line: "Beach & leisure trips", image: "/assets/images/pondicherry-beach-promenade.avif" },
  { name: "Kanyakumari", slug: "kanyakumari", category: "coastal", line: "Coastal long drives", image: "/assets/images/kanyakumari-vivekananda-rock.avif" },
  { name: "Alleppey", slug: "alleppey", category: "coastal", line: "Backwater travel", image: "/assets/images/alleppey-backwater-houseboat.avif" },
  { name: "Cochin", slug: "cochin", category: "city", line: "City & port travel", image: "/assets/images/cochin-chinese-fishing-view.avif" },
  { name: "Mysore", slug: "mysore", category: "city", line: "Heritage & palace travel", image: "/assets/images/mysore-palace-tour.avif" },
  { name: "Trichy", slug: "tiruchirappalli", category: "city", line: "Temple & city trips", image: "/assets/images/trichy-rockfort-temple-view.avif" },
  { name: "Thanjavur", slug: "thanjavur", category: "temple", line: "Heritage temple travel", image: "/assets/images/thanjavur-brihadeeswarar-temple.avif" },
  { name: "Salem", slug: "salem", category: "city", line: "Quick intercity travel", image: "/assets/images/salem-yercaud-hills-view.avif" },
  { name: "Tirunelveli", slug: "tirunelveli", category: "city", line: "Long distance rides", image: "/assets/images/tirunelveli-tamirabarani-river.avif" },
  { name: "Kutralam", slug: "kutralam", category: "scenic", line: "Waterfall trips", image: "/assets/images/kutralam-waterfalls-view.avif" },
  { name: "Velankanni", slug: "velankanni", category: "temple", line: "Pilgrimage & family travel", image: "/assets/images/velankanni-church-basilica.avif" },
];

export function getCityBySlug(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}
