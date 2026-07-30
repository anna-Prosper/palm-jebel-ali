import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS, COLLECTIONS, CONSTRUCTION } from "@/lib/content/palm-facts";

export const fronds: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-fronds",
    title: "Palm Jebel Ali Fronds | Which Are Released & Which to Buy",
    description:
      "Palm Jebel Ali's 16 fronds explained: how the collections map across them, which are building (A–F contracted, K–P rising), and position drives value.",
    keywords: [
      "Palm Jebel Ali fronds",
      "Palm Jebel Ali frond map",
      "which frond Palm Jebel Ali",
      "Palm Jebel Ali released fronds",
    ],
    ogImage: IMG.gFronds,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "Frond Guide",
    title: "Palm Jebel Ali fronds,",
    titleItalic: "which are released, and which to buy",
    subtitle:
      "Sixteen fronds, seven islands and a crescent — but not every letter is in play, and no two positions carry the same value. A frond-by-frond read of what's building now and where the addresses actually sit.",
    image: IMG.gFronds,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Fronds", v: "16, lettered A onward" },
    { k: "Islands", v: "7" },
    { k: "Contracts awarded", v: "Fronds A–F (April 2026)" },
    { k: "Under construction", v: "Fronds K–P" },
    { k: "Beach Collection", v: "Along the fronds" },
    { k: "Coral Collection", v: "Outer fronds" },
    { k: "Palm Central", v: "Between Fronds M & N" },
    { k: "Villa entry", v: "From AED 18.5M (Beach)" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        `On Palm Jebel Ali, the address is a letter. The island is drawn as a palm — a trunk running out from the mainland, ${FACTS.fronds} fronds fanning off it into the Gulf, ${FACTS.islands} islands woven through the wider composition, and an enclosing crescent curving around the whole form. The fronds are lettered in sequence, and that lettering is not just a naming convenience: it is the coordinate system the entire island is priced and phased against. Ask "which frond?" and you are really asking about beach access, sightlines, privacy, release timing and, ultimately, price.`,
        "This guide reads the island frond by frond — which letters carry which homes, which fronds are actually being built right now, and how a plot's position on the palm shapes what it's worth. If you only take one idea from it, take this: on an island where the geometry is fixed forever, the frond you choose is the single decision you can never revise.",
      ],
    },
    {
      kind: "prose",
      heading: "The island's anatomy",
      body: [
        `Start with the shape, because everything else hangs off it. The trunk is the spine — the road in from the mainland and the axis the central district runs along. From it, ${FACTS.fronds} fronds reach outward into the water, each one effectively a private, water-lined street of villa plots with the sea on both sides and almost no through-traffic. Around them all sits the crescent, a breakwater island that calms the water inside the bay so the fronds sit in sheltered, swimmable conditions rather than open sea.`,
        `That single form is what makes the island work. It spans ${FACTS.islandArea} of reclaimed land and adds around ${FACTS.coastlineKm}km of new coastline — ${FACTS.sizeVsPalmJumeirah} the footprint of Palm Jumeirah and its roughly ${FACTS.palmJumeirahCoastlineKm}km of shoreline. More fronds and more crescent mean more usable frontage, and more space between things: wider beaches, lower-density plots, and room to keep the busy edges and the quiet fronds apart.`,
        `The alphabetical lettering is what turns that geometry into an address book. Because the fronds run A onward, a district as specific as "between Fronds M and N" pins to an exact stretch of coast. Every plot therefore has a coordinate — a frond, a position along it, an orientation toward sunrise or sunset — and the master plan assigns character by those coordinates. An inner frond near the trunk lives a different life from an outer frond reaching into the Gulf, even though both are, on paper, just villa land.`,
      ],
    },
    {
      kind: "prose",
      heading: "How the collections map to the fronds",
      body: [
        `The homes are organised into three collections plus a central district, and each is tied to a different part of the palm. The Beach Collection runs along the fronds themselves — ${COLLECTIONS[0].meta.toLowerCase()}, on frond-front plots with private beach access, from around AED ${COLLECTIONS[0].priceFromAed}. These are the everyday texture of island living, spread across the fronds rather than concentrated on any single one.`,
        `The Coral Collection sits on the outer fronds — the plots furthest into the Gulf, with the longest sightlines and the most exposure to open water. These are the ${COLLECTIONS[1].meta.toLowerCase()}, from around AED ${COLLECTIONS[1].priceFromAed}, described by Nakheel as the rarest addresses on the island. Where a frond ends, the Coral positions begin, and their scarcity is a direct function of geometry: there are only so many outer-frond tips to go around.`,
        `And between Fronds M and N sits Palm Central Private Residences — a beachfront resort-style district of ${COLLECTIONS[2].meta.toLowerCase()}, from around AED ${COLLECTIONS[2].priceFromAed}. It is the one part of the island where you don't need a villa budget to live on the palm: ${COLLECTIONS[2].facts[1].toLowerCase()}, anchoring the trunk-end with density, retail and life so the fronds can stay low and quiet. Read together, the map is simple — apartments at the centre, villas along the fronds, mansions on the outer tips.`,
      ],
    },
    {
      kind: "pullquote",
      text: "On an island where the geometry is set in the sand forever, the frond you choose is the one decision you can never revise.",
    },
    {
      kind: "prose",
      heading: "Which fronds are active now",
      body: [
        `A frond map only matters if you know which letters are actually moving. As of ${CONSTRUCTION.asOf}, the island is progressing on two tracks. First, contracts: ${CONSTRUCTION.contracts} That award covers the earlier fronds and is the clearest signal of where villa building begins in earnest.`,
        "Second, construction already visibly underway. A separate band of fronds — K through P — is being built out, and inspection data gives each a percentage-complete figure. These are not evenly matched: within the same cluster, one frond can be running well ahead of its neighbour, which tells you something about the phasing sequence and about which addresses will hand over first.",
        `The numbers below are the frond-level progress figures as of ${CONSTRUCTION.asOf}. Treat them as a snapshot of momentum rather than a promise of a handover date — phasing can move — but they are the most concrete read available on which parts of the palm are furthest along.`,
      ],
    },
    {
      kind: "stats",
      heading: `Frond construction progress — as of March 2026`,
      items: CONSTRUCTION.frondProgress.map((f) => ({
        value: `${f.pct}%`,
        label: `Frond ${f.frond} complete`,
      })),
    },
    {
      kind: "cards",
      heading: "Reading the two tracks",
      intro:
        "Contracts awarded and construction progress tell you different things. Together they map where the island is actually in motion right now.",
      columns: 2,
      items: [
        {
          title: "Fronds A–F — contracts awarded",
          body: "Nakheel awarded more than AED 3.5 billion in villa construction contracts across Fronds A–F in April 2026 — the trigger point for villa building on the earlier lettered fronds.",
          meta: "Contracted · April 2026",
        },
        {
          title: "Fronds K–P — under construction",
          body: "A distinct cluster of fronds is already being built out, each tracking its own percentage-complete. Frond O leads the group; Frond P sits at the back of the pack.",
          meta: `Building · as of ${CONSTRUCTION.asOf}`,
        },
        {
          title: "The leaders",
          body: "Frond O is furthest along at 37.44% complete, with Frond N next at 29.2% and Frond K at 27.71% — the fronds where progress is most visible on the ground today.",
          meta: "O 37.44% · N 29.2% · K 27.71%",
        },
        {
          title: "The earlier stages",
          body: "Frond L (24.71%), Frond M (22.1%) and Frond P (20.5%) sit further back in the same cluster — still active, but earlier in their build curve.",
          meta: "L 24.71% · M 22.1% · P 20.5%",
        },
      ],
    },
    {
      kind: "prose",
      body: [
        "Note what the two tracks together imply. The contract awards land on Fronds A–F while the visible construction runs across K–P — so the island is being progressed at more than one point on the palm rather than sequentially from A. For a buyer, that means \"released\" and \"building\" are not the same question: a frond can be contracted for construction before you see structures rise, and a frond can be well into its build before its neighbour has broken much ground. The letter alone doesn't tell you the stage; the data does.",
      ],
    },
    {
      kind: "prose",
      heading: "How frond position shapes value",
      body: [
        "Once you know which fronds are in play, the next question is which position within the palm is worth paying for — and here the drivers are qualitative, because launch pricing is set by collection rather than published plot by plot. Four things move with position.",
        "Beach access and water. Every frond is water-lined on both sides, but the further a plot sits toward the open Gulf, the broader the sense of sea around it. Inner-frond plots near the trunk trade some of that expanse for proximity to Palm Central's retail and life; outer positions trade convenience for water on the horizon.",
        "Views and orientation. Because the fronds fan out at different angles, one faces the sunrise where another faces the sunset, and an outer tip carries a sightline an inner plot cannot. This is why the Coral Collection — on the outer fronds — commands the island's highest starting prices, from around AED 30M against the Beach Collection's AED 18.5M: you pay for the longest, least-obstructed water views on the palm.",
        "Privacy and scarcity. A frond is a dead-end reaching into the sea, so it carries only the traffic of its own homes, and positions further out sit further from the density near the trunk — more seclusion, at the cost of a slightly longer trip to the shops. Those outer tips are also finite in a way inner plots are not, which is the whole basis of the Coral Collection's rarity: position is not just how a home feels day to day, but how replaceable the address is once the island sells out.",
      ],
    },
    {
      kind: "prose",
      heading: "How to choose your frond",
      body: [
        "Start from how you want to live, not from the letter. If you want the broadest water, the longest sightlines and the rarest address — and the budget clears the AED 30M Coral entry — the outer fronds are the play, and their finite supply is the argument for moving early. If you want frond-front villa living with private beach access at the island's most accessible villa entry, the Beach Collection spread across the fronds is the wider field to choose from, from AED 18.5M. And if you want to be on the palm without a villa budget, or you want retail and life at the doorstep, Palm Central between Fronds M and N is the answer, from AED 2.5M.",
        "Then layer the timing question on top. A frond that is already under construction — the K–P cluster, led by O at 37.44% as of March 2026 — offers a more visible build and, plausibly, an earlier handover than a letter that is only just contracted. A frond where contracts have just been awarded, like A–F, is earlier in its life: a longer horizon, but a launch-stage entry point. Neither is simply better; they suit different appetites for waiting versus certainty.",
        "The honest answer to \"which frond is best?\" is that there isn't one — there is the frond that matches your priorities on water, privacy, price and patience. What is worth doing before you reserve is checking the live release and construction status of the specific letters you're weighing, because on an island being built at more than one point at once, that picture moves. Frond position is the one variable you lock in permanently; it is worth getting right.",
      ],
    },
  ],

  faqs: [
    {
      question: "How many fronds does Palm Jebel Ali have?",
      answer:
        "Sixteen. The island is drawn as a palm with a central trunk, 16 fronds radiating from it into the Gulf, seven islands woven through the wider composition, and an enclosing crescent that shelters the water inside. The fronds are lettered in sequence, which is how specific addresses — like the district between Fronds M and N — are pinned to an exact stretch of coast.",
    },
    {
      question: "Which fronds are released?",
      answer:
        "Two tracks are in motion. Nakheel awarded more than AED 3.5 billion in villa construction contracts across Fronds A–F in April 2026, and a separate cluster — Fronds K through P — is already under construction. As of 10 March 2026 the K–P progress figures were: K 27.71%, L 24.71%, M 22.1%, N 29.2%, O 37.44% and P 20.5%. Release and build status move as the island progresses, so it's worth confirming the live position for a specific frond.",
    },
    {
      question: "Which frond is best?",
      answer:
        "There isn't a single best frond — there's the one that matches your priorities. Outer fronds carry the longest water views, the most privacy and the rarest addresses (the Coral Collection, from around AED 30M). Frond-front plots along the fronds offer villa living with private beach access at the island's most accessible villa entry (the Beach Collection, from AED 18.5M). Position drives beach access, views, privacy, scarcity and price, so the right frond depends on how you want to live and how long you're prepared to wait.",
    },
    {
      question: "How do the collections map to the fronds?",
      answer:
        "The Beach Collection runs along the fronds themselves on frond-front plots with private beach access. The Coral Collection occupies the outer fronds — the plots furthest into the Gulf, with the longest sightlines and the rarest addresses. Palm Central Private Residences sits between Fronds M and N, offering apartments, townhouses and penthouses in a beachfront resort setting.",
    },
    {
      question: "Which fronds are furthest along in construction?",
      answer:
        "Within the K–P cluster, Frond O leads at 37.44% complete as of 10 March 2026, followed by Frond N at 29.2% and Frond K at 27.71%. Fronds L (24.71%), M (22.1%) and P (20.5%) sit earlier in their build curve. Treat these as a snapshot of momentum rather than a fixed handover date, as phasing can move.",
    },
    {
      question: "Does frond position affect price?",
      answer:
        "Yes. Launch pricing is set by collection rather than published plot by plot, but position is the reason the collections differ: the outer fronds carry the Coral Collection's mansions from around AED 30M for the longest, least-obstructed water views, while the Beach Collection along the fronds starts from around AED 18.5M. Beyond the collection, a plot's beach access, orientation, privacy and scarcity all move with where it sits on the palm.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-masterplan", label: "The full master plan", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-construction-progress", label: "Construction progress tracker", kicker: "Guide" },
    { href: "/residences/beach-collection", label: "The Beach Collection villas", kicker: "Residences" },
  ],

  cta: {
    heading: "Find the right frond before it's spoken for",
    body: "The released fronds and their build stages move as the island progresses. Tell us how you'd want to live on the palm and we'll walk you through the positions that fit — and what's actually available now.",
    interest: "General enquiry",
  },
};
