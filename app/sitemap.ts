import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";
import { ROUTE_PAGES } from "@/lib/routes-data";
import { CITIES } from "@/lib/cities-data";
import { BLOG_POSTS } from "@/lib/blog-data";

const STATIC = [
  "",
  "/tariff",
  "/terms-and-conditions",
  "/about",
  "/contact",
  "/services",
  "/fleet",
  "/pricing",
  "/booking",
  "/one-way-taxi",
  "/faq",
  "/blog",
  "/privacy-policy",
  "/terms-of-service",
  "/gk-web-designs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  return [
    ...STATIC.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...ROUTE_PAGES.map((r) => ({
      url: `${base}/${r.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...CITIES.map((c) => ({
      url: `${base}/city/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
