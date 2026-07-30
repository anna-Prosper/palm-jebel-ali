"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Anchor, Waves, UtensilsCrossed, ShoppingBag, HeartPulse, Trees, Building2, GraduationCap, Phone, MessageCircle, Leaf, Sun, Bike, Fish, ChevronRight } from "lucide-react";
import { GalleryModal } from "@/components/GalleryModal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LeadFormModal } from "@/components/LeadFormModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SiteHeader } from "@/components/site/Chrome";
import { waHref } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";
import { HOME, HOME_EN } from "@/lib/content/home";

const IMG_BASE = "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali";
// 2× AI-upscaled hero (2688×1536), crisp on large displays.
const HERO_IMG = `${IMG_BASE}/hero-aerial-2k.jpg`;
// ?v query busts CDN/browser cache on images that were re-generated in place.
// Real interiors/amenity renders (enhanced from official low-res via image-to-image).
const VILLA_INT_IMG = `${IMG_BASE}/villa-interior.png?v=2`;
const POOL_IMG = `${IMG_BASE}/amenities-pool.png?v=2`;
const BEDROOM_IMG = `${IMG_BASE}/bedroom-suite.png?v=2`;
const CORAL_IMG = `${IMG_BASE}/coral-villa.png?v=6`;
// Real Nakheel renders (Beach Collection villa, Palm Central resort) + a hi-res palm aerial.
const BEACH_IMG = `${IMG_BASE}/beach-collection.jpg`;
const PALM_CENTRAL_IMG = `${IMG_BASE}/palm-central.jpg`;
const GALLERY_AERIAL_IMG = `${IMG_BASE}/gallery-aerial.png`;
// Subtle AI-generated warm-ivory watercolour paper texture, laid faintly behind
// the Amenities section for a refined "paradise brochure" surface.
const AMENITIES_TEX = `${IMG_BASE}/amenities-texture.jpg`;
// Airy AI-generated shoreline (pale sand meeting soft foam) behind the Payment section.
const BEACH_FOAM_IMG = `${IMG_BASE}/beach-foam.jpg`;
// Subtle AI-generated pale-aqua watercolour paper texture behind the FAQ section.
const FAQ_TEX = `${IMG_BASE}/faq-texture.jpg`;
// Dedicated dark, moody twilight backdrop for the final CTA (its own image so it
// stays dramatic behind the headline, independent of the bright gallery pool).
const CTA_IMG = `${IMG_BASE}/cta-bg.png?v=2`;
// Turquoise aerial-ocean backdrop behind the Location feature — deep teal on the
// left (where the copy sits) resolving to soft foam waves on the right.
const OCEAN_IMG = `${IMG_BASE}/ocean-aerial.jpg`;

const WA_MESSAGE = "Hi! I'd like the current release schedule and pricing for Palm Jebel Ali.";

const TICKER_ITEMS = [
  "Dubai's Second Palm",
  "16 Fronds",
  "110km of New Coastline",
  "Freehold for All Nationalities",
  "Nakheel Master Developer",
  "Villas from AED 18.5M",
];

// ── shared motion / reveal primitives ───────────────────────────────────────

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    obs.observe(el);
    // Safety net, nothing may ever stay invisible.
    const fallback = window.setTimeout(() => setVisible(true), 1500);
    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const { ref, visible } = useRevealOnScroll<HTMLSpanElement>();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

// Hero background: the still aerial with a slow cinematic camera push, plus two
// cheap, GPU-safe atmospheric layers — drifting warm sunlight on the water and a
// slow haze — that make the frame feel alive without video or WebGL.
function HeroMedia() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN hero */}
      <img src={HERO_IMG} alt="Aerial view of Palm Jebel Ali, Dubai's second palm island" className="ken-burns absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
      {/* warm sunlight shimmer over the sunny (right) side of the sea */}
      <div
        aria-hidden
        className="water-light absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen", background: "radial-gradient(ellipse at 82% 16%, rgba(255,205,130,0.30), transparent 45%)" }}
      />
      {/* slow atmospheric haze for a sense of moving air */}
      <div
        aria-hidden
        className="atmosphere absolute -inset-[10%] pointer-events-none"
        style={{
          opacity: 0.12,
          filter: "blur(35px)",
          mixBlendMode: "screen",
          background:
            "radial-gradient(ellipse at 75% 20%, rgba(255,214,160,0.45), transparent 42%), radial-gradient(ellipse at 20% 55%, rgba(110,170,180,0.18), transparent 38%)",
        }}
      />
    </>
  );
}

