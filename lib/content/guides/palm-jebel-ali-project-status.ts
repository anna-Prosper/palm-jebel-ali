import type { GuideContent } from "@/lib/content/types";
import { IMG, CONSTRUCTION, FACTS } from "@/lib/content/palm-facts";

export const projectStatus: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-project-status",
    title: "Palm Jebel Ali Project Status 2026 | Abandoned or On Track?",
    description:
      "Is Palm Jebel Ali abandoned or sinking? The honest 2026 status: relaunched by Nakheel in 2023, under active construction, first villa handovers underway.",
    keywords: [
      "Palm Jebel Ali status",
      "Palm Jebel Ali abandoned",
      "Palm Jebel Ali sinking",
      "Palm Jebel Ali 2026",
      "Palm Jebel Ali update",
    ],
    ogImage: IMG.gProjectStatus,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "Project Status",
    title: "Palm Jebel Ali,",
    titleItalic: "abandoned, sinking, or on track?",
    subtitle:
      "The doubt is fair — the original island stalled for years after the 2008-09 crisis. Here is the honest 2026 picture: relaunched, under active construction, with the first villa handovers now underway.",
    image: IMG.gProjectStatus,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Status", v: "Under active construction" },
    { k: "Developer", v: "Nakheel" },
    { k: "Original launch", v: "Early 2000s (~2002)" },
    { k: "Relaunched", v: "2023, redesigned" },
    { k: "Progress as of", v: CONSTRUCTION.asOf },
    { k: "Villa contracts", v: "AED 3.5bn+ (Fronds A–F)" },
    { k: "First handovers", v: "Beginning 2026" },
    { k: "Completion target", v: "Toward Q4 2028" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "If you have typed \"Palm Jebel Ali abandoned\" or \"Palm Jebel Ali sinking\" into a search bar, the instinct is understandable. The original island was announced by Nakheel in the early 2000s, and after the 2008-09 global financial crisis and the Dubai property downturn that followed, work stalled. For years the reclaimed land sat largely dormant — one of the most visible symbols of a market that had turned. That memory is real, and it is exactly why the skepticism persists.",
        "This page answers the doubt head-on, without spin. It uses dated construction data and the widely reported 2026 milestones — not brochure language — to give you the honest state of play. The short version: the island of the 2010s is not the island of today. It was redrawn, relaunched, and is now being built. Below is the evidence.",
      ],
    },
    {
      kind: "prose",
      heading: "Is Palm Jebel Ali abandoned?",
      body: [
        "No. Palm Jebel Ali is not abandoned. In 2023 Nakheel relaunched the island with a redesigned, larger master plan and began selling villas — and it has been under active construction since. This is not the paused reclamation that made headlines a decade ago; it is a live development with awarded contracts, dated progress, and residences taking shape.",
        "The clearest proof is money committed and work on the ground. According to Nakheel construction updates and 2026 reporting by outlets including Gulf News and The National, more than AED 3.5 billion in villa construction contracts were awarded across Fronds A–F in April 2026, and around AED 750 million of major infrastructure is targeted for completion by the end of 2026. Developers do not award billions in contracts on a project they intend to walk away from.",
      ],
    },
    {
      kind: "prose",
      heading: "Is Palm Jebel Ali sinking?",
      body: [
        "No — and it is worth being measured about why this myth circulates. Palm Jebel Ali is engineered land reclamation protected by a crescent breakwater, built on the same fundamental approach as Palm Jumeirah. That earlier island has now stood, occupied and thriving, for more than fifteen years. It is home to tens of thousands of residents, hotels and villas, and it did not sink.",
        "The \"sinking\" fear tends to conflate two different things: the years the original Palm Jebel Ali sat unfinished, and the physical stability of reclaimed land. A paused project is a market and timing story, not a structural one. Nakheel is the same developer behind the proven island to the north, delivering the second palm with the same reclamation-and-breakwater logic. We deliberately avoid inventing engineering specifics here — but the honest, measured answer is that there is no credible basis for the idea that the island is sinking.",
      ],
    },
    {
      kind: "pullquote",
      text: "The island of the 2010s — dormant, waiting on a market that had turned — is not the island of 2026. It was redrawn, relaunched, and is now being built, frond by frond.",
    },
    {
      kind: "prose",
      heading: "Where it stands in 2026",
      body: [
        `Here is the part the skeptic search rarely surfaces: dated, frond-by-frond progress. As of ${CONSTRUCTION.asOf}, construction on the residential fronds was reported at the percentages below — measurable, uneven, and moving, exactly as you would expect of an island being built in phases rather than all at once.`,
        "These are early-to-mid construction figures, not finishing touches, and that is the honest framing: this is a development in motion, with the leading fronds well ahead of the earliest ones. Alongside the villas, marine works, road connections and the Sheikh Zayed Road bridge link are progressing as part of the infrastructure programme.",
      ],
    },
    {
      kind: "stats",
      heading: `Frond construction progress — as of ${CONSTRUCTION.asOf}`,
      items: [
        { value: "27.71", suffix: "%", label: "Frond K" },
        { value: "24.71", suffix: "%", label: "Frond L" },
        { value: "22.1", suffix: "%", label: "Frond M" },
        { value: "29.2", suffix: "%", label: "Frond N" },
        { value: "37.44", suffix: "%", label: "Frond O" },
        { value: "20.5", suffix: "%", label: "Frond P" },
      ],
    },
    {
      kind: "cards",
      heading: "The 2026 milestones, in plain terms",
      intro:
        "Drawn from Nakheel construction updates and 2026 reporting by outlets including Gulf News and The National — the concrete markers of a project that is under way, not shelved.",
      columns: 2,
      items: [
        {
          title: "AED 3.5bn+ in villa contracts",
          body: "Nakheel awarded more than AED 3.5 billion in villa construction contracts across Fronds A–F in April 2026 — building capacity committed to putting homes in the ground.",
          meta: "April 2026",
        },
        {
          title: "~AED 750m of infrastructure",
          body: "Around AED 750 million of major infrastructure — roads, utilities, power distribution and telecom — is targeted for completion by the end of 2026, alongside marine works and the Sheikh Zayed Road bridge connection.",
          meta: "By end-2026",
        },
        {
          title: "First villa handovers",
          body: "Handovers are phased, with the first villas beginning to be handed over in 2026 — the earliest owners taking possession while later fronds continue to build.",
          meta: "Beginning 2026",
        },
        {
          title: "Completion trajectory",
          body: "Earlier fronds are targeting around Q3–Q4 2027, with overall completion targeted toward Q4 2028 — a phased runway rather than a single finish line.",
          meta: "Toward Q4 2028",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The honest caveats",
      body: [
        "None of this makes Palm Jebel Ali a finished, walk-in address. It is still an off-plan development being delivered in phases, and off-plan timelines can move. The frond percentages above are a March 2026 snapshot, not a promise of a handover date; a build of this scale is measured in years, and the gap between the leading and trailing fronds shows how uneven a phased island naturally is.",
        "So the fair conclusion sits between the two extremes the search bar offers. Palm Jebel Ali is neither the abandoned reclamation of a decade ago nor a completed, proven island like Palm Jumeirah. It is a large, redrawn master plan being actively built by the developer that delivered the first palm — committed enough that the direction is set, early enough that patience is still part of the deal. That is the honest 2026 status, and it is the version worth buying — or waiting on — with your eyes open.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is Palm Jebel Ali abandoned?",
      answer:
        "No. Nakheel relaunched Palm Jebel Ali in 2023 with a redesigned, larger master plan and began selling villas, and it has been under active construction since. In April 2026 the developer awarded more than AED 3.5 billion in villa construction contracts across Fronds A–F, and around AED 750 million of infrastructure is targeted for completion by the end of 2026 — the opposite of an abandoned project.",
    },
    {
      question: "Is Palm Jebel Ali sinking?",
      answer:
        "No. It is engineered land reclamation protected by a crescent breakwater, built on the same fundamental approach as Palm Jumeirah — which has stood occupied and thriving for more than fifteen years without sinking. The \"sinking\" idea tends to confuse the years the original project sat paused with the physical stability of reclaimed land; there is no credible basis for it.",
    },
    {
      question: "What is the status of Palm Jebel Ali in 2026?",
      answer:
        `Under active construction. As of ${CONSTRUCTION.asOf}, the residential fronds were reported at construction levels ranging from about 20.5% (Frond P) to 37.44% (Frond O). More than AED 3.5 billion in villa contracts were awarded across Fronds A–F in April 2026, roughly AED 750 million of infrastructure is targeted for end-2026, the first villa handovers are beginning in 2026, and overall completion is targeted toward Q4 2028.`,
    },
    {
      question: "When did construction restart?",
      answer:
        "The project was relaunched in 2023 with a redesigned master plan, when Nakheel began villa sales, and construction has been active since. The original island had stalled for years following the 2008-09 financial crisis; the 2023 relaunch reframed it from a paused ambition into a live, phased development.",
    },
    {
      question: "Why do people think Palm Jebel Ali failed?",
      answer:
        "Because the original island, announced by Nakheel in the early 2000s, stalled after the 2008-09 global financial crisis and the Dubai property downturn that followed, and the reclaimed land sat largely dormant for years. That memory is real — but the island was redesigned and relaunched in 2023 and is now under active construction, so the \"failed\" framing describes the past, not the present.",
    },
    {
      question: "When will Palm Jebel Ali be finished?",
      answer:
        "Delivery is phased rather than a single completion date. The first villa handovers are beginning in 2026, earlier fronds are targeting around Q3–Q4 2027, and overall completion is targeted toward Q4 2028. As with any off-plan development of this scale, timelines can move, so these are targets rather than guarantees.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-construction-progress", label: "Construction progress, frond by frond", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-history", label: "The story: history, pause & 2023 relaunch", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-handover-timeline", label: "The handover timeline explained", kicker: "Guide" },
  ],

  cta: {
    heading: "Want the current status, verified?",
    body: "We track Palm Jebel Ali's construction updates as they land. Ask us where the fronds stand today and what it means for a purchase or a handover.",
    interest: "General enquiry",
  },
};
