import type { Metadata } from "next";
import { GuidesIndex } from "@/components/templates/GuidesIndex";
import { buildMetadata, safeJsonLd, SITE, urlFor, localizedAlternates } from "@/lib/seo";
import { GUIDES, GUIDE_SLUGS } from "@/lib/content/registry";

const META = {
  slug: "pulse/guides",
  title: "Palm Jebel Ali Guides | Prices, Payment Plans & Villas",
  description:
    "Straight-talking guides to Palm Jebel Ali: pricing across all three collections, 80/20 payment plans, handover timeline, villas, Golden Visa and location.",
  keywords: ["Palm Jebel Ali guides", "Palm Jebel Ali pricing", "Palm Jebel Ali payment plans", "Palm Jebel Ali villas", "Palm Jebel Ali investment"],
};

export const metadata: Metadata = { ...buildMetadata(META), alternates: localizedAlternates(META.slug, "en", ["en", "ar", "ru"]) };

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${urlFor(META.slug)}#page`,
      url: urlFor(META.slug),
      name: META.title,
      description: META.description,
      isPartOf: { "@id": `${SITE}/#website` },
    },
    {
      "@type": "ItemList",
      itemListElement: GUIDE_SLUGS.map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: GUIDES[slug].meta.title.split("|")[0].trim(),
        url: `${SITE}/${slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Guides", item: urlFor(META.slug) },
      ],
    },
  ],
};

export default function GuidesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA) }} />
      <GuidesIndex availableLocales={["en", "ar", "ru"]} />
    </>
  );
}
