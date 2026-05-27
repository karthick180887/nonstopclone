import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  CITY_LM_DATA,
  cityDropTaxiSlug,
  cityRouteVehicleFare,
  findRouteForDropSlug,
  getCityLm,
  parseDropTaxiSlug,
} from "@/lib/city-lm";
import { DROP_TAXI_VEHICLES } from "@/lib/city-route-vehicles";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";

type Props = { params: Promise<{ city: string; dropSlug: string }> };

export async function generateStaticParams() {
  const out: { city: string; dropSlug: string }[] = [];
  for (const city of Object.keys(CITY_LM_DATA)) {
    const entry = CITY_LM_DATA[city];
    for (const r of entry.routes) {
      out.push({ city, dropSlug: cityDropTaxiSlug(city, r.to) });
    }
  }
  return out;
}

export async function generateMetadata({ params }: Props) {
  const { city, dropSlug } = await params;
  const e = decodeURIComponent(city).toLowerCase();
  const a = getCityLm(e);
  if (!a) return {};
  const parsed = parseDropTaxiSlug(e, dropSlug);
  if (!parsed) return {};
  const r = findRouteForDropSlug(a, parsed.toSlug);
  if (!r) return {};
  return buildMetadata({
    title: `${a.city} to ${r.to} Taxi Fare | Nonstop Drop Taxi`,
    description: `Book ${a.city} to ${r.to} one way taxi. ${r.distance} km, approx ${r.time}. Fixed per KM pricing with driver bata from ₹400 (Mini).`,
    path: `/city/${e}/${dropSlug}`,
  });
}

const WHY_CHOOSE = [
  { title: "One Way Pricing", desc: "Pay only for distance travelled. No return fare." },
  { title: "Experienced Drivers", desc: "Professional drivers for long distance routes." },
  { title: "Flexible Pickup", desc: "Choose your pickup time based on your schedule." },
  { title: "Transparent Fare", desc: "Clear per KM pricing with no hidden charges." },
  { title: "Multiple Vehicle Options", desc: "Mini, sedan, SUV, Innova and tempo traveller available." },
  { title: "Quick Booking", desc: "Instant confirmation via call or WhatsApp." },
] as const;

