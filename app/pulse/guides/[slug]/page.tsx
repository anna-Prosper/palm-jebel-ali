import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES } from "@/lib/content/registry";
import { translatedLocales } from "@/lib/content/i18n/registry";
import { GuideTemplate } from "@/components/templates/GuideTemplate";
import { buildMetadata, guideJsonLd, safeJsonLd, localizedAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = GUIDES[slug];
  if (!content) return {};
  const md = buildMetadata(content.meta);
  const locales = translatedLocales(slug);
  return locales.length ? { ...md, alternates: localizedAlternates(content.meta.slug, "en", ["en", ...locales]) } : md;
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = GUIDES[slug];
  if (!content) notFound();

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/pulse/guides", label: "Guides" },
    { href: `/pulse/guides/${slug}`, label: content.hero.eyebrow },
  ];
  const availableLocales: Locale[] = ["en", ...translatedLocales(slug)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(guideJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <GuideTemplate content={content} breadcrumbs={breadcrumbs} availableLocales={availableLocales} />
    </>
  );
}
