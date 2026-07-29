import type { HubContent, GuideContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { communityAr } from "@/lib/content/i18n/ar/community";
import { communityRu } from "@/lib/content/i18n/ru/community";
import { investorGuideAr } from "@/lib/content/i18n/ar/investor-guide";
import { investorGuideRu } from "@/lib/content/i18n/ru/investor-guide";

// slug -> { locale: translated content }. English lives in the main registry;
// this only holds the non-English translations that exist so far.
export const I18N_COMMUNITIES: Record<string, Partial<Record<Locale, HubContent>>> = {
  "palm-jebel-ali": { ar: communityAr, ru: communityRu },
};

export const I18N_GUIDES: Record<string, Partial<Record<Locale, GuideContent>>> = {
  "palm-jebel-ali-investor-guide": { ar: investorGuideAr, ru: investorGuideRu },
};

// Which non-English locales exist for a given base slug (any type).
export function translatedLocales(slug: string): Locale[] {
  const out: Locale[] = [];
  const c = I18N_COMMUNITIES[slug] || I18N_GUIDES[slug];
  if (c?.ar) out.push("ar");
  if (c?.ru) out.push("ru");
  return out;
}
