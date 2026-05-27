"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Menu, PhoneCall, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { NAV_LINKS, SITE } from "@/lib/site-data";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

function SocialIcon({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={cn("transition-colors", className ?? "hover:text-[#FFC107]")}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar: social + phone */}
      <div className="bg-[#0B6B2E] border-b-2 border-[#FFC107] text-white text-[13px]">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center h-8">
          <div className="flex items-center gap-4">
            <SocialIcon href={SITE.social.facebook} label="Facebook">
              <Facebook size={14} />
            </SocialIcon>
            <SocialIcon href={SITE.social.instagram} label="Instagram">
              <Instagram size={14} />
            </SocialIcon>
            <SocialIcon href="#" label="X">
              <span className="text-xs font-bold">𝕏</span>
            </SocialIcon>
            <SocialIcon
              href={`https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent("Hi NonstopDropTaxi, I need a taxi booking")}`}
              label="WhatsApp"
              className="text-white hover:text-[#25D366]"
            >
              <WhatsAppIcon size={16} className="text-current" />
            </SocialIcon>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="ml-2 font-medium hover:text-[#FFC107] transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between min-h-[80px] gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Nonstop Drop Taxi Home">
              <Image
                src="/assets/logo/nonstop-logo.avif"
                alt="Nonstop Drop Taxi Logo"
                width={160}
                height={75}
                className="h-[65px] md:h-[75px] w-auto object-contain"
                priority
              />
              <div className="leading-tight -ml-1 hidden sm:block">
                <p className="text-[22px] md:text-[24px] font-bold text-[#0B6B2E]">{SITE.name}</p>
                <p className="text-[11px] text-gray-500">One Way Taxi • Fixed Fare • 24/7 Booking</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-700 hover:text-[#1FAE4B] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#1FAE4B] to-[#FFC107] text-black px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="Call Nonstop Drop Taxi"
              >
                <PhoneCall size={18} />
                Book Now
              </a>
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-md border border-gray-300"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
