"use client";

import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "md:hidden bg-white border-t border-gray-100 shadow-md overflow-hidden transition-all duration-300",
        open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1FAE4B] font-medium"
            onClick={onClose}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <a
        href={`tel:${SITE.phoneTel}`}
        className="block mx-6 mb-5 text-center bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black py-3 rounded-xl font-semibold"
        onClick={onClose}
      >
        Book Now – {SITE.phone}
      </a>
    </div>
  );
}
