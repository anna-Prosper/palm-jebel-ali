import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS, COLLECTIONS } from "@/lib/content/palm-facts";

export const masterplan: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-masterplan",
    title: "Palm Jebel Ali Master Plan | The Island's Design, Scale & Districts",
    description:
      "How Nakheel's Palm Jebel Ali is laid out: 16 fronds, seven islands, over 10.5 million sqm and 110km of new coastline — the crescent, the residential districts, the amenities, and the sustainability thinking behind it.",
    keywords: [
      "Palm Jebel Ali master plan",
      "Palm Jebel Ali fronds",
      "Palm Jebel Ali islands",
      "Palm Jebel Ali map",
      "Palm Jebel Ali districts",
      "Palm Jebel Ali design",
      "Nakheel Palm Jebel Ali",
    ],
    ogImage: IMG.heroAerial,
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
  },

  hero: {
    eyebrow: "Master Plan",
    title: "Palm Jebel Ali,",
    titleItalic: "an island read from above",
    subtitle:
      "Sixteen fronds, seven islands and a crescent that reshapes Dubai's southern shore. A walk through how the island is drawn — its geometry, its districts, and the design thinking beneath the sand.",
    image: IMG.heroAerial,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Developer", v: "Nakheel" },
    { k: "Island area", v: "Over 10.5M sqm" },
    { k: "Fronds", v: "16" },
    { k: "Islands", v: "7" },
    { k: "New coastline", v: "110 km" },
    { k: "Scale", v: "~2× Palm Jumeirah" },
    { k: "Hotels & resorts", v: "80+ planned" },
    { k: "Districts", v: "3 collections + Palm Central" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Some places only make sense from the air. Palm Jebel Ali is one of them. On the ground you experience a beach, a frond-lined street, a marina wall — but the logic that ties it all together is a shape drawn at the scale of the coastline, legible only when you pull back far enough to see the whole palm at once. This guide takes that view: not the sales-suite pitch, but the master plan itself — how the island is composed, why it is drawn the way it is, and what each part is meant to do.",
        "Nakheel has built this language before. Palm Jumeirah taught the world that a frond and a crescent could hold a city's worth of homes and hotels. Palm Jebel Ali is the same idea rewritten at nearly double the size, with the benefit of two decades of hindsight about how people actually live on a man-made island. Read the plan closely and you can see those lessons in the geometry.",
        "A master plan is really a set of decisions made once, at the beginning, that everyone who lives on the island then lives inside for good. Where the roads run, how close the homes sit to the water, which edge faces the open sea and which faces the calm — these are choices you cannot revise after the sand is placed. That permanence is why the plan is worth reading carefully rather than skimming: it is the closest thing to a constitution the island has, and it explains far more about daily life here than any single villa floor plate ever could.",
      ],
    },
    {
      kind: "prose",
      heading: "The shape and the scale",
      body: [
        `The headline numbers do most of the explaining. Palm Jebel Ali spans ${FACTS.islandArea} of reclaimed land, arranged as ${FACTS.fronds} fronds radiating from a central trunk and sheltered by an enclosing crescent. Woven through and around that palm are ${FACTS.islands} islands, and the whole composition adds around ${FACTS.coastlineKm}km of new coastline to Dubai's southern edge.`,
        `Put beside the original, the difference in ambition is stark. Palm Jebel Ali is ${FACTS.sizeVsPalmJumeirah} the footprint of Palm Jumeirah, whose crescent contributes roughly ${FACTS.palmJumeirahCoastlineKm}km of shoreline against this island's ${FACTS.coastlineKm}. More fronds, more crescent, more usable frontage — and, critically, more room between things. Where Palm Jumeirah packs its fronds tightly, this plan gives each one breathing space, which is what makes the wider beaches and lower-density villa plots possible.`,
        "Scale here is not vanity. It is what unlocks the programme: an island this large can carry residential districts, dozens of hotels, marinas and retail without any single use crowding out the others. The size is the master plan's first design decision, and everything downstream depends on it. It also means the island is as much a sequence as a shape — reclaimed, serviced and built out in phases over years, with the districts that anchor the plan today setting the character everything later is built around.",
      ],
    },
    {
      kind: "stats",
      heading: "The island by the numbers",
      items: [
        { countTo: 16, label: "Fronds radiating from the trunk" },
        { countTo: 7, label: "Islands woven through the plan" },
        { value: "10.5M+", suffix: " sqm", label: "Total reclaimed land area" },
        { countTo: 110, suffix: " km", label: "New coastline created" },
      ],
    },
    {
      kind: "prose",
      heading: "The crescent and the fronds explained",
      body: [
        "The palm form is not decoration — it is infrastructure. The trunk is the island's spine: the main road in from the mainland, and the axis along which the central district, services and connections run. Everything else hangs off it.",
        `From the trunk, ${FACTS.fronds} fronds fan outward into the Gulf. Each frond is effectively a private, water-lined street of villa plots, and the fronds are where the residential density mostly lives. Because a frond is a dead-end reaching into the sea, the homes along it get water on both sides and almost no through-traffic — the quiet that beachfront buyers are actually paying for.`,
        "Wrapping the whole palm is the crescent: a breakwater island that curves protectively around the fronds. It does two jobs at once. Structurally, it calms the water inside the bay so the fronds sit in sheltered, swimmable conditions rather than open sea. Programmatically, it is the island's outward-facing edge — the natural home for resorts, beach clubs and the hospitality that wants an unobstructed horizon. Inner-facing homes get calm; outer-facing hospitality gets the open Gulf. That division of water is the quiet genius of the palm layout.",
        "The naming runs alphabetically across the fronds, which is how a district as specific as 'between Fronds M and N' can be pinned to an exact stretch of the island. That lettering matters more than it looks. It means every plot on Palm Jebel Ali has a coordinate — a frond, a position along it, an orientation toward sunrise or sunset — and the master plan assigns character by those coordinates. An inner frond near the trunk lives a different life from an outer frond reaching into the Gulf, even though both are, on paper, simply villa land.",
      ],
    },
    {
      kind: "pullquote",
      text: "The palm is not a logo stamped on the sea. It is a piece of engineering that turns open water into sheltered beaches, and a coastline into an address.",
    },
    {
      kind: "collections",
      heading: "The residential districts",
      intro:
        "Homes are organised into three collections plus a central district, each mapped to a different part of the island's geometry — from apartment living at the heart to the rarest mansions on the outer fronds.",
      items: COLLECTIONS,
    },
    {
      kind: "prose",
      body: [
        "The pattern is deliberate. The Beach Collection sits along the fronds themselves — five- and six-bedroom villas on frond-front plots with private beach access, the everyday texture of island living. The Coral Collection occupies the outer fronds, the plots furthest into the Gulf with the longest sightlines; these are the seven-bedroom signature mansions, the rarest and most exposed addresses on the island. And between Fronds M and N sits Palm Central — a beachfront resort-style district of apartments, townhouses and penthouses built as a connected cluster of residences rather than standalone villas.",
        "That last district matters to how the whole island reads. Palm Central gives Palm Jebel Ali something Palm Jumeirah largely lacked at launch: a walkable, mixed-tenure heart where you don't need a villa budget to live on the palm. It anchors the trunk-end of the island with density, retail and life, so the fronds can stay low and quiet without the island feeling deserted between homes.",
        "There is a social logic to arranging homes this way. By putting apartments and townhouses at the centre and reserving the fronds for lower-density villas, the plan builds in a range of price and lifestyle without mixing them on the same street. A young professional in a Palm Central apartment and a family in a Coral mansion on an outer frond share the same island, the same beaches and the same connectivity — but each lives at the density that suits them. It is a more deliberate spread than the original palm ever attempted, and it is one of the clearest signs that this is a second-generation master plan rather than a bigger copy of the first.",
      ],
    },
    {
      kind: "prose",
      heading: "Amenities and hospitality",
      body: [
        `Hospitality is written into the master plan as a primary use, not an afterthought. Upward of ${FACTS.hotels} hotels and resorts are planned across the island, concentrated on the crescent and the outer edges where the open-water frontage is. That is a resort industry's worth of rooms, restaurants and beach clubs — enough to give the island a public, visitor-facing life alongside its residential quiet.`,
        "Between the hotels sit the amenities that make an island self-sufficient: swimmable beaches all along the sheltered inner shore, marinas for the boats that a waterfront community inevitably accumulates, and retail and dining woven through Palm Central and the crescent. The intent is an island you rarely need to leave — where the beach, the berth, the restaurant and the school are all a short, low-traffic move from home.",
        "Because the plan separates uses by geography — residential on the fronds, hospitality on the crescent, mixed density at the centre — the busy parts and the private parts don't fight each other. You can be minutes from 80-plus hotels and still live on a dead-quiet frond. That is the payoff of drawing an island this large: room to keep the loud and the calm apart.",
      ],
    },
    {
      kind: "cards",
      heading: "Sustainability and car-light design",
      intro:
        "A new island is a chance to build in the environmental thinking that older developments had to retrofit. The master plan leans on four ideas.",
      columns: 2,
      items: [
        {
          title: "Renewable energy for public facilities",
          body: "The plan prioritises clean energy for shared infrastructure — public amenities, community facilities and shoreline services — so the island's common life runs on a lighter footprint than a conventional development.",
        },
        {
          title: "Island-wide cycling and walking",
          body: "Dedicated cycling and pedestrian routes are designed to thread through the fronds and along the shore, so that moving between home, beach and Palm Central doesn't have to mean getting in a car.",
        },
        {
          title: "Protected marine habitat",
          body: "Reef and shoreline design aims to support marine life rather than sterilise it — building the seabed and breakwaters in ways intended to let coral and coastal habitat re-establish around the island.",
        },
        {
          title: "Native, low-water landscaping",
          body: "Planting favours native and drought-tolerant species suited to the Gulf climate, keeping the island green while holding irrigation demand down — landscaping that fits the desert coast rather than fighting it.",
        },
      ],
    },
    {
      kind: "prose",
      body: [
        "None of this is unusual language for a 2020s master plan, and it would be easy to wave away as brochure sustainability. What makes it credible here is the car-light geometry underneath it. A dead-end frond carries only the traffic of the homes on it, which keeps the residential streets quiet enough that a bike or a walk is the obvious way to reach the water; concentrate the shops, dining and services in Palm Central and you give people somewhere worth walking to. Sustainability, on a plan like this, is less a bolt-on system than a by-product of drawing the island so the short trip is also the pleasant one — the version of green design that survives contact with how people actually behave.",
      ],
    },
    {
      kind: "connectivity",
      heading: "How the island connects to the mainland",
      image: IMG.oceanAerial,
      intro:
        "For all its self-containment, the plan is tied firmly to the city. The trunk carries the main access straight onto Dubai's western spine, placing the island inside the southern growth corridor rather than out beyond it.",
      rows: FACTS.connectivity.map((c) => ({ place: c.place, time: c.time })),
    },
    {
      kind: "prose",
      body: [
        "That connectivity is the last piece of the master plan's logic. An island this ambitious only works if it sits inside the city's direction of travel, and Palm Jebel Ali does: minutes from Expo City, around 20 minutes from Al Maktoum International, and fed directly by Sheikh Zayed Road. The plan draws a self-sufficient island — and then plugs it straight into the part of Dubai that is growing fastest around it.",
      ],
    },
  ],

  faqs: [
    {
      question: "How big is Palm Jebel Ali?",
      answer:
        "The island spans over 10.5 million sqm of reclaimed land — roughly twice the footprint of Palm Jumeirah — with 16 fronds, seven islands and around 110km of new coastline added to Dubai's southern shore.",
    },
    {
      question: "How many fronds and islands does the master plan have?",
      answer:
        "Sixteen fronds radiate from the central trunk, each a water-lined street of villa plots, and seven islands are woven through the wider composition. An enclosing crescent wraps the whole palm to shelter the water inside.",
    },
    {
      question: "What are the residential districts on Palm Jebel Ali?",
      answer:
        "Three collections plus a central district. The Beach Collection sits on the fronds, the Coral Collection occupies the outer fronds with the rarest mansions, and Palm Central Private Residences — between Fronds M and N — offers apartments, townhouses and penthouses in a beachfront resort setting.",
    },
    {
      question: "What does the crescent do?",
      answer:
        "The crescent is a breakwater island curving around the fronds. Structurally it calms the water so the inner beaches sit in sheltered, swimmable conditions; programmatically it is the island's outward-facing edge, planned as the home for much of the hospitality — beach clubs and resorts with open-Gulf frontage.",
    },
    {
      question: "How many hotels are planned?",
      answer:
        "The master plan allows for 80-plus hotels and resorts, concentrated on the crescent and outer edges. Alongside them the plan includes swimmable beaches, marinas, and retail and dining woven through Palm Central and the shoreline.",
    },
    {
      question: "How is Palm Jebel Ali designed to be sustainable?",
      answer:
        "The plan leans on renewable energy for public facilities, island-wide cycling and pedestrian routes, protected marine habitat around the reefs and breakwaters, and native low-water landscaping — supported by a car-light geometry that keeps everyday trips short and walkable.",
    },
  ],

  related: [
    { href: "/communities/palm-jebel-ali", label: "Palm Jebel Ali community overview", kicker: "Community" },
    { href: "/pulse/guides/palm-jebel-ali-villas", label: "The villas & collections", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-location", label: "Location & connectivity", kicker: "Guide" },
  ],

  cta: {
    heading: "See where you'd sit on the plan",
    body: "Every frond, district and release has a different character. Tell us how you'd want to live on the island and we'll walk you through the part of the master plan that fits.",
    interest: "Master plan / availability",
  },
};
