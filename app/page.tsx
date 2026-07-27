import type { Metadata } from "next";
import PalmJebelAliClient from "@/components/PalmJebelAliClient";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com";
const IMG_BASE = "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali";
const OG_IMG = `${IMG_BASE}/hero-aerial-2k.jpg`;

const META_TITLE = "Palm Jebel Ali by Nakheel | Villas & Apartments, Prices & Payment Plans 2026";
const META_DESC =
  "Palm Jebel Ali, Nakheel's second palm island: 16 fronds, 110km of new coastline, twice the size of Palm Jumeirah. Beach Collection villas from AED 18.5M, Coral Collection from AED 30M, Palm Central residences from AED 2.5M. 80/20 payment plan, freehold, Golden Visa eligible.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  keywords: [
    "Palm Jebel Ali",
    "Palm Jebel Ali villas",
    "Palm Jebel Ali price",
    "Palm Jebel Ali payment plan",
    "Nakheel Palm Jebel Ali",
    "Beach Collection Palm Jebel Ali",
    "Coral Collection villas",
    "Palm Central Private Residences",
    "Dubai beachfront villas",
    "Dubai off-plan property",
    "Palm Jebel Ali vs Palm Jumeirah",
    "Dubai freehold island property",
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    type: "website",
    url: SITE,
    siteName: "Palm Jebel Ali",
    locale: "en_AE",
    images: [{ url: OG_IMG, width: 2688, height: 1536, alt: "Aerial view of Palm Jebel Ali, Dubai's second palm island, at golden hour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMG],
  },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const FAQS_FOR_SCHEMA = [
  {
    q: "What is Palm Jebel Ali?",
    a: "Palm Jebel Ali is Nakheel's second palm-shaped island, rising off Dubai's southern coast beside Jebel Ali. The master plan spans over 10.5 million square metres across 16 fronds and seven islands, about twice the footprint of Palm Jumeirah, and is designed to add around 110km of new coastline to the city.",
  },
  {
    q: "What types of homes are available at Palm Jebel Ali?",
    a: "Three collections. The Beach Collection offers 5 and 6-bedroom beachfront villas of roughly 7,500-8,500 sqft across eight architectural signatures. The Coral Collection is the ultra-premium tier, 7-bedroom signature mansions on the outer fronds, designed with SAOTA and Naga Architects. Palm Central Private Residences brings 1-5 bedroom apartments, townhouses and penthouses in a connected beachfront district between Fronds M and N.",
  },
  {
    q: "How much does it cost to buy at Palm Jebel Ali?",
    a: "Beach Collection villas start from around AED 18.5 million and Coral Collection mansions from roughly AED 30 million. Palm Central Private Residences start from about AED 2.5 million. Pricing moves with each release phase, unit type and frond position.",
  },
  {
    q: "What is the payment plan at Palm Jebel Ali?",
    a: "Launch inventory has typically followed an 80/20 structure: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Exact terms vary by collection and release.",
  },
  {
    q: "When is handover at Palm Jebel Ali?",
    a: "Handover is phased. Villa fronds are already under construction with deliveries staged from around 2027 for earlier Coral phases and toward 2029 for Beach Collection phases. Palm Central Private Residences are scheduled from 2028, with later phases running toward 2030.",
  },
  {
    q: "Is Palm Jebel Ali bigger than Palm Jumeirah?",
    a: "Yes, substantially. The master plan is roughly double Palm Jumeirah's footprint, with 16 fronds, and capacity planned for a far larger resident population.",
  },
  {
    q: "Can foreigners buy property at Palm Jebel Ali?",
    a: "Yes. Palm Jebel Ali sits within Dubai's designated freehold zone, so buyers of any nationality can own outright, with title registered at the Dubai Land Department.",
  },
  {
    q: "Does buying at Palm Jebel Ali qualify for the UAE Golden Visa?",
    a: "Property purchases at or above AED 2 million meet the current investment threshold for the UAE's 10-year renewable Golden Visa. Eligibility is assessed on your individual application.",
  },
  {
    q: "Where is Palm Jebel Ali and how do you get there?",
    a: "It sits on Dubai's southern coastline beside Jebel Ali, connected by three mainland access points onto Sheikh Zayed Road (E11). Al Maktoum International (DWC) is roughly 20 minutes away, Expo City is minutes down the road, and Dubai Marina is about 25 minutes north.",
  },
  {
    q: "What amenities will Palm Jebel Ali have?",
    a: "Private beaches and beach clubs, full-service marinas, more than 80 hotels and resorts, waterfront dining and retail districts, landscaped parks and promenades, wellness and fitness facilities, and everyday essentials such as schools, clinics and mosques, with island-wide cycling and pedestrian routes.",
  },
  {
    q: "Is Palm Jebel Ali a good investment?",
    a: "The case rests on scarcity and timing: freehold beachfront on a limited-supply island, bought at launch-phase pricing before the hotel, retail and marina phases mature, in the growth corridor around Al Maktoum International and Expo City. As with any off-plan purchase, returns depend on entry price, release phase and holding period.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Palm Jebel Ali",
      description: META_DESC,
      inLanguage: "en",
    },
    {
      "@type": "Place",
      "@id": `${SITE}/#place`,
      name: "Palm Jebel Ali",
      description:
        "Nakheel's second palm-shaped island off Dubai's southern coast, 16 fronds across 7 islands, roughly twice the size of Palm Jumeirah, adding around 110km of new coastline.",
      image: OG_IMG,
      address: { "@type": "PostalAddress", addressLocality: "Jebel Ali", addressRegion: "Dubai", addressCountry: "AE" },
      geo: { "@type": "GeoCoordinates", latitude: 24.9928, longitude: 55.0203 },
    },
    {
      "@type": "Article",
      "@id": `${SITE}/#article`,
      headline: "Palm Jebel Ali by Nakheel: Villas, Prices, Payment Plans & Master Plan",
      description: META_DESC,
      image: OG_IMG,
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: { "@id": `${SITE}/#place` },
      isPartOf: { "@id": `${SITE}/#website` },
      author: { "@type": "Organization", name: "Palm Jebel Ali", url: SITE },
      publisher: { "@type": "Organization", name: "Palm Jebel Ali", url: SITE },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: FAQS_FOR_SCHEMA.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA) }} />
      <PalmJebelAliClient />
    </>
  );
}
