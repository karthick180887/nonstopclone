import type { Metadata } from "next";
import Header from "@/components/Header";
import PromoTicker from "@/components/PromoTicker";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { homeMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site-data";
import { taxiServiceSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL(SITE.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema()) }}
        />
      </head>
      <body>
        <Header />
        <PromoTicker />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
