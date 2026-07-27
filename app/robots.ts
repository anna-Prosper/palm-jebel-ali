import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";

export default function robots(): MetadataRoute.Robots {
  // No `host` directive: Google ignores it and Yandex deprecated it in 2018.
  // Canonicalization is handled by <link rel="canonical">, the sitemap, and the
  // apex→www redirect.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
