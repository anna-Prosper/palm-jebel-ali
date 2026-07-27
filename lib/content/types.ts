import type { FaqItem } from "@/components/FaqAccordion";
import type { Collection } from "@/lib/content/palm-facts";

export interface PageMeta {
  /** Path after the domain, no leading slash. e.g. "communities/palm-jebel-ali" */
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  /** ISO date for Article schema (guides). */
  datePublished?: string;
  dateModified?: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  /** Optional italic serif tail rendered under the title. */
  titleItalic?: string;
  subtitle: string;
  image: string;
  /** object-position for the hero image. */
  imagePosition?: string;
}

export interface StatItem {
  value?: string;
  suffix?: string;
  countTo?: number;
  label: string;
}

export interface CardItem {
  title: string;
  body: string;
  meta?: string;
}

export interface RelatedLink {
  href: string;
  label: string;
  kicker?: string;
}

/** A content block. Templates render each `kind` in the home design language. */
export type Block =
  | { kind: "prose"; heading?: string; body: string[] }
  | { kind: "stats"; heading?: string; items: StatItem[] }
  | { kind: "cards"; heading?: string; intro?: string; columns?: 2 | 3 | 4; items: CardItem[] }
  | { kind: "collections"; heading?: string; intro?: string; items?: Collection[] }
  | { kind: "connectivity"; heading?: string; image: string; intro?: string; rows: { place: string; time: string }[] }
  | { kind: "pullquote"; text: string }
  | { kind: "steps"; heading?: string; intro?: string; items: { title: string; body: string }[] };

/** Community + intent hubs share this shape. */
export interface HubContent {
  meta: PageMeta;
  hero: Hero;
  /** Small stat band directly under the hero. */
  stats?: StatItem[];
  blocks: Block[];
  faqs: FaqItem[];
  related?: RelatedLink[];
  /** CTA band copy. */
  cta: { heading: string; body?: string; interest: string };
}

/** Long-form guide article. */
export interface GuideContent {
  meta: PageMeta;
  hero: Hero;
  /** "At a glance" key/value rail at the top of the article. */
  atAGlance?: { k: string; v: string }[];
  blocks: Block[];
  faqs: FaqItem[];
  related?: RelatedLink[];
  cta: { heading: string; body?: string; interest: string };
}
