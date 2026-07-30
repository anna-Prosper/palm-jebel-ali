import type { Locale } from "@/lib/i18n";

// Copy for the guides & residences INDEX pages. Chrome/nav strings live in
// lib/i18n.ts UI; guide/collection CARD data comes from the content registries.
export type IndexCopy = {
  guides: {
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    subcopy: string;
    readGuide: string;
    ctaHeading: string;
    ctaBody: string;
  };
  residences: {
    crumbHome: string;
    crumbResidences: string;
    eyebrow: string;
    headingLead: string;
    headingEm: string;
    subcopy: string;
    from: string;
    view: string;
    beachHeading: string;
    beachTitle: string;
    coralHeading: string;
    coralTitle: string;
    ctaHeading: string;
    ctaBody: string;
  };
};

const EN: IndexCopy = {
  guides: {
    eyebrow: "Pulse · Guides",
    headingLead: "Palm Jebel Ali, ",
    headingEm: "explained",
    subcopy: "Straight-talking guides to pricing, payment plans, handover, the villa collections and how the island stacks up.",
    readGuide: "Read guide",
    ctaHeading: "Still have questions?",
    ctaBody: "Our Palm Jebel Ali team can send the current release schedule, pricing and floor plans — and answer anything the guides didn't.",
  },
  residences: {
    crumbHome: "Home",
    crumbResidences: "Residences",
    eyebrow: "The Residences",
    headingLead: "Three collections, ",
    headingEm: "one coastline",
    subcopy: "From beachfront family villas to ultra-prime signature mansions and a connected resort-apartment district — every home Palm Jebel Ali offers, in one place.",
    from: "From",
    view: "View",
    beachHeading: "Beach Collection designs",
    beachTitle: "Explore the individual villa designs",
    coralHeading: "Coral Collection designs",
    coralTitle: "The five outer-frond mansions",
    ctaHeading: "Find your address on the island",
    ctaBody: "Tell us which collection you're drawn to and we'll send live availability, floor plans and current pricing.",
  },
};

// ar/ru filled in index-copy-ar.ts / index-copy-ru.ts; merged below.
import { INDEX_AR } from "@/lib/content/index-copy-ar";
import { INDEX_RU } from "@/lib/content/index-copy-ru";

export const INDEX_COPY: Record<Locale, IndexCopy> = { en: EN, ar: INDEX_AR, ru: INDEX_RU };
