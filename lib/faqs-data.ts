import { SITE } from "./site-data";

export const HOME_FAQS = [
  {
    question: "What is one way drop taxi?",
    answer:
      "One way drop taxi means you pay only for the forward journey from pickup to drop location. No return fare is charged, making it ideal for city-to-city travel.",
  },
  {
    question: "What is the minimum distance for one way taxi?",
    answer: `Minimum billing is ${SITE.minKmOneWay} KM for one way trips. Even if your actual distance is lower, fare is calculated based on minimum KM plus driver bata.`,
  },
  {
    question: "What is driver bata?",
    answer:
      "Driver bata is a fixed allowance paid to the driver for food and rest on long trips. Mini is ₹400; Sedan, SUV and Innova variants are ₹500 one way; Tempo Traveller round trip driver bata is ₹800.",
  },
  {
    question: "Are toll charges included in the fare?",
    answer:
      "Toll, parking and permit charges are billed as per actual and are not included in the per KM rate shown on the website.",
  },
  {
    question: "How do I book a taxi?",
    answer:
      "You can book instantly by calling +91 81221 96198 or sending a WhatsApp message with your pickup, drop, date and vehicle preference.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide one way and outstation taxi services across Tamil Nadu, Kerala and Karnataka with coverage in all major cities and tourist destinations.",
  },
];

export const PAGE_FAQS: Record<string, { question: string; answer: string }[]> = {
  faq: HOME_FAQS,
  "one-way-taxi": [
    {
      question: "How is one way taxi fare calculated?",
      answer: `Fare = (Distance × Per KM Rate) + driver bata. Minimum ${SITE.minKmOneWay} KM billing applies. Driver bata is ₹400 for Mini and ₹500 for Sedan, SUV, Innova and Tempo Traveller (one way).`,
    },
    {
      question: "Can I book one way taxi for airport drop?",
      answer: "Yes, we provide airport drop and pickup services from all major cities with fixed transparent pricing.",
    },
  ],
};
