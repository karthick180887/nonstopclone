import { SITE } from "./site-data";

export function taxiServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneTel,
    description: SITE.description,
    areaServed: SITE.areas.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    sameAs: [SITE.social.facebook, SITE.social.instagram],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE.url : `${SITE.url}${item.path}`,
    })),
  };
}
