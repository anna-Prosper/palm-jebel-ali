import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: new Date("2026-07-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