// Eyebrow, gold hairline + spaced caps, the recurring "opening mark".
// `strong` brightens and enlarges it for the hero, where it sits over a bright sky.
function Eyebrow({ children, dark = false, strong = false }: { children: React.ReactNode; dark?: boolean; strong?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`h-px ${strong ? "w-10 bg-[#E7C989]" : "w-8 bg-[#C9A26A]"}`} />
      <span
        className={`font-semibold uppercase ${strong ? "text-sm sm:text-[15px] tracking-[0.32em] text-[#F0D9A0] [text-shadow:0_1px_10px_rgba(0,0,0,0.55)]" : "text-[11px] tracking-[0.28em]"} ${!strong && (dark ? "text-[#A8814A]" : "text-[#C9A26A]")}`}
      >
        {children}
      </span>
    </div>
  );
}

// Cinematic backdrop for a text section — the (already dark) image reads clearly
// while a lighter, top-weighted scrim keeps the headline/copy legible.
function SectionBg({ src, opacity = 0.7, position = "center", top = 0.68, bottom = 0.42 }: {
  src: string;
  opacity?: number;
  position?: string;
  top?: number;    // scrim darkness under the heading (upper area)
  bottom?: number; // scrim darkness lower down (lets the image breathe)
}) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN backdrop */}
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity, objectPosition: position }} loading="lazy" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(6,35,46,${top}) 0%, rgba(6,35,46,${(top + bottom) / 2}) 45%, rgba(6,35,46,${bottom}) 100%)` }} />
    </div>
  );
}

// Diagonal light sweep on the gold CTAs. Parent needs `group relative overflow-hidden`.
function Shine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 h-full w-1/4 -skew-x-12 bg-white/40 blur-sm -translate-x-[300%] transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
    />
  );
}

// Gold pill CTA. Renders an <a> when `href` is given (WhatsApp/tel), otherwise a
// <button> (opens the lead form). Focus ring is brand-gold, not the browser blue.
function GoldButton({ href, onClick, children, size = "md" }: { href?: string; onClick?: () => void; children: React.ReactNode; size?: "md" | "lg" }) {
  const cls = `group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] text-[#06232E] transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8814A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
    size === "lg" ? "px-9 py-4 text-sm" : "px-7 py-3.5 text-[13px]"
  }`;
  const style = { background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)", boxShadow: "0 10px 30px -10px rgba(201,162,106,0.55)" } as const;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls} style={style}>
        {children}
        <Shine />
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} style={style}>
      {children}
      <Shine />
    </button>
  );
}

// Ghost/outline CTA companion (used for the WhatsApp option beside the form CTA).
function GhostButton({ href, onClick, children, tone = "dark", size = "md" }: { href: string; onClick?: () => void; children: React.ReactNode; tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const color = tone === "light" ? "text-white border-white/40 hover:border-white" : "text-[#0C2E35] border-[#0C2E35]/25 hover:border-[#0C2E35]/60";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8814A] ${color} ${
        size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3.5 text-[13px]"
      }`}
    >
      {children}
    </a>
  );
}

// ── auto-scrolling fact marquee (edge-masked, slow) ─────────────────────────

function Marquee({ items = TICKER_ITEMS }: { items?: string[] }) {
  const reduceMotion = useReducedMotion();
  const loop = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-[#C9A26A]/20 bg-[#0C2E35] py-5 sm:py-6"
      style={{ maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)" }}
    >
      <motion.div
        className="flex gap-10 sm:gap-16 whitespace-nowrap w-max"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? undefined : { duration: 42, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-16 flex-shrink-0 text-[13px] sm:text-sm uppercase tracking-[0.3em] text-white/45">
            <span className="font-serif italic tracking-normal text-white/70 text-lg sm:text-xl normal-case">{t}</span>
            <span className="text-[#C9A26A]">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── the signature moment: palm silhouettes drawn side by side ───────────────

function palmPaths(fronds: number): string[] {
  const trunk = "M100,252 L100,54";
  // Crescent breakwater arcing over the top, open at the bottom.
  const crescent = "M26,224 A 98,108 0 1 1 174,224";
  const out: string[] = [crescent, trunk];
  for (let i = 0; i < fronds; i++) {
    const t = fronds === 1 ? 0 : i / (fronds - 1);
    const y = 244 - t * 178;
    const len = 60 * (1 - t * 0.52);
    out.push(`M100,${y} Q${(100 - len * 0.55).toFixed(1)},${(y - len * 0.14).toFixed(1)} ${(100 - len).toFixed(1)},${(y - len * 0.72).toFixed(1)}`);
    out.push(`M100,${y} Q${(100 + len * 0.55).toFixed(1)},${(y - len * 0.14).toFixed(1)} ${(100 + len).toFixed(1)},${(y - len * 0.72).toFixed(1)}`);
  }
  return out;
}

function PalmSilhouette({ fronds, draw, tone, animate, className }: {
  fronds: number;
  draw: boolean;
  tone: "muted" | "gold";
  animate: boolean;
  className?: string;
}) {
  const paths = palmPaths(fronds);
  const stroke = tone === "gold" ? "#A8814A" : "rgba(12,46,53,0.28)";
  const width = tone === "gold" ? 2 : 1.4;
  return (
    <svg viewBox="0 0 200 264" fill="none" className={className} aria-hidden>
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={stroke}
          strokeWidth={width}
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: draw ? 0 : 1,
            transition: animate ? `stroke-dashoffset 1s ease ${i * 35}ms` : "none",
          }}
        />
      ))}
    </svg>
  );
}

