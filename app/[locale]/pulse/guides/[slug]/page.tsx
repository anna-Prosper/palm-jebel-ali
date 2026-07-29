import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18N_GUIDES } from "@/lib/content/i18n/registry";
import { GuideTemplate } from "@/components/templates/GuideTemplate";
import { buildMetadata, guideJsonLd, safeJsonLd, localizedAlternates } from "@/lib/seo";
import { UI, type Locale } from "@/lib/i18n";

const LOCALES = ["ar", "ru"] as const;
type Loc = (typeof LOCALES)[number];
const isLoc = (l: string): l is Loc => (LOCALES as readonly string[]).includes(l);

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const slug of Object.keys(I18N_GUIDES))
    for (const l of LOCALES) if (I18N_GUIDES[slug][l]) out.push({ locale: l, slug });
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLoc(locale)) return {};
  const content = I18N_GUIDES[slug]?.[locale];
  if (!content) return {};
  return { ...buildMetadata(content.meta, locale), alternates: localizedAlternates(content.meta.slug, locale, ["en", "ar", "ru"]) };
}

export default async function LocalizedGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLoc(locale)) notFound();
  const content = I18N_GUIDES[slug]?.[locale];
  if (!content) notFound();

  const t = UI[locale as Locale];
  const breadcrumbs = [
    { href: "/", label: t.nav.home },
    { href: `/${locale}/pulse/guides`, label: t.nav.guides },
    { href: `/${locale}/pulse/guides/${slug}`, label: content.hero.eyebrow },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(guideJsonLd(content.meta, content.faqs, breadcrumbs, locale)) }} />
      <GuideTemplate content={content} breadcrumbs={breadcrumbs} locale={locale as Locale} availableLocales={["en", "ar", "ru"]} />
    </>
  );
}
