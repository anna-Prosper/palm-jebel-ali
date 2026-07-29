import type { HubContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const communityPalmJebelAli: HubContent = {
  meta: {
    slug: "communities/palm-jebel-ali",
    title: "Palm Jebel Ali Community Guide | Island Living & Villas",
    description:
      "Palm Jebel Ali: Nakheel's second palm island — 16 fronds, 110km of new coastline, three collections, beaches, marinas and 80+ resorts off Dubai's shore.",
    keywords: [
      "Palm Jebel Ali community",
      "Palm Jebel Ali living",
      "Palm Jebel Ali amenities",
      "Palm Jebel Ali villas",
      "Palm Jebel Ali location",
      "Nakheel Palm Jebel Ali",
      "Dubai island community",
    ],
    ogImage: IMG.heroAerial,
  },

  hero: {
    eyebrow: "The Community",
    title: "Palm Jebel Ali",
    titleItalic: "an island built to be lived on",
    subtitle:
      "Not a single crescent but seven connected islands and sixteen fronds — a whole coastal district of beaches, marinas, resorts and neighbourhoods rising off Dubai's southern shore.",
    image: IMG.heroAerial,
    imagePosition: "center 55%",
  },

  stats: [
    { countTo: 16, label: "Fronds" },
    { countTo: 110, suffix: "km", label: "New coastline" },
    { countTo: 7, label: "Connected islands" },
    { value: "80+", label: "Hotels & resorts" },
  ],

  blocks: [
    {
      kind: "prose",
      heading: "A second palm, at twice the scale",
      body: [
        "Palm Jebel Ali is Nakheel's second palm-shaped island, and it dwarfs the first. The master plan spans over 10.5 million square metres across sixteen fronds and seven interconnected islands — roughly twice the footprint of Palm Jumeirah — and is designed to add around 110 kilometres of new coastline to the city.",
        "Where Palm Jumeirah grew into Dubai's most recognisable address one tower at a time, Palm Jebel Ali is being planned as a complete community from the outset: homes, beaches, schools, clinics, marinas and retail laid out together, so the island works on an ordinary Tuesday and not only on a holiday weekend.",
      ],
    },
    {
      kind: "collections",
      heading: "Three ways to live here",
      intro:
        "From beachfront family villas to ultra-prime signature mansions and a connected resort-style apartment district, the island's homes are grouped into three distinct collections.",
      items: COLLECTIONS,
    },
    {
      kind: "cards",
      heading: "A whole district's worth of everyday",
      intro: "The master plan folds resort amenity and daily essentials into the same island, so life doesn't require the mainland.",
      columns: 3,
      items: [
        { title: "Private beaches & beach clubs", body: "Swimmable frontage on every frond, a family beach club and a sunset promenade tracing the western edge." },
        { title: "Marinas & yachting", body: "Full-service marinas and berthing built into the crescent — the Gulf begins a few steps from the door." },
        { title: "80+ hotels & resorts", body: "Beachfront five-stars, eco-retreats and boutique stays phased across the island's outer edges." },
        { title: "Waterfront dining & retail", body: "Restaurant, café and boutique-retail precincts wrapped around the marinas, scaled for residents." },
        { title: "Parks & promenades", body: "Landscaped parks, water features and shaded playgrounds threaded between the fronds and along the shore." },
        { title: "Schools, clinics & mosques", body: "Everyday essentials planned in from day one, with island-wide cycling and pedestrian routes." },
      ],
    },
    {
      kind: "connectivity",
      heading: "Closer to the new Dubai than you think",
      intro:
        "Palm Jebel Ali sits on the southern coastline beside Jebel Ali, tied to the mainland by three access points straight onto Sheikh Zayed Road — in the growth corridor around Al Maktoum International and Expo City.",
      image: IMG.oceanAerial,
      rows: [
        { place: "Al Maktoum International (DWC)", time: "20 min" },
        { place: "Expo City Dubai", time: "Minutes" },
        { place: "Dubai Marina / JBR", time: "25 min" },
        { place: "Sheikh Zayed Road (E11)", time: "Direct" },
      ],
    },
    {
      kind: "cards",
      heading: "Why buyers are moving early",
      columns: 2,
      items: [
        { title: "Freehold for all nationalities", body: "Inside Dubai's designated freehold zone — full ownership, registered with the Dubai Land Department." },
        { title: "Golden Visa eligible", body: "Every collection clears the AED 2 million threshold for the UAE's 10-year renewable Golden Visa." },
        { title: "Launch-phase pricing", body: "Early releases are priced ahead of the island's hotel, retail and marina phases maturing — the classic off-plan window." },
        { title: "The southern growth axis", body: "Anchored beside Al Maktoum International and Expo City, the direction Dubai is actively building toward." },
      ],
    },
    {
      kind: "pullquote",
      text: "Scarcity you can stand on: freehold beachfront on a limited-supply island, bought before the island around it is finished.",
    },
  ],

  faqs: [
    {
      question: "What is Palm Jebel Ali?",
      answer:
        "Palm Jebel Ali is Nakheel's second palm-shaped island, off Dubai's southern coast beside Jebel Ali. The master plan spans over 10.5 million square metres across 16 fronds and seven islands — about twice the footprint of Palm Jumeirah — adding around 110km of new coastline.",
    },
    {
      question: "What types of homes can you buy at Palm Jebel Ali?",
      answer:
        "Three collections: the Beach Collection (5 and 6-bedroom beachfront villas, roughly 7,500–8,500 sqft), the ultra-prime Coral Collection (7-bedroom signature mansions on the outer fronds, designed with SAOTA and Naga Architects), and Palm Central Private Residences (1–5 bedroom apartments, townhouses and penthouses between Fronds M and N).",
    },
    {
      question: "How far is Palm Jebel Ali from the rest of Dubai?",
      answer:
        "It connects via three access points onto Sheikh Zayed Road (E11). Al Maktoum International (DWC) is about 20 minutes away, Expo City is minutes down the road, and Dubai Marina is roughly 25 minutes north.",
    },
    {
      question: "Can foreigners own property at Palm Jebel Ali?",
      answer:
        "Yes. The island sits within Dubai's designated freehold zone, so buyers of any nationality can own outright, with title registered at the Dubai Land Department.",
    },
    {
      question: "Is Palm Jebel Ali finished?",
      answer:
        "No — it is under active construction and being delivered in phases. Villa fronds are being built now, with handovers staged from around 2027 through the end of the decade as later apartment and amenity phases come online.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "Palm Jebel Ali investor guide", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-villas", label: "The villa collections, compared", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "Off-plan launches & payment plans", kicker: "Buy" },
  ],

  cta: {
    heading: "Get the current release schedule",
    body: "We track Palm Jebel Ali releases directly. Tell us what you're looking for and we'll send live availability and pricing.",
    interest: "General enquiry",
  },
};
