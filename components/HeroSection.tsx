import Image from "next/image";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import BookingForm from "./BookingForm";
import { SITE } from "@/lib/site-data";
import { buildFareMessage, whatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/assets/banners/nonstop-hero.avif"
          alt="One way taxi service in Tamil Nadu affordable outstation cab booking Nonstop Drop Taxi"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Book One Way Taxi
              <span className="block text-green-400">Across Tamil Nadu</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
              Travel anywhere in Tamil Nadu with reliable one way taxi service. Fixed fare, clean
              vehicles, and professional drivers for safe outstation and airport rides.
            </p>
            <p className="text-green-300 text-sm font-medium mb-6">
              Fixed Fare • No Hidden Charges • 24/7 Booking Support
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsAppUrl(buildFareMessage({}))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                <WhatsAppIcon size={20} className="text-white" />
                Get Fare on WhatsApp
              </a>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
            <a href={`tel:${SITE.phoneTel}`} className="inline-block mt-4 text-lg font-bold md:hidden">
              📞 {SITE.phone}
            </a>
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
