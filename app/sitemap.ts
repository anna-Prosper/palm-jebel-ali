import type { MetadataRoute } from "next";
import { COMMUNITIES, INTENT_BUY, INTENT_RENT, INTENT_OFFPLAN, RESIDENCES, GUIDES } from "@/lib/content/registry";
import { I18N_COMMUNITIES, I18N_GUIDES } from "@/lib/content/i18n/registry";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";
const now = new Date("2026-07-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/residences`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/pulse/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const push = (paths: string[], priority: number) => {
    for (const p of paths) entries.push({ url: `${SITE}/${p}`, lastModified: now, changeFrequency: "weekly", priority });
  };

  push(Object.keys(COMMUNITIES).map((s) => `communities/${s}`), 0.9);
  push(Object.keys(RESIDENCES).map((s) => `residences/${s}`), 0.9);
  push(Object.keys(INTENT_BUY).map((s) => `buy-property-in/${s}`), 0.8);
  push(Object.keys(INTENT_RENT).map((s) => `rent-property-in/${s}`), 0.7);
  push(Object.keys(INTENT_OFFPLAN).map((s) => `off-plan-in/${s}`), 0.8);
  push(Object.keys(GUIDES).map((s) => `pulse/guides/${s}`), 0.7);

  // Localized (ar/ru) variants.
  for (const [slug, byLocale] of Object.entries(I18N_COMMUNITIES))
    for (const locale of Object.keys(byLocale)) entries.push({ url: `${SITE}/${locale}/communities/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.7 });
  for (const [slug, byLocale] of Object.entries(I18N_GUIDES))
    for (const locale of Object.keys(byLocale)) entries.push({ url: `${SITE}/${locale}/pulse/guides/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.6 });

  return entries;
}
