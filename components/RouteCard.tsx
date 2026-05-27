import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import type { RoutePage } from "@/lib/routes-data";
import { formatCurrency, whatsAppUrl } from "@/lib/utils";

export default function RouteCard({ route }: { route: RoutePage }) {
  const waMsg = `Hi I need taxi from ${route.from} to ${route.to}`;
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#0F172A]">
          {route.from} → {route.to}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {route.distanceKm} km • {route.duration}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          ₹14/km • Driver allowance ₹400 included • Toll extra
        </p>
        <p className="text-xs text-green-700 mt-1">✓ Fixed fare • ✓ No hidden charges</p>
        <p className="text-2xl font-extrabold text-[#0B6B2E] mt-3">
          {formatCurrency(route.estimatedFare)}
        </p>
        <p className="text-xs text-gray-400">Estimated one-way fare</p>
        <div className="flex gap-2 mt-4">
          <Link
            href={`/${route.slug}`}
            className="flex-1 text-center bg-[#0B6B2E] text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
          >
            Check Fare →
          </Link>
          <a
            href={whatsAppUrl(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition flex items-center justify-center gap-1"
          >
            <WhatsAppIcon size={14} className="text-white" />
            WhatsApp
          </a>
        </div>
        <Link href={`/${route.slug}`} className="block text-center text-xs text-green-700 mt-2 hover:underline">
          View trip details
        </Link>
      </div>
    </article>
  );
}
