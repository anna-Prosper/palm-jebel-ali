import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const offplanPalmJebelAli: HubContent = {
  meta: {
    slug: "off-plan-in/palm-jebel-ali",
    title: "Off-Plan Property in Palm Jebel Ali | Launches, Prices & Payment Plans 2026",
    description:
      "Buy off-plan at Palm Jebel Ali. Beach Collection villas from AED 18.5M, Coral mansions from AED 30M, Palm Central residences from AED 2.5M — 80/20 payment plans, freehold, Golden Visa eligible, phased handover from 2027.",
    keywords: [
      "Palm Jebel Ali off-plan",
      "off-plan property Palm Jebel Ali",
      "Palm Jebel Ali payment plan",
      "Palm Jebel Ali launches",
      "Palm Jebel Ali handover",
      "buy off-plan Dubai island",
      "Nakheel off-plan",
    ],
    ogImage: IMG.beach,
  },

  hero: {
    eyebrow: "Off-Plan",
    title: "Off-plan at Palm Jebel Ali",
    titleItalic: "the launch-phase window",
    subtitle:
      "Every home on the island is being sold off-plan, direct from Nakheel, on staged payment plans — bought before the beaches, marinas and resorts around them are finished.",
    image: IMG.beach,
    imagePosition: "center 60%",
  },

  stats: [
    { value: "AED 2.5M", label: "Entry price" },
    { value: "80/20", label: "Payment plan" },
    { value: "2027+", label: "Phased handover" },
    { countTo: 3, label: "Collections launching" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "What 'off-plan' means here",
      body: [
        "Palm Jebel Ali is an active construction site, not a resale market. There is no ready inventory to walk into — homes are reserved off-plan, direct from the master developer, and paid for in stages as the island is built out. That is precisely why entry pricing sits where it does.",
        "For buyers, the trade is straightforward: you commit early, against a render and a master plan, in exchange for launch-phase pricing and first choice of frond, plot and view. As each phase sells and the surrounding amenities come online, later releases typically price above the last.",
      ],
    },
    {
      kind: "steps",
      heading: "How the payment plan works",
      intro: "Launch inventory has typically followed an 80/20 structure. Exact terms vary by collection and release, so confirm against the current schedule before you reserve.",
      items: [
        { title: "20% on booking", body: "Reserve your unit with the down payment; the sale is registered with the Dubai Land Department and an Oqood (off-plan title) issued." },
        { title: "60% across construction", body: "The bulk of the price is spread across construction milestones as the frond and your home progress." },
        { title: "20% on handover", body: "The final tranche falls due when your home is completed and keys are handed over." },
      ],
    },
    {
      kind: "collections",
      heading: "What's launching",
      intro: "Three collections are being released in phases across the island's fronds and central district.",
      items: COLLECTIONS,
    },
    {
      kind: "cards",
      heading: "Why buy off-plan here",
      columns: 2,
      items: [
        { title: "Launch-phase entry", body: "Prices are set ahead of the hotel, retail and marina phases maturing — the classic off-plan appreciation window." },
        { title: "Staged, not lump-sum", body: "The 80/20 plan spreads the commitment across years of construction rather than all at once." },
        { title: "Freehold + Golden Visa", body: "Own outright as any nationality, and clear the AED 2 million threshold for the 10-year renewable Golden Visa." },
        { title: "First choice of position", body: "Early buyers pick frond, plot and orientation before the best addresses are gone." },
      ],
    },
    {
      kind: "pullquote",
      text: "Off-plan is a timing play. The upside is buying the island before it's finished; the discipline is choosing entry price, phase and holding period with eyes open.",
    },
  ],

  faqs: [
    {
      question: "Is there any ready (completed) property at Palm Jebel Ali?",
      answer:
        "Not yet. The island is under construction and everything is sold off-plan, direct from Nakheel. Villa fronds are being built now, with the first handovers staged from around 2027 and later apartment phases running toward the end of the decade.",
    },
    {
      question: "What is the payment plan for off-plan units?",
      answer:
        "Launch inventory has typically followed an 80/20 structure: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Exact terms vary by collection and release.",
    },
    {
      question: "How much does it cost to buy off-plan at Palm Jebel Ali?",
      answer:
        "Beach Collection villas start from around AED 18.5 million and Coral Collection mansions from roughly AED 30 million. Palm Central Private Residences start from about AED 2.5 million. Pricing moves with each release phase, unit type and frond position.",
    },
    {
      question: "When is handover?",
      answer:
        "Handover is phased. Earlier Coral phases are staged from around 2027, Beach Collection phases toward 2029, and Palm Central Private Residences from 2028 with later phases toward 2030.",
    },
    {
      question: "Is off-plan at Palm Jebel Ali a good investment?",
      answer:
        "The case rests on scarcity and timing — freehold beachfront on a limited-supply island, bought at launch-phase pricing in Dubai's southern growth corridor. As with any off-plan purchase, returns depend on your entry price, release phase and holding period.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-payment-plans", label: "Payment plans explained", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-handover-timeline", label: "Handover timeline", kicker: "Guide" },
    { href: "/communities/palm-jebel-ali", label: "The community, in full", kicker: "Community" },
  ],

  cta: {
    heading: "See what's released right now",
    body: "Launch phases open and sell quickly. Tell us your budget and preferred collection and we'll send current availability and payment terms.",
    interest: "Investment / payment plans",
  },
};
