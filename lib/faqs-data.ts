export const HOME_FAQS = [
  {
    question: "What is one way drop taxi?",
    answer:
      "One way drop taxi means you pay only for the forward journey from pickup to drop location. No return fare is charged, making it ideal for city-to-city travel.",
  },
  {
    question: "What is the minimum distance for one way taxi?",
    answer:
      "Minimum billing is 130 KM for one way trips. Even if your actual distance is lower, fare is calculated based on minimum KM plus driver bata.",
  },
  {
    question: "What is driver bata?",
    answer:
      "Driver bata is a fixed allowance of ₹400 per trip (₹400 per day for round trips) paid to the driver for food and accommodation during long journeys.",
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
      answer: "Fare = (Distance × Per KM Rate) + ₹400 driver bata. Minimum 130 KM billing applies for one way trips.",
    },
    {
      question: "Can I book one way taxi for airport drop?",
      answer: "Yes, we provide airport drop and pickup services from all major cities with fixed transparent pricing.",
    },
  ],
};