export default async function CityDropTaxiPage({ params }: Props) {
  const { city, dropSlug } = await params;
  const e = decodeURIComponent(city).toLowerCase();
  const a = getCityLm(e);
  if (!a) notFound();

  const parsed = parseDropTaxiSlug(e, dropSlug);
  if (!parsed) notFound();

  const r = findRouteForDropSlug(a, parsed.toSlug);
  if (!r) notFound();

  const n = (rate: number) => cityRouteVehicleFare(r.distance, rate);
  const starter = DROP_TAXI_VEHICLES[0];

  const waBody = (vehicle: (typeof DROP_TAXI_VEHICLES)[number]) => {
    const fare = n(vehicle.rate).toLocaleString("en-IN");
    return `Hi, I want to book taxi

From: ${a.city}
To: ${r.to}
Distance: ${r.distance} km
Vehicle: ${vehicle.name}
Estimated Fare: ₹${fare}

Please confirm availability.`;
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(a.city)}+to+${encodeURIComponent(r.to)}&output=embed`;

  return (
    <>
      <div className="container mx-auto px-4 mt-6 pb-16">
        <div className="text-sm text-gray-500 mb-3">
          <Link href="/">Home</Link> › <Link href={`/city/${e}`}>{a.city}</Link> ›{" "}
          <span className="text-green-700">
            {a.city} to {r.to}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2">
          {a.city} → {r.to} Drop Taxi
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Travel {r.distance} km in approx {r.time}. Minimum {SITE.minKmOneWay} KM billing; driver bata from ₹400 (Mini) to
          ₹500 by vehicle. Suitable for outstation and one way trips.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-green-600 text-white rounded-xl p-4 mb-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-sm opacity-80">
                  {r.distance} km • {r.time}
                </p>
                <p className="text-2xl font-bold">₹{n(starter.rate).toLocaleString("en-IN")}</p>
                <p className="text-xs opacity-70 mt-1">{starter.name} • One Way Fare</p>
              </div>
              <a
                href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waBody(starter))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold text-sm shrink-0"
              >
                Book Now
              </a>
            </div>

            <p className="text-sm font-medium mb-2 text-gray-700">Route Map & Travel Overview</p>
            <div className="rounded-2xl overflow-hidden shadow-md border mb-6">
              <iframe width="100%" height="350" src={mapSrc} title="map" className="border-0" />
            </div>

            <div className="bg-white rounded-2xl shadow-md border overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h2 className="text-lg font-semibold">Taxi Fare Details</h2>
              </div>
              <div className="hidden sm:block">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-4 text-left">Vehicle</th>
                      <th className="px-4 py-4 text-center">Fare</th>
                      <th className="px-4 py-4 text-center">Book</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DROP_TAXI_VEHICLES.map((s, l) => (
                      <tr
                        key={s.name}
                        className={
                          l === 0 ? "bg-green-50 border-l-4 border-green-500" : l % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.image} alt={s.name} className="w-14 h-10 object-contain bg-gray-100 rounded" />
                            <div>
                              <span className="font-semibold text-[#0F172A]">{s.name}</span>
                              {l === 0 && (
                                <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">Popular</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-center font-bold text-green-600">
                          ₹{n(s.rate).toLocaleString("en-IN")}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <a
                            href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waBody(s))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm"
                          >
                            Book
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="block sm:hidden divide-y">
                {DROP_TAXI_VEHICLES.map((s, l) => (
                  <div
                    key={s.name}
                    className={`flex items-center justify-between px-4 py-4 ${l === 0 ? "bg-green-50 border-l-4 border-green-500" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.image} alt={s.name} className="w-14 h-10 object-contain bg-gray-100 rounded" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-[#0F172A] text-sm">{s.name}</p>
                          {l === 0 && (
                            <span className="text-xs bg-green-600 text-white px-2 py-0.5 rounded">Popular</span>
                          )}
                        </div>
                        <p className="text-green-600 font-bold text-base">₹{n(s.rate).toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waBody(s))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                    >
                      Book
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="block lg:hidden mt-5">
              <div className="bg-white rounded-2xl shadow-md border p-5">
                <h3 className="text-lg font-semibold mb-3">Quick Booking</h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{n(starter.rate).toLocaleString("en-IN")}
                  </span>
                  <p className="text-sm text-gray-500">{starter.name} Fare</p>
                </div>
                <a
                  href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waBody(starter))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center bg-green-600 text-white py-3 rounded-xl font-semibold mb-3"
                >
                  <WhatsAppIcon size={18} className="text-white" />
                  WhatsApp Booking
                </a>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-semibold"
                >
                  Call Now
                </a>
                <p className="text-[11px] text-gray-400 text-center mt-3">No hidden charges • Toll & parking extra</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-[#0F172A] mb-5">
                Why Choose {a.city} → {r.to} Taxi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_CHOOSE.map((item, l) => (
                  <div key={l} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg">✓</div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#0F172A]">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl sticky top-24 border p-6">
              <h3 className="font-bold text-lg mb-1">
                {a.city} → {r.to}
              </h3>
              <p className="text-sm text-gray-500 mb-4">One Way Drop Taxi</p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2 mb-5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Distance</span>
                  <span className="font-medium">{r.distance} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Est. Time</span>
                  <span className="font-medium">{r.time}</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-1">
                  <span className="text-gray-500">{starter.name} Fare</span>
                  <span className="font-bold text-green-600 text-base">
                    ₹{n(starter.rate).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(waBody(starter))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-xl text-center font-semibold mb-3"
              >
                <WhatsAppIcon size={18} className="text-white" />
                WhatsApp Booking
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="block w-full bg-yellow-400 text-black py-3 rounded-xl text-center font-semibold"
              >
                Call Now
              </a>
              <div className="text-xs text-gray-500 mt-3 text-center space-y-1">
                <p>✔ Instant booking</p>
                <p>✔ 24/7 support</p>
                <p>✔ Verified drivers</p>
              </div>
              <p className="text-[11px] text-gray-400 text-center mt-3">Fare calculated on distance • Toll & parking extra</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
