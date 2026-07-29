import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS, COLLECTIONS } from "@/lib/content/palm-facts";

export const foreignBuyers: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-foreign-buyers",
    title: "Palm Jebel Ali for Foreign Buyers | Freehold Ownership & Golden Visa",
    description:
      "Can foreigners buy at Palm Jebel Ali? Yes — freehold ownership for all nationalities in Dubai's designated zone, DLD-registered title, and Golden Visa eligibility from AED 2M.",
    keywords: [
      "Palm Jebel Ali foreign buyers",
      "can foreigners buy Palm Jebel Ali",
      "Palm Jebel Ali freehold",
      "Palm Jebel Ali golden visa",
    ],
    ogImage: IMG.heroAerial,
    datePublished: "2026-07-29",
    dateModified: "2026-07-29",
  },

  hero: {
    eyebrow: "Guide for Overseas Buyers",
    title: "Palm Jebel Ali,",
    titleItalic: "open to buyers of any nationality",
    subtitle:
      "One of the questions we hear most from overseas is the simplest: can I actually own here? The answer is yes — outright, freehold, in your own name. Here is what that means, and what buying from abroad looks like in practice.",
    image: IMG.heroAerial,
    imagePosition: "center 50%",
  },

  atAGlance: [
    { k: "Who can buy", v: "Any nationality — no residency required" },
    { k: "Ownership", v: "Freehold, outright, in your name" },
    { k: "Zone", v: "Dubai designated freehold area" },
    { k: "Title", v: "DLD-registered (Oqood off-plan)" },
    { k: "Entry price", v: "From AED 2.5M (apartments)" },
    { k: "Golden Visa", v: `Eligible from ${FACTS.goldenVisaThresholdAed}` },
    { k: "Buying remotely", v: "Possible by POA / remote signing" },
    { k: "Developer", v: FACTS.developer },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "If you are reading this from London, Mumbai, Lagos or Shanghai, the first thing worth saying is the reassuring one: Palm Jebel Ali is open to you. There is no nationality test, no requirement to already live in the UAE, and no need for a local partner or sponsor to hold the property on your behalf. An overseas buyer purchases here on the same terms as a resident — in their own name, with full ownership.",
        "That single fact surprises a lot of people, because it is not how property works in much of the world. This guide sets out exactly what you are buying, why foreigners are allowed to own it, how the residency piece fits in, and what the process looks like when you are doing it from thousands of miles away. We have kept it plain and honest — where a detail depends on rules the authorities can change, we say so and point you to confirm it.",
      ],
    },
    {
      kind: "prose",
      heading: "What 'freehold' actually means here",
      body: [
        "Dubai divides its property market into two broad categories: leasehold, where you hold a long lease but not the underlying asset, and freehold, where you own the property and the land it sits on outright, indefinitely, and can sell, lease or pass it on as you wish. Palm Jebel Ali sits inside one of Dubai's designated freehold zones — the areas the emirate opened specifically so that non-UAE nationals could own real estate in full.",
        `Practically, that means the home is yours in the truest sense. It is registered to you with the Dubai Land Department (DLD), the government body that records every title in the emirate. Because Palm Jebel Ali is sold off-plan — being built by ${FACTS.developer} against a master plan, with handover phased from 2027 onward — that registration during construction is typically evidenced by an Oqood certificate, the DLD's official record of an off-plan purchase. As the island completes and your home is handed over, that converts to a full title deed.`,
        "There is no expiry clock on freehold ownership and no automatic reversion to the developer or the state. You are not renting a long horizon — you own the asset.",
      ],
    },
    {
      kind: "pullquote",
      text: "You buy in your own name, in a designated freehold zone, with a DLD-registered title. This is ownership, not a long lease.",
    },
    {
      kind: "prose",
      heading: "Can foreigners buy at Palm Jebel Ali? Yes — plainly",
      body: [
        "To answer the headline question without hedging: yes. Foreign nationals — resident or non-resident, from any country — can buy and own property at Palm Jebel Ali. You do not need to hold a UAE visa before you purchase, you do not need to be physically present in Dubai to reserve, and you are not restricted to a share or a nominee arrangement. The property is registered to you.",
        "This is a deliberate feature of how Dubai built its property market. Designated freehold zones were created precisely to invite international ownership, and the flagship island developments — Palm Jumeirah before it, and now Palm Jebel Ali — sit squarely inside that framework. For an overseas buyer, the barrier to owning a beachfront home in Dubai is far lower than the equivalent would be in most global cities.",
      ],
    },
    {
      kind: "prose",
      heading: "Ownership and residency, in one decision",
      body: [
        `For many overseas buyers the appeal is not only the home — it is what the purchase can unlock. A property investment at or above ${FACTS.goldenVisaThresholdAed} in UAE real estate is the widely-published threshold for the country's Golden Visa, a 10-year renewable residence permit. Because every collection on Palm Jebel Ali is priced above that mark, the qualifying value comes as a by-product of simply buying on the island rather than something you have to engineer.`,
        "The Golden Visa matters to an international buyer for a specific reason: it decouples your right to live in the UAE from an employer or a job. It is a long-term residence route that can typically extend to a spouse and children, letting a whole household hold settled status together. For a family weighing a move to Dubai, that turns a property purchase into a base rather than just an asset.",
        "One honest caveat runs through this: the Golden Visa is issued and administered by the UAE authorities, not by any developer or agent, and the finer rules are refined from time to time. Eligibility is always assessed on your individual application under the rules in force when you apply. Treat the AED 2 million figure as the well-established headline, and confirm the current mechanics before you rely on them.",
      ],
    },
    {
      kind: "collections",
      heading: "Every collection clears the residency threshold",
      intro: `Whichever collection you choose, the price sits above the ${FACTS.goldenVisaThresholdAed} property threshold — so the same purchase that gives you a freehold home also puts you in qualifying territory for the Golden Visa. Eligibility is assessed on your individual application.`,
      items: COLLECTIONS,
    },
    {
      kind: "prose",
      heading: "Buying remotely, from abroad",
      body: [
        "You do not have to fly to Dubai to buy at Palm Jebel Ali. A large share of overseas purchases are handled remotely, and the process is well-worn. Selection, reservation and much of the paperwork can be done at a distance — you review floor plans and pricing, place a reservation, and receive the sale documentation to sign.",
        "Where a step needs a physical signature or a local presence, buyers commonly use a Power of Attorney (POA) — a legal authorisation letting a trusted representative act on your behalf in Dubai — or the remote-signing and digital-verification options the market increasingly supports. A POA is typically prepared and attested in your home country and then legalised for use in the UAE. The exact attestation and legalisation steps depend on where you are signing from, so this is a point to confirm with your representative rather than assume.",
        "The money side follows international norms for a Dubai off-plan purchase: funds are transferred against the developer's registered payment schedule. We would always encourage an overseas buyer to route the transaction through proper channels and take independent advice, so that every payment is documented and tied to the DLD registration in your name.",
      ],
    },
    {
      kind: "steps",
      heading: "The practical steps, from overseas",
      intro: "Roughly, the path from interest to owning a Palm Jebel Ali home from abroad runs like this. Exact requirements and timings are set by the developer and the authorities and can change, so treat this as the shape of the process, not a fixed checklist.",
      items: [
        {
          title: "1. Choose a collection and reserve",
          body: "Review the collections, pricing and payment plans, and place a reservation to hold your preferred unit. This can be done remotely — no UAE visit required to start.",
        },
        {
          title: "2. Sort your signing arrangement",
          body: "Decide how you will sign: in person on a trip, via remote/digital signing, or through a Power of Attorney appointing a trusted representative in Dubai. If using a POA, allow time for attestation and legalisation in your home country.",
        },
        {
          title: "3. Complete the sale documentation",
          body: "Sign the reservation and sale agreement and provide standard identity documents (passport and supporting papers). Requirements are updated periodically, so confirm the current list before compiling.",
        },
        {
          title: "4. Register with the DLD",
          body: "Your off-plan purchase is registered with the Dubai Land Department, typically evidenced by an Oqood certificate — the official record of your ownership during construction.",
        },
        {
          title: "5. Pay to the schedule, then consider the visa",
          body: "Payments follow the developer's construction-linked plan. Because the purchase clears the AED 2 million mark, you can pursue the Golden Visa alongside it — eligibility assessed on your application.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "A word on tax",
      body: [
        "It is widely known, and a matter of public record, that the UAE levies no annual property tax and no personal capital-gains tax on individuals — one of the reasons Dubai real estate draws international buyers. That is a genuine part of the picture, and worth stating plainly.",
        "But it is only half of the equation, and the half we cannot advise on. Your own tax position depends on where you are tax-resident, and many countries tax their residents on worldwide income, gains and, in some cases, holdings abroad. Reporting obligations, remittance rules and treaty treatment vary enormously from one country to the next, and they change. We will not put a number or a rule on your home-country position — that would be guessing with your money. The honest guidance is to speak to a qualified tax adviser in your own jurisdiction before you commit, so the overall picture is one you have actually checked rather than assumed.",
      ],
    },
    {
      kind: "cards",
      heading: "What overseas buyers value here",
      columns: 2,
      items: [
        { title: "Own it outright", body: "Freehold title in your own name, in a designated zone built specifically to allow international ownership. No nominee, no local partner." },
        { title: "No residency prerequisite", body: "You do not need to live in the UAE or hold a visa to buy. Ownership comes first; residency can follow through the Golden Visa route." },
        { title: "Buy from anywhere", body: "Reservation and much of the paperwork can be handled remotely, with a Power of Attorney or remote signing covering steps that need local presence." },
        { title: "A residency route built in", body: "Every collection clears the AED 2 million Golden Visa threshold, so a single purchase can anchor both a home and a decade of settled status." },
      ],
    },
    {
      kind: "prose",
      heading: "Where to start",
      body: [
        "For an overseas buyer, Palm Jebel Ali removes the two barriers that usually complicate owning property abroad: you are allowed to own it fully, and you can arrange most of it without leaving home. What remains is the part worth getting right — choosing the collection that fits your budget and intent, understanding the payment schedule, and lining up your signing and, if it applies, your visa route.",
        "If you are buying from outside the UAE, tell us where you are based and how you would prefer to handle the process. We will lay out the remote-purchase path for your situation, flag the points to confirm with your own advisers, and make sure the title is registered cleanly in your name.",
      ],
    },
  ],

  faqs: [
    {
      question: "Can foreigners buy at Palm Jebel Ali?",
      answer:
        "Yes. Palm Jebel Ali is open to buyers of any nationality, resident or non-resident. There is no requirement to hold a UAE visa or to live in the country before you purchase, and no need for a local partner or nominee — the property is registered in your own name.",
    },
    {
      question: "Is Palm Jebel Ali freehold?",
      answer:
        "Yes. It sits within one of Dubai's designated freehold zones, so you own the property outright and indefinitely, with a title registered to you at the Dubai Land Department. During construction the off-plan purchase is typically evidenced by an Oqood certificate, which converts to a full title deed on handover.",
    },
    {
      question: "Does it qualify for the Golden Visa?",
      answer:
        "It can. Every collection is priced above the widely-published AED 2 million property threshold for the UAE's 10-year renewable Golden Visa, so the purchase puts you in qualifying territory on value. The visa is administered by the UAE authorities and eligibility is assessed on your individual application, so confirm the current rules when you apply.",
    },
    {
      question: "Do I need to be in Dubai to buy?",
      answer:
        "No. Selection, reservation and much of the documentation can be handled remotely. Steps that need a local presence or a physical signature are commonly covered by a Power of Attorney appointing a trusted representative, or by remote and digital signing. The exact attestation steps depend on the country you sign from, so confirm them with your representative.",
    },
    {
      question: "Will I have to pay UAE tax on the property?",
      answer:
        "As a widely-known public fact, the UAE levies no annual property tax and no personal capital-gains tax on individuals. However, your own tax position depends on where you are tax-resident, and many countries tax worldwide income and gains. We cannot advise on that — seek advice from a qualified tax adviser in your home country before you commit.",
    },
    {
      question: "What proof of ownership do I get as an overseas buyer?",
      answer:
        "Your purchase is registered with the Dubai Land Department. For an off-plan home like those at Palm Jebel Ali, that is typically evidenced by an Oqood (off-plan registration) certificate in your name during construction, which becomes a full DLD title deed once the home is completed and handed over.",
    },
  ],

  related: [
    { href: "/pulse/guides/palm-jebel-ali-golden-visa", label: "Palm Jebel Ali & the Golden Visa", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "Palm Jebel Ali investor guide", kicker: "Guide" },
    { href: "/off-plan-in/palm-jebel-ali", label: "See current off-plan launches", kicker: "Buy" },
  ],

  cta: {
    heading: "Buying from overseas? Let's map your route",
    body: "Tell us where you're based and how you'd like to handle the process. We'll walk you through the remote-purchase path, the points to confirm with your own advisers, and how to get the title registered cleanly in your name.",
    interest: "General enquiry",
  },
};
