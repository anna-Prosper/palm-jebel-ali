import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INTENT_OFFPLAN } from "@/lib/content/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(INTENT_OFFPLAN).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = INTENT_OFFPLAN[slug];
  if (!content) return {};
  return buildMetadata(content.meta);
}

export default async function OffPlanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = INTENT_OFFPLAN[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: `/off-plan-in/${slug}`, label: "Off-Plan" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="offplan" breadcrumbs={breadcrumbs} />
    </>
  );
}
