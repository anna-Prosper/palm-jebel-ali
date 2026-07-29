import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESIDENCES } from "@/lib/content/registry";
import { translatedLocales } from "@/lib/content/i18n/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd, localizedAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.keys(RESIDENCES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = RESIDENCES[slug];
  if (!content) return {};
  const md = buildMetadata(content.meta);
  const locales = translatedLocales(slug);
  return locales.length ? { ...md, alternates: localizedAlternates(content.meta.slug, "en", ["en", ...locales]) } : md;
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
      <HubTemplate content={content} location="residence" breadcrumbs={breadcrumbs} availableLocales={["en", ...translatedLocales(slug)] as Locale[]} />
    </>
  );
}
