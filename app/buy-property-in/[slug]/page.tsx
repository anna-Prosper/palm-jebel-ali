import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INTENT_BUY } from "@/lib/content/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(INTENT_BUY).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = INTENT_BUY[slug];
  if (!content) return {};
  return buildMetadata(content.meta);
}

export default async function BuyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = INTENT_BUY[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: `/buy-property-in/${slug}`, label: "Buy" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="buy" breadcrumbs={breadcrumbs} />
    </>
  );
}
