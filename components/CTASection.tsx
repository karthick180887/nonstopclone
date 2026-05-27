import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { SITE } from "@/lib/site-data";
import { whatsAppUrl } from "@/lib/utils";

export default function CTASection({
  title = "Book One Way Taxi with Nagma Tours and Travels",
  subtitle = "Contact us for one way and outstation taxi booking with transparent pricing, verified drivers and 24×7 support across South India.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1FAE4B]">{title}</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl border hover:shadow-md transition"
            >
              <Phone className="w-6 h-6 text-green-600 mt-1 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold text-[#0F172A]">Call for Booking</p>
                <p className="text-green-600 font-medium">{SITE.phone}</p>
                <p className="text-sm text-gray-500">Instant booking support available 24×7</p>
              </div>
            </a>
            <a
              href={whatsAppUrl("Hi, I need taxi booking")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-6 rounded-2xl border hover:shadow-md transition"
            >
              <WhatsAppIcon size={24} className="text-[#25D366] mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-[#0F172A]">WhatsApp Booking</p>
                <p className="text-green-600 font-medium">Get instant fare & route details</p>
                <p className="text-sm text-gray-500">Quick response for all taxi enquiries</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl border hover:shadow-md transition"
            >
              <Mail className="w-6 h-6 text-blue-600 mt-1 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold text-[#0F172A]">Email Support</p>
                <p className="text-blue-600 font-medium">{SITE.email}</p>
                <p className="text-sm text-gray-500">For bookings, queries and support</p>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border">
              <MapPin className="w-6 h-6 text-orange-600 mt-1 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold text-[#0F172A]">Service Coverage</p>
                <p className="text-gray-700 font-medium">Tamil Nadu, Kerala & Karnataka</p>
                <p className="text-sm text-gray-500">One way and outstation taxi routes</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl border p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Quick Booking</h3>
            <p className="text-sm text-gray-500 mb-6">Get fare instantly and confirm your ride in seconds.</p>
            <div className="space-y-3">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Call Now
              </a>
              <a
                href={whatsAppUrl("Hi, I need taxi booking")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                <WhatsAppIcon size={16} className="text-white shrink-0" />
                Get Fare on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-500 text-center">
              Transparent pricing • No return charge • 24×7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
