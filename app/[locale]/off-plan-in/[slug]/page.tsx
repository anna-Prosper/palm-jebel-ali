import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18N_OFFPLAN } from "@/lib/content/i18n/registry";
import { HubTemplate } from "@/components/templates/HubTemplate";
import { buildMetadata, hubJsonLd, safeJsonLd, localizedAlternates } from "@/lib/seo";
import { UI, type Locale } from "@/lib/i18n";

const LOCALES = ["ar", "ru"] as const;
type Loc = (typeof LOCALES)[number];
const isLoc = (l: string): l is Loc => (LOCALES as readonly string[]).includes(l);

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const slug of Object.keys(I18N_OFFPLAN))
    for (const l of LOCALES) if (I18N_OFFPLAN[slug][l]) out.push({ locale: l, slug });
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLoc(locale)) return {};
  const content = I18N_OFFPLAN[slug]?.[locale];
  if (!content) return {};
  return { ...buildMetadata(content.meta), alternates: localizedAlternates(content.meta.slug, locale, ["en", "ar", "ru"]) };
}

export default async function LocalizedOffPlanPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLoc(locale)) notFound();
  const content = I18N_OFFPLAN[slug]?.[locale];
  if (!content) notFound();

  const t = UI[locale as Locale];
  const breadcrumbs = [
    { href: "/", label: t.nav.home },
    { href: `/${locale}/off-plan-in/${slug}`, label: t.nav.offplan },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(hubJsonLd(content.meta, content.faqs, breadcrumbs)) }} />
      <HubTemplate content={content} location="offplan" breadcrumbs={breadcrumbs} locale={locale as Locale} availableLocales={["en", "ar", "ru"]} />
    </>
  );
}
