import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS, COLLECTIONS } from "@/lib/content/palm-facts";

export const howToBuyOffPlan: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-how-to-buy-off-plan",
    title: "How to Buy Off-Plan at Palm Jebel Ali | Step-by-Step Process",
    description:
      "The complete off-plan buying process at Palm Jebel Ali: EOI and booking, SPA, DLD/Oqood registration, the 80/20 payment plan, fees to budget, and handover.",
    keywords: [
      "how to buy Palm Jebel Ali",
      "Palm Jebel Ali off-plan process",
      "buying off-plan Dubai",
      "Palm Jebel Ali DLD fees",
    ],
    ogImage: IMG.heroAerial,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "How-To Guide",
    title: "How to buy off-plan",
    titleItalic: "at Palm Jebel Ali, start to finish",
    subtitle:
      "From choosing a unit to holding the title deed, the purchase runs on a defined sequence. Here is the whole path — every step, every signature, and every fee — laid out in order.",
    image: IMG.heroAerial,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "What you're buying", v: "Off-plan, pre-completion" },
    { k: "First move", v: "EOI / expression of interest" },
    { k: "Booking", v: "Reservation form + deposit" },
    { k: "Contract", v: "SPA with Nakheel" },
    { k: "Registration", v: "Oqood, then title at handover" },
    { k: "Villa plan", v: "80/20, staged to completion" },
    { k: "Central plan", v: "70/30, construction-linked" },
    { k: "DLD fee", v: "4% of price (public norm)" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "Buying off-plan means committing to a home before it physically exists — reserving a specific villa plot or apartment from Nakheel's master plan, then paying for it in stages as the island is built out of the sea. It is a different exercise from viewing a finished property and negotiating a price: there is no walk-through, no keys to collect on the day, and the thing you are securing is a position on the register rather than a set of rooms you can stand in.",
        "What replaces the viewing is process. A well-run off-plan purchase follows a defined, repeatable sequence — expression of interest, booking, contract, registration, staged payments, then handover and title. Each step has its own paperwork and its own moment to slow down and check the detail. This guide walks the whole path in order, so you know what happens next at every point, and where the real decisions and costs sit. Treat the payment percentages as Nakheel's published framework and the fee figures as widely-known public norms worth confirming current before you sign.",
      ],
    },
    {
      kind: "steps",
      heading: "The buying process, step by step",
      intro:
        "Six stages carry you from a shortlist to a title deed. The middle of the journey is measured in years, not weeks — most of it is paying against construction progress.",
      items: [
        {
          title: "1 — Choose the collection and unit",
          body: "Start by narrowing to a collection, then to a specific unit within it. The Beach Collection runs 5 & 6-bed frond-front villas, the Coral Collection covers 6 & 7-bed outer-frond mansions, and Palm Central offers 1–5 bed apartments, townhouses and penthouses. Frond position, view, size and design all vary the price, so pin down the exact unit — not just the collection — before you move.",
        },
        {
          title: "2 — Submit an EOI and place the booking deposit",
          body: "You register interest through an expression of interest (EOI) — a refundable pre-booking cheque that puts you in the queue for a release. Public reporting has put the EOI at around AED 500,000 for 5 & 6-bed villas and about AED 1 million for the larger villas, though amounts move by release and collection, so confirm the current figure. When your unit is allocated, you sign a reservation form and the deposit converts into your booking, taking the home off the market.",
        },
        {
          title: "3 — Sign the Sale & Purchase Agreement (SPA)",
          body: "The SPA is the binding contract between you and Nakheel. It fixes the unit, the price, the payment schedule, the specification and the projected handover window in writing. Read it in full — the milestone triggers, completion date and the developer's obligations are all defined here, and these are the terms you are actually buying. Many buyers have a conveyancer review it before signing.",
        },
        {
          title: "4 — Register with the DLD via Oqood",
          body: "Because the home isn't built yet, ownership is recorded through Oqood, the Dubai Land Department's interim register for off-plan property. This is where the DLD registration fee — widely cited as 4% of the price, a public norm to confirm — is settled, typically at or near booking. Oqood logs your legal interest in the unit and later converts to a full title deed at handover.",
        },
        {
          title: "5 — Pay across construction",
          body: `The balance is released in instalments tied to build milestones. Nakheel's villa plan is 80/20 — ${FACTS.paymentPlan.replace(/^80\/20 — /, "")}. Palm Central apartments have followed a ${FACTS.paymentPlanCentral} instead. You pay in step with certified progress rather than fixed calendar dates, so your exposure builds gradually alongside the work on the ground.`,
        },
        {
          title: "6 — Handover and title deed",
          body: "When your unit is complete, you're invited to inspect and snag it, settle the final tranche, and take handover. At this point the Oqood registration converts to a title deed in your name at the DLD — the moment off-plan becomes outright ownership. Palm Jebel Ali hands over in phases from 2027 onward, so the date that matters is your unit's, not the island's.",
        },
      ],
    },
    {
      kind: "pullquote",
      text: "You never buy the whole island at once. You reserve a position, then pay for it as it rises — the title deed is the last step, not the first.",
    },
    {
      kind: "prose",
      heading: "Cash or mortgage — the short version",
      body: [
        "You can complete a Palm Jebel Ali purchase either way, and the payment plan works the same regardless. Because the plan itself spreads the cost across construction, many buyers self-fund the deposit and milestones and never involve a bank at all. Others bring in a mortgage to cover the final handover portion, once there's a completed, titled home for a lender to secure against.",
        "The sequencing matters more than the choice: an off-plan mortgage is usually arranged near completion, not at reservation, so plan it well ahead of your handover date. We keep the numbers out of this guide deliberately — loan-to-value, rates and eligibility move with the market and your profile. For the full picture on financing, see the dedicated mortgage guide below.",
      ],
    },
    {
      kind: "cards",
      heading: "Fees to budget beyond the price",
      intro:
        "The headline price is never the total. These are the standard add-ons on a Dubai off-plan purchase — widely-known public norms rather than quotes, so confirm the current figures against the DLD and your reservation form before you commit.",
      columns: 2,
      items: [
        {
          title: "DLD registration — ~4%",
          body: "The Dubai Land Department fee is widely cited at 4% of the property value and is usually the largest single add-on. It is settled through Oqood at the off-plan stage. Confirm the current rate and how it applies to your unit.",
        },
        {
          title: "Oqood & admin charges",
          body: "Off-plan registration on the Oqood system carries its own fee, alongside DLD administrative and title-related charges. These are modest against the price but belong in the budget — and the developer often collects them at booking.",
        },
        {
          title: "Agency fee (if applicable)",
          body: "Where a broker is involved, a brokerage fee is a common public norm in Dubai transactions. Confirm whether one applies to your purchase and how it's calculated before you sign anything.",
        },
        {
          title: "The reliable rule",
          body: "Set aside a buffer above the headline price for fees rather than assuming fixed amounts, and ask the sales team for an itemised estimate specific to your unit. Public rates are a guide, not a quote.",
        },
      ],
    },
    {
      kind: "collections",
      heading: "The three collections you're choosing between",
      intro:
        "Step one is choosing where on the island you want to be. These are the launch-phase entry prices behind each collection — the base your payment plan is built on.",
      items: COLLECTIONS,
    },
    {
      kind: "prose",
      heading: "Buying from overseas",
      body: [
        "You do not need to be in Dubai to buy off-plan here, and a large share of Palm Jebel Ali's buyers purchase from abroad. The EOI, reservation and SPA can be handled remotely — documents are exchanged and signed electronically, deposits are wired, and a sales adviser or conveyancer walks you through each stage by video and email. Ownership is open to all nationalities on a freehold basis, so there is no residency requirement to purchase.",
        "Two practical things smooth a remote purchase. First, if you'd rather not sign every document personally, a Power of Attorney granted to a trusted representative or conveyancer in Dubai lets them act on your behalf through the process. Second, line up your international funds transfer early — cross-border payments can take longer to clear than a booking deadline allows, and you don't want the unit slipping while money is in transit. Everything up to and including handover can be done at a distance, with a trip timed only for the parts you want to see in person.",
      ],
    },
    {
      kind: "prose",
      heading: "Common mistakes to avoid",
      body: [
        "The most frequent misstep is skimming the SPA. The milestone schedule, completion date and specification are the substance of what you're buying — not fine print — and once signed they are the deal. The second is budgeting only for the sticker price and being caught out by the 4% DLD fee and registration costs at booking; build them in from the start. The third is treating the island's handover window as your handover date, when phasing means only your unit's SPA date is the one that binds.",
        "Two more are worth naming. Buyers occasionally overpay at launch in the rush to secure a release — but off-plan returns hinge on entry price, so discipline on which unit and release you take matters as much as the decision to buy. And some leave financing to the last minute, only to find approval takes longer than the completion timeline allows. Get the sequence right, read what you sign, and budget for the true all-in cost, and an off-plan purchase here is far more orderly than the multi-year timeline first suggests.",
      ],
    },
  ],

  faqs: [
    {
      question: "How do I actually buy off-plan at Palm Jebel Ali?",
      answer:
        "The process runs in order: choose a collection and specific unit, submit an expression of interest (EOI) with a refundable deposit, sign a reservation form and then the Sale & Purchase Agreement (SPA) with Nakheel, register through Oqood at the DLD, pay across construction on the 80/20 plan, and take handover — at which point Oqood converts to a title deed in your name.",
    },
    {
      question: "How much is the EOI or booking deposit?",
      answer:
        "The expression of interest is a refundable pre-booking cheque. Public reporting has put it at around AED 500,000 for 5 & 6-bed villas and about AED 1 million for the larger villas, though amounts vary by release and collection. Confirm the current figure with the sales team, as it can change between launches.",
    },
    {
      question: "What is the payment plan once I've booked?",
      answer:
        "Nakheel's villa plan is 80/20 — 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Palm Central apartments have followed a 70/30 plan instead — 70% across construction and 30% on handover. The exact instalment schedule depends on your unit's collection and release, so confirm it against your SPA.",
    },
    {
      question: "What are the DLD and registration fees?",
      answer:
        "The Dubai Land Department registration fee is widely cited at 4% of the property value — a public norm rather than a quote — and is settled through the Oqood off-plan register, typically at booking. Budget also for Oqood and DLD administrative charges, and any agency fee where a broker is involved. Confirm the current figures with the DLD and your reservation form.",
    },
    {
      question: "Can I buy from overseas without visiting Dubai?",
      answer:
        "Yes. Ownership is freehold and open to all nationalities with no residency requirement, and the EOI, reservation and SPA can be completed remotely with documents signed electronically and deposits wired in. A Power of Attorney to a trusted representative in Dubai can handle signings on your behalf. Line up your international transfer early so funds clear within booking deadlines.",
    },
    {
      question: "What's the difference between Oqood and a title deed?",
      answer:
        "Oqood is the DLD's interim registration for off-plan property still under construction — it records your legal interest in a unit that doesn't yet physically exist. At handover, once the home is complete, that registration converts to a full title deed in your name, which is the document confirming outright ownership.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-payment-plans", label: "Payment plans explained", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-mortgage", label: "Financing & mortgages", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
  ],

  cta: {
    heading: "Walk the process with someone who runs it daily",
    body: "Tell us which collection you're weighing and where you're buying from, and we'll map the EOI, booking, fees and handover timing to a specific unit — no assumptions, just the steps in order.",
    interest: "Investment / payment plans",
  },
};