function FrondComparison() {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  return (
    <div ref={ref} className="relative">
      {/* soft gold glow behind the spectacle */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[380px] max-w-none"
        style={{ background: "radial-gradient(closest-side, rgba(201,162,106,0.11), transparent)" }}
      />
      {/* One grid keeps the two palms, the 2×, the ground line and the labels
          perfectly aligned across shared columns. */}
      <div
        className="relative mx-auto grid items-end justify-center gap-x-3 sm:gap-x-14"
        style={{ gridTemplateColumns: "clamp(66px, 16vw, 140px) auto clamp(124px, 34vw, 264px)" }}
      >
        {/* row 1, silhouettes, both sitting on the same ground line */}
        <PalmSilhouette fronds={8} draw={visible} tone="muted" animate={animate} className="w-full h-auto" />
        {/* 2×, boxed to the SMALL palm's height and bottom-aligned to the ground
            line, so it sits at the small palm's vertical centre, reading "×2". */}
        <div
          className="self-end flex flex-col items-center justify-center px-0.5 sm:px-2"
          style={{ height: "clamp(87px, 21vw, 185px)" }}
        >
          <span className="font-serif italic text-3xl sm:text-6xl leading-none bg-gradient-to-b from-[#C9A26A] to-[#A8814A] bg-clip-text text-transparent">2×</span>
          <span className="mt-1.5 sm:mt-2 text-[8px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#0C2E35]/45 whitespace-nowrap">the size</span>
        </div>
        <PalmSilhouette fronds={11} draw={visible} tone="gold" animate={animate} className="w-full h-auto" />

        {/* row 2, the shared ground line */}
        <div className="col-span-3 mt-7 sm:mt-9 h-px bg-gradient-to-r from-transparent via-[#C9A26A]/30 to-transparent" />

        {/* row 3, labels on a common baseline (matched km sizes) */}
        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#0C2E35]/50 leading-snug">Palm Jumeirah</p>
          <p className="mt-1.5 sm:mt-2 font-serif text-2xl sm:text-4xl text-[#0C2E35]/55 leading-none">
            <CountUp target={56} /> <span className="text-xs sm:text-sm align-top">km</span>
          </p>
        </div>
        <div />
        <div className="mt-5 sm:mt-6 text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#A8814A] leading-snug">Palm Jebel Ali · 16 fronds</p>
          <p className="mt-1.5 sm:mt-2 font-serif text-2xl sm:text-4xl text-[#0C2E35] leading-none">
            <CountUp target={110} /> <span className="text-xs sm:text-sm align-top text-[#A8814A]">km</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── header / footer ─────────────────────────────────────────────────────────

function scrollToAnchor(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
}

// hrefs stay here as structural data; labels come from the copy module by index.
const FOOTER_RESIDENCES_HREFS = [
  "/residences/beach-collection",
  "/residences/coral-collection",
  "/residences/palm-central",
  "/residences",
];
const FOOTER_EXPLORE_HREFS = [
  "/communities/palm-jebel-ali",
  "/off-plan-in/palm-jebel-ali",
  "/buy-property-in/palm-jebel-ali",
  "/rent-property-in/palm-jebel-ali",
];
const FOOTER_GUIDES_HREFS = [
  "/pulse/guides/palm-jebel-ali-investor-guide",
  "/pulse/guides/palm-jebel-ali-prices",
  "/pulse/guides/palm-jebel-ali-payment-plans",
  "/pulse/guides",
];

// Zip hrefs with localized labels (same order) into the shape FooterCol expects.
function footerLinks(hrefs: string[], labels: string[]) {
  return hrefs.map((href, i) => ({ href, label: labels[i] }));
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#0C2E35]/50 mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}><a href={l.href} className="text-sm text-[#0C2E35]/75 hover:text-[#A8814A] transition-colors">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter({ waLink, locale = "en" }: { waLink: string; locale?: Locale }) {
  const f = (HOME[locale] ?? HOME_EN).footer;
  return (
    <footer className="bg-[#EAE1D0] border-t border-[#0C2E35]/10 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-12">
          <div>
            <p className="font-serif text-2xl text-[#0C2E35] mb-3">{f.brand}</p>
            <p className="text-[#0C2E35]/60 text-sm max-w-sm leading-relaxed mb-5">
              {f.blurb}
            </p>
            <div className="flex gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#06232E]" style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}>
                <MessageCircle className="h-3.5 w-3.5" /> {f.whatsapp}
              </a>
              <a href="tel:+971549988811" onClick={() => trackEvent("call_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#0C2E35] border border-[#0C2E35]/25 hover:border-[#0C2E35]/50 transition-colors">
                <Phone className="h-3.5 w-3.5" /> {f.call}
              </a>
            </div>
          </div>
          <FooterCol title={f.columns.residences} links={footerLinks(FOOTER_RESIDENCES_HREFS, f.links.residences)} />
          <FooterCol title={f.columns.explore} links={footerLinks(FOOTER_EXPLORE_HREFS, f.links.explore)} />
          <FooterCol title={f.columns.guides} links={footerLinks(FOOTER_GUIDES_HREFS, f.links.guides)} />
        </div>
        <div className="pt-8 border-t border-[#0C2E35]/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[#0C2E35]/45 text-xs leading-relaxed max-w-2xl">
            {f.disclaimer}
          </p>
          <p className="text-[#0C2E35]/45 text-xs whitespace-nowrap">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

// ── content data ────────────────────────────────────────────────────────────

// All authentic: real palm aerials, real interiors, real amenity + villa renders.
// 8 tiles → clean 3-row grid (i0 feature 2×2, i5 wide band).
const GALLERY_IMAGES = [GALLERY_AERIAL_IMG, VILLA_INT_IMG, BEDROOM_IMG, POOL_IMG, BEACH_IMG, PALM_CENTRAL_IMG, CORAL_IMG, HERO_IMG];
// Descriptive alt text for the gallery photos (image-search SEO).
const GALLERY_ALTS = [
  "Aerial view of Palm Jebel Ali island and fronds, Dubai",
  "Beachfront villa interior at Palm Jebel Ali with sea views",
  "Master bedroom suite in a Palm Jebel Ali beach villa",
  "Resort swimming pool and beach club at Palm Jebel Ali",
  "Palm Jebel Ali Beach Collection villa exterior",
  "Palm Central Private Residences beachfront district at Palm Jebel Ali",
  "Palm Jebel Ali Coral Collection signature mansion",
  "Palm Jebel Ali, Dubai's second palm island, at golden hour",
];

// Icons stay here as data; titles/bodies come from the copy module by index.
const AMENITY_ICONS = [Waves, Anchor, Building2, UtensilsCrossed, ShoppingBag, Trees, HeartPulse, GraduationCap];

// icon + stat are data; title/body come from the copy module by index.
const SUSTAINABILITY_META = [
  { icon: Sun, stat: "30%" },
  { icon: Bike, stat: "Island-wide" },
  { icon: Fish, stat: "Protected" },
  { icon: Leaf, stat: "Native" },
];

// img / price / href are data; tag / meta / facts come from the copy module by index.
const RESIDENCES = [
  { img: BEACH_IMG, price: "18.5M", href: "/residences/beach-collection" },
  { img: CORAL_IMG, price: "30M", href: "/residences/coral-collection" },
  { img: PALM_CENTRAL_IMG, price: "2.5M", href: "/residences/palm-central" },
];

// ── page ─────────────────────────────────────────────────────────────────────

export default function PalmJebelAliClient({ locale = "en", availableLocales = ["en"] }: { locale?: Locale; availableLocales?: Locale[] } = {}) {
  const c = HOME[locale] ?? HOME_EN;
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  const [formOpen, setFormOpen] = useState(false);
  const [formInterest, setFormInterest] = useState("General enquiry");

  const openForm = (interest: string, location: string) => {
    setFormInterest(interest);
    setFormOpen(true);
    trackEvent("form_open", { location, interest });
  };

  const payment = useRevealOnScroll<HTMLDivElement>();

  useEffect(() => {
    setWaLink(waHref(WA_MESSAGE, window.location.href));
  }, []);

  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    // Cursor parallax is skipped for reduced-motion / touch; the gentle scroll
    // push + ambient CSS motion still run (a deliberate brand choice).
    const reduced = typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia?.("(pointer: fine)").matches && !reduced;
    let raf = 0;
    let scrollP = 0;      // scroll progress 0..1
    let px = 0, py = 0;   // eased pointer offset -0.5..0.5
    let tx = 0, ty = 0;   // target pointer offset
    const update = () => {
      raf = 0;
      // ease pointer toward target for a smooth, weighty feel
      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;
      if (heroImgRef.current) {
        // image drifts WITH the pointer (foreground feel) + scroll push-down
        heroImgRef.current.style.transform = `translate3d(${px * 14}px, calc(${scrollP * 12}% + ${py * 10}px), 0)`;
      }
      if (heroTextRef.current) {
        // headline counter-drifts slightly for depth
        heroTextRef.current.style.transform = `translate3d(${px * -6}px, calc(${scrollP * 26}% + ${py * -5}px), 0)`;
        heroTextRef.current.style.opacity = `${Math.max(0, 1 - scrollP / 0.7)}`;
      }
      // keep easing while the pointer offset hasn't settled
      if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) schedule();
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      scrollP = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));
      schedule();
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      schedule();
    };
    const onLeave = () => { tx = 0; ty = 0; schedule(); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    if (finePointer) {
      section.addEventListener("pointermove", onMove, { passive: true });
      section.addEventListener("pointerleave", onLeave, { passive: true });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="top" className="bg-[#F4EEE2]">
      <SiteHeader waLink={waLink} locale={locale} availableLocales={availableLocales} />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div ref={heroImgRef} className="absolute inset-x-0 -top-[8%] h-[128%] will-change-transform">
            <HeroMedia />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.32) 0%, rgba(5,24,32,0.08) 26%, rgba(5,24,32,0.62) 60%, rgba(5,24,32,0.88) 84%, #06232E 100%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 40%, transparent 55%, rgba(5,24,32,0.5) 100%)" }} />
          </div>
        </div>

        {/* CSS-animated (not framer) so the hero copy can NEVER get stuck hidden ,
            each element defaults to visible and the entrance is pure enhancement. */}
        <div ref={heroTextRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-[17vh] sm:pb-[12vh] w-full will-change-transform">
          <div className="max-w-3xl">
            <div className="hero-rise" style={{ animationDelay: "0.15s" }}>
              <Eyebrow strong>{c.hero.eyebrow}</Eyebrow>
            </div>
            <h1
              className="hero-rise font-serif font-medium text-[#F0E6D2] tracking-[-0.02em] leading-[0.98] mb-7"
              style={{ fontSize: "clamp(2.9rem, 7vw, 6.4rem)", animationDelay: "0.27s" }}
            >
              <span className="sr-only">Palm Jebel Ali by Nakheel — </span>
              <span className="block" style={{ fontSize: "0.62em" }}>{c.hero.headline.line1}</span>
              {c.hero.headline.lead}<em className="italic text-[#E7C989]">{c.hero.headline.em}</em>{c.hero.headline.tail}
            </h1>
            <p className="hero-rise text-white/75 text-base sm:text-xl max-w-xl mb-10 leading-relaxed" style={{ animationDelay: "0.39s" }}>
              {c.hero.subcopy}
            </p>
            <div className="hero-rise flex flex-wrap items-center gap-4 sm:gap-5" style={{ animationDelay: "0.51s" }}>
              <GoldButton onClick={() => openForm("General enquiry", "hero")} size="lg">{c.hero.cta.register}</GoldButton>
              <GhostButton href={waLink} tone="light" size="lg" onClick={() => trackEvent("whatsapp_click", { location: "hero" })}>
                <MessageCircle className="h-4 w-4" /> {c.hero.cta.whatsapp}
              </GhostButton>
              <span className="hidden sm:block h-10 w-px bg-white/20" />
              <a href="#residences" onClick={(e) => scrollToAnchor(e, "#residences")} className="group inline-flex flex-col text-white text-sm font-medium">
                <span className="uppercase tracking-[0.12em]">{c.hero.cta.viewResidences}</span>
                <span className="mt-1 h-px w-0 bg-[#C9A26A] transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-[#0C2E35]/10 bg-[#EAE1D0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-4 sm:divide-x sm:divide-[#0C2E35]/10">
          {[
            { value: 110, suffix: "km" },
            { value: 2, suffix: "×" },
            { value: 16, suffix: "" },
            { value: 80, suffix: "/20" },
          ].map((s, i) => (
            <div key={i} className="text-center sm:px-4">
              <div className="font-serif text-4xl sm:text-6xl text-[#0C2E35] mb-2 leading-none">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#0C2E35]/50 text-[11px] sm:text-xs uppercase tracking-[0.18em]">{c.stats.labels[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POSITIONING INTRO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-36 text-center">
          <Reveal>
            <p className="font-serif text-2xl sm:text-4xl leading-[1.28] text-[#0C2E35]">
              {c.positioning.lead}<span className="italic text-[#A8814A]">{c.positioning.em}</span>{c.positioning.tail}
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={c.ticker} />

      {/* ── FRONDS / SIGNATURE COMPARISON ── */}
      <section className="relative bg-[#E4EDEB] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14 max-w-2xl text-center mx-auto">
            <div className="flex justify-center"><Eyebrow dark>{c.fronds.eyebrow}</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              {c.fronds.heading.lead}<em className="italic text-[#A8814A]">{c.fronds.heading.em}</em>{c.fronds.heading.tail}
            </h2>
          </Reveal>

          <FrondComparison />

          <Reveal className="mt-14 sm:mt-20 max-w-2xl mx-auto text-center" delay={120}>
            <p className="text-[#0C2E35]/70 text-base sm:text-lg leading-relaxed">
              {c.fronds.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── RESIDENCES (editorial asymmetric) ── */}
      <section id="residences" className="bg-[#F4EEE2] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 sm:mb-20 max-w-2xl">
            <Eyebrow dark>{c.residences.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              {c.residences.heading.lead}<em className="italic text-[#A8814A]">{c.residences.heading.em}</em>{c.residences.heading.tail}
            </h2>
          </Reveal>

          <div className="space-y-20 sm:space-y-28">
            {RESIDENCES.map((r, idx) => {
              const item = c.residences.items[idx];
              return (
              <Reveal key={item.tag}>
                <div className={`grid lg:grid-cols-5 gap-8 lg:gap-14 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-3 relative overflow-hidden rounded-2xl group">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
                    <img src={r.img} alt={item.tag} className="w-full h-[46vh] lg:h-[64vh] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                    {/* big index watermark on the image */}
                    <span className="absolute top-5 left-6 font-serif text-white/85 text-2xl sm:text-3xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">0{idx + 1}</span>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-px w-7 bg-[#A8814A]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8814A]">{c.residences.collection} 0{idx + 1}</span>
                    </div>

                    {/* the collection TITLE, now a prominent serif display heading */}
                    <h3 className="font-serif font-medium text-[#0C2E35] text-4xl sm:text-[46px] leading-[1.02] tracking-[-0.01em] mb-6">
                      {item.tag}
                    </h3>

                    <div className="flex items-baseline gap-2.5 mb-6">
                      <span className="text-[#0C2E35]/50 text-sm uppercase tracking-[0.16em]">{c.residences.fromAed}</span>
                      <span className="font-serif text-4xl sm:text-5xl leading-none bg-gradient-to-b from-[#C9A26A] to-[#8A6A34] bg-clip-text text-transparent">{r.price}</span>
                    </div>

                    <div className="h-px w-full bg-[#0C2E35]/12 mb-6" />
                    <p className="text-[#0C2E35]/60 text-sm uppercase tracking-[0.14em] mb-6">{item.meta}</p>

                    <ul className="space-y-3">
                      {item.facts.map((f) => (
                        <li key={f} className="flex gap-3 text-[#0C2E35]/70 text-sm sm:text-[15px] leading-relaxed">
                          <span className="mt-[9px] h-1 w-1 rounded-full bg-[#A8814A] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a href={r.href} className="group/link mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                      {c.residences.viewCollection}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY (editorial mosaic) ── */}
      <section id="gallery" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <Reveal className="mb-12 sm:mb-16">
          <Eyebrow dark>{c.gallery.eyebrow}</Eyebrow>
          <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02] max-w-3xl">
            {c.gallery.heading.lead}<em className="italic text-[#A8814A]">{c.gallery.heading.em}</em>{c.gallery.heading.tail}
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[minmax(0,1fr)] gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, i) => {
            // editorial rhythm: first image tall, last spans a wide band
            const span = i === 0 ? "col-span-2 row-span-2" : i === 5 ? "col-span-2" : "";
            return (
              <button
                key={img}
                onClick={() => { setGalleryIndex(i); setGalleryOpen(true); }}
                className={`relative overflow-hidden rounded-xl group ${span}`}
                style={{ aspectRatio: i === 0 ? "1 / 1" : i === 5 ? "2 / 1" : "1 / 1" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
                <img src={img} alt={GALLERY_ALTS[i] ?? ""} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </button>
            );
          })}
        </Reveal>
      </section>
      <GalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} images={GALLERY_IMAGES} activeIndex={galleryIndex} onChange={setGalleryIndex} title="Palm Jebel Ali" />

      {/* ── AMENITIES ── */}
      <section id="amenities" className="relative overflow-hidden bg-[#F7F2EA] py-24 sm:py-32">
        {/* faint AI-generated watercolour paper texture for a refined brochure surface */}
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN texture */}
        <img aria-hidden src={AMENITIES_TEX} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(247,242,234,0.45), rgba(247,242,234,0.1))" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-20 max-w-2xl">
            <Eyebrow dark>{c.amenities.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#06232E] tracking-[-0.02em] leading-[1.02]">
              {c.amenities.heading.lead}<em className="italic text-[#A8814A]">{c.amenities.heading.em}</em>{c.amenities.heading.tail}
            </h2>
            <p className="mt-6 text-[#06232E]/65 text-base sm:text-lg leading-relaxed">
              {c.amenities.intro}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0 border-t border-[#06232E]/10">
            {AMENITY_ICONS.map((Icon, i) => (
              <Reveal key={c.amenities.items[i].title} delay={(i % 2) * 60}>
                <div className="flex gap-5 py-7 sm:py-8 border-b border-[#06232E]/10 h-full">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1">
                    <span className="font-serif text-xl text-[#A8814A] tabular-nums leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <Icon className="h-4 w-4 text-[#A8814A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[28px] text-[#06232E] leading-tight mb-2">{c.amenities.items[i].title}</h3>
                    <p className="text-[#06232E]/60 text-sm sm:text-base leading-relaxed">{c.amenities.items[i].body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ── */}
      <section id="sustainability" className="relative bg-[#E4EDEB] py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[560px] h-[560px]"
          style={{ background: "radial-gradient(closest-side, rgba(168,129,74,0.10), transparent)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-20 max-w-2xl">
            <Eyebrow dark>{c.sustainability.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              {c.sustainability.heading.lead}<em className="italic text-[#A8814A]">{c.sustainability.heading.em}</em>{c.sustainability.heading.tail}
            </h2>
            <p className="mt-6 text-[#0C2E35]/65 text-base sm:text-lg leading-relaxed">
              {c.sustainability.intro}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {SUSTAINABILITY_META.map(({ icon: Icon }, i) => (
              <Reveal key={c.sustainability.items[i].title} delay={i * 60}>
                <div className="group border-t border-[#0C2E35]/15 pt-6 h-full transition-colors">
                  <Icon className="h-6 w-6 text-[#A8814A] mb-5 transition-transform duration-500 group-hover:-translate-y-0.5" />
                  <p className="font-serif text-4xl sm:text-5xl leading-none mb-3 bg-gradient-to-b from-[#C9A26A] to-[#8A6A34] bg-clip-text text-transparent">{c.sustainability.stats[i]}</p>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#0C2E35]/85 mb-3">{c.sustainability.items[i].title}</h3>
                  <p className="text-[#0C2E35]/60 text-sm leading-relaxed">{c.sustainability.items[i].body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="relative bg-[#06232E] py-24 sm:py-32 overflow-hidden">
        <SectionBg src={OCEAN_IMG} opacity={0.98} top={0.5} bottom={0.42} />
        {/* left-anchored teal scrim keeps the white copy legible while the turquoise
            water breathes on the right */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,35,46,0.82) 0%, rgba(6,35,46,0.42) 45%, rgba(6,35,46,0.08) 78%)" }} />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(closest-side, rgba(201,162,106,0.08), transparent)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-16 max-w-xl">
            <Eyebrow>{c.location.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02]">
              {c.location.heading.lead}<em className="italic text-[#E7C989]">{c.location.heading.em}</em>{c.location.heading.tail}
            </h2>
          </Reveal>

          <div>
            {c.location.rows.map(({ place, time }, i) => (
              <Reveal key={place} delay={i * 50}>
                <div className="group flex items-baseline gap-4 py-5 sm:py-7 border-b border-white/15 transition-colors hover:border-[#E7C989]/50">
                  <span className="text-white text-lg sm:text-2xl [text-shadow:0_1px_10px_rgba(4,20,26,0.6)]">{place}</span>
                  <span className="flex-1 border-b border-dotted border-white/25 translate-y-[-4px]" />
                  <span className="font-serif text-3xl sm:text-4xl leading-none whitespace-nowrap text-[#F0D9A0] [text-shadow:0_2px_14px_rgba(4,20,26,0.75)]">{time}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <a href="/pulse/guides/palm-jebel-ali-location" className="group/link mt-10 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E7C989] hover:text-white transition-colors">
              {c.location.guideLink}
              <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PAYMENT PLAN ── */}
      <section id="payment-plan" className="relative overflow-hidden bg-[#F4EEE2] py-24 sm:py-32">
        {/* airy generated shoreline, softly washed so the teal copy stays legible */}
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN image */}
        <img aria-hidden src={BEACH_FOAM_IMG} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-80" loading="lazy" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(244,238,226,0.72) 0%, rgba(244,238,226,0.5) 45%, rgba(244,238,226,0.68) 100%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 sm:mb-24 text-center">
            <div className="flex justify-center"><Eyebrow dark>{c.payment.eyebrow}</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.04]">
              {c.payment.heading.lead}<em className="italic text-[#A8814A]">{c.payment.heading.em}</em>{c.payment.heading.tail}
            </h2>
          </Reveal>

          <div ref={payment.ref} className="relative flex justify-between items-start">
            {/* base rail */}
            <div className="absolute top-3 left-0 right-0 h-px bg-[#0C2E35]/12" />
            {/* gold rail draws left→right */}
            <div
              className="absolute top-3 left-0 h-px origin-left bg-gradient-to-r from-[#C9A26A] to-[#8A6A34] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ right: 0, transform: payment.visible ? "scaleX(1)" : "scaleX(0)" }}
            />
            {[
              { pct: "20%" },
              { pct: "60%" },
              { pct: "20%", emphasize: true },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 flex-1">
                <span
                  className="w-3 h-3 rounded-full transition-all duration-500"
                  style={{
                    background: payment.visible ? (s.emphasize ? "#A8814A" : "#0C2E35") : "rgba(12,46,53,0.15)",
                    transitionDelay: `${600 + i * 260}ms`,
                    boxShadow: s.emphasize && payment.visible ? "0 0 0 6px rgba(168,129,74,0.18)" : "none",
                  }}
                />
                <p className={`font-serif text-3xl sm:text-5xl ${s.emphasize ? "text-[#A8814A]" : "text-[#0C2E35]"}`}>{s.pct}</p>
                <p className="text-[#0C2E35]/50 text-xs sm:text-sm uppercase tracking-[0.14em] text-center">{c.payment.steps[i]}</p>
              </div>
            ))}
          </div>

          <Reveal>
            <p className="text-[#0C2E35]/60 text-sm sm:text-base text-center mt-16 sm:mt-24 max-w-xl mx-auto leading-relaxed">
              {c.payment.note}
            </p>
            <div className="mt-8 text-center">
              <a href="/pulse/guides/palm-jebel-ali-payment-plans" className="group/link inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                {c.payment.howLink}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── INVESTMENT CASE ── */}
      <section id="investment" className="relative overflow-hidden bg-[#E7ECEC] py-24 sm:py-32">
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-20 max-w-2xl">
            <Eyebrow dark>{c.investment.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              {c.investment.heading.lead}<em className="italic text-[#A8814A]">{c.investment.heading.em}</em>{c.investment.heading.tail}
            </h2>
            <p className="mt-6 text-[#0C2E35]/65 text-base sm:text-lg leading-relaxed">
              {c.investment.intro}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0 border-t border-[#0C2E35]/12">
            {c.investment.items.map(({ title, body }, i) => (
              <Reveal key={title} delay={(i % 2) * 60}>
                <div className="group flex gap-5 py-7 sm:py-9 border-b border-[#0C2E35]/12 h-full transition-colors hover:border-[#A8814A]/50">
                  <span className="font-serif text-2xl sm:text-3xl tabular-nums leading-none pt-1 flex-shrink-0 bg-gradient-to-b from-[#C9A26A] to-[#8A6A34] bg-clip-text text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[28px] text-[#0C2E35] leading-tight mb-2">{title}</h3>
                    <p className="text-[#0C2E35]/60 text-sm sm:text-base leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 sm:mt-16 max-w-2xl">
            <p className="text-[#0C2E35]/55 text-sm sm:text-base leading-relaxed">
              {c.investment.outro}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <a href="/pulse/guides/palm-jebel-ali-investor-guide" className="group/link inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                {c.investment.links.investorGuide}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
              <a href="/off-plan-in/palm-jebel-ali" className="group/link inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                {c.investment.links.offPlan}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="relative overflow-hidden bg-[#EAF0EF] py-24 sm:py-32">
        {/* faint AI-generated pale-aqua watercolour paper texture */}
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN texture */}
        <img aria-hidden src={FAQ_TEX} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-70" loading="lazy" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12 sm:mb-14">
            <Eyebrow dark>{c.faq.eyebrow}</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">{c.faq.heading}</h2>
          </Reveal>
          <FaqAccordion faqs={c.faq.items} emitJsonLd={false} />
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a href="/pulse/guides" className="group/link inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                {c.faq.links.allGuides}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
              <a href="/communities/palm-jebel-ali" className="group/link inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">
                {c.faq.links.communityGuide}
                <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
          <img src={CTA_IMG} alt="Resort pool at Palm Jebel Ali at dusk" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,35,46,0.55), rgba(6,35,46,0.8))" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <p className="mb-8 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#C9A26A]">
              <span className="h-px w-8 bg-[#C9A26A]" /> {c.finalCta.eyebrow}
            </p>
            <h2 className="font-serif font-medium text-white tracking-[-0.02em] leading-[1.05] mb-9" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
              {c.finalCta.heading.lead}<em className="italic text-[#E7C989]">{c.finalCta.heading.em}</em>{c.finalCta.heading.tail}
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              {c.finalCta.body}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5">
              <GoldButton onClick={() => openForm("Investment / payment plans", "final_cta")} size="lg">{c.finalCta.cta.requestPricing}</GoldButton>
              <GhostButton href={waLink} tone="light" size="lg" onClick={() => trackEvent("whatsapp_click", { location: "final_cta" })}>
                <MessageCircle className="h-4 w-4" /> {c.finalCta.cta.whatsapp}
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter waLink={waLink} locale={locale} />

      <FloatingWhatsApp waLink={waLink} />
      <LeadFormModal open={formOpen} onClose={() => setFormOpen(false)} waLink={waLink} defaultInterest={formInterest} />
    </div>
  );
}
