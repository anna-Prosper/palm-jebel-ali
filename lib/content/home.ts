// Copy layer for the flagship home page (components/PalmJebelAliClient.tsx).
// English lives here verbatim; ar/ru are placeholders that fall back to English
// until real translations are wired in a later stage. Only human-readable prose
// and labels live here — image URLs, hrefs, prices, stat numbers and icons stay
// in the component as data.

import type { Locale } from "@/lib/i18n";

// A heading/paragraph with one emphasized word rendered as a gold italic
// <em>/<span>. Split into parts so the emphasis survives translation.
export type Emphasized = { lead: string; em: string; tail: string };

export type HomeCopy = {
  hero: {
    eyebrow: string;
    headline: { line1: string; lead: string; em: string; tail: string };
    subcopy: string;
    cta: { register: string; whatsapp: string; viewResidences: string };
  };
  stats: { labels: string[] };
  positioning: Emphasized;
  fronds: { eyebrow: string; heading: Emphasized; body: string };
  residences: {
    eyebrow: string;
    heading: Emphasized;
    fromAed: string;
    collection: string;
    viewCollection: string;
    items: { tag: string; meta: string; facts: string[] }[];
  };
  gallery: { eyebrow: string; heading: Emphasized };
  amenities: {
    eyebrow: string;
    heading: Emphasized;
    intro: string;
    items: { title: string; body: string }[];
  };
  sustainability: {
    eyebrow: string;
    heading: Emphasized;
    intro: string;
    stats: string[];
    items: { title: string; body: string }[];
  };
  ticker: string[];
  location: {
    eyebrow: string;
    heading: Emphasized;
    rows: { place: string; time: string }[];
    guideLink: string;
  };
  payment: {
    eyebrow: string;
    heading: Emphasized;
    steps: string[];
    note: string;
    howLink: string;
  };
  investment: {
    eyebrow: string;
    heading: Emphasized;
    intro: string;
    items: { title: string; body: string }[];
    outro: string;
    links: { investorGuide: string; offPlan: string };
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { question: string; answer: string }[];
    links: { allGuides: string; communityGuide: string };
  };
  finalCta: {
    eyebrow: string;
    heading: Emphasized;
    body: string;
    cta: { requestPricing: string; whatsapp: string };
  };
  footer: {
    brand: string;
    blurb: string;
    whatsapp: string;
    call: string;
    columns: { residences: string; explore: string; guides: string };
    links: { residences: string[]; explore: string[]; guides: string[] };
    disclaimer: string;
    copyright: string;
  };
};

