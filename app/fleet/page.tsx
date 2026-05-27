import { buildMetadata } from "@/lib/seo";
import { VehiclePricingSection } from "@/components/HomeSections";

export const metadata = buildMetadata({
  title: "Fleet & Available Cars | Nagma Tours and Travels",
  description:
    "Available taxi fleet including Mini, Sedan, SUV, Innova, Innova Crysta, Innova High Cross and Tempo Traveller for one way and outstation travel.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <div className="pt-24">
      <div className="sr-only">
        <h1>Available Cars</h1>
      </div>
      <VehiclePricingSection />
    </div>
  );
}
