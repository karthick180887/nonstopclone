import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { TESTIMONIALS } from "@/lib/site-data";
import { whatsAppUrl } from "@/lib/utils";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1FAE4B]">Trusted by One Way Taxi Customers</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from travelers using Nagma Tours and Travels across Tamil Nadu, Kerala and Karnataka.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6 text-center">
          <div className="bg-[#F0FDF4] rounded-xl p-6">
            <p className="text-3xl font-bold text-green-600">4.8 / 5</p>
            <p className="text-sm text-gray-600">Average Rating</p>
            <p className="text-xs text-gray-500 mt-1">Based on verified bookings</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-xl p-6">
            <p className="text-3xl font-bold text-green-600">10,000+</p>
            <p className="text-sm text-gray-600">Trips Served</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-xl p-6">
            <p className="text-3xl font-bold text-green-600">24×7</p>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200 my-12" aria-hidden />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#F9FAFB] border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-3" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm">
                <p className="font-semibold text-[#0F172A]">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.route}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={whatsAppUrl("Hi, I need taxi booking")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
          >
            <WhatsAppIcon size={20} className="text-white shrink-0" />
            Get Instant Fare on WhatsApp
          </a>
          <p className="text-xs text-gray-500 mt-3">Transparent pricing • No return charge • Instant confirmation</p>
        </div>
      </div>
    </section>
  );
}
