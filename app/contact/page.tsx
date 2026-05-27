import { buildMetadata } from "@/lib/seo";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact & Booking | droptaxi.live",
  description: `Contact ${SITE.name} for one way and outstation taxi booking. Call ${SITE.phone} or WhatsApp for instant fare.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24">
      <CTASection />
    </div>
  );
}
