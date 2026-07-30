import type { MetadataRoute } from "next";
import { COMMUNITIES, INTENT_BUY, INTENT_RENT, INTENT_OFFPLAN, RESIDENCES, GUIDES } from "@/lib/content/registry";
import { I18N_COMMUNITIES, I18N_RESIDENCES, I18N_BUY, I18N_RENT, I18N_OFFPLAN, I18N_GUIDES } from "@/lib/content/i18n/registry";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";
const now = new Date("2026-07-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLangs = { "x-default": SITE, en: SITE, ar: `${SITE}/ar`, ru: `${SITE}/ru` };
  const entries: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1, alternates: { languages: homeLangs } },
    { url: `${SITE}/ar`, lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: { languages: homeLangs } },
    { url: `${SITE}/ru`, lastModified: now, changeFrequency: "weekly", priority: 0.9, alternates: { languages: homeLangs } },
  ];

  // Index pages that exist in all three locales.
  for (const [path, priority] of [["residences", 0.8], ["pulse/guides", 0.7]] as const) {
    const langs = { "x-default": `${SITE}/${path}`, en: `${SITE}/${path}`, ar: `${SITE}/ar/${path}`, ru: `${SITE}/ru/${path}` };
    entries.push({ url: `${SITE}/${path}`, lastModified: now, changeFrequency: "weekly", priority, alternates: { languages: langs } });
    entries.push({ url: `${SITE}/ar/${path}`, lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages: langs } });
    entries.push({ url: `${SITE}/ru/${path}`, lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages: langs } });
  }

  // Emit one <url> per locale for a slug group, each annotated with the full
  // hreflang cluster (x-default + every locale it exists in) so Google links
  // the language variants. `prefix` is the URL path prefix, `i18n` maps the
  // slug key -> { ar?, ru? } translations that exist.
  const group = (
    engMap: Record<string, unknown>,
    i18n: Record<string, object>,
    prefix: string,
    priority: number,
  ) => {
    for (const key of Object.keys(engMap)) {
      const base = `${prefix}/${key}`;
      const enUrl = `${SITE}/${base}`;
      const locales = Object.keys(i18n[key] || {}); // e.g. ["ar","ru"]
      const languages: Record<string, string> | undefined = locales.length
        ? { "x-default": enUrl, en: enUrl, ...Object.fromEntries(locales.map((l) => [l, `${SITE}/${l}/${base}`])) }
        : undefined;
      const alternates = languages ? { languages } : undefined;
      entries.push({ url: enUrl, lastModified: now, changeFrequency: "weekly", priority, alternates });
      for (const l of locales)
        entries.push({ url: `${SITE}/${l}/${base}`, lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates });
    }
  };

  group(COMMUNITIES, I18N_COMMUNITIES, "communities", 0.9);
  group(RESIDENCES, I18N_RESIDENCES, "residences", 0.9);
  group(INTENT_BUY, I18N_BUY, "buy-property-in", 0.8);
  group(INTENT_RENT, I18N_RENT, "rent-property-in", 0.7);
  group(INTENT_OFFPLAN, I18N_OFFPLAN, "off-plan-in", 0.8);
  group(GUIDES, I18N_GUIDES, "pulse/guides", 0.7);

  return entries;
}
