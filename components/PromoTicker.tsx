import { SITE } from "@/lib/site-data";

const ITEMS = [
  `🚖 ${SITE.name} • One Way & Outstation Service`,
  "✔ Fixed Fare",
  "✔ No Hidden Charges",
  "✔ 24/7 Booking Support",
  `📞 ${SITE.phone}`,
] as const;

function TickerTrack() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {ITEMS.map((text) =>
        text.startsWith("📞") ? (
          <a
            key={text}
            href={`tel:${SITE.phoneTel}`}
            className="whitespace-nowrap font-semibold hover:text-[#FFC107] transition-colors"
          >
            {text}
          </a>
        ) : (
          <span key={text} className="whitespace-nowrap">
            {text}
          </span>
        )
      )}
    </div>
  );
}

export default function PromoTicker() {
  return (
    <div
      className="bg-[#0B6B2E] text-white text-[13px] border-b-2 border-[#FFC107] overflow-hidden"
      aria-label="Service highlights"
    >
      <div className="flex h-9 items-center ticker-animate">
        <TickerTrack />
        <TickerTrack aria-hidden />
      </div>
    </div>
  );
}
