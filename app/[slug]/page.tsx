import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { buildTaxiSlug, findOdRouteBySlug, ROUTE_OD } from "@/lib/route-od";
import { SITE } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.values(ROUTE_OD).map((route) => ({ slug: buildTaxiSlug(route.from, route.to) }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const route = findOdRouteBySlug(slug);
  if (!route) return {};
  return buildMetadata({
    title: `${route.from} to ${route.to} One Way Taxi | Nonstop Drop Taxi`,
    description: route.description,
    path: `/${slug}`,
  });
}

export default async function RoutePage({ params }: Props) {
  const { slug } = await params;
  const route = findOdRouteBySlug(slug);
  if (!route) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the fare from ${route.from} to ${route.to}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The estimated one way taxi fare is ${route.fare} including driver allowance.`,
        },
      },
      {
        "@type": "Question",
        name: "Is driver allowance included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, driver allowance is included (amount varies by vehicle; Mini from ₹400).",
        },
      },
    ],
  };

  const popularRoutes = Object.values(ROUTE_OD)
    .filter(
      (r) =>
        r.from.toLowerCase().replace(/\s+/g, "") === route.from.toLowerCase().replace(/\s+/g, "") &&
        r.to.toLowerCase().replace(/\s+/g, "") !== route.to.toLowerCase().replace(/\s+/g, "")
    )
    .slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#F0FDF4] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block bg-[#E8F7EE] text-[#0B6B2E] px-4 py-2 rounded-full text-sm font-semibold mb-5">
            One Way Drop Taxi • Fixed Fare • No Return Charge
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B6B2E] mb-4">
            {route.from} → {route.to} Drop Taxi
          </h1>
          <p className="text-gray-600 max-w-2xl mb-8">{route.description}</p>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex gap-6 text-sm text-gray-600 mb-4">
                <span>📍 {route.distance}</span>
                <span>⏱ {route.duration}</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{route.perKm}</p>
                <p>{route.driverAllowance}</p>
                <p>Toll & parking extra</p>
                <p className="text-xs text-gray-500">Minimum {SITE.minKmOneWay} KM billing applies</p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end">
              <div className="bg-[#F0FDF4] px-6 py-4 rounded-2xl text-center md:text-right">
                <p className="text-3xl font-extrabold text-[#1FAE4B]">{route.fare}</p>
                <p className="text-xs text-gray-500">Estimated one way fare</p>
              </div>
              <div className="flex gap-3 mt-5 w-full md:w-auto">
                <a
                  href="tel:+918122196198"
                  className="bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black px-6 py-3 rounded-xl font-bold shadow hover:scale-[1.03] transition text-center"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/918122196198?text=Hi%20I%20need%20taxi%20from%20${route.from}%20to%20${route.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#16A34A] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center"
                >
                  <WhatsAppIcon size={16} className="text-white" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-6">Instant confirmation • Transparent pricing • 24/7 support</p>
          <div className="max-w-4xl mx-auto mt-10 text-gray-600 leading-relaxed text-sm md:text-base">
            <p>
              {route.from} to {route.to} one way taxi is one of the most preferred routes for outstation travel in
              Tamil Nadu. Nonstop Drop Taxi offers affordable drop taxi service with fixed pricing, no hidden charges
              and professional drivers. Our service is ideal for family trips, business travel and airport transfers.
              Book your one way cab now and enjoy a safe, comfortable and hassle-free journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0B6B2E] mb-6">Why Choose Nonstop Drop Taxi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9FAFB] p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">One Way Pricing</h3>
              <p className="text-sm text-gray-600">Pay only for the distance you travel. No return fare.</p>
            </div>
            <div className="bg-[#F9FAFB] p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Verified Drivers</h3>
              <p className="text-sm text-gray-600">Experienced and professional drivers for safe travel.</p>
            </div>
            <div className="bg-[#F9FAFB] p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">24/7 Booking</h3>
              <p className="text-sm text-gray-600">Call or WhatsApp anytime for instant booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0B6B2E] mb-6">
            {route.from} to {route.to} Taxi FAQs
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <strong>
                What is the fare from {route.from} to {route.to}?
              </strong>
              <br />
              The estimated one way taxi fare is {route.fare} including driver allowance.
            </p>
            <p>
              <strong>Is driver allowance included?</strong>
              <br />
              Yes, driver allowance is included. Amount depends on vehicle (Mini ₹400; Sedan & above ₹500).
            </p>
            <p>
              <strong>Are toll charges included?</strong>
              <br />
              Toll and parking charges are extra as per actual.
            </p>
            <p>
              <strong>Is this one way or round trip?</strong>
              <br />
              This is a one way drop taxi. No return fare is charged.
            </p>
            <p>
              <strong>How can I book?</strong>
              <br />
              You can call or WhatsApp for instant booking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold text-[#0B6B2E] mb-4">Popular Routes from {route.from}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {popularRoutes.map((r) => (
              <a key={`${r.from}-${r.to}`} href={`/${buildTaxiSlug(r.from, r.to)}`} className="text-green-700 hover:underline">
                {r.from} → {r.to} Taxi
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
