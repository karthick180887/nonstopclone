import { buildMetadata } from "@/lib/seo";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { ONE_WAY_TERMS, PRICING_NOTES } from "@/lib/services-data";
import { PAGE_FAQS } from "@/lib/faqs-data";
import { SITE } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "One Way Taxi Service | Drop Taxi South India",
  description: "Book one way drop taxi across Tamil Nadu, Kerala and Karnataka. Pay only for forward journey with fixed per KM pricing.",
  path: "/one-way-taxi",
});

export default function OneWayTaxiPage() {
  return (
    <>
      <div className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">One Way Taxi Service</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            One way drop taxi lets you travel from one city to another without paying for the return journey.
            With {SITE.name}, you get fixed per KM pricing, minimum {SITE.minKmOneWay} KM billing, and ₹{SITE.driverBata} driver bata.
          </p>
          <h2 className="text-xl font-bold text-[#0B6B2E] mb-3">One Way Travel Terms</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            {ONE_WAY_TERMS.map((t) => (
              <li key={t}>✔ {t}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold text-[#0B6B2E] mb-3">Important Information</h2>
          <ul className="space-y-2 text-gray-700">
            {PRICING_NOTES.map((t) => (
              <li key={t}>✔ {t}</li>
            ))}
          </ul>
        </div>
      </div>
      <FAQSection faqs={PAGE_FAQS["one-way-taxi"]} />
      <CTASection />
    </>
  );
}
