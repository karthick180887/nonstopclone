import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name} website and taxi booking services.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 prose prose-sm">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          {SITE.name} respects your privacy. Information collected through booking forms (name, phone, travel details)
          is used solely to process taxi bookings and provide customer support.
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Name and contact number for booking confirmation</li>
          <li>Pickup and drop locations, travel date and vehicle preference</li>
          <li>Website usage data via standard analytics tools</li>
        </ul>
        <h2>How We Use Information</h2>
        <p>We use your information to confirm bookings, share fare details, assign drivers and provide support.</p>
        <h2>Contact</h2>
        <p>For privacy enquiries: {SITE.email}</p>
      </div>
    </div>
  );
}