export const HOME_EN: HomeCopy = {
  hero: {
    eyebrow: "By Nakheel",
    headline: { line1: "The new palm.", lead: "Twice the ", em: "shoreline", tail: "." },
    subcopy:
      "16 fronds. 110 kilometres of new coastline. A private island city rising off Dubai's southern shore, and the first villas are already under construction.",
    cta: { register: "Register your interest", whatsapp: "WhatsApp", viewResidences: "View the residences" },
  },
  stats: {
    labels: ["New coastline", "Size of Palm Jumeirah", "Fronds · 7 islands", "Launch payment plan"],
  },
  positioning: {
    lead:
      "Nakheel built Palm Jumeirah once. Palm Jebel Ali is what happens when they get to do it again, with two more decades of lessons, twice the land, and room for a community of ",
    em: "240,000 residents",
    tail: ".",
  },
  fronds: {
    eyebrow: "One trunk, sixteen fronds",
    heading: { lead: "A coastline, ", em: "drawn", tail: " from the sea." },
    body:
      "Seven islands, sixteen fronds, and more shoreline than most countries add in a decade, all connected by three mainland access points straight onto Sheikh Zayed Road.",
  },
  residences: {
    eyebrow: "The residences",
    heading: { lead: "Three collections. One ", em: "coastline", tail: "." },
    fromAed: "From AED",
    collection: "Collection",
    viewCollection: "View the collection",
    items: [
      {
        tag: "The Beach Collection",
        meta: "5 & 6 bedroom villas · 7,500-8,500 sqft",
        facts: ["Frond-front plots with private beach access", "Six villa designs by SAOTA, NAGA, LOCI, WATG & LW Design"],
      },
      {
        tag: "The Coral Collection",
        meta: "6 & 7 bedroom mansions · 11,500-12,500 sqft",
        facts: ["Ultra-premium mansions by SAOTA, LOCI, LW Design & Naga Architects", "The rarest addresses on the island"],
      },
      {
        tag: "Palm Central Private Residences",
        meta: "1-5 bed apartments · townhouses · penthouses",
        facts: ["Beachfront resort living between Fronds M & N", "212 connected residences across three buildings"],
      },
    ],
  },
  gallery: {
    eyebrow: "Built for a life lived outdoors",
    heading: {
      lead: "Private beaches. A working marina. Everyday texture as considered as the ",
      em: "villas",
      tail: ".",
    },
  },
  amenities: {
    eyebrow: "Island lifestyle",
    heading: { lead: "A whole city's worth of ", em: "everyday", tail: "." },
    intro:
      "Islands fail when they are only beautiful. Palm Jebel Ali is planned as somewhere you can actually live, the marinas and beach clubs, yes, but also the schools, clinics and corner retail that make a Tuesday work.",
    items: [
      {
        title: "Private beaches & beach clubs",
        body: "Swimmable frontage on every frond, a dedicated family beach club, and a sunset promenade tracing the island's western edge.",
      },
      {
        title: "Marinas & yachting",
        body: "Full-service marinas and berthing built into the crescent, the Gulf starts a few steps from the door, not a drive away.",
      },
      {
        title: "80+ hotels & resorts",
        body: "Beachfront five-stars, eco-retreats, serviced apartments and boutique stays, phased across the island's outer edges.",
      },
      {
        title: "Waterfront dining",
        body: "Restaurant and café precincts wrapped around the marinas, built for long evenings rather than quick meals.",
      },
      {
        title: "Retail & lifestyle districts",
        body: "Boutique retail clusters and lifestyle centres scaled for people who live here, not for tour buses.",
      },
      {
        title: "Parks, play & promenades",
        body: "Landscaped parks, water features and shaded playgrounds threaded between the fronds and along the shore.",
      },
      {
        title: "Wellness & fitness",
        body: "Spas, wellness centres and open-air fitness zones, with cycling and pedestrian routes running the length of the island.",
      },
      {
        title: "Everyday essentials",
        body: "Schools, clinics, mosques and community retail planned in from day one, so the island works on a Tuesday, not just a Saturday.",
      },
    ],
  },
  sustainability: {
    eyebrow: "Built to last",
    heading: { lead: "An island engineered to ", em: "age well", tail: "." },
    intro:
      "Reclaiming land is the easy part. Making it liveable in forty years is the discipline, and it shows up in the energy plan, the movement plan and what happens under the waterline.",
    stats: ["30%", "Island-wide", "Protected", "Native"],
    items: [
      { title: "Renewable energy", body: "Public facilities across the island are targeted to run on renewable power." },
      { title: "Car-light by design", body: "Continuous cycling and pedestrian routes make short journeys walkable rather than drivable." },
      { title: "Marine habitat", body: "Breakwaters and shallows designed to support marine life rather than simply hold back the sea." },
      { title: "Low-water landscaping", body: "Planting chosen for the Gulf climate, cutting irrigation demand across parks and promenades." },
    ],
  },
  ticker: [
    "Dubai's Second Palm",
    "16 Fronds",
    "110km of New Coastline",
    "Freehold for All Nationalities",
    "Nakheel Master Developer",
    "Villas from AED 18.5M",
  ],
  location: {
    eyebrow: "Location & connectivity",
    heading: { lead: "Minutes from the airport ", em: "reshaping", tail: " Dubai." },
    rows: [
      { place: "Al Maktoum International (DWC)", time: "20 min" },
      { place: "Dubai Marina", time: "25 min" },
      { place: "Expo City Dubai", time: "Minutes" },
      { place: "Sheikh Zayed Road (E11)", time: "Direct" },
    ],
    guideLink: "Read the location guide",
  },
  payment: {
    eyebrow: "Payment plan",
    heading: { lead: "Capital that isn't ", em: "locked up", tail: " early." },
    steps: ["On booking", "During construction", "On handover"],
    note:
      "An 80/20 plan spreads the bulk of your commitment across the build period rather than the day you sign, standard Nakheel structuring on launch-phase inventory, subject to unit and release.",
    howLink: "How the payment plan works",
  },
  investment: {
    eyebrow: "The investment case",
    heading: { lead: "Why buyers move ", em: "early", tail: " here." },
    intro:
      "Beachfront on a finite island is the one thing Dubai cannot produce more of on demand. The rest is timing.",
    items: [
      {
        title: "Freehold for all nationalities",
        body: "Palm Jebel Ali sits inside Dubai's designated freehold zone, full ownership, registered with the Dubai Land Department.",
      },
      {
        title: "Golden Visa eligible",
        body: "Property purchases at or above AED 2 million meet the threshold for the UAE's 10-year renewable Golden Visa.",
      },
      {
        title: "Launch-phase pricing",
        body: "Early releases are priced ahead of the island's amenity and hotel phases coming online, the classic off-plan entry window.",
      },
      {
        title: "Dubai's southern corridor",
        body: "Anchored beside Al Maktoum International and Expo City, the growth axis the city is actively building toward.",
      },
    ],
    outro:
      "Early releases move fast and allocations are tightly held. We track Nakheel's release phases directly and can position serious buyers ahead of general public launches, with full DLD-registered transaction support from reservation through to handover.",
    links: { investorGuide: "Read the investor guide", offPlan: "See off-plan launches" },
  },
  faq: {
    eyebrow: "Common questions",
    heading: "Palm Jebel Ali, answered.",
    items: [
      {
        question: "What is Palm Jebel Ali?",
        answer:
          "Palm Jebel Ali is Nakheel's second palm-shaped island, rising off Dubai's southern coast beside Jebel Ali. The master plan spans over 10.5 million square metres across 16 fronds and seven islands, about twice the footprint of Palm Jumeirah, and is designed to add around 110km of new coastline to the city.",
      },
      {
        question: "What types of homes are available at Palm Jebel Ali?",
        answer:
          "Three collections. The Beach Collection offers 5 and 6-bedroom beachfront villas of roughly 7,500-8,500 sqft across eight architectural signatures. The Coral Collection is the ultra-premium tier, 7-bedroom signature mansions on the outer fronds, designed with SAOTA and Naga Architects. Palm Central Private Residences brings 1-5 bedroom apartments, townhouses and penthouses in a connected beachfront district between Fronds M and N.",
      },
      {
        question: "How much does it cost to buy at Palm Jebel Ali?",
        answer:
          "Beach Collection villas start from around AED 18.5 million and Coral Collection mansions from roughly AED 30 million. Palm Central Private Residences start from about AED 2.5 million. Pricing moves with each release phase, unit type and frond position.",
      },
      {
        question: "What is the payment plan at Palm Jebel Ali?",
        answer:
          "Launch inventory has typically followed an 80/20 structure: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Exact terms vary by collection and release, so confirm against the current release schedule before reserving.",
      },
      {
        question: "When is handover at Palm Jebel Ali?",
        answer:
          "Handover is phased. Villa fronds are already under construction with deliveries staged from around 2027 for earlier Coral phases and toward 2029 for Beach Collection phases. Palm Central Private Residences are scheduled from 2028, with later phases running toward 2030.",
      },
      {
        question: "Is Palm Jebel Ali bigger than Palm Jumeirah?",
        answer:
          "Yes, substantially. The master plan is roughly double Palm Jumeirah's footprint, with 16 fronds instead of Palm Jumeirah's tighter frond layout, and capacity planned for a far larger resident population.",
      },
      {
        question: "Can foreigners buy property at Palm Jebel Ali?",
        answer:
          "Yes. Palm Jebel Ali sits within Dubai's designated freehold zone, so buyers of any nationality can own outright, with title registered at the Dubai Land Department, the same ownership basis as Palm Jumeirah.",
      },
      {
        question: "Does buying at Palm Jebel Ali qualify for the UAE Golden Visa?",
        answer:
          "Property purchases at or above AED 2 million meet the current investment threshold for the UAE's 10-year renewable Golden Visa. Every Palm Jebel Ali collection clears that threshold, though eligibility is assessed on your individual application.",
      },
      {
        question: "Where is Palm Jebel Ali and how do you get there?",
        answer:
          "It sits on Dubai's southern coastline beside Jebel Ali, connected by three mainland access points straight onto Sheikh Zayed Road (E11). Al Maktoum International (DWC) is roughly 20 minutes away, Expo City is minutes down the road, and Dubai Marina is about 25 minutes north.",
      },
      {
        question: "What amenities will Palm Jebel Ali have?",
        answer:
          "The master plan includes private beaches and beach clubs, full-service marinas, more than 80 hotels and resorts, waterfront dining and retail districts, landscaped parks and promenades, wellness and fitness facilities, and everyday essentials such as schools, clinics and mosques, with island-wide cycling and pedestrian routes.",
      },
      {
        question: "Is Palm Jebel Ali a good investment?",
        answer:
          "The case rests on scarcity and timing: freehold beachfront on a limited-supply island, bought at launch-phase pricing before the hotel, retail and marina phases mature, in the growth corridor Dubai is actively building around Al Maktoum International and Expo City. As with any off-plan purchase, returns depend on entry price, release phase and holding period.",
      },
    ],
    links: { allGuides: "Explore all guides", communityGuide: "The full community guide" },
  },
  finalCta: {
    eyebrow: "The invitation",
    heading: { lead: "Your address on the new ", em: "coastline", tail: "." },
    body:
      "Get the current release schedule, pricing by frond, and payment-plan breakdowns, sent directly, no obligation.",
    cta: { requestPricing: "Request Palm Jebel Ali pricing", whatsapp: "WhatsApp" },
  },
  footer: {
    brand: "Palm Jebel Ali",
    blurb:
      "An independent showcase for Nakheel's Palm Jebel Ali, curated by a Dubai brokerage tracking release phases directly.",
    whatsapp: "WhatsApp",
    call: "Call",
    columns: { residences: "Residences", explore: "Explore", guides: "Guides" },
    links: {
      residences: ["The Beach Collection", "The Coral Collection", "Palm Central Residences", "All residences →"],
      explore: ["Community overview", "Off-plan & payment plans", "Buy", "Rent"],
      guides: ["Investor guide", "Prices 2026", "Payment plans", "All guides →"],
    },
    disclaimer:
      "Palm Jebel Ali is a master development by Nakheel. Renders shown are illustrative concept imagery and subject to change. This is an independent showcase, not affiliated with or endorsed by Nakheel.",
    copyright: "© 2026 Palm Jebel Ali Showcase",
  },
};

import { HOME_AR } from "@/lib/content/home-ar";
import { HOME_RU } from "@/lib/content/home-ru";

export const HOME: Record<Locale, HomeCopy> = { en: HOME_EN, ar: HOME_AR, ru: HOME_RU };
