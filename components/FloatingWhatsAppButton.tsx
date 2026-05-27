import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsAppUrl, buildFareMessage } from "@/lib/utils";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsAppUrl(buildFareMessage({}))}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-40 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition md:bottom-20"
      aria-label="Get fare on WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-white" />
    </a>
  );
}
