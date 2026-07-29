import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COMMUNITIES } from "@/lib/content/registry";
import { translatedLocales } from "@/lib/content/i18n/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd, localizedAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.keys(COMMUNITIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = COMMUNITIES[slug];
  if (!content) return {};
  const md = buildMetadata(content.meta);
  const locales = translatedLocales(slug);
  return locales.length ? { ...md, alternates: localizedAlternates(content.meta.slug, "en", ["en", ...locales]) } : md;
}

export default async function CommunityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = COMMUNITIES[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: `/communities/${slug}`, label: "Community" },
  ];
  const availableLocales: Locale[] = ["en", ...translatedLocales(slug)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="community" breadcrumbs={breadcrumbs} availableLocales={availableLocales} />
    </>
  );
}
