import { buildMetadata } from "@/lib/seo";
import PricingTabs from "@/components/PricingTabs";

export const metadata = buildMetadata({
  title: "Taxi Fare & Pricing | droptaxi.live One Way & Outstation Rates",
  description: "Check droptaxi.live pricing for one way and outstation travel across Tamil Nadu, Kerala and Karnataka. Transparent fare details with no hidden charges and easy booking.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="pt-28">
      <div className="sr-only">
        <h1>Taxi Fare & Pricing</h1>
      </div>
      <PricingTabs />
    </div>
  );
}
