import { buildMetadata } from "@/lib/seo";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { HOME_FAQS } from "@/lib/faqs-data";

export const metadata = buildMetadata({
  title: "FAQ | One Way Taxi Booking Questions",
  description: "Frequently asked questions about one way taxi fare, driver bata, minimum KM billing and booking process.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <div className="pt-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-2">FAQ</h1>
          <p className="text-gray-600 mb-4">Common questions about one way taxi booking</p>
        </div>
      </div>
      <FAQSection faqs={HOME_FAQS} />
      <CTASection />
    </>
  );
}
