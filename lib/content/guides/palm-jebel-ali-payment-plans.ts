import type { GuideContent } from "@/lib/content/types";
import { IMG, COLLECTIONS } from "@/lib/content/palm-facts";

export const paymentPlans: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-payment-plans",
    title: "Palm Jebel Ali Payment Plans Explained | The 80/20 Structure, Fees & Handover",
    description:
      "How off-plan payment actually works at Palm Jebel Ali: the 80/20 milestone plan, booking and Oqood/DLD registration, construction-linked instalments, the handover payment, cash vs mortgage, and the fees to budget for.",
    keywords: [
      "Palm Jebel Ali payment plan",
      "Palm Jebel Ali 80/20 payment plan",
      "Palm Jebel Ali off-plan payment",
      "Palm Jebel Ali booking deposit",
      "Palm Jebel Ali handover",
      "Dubai off-plan payment plan",
      "Oqood registration Palm Jebel Ali",
    ],
    ogImage: IMG.heroAerial,
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
  },

  hero: {
    eyebrow: "Buyer's Guide",
    title: "Palm Jebel Ali payment plans,",
    titleItalic: "explained without the jargon",
    subtitle:
      "Off-plan buying is really a schedule, not a single cheque. Here's how the 80/20 plan is staged, what you pay when, and the fees that sit outside the headline price.",
    image: IMG.heroAerial,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Structure", v: "80/20, milestone-linked" },
    { k: "On booking", v: "20% deposit" },
    { k: "During construction", v: "60%, in stages" },
    { k: "On handover", v: "Final 20%" },
    { k: "Registration", v: "Oqood / DLD, off-plan" },
    { k: "Entry price", v: "From AED 2.5M (apartments)" },
    { k: "Handover", v: "Phased, 2027 onward" },
    { k: "Ownership", v: "Freehold, all nationalities" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "The first thing to understand about buying off-plan is that you are not writing one large cheque. You are agreeing to a schedule — a series of payments spread across the years it takes to build the home, tied to how far construction has actually progressed. That structure is the whole point: it lets you take a position on a landmark asset now, while paying for most of it as it rises out of the water.",
        "At Palm Jebel Ali, Nakheel's published structure is an 80/20 plan: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Below we walk through what each of those stages means in practice, where the paperwork sits, and — just as importantly — the costs that live outside the headline price. Treat the percentages as the confirmed framework and everything around them as the detail to verify against your specific unit's reservation form before you sign.",
      ],
    },
    {
      kind: "steps",
      heading: "The 80/20 plan, stage by stage",
      intro:
        "One asset, three phases of payment. The middle 60% is what makes this a construction-linked plan rather than a simple deposit-and-balance sale.",
      items: [
        {
          title: "20% on booking",
          body: "Your reservation deposit secures the specific unit — a named villa plot or apartment — and locks the launch-phase price. It is paid up front, at the point you sign the reservation form and sales agreement, and it is the moment the home comes off the market for everyone else.",
        },
        {
          title: "60% across construction",
          body: "The bulk of the price is broken into instalments released as the build hits defined milestones — foundations, structure, and successive completion stages. You pay in step with visible progress rather than on fixed calendar dates, which keeps your money aligned with real work on the ground.",
        },
        {
          title: "20% on handover",
          body: "The final fifth falls due when the home is complete and ready to be handed over. It is the balance that transfers a finished, snagged property into your name — and, for many buyers, the point at which a mortgage (if used) is typically drawn.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Booking, and getting on the register",
      body: [
        "The purchase begins with a reservation form and the sale and purchase agreement (SPA), signed alongside the initial 20%. This is where the unit, the price, the plan and the projected handover window are all fixed in writing. Read the SPA properly — the milestone schedule, the completion date and the developer's obligations all live in it, and they are the terms you are actually buying.",
        "Because this is an off-plan sale, ownership is recorded through Oqood, the Dubai Land Department's interim registration system for properties still under construction. Oqood registers your interest in a unit that does not yet physically exist, and later converts to a full title deed at handover. Registering through the DLD is what gives an off-plan purchase its legal standing — it is not optional paperwork, it is the protection.",
      ],
    },
    {
      kind: "prose",
      heading: "The construction-linked instalments",
      body: [
        "The 60% middle band is where an off-plan plan earns its name. Rather than paying on the calendar, you pay against progress: each instalment is triggered when the project reaches a defined stage of completion. In practice you'll receive a payment request as each milestone is certified, and your funds go in behind work that has already happened.",
        "For a buyer, this staging does two useful things. It spreads the commitment across years instead of demanding it up front, and it ties your outflow to the developer delivering. It also means your total exposure builds gradually — an important point when you weigh the timeline and phasing risk that comes with any home bought years before it exists. Palm Jebel Ali is handed over in phases from 2027 onward, so the exact rhythm of your instalments depends on which collection and release you buy into.",
      ],
    },
    {
      kind: "pullquote",
      text: "Off-plan is a schedule, not a cheque. You pay for the island as it is built — and the final fifth only falls due when the keys do.",
    },
    {
      kind: "prose",
      heading: "The handover payment",
      body: [
        "The last 20% is settled at handover — when construction is complete, the home is ready, and the property is prepared to transfer into your name. This is the stage to slow down for: it's your window to inspect and snag the unit, confirm it matches the specification you signed for, and ensure the Oqood registration converts cleanly to a title deed at the DLD.",
        "For buyers using finance, handover is usually where the mortgage is drawn to cover this final tranche, so the timing of your loan should be lined up with the projected completion window well in advance. Because Palm Jebel Ali's handovers are phased, the date that matters is your unit's date, not the island's — confirm it against your SPA.",
      ],
    },
    {
      kind: "collections",
      heading: "Where each collection starts",
      intro:
        "The same 80/20 framework applies across the island, but the sums behind each percentage differ sharply by collection. These are the launch-phase entry prices your plan is built on.",
      items: COLLECTIONS,
    },
    {
      kind: "prose",
      heading: "Cash or mortgage?",
      body: [
        "Both routes work, and the plan itself is agnostic. Paying in cash is the cleanest path: you meet each milestone from your own funds and avoid financing costs entirely, which many buyers prefer for an asset held for long-term appreciation. The trade-off is opportunity cost — capital committed to instalments is capital not working elsewhere.",
        "Mortgages on off-plan property in Dubai are available but work differently from a ready-home loan. Banks typically finance a portion of the price and often release the loan at or near handover rather than funding the early milestones, which means the booking deposit and much of the construction band usually come from your own resources regardless. Lending criteria, loan-to-value limits and eligibility vary by bank and by buyer, so treat mortgage terms as something to confirm with a lender early — not an assumption to build your plan on.",
      ],
    },
    {
      kind: "cards",
      heading: "Fees to budget for",
      intro:
        "The headline price is not the total. Off-plan purchases carry registration and transaction costs on top — the figures below are widely-known public rates, but confirm the current numbers against the DLD and your reservation form before you commit.",
      columns: 2,
      items: [
        {
          title: "DLD transfer fee",
          body: "Dubai's standard Land Department transfer fee is widely cited at 4% of the property value, typically the largest single add-on. Confirm the current rate and how it applies to your off-plan purchase.",
        },
        {
          title: "Oqood registration",
          body: "Off-plan units are registered on the DLD's Oqood system, which carries its own registration fee. Confirm the current charge and whether the developer collects it at booking.",
        },
        {
          title: "Admin & agency",
          body: "Expect DLD administrative and title-related charges, plus any brokerage fee where an agent is involved. These are usually modest against the price but belong in your budget.",
        },
        {
          title: "Mortgage costs (if financing)",
          body: "If you borrow, factor arrangement and valuation fees, plus a mortgage registration charge with the DLD. Cash buyers skip this line entirely.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The post-handover angle",
      body: [
        "One question worth asking a sales adviser directly is whether a post-handover component is available on your unit — a plan where a slice of the price is deferred and paid in instalments after you've taken the keys, rather than all of it landing at completion. Post-handover terms have been common across Dubai off-plan and can ease the cash-flow squeeze at handover, but they are not a given: availability changes by developer, collection and release.",
        "Because the confirmed structure at Palm Jebel Ali is the 80/20 plan set out above, treat any post-handover terms as something to verify for your specific unit rather than assume. If cash flow at completion is a concern, it is exactly the kind of thing to raise before you reserve — the answer may steer which collection or release suits you best.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is the payment plan for Palm Jebel Ali?",
      answer:
        "Nakheel's published structure is an 80/20 plan: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. The exact instalment schedule within that framework depends on your unit's collection and release, so confirm it against your reservation form and SPA.",
    },
    {
      question: "How much is the booking deposit?",
      answer:
        "The initial deposit is 20% of the purchase price, paid when you sign the reservation form and sale agreement. On the lowest entry point — Palm Central apartments from around AED 2.5 million — that is roughly AED 500,000; on higher collections it scales with the price.",
    },
    {
      question: "What is Oqood and why does it matter?",
      answer:
        "Oqood is the Dubai Land Department's interim registration system for off-plan properties. It records your legal interest in a unit still under construction and later converts to a full title deed at handover. Registering through the DLD is what gives an off-plan purchase its legal protection.",
    },
    {
      question: "What fees should I budget for on top of the price?",
      answer:
        "Beyond the unit price, budget for the DLD transfer fee (widely cited at 4% of value), Oqood registration, DLD administrative charges, any agency fee, and — if you finance — mortgage arrangement, valuation and registration costs. These are widely-known public rates; confirm the current figures with the DLD and your reservation form.",
    },
    {
      question: "Can I buy with a mortgage?",
      answer:
        "Yes, though off-plan mortgages work differently from ready-home loans. Banks typically finance a portion of the price and often release the loan at or near handover, so the booking deposit and much of the construction band usually come from your own funds. Loan-to-value limits and eligibility vary by bank — confirm terms with a lender early.",
    },
    {
      question: "Is a post-handover payment plan available?",
      answer:
        "The confirmed structure is the 80/20 plan, with the final 20% due at handover. Post-handover terms — where part of the price is deferred after you take the keys — have been common across Dubai off-plan but are not guaranteed here. Ask a sales adviser whether they apply to your specific unit before you reserve.",
    },
  ],

  related: [
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
    { href: "/pulse/guides/palm-jebel-ali-handover-timeline", label: "Handover timeline explained", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "The investment case, honestly", kicker: "Guide" },
  ],

  cta: {
    heading: "Want the plan mapped to a specific unit?",
    body: "Tell us which collection you're weighing and we'll walk you through the milestones, the fees and the handover timing on that release — no assumptions, just the numbers on paper.",
    interest: "Investment / payment plans",
  },
};
