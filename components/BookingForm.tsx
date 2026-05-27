"use client";

import Image from "next/image";
import { useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { VEHICLES, SITE } from "@/lib/site-data";
import { buildFareMessage, whatsAppUrl } from "@/lib/utils";

const TIME_OPTIONS = [
  "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM",
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM",
];

export default function BookingForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    tripType: "oneway",
    vehicle: "Sedan",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.pickup || !form.drop || !form.name || !form.phone || !form.date || !form.time) {
      setStatus("error");
      return;
    }
    setStatus("success");
    const msg = buildFareMessage({
      pickup: form.pickup,
      drop: form.drop,
      date: `${form.date} ${form.time}`,
      vehicle: form.vehicle,
      tripType: form.tripType === "oneway" ? "One Way" : "Round Trip",
    });
    window.open(whatsAppUrl(msg), "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-100 ${compact ? "p-4" : "p-6 md:p-8"}`}
      id="booking-form"
    >
      {!compact && (
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">Quick Taxi Booking</h2>
          <p className="text-sm text-gray-500">One Way • Outstation • Airport Drop</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Pickup Address</span>
          <input
            required
            type="text"
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
            placeholder="Enter pickup location"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Drop Address</span>
          <input
            required
            type="text"
            value={form.drop}
            onChange={(e) => update("drop", e.target.value)}
            placeholder="Enter drop location"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Full Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Mobile Number</span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="10-digit mobile"
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Pickup Date</span>
          <input
            required
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Pickup Time</span>
          <select
            required
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select Time</option>
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-4 border-0 p-0 m-0">
        <legend className="text-sm font-medium text-gray-700 mb-3">Trip Type</legend>
        <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Trip type">
          <button
            type="button"
            role="radio"
            aria-checked={form.tripType === "oneway"}
            onClick={() => update("tripType", "oneway")}
            className={`rounded-lg border-2 p-3 text-center cursor-pointer transition-all duration-200 ${
              form.tripType === "oneway"
                ? "border-[#1FAE4B] bg-[#1FAE4B]/10 scale-[1.02] shadow-sm"
                : "border-gray-200 hover:border-[#1FAE4B]/60 hover:bg-[#1FAE4B]/5"
            }`}
          >
            <div className="text-gray-900 font-bold text-sm">One Way</div>
            <div className="text-gray-500 text-xs mt-0.5">Min {SITE.minKmOneWay} KM</div>
            <div className="text-[#0B6B2E] text-xs font-medium mt-1">Driver Bata: ₹{SITE.driverBata}</div>
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={form.tripType === "roundtrip"}
            onClick={() => update("tripType", "roundtrip")}
            className={`rounded-lg border-2 p-3 text-center cursor-pointer transition-all duration-200 ${
              form.tripType === "roundtrip"
                ? "border-[#1FAE4B] bg-[#1FAE4B]/10 scale-[1.02] shadow-sm"
                : "border-gray-200 hover:border-[#1FAE4B]/60 hover:bg-[#1FAE4B]/5"
            }`}
          >
            <div className="text-gray-900 font-bold text-sm">Round Trip</div>
            <div className="text-gray-500 text-xs mt-0.5">Min {SITE.minKmRoundTrip} KM / Day</div>
            <div className="text-[#0B6B2E] text-xs font-medium mt-1">Driver Bata: ₹{SITE.driverBata}/Day</div>
          </button>
        </div>
      </fieldset>

      <div className="mt-4">
        <span className="block text-sm font-medium text-gray-700 mb-3">Select Vehicle</span>
        <div className="grid grid-cols-2 gap-3 mt-2">
          {VEHICLES.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => update("vehicle", v.name)}
              className={`border-2 rounded-xl p-3 text-center cursor-pointer transition-all duration-200 ${
                form.vehicle === v.name
                  ? "border-[#1FAE4B] bg-green-50 shadow-sm"
                  : "border-gray-200 hover:border-[#1FAE4B]/60"
              }`}
            >
              <Image
                src={v.image}
                alt={`${v.label} taxi for one way travel`}
                width={120}
                height={60}
                className="h-14 w-full object-contain mb-2 mx-auto"
              />
              <div className="text-[#0B6B2E] font-bold text-sm">
                ₹{v.oneWayRate}
                <span className="text-xs text-gray-500 font-normal"> / KM</span>
              </div>
              <div className="text-gray-800 text-xs mt-1 font-medium">{v.label}</div>
            </button>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm mt-3">Please fill all required fields.</p>
      )}
      {status === "success" && (
        <p className="text-green-700 text-sm mt-3">Opening WhatsApp to confirm your booking…</p>
      )}

      <button
        type="submit"
        className="mt-6 w-full bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
      >
        <WhatsAppIcon size={20} className="text-white" />
        Check Fare Instantly
      </button>
      <p className="text-xs text-gray-500 text-center mt-2">
        Fixed fare • No hidden charges • 24/7 support
      </p>
    </form>
  );
}
