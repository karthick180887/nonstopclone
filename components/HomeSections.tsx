import Image from "next/image";
import Link from "next/link";
import {
  BadgeIndianRupee,
  Briefcase,
  Car,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PopularRoutesBlock from "./PopularRoutesBlock";
import { ROUTE_GROUPS } from "@/lib/routes-data";
import {
  DESTINATIONS,
  DESTINATION_TAG_COLORS,
  FEATURED_CITIES,
  SECONDARY_CITIES,
} from "@/lib/cities-data";
import { VEHICLES, WHY_CHOOSE, BOOKING_STEPS, SITE } from "@/lib/site-data";
import { buildFareMessage, whatsAppUrl } from "@/lib/utils";

const WHY_ICONS = [Car, Clock, ShieldCheck, MapPin] as const;
const STEP_ICONS = [MapPin, BadgeIndianRupee, Clock, Car] as const;

export function PopularRoutesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F0FDF4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[#1FAE4B] font-semibold mb-2">Popular Routes</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B6B2E]">One Way Taxi Routes & Fare Details</h2>
          <p className="text-gray-600 mt-3 text-lg">Fixed fare • No hidden charges • Instant booking</p>
        </div>
        <PopularRoutesBlock />
      </div>
    </section>
  );
}

export function VehiclePricingSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B6B2E]">
            One Way Taxi Fare by Vehicle – Transparent Pricing
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Transparent taxi pricing • One way & round trip fares • ₹400 driver allowance • Toll extra
          </p>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-5">
          {VEHICLES.map((v, index) => (
            <div
              key={v.id}
              className={`rounded-2xl border p-4 shadow-sm hover:shadow-md transition ${
                index === 0 ? "border-green-600 bg-green-50 scale-[1.02]" : "border-gray-200"
              }`}
            >
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full">{v.tag}</span>
              <div className="h-24 flex items-center justify-center my-3">
                <Image src={v.image} alt={v.name} width={130} height={80} className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-lg font-bold text-center">{v.name}</h3>
              <div className="text-center mt-2 space-y-1">
                <p className="text-green-600 font-extrabold text-lg">
                  ₹{v.oneWayRate}/KM <span className="text-[11px] text-gray-500 ml-1">One Way Fare</span>
                </p>
                <p className="text-gray-700 text-sm font-semibold">
                  ₹{v.roundTripRate}/KM <span className="text-[10px] text-gray-500 ml-1">Round Trip Fare</span>
                </p>
              </div>
              <div className="flex justify-center gap-4 text-xs text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <Users size={12} /> {v.passengers}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={12} /> {v.luggage}
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-center bg-gradient-to-r from-green-500 to-yellow-400 text-black py-2 rounded-lg text-sm font-semibold"
                >
                  Call Now
                </a>
                <a
                  href={whatsAppUrl(buildFareMessage({ vehicle: v.name }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get ${v.name} taxi fare on WhatsApp`}
                  className="text-center bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                >
                  <WhatsAppIcon size={14} className="inline mr-1 text-white" />
                  Get Instant Fare
                </a>
                <p className="text-[10px] text-gray-400 text-center mt-1">No hidden charges • 24/7 booking</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-6">Instant confirmation • No hidden charges • 24/7 support</p>
      </div>
    </section>
  );
}

export function CitiesSection() {
  const cityWaMessage = buildFareMessage({});
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#ECFDF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B6B2E]">
            Taxi Services Available Across Tamil Nadu & South India
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">
            Book one way and outstation taxi services in major cities with fixed pricing, professional drivers and
            24/7 support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURED_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="group bg-white border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-green-600 shrink-0" size={22} aria-hidden />
                <h3 className="font-bold text-lg text-[#0B6B2E]">{city.name}</h3>
              </div>
              <p className="text-xs text-gray-500">One way taxi • Outstation • Airport drop</p>
              <div className="mt-4 text-green-600 text-sm font-semibold group-hover:underline">
                View Taxi in {city.name} →
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
          {SECONDARY_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/city/${city.slug}`}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition"
            >
              <MapPin size={14} className="text-green-500 shrink-0" aria-hidden />
              {city.name}
            </Link>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-[#0B6B2E] text-lg mb-2">Book Taxi from Any City Instantly</h3>
          <p className="text-gray-600 text-sm mb-4">Fixed fare • No hidden charges • Instant confirmation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black px-6 py-3 rounded-xl font-bold"
            >
              Call Now
            </a>
            <a
              href={whatsAppUrl(cityWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get taxi fare details on WhatsApp"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition"
            >
              Get Instant Fare on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-green-600 uppercase mb-3">
            Why Choose Nonstop Drop Taxi
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B6B2E]">Reliable One Way & Outstation Taxi</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Book intercity taxi with transparent pricing, professional drivers and smooth travel experience across
            Tamil Nadu.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY_CHOOSE.map((item, index) => {
              const Icon = WHY_ICONS[index] ?? Car;
              return (
                <div
                  key={item.title}
                  className="group bg-white p-5 rounded-2xl border shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 text-green-600 p-2 rounded-lg group-hover:scale-110 transition shrink-0">
                      <Icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#0F172A]">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/banners/nonstop-highway.avif"
                alt="One way taxi highway travel"
                width={640}
                height={320}
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border w-40">
              <p className="text-xs text-gray-500">Instant Booking</p>
              <p className="text-sm font-semibold text-green-600">24/7 Available</p>
            </div>
            <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border w-40">
              <p className="text-xs text-gray-500">Pricing</p>
              <p className="text-sm font-semibold text-green-600">Per KM Based</p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["✔ Transparent Pricing", "✔ 24/7 Booking Support", "✔ Verified Drivers", "✔ Comfortable Travel"].map(
            (label) => (
              <div key={label} className="px-5 py-2 bg-white border rounded-full text-sm text-gray-600 shadow-sm">
                {label}
              </div>
            )
          )}
        </div>
        <div className="mt-16 text-center">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 transition"
          >
            <Phone size={18} aria-hidden />
            Call Now – {SITE.phone}
          </a>
          <p className="text-xs text-gray-500 mt-3">Quick booking • Transparent fare • Reliable service</p>
        </div>
      </div>
    </section>
  );
}

export function DestinationsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1FAE4B]">
            One Way Taxi Destinations Across Tamil Nadu, Kerala & Karnataka
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            One way and outstation taxi services with transparent pricing and easy booking.
          </p>
        </div>
        <div className="space-y-8">
          {DESTINATIONS.map((d) => (
            <div
              key={d.name}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-[220px] md:h-full overflow-hidden">
                  <Image
                    src={d.image}
                    alt={`${d.name} one way taxi destination`}
                    width={600}
                    height={400}
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span
                    className={`absolute top-4 left-4 text-white text-xs px-3 py-1 rounded-full ${DESTINATION_TAG_COLORS[d.category] ?? "bg-gray-600"}`}
                  >
                    {d.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-1">{d.name} One Way Taxi</h3>
                    <p className="text-xs text-gray-500 mt-1">{d.line}</p>
                  </div>
                  <div>
                    <div className="flex gap-3 mt-6">
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        className="flex-1 bg-green-600 text-white py-3 rounded-xl text-center text-sm font-semibold"
                      >
                        <Phone className="inline w-4 h-4 mr-2" aria-hidden />
                        Call Now
                      </a>
                      <a
                        href={whatsAppUrl(`Hi, I need taxi to ${d.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#25D366] text-white py-3 rounded-xl text-center text-sm font-semibold"
                      >
                        <WhatsAppIcon size={16} className="inline w-4 h-4 mr-2 text-white" />
                        Get Fare
                      </a>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Fixed fare • No return charge • 24/7 support</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RouteGroupsSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1FAE4B]">
            Most Booked One Way Taxi Routes in South India
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore popular intercity one way taxi routes across Tamil Nadu, Kerala and Karnataka with fixed fare and
            professional drivers.
          </p>
        </div>
        <div className="space-y-12">
          {ROUTE_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xl font-bold text-[#0F172A] mb-5 border-l-4 border-green-500 pl-3">
                {group.heading}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.routes.map((route) => (
                  <div
                    key={route}
                    className="group bg-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="font-semibold text-[#0F172A] text-base mb-2">{route}</div>
                    <p className="text-xs text-gray-500 mb-4">One Way • Fixed Fare • No Return Charge</p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        className="flex items-center justify-center gap-2 flex-1 h-10 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                      >
                        <Phone className="w-4 h-4" aria-hidden />
                        Call Now
                      </a>
                      <a
                        href={whatsAppUrl(`Hi, I need taxi for ${route}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 h-10 bg-[#25D366] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition"
                      >
                        <WhatsAppIcon size={16} className="text-white shrink-0" />
                        Get Fare
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-block bg-green-600 text-white px-10 py-4 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Book One Way Taxi Now
          </a>
          <p className="text-xs text-gray-500 mt-3">Transparent pricing • 24/7 support • Instant booking</p>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">Nonstop Drop Taxi Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1FAE4B]">Book Your One Way Taxi in 4 Simple Steps</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Simple booking with fixed fare, instant confirmation and verified drivers.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200" aria-hidden />
            <div className="space-y-12">
              {BOOKING_STEPS.map((step, index) => {
                const Icon = STEP_ICONS[index] ?? MapPin;
                return (
                  <div key={step.step} className="relative flex items-start gap-6">
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-green-600 text-white font-bold shadow shrink-0">
                      {step.step}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border w-full hover:shadow-lg transition">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                        <h3 className="font-semibold text-[#0F172A]">{step.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sticky top-24 bg-white border rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Book Instantly</h3>
            <p className="text-sm text-gray-500 mb-6">Get fixed fare and confirm your trip in seconds.</p>
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
            <p className="text-xs text-gray-400 mt-4 text-center">Fixed fare • No return charge • 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
