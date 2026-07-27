import type { MetadataRoute } from "next";
import { COMMUNITIES, INTENT_BUY, INTENT_RENT, INTENT_OFFPLAN, RESIDENCES, GUIDES } from "@/lib/content/registry";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";
const now = new Date("2026-07-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
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

  return entries;
}
