"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Clock, MapPin, Phone, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { RoutePage } from "@/lib/routes-data";
import { ROUTE_PAGES } from "@/lib/routes-data";
import { DEFAULT_ESTIMATE_RATE, LOWEST_ONE_WAY_RATE, SITE, VEHICLES } from "@/lib/site-data";
import { formatCurrency, whatsAppUrl } from "@/lib/utils";

function fareLabel(route: RoutePage) {
  return formatCurrency(route.estimatedFare);
}

function breakdownFor(route: RoutePage) {
  const totalKm = Math.max(route.distanceKm, SITE.minKmOneWay);
  const sedan = VEHICLES.find((v) => v.id === "sedan")!;
  return {
    perKmRate: `₹${DEFAULT_ESTIMATE_RATE} / KM`,
    totalKm,
    driverAllowance: `₹${sedan.driverBataOneWay} Included (Sedan)`,
    tollCharges: "Toll & parking as per actual",
  };
}

export default function PopularRoutesBlock() {
  const [open, setOpen] = useState<RoutePage | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <div className="space-y-4">
        {ROUTE_PAGES.map((route) => {
          const waMsg = `Hi I need taxi from ${route.from} to ${route.to}`;
          return (
            <div
              key={route.slug}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row overflow-hidden"
            >
              <div className="w-full h-1 md:h-auto md:w-1 bg-[#1FAE4B] md:rounded-l-2xl shrink-0" aria-hidden />
              <div className="flex-1 flex flex-col md:flex-row justify-between gap-4 p-5 pl-5 md:pl-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-[#0B6B2E]">
                      {route.from} → {route.to}
                    </h3>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-[#1FAE4B] shrink-0" aria-hidden />
                      {route.distanceKm} km
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-[#1FAE4B] shrink-0" aria-hidden />
                      {route.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    From ₹{LOWEST_ONE_WAY_RATE}/km • Driver bata from ₹{SITE.driverBata} • Toll extra
                  </p>
                  <p className="text-xs text-[#1FAE4B] font-medium mt-1">
                    ✓ Fixed fare &nbsp;•&nbsp; ✓ No hidden charges
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end justify-between gap-3 md:min-w-[200px]">
                  <div className="bg-[#F0FDF4] px-4 py-2 rounded-xl text-left md:text-right w-full md:w-auto">
                    <p className="text-3xl font-extrabold text-[#1FAE4B] leading-tight">{fareLabel(route)}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Estimated one-way fare</p>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Link
                      href={`/${route.slug}`}
                      className="flex-1 md:flex-none bg-[#1FAE4B] text-white px-4 py-2 rounded-lg font-semibold text-sm text-center hover:bg-[#17963f] transition"
                    >
                      Check Fare →
                    </Link>
                    <a
                      href={whatsAppUrl(waMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 md:flex-none border border-[#1FAE4B] text-[#1FAE4B] px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1.5 justify-center hover:bg-[#F0FDF4] transition"
                    >
                      <WhatsAppIcon size={18} className="shrink-0" />
                      WhatsApp
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(route)}
                    className="text-xs text-gray-400 hover:text-[#1FAE4B] transition underline underline-offset-2 self-start md:self-end"
                  >
                    View trip details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="presentation"
          onClick={close}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="route-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="border-l-4 border-[#1FAE4B] pl-4 mb-4">
              <h3 id="route-modal-title" className="text-xl font-bold text-[#0B6B2E]">
                {open.from} → {open.to}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {open.distanceKm} km &nbsp;•&nbsp; {open.duration}
              </p>
            </div>
            <div className="bg-[#F0FDF4] rounded-xl px-4 py-3 mb-4">
              <p className="text-3xl font-extrabold text-[#1FAE4B]">{fareLabel(open)}</p>
              <p className="text-xs text-gray-400 mt-0.5">Estimated one-way fare</p>
            </div>
            {(() => {
              const b = breakdownFor(open);
              return (
                <div className="space-y-2 text-sm text-gray-600 mb-5">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rate</span>
                    <span className="font-medium">{b.perKmRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total KM</span>
                    <span className="font-medium">{b.totalKm} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Driver allowance</span>
                    <span className="font-medium">{b.driverAllowance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Toll &amp; parking</span>
                    <span className="font-medium text-orange-500">{b.tollCharges}</span>
                  </div>
                </div>
              );
            })()}
            <div className="flex gap-3">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex-1 bg-[#1FAE4B] text-white py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2 hover:bg-[#17963f] transition"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </a>
              <a
                href={whatsAppUrl(`Hi I need taxi from ${open.from} to ${open.to}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-[#1FAE4B] text-[#1FAE4B] py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2 hover:bg-[#F0FDF4] transition"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
