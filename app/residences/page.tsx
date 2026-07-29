import type { Metadata } from "next";
import { ResidencesIndex } from "@/components/templates/ResidencesIndex";
import { buildMetadata, safeJsonLd, SITE, urlFor } from "@/lib/seo";
import { COLLECTIONS } from "@/lib/content/palm-facts";

const META = {
  slug: "residences",
  title: "Palm Jebel Ali Residences | Villas, Mansions & Apartments",
  description:
    "Every home at Palm Jebel Ali: Beach Collection villas from AED 18.5M, Coral Collection mansions from AED 30M, Palm Central residences from AED 2.5M.",
  keywords: ["Palm Jebel Ali residences", "Palm Jebel Ali villas", "Palm Jebel Ali apartments", "Palm Jebel Ali collections", "Beach Collection", "Coral Collection", "Palm Central"],
  ogImage: COLLECTIONS[0].image,
};

export const metadata: Metadata = buildMetadata(META);

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${urlFor(META.slug)}#page`,
      url: urlFor(META.slug),
      name: META.title,
      description: META.description,
    },
    {
      "@type": "ItemList",
      itemListElement: COLLECTIONS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        url: `${SITE}${c.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Residences", item: urlFor(META.slug) },
      ],
    },
  ],
};

export default function ResidencesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA) }} />
      <ResidencesIndex />
    </>
  );
}
