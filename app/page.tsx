import HeroSection from "@/components/HeroSection";
import PricingTabs from "@/components/PricingTabs";
import CTASection from "@/components/CTASection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import {
  PopularRoutesSection,
  VehiclePricingSection,
  CitiesSection,
  WhyChooseSection,
  DestinationsSection,
  RouteGroupsSection,
  ProcessSection,
} from "@/components/HomeSections";
import { HOME_FAQS } from "@/lib/faqs-data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PricingTabs />
      <PopularRoutesSection />
      <VehiclePricingSection />
      <CitiesSection />
      <WhyChooseSection />
      <DestinationsSection />
      <RouteGroupsSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection faqs={HOME_FAQS} />
      <CTASection />
    </>
  );
}
