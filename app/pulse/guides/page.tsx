import type { Metadata } from "next";
import { GuidesIndex } from "@/components/templates/GuidesIndex";
import { buildMetadata, safeJsonLd, hubJsonLd } from "@/lib/seo";

const META = {
  slug: "pulse/guides",
  title: "Palm Jebel Ali Guides | Prices, Payment Plans, Villas & Investment",
  description:
    "Straight-talking guides to Palm Jebel Ali: pricing across all three collections, 80/20 payment plans, handover timeline, the villa collections, Golden Visa, location and how it compares to Palm Jumeirah.",
  keywords: ["Palm Jebel Ali guides", "Palm Jebel Ali pricing", "Palm Jebel Ali payment plans", "Palm Jebel Ali villas", "Palm Jebel Ali investment"],
};

export const metadata: Metadata = buildMetadata(META);

const breadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/pulse/guides", label: "Guides" },
];

export default function GuidesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(META, [], breadcrumbs)) }} />
      <GuidesIndex />
    </>
  );
}
