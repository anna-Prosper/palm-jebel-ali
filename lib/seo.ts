import type { Metadata } from "next";
import type { FaqItem } from "@/components/FaqAccordion";
import type { PageMeta } from "@/lib/content/types";
import { FACTS, IMG } from "@/lib/content/palm-facts";

export const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";

export function urlFor(slug: string) {
  return `${SITE}/${slug.replace(/^\/+/, "")}`;
}

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Canonical + hreflang alternates for a page that exists in multiple locales.
// `baseSlug` is the English slug (e.g. "communities/palm-jebel-ali"); `locale`
// is the page being rendered; `locales` are all locales this page exists in
// (must include "en").
export function localizedAlternates(baseSlug: string, locale: "en" | "ar" | "ru", locales: ("en" | "ar" | "ru")[]) {
  const url = (l: string) => (l === "en" ? urlFor(baseSlug) : `${SITE}/${l}/${baseSlug}`);
  const languages: Record<string, string> = { "x-default": urlFor(baseSlug) };
  for (const l of locales) languages[l] = url(l);
  return { canonical: url(locale), languages };
}

export function buildMetadata(meta: PageMeta): Metadata {
  const url = urlFor(meta.slug);
  const ogImage = meta.ogImage || IMG.heroAerial;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.datePublished ? "article" : "website",
      url,
      siteName: "Palm Jebel Ali",
      locale: "en_AE",
      images: [{ url: ogImage, width: 2688, height: 1536, alt: meta.title }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [ogImage] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

function breadcrumbList(breadcrumbs: { href: string; label: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      item: b.href.startsWith("http") ? b.href : `${SITE}${b.href}`,
    })),
  };
}

function faqPage(id: string, faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Place + FAQPage + BreadcrumbList — for community & intent hubs. */
export function hubJsonLd(meta: PageMeta, faqs: FaqItem[], breadcrumbs: { href: string; label: string }[]) {
  const url = urlFor(meta.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${url}#place`,
        name: "Palm Jebel Ali",
        description: meta.description,
        image: meta.ogImage || IMG.heroAerial,
        url,
        address: { "@type": "PostalAddress", addressLocality: "Jebel Ali", addressRegion: "Dubai", addressCountry: "AE" },
        geo: { "@type": "GeoCoordinates", latitude: FACTS.geo.latitude, longitude: FACTS.geo.longitude },
      },
      faqs.length ? faqPage(`${url}#faq`, faqs) : null,
      breadcrumbList(breadcrumbs),
    ].filter(Boolean),
  };
}

/** Article + FAQPage + BreadcrumbList — for guides. */
export function guideJsonLd(meta: PageMeta, faqs: FaqItem[], breadcrumbs: { href: string; label: string }[]) {
  const url = urlFor(meta.slug);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: meta.title,
        description: meta.description,
        image: meta.ogImage || IMG.heroAerial,
        datePublished: meta.datePublished || "2026-07-27",
        dateModified: meta.dateModified || meta.datePublished || "2026-07-27",
        author: { "@type": "Organization", name: "Palm Jebel Ali", url: SITE },
        publisher: { "@type": "Organization", name: "Palm Jebel Ali", url: SITE },
        mainEntityOfPage: url,
      },
      faqs.length ? faqPage(`${url}#faq`, faqs) : null,
      breadcrumbList(breadcrumbs),
    ].filter(Boolean),
  };
}
