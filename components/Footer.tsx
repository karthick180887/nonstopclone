import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import {
  SITE,
} from "@/lib/site-data";
import { whatsAppUrl } from "@/lib/utils";

const EXPLORE_LINKS = [
  ["Home", "/"],
  ["Taxi Fare & Pricing", "/pricing"],
  ["Available Cars", "/fleet"],
  ["One Way Taxi Service", "/one-way-taxi"],
  ["Travel Guides & Route Tips", "/blog"],
  ["Contact & Booking", "/contact"],
] as const;

const POPULAR_ROUTE_LINKS = [
  ["Chennai to Madurai Taxi", "/chennai-to-madurai-taxi"],
  ["Chennai to Coimbatore Taxi", "/chennai-to-coimbatore-taxi"],
  ["Chennai to Bangalore Taxi", "/chennai-to-bangalore-taxi"],
  ["Coimbatore to Cochin Taxi", "/coimbatore-to-cochin-taxi"],
  ["Madurai to Rameswaram Taxi", "/madurai-to-rameswaram-taxi"],
  ["Trichy to Thanjavur Taxi", "/trichy-to-thanjavur-taxi"],
  ["Salem to Bangalore Taxi", "/salem-to-bangalore-taxi"],
  ["Chennai to Pondicherry Taxi", "/chennai-to-pondicherry-taxi"],
] as const;

const CITY_LINKS = [
  "chennai",
  "coimbatore",
  "madurai",
  "salem",
  "tiruchirappalli",
  "tirunelveli",
  "bengaluru",
  "nilgiris",
  "kodaikanal",
  "erode",
  "vellore",
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#041B2D] text-gray-300 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 blur-3xl" aria-hidden />

      <div className="bg-[#16A34A] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Book One Way Taxi Instantly</h2>
            <p className="text-sm opacity-90 mt-1">Fixed fare • No return charge • 24×7 support</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${SITE.phoneTel}`} className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold">
              Call Now
            </a>
            <a
              href={whatsAppUrl("Hi, I need taxi booking")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-3">droptaxi.live</h3>
          <p className="text-sm text-gray-400 mb-4">
            Reliable one way taxi and outstation cab services across Tamil Nadu, Kerala and Karnataka.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="droptaxi.live Facebook" className="bg-[#1E293B] hover:bg-[#334155] p-2 rounded-full transition">
              <Facebook size={16} />
            </a>
            <a
              href={whatsAppUrl("Hi, I need taxi booking")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="bg-[#25D366] hover:scale-110 p-2 rounded-full transition"
            >
              <WhatsAppIcon size={16} className="text-white" />
            </a>
            <a href="#" aria-label="droptaxi.live Instagram" className="bg-[#1E293B] hover:bg-[#334155] p-2 rounded-full transition">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="droptaxi.live on X" className="bg-[#1E293B] p-2 rounded-full hover:bg-black transition">
              <span className="text-xs font-bold">𝕏</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore Services</h4>
          <ul className="space-y-2 text-sm">
            {EXPLORE_LINKS.map(([name, path]) => (
              <li key={path}>
                <Link href={path} className="hover:text-[#22C55E] transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Popular Routes</h4>
          <ul className="space-y-2 text-sm">
            {POPULAR_ROUTE_LINKS.map(([name, path]) => (
              <li key={path}>
                <Link href={path} className="hover:text-[#22C55E] transition">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Cities We Serve</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {CITY_LINKS.map((city) => (
              <Link key={city} href={`/city/${city}`} className="hover:text-[#22C55E] capitalize transition">
                {city}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-2 hover:text-[#22C55E] transition">
              <Phone size={16} />
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[#22C55E] transition">
              <Mail size={16} />
              {SITE.email}
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              South India Coverage
            </div>
          </div>
          <a
            href={whatsAppUrl("Hi, I need taxi booking")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block text-center bg-[#16A34A] hover:bg-[#15803D] text-white py-2 rounded-lg text-sm font-semibold transition"
          >
            Get Fare on WhatsApp
          </a>
        </div>
      </div>

      <div className="relative border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition">Terms & Conditions</Link>
          <Link href="/faq" className="hover:text-white transition">FAQ</Link>
        </div>
        <p className="mt-3">
          Designed by <Link href="/gk-web-designs" className="text-green-400 font-semibold">Karthick Selvam</Link>
        </p>
      </div>
    </footer>
  );
}
