import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESIDENCES } from "@/lib/content/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(RESIDENCES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = RESIDENCES[slug];
  if (!content) return {};
  return buildMetadata(content.meta);
}

export default async function ResidencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = RESIDENCES[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/#residences", label: "Residences" },
    { href: `/residences/${slug}`, label: content.hero.eyebrow },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="residence" breadcrumbs={breadcrumbs} />
    </>
  );
}
