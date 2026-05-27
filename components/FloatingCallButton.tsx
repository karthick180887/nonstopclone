import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 hover:scale-105 transition md:bottom-6"
      aria-label={`Call ${SITE.phone}`}
    >
      <Phone size={24} />
    </a>
  );
}
