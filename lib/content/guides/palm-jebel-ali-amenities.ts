import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS } from "@/lib/content/palm-facts";

export const amenities: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-amenities",
    title: "Palm Jebel Ali Amenities | Beaches, Marinas, Hotels & More",
    description:
      "Every amenity at Palm Jebel Ali in one place: private beaches and beach clubs, marinas, 80+ hotels, dining, parks, wellness, schools and the crescent.",
    keywords: [
      "Palm Jebel Ali amenities",
      "Palm Jebel Ali facilities",
      "Palm Jebel Ali beach club",
      "Palm Jebel Ali lifestyle",
    ],
    ogImage: IMG.pool,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "Amenities Guide",
    title: "Palm Jebel Ali amenities,",
    titleItalic: "a whole island, not just a home",
    subtitle:
      "This is the overview: every layer of the amenity picture in one place, from private beaches and marinas to 80+ hotels, waterfront dining, parks, wellness and the crescent — with links to the deeper guides on each.",
    image: IMG.pool,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Developer", v: FACTS.developer },
    { k: "Island scale", v: `${FACTS.islandArea} · ${FACTS.fronds} fronds` },
    { k: "Coastline", v: `~${FACTS.coastlineKm}km of new shoreline` },
    { k: "Hotels & resorts", v: `${FACTS.hotels} across the island` },
    { k: "Beaches", v: "Private frond frontage + beach clubs" },
    { k: "Marinas", v: "Full-service, built into the crescent" },
    { k: "Everyday life", v: "Retail, dining, parks, schools, clinics" },
    { k: "Vs Palm Jumeirah", v: `${FACTS.sizeVsPalmJumeirah} the size` },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        `The first thing to understand about Palm Jebel Ali is that you are not buying into a housing development with a pool and a gym attached. You are buying into a resort-and-residential island — ${FACTS.islandArea} of it — where the amenities are not a bonus bolted onto the homes but half the reason the island exists at all. Nakheel is not building villas beside the sea. It is building a place to live an entire life without leaving, and the homes are one chapter of that.`,
        "That distinction is easy to miss when every collection is sold on its architecture and its price. But the value of an address on an island like this is set as much by what surrounds the front door as by what is behind it — the beach you can walk to, the marina where a boat waits, the hotel spa a golf-buggy ride away, the school your children attend without a causeway commute. This page is the map of all of it: the full amenity picture, gathered in one place, with signposts to the deeper guides on each piece.",
      ],
    },
    {
      kind: "prose",
      heading: "The eight pillars, at a glance",
      body: [
        `Think of the island's amenities as falling into a handful of pillars, each engineered into the master plan rather than sprinkled around it. Together they cover the coastline, the water, hospitality, everyday life and the sheer physical shell — the crescent — that makes the rest possible. What follows summarises each; the individual guides go deeper where it matters.`,
      ],
    },
    {
      kind: "cards",
      heading: "The amenity pillars",
      intro:
        "Eight layers of island life, each planned in from the start. Qualitative by design — the specifics firm up as the island completes.",
      columns: 2,
      items: [
        {
          title: "Private beaches & beach clubs",
          body: "Frond-front villas sit on their own stretch of sand, while homes without private frontage reach the water through residents' and family beach clubs. The full picture is in the beaches guide.",
          meta: `~${FACTS.coastlineKm}km of coastline`,
        },
        {
          title: "Marinas & yachting",
          body: "Full-service marinas are built into the sheltering crescent, with berthing woven through the waterfront so a boat can be a threshold you cross, not a facility you drive to.",
          meta: "Boat-access living",
        },
        {
          title: "Hotels & resorts",
          body: `The island is planned around ${FACTS.hotels} hotels and resorts — a genuine hospitality district, not a single flagship. That scale brings spas, beach clubs, restaurants and a visiting population that keeps the island alive year-round. See the /pulse/guides/palm-jebel-ali-hotels guide for the full read.`,
          meta: `${FACTS.hotels} hotels`,
        },
        {
          title: "Waterfront dining & retail",
          body: "Restaurants, cafés and shopping wrap around the marinas and promenades, so the harbour edge is somewhere to spend an evening. The /pulse/guides/palm-jebel-ali-dining guide covers how the food-and-retail scene is taking shape.",
          meta: "Along the water",
        },
        {
          title: "Parks & promenades",
          body: "Green space and walkable promenades thread through the fronds and along the shoreline — the connective tissue that turns clusters of villas into neighbourhoods you can actually walk around.",
          meta: "Open space",
        },
        {
          title: "Wellness & fitness",
          body: "Between the resort spas, the beach clubs and community fitness provision, the island is built for the outdoor, water-first wellness routine the Gulf climate rewards for much of the year.",
          meta: "Body & mind",
        },
        {
          title: "Schools, clinics & mosques",
          body: "The everyday infrastructure of a real community — schooling, healthcare and places of worship — is planned into the island so residents aren't dependent on the mainland for the essentials. The /pulse/guides/palm-jebel-ali-schools guide looks at family life in detail.",
          meta: "Daily essentials",
        },
        {
          title: "The crescent & breakwater",
          body: `The long, curving outer arm shelters everything inside it — calming the water, hosting the marinas, and giving the island its protected inner sea. It is the piece of infrastructure the other seven pillars quietly depend on.`,
          meta: "The island's shell",
        },
      ],
    },
    {
      kind: "pullquote",
      text: "The homes are one chapter. The amenities are the reason the island reads as a destination rather than an address.",
    },
    {
      kind: "prose",
      heading: "Why the amenity mix is this broad",
      body: [
        `Scale forces breadth. An island ${FACTS.sizeVsPalmJumeirah} the footprint of Palm Jumeirah, carrying ${FACTS.fronds} fronds and ${FACTS.hotels} hotels, cannot function as a dormitory suburb — it has to be self-sufficient enough that residents and a floating hotel population can live, eat, exercise, learn and be treated without a constant run to the mainland. The amenity list is long because the island is effectively a small coastal town, and towns need more than beaches.`,
        "There is a deliberate layering to it, too. Some amenities are private and scarce — a frond-front beach, a berth near the door. Some are shared and communal — the beach clubs, the parks, the promenades. And some are civic — schools, clinics, mosques — the things that decide whether a place is somewhere you holiday or somewhere you belong. A serious master plan needs all three registers, and Palm Jebel Ali is drawn to carry them.",
      ],
    },
    {
      kind: "prose",
      heading: "How the amenities arrive — phasing",
      body: [
        "The honest caveat is timing. Palm Jebel Ali is being built as a whole island at once, and amenities come online in step with the phases around them rather than all on opening day. Early buyers move in while the shell — roads, utilities, marine works, the crescent connection — is still being completed, and the hotels, retail districts and civic buildings mature over the years that follow.",
        "That is normal for a landmark of this size, and it is worth planning around rather than being surprised by. The shoreline and the fronds define the island from the start; the beach clubs, marinas, hospitality and everyday services fill in progressively as each cluster completes. The practical read: buy for the address and the master plan you're confident in, and treat the full amenity picture as a horizon the island grows into — not a switch flipped at handover.",
      ],
    },
    {
      kind: "prose",
      heading: "Why the mix matters to buyers",
      body: [
        "For an end-user, the amenity mix is simply the quality of daily life — the difference between a beautiful villa on a quiet frond and a beautiful villa inside a living island of beaches, restaurants, marinas and schools. It decides whether the island can hold a family long-term or works only as a second home you visit.",
        "For an investor, the same amenities are the value engine. Hospitality, retail and marina life are what pull a floating population onto the island, sustain short-stay and rental demand, and give later phases their pricing power as the picture fills in. Waterfront homes wrapped in a mature amenity ecosystem hold value differently from an isolated plot — which is exactly why the breadth of this list belongs in any purchase decision, not just the floor plan and the price.",
      ],
    },
    {
      kind: "prose",
      heading: "Go deeper",
      body: [
        "This page is the hub; each pillar has its own guide. Start with the /pulse/guides/palm-jebel-ali-beaches guide for how shoreline access works, and the /pulse/guides/palm-jebel-ali-marinas guide for berthing and the yachting life. From there, the /pulse/guides/palm-jebel-ali-hotels guide covers the 80+ resorts, the /pulse/guides/palm-jebel-ali-dining guide looks at the waterfront food-and-retail scene, and the /pulse/guides/palm-jebel-ali-schools guide sets out family life, schooling and clinics.",
        "If you'd rather see how the amenities sit against the homes and the master plan as a whole, the /communities/palm-jebel-ali overview is the place to zoom back out. And if a specific amenity is the reason you're buying — a berth, a beach club, the right school — tell us, and we'll point you to the fronds and collections that put it closest to your door.",
      ],
    },
  ],

  faqs: [
    {
      question: "What amenities will Palm Jebel Ali have?",
      answer:
        `Palm Jebel Ali is planned as a full resort-and-residential island: private beaches and beach clubs along ~${FACTS.coastlineKm}km of coastline, full-service marinas, ${FACTS.hotels} hotels and resorts, waterfront dining and retail, parks and promenades, wellness and fitness facilities, and everyday civic infrastructure — schools, clinics and mosques — all sheltered by the outer crescent.`,
    },
    {
      question: "Are there hotels, beaches and schools?",
      answer:
        `Yes to all three. The island is planned around ${FACTS.hotels} hotels and resorts, private frond-front beaches plus shared residents' and family beach clubs, and schooling planned into the master plan alongside clinics and mosques so residents aren't reliant on the mainland for the essentials.`,
    },
    {
      question: "How many hotels will Palm Jebel Ali have?",
      answer:
        `The master plan is built around ${FACTS.hotels} hotels and resorts — a full hospitality district rather than a single flagship. That scale is what brings the spas, beach clubs, restaurants and year-round activity that keep the island alive beyond its residents.`,
    },
    {
      question: "Will the amenities be ready when I move in?",
      answer:
        "Not all at once. Palm Jebel Ali is a phased build, and amenities come online in step with the surrounding phases rather than on a single opening day. Early residents move in while hospitality, retail and civic buildings are still maturing — the shoreline and fronds define the island from the start, and the full amenity picture fills in over the following years.",
    },
    {
      question: "Do all homes get private beach access?",
      answer:
        "No — access comes in two forms. Frond-front villas sit on their own private stretch of sand, while homes and apartments without private frontage reach the water through the island's shared residents' and family beach clubs. The beaches guide sets out exactly how access differs by collection.",
    },
    {
      question: "What is the crescent and why does it matter?",
      answer:
        "The crescent is the long curving breakwater that wraps the island's outer edge. It shelters the water inside, hosts the full-service marinas, and creates the calm inner sea the beaches and berthing depend on — the piece of infrastructure that makes most of the other amenities possible.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-beaches", label: "Beaches & beach clubs", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-marinas", label: "Marinas & yachting", kicker: "Guide" },
    { href: "/communities/palm-jebel-ali", label: "Palm Jebel Ali community overview", kicker: "Community" },
  ],

  cta: {
    heading: "Buying for a particular amenity? Tell us which",
    body: "A berth near the door, a frond-front beach, the right school run — the amenity that matters most should shape the frond and collection you choose. Tell us yours and we'll point you to the homes that put it closest.",
    interest: "General enquiry",
  },
};
