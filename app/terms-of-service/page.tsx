import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { ONE_WAY_TERMS, ROUND_TRIP_TERMS } from "@/lib/services-data";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for ${SITE.name} one way and outstation taxi services.`,
  path: "/terms-of-service",
});

export default function TermsPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 prose prose-sm">
        <h1>Terms & Conditions</h1>
        <p>By booking with {SITE.name}, you agree to the following terms.</p>
        <h2>One Way Terms</h2>
        <ul>{ONE_WAY_TERMS.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>Round Trip Terms</h2>
        <ul>{ROUND_TRIP_TERMS.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>General</h2>
        <p>Toll, parking and permit charges are billed as per actual. Route changes may affect final fare.</p>
      </div>
    </div>
  );
}
