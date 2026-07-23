import type { Metadata } from "next";
import PalmJebelAliClient from "@/components/PalmJebelAliClient";

const OG_IMG = "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali/hero-aerial.png";

const META_TITLE = "Palm Jebel Ali | Nakheel's Second Palm Island, Villas from AED 18.5M";
const META_DESC =
  "Palm Jebel Ali by Nakheel: 16 fronds, 110km of new coastline, twice the size of Palm Jumeirah. Beachfront villas from AED 18.5M, Palm Central apartments from AED 2.7M. 80/20 payment plan.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESC,
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    type: "website",
    images: [{ url: OG_IMG, width: 1344, height: 768, alt: "Aerial view of Palm Jebel Ali, Dubai's second palm island" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
    images: [OG_IMG],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

const SCHEMA_ARTICLE = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Palm Jebel Ali, Nakheel's Second Palm Island Guide",
  description: META_DESC,
  image: OG_IMG,
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
};

const FAQS_FOR_SCHEMA = [
  {
    question: "What is Palm Jebel Ali?",
    answer:
      "A new palm-shaped island development by Nakheel off Dubai's southern coast, roughly twice the size of Palm Jumeirah, comprising 16 fronds across 7 islands.",
  },
  {
    question: "How much does it cost to buy at Palm Jebel Ali?",
    answer:
      "Beachfront villas start from AED 18.5 million; apartments and townhouses at Palm Central start from AED 2.7 million, depending on release phase and unit.",
  },
  {
    question: "What is the payment plan?",
    answer:
      "Launch inventory has typically followed an 80/20 structure, 20% on booking, 60% during construction, 20% on handover, though terms vary by release.",
  },
  {
    question: "When is handover?",
    answer:
      "Villas are phased in across multiple fronds under active construction. Palm Central apartments and townhouses are scheduled from 2028, with later phases through 2030.",
  },
  {
    question: "Is Palm Jebel Ali really bigger than Palm Jumeirah?",
    answer: "Yes, the master plan is roughly double the footprint, adding around 110km of new coastline to Dubai.",
  },
  {
    question: "Can foreign buyers own freehold here?",
    answer:
      "Yes, Palm Jebel Ali falls within Dubai's designated freehold zones, open to foreign ownership like Palm Jumeirah and other Nakheel master communities.",
  },
];

const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_FOR_SCHEMA.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA_ARTICLE) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(SCHEMA_FAQ) }} />
      <PalmJebelAliClient />
    </>
  );
}
