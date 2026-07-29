import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const cyanSky: HubContent = {
  meta: {
    slug: "residences/cyan-sky",
    title: "Cyan Sky Villa | Beach Collection, Palm Jebel Ali",
    description:
      "Cyan Sky: a 7,722 sqft NAGA-designed beachfront villa in Palm Jebel Ali's Beach Collection, from AED 18.5M. Light-filled, sea-facing. Get the floor plans.",
    keywords: [
      "Cyan Sky Palm Jebel Ali",
      "Cyan Sky villa",
      "Palm Jebel Ali Beach Collection villa",
      "NAGA Palm Jebel Ali",
    ],
    ogImage: IMG.beach,
  },

  hero: {
    eyebrow: "Beach Collection",
    title: "Cyan Sky",
    titleItalic: "a house built to hold the light",
    subtitle:
      "A 7,722 sqft beachfront villa by NAGA Architects — one of the design signatures of Palm Jebel Ali's Beach Collection. Wide terraces, deep balconies and a plan that turns its whole face toward the sea.",
    image: IMG.beach,
    imagePosition: "center 55%",
  },

  stats: [
    { value: "7,722", suffix: " sqft", label: "Built-up area" },
    { value: "5 & 6", suffix: " bed", label: "Collection layouts" },
    { value: "NAGA", label: "Architects" },
    { value: "Beach", label: "Collection" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "NAGA's design language, on the sand",
      body: [
        "Cyan Sky is one of the villa designs that make up the Beach Collection at Palm Jebel Ali, drawn by NAGA Architects. At 7,722 square feet of built-up area, it sits squarely in the collection's 7,500 to 8,500 sqft band — a full family home rather than a holiday footprint — and it carries NAGA's unmistakable instinct for daylight. The practice designs for the way light behaves on a coastline: low and gold in the early hours, hard and bright at midday, and warm again as the sun drops behind the frond. Cyan Sky is planned to catch all of it.",
        "The result is a villa that reads as open rather than enclosed. Generous balconies and terraces extend the living areas outward, so the boundary between inside and beach is a soft one — a threshold you cross without noticing rather than a wall you look through. Every principal space is oriented to face the water, and the glazing is scaled to make the sea the constant backdrop rather than an occasional view. This is beachfront living designed from the outside in: the shoreline first, and the house arranged to meet it.",
      ],
    },
    {
      kind: "cards",
      heading: "What defines Cyan Sky",
      intro:
        "One design signature within a collection of several. What sets Cyan Sky apart is less a spec sheet than a temperament — how NAGA chooses to handle light, air and the edge where the villa meets the beach.",
      columns: 2,
      items: [
        {
          title: "Built for daylight",
          body: "NAGA plans around the sun. Cyan Sky is oriented and glazed to draw natural light deep into the home through the day, so interiors feel bright and open without relying on artificial light — the coastline's own illumination doing the work.",
        },
        {
          title: "Terraces and balconies as rooms",
          body: "Outdoor space isn't a leftover margin here. Spacious terraces and deep balconies extend the living areas toward the sea, giving the household room to live outdoors and blurring the line between the villa and the beach in front of it.",
        },
        {
          title: "Sea-facing by design",
          body: "The whole plan turns toward the water. Principal spaces are arranged to face the shoreline, making the sea the organising view rather than an angle you have to hunt for — the axis the entire home is composed around.",
        },
        {
          title: "Family scale, beachfront setting",
          body: "At 7,722 sqft within the 5 and 6-bedroom Beach Collection, Cyan Sky is sized for a full household — family, guests and live-in help — set on a frond with the private beach access that defines the collection.",
        },
      ],
    },
    {
      kind: "download",
      heading: "Cyan Sky floor plans & pricing",
      blurb:
        "The full NAGA floor plans, built-up areas and the current price sheet for Cyan Sky are available on request. Tell us what you're after and we'll send the plans through.",
      bullets: [
        "NAGA Architects floor plans, level by level",
        "Built-up area breakdown for the 7,722 sqft design",
        "Current Beach Collection pricing and the 80/20 payment schedule",
        "Golden Visa eligibility and freehold ownership notes",
      ],
      interest: "Floor plans & pricing",
      buttonLabel: "Request the floor plans",
      note: "Sent by a Palm Jebel Ali specialist — no obligation.",
    },
    {
      kind: "prose",
      heading: "Released off-plan",
      body: [
        "Cyan Sky is released off-plan as part of the Beach Collection, reserved on Palm Jebel Ali's 80/20 payment plan — 20% on booking, 60% across construction milestones, and the balance on handover. Ownership is freehold and open to any nationality, and a purchase clears the AED 2 million Golden Visa threshold comfortably, so the villa carries a ten-year residency alongside the address.",
        "Pricing for the Beach Collection opens from AED 18.5 million, and the figure for any individual home moves with its release phase, its plot and its orientation on the frond. Because availability changes as each phase sells, live plot options and the current asking price for Cyan Sky are confirmed on request — the fastest route is to tell us your preferred size and aspect and let us send back exactly what's open.",
      ],
    },
    {
      kind: "collections",
      heading: "Where Cyan Sky sits among the island's homes",
      intro:
        "Cyan Sky is one design within the Beach Collection — the island's principal run of frond-front family villas. Either side of it sit the Coral Collection mansions and the apartments of Palm Central.",
      items: COLLECTIONS,
    },
  ],

  faqs: [
    {
      question: "How big is Cyan Sky?",
      answer:
        "Cyan Sky has a built-up area of 7,722 square feet. That places it within the Beach Collection's 7,500 to 8,500 sqft band — a full-scale family villa designed by NAGA Architects.",
    },
    {
      question: "How much does Cyan Sky cost?",
      answer:
        "Beach Collection pricing opens from AED 18.5 million, and Cyan Sky falls within that range. The exact figure depends on the release phase, plot and frond orientation, so the current asking price is confirmed on request.",
    },
    {
      question: "Who designed Cyan Sky?",
      answer:
        "Cyan Sky is a design by NAGA Architects, one of the signatures Nakheel released within the Beach Collection at Palm Jebel Ali. NAGA's approach centres on daylight and sea-facing, open-plan living with generous terraces and balconies.",
    },
    {
      question: "How many bedrooms does Cyan Sky have?",
      answer:
        "Cyan Sky is part of the 5 and 6-bedroom Beach Collection. The confirmed bedroom layout for this specific design, along with the full floor plans, is provided on request.",
    },
    {
      question: "Is Cyan Sky freehold and Golden Visa eligible?",
      answer:
        "Yes. Like the rest of the Beach Collection, Cyan Sky is freehold and open to any nationality, and its price clears the AED 2 million Golden Visa threshold — so ownership comes with ten-year UAE residency eligibility. It is reserved off-plan on the island's 80/20 payment plan.",
    },
  ],

  related: [
    { href: "/residences/beach-collection", label: "The Beach Collection", kicker: "Residences" },
    { href: "/residences/cobalt-beach", label: "Cobalt Beach villa", kicker: "Residences" },
    { href: "/off-plan-in/palm-jebel-ali", label: "Off-plan in Palm Jebel Ali", kicker: "Buying" },
  ],

  cta: {
    heading: "See Cyan Sky in the Beach Collection",
    body: "Send us your preferred size and orientation and we'll come back with the NAGA floor plans, current pricing and what's released on the fronds right now.",
    interest: "The Beach Collection",
  },
};
