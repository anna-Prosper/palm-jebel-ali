import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResidencesIndex } from "@/components/templates/ResidencesIndex";
import { INDEX_COPY } from "@/lib/content/index-copy";
import { buildMetadata, localizedAlternates } from "@/lib/seo";
import { COLLECTIONS } from "@/lib/content/palm-facts";
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
  const r = INDEX_COPY[locale].residences;
  const meta = { slug: "residences", title: `${r.headingLead}${r.headingEm}`, description: r.subcopy, ogImage: COLLECTIONS[0].image, keywords: [] };
  return { ...buildMetadata(meta, locale), alternates: localizedAlternates("residences", locale, ["en", "ar", "ru"]) };
}

export default async function LocalizedResidencesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLoc(locale)) notFound();
  return <ResidencesIndex locale={locale as Locale} availableLocales={["en", "ar", "ru"]} />;
}
