import { buildMetadata } from "@/lib/seo";
import { CalendarClock, Car, Clock, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { whatsAppUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Taxi Services | Nonstop Drop Taxi One Way & Outstation Service",
  description: "Reliable one way and outstation taxi services with transparent pricing, professional drivers and smooth long-distance travel experience.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6">Why Choose Nonstop Drop Taxi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable one way and outstation taxi services with transparent pricing, professional drivers and smooth long-distance travel experience.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border shadow-sm hover:shadow-lg transition">
            <div className="flex items-start gap-5">
              <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">24×7 One Way & Outstation Taxi Service</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Book one way and intercity taxi services anytime with flexible pickup options across Tamil Nadu,
                  Kerala and Karnataka.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-lg transition">
            <div className="flex items-start gap-5">
              <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Verified Drivers & Safe Travel</h3>
                <p className="text-gray-600 text-sm">
                  Experienced drivers ensure smooth, safe and disciplined long-distance travel.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Car className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-[#0F172A]">Clean Vehicles</h4>
            </div>
            <p className="text-sm text-gray-600">Well-maintained cars suitable for family and business travel.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <CalendarClock className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-[#0F172A]">Booking Support</h4>
            </div>
            <p className="text-sm text-gray-600">Get assistance for routes, pricing and booking anytime.</p>
          </div>
          <div className="bg-green-600 text-white rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3">Get Instant Taxi Fare</h3>
            <p className="text-sm opacity-90 mb-6">Contact us now to check price and confirm your ride.</p>
            <div className="flex gap-3">
              <a href={`tel:${SITE.phoneTel}`} className="flex-1 bg-white text-green-700 py-2 rounded-lg text-center text-sm font-semibold">
                Call Now
              </a>
              <a href={whatsAppUrl("Hi I need taxi fare")} className="flex-1 bg-[#25D366] py-2 rounded-lg text-center text-sm font-semibold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
