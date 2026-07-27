import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const beachCollection: HubContent = {
  meta: {
    slug: "residences/beach-collection",
    title: "The Beach Collection at Palm Jebel Ali | 5 & 6-Bed Beachfront Villas from AED 18.5M",
    description:
      "The Beach Collection at Palm Jebel Ali: 5 and 6-bedroom beachfront villas of roughly 7,500–8,500 sqft, across eight architectural signatures, with private beach access on the fronds. From AED 18.5M, 80/20 payment plan, freehold, handover toward 2029.",
    keywords: [
      "Palm Jebel Ali Beach Collection",
      "Beach Collection villas Palm Jebel Ali",
      "Palm Jebel Ali beachfront villas",
      "5 bedroom villa Palm Jebel Ali",
      "6 bedroom villa Palm Jebel Ali",
      "Nakheel Beach Collection",
      "Palm Jebel Ali frond villas",
    ],
    ogImage: IMG.beach,
  },

  hero: {
    eyebrow: "The Beach Collection",
    title: "The Beach Collection",
    titleItalic: "a house on the sand, and the sea in front of it",
    subtitle:
      "Five and six-bedroom villas set frond-front on Palm Jebel Ali, each opening onto its own stretch of private beach. This is the collection that gives the island its residential heart — family homes where the coastline is the back garden.",
    image: IMG.beach,
    imagePosition: "center 55%",
  },

  stats: [
    { value: "AED 18.5M", label: "From" },
    { value: "5–6", suffix: " bed", label: "Villa layouts" },
    { value: "7,500–8,500", suffix: " sqft", label: "Built-up area" },
    { countTo: 8, label: "Architectural signatures" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "The island's family address",
      body: [
        "The Beach Collection is the largest residential offer on Palm Jebel Ali, and the one most people mean when they picture living here. These are five and six-bedroom villas, built at a generous 7,500 to 8,500 square feet, and set along the fronds so that the water is never a view you drive to — it is directly in front of the house. Each home comes with private beach access, which is the whole point: the sand belongs to the address, not to a public promenade.",
        "Nakheel has positioned this collection as the everyday fabric of the island rather than its rarefied top end. Where the Coral mansions are trophies on the outer fronds, the Beach Collection is where families actually settle in — big enough for children, guests and staff, close enough to the shoreline that the day is organised around the tide rather than the traffic. Pricing opens from AED 18.5 million, and homes are reserved off-plan on the island's 80/20 payment plan, with this collection's handover staged toward 2029.",
      ],
    },
    {
      kind: "cards",
      heading: "Eight ways to live by the water",
      intro:
        "The collection isn't a single repeated house. Nakheel released it across eight distinct architectural signatures — a deliberate spread of design languages so that a frond reads as a real neighbourhood rather than a row of identical roofs. The specifics of each signature are confirmed on selection; what follows is the character of the choice, not a spec sheet.",
      columns: 2,
      items: [
        {
          title: "One collection, eight expressions",
          body: "Rather than a single villa stamped down the frond, the Beach Collection spans eight architectural signatures. The footprint and bedroom count stay in the same band — 5 and 6-bed, 7,500 to 8,500 sqft — but the design vocabulary shifts from home to home, giving each address its own face to the sea.",
        },
        {
          title: "A streetscape, not a template",
          body: "The point of eight signatures is variety at the scale of the frond. Neighbours don't live in copies of one another; the mix of forms, rooflines and material palettes lets a stretch of coastline feel composed and lived-in from the first day, the way older beach communities take decades to earn.",
        },
        {
          title: "Room to be a household",
          body: "Every signature is built around family life at scale. Five and six bedrooms across roughly 7,500 to 8,500 square feet means space for multi-generational living, live-in help and long-stay guests — without the home ever feeling like a compromise on the beachfront it sits on.",
        },
        {
          title: "The sea as the organising idea",
          body: "Across all eight, the constant is orientation: these are homes designed to face the water and open to it. The private beach isn't an amenity bolted on — it's the axis the villa is arranged around, from the ground-floor living spaces out to the sand.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Plots, beach and where you sit on the frond",
      body: [
        "Palm Jebel Ali is built as sixteen fronds reaching off a central spine, and the Beach Collection villas sit along them — which means position matters as much as the house itself. Where a villa falls on a frond decides the orientation of its beach, the angle of the sunset, and whether you look out toward open water or across the sheltered channel between fronds. Early buyers choose from a wider field of plots and orientations; that choice narrows as each phase sells.",
        "What every home in the collection shares is direct, private beach access — a defining feature of frond-front living that almost no other address in Dubai can offer at this scale. The island's plan reserves the shoreline for the villas that front it, so the beach in front of your home is effectively yours to use. Combined with freehold ownership open to any nationality and a purchase price that clears the AED 2 million Golden Visa threshold many times over, the Beach Collection is as much a residency and lifestyle decision as a property one.",
      ],
    },
    {
      kind: "pullquote",
      text: "Most beachfront in Dubai is a view. On the fronds of Palm Jebel Ali, it's the plot line — the sand starts where the garden ends.",
    },
    {
      kind: "collections",
      heading: "Where it sits among the island's homes",
      intro:
        "The Beach Collection is one of three residential collections on Palm Jebel Ali. If the frond-front villa isn't quite the brief, the mansions of the Coral Collection and the apartments of Palm Central sit either side of it.",
      items: COLLECTIONS,
    },
  ],

  faqs: [
    {
      question: "What is the Beach Collection at Palm Jebel Ali?",
      answer:
        "It is the island's principal collection of beachfront family villas: five and six-bedroom homes of roughly 7,500 to 8,500 square feet, set frond-front with direct private beach access. It is released across eight distinct architectural signatures and priced from around AED 18.5 million.",
    },
    {
      question: "How much do Beach Collection villas cost?",
      answer:
        "Pricing opens from around AED 18.5 million. The figure moves with the release phase, the villa's size within the 7,500–8,500 sqft band, the architectural signature and — significantly — the plot and orientation on the frond. Frontline positions with the best sea aspect carry a premium.",
    },
    {
      question: "How many bedrooms and how big are the villas?",
      answer:
        "The collection is offered in five and six-bedroom layouts, built at approximately 7,500 to 8,500 square feet. That scale is designed for full households — family, guests and live-in help — rather than a holiday footprint.",
    },
    {
      question: "What are the eight architectural signatures?",
      answer:
        "Nakheel released the Beach Collection across eight distinct architectural signatures, so a frond reads as a varied neighbourhood rather than a run of identical houses. The bedroom count and size band stay consistent across them; the design language changes. The specifics of each signature are confirmed at the point of selection.",
    },
    {
      question: "Do the villas come with private beach access, and when is handover?",
      answer:
        "Yes — direct, private beach access is a defining feature of the collection; the villas front the shoreline of the fronds they sit on. Homes are reserved off-plan on the island's 80/20 payment plan (20% on booking, 60% across construction, 20% on handover), with Beach Collection handover staged toward 2029.",
    },
  ],

  related: [
    { href: "/residences/coral-collection", label: "The Coral Collection", kicker: "Residences" },
    { href: "/residences/palm-central", label: "Palm Central Private Residences", kicker: "Residences" },
    { href: "/pulse/guides/palm-jebel-ali-villas", label: "Palm Jebel Ali villas, explained", kicker: "Guide" },
  ],

  cta: {
    heading: "See what's released in the Beach Collection",
    body: "Frond position decides the view, the beach and the price. Tell us your preferred size and orientation and we'll send current availability, signatures and payment terms.",
    interest: "The Beach Collection",
  },
};
