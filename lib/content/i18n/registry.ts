import type { HubContent, GuideContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { communityAr } from "@/lib/content/i18n/ar/community";
import { communityRu } from "@/lib/content/i18n/ru/community";
import { investorGuideAr } from "@/lib/content/i18n/ar/investor-guide";
import { investorGuideRu } from "@/lib/content/i18n/ru/investor-guide";
import { beachCollectionAr } from "@/lib/content/i18n/ar/beach-collection";
import { beachCollectionRu } from "@/lib/content/i18n/ru/beach-collection";
import { coralCollectionAr } from "@/lib/content/i18n/ar/coral-collection";
import { coralCollectionRu } from "@/lib/content/i18n/ru/coral-collection";
import { palmCentralAr } from "@/lib/content/i18n/ar/palm-central";
import { palmCentralRu } from "@/lib/content/i18n/ru/palm-central";
import { buyPalmJebelAliAr } from "@/lib/content/i18n/ar/buy";
import { buyPalmJebelAliRu } from "@/lib/content/i18n/ru/buy";
import { offplanPalmJebelAliAr } from "@/lib/content/i18n/ar/offplan";
import { offplanPalmJebelAliRu } from "@/lib/content/i18n/ru/offplan";
import { pricesAr } from "@/lib/content/i18n/ar/prices";
import { pricesRu } from "@/lib/content/i18n/ru/prices";
import { paymentPlansAr } from "@/lib/content/i18n/ar/payment-plans";
import { paymentPlansRu } from "@/lib/content/i18n/ru/payment-plans";
import { goldenVisaAr } from "@/lib/content/i18n/ar/golden-visa";
import { goldenVisaRu } from "@/lib/content/i18n/ru/golden-visa";
import { vsPalmJumeirahAr } from "@/lib/content/i18n/ar/vs-palm-jumeirah";
import { vsPalmJumeirahRu } from "@/lib/content/i18n/ru/vs-palm-jumeirah";
import { foreignBuyersAr } from "@/lib/content/i18n/ar/foreign-buyers";
import { foreignBuyersRu } from "@/lib/content/i18n/ru/foreign-buyers";
import { locationAr } from "@/lib/content/i18n/ar/location";
import { locationRu } from "@/lib/content/i18n/ru/location";

// slug -> { locale: translated content }. English lives in the main registry;
// this only holds the non-English translations that exist so far.
export const I18N_COMMUNITIES: Record<string, Partial<Record<Locale, HubContent>>> = {
  "palm-jebel-ali": { ar: communityAr, ru: communityRu },
};

export const I18N_RESIDENCES: Record<string, Partial<Record<Locale, HubContent>>> = {
  "beach-collection": { ar: beachCollectionAr, ru: beachCollectionRu },
  "coral-collection": { ar: coralCollectionAr, ru: coralCollectionRu },
  "palm-central": { ar: palmCentralAr, ru: palmCentralRu },
};
export const I18N_BUY: Record<string, Partial<Record<Locale, HubContent>>> = {
  "palm-jebel-ali": { ar: buyPalmJebelAliAr, ru: buyPalmJebelAliRu },
};
export const I18N_OFFPLAN: Record<string, Partial<Record<Locale, HubContent>>> = {
  "palm-jebel-ali": { ar: offplanPalmJebelAliAr, ru: offplanPalmJebelAliRu },
};

export const I18N_GUIDES: Record<string, Partial<Record<Locale, GuideContent>>> = {
  "palm-jebel-ali-investor-guide": { ar: investorGuideAr, ru: investorGuideRu },
  "palm-jebel-ali-prices": { ar: pricesAr, ru: pricesRu },
  "palm-jebel-ali-payment-plans": { ar: paymentPlansAr, ru: paymentPlansRu },
  "palm-jebel-ali-golden-visa": { ar: goldenVisaAr, ru: goldenVisaRu },
  "palm-jebel-ali-vs-palm-jumeirah": { ar: vsPalmJumeirahAr, ru: vsPalmJumeirahRu },
  "palm-jebel-ali-foreign-buyers": { ar: foreignBuyersAr, ru: foreignBuyersRu },
  "palm-jebel-ali-location": { ar: locationAr, ru: locationRu },
};

// Which non-English locales exist for a given base slug (any type).
export function translatedLocales(slug: string): Locale[] {
  const c = I18N_COMMUNITIES[slug] || I18N_RESIDENCES[slug] || I18N_BUY[slug] || I18N_OFFPLAN[slug] || I18N_GUIDES[slug];
  const out: Locale[] = [];
  if (c?.ar) out.push("ar");
  if (c?.ru) out.push("ru");
  return out;
}
