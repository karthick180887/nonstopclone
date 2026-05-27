import { buildMetadata } from "@/lib/seo";
import { Car, Clock, MapPin, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { whatsAppUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "About droptaxi.live | One Way & Outstation Cab Service South India",
  description: SITE.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">About droptaxi.live</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            droptaxi.live is built to make intercity travel simple, reliable and transparent.
            We provide one way and outstation taxi services across Tamil Nadu, Kerala and Karnataka
            with professional drivers and clear pricing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F172A] mb-16">
            Why Choose droptaxi.live
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: ShieldCheck, title: "Verified Drivers", desc: "Experienced drivers trained for long distance and intercity travel." },
              { Icon: Car, title: "Clean Vehicles", desc: "Well-maintained cars suitable for family, business and solo trips." },
              { Icon: Clock, title: "On-Time Pickup", desc: "Punctual service for airport, city and outstation travel." },
              { Icon: MapPin, title: "Wide Coverage", desc: "Service across Tamil Nadu, Kerala and Karnataka routes." },
            ].map((item) => (
              <div key={item.title} className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                <item.Icon className="text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">One Way & Outstation Taxi Services</h2>
          <p className="text-gray-600 leading-relaxed">
            We offer one way drop taxi, round trip and long distance travel solutions connecting major
            cities, airport routes, business hubs and tourist destinations. Pricing is based on distance
            with clear billing and no hidden charges.
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Book Your Taxi with Confidence</h2>
          <p className="text-gray-600 mb-8">
            Get instant fare details and confirm your booking through call or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${SITE.phoneTel}`} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold">
              Call Now
            </a>
            <a
              href={whatsAppUrl("Hi, I need one way taxi details")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Get Fare on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
