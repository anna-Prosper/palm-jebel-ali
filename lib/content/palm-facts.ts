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
  // Palm Central apartments have followed a 70/30 construction-linked plan, distinct from the villa 80/20.
  paymentPlanCentral: "70/30 — 70% across construction, 30% on handover",
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
  priceFromAed: string;   // e.g. "18.5M" — indicative starting price, confirm live
  image: string;
  facts: string[];
  href?: string;          // dedicated collection landing page
  designs?: string[];     // Nakheel villa-design names in this collection
}

export const COLLECTIONS: Collection[] = [
  {
    key: "beach",
    name: "The Beach Collection",
    meta: "5 & 6 bedroom villas · 7,500–8,500 sqft",
    priceFromAed: "18.5M",
    image: IMG.beach,
    facts: ["Frond-front plots with private beach access", "Six villa designs by SAOTA, NAGA, LOCI, WATG & LW Design"],
    href: "/residences/beach-collection",
    designs: ["Cyan Sky", "Cobalt Beach", "Baia Luna", "Wave Crest", "Ocean Whisper", "Bluejay"],
  },
  {
    key: "coral",
    name: "The Coral Collection",
    meta: "6 & 7 bedroom mansions · 11,500–12,500 sqft",
    priceFromAed: "30M",
    image: IMG.coral,
    facts: ["Ultra-premium mansions by SAOTA, LOCI, LW Design & Naga Architects", "The rarest addresses on the island, on the outer fronds"],
    href: "/residences/coral-collection",
    designs: ["Red Aurora", "Porcelain Roses", "Redwood", "Coral Dune", "Sunset Mirage"],
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

// Individual Beach Collection villa designs with web-validated specs (Oct 2025
// Nakheel launch + portal data). Only models with confirmed specs are listed —
// per the publication rule, a villa page needs real data, not just a name.
export interface VillaDesign {
  name: string;
  slug: string;        // -> /residences/<slug>
  collection: "beach" | "coral";
  sqft: string;        // built-up, validated
  beds: string;        // hedged where the source is not explicit
  architect: string;
  frond?: string;      // confirmed frond, where known
}

export const BEACH_DESIGNS: VillaDesign[] = [
  { name: "Ocean Whisper", slug: "ocean-whisper", collection: "beach", sqft: "8,314", beds: "6 bedroom", architect: "SAOTA", frond: "Frond B" },
  { name: "Cyan Sky", slug: "cyan-sky", collection: "beach", sqft: "7,722", beds: "5 & 6 bedroom", architect: "NAGA Architects" },
  { name: "Cobalt Beach", slug: "cobalt-beach", collection: "beach", sqft: "7,633", beds: "5 & 6 bedroom", architect: "LOCI" },
];

// Dated construction snapshot — the single source for the project-status and
// construction-progress pages. UPDATE this as new inspections/press land.
export const CONSTRUCTION = {
  asOf: "10 March 2026",
  frondProgress: [
    { frond: "K", pct: 27.71 },
    { frond: "L", pct: 24.71 },
    { frond: "M", pct: 22.1 },
    { frond: "N", pct: 29.2 },
    { frond: "O", pct: 37.44 },
    { frond: "P", pct: 20.5 },
  ],
  infrastructure: "Around AED 750 million of major infrastructure (roads, utilities, power distribution, telecom) targeted for completion by the end of 2026, alongside marine works and the Sheikh Zayed Road bridge connection.",
  contracts: "Nakheel awarded more than AED 3.5 billion in villa construction contracts across Fronds A–F in April 2026.",
  handover: "Phased, with the first villa handovers beginning in 2026, earlier fronds targeting around Q3–Q4 2027 and completion targeted toward Q4 2028.",
} as const;

// Handover timeline (phased) — keep vague-but-honest, matches home FAQ.
export const HANDOVER = {
  coralFrom: 2027,
  beachToward: 2029,
  centralFrom: 2028,
  centralToward: 2030,
} as const;
