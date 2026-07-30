import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PalmJebelAliClient from "@/components/PalmJebelAliClient";
import { HOME } from "@/lib/content/home";
import type { Locale } from "@/lib/i18n";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";
const IMG_BASE = "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali";
const OG_IMG = `${IMG_BASE}/hero-aerial-2k.jpg`;

const PREFIXED = ["ar", "ru"] as const;
type Loc = (typeof PREFIXED)[number];
const isLoc = (l: string): l is Loc => (PREFIXED as readonly string[]).includes(l);
const OG_LOCALE: Record<Locale, string> = { en: "en_AE", ar: "ar_AE", ru: "ru_RU" };

export function generateStaticParams() {
  return PREFIXED.map((locale) => ({ locale }));
}

function tagline(locale: Locale) {
  const h = HOME[locale].hero.headline;
  return `${h.line1} ${h.lead}${h.em}${h.tail}`.trim();
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLoc(locale)) return {};
  const c = HOME[locale];
  const title = `${tagline(locale)} | Palm Jebel Ali`;
  const description = c.hero.subcopy;
  const url = `${SITE}/${locale}`;
  const alt = (["en", "ar", "ru"] as Locale[]).filter((l) => l !== locale).map((l) => OG_LOCALE[l]);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { "x-default": SITE, en: SITE, ar: `${SITE}/ar`, ru: `${SITE}/ru` },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Palm Jebel Ali",
      locale: OG_LOCALE[locale],
      alternateLocale: alt,
      images: [{ url: OG_IMG, width: 2688, height: 1536, alt: tagline(locale) }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMG] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLoc(locale)) notFound();
  const c = HOME[locale];
  const url = `${SITE}/${locale}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${tagline(locale)} | Palm Jebel Ali`,
        description: c.hero.subcopy,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#place` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: c.faq.items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
      <PalmJebelAliClient locale={locale as Locale} availableLocales={["en", "ar", "ru"]} />
    </>
  );
}
