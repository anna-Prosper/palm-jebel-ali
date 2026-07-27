import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const coralCollection: HubContent = {
  meta: {
    slug: "residences/coral-collection",
    title: "The Coral Collection | Palm Jebel Ali 7-Bedroom Signature Mansions",
    description:
      "The Coral Collection is the ultra-premium tier at Palm Jebel Ali — 7-bedroom signature mansions on the outer fronds, designed with SAOTA & Naga Architects, from AED 30M. Freehold, 80/20 payment plan, handover from around 2027.",
    keywords: [
      "Palm Jebel Ali Coral Collection",
      "Coral Collection mansions",
      "Palm Jebel Ali 7 bedroom mansion",
      "SAOTA Palm Jebel Ali",
      "Palm Jebel Ali outer fronds",
      "ultra-luxury Palm Jebel Ali",
      "Nakheel signature mansions",
    ],
    ogImage: IMG.coral,
  },

  hero: {
    eyebrow: "The Coral Collection",
    title: "The Coral Collection",
    titleItalic: "the island's rarest addresses",
    subtitle:
      "Seven-bedroom signature mansions set along the outer fronds of Palm Jebel Ali — designed with SAOTA & Naga Architects and reserved for the few. This is the top of the island, from AED 30 million.",
    image: IMG.coral,
    imagePosition: "center 55%",
  },

  stats: [
    { value: "AED 30M", label: "From" },
    { value: "7", label: "Bedrooms" },
    { value: "Outer fronds", label: "Position" },
    { value: "SAOTA & Naga", label: "Design" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "The top of the island",
      body: [
        "Every home at Palm Jebel Ali is scarce by definition — a finite number of plots on a man-made island roughly twice the scale of Palm Jumeirah. The Coral Collection is the scarce within the scarce. These are the seven-bedroom signature mansions, the largest and most private homes Nakheel is releasing on the island, and they sit where the island is most exposed to open water: the outer fronds.",
        "Priced from AED 30 million, Coral is not a step up from the Beach Collection so much as a different proposition entirely. Where the villa collections answer the question of how to live well on the fronds, Coral answers a narrower one — what the very best address on a landmark island should feel like when there are only a handful of them. Designed in partnership with SAOTA & Naga Architects, these mansions are conceived as the island's flagship residences, the ones the master plan is quietly built around.",
      ],
    },
    {
      kind: "cards",
      heading: "What makes Coral the rarest tier",
      intro:
        "Four things set the Coral Collection apart — and none of them can be manufactured after the fact once the fronds are built out.",
      columns: 2,
      items: [
        {
          title: "Outer-frond exclusivity",
          body: "Coral occupies the outer fronds — the tips of the island that reach furthest into open water. These are the most exposed, most private and least numerous plots Palm Jebel Ali has to offer, and they cannot be added to later.",
        },
        {
          title: "SAOTA & Naga architecture",
          body: "The mansions are designed with SAOTA — the studio behind some of the world's most photographed contemporary homes — alongside Naga Architects. The result is architecture treated as the headline, not the finishing touch.",
        },
        {
          title: "Signature scale",
          body: "Seven bedrooms across a single signature mansion, positioned at the top of the island's range. This is the largest format Nakheel is releasing at Palm Jebel Ali — space measured in the way estate homes are measured, not apartments.",
        },
        {
          title: "Uncompromising privacy",
          body: "Set at the frond tips and spaced for seclusion, Coral homes are designed to feel removed even by the standards of a private island — the difference between living on a landmark and living apart from it.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Why the outer fronds are the most coveted",
      body: [
        "On any frond island, position is everything, and the outer fronds are the pinnacle of it. Reaching furthest from the trunk and the crescent, they trade proximity to the centre for something that cannot be bought back later: uninterrupted water, distance from your neighbours, and the sense of arriving at the very edge of the island. The homes here look outward to open sea rather than inward across the lagoon.",
        "That geography is also why the outer fronds hold their standing. Palm Jebel Ali stretches across a 110-kilometre coastline and sixteen fronds, yet the outermost tips remain a fraction of the whole — the addresses that define the island in every render and every aerial. As the hotels, marinas and beaches around them come online, the mansions at the frond tips are the ones with the least above them and the most in front of them.",
        "For the Coral buyer, this is the crux of the decision. You are not buying square footage alone; you are buying a location that the master plan makes permanently rare. When the island is finished, there will be Beach villas, there will be Palm Central residences — and there will be a small number of Coral mansions on the outer fronds that were never going to be repeated.",
      ],
    },
    {
      kind: "pullquote",
      text: "You can build another villa on the fronds. You cannot build another outer frond. That is the whole case for Coral.",
    },
    {
      kind: "collections",
      heading: "Where Coral sits in the island",
      intro:
        "Three collections make up Palm Jebel Ali. Coral is the ultra-premium tier at the top — see how it compares with the villa and residential offerings below.",
      items: COLLECTIONS,
    },
  ],

  faqs: [
    {
      question: "What is the Coral Collection at Palm Jebel Ali?",
      answer:
        "The Coral Collection is the ultra-premium tier at Palm Jebel Ali — seven-bedroom signature mansions positioned on the outer fronds, designed in partnership with SAOTA & Naga Architects. They are the largest and rarest homes on the island, priced from around AED 30 million.",
    },
    {
      question: "How much does a Coral Collection mansion cost?",
      answer:
        "Coral Collection mansions start from roughly AED 30 million. Pricing moves with release phase and frond position, and the outer-frond plots are limited in number, so final pricing is confirmed against the current release.",
    },
    {
      question: "Who designed the Coral Collection?",
      answer:
        "The mansions were designed with SAOTA — an internationally recognised architecture studio — together with Naga Architects. Coral is the collection where the architecture is treated as the headline of the home rather than a finishing detail.",
    },
    {
      question: "Why are the outer fronds considered the best addresses?",
      answer:
        "The outer fronds reach furthest into open water, offering the most privacy, the most distance from neighbours and uninterrupted sea views out from the island rather than across the lagoon. They are a small fraction of the island's plots and cannot be added to once the fronds are built, which is what makes Coral the rarest tier.",
    },
    {
      question: "What is the payment plan and handover for Coral?",
      answer:
        "Coral is sold off-plan direct from Nakheel on the island's 80/20 structure — 20% on booking, 60% across construction milestones and 20% on handover. Homes are freehold and clear the AED 2 million Golden Visa threshold many times over. Earlier Coral phases are staged for handover from around 2027.",
    },
  ],

  related: [
    { href: "/residences/beach-collection", label: "The Beach Collection", kicker: "Residences" },
    { href: "/residences/palm-central", label: "Palm Central Private Residences", kicker: "Residences" },
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "The investor's guide", kicker: "Guide" },
  ],

  cta: {
    heading: "Enquire about the Coral Collection",
    body: "Outer-frond mansions are the most limited inventory on the island and release quietly. Register your interest and we'll share current availability, plot positions and payment terms.",
    interest: "The Coral Collection",
  },
};
