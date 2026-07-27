import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const palmCentral: HubContent = {
  meta: {
    slug: "residences/palm-central",
    title: "Palm Central Private Residences | Palm Jebel Ali Apartments from AED 2.5M",
    description:
      "Palm Central Private Residences — 1–5 bedroom beachfront apartments, townhouses and penthouses on Palm Jebel Ali. 212 connected residences across three buildings between Fronds M & N, from AED 2.5M. Freehold, Golden Visa eligible, 80/20 payment plan.",
    keywords: [
      "Palm Central Private Residences",
      "Palm Jebel Ali apartments",
      "Palm Central Palm Jebel Ali",
      "Palm Jebel Ali apartments from AED 2.5M",
      "Nakheel apartments Palm Jebel Ali",
      "Palm Jebel Ali penthouses",
      "beachfront apartments Dubai",
    ],
    ogImage: IMG.palmCentral,
  },

  hero: {
    eyebrow: "Palm Central Private Residences",
    title: "Palm Central Private Residences",
    titleItalic: "the island, made reachable",
    subtitle:
      "212 connected beachfront residences across three buildings between Fronds M & N — one to five bedrooms, from AED 2.5 million. The most accessible way to own a home on Palm Jebel Ali.",
    image: IMG.palmCentral,
    imagePosition: "center 55%",
  },

  stats: [
    { value: "AED 2.5M", label: "Starting price" },
    { value: "1–5", label: "Bedrooms" },
    { countTo: 212, label: "Residences" },
    { countTo: 3, label: "Buildings" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "The entry point to island ownership",
      body: [
        "Most of Palm Jebel Ali is written in villas and mansions — frond-front plots and signature architecture priced from the high teens into the tens of millions. Palm Central Private Residences is the other door onto the island: a district of apartments, townhouses and penthouses that opens island living to buyers who want the address without the villa budget.",
        "It sits in the heart of the island, between Fronds M and N, as a set of 212 connected residences arranged across three buildings. Homes run from one to five bedrooms, and pricing starts at AED 2.5 million — the lowest way in to a Palm Jebel Ali home, and a resort-style one at that. Where the villa collections are about land and privacy, Palm Central is about ease: a beachfront home you step into, share amenities from, and belong to a community within, from day one.",
      ],
    },
    {
      kind: "cards",
      heading: "What living here means",
      intro:
        "Palm Central is designed as a connected beachfront district rather than a lone tower — a place with a front door onto the same sand and sea as the fronds around it.",
      columns: 2,
      items: [
        {
          title: "A connected beachfront district",
          body: "212 residences across three buildings, laid out as one linked community with the beach as its shared frontage — not an isolated block, but a neighbourhood on the water.",
        },
        {
          title: "Resort living, built in",
          body: "The pitch of Palm Central is resort-style beachfront living: amenity and leisure woven through the residences so the everyday feels like the holiday version of the island.",
        },
        {
          title: "Between Fronds M & N",
          body: "A central island address, tucked between two of the fronds rather than out on the water's edge — close to the beach, close to everything the island is building around its middle.",
        },
        {
          title: "A layout for every stage",
          body: "One to five bedrooms across apartments, townhouses and penthouses — room for a first foothold, a family home, or a top-floor residence, all under one district.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The most accessible way onto the island",
      body: [
        "Palm Jebel Ali is being sold off-plan, direct from Nakheel, and Palm Central carries the same terms as the rest of the island: freehold ownership for any nationality, and the launch-phase 80/20 payment plan — 20% on booking, 60% across construction milestones, and the final 20% on handover. Palm Central's phases are staged from 2028 toward 2030, so the commitment spreads across the build rather than landing all at once.",
        "The AED 2.5 million starting price does something specific for international buyers: it clears the AED 2 million threshold for Dubai's 10-year renewable Golden Visa with room to spare. A one-bedroom entry-level residence here isn't only the cheapest key to the island — it's also a straightforward route to long-term UAE residency, tied to a freehold, beachfront home on one of Nakheel's flagship developments. For anyone who has watched the villa collections and felt the island was out of reach, Palm Central is the answer to 'where do I actually start.'",
      ],
    },
    {
      kind: "pullquote",
      text: "Palm Central is where Palm Jebel Ali stops being a place you admire from the aerial shots and becomes a home you can genuinely reach — beachfront, freehold, from AED 2.5 million.",
    },
    {
      kind: "collections",
      heading: "The rest of the island",
      intro:
        "Palm Central is one of three collections on Palm Jebel Ali. If you want land and privacy over apartment ease, the villa and mansion collections sit further out on the fronds.",
      items: COLLECTIONS,
    },
  ],

  faqs: [
    {
      question: "What is Palm Central Private Residences?",
      answer:
        "Palm Central Private Residences is the apartment, townhouse and penthouse district of Palm Jebel Ali — 212 connected beachfront residences across three buildings, between Fronds M and N. Homes range from one to five bedrooms, and it's the most accessible entry point to owning on the island.",
    },
    {
      question: "How much do Palm Central residences cost?",
      answer:
        "Pricing starts from around AED 2.5 million, which makes Palm Central the lowest-priced way to buy a home on Palm Jebel Ali. The final figure depends on the number of bedrooms — one to five — the residence type and the release phase.",
    },
    {
      question: "Do Palm Central residences qualify for the Golden Visa?",
      answer:
        "Yes. The AED 2.5 million starting price clears the AED 2 million property threshold for Dubai's 10-year renewable Golden Visa, so a freehold Palm Central residence can be used as the basis for long-term UAE residency.",
    },
    {
      question: "Where exactly is Palm Central on the island?",
      answer:
        "Palm Central sits in the centre of Palm Jebel Ali, between Fronds M and N, laid out as three buildings of connected residences with beachfront frontage — a resort-style district rather than a standalone tower.",
    },
    {
      question: "What is the payment plan and handover timing?",
      answer:
        "Palm Central follows the island's 80/20 launch plan: 20% on booking, 60% across construction milestones, and 20% on handover. Residences are sold off-plan direct from Nakheel, with phases staged from 2028 toward 2030.",
    },
  ],

  related: [
    { href: "/residences/beach-collection", label: "The Beach Collection villas", kicker: "Residences" },
    { href: "/pulse/guides/palm-jebel-ali-golden-visa", label: "Palm Jebel Ali & the Golden Visa", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "Buying off-plan on the island", kicker: "Off-Plan" },
  ],

  cta: {
    heading: "Start on the island from AED 2.5M",
    body: "Tell us your preferred bedroom count and budget and we'll send current Palm Central availability, floor layouts and payment terms.",
    interest: "Palm Central Private Residences",
  },
};
