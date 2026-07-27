import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMMUNITIES } from "@/lib/content/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(COMMUNITIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = COMMUNITIES[slug];
  if (!content) return {};
  return buildMetadata(content.meta);
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = COMMUNITIES[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: `/communities/${slug}`, label: "Community" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="community" breadcrumbs={breadcrumbs} />
    </>
  );
}
