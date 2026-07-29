import type { GuideContent } from "@/lib/content/types";
import { IMG, FACTS } from "@/lib/content/palm-facts";

export const location: GuideContent = {
  meta: {
    slug: "pulse/guides/palm-jebel-ali-location",
    title: "Where is Palm Jebel Ali? Location & Connectivity Explained",
    description:
      "Palm Jebel Ali sits on Dubai's southern coast beside Jebel Ali, with three access points onto Sheikh Zayed Road — ~20 min to Al Maktoum, ~25 to the Marina.",
    keywords: [
      "where is Palm Jebel Ali",
      "Palm Jebel Ali location",
      "Palm Jebel Ali connectivity",
      "Palm Jebel Ali map",
      "how to get to Palm Jebel Ali",
      "Palm Jebel Ali Sheikh Zayed Road",
      "Palm Jebel Ali distance from Dubai Marina",
    ],
    ogImage: IMG.oceanAerial,
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
  },

  hero: {
    eyebrow: "Location Guide",
    title: "Where is Palm Jebel Ali,",
    titleItalic: "and how do you actually get there?",
    subtitle:
      "A straight answer to the first question every buyer asks — where the island sits, the roads that reach it, and why 'far south' says more about yesterday's Dubai than tomorrow's.",
    image: IMG.oceanAerial,
    imagePosition: "center 55%",
  },

  atAGlance: [
    { k: "Coastline", v: "Dubai's southern shore, beside Jebel Ali" },
    { k: "Mainland links", v: "Three access points onto E11" },
    { k: "Al Maktoum International", v: "~20 min" },
    { k: "Expo City Dubai", v: "Minutes away" },
    { k: "Dubai Marina / JBR", v: "~25 min north" },
    { k: "Main artery", v: "Sheikh Zayed Road (E11), direct" },
  ],

  blocks: [
    {
      kind: "prose",
      body: [
        "The first thing a buyer wants to know about an island is a surprisingly grounded question: where is it, and how long does it take to get there? For Palm Jebel Ali the answer is cleaner than its reputation suggests. It sits on Dubai's southern coastline, beside the established port and industrial district of Jebel Ali, roughly halfway between the city's dense marina belt and the emirate's southern border.",
        "Palm Jumeirah taught Dubai how to read a coordinate on the water. Palm Jebel Ali repeats the geography further down the same shore — a fan of fronds reaching out from the mainland, tied back to it by a handful of causeways. It is not offshore in any meaningful sense of the word. You do not take a boat; you take a road, and the road is the busiest one in the country.",
      ],
    },
    {
      kind: "prose",
      heading: "Three doors onto Sheikh Zayed Road",
      body: [
        "The island connects to the mainland through three access points, and each of them lands you on the same artery: Sheikh Zayed Road, the E11. That is the practical heart of the location. Rather than funnelling every resident through a single bottleneck bridge — the recurring complaint about first-generation islands — Palm Jebel Ali is designed to distribute traffic across multiple crossings before it merges onto the highway that already threads the entire coast of the city.",
        "Once you are on the E11 you are on the road that connects Dubai Marina, Downtown, DIFC and the airports in an unbroken line. There is no clever workaround required and no isolated last mile: the master plan puts the highway at the island's doorstep rather than a suburb's drive away. For a place this size, the fact that access is boring is the highest compliment you can pay it.",
      ],
    },
    {
      kind: "connectivity",
      heading: "How far is everything, really?",
      image: IMG.oceanAerial,
      intro:
        "Approximate drive times from the island, using the E11 as the spine. Distances firm up as the island's own road network completes, but the anchors below are what shape day-to-day life here.",
      rows: FACTS.connectivity.map((r) => ({ place: r.place, time: r.time })),
    },
    {
      kind: "prose",
      heading: "What the numbers mean day to day",
      body: [
        "Read those figures against how you'd actually live. Al Maktoum International (DWC) is around twenty minutes away — close enough that a frequent flyer treats it the way marina residents treat DXB, as the airport you default to rather than the one you dread. Expo City Dubai is minutes down the road, which matters more than it sounds: it is fast becoming a working district of offices, events and residential neighbourhoods, not a fairground that closed.",
        "North, Dubai Marina and JBR are about twenty-five minutes up the E11 — the established playground of beach clubs, restaurants and nightlife stays firmly within reach for an evening out. In practice the island is not asking you to give up the Dubai you know; it is offering a quieter base a short highway run away from it.",
      ],
    },
    {
      kind: "pullquote",
      text: "You don't take a boat to Palm Jebel Ali. You take the busiest road in the country — and it drops you at the doorstep.",
    },
    {
      kind: "prose",
      heading: "The southern growth corridor",
      body: [
        "To understand the location you have to look at what surrounds it, because the island is not being built in isolation. It anchors what planners and agents increasingly call Dubai's southern growth corridor — the belt of development gathering around Al Maktoum International and Expo City on the city's south-western flank.",
        "Al Maktoum International is being expanded, on publicly announced plans, into one of the world's largest airports over the coming years — a long, phased programme rather than an overnight switch. Alongside it, Expo City has transitioned from a six-month event site into a permanent mixed-use district. Neither of these is speculative on our part; both are widely reported, city-scale commitments. What they add up to is direction of travel: sustained public and private investment is flowing toward this corner of the map, not away from it.",
        "We'd caution against turning that into a promise about any specific timeline — infrastructure at this scale moves in phases and dates shift. But the qualitative point is hard to argue with. An address near a growing airport, a permanent expo district and a maturing highway network is an address the city is building toward.",
      ],
    },
    {
      kind: "cards",
      heading: "What's nearby",
      intro: "The anchors that define the island's immediate orbit — the places you'll actually reference when you describe where you live.",
      columns: 3,
      items: [
        {
          title: "Jebel Ali",
          body: "The established port, free zone and industrial district that gives the island its name and its mainland footing — the reason the roads and services already exist this far south.",
          meta: "Adjacent",
        },
        {
          title: "Al Maktoum International (DWC)",
          body: "Dubai's second airport, on announced plans to grow into one of the world's largest. Around twenty minutes away and squarely part of the southern corridor's investment case.",
          meta: FACTS.connectivity[0].time,
        },
        {
          title: "Expo City Dubai",
          body: "The former Expo 2020 site, now a permanent district of offices, events, homes and green space. Minutes from the island and one of its closest working neighbourhoods.",
          meta: FACTS.connectivity[1].time,
        },
        {
          title: "Dubai Marina & JBR",
          body: "The city's mature waterfront leisure belt — beaches, dining and nightlife — a straightforward run north up the E11 whenever you want the busier side of Dubai.",
          meta: FACTS.connectivity[2].time,
        },
        {
          title: "Sheikh Zayed Road (E11)",
          body: "The spine that ties the whole coast together, from the southern border through the marina, Downtown and out to the airports. The island connects to it directly.",
          meta: FACTS.connectivity[3].time,
        },
        {
          title: "Palm Jumeirah",
          body: "The original, further north along the same shore — a useful mental anchor for the geography and the proof that a southern-shore island can become a centre of gravity in its own right.",
          meta: "Up the coast",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Why 'far south' is a dated framing",
      body: [
        "For years, 'southern Dubai' was shorthand for 'too far out.' That reading made sense when the marina was the western edge of the city and everything beyond Jebel Ali felt like a drive into the desert. It makes progressively less sense each year the map fills in.",
        "The city's centre of gravity has been sliding south and west for more than a decade — first to the marina, then to the developments beyond it, and now toward the airport-and-expo axis the island sits beside. Distance in Dubai is measured in highway minutes, not map inches, and on that measure Palm Jebel Ali is not remote: it is roughly twenty minutes from a major airport and twenty-five from the marina, on the emirate's primary road.",
        "The honest way to put it: an address that reads as peripheral on today's mental map is being designed to sit near the middle of the next decade's Dubai. 'Far south' describes where the island is on a diagram of the city as it was. It is a poor description of where it is on a diagram of where the city is heading — and for a buyer with a long horizon, that gap between yesterday's framing and tomorrow's geography is precisely the point.",
      ],
    },
  ],

  faqs: [
    {
      question: "Where exactly is Palm Jebel Ali?",
      answer:
        "On Dubai's southern coastline, beside the established port and free-zone district of Jebel Ali, southwest of Dubai Marina. It's a man-made island of 16 fronds tied to the mainland, roughly twice the footprint of Palm Jumeirah further up the same shore.",
    },
    {
      question: "How do you get to Palm Jebel Ali?",
      answer:
        "By road, not by boat. The island connects to the mainland through three access points, each of which leads directly onto Sheikh Zayed Road (E11) — the highway that runs the length of Dubai's coast, linking the marina, Downtown and the airports.",
    },
    {
      question: "How far is Palm Jebel Ali from Dubai Marina and JBR?",
      answer:
        "About 25 minutes north up Sheikh Zayed Road (E11). The marina's beaches, dining and nightlife stay comfortably within reach for an evening out.",
    },
    {
      question: "How close is the airport?",
      answer:
        "Al Maktoum International (DWC) is roughly 20 minutes away, and Expo City Dubai is only minutes down the road. Dubai International (DXB) is farther, up the E11 toward the city centre.",
    },
    {
      question: "Isn't Palm Jebel Ali too far out?",
      answer:
        "That framing is dating quickly. The island anchors Dubai's southern growth corridor beside Al Maktoum International — being expanded on announced plans — and the now-permanent Expo City district. Measured in highway minutes rather than map distance, it's about 20 minutes from a major airport and 25 from the marina on the city's main road.",
    },
    {
      question: "What is the southern growth corridor?",
      answer:
        "It's the belt of development gathering around Al Maktoum International and Expo City on Dubai's south-western side. Both are large, publicly announced, city-scale commitments — an airport expansion and a permanent mixed-use district — that together point sustained investment toward this part of the map. Timelines are phased, so we'd treat the direction as reliable and the specific dates as subject to change.",
    },
  ],

  related: [
    { href: "/communities/palm-jebel-ali", label: "Palm Jebel Ali community overview", kicker: "Community" },
    { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "The investment case, honestly", kicker: "Guide" },
    { href: "/pulse/guides/palm-jebel-ali-masterplan", label: "Inside the master plan", kicker: "Guide" },
  ],

  cta: {
    heading: "Want to see it on the ground?",
    body: "Maps only tell you so much. Tell us your priorities and we'll walk you through the location, the access points and how the island fits the life you're planning.",
    interest: "Location / site visit",
  },
};
