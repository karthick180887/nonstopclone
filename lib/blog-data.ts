export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  faqs?: { question: string; answer: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "chennai-to-coimbatore-taxi-fare-distance",
    title: "Chennai to Coimbatore Taxi – Fare, Distance & Travel Guide",
    description:
      "Complete guide for Chennai to Coimbatore one way taxi including distance, travel time, fare estimates and booking tips.",
    publishDate: "2025-06-01",
  },
  {
    slug: "chennai-to-madurai-taxi-service-guide",
    title: "Chennai to Madurai Taxi Service – Route, Price & Travel Time",
    description:
      "Book Chennai to Madurai one way taxi with route details, current cab fares, travel duration and expert tips.",
    publishDate: "2025-06-02",
  },
  {
    slug: "chennai-to-bangalore-one-way-taxi",
    title: "Chennai to Bangalore One Way Taxi – Fare, Distance & Booking Tips",
    description:
      "Chennai to Bangalore one way taxi fare details, route options, travel time and comfortable interstate cab booking guide.",
    publishDate: "2025-06-03",
  },
  {
    slug: "coimbatore-to-ooty-taxi-guide",
    title: "Coimbatore to Ooty Taxi Guide – Hill Route Fare & Tips",
    description: "Coimbatore to Ooty taxi fare, hill route travel time and booking tips for weekend hill station trips.",
    publishDate: "2025-06-04",
  },
  {
    slug: "madurai-to-rameswaram-taxi-details",
    title: "Madurai to Rameswaram Taxi – Pilgrimage Route Details",
    description: "Madurai to Rameswaram taxi distance, fare and travel tips for temple pilgrimage journeys.",
    publishDate: "2025-06-05",
  },
  {
    slug: "trichy-to-thanjavur-taxi-guide",
    title: "Trichy to Thanjavur Taxi Guide – Heritage Route Fare",
    description: "Trichy to Thanjavur one way taxi fare, distance and heritage temple travel information.",
    publishDate: "2025-06-06",
  },
  {
    slug: "how-one-way-taxi-works",
    title: "How One Way Taxi Works – Complete Booking Guide",
    description: "Understand how one way drop taxi pricing works, minimum KM billing and driver bata charges.",
    publishDate: "2025-06-07",
  },
  {
    slug: "one-way-vs-roundtrip-taxi",
    title: "One Way vs Round Trip Taxi – Which is Better?",
    description: "Compare one way and round trip taxi pricing to choose the best option for your travel needs.",
    publishDate: "2025-06-08",
  },
  {
    slug: "taxi-fare-calculation-guide",
    title: "Taxi Fare Calculation Guide – Per KM Pricing Explained",
    description: "Learn how taxi fare is calculated with per KM rates, driver bata, toll charges and minimum billing.",
    publishDate: "2025-06-09",
  },
  {
    slug: "benefits-of-one-way-taxi",
    title: "Benefits of One Way Taxi for Intercity Travel",
    description: "Discover why one way taxi is the most economical option for city-to-city drop travel in South India.",
    publishDate: "2025-06-10",
  },
  {
    slug: "best-time-to-travel-tamil-nadu",
    title: "Best Time to Travel Tamil Nadu by Taxi",
    description: "Seasonal travel tips for Tamil Nadu intercity taxi journeys including weather and festival periods.",
    publishDate: "2025-06-11",
  },
  {
    slug: "safe-taxi-travel-tips",
    title: "Safe Taxi Travel Tips for Long Distance Journeys",
    description: "Essential safety tips for comfortable and secure outstation taxi travel across South India.",
    publishDate: "2025-06-12",
  },
];

export function getBlogBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
