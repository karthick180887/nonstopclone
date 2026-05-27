import Link from "next/link";
import { redirect } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  CITY_LM_DATA,
  CITY_OX_ORDER,
  cityCardEstimatedFare,
  cityDropTaxiHref,
  getCityLm,
} from "@/lib/city-lm";
import { buildMetadata } from "@/lib/seo";
import { LOWEST_ONE_WAY_RATE, SITE, VEHICLES } from "@/lib/site-data";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return Object.keys(CITY_LM_DATA).map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const t = decodeURIComponent(city).toLowerCase();
  const a = getCityLm(t);
  if (!a) return {};
  const r = a.city;
  const title = `${r} One Way Taxi | Outstation Cab from ${r} | Nonstop Drop Taxi`;
  const description = `Book one way taxi from ${r} with fixed per KM pricing and no return fare. Clean cars, professional drivers and instant booking support. Available for outstation, airport and long distance travel.`;
  return buildMetadata({
    title,
    description,
    path: `/city/${t}`,
  });
}

export default async function CityDistrictPage({ params }: Props) {
  const { city } = await params;
  const slug = decodeURIComponent(city).toLowerCase();
  const a = getCityLm(slug);
  if (!a) redirect("/");

  const e = a.city;
  const canonical = `${SITE.url}/city/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: SITE.name,
    areaServed: { "@type": "City", name: e },
    url: canonical,
    telephone: SITE.phoneTel,
    serviceType: "One Way Taxi Service",
  };

  const otherCities = CITY_OX_ORDER.filter((s) => s.slug !== slug).slice(0, 20);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-24 pb-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span>›</span>
          <span className="text-green-700 font-semibold">{e} One Way Taxi</span>
        </div>

        <section className="max-w-7xl mx-auto px-4 mb-16">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B6B2E]">{e} One Way Taxi Service – Fixed Fare Drop Taxi</h1>
          <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">{a.description}</p>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Looking for a reliable taxi from {e}? Check available{" "}
            <Link href="/one-way-taxi" className="text-green-700 font-semibold hover:underline">
              one way and outstation taxi services
            </Link>{" "}
            with fixed fare, professional drivers and instant booking support.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0B6B2E] mb-3">Popular Places in {e}</h3>
              <ul className="text-gray-700 space-y-1">
                {a.bestPlaces.map((place, l) => (
                  <li key={l}>• {place}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-[#0B6B2E] mb-3">Fare & Travel Details for Taxi from {e}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Taxi services from {e} are available for one way, round trip and outstation travel across Tamil Nadu and
                nearby states. Fare is calculated based on distance travelled with a minimum 130 KM billing for one way
                trips.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                {VEHICLES.map((v) => (
                  <li key={v.id}>
                    • {v.name}: ₹{v.oneWayRate} per KM (one way)
                  </li>
                ))}
                <li>• Driver allowance ₹400 per trip</li>
                <li>• Toll, parking & permit charges extra</li>
                <li>• Suitable for airport, intercity and long distance travel</li>
              </ul>
              <p className="text-[11px] text-gray-500 mt-3">Transparent pricing • 24/7 booking • Professional drivers</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0B6B2E] text-center mb-12">Popular Taxi Routes from {e}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {a.routes.map((s, l) => {
              const d = cityCardEstimatedFare(s.distance, LOWEST_ONE_WAY_RATE);
              const href = cityDropTaxiHref(slug, s.to);
              const waMsg = `Hi, I want to book taxi from ${e} to ${s.to}.
Distance: ${s.distance} km
Please share fare and availability.`;
              return (
                <div
                  key={`${s.to}-${l}`}
                  className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition group"
                >
                  <Link href={href} scroll className="block">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-lg text-[#0B6B2E] group-hover:underline">
                        {e} → {s.to}
                      </h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Popular</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Distance: {s.distance} km</p>
                      <p>Travel Time: {s.time}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-green-600 font-extrabold text-xl">₹{d.toLocaleString("en-IN")}</p>
                      <p className="text-xs text-gray-500">Estimated one way fare • Toll & parking extra</p>
                    </div>
                  </Link>
                  <div className="flex gap-3 mt-5">
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="w-full text-center bg-gradient-to-r from-green-500 to-yellow-400 text-black py-2.5 rounded-xl font-semibold"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-green-600 text-white py-2.5 rounded-xl font-semibold inline-flex items-center justify-center gap-1"
                    >
                      <WhatsAppIcon size={16} className="text-white shrink-0" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-gray-500 mt-10">Instant confirmation • Transparent pricing • 24/7 support</p>
        </section>

        <section className="mt-16 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0B6B2E] mb-4">Why Choose Nonstop Drop Taxi in {e}</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• One way pricing based on distance travelled</li>
            <li>• ₹400 driver allowance per trip</li>
            <li>• Toll, parking & permit charges extra</li>
            <li>• Verified drivers and clean vehicles</li>
            <li>• 24/7 call and WhatsApp booking support</li>
          </ul>
        </section>

        <section className="mt-20 max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0B6B2E] mb-8 text-center">{e} Taxi Service – FAQs</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">Do you provide one way taxi from {e}?</h3>
              <p>
                Yes, we provide affordable one way taxi services from {e}
                to major cities across Tamil Nadu and South India.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">What is the minimum km billing?</h3>
              <p>Minimum billing is 130 KM for one way trips with ₹400 driver allowance.</p>
            </div>
            <div>
              <h3 className="font-semibold">Are toll charges included?</h3>
              <p>Toll, parking and permit charges are extra as per actual.</p>
            </div>
          </div>
        </section>

        <section className="mt-14 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#0B6B2E] mb-4">Popular Routes from {e}</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-medium text-green-700">
            {otherCities.map((s) => (
              <Link key={s.slug} href={`/city/${s.slug}`} className="hover:underline">
                {e} to {s.name} Taxi
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
