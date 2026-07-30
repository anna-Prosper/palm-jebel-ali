import type { GuideContent } from "@/lib/content/types";
import { IMG } from "@/lib/content/palm-facts";

export const resale: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-resale",
    title: "Palm Jebel Ali Resale | Selling Off-Plan Before Handover",
    description:
      "An honest look at Palm Jebel Ali resale: why the resale market is thin mid-build, how off-plan assignment works, and the case for buying at launch.",
    keywords: [
      "Palm Jebel Ali resale",
      "Palm Jebel Ali secondary market",
      "sell Palm Jebel Ali before handover",
      "Palm Jebel Ali off-plan assignment",
      "Dubai off-plan resale",
      "Palm Jebel Ali NOC transfer",
      "buy Palm Jebel Ali at launch",
    ],
    ogImage: IMG.gResale,
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
  },

  hero: {
    eyebrow: "Resale Guide",
    title: "Palm Jebel Ali resale,",
    titleItalic: "and the secondary market",
    subtitle:
      "The island is still being built, so its resale market is young and thin. Here's what 'resale' really means for an off-plan address, how assignment works in Dubai, and when it pays to wait.",
    image: IMG.gResale,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Market stage", v: "Nascent — island under construction" },
    { k: "Resale route", v: "Off-plan assignment (pre-handover)" },
    { k: "Seller needs", v: "Developer NOC + approval" },
    { k: "Eligibility", v: "After a developer-set % paid" },
    { k: "DLD transfer fee", v: "4% of price (public rate)" },
    { k: "Also payable", v: "NOC fee + agency fees" },
    { k: "Post-handover", v: "Conventional title resale" },
    { k: "Ownership", v: "Freehold, all nationalities" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "\"Resale\" usually conjures a finished home changing hands: keys, a title deed, a buyer who moves in next month. Palm Jebel Ali is not that yet. It is an off-plan island being built frond by frond, which means almost every unit that trades hands today is not a completed property at all — it is a contract. When people talk about the Palm Jebel Ali secondary market, what they really mean is one original buyer transferring their off-plan purchase agreement to another before the home is handed over.",
        "That distinction matters, because it shapes everything about how — and whether — you can buy or sell here right now. This guide is written plainly. We won't quote resale prices or premiums for an island whose secondary market is barely formed; anyone who does is guessing. Instead, we'll explain how off-plan resale works in Dubai in general, why it's limited on Palm Jebel Ali specifically, and how to think about buying at launch versus waiting for the resale market to mature.",
      ],
    },
    {
      kind: "prose",
      heading: "Why the secondary market is thin right now",
      body: [
        "The honest answer is the simplest one: you cannot have a deep resale market for homes that don't physically exist yet. Palm Jebel Ali is early-stage, with handovers phased from 2027 onward across its collections. Until units complete and title deeds are issued, there is no stock of finished, owner-occupied homes to resell in the conventional sense.",
        "What can trade in the meantime is the off-plan contract itself — but that pool is naturally small. At launch stage, many original buyers are long-horizon holders who bought precisely to keep, not to flip. Others haven't yet paid enough of the price to be eligible to sell on. And because there are no established comparable transactions, both sides of any early deal are pricing in the dark. The result is a market that is nascent and illiquid by nature, not by fault. It thickens as construction progresses, milestones are hit, and — eventually — completed homes begin changing hands with title deeds attached.",
      ],
    },
    {
      kind: "pullquote",
      text: "On an island still under construction, the secondary market isn't broken — it simply hasn't been built yet, any more than the fronds have.",
    },
    {
      kind: "prose",
      heading: "How off-plan assignment works in Dubai",
      body: [
        "Selling an off-plan property before handover is a well-established mechanism in Dubai, often called assignment or a transfer of the Sale and Purchase Agreement (SPA). Rather than selling a finished home, the original buyer assigns their rights and obligations under the SPA to a new buyer, who steps into the contract and takes over the remaining payment plan through to handover.",
        "The process is gated by the developer, not left to buyers alone. In general, an original buyer can only sell on once they have paid a developer-set threshold — a minimum percentage of the purchase price. Below that threshold, the developer typically will not approve a transfer. The exact figure varies by developer and by project, so treat any specific percentage you read elsewhere with caution and confirm it against the developer's own terms for your unit.",
        "Assuming the threshold is met, the seller applies to the developer for a No Objection Certificate (NOC) — the developer's formal sign-off that it does not object to the transfer and that payments are up to date. The transfer is then registered, and the Dubai Land Department (DLD) records the change on the off-plan register (the Oqood system for off-plan units). Fees are payable at this stage, which we cover below.",
      ],
    },
    {
      kind: "steps",
      heading: "The assignment process, step by step",
      intro: "The general shape of an off-plan resale in Dubai. Exact requirements, thresholds and fees are set by the developer and DLD — always confirm the current terms for your specific unit.",
      items: [
        {
          title: "1 · Check eligibility",
          body: "Confirm you have paid the developer-set minimum percentage of the price. Below that threshold, the developer generally won't permit a transfer, so this is the first gate to clear.",
        },
        {
          title: "2 · Agree terms with a buyer",
          body: "Find a buyer and agree the price and terms. Because comparable off-plan sales are scarce this early, both sides should do their own homework on value rather than lean on a thin comp set.",
        },
        {
          title: "3 · Apply for the developer NOC",
          body: "The seller applies to the developer for a No Objection Certificate, confirming payments are current and the developer does not object to the transfer. An NOC fee is charged.",
        },
        {
          title: "4 · Register the transfer with DLD",
          body: "The transfer is registered and the off-plan record (Oqood) is updated to the new buyer. DLD transfer fees apply at this point.",
        },
        {
          title: "5 · Buyer assumes the payment plan",
          body: "The new buyer steps into the SPA, takes on the remaining staged payments, and carries the contract through to handover — at which point title transfers on completion.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "The case for buying at launch",
      body: [
        "If the resale market is thin, the natural question is: why not wait for it? For many buyers, the answer is that waiting means paying more for less optionality. Launch-phase pricing is set before the island's amenities are operational, and later releases have historically priced above earlier ones as phases sell through. A resale buyer, arriving later, is typically buying into a more proven — and more expensively priced — asset.",
        "Buying at launch also means the widest choice of plots. The outer fronds and the most sought-after positions are finite and cannot be recreated once allocated. A resale buyer is limited to whatever original owners choose to release, which may not include the best addresses. Early direct-from-developer purchase, in short, buys both a lower entry point and first pick.",
      ],
    },
    {
      kind: "prose",
      heading: "The case for — and against — selling before handover",
      body: [
        "For a seller, assignment is a genuine tool. If your circumstances change, or you'd rather realise a position before committing the full payment plan, off-plan resale is the mechanism that lets you exit without waiting years for handover. In a rising off-plan market, some sellers also choose to assign after values have moved, rather than hold to completion.",
        "The caution is liquidity. On an island this early, the buyer pool for an off-plan assignment is shallow, so a sale can take time and you have limited pricing evidence to anchor to. You'll also carry the costs of transfer, and any upside has to clear those fees to be real. Selling before handover is entirely possible — it simply isn't a fast, frictionless exit at this stage, and that should be priced into any plan that depends on selling early.",
      ],
    },
    {
      kind: "cards",
      heading: "Buy now, or wait for resale?",
      columns: 2,
      items: [
        {
          title: "Buying at launch",
          body: "Lowest entry point, first pick of plots and fronds, and direct developer terms. The trade-off is a longer horizon and capital committed years before handover.",
        },
        {
          title: "Waiting for resale",
          body: "A more proven asset with visible progress — but a thin pool of units, typically higher pricing than launch, and no guarantee the best addresses are available.",
        },
        {
          title: "Selling via assignment",
          body: "A real exit route before handover once you've paid the developer threshold. Expect a shallow buyer pool, limited pricing evidence, and transfer costs to absorb.",
        },
        {
          title: "Holding to handover",
          body: "Skips assignment friction entirely and converts to a conventional title-deed asset on completion, when a deeper, more liquid resale market should exist.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Costs and considerations",
      body: [
        "Off-plan transfers carry real, mostly public, costs — budget for them on either side of a deal. The headline is the DLD transfer fee, publicly set at 4% of the property price, conventionally split by agreement between the parties but often shouldered by the buyer. On top of that sits the developer's NOC fee, which varies by developer, plus any DLD administrative and registration charges and agency commission where an agent is involved.",
        "Beyond the fees, weigh the softer considerations. Confirm the payment threshold and NOC terms with the developer before you commit to buying or selling, because those terms — not general rules of thumb — govern your specific unit. And factor in time: an early-stage off-plan resale can move slowly, so neither a purchase nor a sale here should be built on an assumption of quick liquidity.",
      ],
    },
  ],

  faqs: [
    {
      question: "Can I sell my Palm Jebel Ali unit before handover?",
      answer:
        "Typically yes. Dubai allows off-plan resale by assigning your Sale and Purchase Agreement to a new buyer before completion — but generally only once you have paid a developer-set minimum percentage of the price and obtained the developer's No Objection Certificate (NOC). The exact threshold and terms are set by the developer, so confirm them for your specific unit.",
    },
    {
      question: "Why is the Palm Jebel Ali resale market so limited right now?",
      answer:
        "Because the island is still under construction, with handovers phased from 2027 onward. There is no stock of completed, title-deed homes to resell conventionally; what can trade is the off-plan contract itself, and that pool is small this early. The secondary market naturally deepens as construction progresses and homes complete.",
    },
    {
      question: "How does off-plan assignment actually work?",
      answer:
        "The original buyer transfers their rights under the SPA to a new buyer, who takes over the remaining payment plan through to handover. In general it requires paying a developer-set threshold, securing a developer NOC, and registering the transfer with the Dubai Land Department (which updates the off-plan Oqood record). Fees apply on registration.",
    },
    {
      question: "What does it cost to buy or sell on the secondary market?",
      answer:
        "The main public cost is the DLD transfer fee, set at 4% of the price (split by agreement between the parties). On top of that are the developer's NOC fee, any DLD administrative charges, and agency commission where applicable. Exact NOC amounts vary by developer, so confirm them before committing.",
    },
    {
      question: "Is it better to buy at launch or wait for a resale?",
      answer:
        "Buying at launch generally means the lowest entry price and the first pick of plots and fronds, since later releases have historically priced higher and the best addresses are finite. Waiting for resale gives you a more proven asset but a thin, typically pricier pool of units. The right choice depends on your horizon and appetite for early-stage risk.",
    },
    {
      question: "Will Palm Jebel Ali have a normal resale market eventually?",
      answer:
        "It should. As phases complete, title deeds are issued and finished homes begin changing hands, the market moves from off-plan assignment toward conventional title resale — a deeper, more liquid market. That maturity follows construction, so it builds over the coming years rather than existing today.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "Palm Jebel Ali investor guide", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
    { href: "/pulse/guides/palm-jebel-ali-payment-plans", label: "Payment plans explained", kicker: "Guide" },
  ],

  cta: {
    heading: "Thinking about entering — or exiting — early?",
    body: "Whether you're weighing a launch purchase or the resale route, tell us your timeline and we'll give you a straight read on what's realistic on the island today.",
    interest: "Investment / payment plans",
  },
};
