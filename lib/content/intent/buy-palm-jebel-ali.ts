import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const buyPalmJebelAli: HubContent = {
  meta: {
    slug: "buy-property-in/palm-jebel-ali",
    title: "Buy Property in Palm Jebel Ali | Freehold Villas & Homes",
    description:
      "Buy freehold property in Palm Jebel Ali: open to all nationalities, three collections from AED 2.5M, Golden Visa from AED 2M, all off-plan from Nakheel.",
    keywords: [
      "buy property Palm Jebel Ali",
      "Palm Jebel Ali freehold",
      "Palm Jebel Ali villas for sale",
      "own property Palm Jebel Ali",
      "Palm Jebel Ali Golden Visa",
      "buying process Palm Jebel Ali",
      "Nakheel Palm Jebel Ali",
    ],
    ogImage: IMG.beach,
  },

  hero: {
    eyebrow: "Buy & Own",
    title: "Buy property in Palm Jebel Ali",
    titleItalic: "an address you own outright",
    subtitle:
      "Freehold ownership on Dubai's largest man-made island — open to every nationality, backed by title, and priced from AED 2.5M across three distinct collections. Here is what owning here actually involves.",
    image: IMG.beach,
    imagePosition: "center 55%",
  },

  stats: [
    { value: "AED 2.5M", label: "From" },
    { value: "100%", label: "Freehold ownership" },
    { countTo: 3, label: "Collections" },
    { value: "AED 2M", label: "Golden Visa from" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "What ownership here means",
      body: [
        "Palm Jebel Ali is a designated freehold zone, which is the part that matters most to a buyer. Whatever your passport, you own your home and the land it sits on absolutely — held in your name on the Dubai Land Department register, transferable, inheritable, and free to sell or lease as you choose. There is no leasehold clock and no local sponsor between you and the title.",
        "That single legal fact is what turns a beachfront villa into a genuine asset rather than a long-term rental. For an end-user it means a family home you keep. For an investor it means a titled, financeable holding in one of the most supply-constrained addresses Nakheel has ever released. The same deed underpins both cases.",
        "One honest caveat: there is no resale market here yet. The island is still being built, so every home is bought new, direct from the developer. You are acquiring first ownership of a home that hasn't been lived in — which is exactly why the entry point sits where it does.",
      ],
    },
    {
      kind: "collections",
      heading: "What you can own",
      intro: "Three collections span the island, from central-district residences to the rarest frond-front mansions. Pick by how you intend to live in it — or hold it.",
      items: COLLECTIONS,
    },
    {
      kind: "steps",
      heading: "The buying process, step by step",
      intro: "Buying direct from Nakheel is a well-worn Dubai path. Budget the standard 4% Dubai Land Department fee alongside the purchase price, and the sequence looks like this.",
      items: [
        { title: "Reserve & sign the SPA", body: "You choose your unit, pay a reservation deposit and sign the Sale & Purchase Agreement setting out price, plan and specification." },
        { title: "Register with the DLD", body: "The purchase is recorded with the Dubai Land Department and an Oqood certificate issued — your legal proof of ownership while the home is under construction. Budget the standard 4% DLD registration fee." },
        { title: "Follow the payment plan", body: "Instalments fall due against construction milestones rather than upfront, so ownership is funded gradually as your home takes shape." },
        { title: "Handover & title", body: "On completion you settle the final tranche, take the keys and your ownership converts to a full title deed in your name." },
      ],
    },
    {
      kind: "cards",
      heading: "Why buyers own here",
      columns: 2,
      items: [
        { title: "True freehold", body: "Absolute ownership of home and land, on the DLD register, open to all nationalities — yours to keep, lease, inherit or sell." },
        { title: "Golden Visa path", body: "Property from AED 2 million clears the threshold for the 10-year renewable Golden Visa, extendable to your family." },
        { title: "First-owner pricing", body: "You buy new, before any secondary market exists, at the developer's launch pricing rather than a reseller's markup." },
        { title: "The southern corridor", body: "Ownership on the axis of Dubai's growth — minutes from Expo City and Al Maktoum International as the whole district scales up." },
      ],
    },
    {
      kind: "pullquote",
      text: "Buying off-plan is about timing; owning here is about title. What you're really acquiring is a deed to a piece of an island that can never be made larger.",
    },
  ],

  faqs: [
    {
      question: "Can foreigners own property in Palm Jebel Ali?",
      answer:
        "Yes. Palm Jebel Ali is a freehold zone, so buyers of any nationality own their home and its land outright, registered in their own name with the Dubai Land Department. No local sponsor or partner is required.",
    },
    {
      question: "Can I buy a ready, completed home here?",
      answer:
        "Not yet. The island is still under construction, so there is no resale or ready market — every home is bought new, direct from Nakheel, off-plan. You take first ownership of the property, with title converting to a full deed on handover.",
    },
    {
      question: "How much do I need to buy in Palm Jebel Ali?",
      answer:
        "Palm Central Private Residences start from around AED 2.5 million. Beach Collection villas begin near AED 18.5 million and Coral Collection mansions from roughly AED 30 million. Budget the standard 4% Dubai Land Department registration fee on top of the purchase price.",
    },
    {
      question: "Does buying here qualify me for a Golden Visa?",
      answer:
        "A property purchase of AED 2 million or more meets the investment threshold for Dubai's 10-year renewable Golden Visa, which can be extended to your spouse and children. Since entry pricing on the island starts above that figure, most purchases qualify.",
    },
    {
      question: "What are the ongoing costs of ownership?",
      answer:
        "Beyond the price and the one-off 4% DLD fee at purchase, owners budget for annual service charges covering the upkeep of shared beaches, landscaping and community infrastructure. There is no annual property tax in Dubai.",
    },
  ],

  related: [
    { href: "/off-plan-in/palm-jebel-ali", label: "Off-plan launches & payment plans", kicker: "Off-Plan" },
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "The investor's guide", kicker: "Guide" },
    { href: "/communities/palm-jebel-ali", label: "The community, in full", kicker: "Community" },
  ],

  cta: {
    heading: "Ready to own on the island?",
    body: "Tell us which collection fits and what you're buying for. We'll walk you through availability, the numbers and every step to title.",
    interest: "General enquiry",
  },
};
