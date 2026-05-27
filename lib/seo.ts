import type { Metadata } from "next";
import { SITE } from "./site-data";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/assets/banners/nonstop-hero.avif",
}: PageSeo): Metadata {
  const canonical = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      images: [{ url: ogImage, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = buildMetadata({
  title: "Nonstop Drop Taxi | One Way & Outstation Cab Service South India",
  description: SITE.description,
  path: "/",
});
