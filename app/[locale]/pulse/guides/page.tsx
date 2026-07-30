import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidesIndex } from "@/components/templates/GuidesIndex";
import { INDEX_COPY } from "@/lib/content/index-copy";
import { buildMetadata, localizedAlternates } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const PREFIXED = ["ar", "ru"] as const;
type Loc = (typeof PREFIXED)[number];
const isLoc = (l: string): l is Loc => (PREFIXED as readonly string[]).includes(l);

export function generateStaticParams() {
  return PREFIXED.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLoc(locale)) return {};
  const g = INDEX_COPY[locale].guides;
  const meta = { slug: "pulse/guides", title: `${g.headingLead}${g.headingEm}`, description: g.subcopy, keywords: [] };
  return { ...buildMetadata(meta, locale), alternates: localizedAlternates("pulse/guides", locale, ["en", "ar", "ru"]) };
}

export default async function LocalizedGuidesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLoc(locale)) notFound();
  return <GuidesIndex locale={locale as Locale} availableLocales={["en", "ar", "ru"]} />;
}
