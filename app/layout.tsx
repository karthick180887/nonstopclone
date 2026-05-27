import type { Metadata } from "next";
import Script from "next/script";
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18193709334"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18193709334');
          `}
        </Script>
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
