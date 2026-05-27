"use client";

import Image from "next/image";
import { useState } from "react";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import SectionTitle from "./SectionTitle";
import { VEHICLES, SITE } from "@/lib/site-data";
import { ONE_WAY_TERMS, ROUND_TRIP_TERMS, PRICING_NOTES } from "@/lib/services-data";
import { buildFareMessage, whatsAppUrl, cn } from "@/lib/utils";

type TripMode = "oneway" | "roundtrip";

export default function PricingTabs() {
  const [mode, setMode] = useState<TripMode>("oneway");

  const tollNote = mode === "oneway" ? "One-way toll charges" : "Round-trip toll charges";

  return (
    <section className="py-16 bg-white text-gray-900" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="One Way Taxi Pricing & Round Trip Fare Details"
          subtitle="Fixed fare • No hidden charges • Instant booking"
        />

        {/* One Way / Round Trip toggle */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-white border border-gray-200 rounded-full p-1 shadow-sm inline-flex"
            role="tablist"
            aria-label="Pricing trip type"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "oneway"}
              onClick={() => setMode("oneway")}
              className={cn(
                "px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition",
                mode === "oneway"
                  ? "bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              One Way
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "roundtrip"}
              onClick={() => setMode("roundtrip")}
              className={cn(
                "px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition",
                mode === "roundtrip"
                  ? "bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Round Trip
            </button>
          </div>
        </div>

        {/* Vehicle pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {VEHICLES.map((v, index) => {
            const rate = mode === "oneway" ? v.oneWayRate : v.roundTripRate;
            const showPopular = mode === "oneway" && index === 0;
            return (
              <div
                key={v.id}
                className="relative bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition group text-gray-900"
              >
                {showPopular ? (
                  <span className="absolute top-3 right-3 text-[10px] bg-[#FFC107] text-black px-2 py-1 rounded-full font-bold">
                    Popular
                  </span>
                ) : (
                  v.tag && (
                    <span className="absolute top-3 right-3 text-[10px] bg-green-600 text-white px-2 py-1 rounded-full font-bold">
                      {v.tag}
                    </span>
                  )
                )}
                <Image
                  src={v.image}
                  alt={`${v.label} taxi service`}
                  width={140}
                  height={80}
                  className="mx-auto mb-3 h-16 w-auto object-contain group-hover:scale-105 transition"
                />
                <h3 className="text-center font-bold text-[#0B6B2E] text-base">{v.label}</h3>
                <p className="text-center text-3xl font-extrabold text-[#1FAE4B] mt-2">₹{rate}/KM</p>
                <p className="text-center text-xs text-gray-500 mt-1">Driver Bata ₹{SITE.driverBata}</p>
                <p className="text-center text-xs text-gray-600 mt-2">{tollNote}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-500 mb-8">
          ✔ Toll charges as per actual &nbsp;•&nbsp; ✔ No hidden fees &nbsp;•&nbsp; ✔ Transparent billing
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-sm mb-10">
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-bold text-[#0B6B2E] mb-3">Important Information</h3>
            <ul className="space-y-2 text-gray-600">
              {PRICING_NOTES.map((n) => (
                <li key={n}>✔ {n}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-bold text-[#0B6B2E] mb-3">One Way Travel Terms</h3>
            <ul className="space-y-2 text-gray-600">
              {ONE_WAY_TERMS.map((n) => (
                <li key={n}>✔ {n}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="font-bold text-[#0B6B2E] mb-3">Round Trip Travel Terms</h3>
            <ul className="space-y-2 text-gray-600">
              {ROUND_TRIP_TERMS.map((n) => (
                <li key={n}>✔ {n}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={whatsAppUrl(
              buildFareMessage({
                tripType: mode === "oneway" ? "One Way" : "Round Trip",
              })
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition"
          >
            <WhatsAppIcon size={20} className="text-white" />
            Get Fare on WhatsApp
          </a>
        </div>
        <p className="text-center text-xs text-gray-500 mt-4">
          Instant confirmation • Transparent pricing • 24/7 support
        </p>
      </div>
    </section>
  );
}
