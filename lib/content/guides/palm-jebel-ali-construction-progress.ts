import type { GuideContent } from "@/lib/content/types";
import { IMG, CONSTRUCTION, FACTS } from "@/lib/content/palm-facts";

export const constructionProgress: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-construction-progress",
    title: "Palm Jebel Ali Construction Progress 2026 | Frond by Frond",
    description:
      "Palm Jebel Ali construction, dated: frond-by-frond percentages (March 2026), ~AED 750M infrastructure by end-2026, and first handovers underway.",
    keywords: [
      "Palm Jebel Ali construction",
      "Palm Jebel Ali construction update",
      "Palm Jebel Ali progress",
      "Palm Jebel Ali 2026 update",
    ],
    ogImage: IMG.gConstruction,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "Construction Update",
    title: "Palm Jebel Ali,",
    titleItalic: "how far along it really is",
    subtitle:
      "A dated, factual snapshot of construction on the island — frond-by-frond progress, infrastructure spend, contract awards and the handover runway — as of March 2026, refreshed as new figures land.",
    image: IMG.gConstruction,
    imagePosition: "center 55%",
  },

  atAGlance: [
    { k: "As of", v: CONSTRUCTION.asOf },
    { k: "Fronds under construction", v: "K, L, M, N, O, P" },
    { k: "Infrastructure", v: "~AED 750M targeted by end-2026" },
    { k: "First handovers", v: "Beginning 2026" },
    { k: "Completion", v: "Targeted toward Q4 2028" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "The most common question we field about Palm Jebel Ali is also the most reasonable one: is it actually being built? For a whole island rising off Dubai's southern coast — over 10.5 million square metres of reclaimed land across 16 fronds — the honest answer is yes, and it is being built the only way a project this size can be, in phases. This page is a dated progress tracker rather than a brochure. The figures below are a snapshot as of March 2026, drawn from Nakheel construction updates and 2026 reporting, and we refresh them as new inspections and announcements land.",
        "\"Phased construction\" is worth unpacking, because it shapes how you should read every number here. Nakheel is not building the island end to end and handing it over in one moment. Land reclamation, marine works, trunk infrastructure and vertical villa construction run in parallel across different fronds, each at its own pace. So progress is uneven by design — an outer frond may be well ahead of a neighbour simply because its plots were released and mobilised earlier. The percentages that follow measure work on the fronds already under active construction, not the island as a whole.",
      ],
    },
    {
      kind: "stats",
      heading: "Progress by frond",
      items: [
        { countTo: CONSTRUCTION.frondProgress[0].pct, suffix: "%", label: "Frond K" },
        { countTo: CONSTRUCTION.frondProgress[1].pct, suffix: "%", label: "Frond L" },
        { countTo: CONSTRUCTION.frondProgress[2].pct, suffix: "%", label: "Frond M" },
        { countTo: CONSTRUCTION.frondProgress[3].pct, suffix: "%", label: "Frond N" },
        { countTo: CONSTRUCTION.frondProgress[4].pct, suffix: "%", label: "Frond O" },
        { countTo: CONSTRUCTION.frondProgress[5].pct, suffix: "%", label: "Frond P" },
      ],
    },
    {
      kind: "prose",
      body: [
        `As of ${CONSTRUCTION.asOf}, six fronds — K through P — carry recorded construction progress. Frond O leads the group at 37.44%, with Frond N at 29.2% and Frond K at 27.71% close behind. Fronds L (24.71%), M (22.1%) and P (20.5%) sit a little further back in the low-to-mid twenties. Read together, they show a cluster of fronds all genuinely under way and advancing at broadly comparable rates rather than a single show-frond racing ahead. These are point-in-time percentages: they move month to month, and we date them deliberately so you can judge how current the picture is.`,
      ],
    },
    {
      kind: "pullquote",
      text: "This is not a render waiting for a groundbreaking. Six fronds are under active construction, with the fastest already past a third complete.",
    },
    {
      kind: "prose",
      heading: "Infrastructure",
      body: [
        CONSTRUCTION.infrastructure,
        "Infrastructure is the part of an island build that rarely makes the marketing but decides everything else. Roads, utilities, power distribution and telecom are what turn reclaimed land into serviced, buildable plots — and what a completed villa actually plugs into on handover day. Targeting the bulk of that trunk network for the end of 2026 puts the enabling works on a timeline that sits ahead of the earliest villa completions.",
        `The same programme covers marine works around the fronds and the Sheikh Zayed Road bridge connection tying the island back to the mainland. That link matters for buyers as much as for contractors: Palm Jebel Ali is designed to feed straight onto the E11, with Al Maktoum International (DWC) around ${FACTS.connectivity[0].time} away and Expo City minutes down the road. The bridge is the physical spine of that access.`,
      ],
    },
    {
      kind: "prose",
      heading: "Contract awards",
      body: [
        CONSTRUCTION.contracts,
        "Contract awards are one of the clearer signals of real momentum, because they commit capital and contractors to specific scope rather than to a master plan. The April 2026 villa packages extend active construction into Fronds A–F — fronds beyond the K–P cluster already showing progress above — which points to a widening pipeline rather than a single wave of work. In practice it means more fronds mobilising, more villa plots moving from serviced land toward vertical construction, and a broader front of activity across the island through the year.",
      ],
    },
    {
      kind: "prose",
      heading: "Handover timeline",
      body: [
        CONSTRUCTION.handover,
        `Because construction is phased, handovers are too. The first villa handovers are set to begin in 2026, with the earlier fronds targeting roughly Q3–Q4 2027 and overall completion aimed toward Q4 2028. Individual collections follow their own runways within that window — Coral Collection mansions have been guided from 2027 and Beach Collection villas toward 2029, with Palm Central's ${FACTS.paymentPlanCentral.split(" — ")[0]} apartments later still. Treat every one of these as a target on a live construction programme, not a contractual promise: phased dates move, and the frond your unit sits on matters more than any island-wide headline.`,
      ],
    },
    {
      kind: "steps",
      heading: "How to track your unit",
      intro:
        "Island-wide percentages are useful context, but the number that matters to a buyer is progress on their own frond and villa. Here is how to get that.",
      items: [
        {
          title: "Anchor to your frond, not the island",
          body: "Find your frond in the progress list above and note the date. A figure for Frond O tells you little about a plot on Frond L — ask specifically about the frond your unit sits on.",
        },
        {
          title: "Follow the official Nakheel updates",
          body: "Nakheel issues construction updates and reporting through the project as inspections and milestones land. These are the primary source behind the figures on this page, and the most current read on where the island stands.",
        },
        {
          title: "Ask us for the latest frond-level read",
          body: "We track the releases and construction reporting continuously. Tell us your unit or frond and we'll give you a straight, current answer — and flag it when this snapshot is due a refresh.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "Is Palm Jebel Ali under construction?",
      answer: `Yes. As of ${CONSTRUCTION.asOf}, six fronds — K, L, M, N, O and P — carry recorded construction progress, and Nakheel awarded more than AED 3.5 billion in further villa contracts across Fronds A–F in April 2026. Marine works, roads, utilities and the Sheikh Zayed Road bridge connection are all part of the active programme.`,
    },
    {
      question: "How far along is Palm Jebel Ali?",
      answer: `Progress is phased and uneven by design. As of ${CONSTRUCTION.asOf}, the fronds under construction range from about 20.5% (Frond P) to 37.44% (Frond O), with Fronds K, L, M and N in between. Around AED 750 million of major infrastructure is targeted for completion by the end of 2026.`,
    },
    {
      question: "When will construction finish?",
      answer:
        "Construction is phased, so there is no single finish line. The first villa handovers are set to begin in 2026, earlier fronds are targeting roughly Q3–Q4 2027, and overall completion is targeted toward Q4 2028. These are targets on a live programme and can move.",
    },
    {
      question: "What do the frond percentages mean?",
      answer:
        "Each figure is construction progress on a specific frond as of the snapshot date, not the completeness of the island as a whole. Because fronds are mobilised at different times, they advance at different rates — which is why Frond O reads higher than Frond P even though both are under active construction.",
    },
    {
      question: "When are the first handovers?",
      answer:
        "The first villa handovers are expected to begin in 2026, with earlier fronds handing over around Q3–Q4 2027. Individual collections follow their own runways within the phased programme, so the frond your unit sits on determines your handover more than any island-wide date.",
    },
    {
      question: "How current are these figures?",
      answer: `This is a dated snapshot, based on Nakheel construction updates and 2026 reporting, as of ${CONSTRUCTION.asOf}. Percentages and targets change as construction advances, so we date the page deliberately and refresh it as new inspections and announcements land. Ask us for the latest frond-level read on your unit.`,
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-project-status", label: "Palm Jebel Ali project status", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-handover-timeline", label: "Handover timeline explained", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
  ],

  cta: {
    heading: "Want the latest read on your frond?",
    body: "We track Nakheel's construction updates as they land. Tell us your unit or frond and we'll give you a straight, current answer on where it stands.",
    interest: "General enquiry",
  },
};
