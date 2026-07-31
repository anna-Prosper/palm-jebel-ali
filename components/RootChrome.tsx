import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";

// Sitewide brand entity — present on every page so search engines resolve a
// consistent Organization + WebSite for the whole site.
const SITE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Palm Jebel Ali",
      url: SITE,
      description:
        "Independent showcase and buyer resource for Nakheel's Palm Jebel Ali — villas, apartments, prices, payment plans and release schedules.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971553582339",
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic", "Russian"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Palm Jebel Ali",
      inLanguage: "en",
      publisher: { "@id": `${SITE}/#organization` },
    },
  ],
};

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Sitewide JSON-LD + analytics, rendered inside <body> by each root layout.
export function RootChrome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SITE_SCHEMA) }} />
      <Analytics />
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
    </>
  );
}
