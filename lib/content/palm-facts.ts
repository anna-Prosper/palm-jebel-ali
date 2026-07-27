// ─────────────────────────────────────────────────────────────────────────────
// CANONICAL FACT-SHEET for Palm Jebel Ali.
// Single source of truth for every content page (and every Phase-2 drafting
// subagent). If a number changes, change it here — pages read from this so
// nothing contradicts the home page.
// ─────────────────────────────────────────────────────────────────────────────

export const IMG_BASE =
  "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali";

export const IMG = {
  heroAerial: `${IMG_BASE}/hero-aerial-2k.jpg`,
  galleryAerial: `${IMG_BASE}/gallery-aerial.png`,
  oceanAerial: `${IMG_BASE}/ocean-aerial.jpg`,
  beach: `${IMG_BASE}/beach-collection.jpg`,
  coral: `${IMG_BASE}/coral-villa.png?v=6`,
  palmCentral: `${IMG_BASE}/palm-central.jpg`,
  villaInterior: `${IMG_BASE}/villa-interior.png?v=2`,
  pool: `${IMG_BASE}/amenities-pool.png?v=2`,
  bedroom: `${IMG_BASE}/bedroom-suite.png?v=2`,
  ctaBg: `${IMG_BASE}/cta-bg.png?v=2`,
  beachFoam: `${IMG_BASE}/beach-foam.jpg`,
} as const;

export const FACTS = {
  developer: "Nakheel",
  islandArea: "over 10.5 million sqm",
  fronds: 16,
  islands: 7,
  coastlineKm: 110,
  sizeVsPalmJumeirah: "roughly twice",
  palmJumeirahCoastlineKm: 56,
  hotels: "80+",
  goldenVisaThresholdAed: "AED 2 million",
  paymentPlan: "80/20 — 20% on booking, 60% across construction milestones, 20% on handover",
  freehold: true,
  geo: { latitude: 24.9928, longitude: 55.0203 },
  connectivity: [
    { place: "Al Maktoum International (DWC)", time: "20 min" },
    { place: "Expo City Dubai", time: "Minutes" },
    { place: "Dubai Marina / JBR", time: "25 min" },
    { place: "Sheikh Zayed Road (E11)", time: "Direct" },
  ],
} as const;

export interface Collection {
  key: string;
  name: string;
  meta: string;
  priceFromAed: string;   // e.g. "18.5M"
  image: string;
  facts: string[];
  href?: string;          // dedicated collection landing page
}

export const COLLECTIONS: Collection[] = [
  {
    key: "beach",
    name: "The Beach Collection",
    meta: "5 & 6 bedroom villas · 7,500–8,500 sqft",
    priceFromAed: "18.5M",
    image: IMG.beach,
    facts: ["Frond-front plots with private beach access", "Eight architectural signatures across the collection"],
    href: "/residences/beach-collection",
  },
  {
    key: "coral",
    name: "The Coral Collection",
    meta: "7 bedroom signature mansions · outer fronds",
    priceFromAed: "30M",
    image: IMG.coral,
    facts: ["Ultra-premium mansions designed by SAOTA & Naga Architects", "The rarest addresses on the island"],
    href: "/residences/coral-collection",
  },
  {
    key: "central",
    name: "Palm Central Private Residences",
    meta: "1–5 bed apartments · townhouses · penthouses",
    priceFromAed: "2.5M",
    image: IMG.palmCentral,
    facts: ["Beachfront resort living between Fronds M & N", "212 connected residences across three buildings"],
    href: "/residences/palm-central",
  },
];

// Handover timeline (phased) — keep vague-but-honest, matches home FAQ.
export const HANDOVER = {
  coralFrom: 2027,
  beachToward: 2029,
  centralFrom: 2028,
  centralToward: 2030,
} as const;
