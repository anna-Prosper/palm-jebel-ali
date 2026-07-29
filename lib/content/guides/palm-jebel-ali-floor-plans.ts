import type { GuideContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const floorPlans: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-floor-plans",
    title: "Palm Jebel Ali Floor Plans & Layouts | Beach, Coral & Palm Central",
    description:
      "How the layouts differ across Palm Jebel Ali's three collections — Beach Collection villas, Coral Collection mansions and Palm Central's apartments, townhouses and penthouses — plus how to read an off-plan floor plan before you commit.",
    keywords: [
      "Palm Jebel Ali floor plans",
      "Palm Jebel Ali layouts",
      "Beach Collection floor plan",
      "Coral Collection mansion layout",
      "Palm Central residences floor plans",
      "Palm Jebel Ali villa sizes",
      "how to read an off-plan floor plan",
    ],
    ogImage: IMG.villaInterior,
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
  },

  hero: {
    eyebrow: "Guide",
    title: "Palm Jebel Ali floor plans,",
    titleItalic: "how the layouts actually differ",
    subtitle:
      "Three collections, three very different ways of living on the island. Here's how the layouts are organised across Beach, Coral and Palm Central — and how to read an off-plan plan before you reserve.",
    image: IMG.villaInterior,
    imagePosition: "center 55%",
  },

  atAGlance: [
    { k: "Beach Collection", v: "5 & 6-bed villas · 7,500–8,500 sqft" },
    { k: "Coral Collection", v: "7-bed signature mansions" },
    { k: "Palm Central", v: "1–5-bed · apartments to penthouses" },
    { k: "Palm Central scale", v: "212 residences, three buildings" },
    { k: "Villa signatures", v: "Six villa designs (Beach)" },
    { k: "Tenure", v: "Freehold, all nationalities" },
    { k: "Actual drawings", v: "Released to reserving buyers" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "“What does the floor plan look like?” is usually the second question a buyer asks, right after the price. On Palm Jebel Ali it's a more layered question than it sounds, because the island isn't one product — it's three distinct collections, each answering a different way of living by the water. A frond-front villa, an outer-frond mansion and a resort apartment are organised around completely different priorities, so the layouts diverge before you even open a single drawing.",
        "This guide is about that bigger picture: how space is allocated across the three collections, what a given bedroom count and footprint typically buy you, and how to read an off-plan plan sensibly. What it deliberately does not do is invent room-by-room dimensions. The stamped, dimensioned drawings — the ones that tell you the exact width of the primary suite or the depth of the terrace — are released by Nakheel to buyers as they engage on a specific unit and phase. We'd rather point you to the real thing than pretend a generic diagram is your home.",
      ],
    },
    {
      kind: "collections",
      heading: "The three collections at a glance",
      intro:
        "Each collection sits at a different point on the island and a different point on the price and space spectrum. Start here, then read down for how the layouts within each one are shaped.",
      items: COLLECTIONS,
    },
    {
      kind: "prose",
      heading: "The Beach Collection — 5 and 6-bedroom villas",
      body: [
        "The Beach Collection is the island's core villa product: five and six-bedroom homes on frond-front plots, sized roughly between 7,500 and 8,500 sqft. That is a substantial footprint, and it's worth being concrete about what it tends to unlock rather than guessing at measurements. At this scale a villa is almost always arranged over multiple levels, with the ground floor given to open, connected living-dining-kitchen space that opens toward the water, and the upper floor to bedroom suites. The extra bedroom in a six-bed configuration usually reflects either a larger family brief or a home that dedicates rooms to guests, staff or a study without borrowing from the main living areas.",
        "The more interesting variable here isn't the number, it's the styling. The Beach Collection is delivered in six villa designs — six distinct design treatments — so two villas with the same bedroom count and similar footage can present very differently in their massing, roofline, materials and the way the plan meets the beach. When you compare Beach villas, you're really comparing signatures and orientation as much as raw square footage. Which frond, which way the plot faces, and how far it sits along the frond all change the feel of an otherwise similar plan.",
      ],
    },
    {
      kind: "pullquote",
      text: "Two Beach villas with the same bedroom count can live entirely differently — the six designs, the frond, and the orientation do as much work as the square footage.",
    },
    {
      kind: "prose",
      heading: "The Coral Collection — 7-bedroom signature mansions",
      body: [
        "The Coral Collection sits a full tier above. These are seven-bedroom signature mansions on the rarest, outer-frond addresses, and the jump from six bedrooms to seven understates the difference — this is a different category of home, not simply a larger villa. At mansion scale the plan stops being a list of rooms and becomes a sequence of zones: distinct wings for family and guests, generous entertaining volumes, and the kind of primary suite that reads as its own private apartment. Designed by names like SAOTA and Naga Architects, these homes prioritise architectural drama and privacy at a level the Beach Collection doesn't set out to reach.",
        "We're intentionally not putting a square-footage band on Coral here, because the collection is about bespoke, low-density plots rather than a repeated floor plate — publishing a single figure would flatter or mislead depending on the plot. What's fair to say is that a seven-bed mansion on an outer frond is built to feel unbounded: more separation between zones, more ceiling height and volume, and far more of the plot given to the home and its immediate grounds. If the Beach Collection is a large family villa, Coral is a private estate.",
      ],
    },
    {
      kind: "prose",
      heading: "Palm Central — apartments, townhouses and penthouses",
      body: [
        "Palm Central Private Residences is the island's most flexible collection and the one that spans the widest range of layouts. It's a beachfront resort community of 212 connected residences across three buildings, sitting between Fronds M and N, offered from one-bedroom apartments all the way up to five-bedroom homes. Because it packs three formats into that range, the same bedroom count can mean quite different things depending on which format you choose.",
        "Apartments are the entry into the island — single-level homes, typically the one, two and three-bedroom layouts, built around a resort lifestyle where the building's shared amenities do a lot of the heavy lifting. Townhouses bring a vertical, house-like arrangement: living space and bedrooms split across levels, often with their own ground-floor connection and outdoor space, for buyers who want the feel of a home rather than a flat without leaving the community. Penthouses sit at the top of the buildings and at the top of the range — the larger, four and five-bedroom layouts, trading on volume, elevation and the best of the sea views. So when you shortlist in Palm Central, decide on the format first; it shapes the plan far more than the bedroom number alone.",
      ],
    },
    {
      kind: "cards",
      heading: "How to read an off-plan floor plan",
      intro:
        "When the actual drawings do land in your inbox, these are the things worth checking before you fall for the render. None of them require a specialist — just a careful eye.",
      columns: 2,
      items: [
        {
          title: "Orientation and the water",
          body: "Find north, then find the sea. Which rooms face the water and the sun matters more than total area. A plan that puts living space and the primary suite toward the view is worth more than raw footage pointed the wrong way.",
        },
        {
          title: "Gross vs. net, and what's counted",
          body: "Off-plan areas can be quoted as built-up, suite or plot area, and may fold in terraces, balconies, garages and voids. Confirm which measure you're reading so you're comparing like with like across units.",
        },
        {
          title: "Flow and circulation",
          body: "Trace the walk from the front door to the kitchen, and from bedrooms to bathrooms. Long corridors, awkward turns and rooms you can only reach through another room all cost usable space that the headline number hides.",
        },
        {
          title: "Where the walls can't move",
          body: "Structural walls, cores, risers and columns are fixed; partitions are not. Knowing which is which tells you what you could actually reconfigure later, and which “flexible” rooms are genuinely flexible.",
        },
        {
          title: "Ceiling height and volume",
          body: "A plan is flat; homes are not. Double-height voids, floor-to-ceiling glazing and terrace depth change how a space feels far more than the plan suggests. Ask for the sections and elevations, not just the plan view.",
        },
        {
          title: "Outdoor space and privacy",
          body: "Check terrace and garden depth, and where your plot sits relative to neighbours and the beach. On a frond, position along the frond and orientation decide how private your outdoor space really is.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "So which layout is right for you?",
      body: [
        "The honest starting point is lifestyle, not floor area. If you want a full family home directly on the beach with room to grow and a distinct architectural character, the Beach Collection's 5 and 6-bed villas are the centre of the island. If you're buying at the very top — privacy, scale and a landmark address — the Coral mansions are a different conversation entirely. And if you want beachfront resort living with a lower entry point and the flexibility to pick a format, Palm Central's range from one-bed apartments to five-bed penthouses is the most adaptable option on the island.",
        "Once you know the collection and, within Palm Central, the format, the next step is the actual dimensioned drawings for the specific units and release phase you're considering. That's where the real decisions get made — and it's exactly what the team can put in front of you.",
      ],
    },
  ],

  faqs: [
    {
      question: "Where can I get the actual floor plans?",
      answer:
        "The stamped, dimensioned drawings for each unit are released by Nakheel to buyers as they engage on a specific residence and release phase. Tell our team which collection — and, in Palm Central, which format — you're interested in, and we'll send the current available floor plans for those units. We keep this page free of invented dimensions on purpose.",
    },
    {
      question: "How big are the Beach Collection villas?",
      answer:
        "The Beach Collection is made up of 5 and 6-bedroom villas sized roughly between 7,500 and 8,500 sqft, delivered in six distinct villa designs. Exact areas vary by villa, signature and plot, which is why we point you to the actual drawings rather than quote a single figure.",
    },
    {
      question: "How many bedrooms do the Coral Collection mansions have?",
      answer:
        "The Coral Collection is a set of seven-bedroom signature mansions on the island's rarest outer-frond plots, designed by architects including SAOTA and Naga. They're bespoke, low-density homes, so we don't publish a single square-footage figure — the specific plot's drawings tell the real story.",
    },
    {
      question: "What layouts does Palm Central offer?",
      answer:
        "Palm Central Private Residences spans 1 to 5-bedroom homes across 212 connected residences in three buildings, in three formats: single-level apartments (the entry point), house-like townhouses split across levels, and top-of-building penthouses in the larger configurations. The format shapes the layout as much as the bedroom count.",
    },
    {
      question: "Are the layouts customisable?",
      answer:
        "Off-plan homes generally offer more flexibility earlier in construction, but what can change depends on structure — cores, risers and load-bearing walls are fixed, while partitions may have some latitude. Any customisation is subject to Nakheel's approval for your specific unit and phase, so it's best confirmed on the actual plans with the team.",
    },
    {
      question: "Can I compare floor plans across the three collections?",
      answer:
        "You can, but compare carefully. A Beach villa, a Coral mansion and a Palm Central home are organised around different priorities, and off-plan areas can be quoted on different bases (built-up, suite or plot). Make sure you're reading the same measure before you compare — the team can line the plans up for you on a like-for-like basis.",
    },
  ],

  related: [
    { href: "/residences/beach-collection", label: "The Beach Collection", kicker: "Residences" },
    { href: "/pulse/guides/palm-jebel-ali-villas", label: "Palm Jebel Ali villas explained", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
  ],

  cta: {
    heading: "Request the actual floor plans",
    body: "Tell us which collection — and, for Palm Central, which format — you're weighing up, and we'll send the current dimensioned drawings for the units that fit.",
    interest: "General enquiry",
  },
};
