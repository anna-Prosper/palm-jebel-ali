"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Anchor, Waves, UtensilsCrossed, ShoppingBag, HeartPulse, Trees, Building2, GraduationCap, Phone, MessageCircle, Leaf, Sun, Bike, Fish } from "lucide-react";
import { GalleryModal } from "@/components/GalleryModal";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { waHref } from "@/lib/whatsapp";

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
// Dedicated dark, moody twilight backdrop for the final CTA (its own image so it
// stays dramatic behind the headline, independent of the bright gallery pool).
const CTA_IMG = `${IMG_BASE}/cta-bg.png?v=2`;
// Dark, moody backdrop kept only behind the night-aerial Location feature — the
// rest of the body is now a light palette and needs no dark scrim images.
const BG_COAST = `${IMG_BASE}/bg-coast.png`;

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

function GoldButton({ href, children, size = "md" }: { href: string; children: React.ReactNode; size?: "md" | "lg" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] text-[#06232E] transition-transform hover:scale-[1.03] ${
        size === "lg" ? "px-9 py-4 text-sm" : "px-7 py-3.5 text-[13px]"
      }`}
      style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)", boxShadow: "0 10px 30px -10px rgba(201,162,106,0.55)" }}
    >
      {children}
      <Shine />
    </a>
  );
}

// ── auto-scrolling fact marquee (edge-masked, slow) ─────────────────────────

function Marquee() {
  const reduceMotion = useReducedMotion();
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];
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

const NAV_LINKS = [
  { href: "#residences", label: "Residences" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#investment", label: "Invest" },
  { href: "#faq", label: "FAQ" },
];

function scrollToAnchor(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
}

function SiteHeader({ waLink }: { waLink: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const update = () => { raf = 0; setScrolled(window.scrollY > 60); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F4EEE2]/90 backdrop-blur-md border-b border-[#0C2E35]/10 py-3" : "py-5"}`}>
      {/* Top scrim so the transparent-header links stay legible over a bright sky. */}
      {!scrolled && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.55), transparent)" }} />
      )}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-baseline gap-2"
        >
          <span className={`font-serif text-lg sm:text-xl leading-none transition-colors ${scrolled ? "text-[#0C2E35]" : "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"}`}>Palm Jebel Ali</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToAnchor(e, l.href)}
              className={`text-[11px] uppercase tracking-[0.15em] transition-colors ${scrolled ? "text-[#0C2E35]/70 hover:text-[#0C2E35]" : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#06232E]"
          style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}
        >
          <MessageCircle className="h-3.5 w-3.5" /> Enquire
          <Shine />
        </a>
      </div>
    </header>
  );
}

function SiteFooter({ waLink }: { waLink: string }) {
  return (
    <footer className="bg-[#051820] border-t border-white/10 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-10 sm:mb-14">
          <div>
            <p className="font-serif text-2xl text-white mb-3">Palm Jebel Ali</p>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              An independent showcase for Nakheel&apos;s Palm Jebel Ali, curated by a Dubai brokerage tracking release phases directly.
            </p>
          </div>
          <div className="flex gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#06232E]" style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}>
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            <a href="tel:+971549988811" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-white border border-white/20">
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-white/35 text-xs leading-relaxed max-w-2xl">
            Palm Jebel Ali is a master development by Nakheel. Renders shown are illustrative concept imagery and subject to change. This is an independent showcase, not affiliated with or endorsed by Nakheel.
          </p>
          <p className="text-white/35 text-xs whitespace-nowrap">© 2026 Palm Jebel Ali Showcase</p>
        </div>
      </div>
    </footer>
  );
}

// ── content data ────────────────────────────────────────────────────────────

const FAQS: FaqItem[] = [
  {
    question: "What is Palm Jebel Ali?",
    answer:
      "Palm Jebel Ali is Nakheel's second palm-shaped island, rising off Dubai's southern coast beside Jebel Ali. The master plan spans over 10.5 million square metres across 16 fronds and seven islands, about twice the footprint of Palm Jumeirah, and is designed to add around 110km of new coastline to the city.",
  },
  {
    question: "What types of homes are available at Palm Jebel Ali?",
    answer:
      "Three collections. The Beach Collection offers 5 and 6-bedroom beachfront villas of roughly 7,500-8,500 sqft across eight architectural signatures. The Coral Collection is the ultra-premium tier, 7-bedroom signature mansions on the outer fronds, designed with SAOTA and Naga Architects. Palm Central Private Residences brings 1-5 bedroom apartments, townhouses and penthouses in a connected beachfront district between Fronds M and N.",
  },
  {
    question: "How much does it cost to buy at Palm Jebel Ali?",
    answer:
      "Beach Collection villas start from around AED 18.5 million and Coral Collection mansions from roughly AED 30 million. Palm Central Private Residences start from about AED 2.5 million. Pricing moves with each release phase, unit type and frond position.",
  },
  {
    question: "What is the payment plan at Palm Jebel Ali?",
    answer:
      "Launch inventory has typically followed an 80/20 structure: 20% on booking, 60% spread across construction milestones, and the final 20% on handover. Exact terms vary by collection and release, so confirm against the current release schedule before reserving.",
  },
  {
    question: "When is handover at Palm Jebel Ali?",
    answer:
      "Handover is phased. Villa fronds are already under construction with deliveries staged from around 2027 for earlier Coral phases and toward 2029 for Beach Collection phases. Palm Central Private Residences are scheduled from 2028, with later phases running toward 2030.",
  },
  {
    question: "Is Palm Jebel Ali bigger than Palm Jumeirah?",
    answer:
      "Yes, substantially. The master plan is roughly double Palm Jumeirah's footprint, with 16 fronds instead of Palm Jumeirah's tighter frond layout, and capacity planned for a far larger resident population.",
  },
  {
    question: "Can foreigners buy property at Palm Jebel Ali?",
    answer:
      "Yes. Palm Jebel Ali sits within Dubai's designated freehold zone, so buyers of any nationality can own outright, with title registered at the Dubai Land Department, the same ownership basis as Palm Jumeirah.",
  },
  {
    question: "Does buying at Palm Jebel Ali qualify for the UAE Golden Visa?",
    answer:
      "Property purchases at or above AED 2 million meet the current investment threshold for the UAE's 10-year renewable Golden Visa. Every Palm Jebel Ali collection clears that threshold, though eligibility is assessed on your individual application.",
  },
  {
    question: "Where is Palm Jebel Ali and how do you get there?",
    answer:
      "It sits on Dubai's southern coastline beside Jebel Ali, connected by three mainland access points straight onto Sheikh Zayed Road (E11). Al Maktoum International (DWC) is roughly 20 minutes away, Expo City is minutes down the road, and Dubai Marina is about 25 minutes north.",
  },
  {
    question: "What amenities will Palm Jebel Ali have?",
    answer:
      "The master plan includes private beaches and beach clubs, full-service marinas, more than 80 hotels and resorts, waterfront dining and retail districts, landscaped parks and promenades, wellness and fitness facilities, and everyday essentials such as schools, clinics and mosques, with island-wide cycling and pedestrian routes.",
  },
  {
    question: "Is Palm Jebel Ali a good investment?",
    answer:
      "The case rests on scarcity and timing: freehold beachfront on a limited-supply island, bought at launch-phase pricing before the hotel, retail and marina phases mature, in the growth corridor Dubai is actively building around Al Maktoum International and Expo City. As with any off-plan purchase, returns depend on entry price, release phase and holding period.",
  },
];

// All authentic: real palm aerials, real interiors, real amenity + villa renders.
// 8 tiles → clean 3-row grid (i0 feature 2×2, i5 wide band).
const GALLERY_IMAGES = [GALLERY_AERIAL_IMG, VILLA_INT_IMG, BEDROOM_IMG, POOL_IMG, BEACH_IMG, PALM_CENTRAL_IMG, CORAL_IMG, HERO_IMG];

const AMENITIES = [
  {
    icon: Waves,
    title: "Private beaches & beach clubs",
    body: "Swimmable frontage on every frond, a dedicated family beach club, and a sunset promenade tracing the island's western edge.",
  },
  {
    icon: Anchor,
    title: "Marinas & yachting",
    body: "Full-service marinas and berthing built into the crescent, the Gulf starts a few steps from the door, not a drive away.",
  },
  {
    icon: Building2,
    title: "80+ hotels & resorts",
    body: "Beachfront five-stars, eco-retreats, serviced apartments and boutique stays, phased across the island's outer edges.",
  },
  {
    icon: UtensilsCrossed,
    title: "Waterfront dining",
    body: "Restaurant and café precincts wrapped around the marinas, built for long evenings rather than quick meals.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & lifestyle districts",
    body: "Boutique retail clusters and lifestyle centres scaled for people who live here, not for tour buses.",
  },
  {
    icon: Trees,
    title: "Parks, play & promenades",
    body: "Landscaped parks, water features and shaded playgrounds threaded between the fronds and along the shore.",
  },
  {
    icon: HeartPulse,
    title: "Wellness & fitness",
    body: "Spas, wellness centres and open-air fitness zones, with cycling and pedestrian routes running the length of the island.",
  },
  {
    icon: GraduationCap,
    title: "Everyday essentials",
    body: "Schools, clinics, mosques and community retail planned in from day one, so the island works on a Tuesday, not just a Saturday.",
  },
];

const SUSTAINABILITY = [
  { icon: Sun, stat: "30%", title: "Renewable energy", body: "Public facilities across the island are targeted to run on renewable power." },
  { icon: Bike, stat: "Island-wide", title: "Car-light by design", body: "Continuous cycling and pedestrian routes make short journeys walkable rather than drivable." },
  { icon: Fish, stat: "Protected", title: "Marine habitat", body: "Breakwaters and shallows designed to support marine life rather than simply hold back the sea." },
  { icon: Leaf, stat: "Native", title: "Low-water landscaping", body: "Planting chosen for the Gulf climate, cutting irrigation demand across parks and promenades." },
];

const INVESTMENT = [
  { title: "Freehold for all nationalities", body: "Palm Jebel Ali sits inside Dubai's designated freehold zone, full ownership, registered with the Dubai Land Department." },
  { title: "Golden Visa eligible", body: "Property purchases at or above AED 2 million meet the threshold for the UAE's 10-year renewable Golden Visa." },
  { title: "Launch-phase pricing", body: "Early releases are priced ahead of the island's amenity and hotel phases coming online, the classic off-plan entry window." },
  { title: "Dubai's southern corridor", body: "Anchored beside Al Maktoum International and Expo City, the growth axis the city is actively building toward." },
];

const RESIDENCES = [
  {
    img: BEACH_IMG,
    tag: "The Beach Collection",
    meta: "5 & 6 bedroom villas · 7,500-8,500 sqft",
    price: "18.5M",
    facts: ["Frond-front plots with private beach access", "Eight architectural signatures across the collection"],
  },
  {
    img: CORAL_IMG,
    tag: "The Coral Collection",
    meta: "7 bedroom signature villas · outer fronds",
    price: "30M",
    facts: ["Ultra-premium mansions designed by SAOTA & Naga Architects", "The rarest addresses on the island"],
  },
  {
    img: PALM_CENTRAL_IMG,
    tag: "Palm Central Private Residences",
    meta: "1-5 bed apartments · townhouses · penthouses",
    price: "2.5M",
    facts: ["Beachfront resort living between Fronds M & N", "212 connected residences across three buildings"],
  },
];

// ── page ─────────────────────────────────────────────────────────────────────

export default function PalmJebelAliClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));

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
      <SiteHeader waLink={waLink} />

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
              <Eyebrow strong>By Nakheel</Eyebrow>
            </div>
            <h1
              className="hero-rise font-serif font-medium text-[#F0E6D2] tracking-[-0.02em] leading-[0.98] mb-7"
              style={{ fontSize: "clamp(2.9rem, 7vw, 6.4rem)", animationDelay: "0.27s" }}
            >
              <span className="block" style={{ fontSize: "0.62em" }}>The new palm.</span>
              Twice the <em className="italic text-[#E7C989]">shoreline</em>.
            </h1>
            <p className="hero-rise text-white/75 text-base sm:text-xl max-w-xl mb-10 leading-relaxed" style={{ animationDelay: "0.39s" }}>
              16 fronds. 110 kilometres of new coastline. A private island city rising off Dubai&apos;s southern shore, and the first villas are already under construction.
            </p>
            <div className="hero-rise flex flex-wrap items-center gap-6" style={{ animationDelay: "0.51s" }}>
              <GoldButton href={waLink} size="lg">Register your interest</GoldButton>
              <span className="hidden sm:block h-10 w-px bg-white/20" />
              <a href="#residences" onClick={(e) => scrollToAnchor(e, "#residences")} className="group inline-flex flex-col text-white text-sm font-medium">
                <span className="uppercase tracking-[0.12em]">View the residences</span>
                <span className="mt-1 h-px w-0 bg-[#C9A26A] transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 scroll-pulse">Scroll</span>
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-x-0 top-0 h-4 bg-[#C9A26A] scroll-travel" />
          </span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-[#0C2E35]/10 bg-[#EAE1D0]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-4 sm:divide-x sm:divide-[#0C2E35]/10">
          {[
            { value: 110, suffix: "km", label: "New coastline" },
            { value: 2, suffix: "×", label: "Size of Palm Jumeirah" },
            { value: 16, suffix: "", label: "Fronds · 7 islands" },
            { value: 80, suffix: "/20", label: "Launch payment plan" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:px-4">
              <div className="font-serif text-4xl sm:text-6xl text-[#0C2E35] mb-2 leading-none">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#0C2E35]/50 text-[11px] sm:text-xs uppercase tracking-[0.18em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POSITIONING INTRO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-36 text-center">
          <Reveal>
            <p className="font-serif text-2xl sm:text-4xl leading-[1.28] text-[#0C2E35]">
              Nakheel built Palm Jumeirah once. Palm Jebel Ali is what happens when they get to do it again, with two more decades of lessons, twice the land, and room for a community of <span className="italic text-[#A8814A]">240,000 residents</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ── FRONDS / SIGNATURE COMPARISON ── */}
      <section className="relative bg-[#E4EDEB] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14 max-w-2xl text-center mx-auto">
            <div className="flex justify-center"><Eyebrow dark>One trunk, sixteen fronds</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              A coastline, <em className="italic text-[#A8814A]">drawn</em> from the sea.
            </h2>
          </Reveal>

          <FrondComparison />

          <Reveal className="mt-14 sm:mt-20 max-w-2xl mx-auto text-center" delay={120}>
            <p className="text-[#0C2E35]/70 text-base sm:text-lg leading-relaxed">
              Seven islands, sixteen fronds, and more shoreline than most countries add in a decade, all connected by three mainland access points straight onto Sheikh Zayed Road.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── RESIDENCES (editorial asymmetric) ── */}
      <section id="residences" className="bg-[#F4EEE2] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 sm:mb-20 max-w-2xl">
            <Eyebrow dark>The residences</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              Three collections. One <em className="italic text-[#A8814A]">coastline</em>.
            </h2>
          </Reveal>

          <div className="space-y-20 sm:space-y-28">
            {RESIDENCES.map((r, idx) => (
              <Reveal key={r.tag}>
                <div className={`grid lg:grid-cols-5 gap-8 lg:gap-14 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-3 relative overflow-hidden rounded-2xl group">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
                    <img src={r.img} alt={r.tag} className="w-full h-[46vh] lg:h-[64vh] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                    {/* big index watermark on the image */}
                    <span className="absolute top-5 left-6 font-serif text-white/85 text-2xl sm:text-3xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">0{idx + 1}</span>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-px w-7 bg-[#A8814A]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8814A]">Collection 0{idx + 1}</span>
                    </div>

                    {/* the collection TITLE, now a prominent serif display heading */}
                    <h3 className="font-serif font-medium text-[#0C2E35] text-4xl sm:text-[46px] leading-[1.02] tracking-[-0.01em] mb-6">
                      {r.tag}
                    </h3>

                    <div className="flex items-baseline gap-2.5 mb-6">
                      <span className="text-[#0C2E35]/50 text-sm uppercase tracking-[0.16em]">From AED</span>
                      <span className="font-serif text-4xl sm:text-5xl leading-none bg-gradient-to-b from-[#C9A26A] to-[#8A6A34] bg-clip-text text-transparent">{r.price}</span>
                    </div>

                    <div className="h-px w-full bg-[#0C2E35]/12 mb-6" />
                    <p className="text-[#0C2E35]/60 text-sm uppercase tracking-[0.14em] mb-6">{r.meta}</p>

                    <ul className="space-y-3">
                      {r.facts.map((f) => (
                        <li key={f} className="flex gap-3 text-[#0C2E35]/70 text-sm sm:text-[15px] leading-relaxed">
                          <span className="mt-[9px] h-1 w-1 rounded-full bg-[#A8814A] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY (editorial mosaic) ── */}
      <section id="gallery" className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <Reveal className="mb-12 sm:mb-16">
          <Eyebrow dark>Built for a life lived outdoors</Eyebrow>
          <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02] max-w-3xl">
            Private beaches. A working marina. Everyday texture as considered as the <em className="italic text-[#A8814A]">villas</em>.
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
                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
              </button>
            );
          })}
        </Reveal>
      </section>
      <GalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} images={GALLERY_IMAGES} activeIndex={galleryIndex} onChange={setGalleryIndex} title="Palm Jebel Ali" />

      {/* ── AMENITIES ── */}
      <section id="amenities" className="relative overflow-hidden bg-[#EFE8DA] py-24 sm:py-32">
        {/* faint AI-generated watercolour paper texture for a refined brochure surface */}
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN texture */}
        <img aria-hidden src={AMENITIES_TEX} alt="" className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-90" loading="lazy" />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(239,232,218,0.35), rgba(239,232,218,0))" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-20 max-w-2xl">
            <Eyebrow dark>Island lifestyle</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#06232E] tracking-[-0.02em] leading-[1.02]">
              A whole city&apos;s worth of <em className="italic text-[#A8814A]">everyday</em>.
            </h2>
            <p className="mt-6 text-[#06232E]/65 text-base sm:text-lg leading-relaxed">
              Islands fail when they are only beautiful. Palm Jebel Ali is planned as somewhere you can actually live, the marinas and beach clubs, yes, but also the schools, clinics and corner retail that make a Tuesday work.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0 border-t border-[#06232E]/10">
            {AMENITIES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 2) * 60}>
                <div className="flex gap-5 py-7 sm:py-8 border-b border-[#06232E]/10 h-full">
                  <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1">
                    <span className="font-serif text-xl text-[#A8814A] tabular-nums leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <Icon className="h-4 w-4 text-[#A8814A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-[28px] text-[#06232E] leading-tight mb-2">{title}</h3>
                    <p className="text-[#06232E]/60 text-sm sm:text-base leading-relaxed">{body}</p>
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
            <Eyebrow dark>Built to last</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              An island engineered to <em className="italic text-[#A8814A]">age well</em>.
            </h2>
            <p className="mt-6 text-[#0C2E35]/65 text-base sm:text-lg leading-relaxed">
              Reclaiming land is the easy part. Making it liveable in forty years is the discipline, and it shows up in the energy plan, the movement plan and what happens under the waterline.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {SUSTAINABILITY.map(({ icon: Icon, stat, title, body }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="group border-t border-[#0C2E35]/15 pt-6 h-full transition-colors">
                  <Icon className="h-6 w-6 text-[#A8814A] mb-5 transition-transform duration-500 group-hover:-translate-y-0.5" />
                  <p className="font-serif text-4xl sm:text-5xl leading-none mb-3 bg-gradient-to-b from-[#C9A26A] to-[#8A6A34] bg-clip-text text-transparent">{stat}</p>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#0C2E35]/85 mb-3">{title}</h3>
                  <p className="text-[#0C2E35]/60 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="relative bg-[#06232E] py-24 sm:py-32 overflow-hidden">
        <SectionBg src={BG_COAST} opacity={0.95} top={0.42} bottom={0.28} />
        {/* left-anchored scrim keeps the white copy legible while the water image
            breathes brightly on the right */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,35,46,0.72) 0%, rgba(6,35,46,0.32) 42%, transparent 72%)" }} />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(closest-side, rgba(201,162,106,0.08), transparent)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-16 max-w-xl">
            <Eyebrow>Location &amp; connectivity</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02]">
              Minutes from the airport <em className="italic text-[#E7C989]">reshaping</em> Dubai.
            </h2>
          </Reveal>

          <div>
            {[
              ["Al Maktoum International (DWC)", "20 min"],
              ["Dubai Marina", "25 min"],
              ["Expo City Dubai", "Minutes"],
              ["Sheikh Zayed Road (E11)", "Direct"],
            ].map(([place, time], i) => (
              <Reveal key={place} delay={i * 50}>
                <div className="group flex items-baseline gap-4 py-5 sm:py-7 border-b border-white/10 transition-colors hover:border-[#C9A26A]/40">
                  <span className="text-white/75 text-lg sm:text-2xl transition-colors group-hover:text-white">{place}</span>
                  <span className="flex-1 border-b border-dotted border-[#C9A26A]/30 translate-y-[-4px]" />
                  <span className="font-serif text-3xl sm:text-4xl leading-none whitespace-nowrap bg-gradient-to-b from-[#F0D9A0] to-[#A8814A] bg-clip-text text-transparent">{time}</span>
                </div>
              </Reveal>
            ))}
          </div>
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
            <div className="flex justify-center"><Eyebrow dark>Payment plan</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.04]">
              Capital that isn&apos;t <em className="italic text-[#A8814A]">locked up</em> early.
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
              { pct: "20%", label: "On booking" },
              { pct: "60%", label: "During construction" },
              { pct: "20%", label: "On handover", emphasize: true },
            ].map((s, i) => (
              <div key={s.label} className="relative z-10 flex flex-col items-center gap-4 flex-1">
                <span
                  className="w-3 h-3 rounded-full transition-all duration-500"
                  style={{
                    background: payment.visible ? (s.emphasize ? "#A8814A" : "#0C2E35") : "rgba(12,46,53,0.15)",
                    transitionDelay: `${600 + i * 260}ms`,
                    boxShadow: s.emphasize && payment.visible ? "0 0 0 6px rgba(168,129,74,0.18)" : "none",
                  }}
                />
                <p className={`font-serif text-3xl sm:text-5xl ${s.emphasize ? "text-[#A8814A]" : "text-[#0C2E35]"}`}>{s.pct}</p>
                <p className="text-[#0C2E35]/50 text-xs sm:text-sm uppercase tracking-[0.14em] text-center">{s.label}</p>
              </div>
            ))}
          </div>

          <Reveal>
            <p className="text-[#0C2E35]/60 text-sm sm:text-base text-center mt-16 sm:mt-24 max-w-xl mx-auto leading-relaxed">
              An 80/20 plan spreads the bulk of your commitment across the build period rather than the day you sign, standard Nakheel structuring on launch-phase inventory, subject to unit and release.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INVESTMENT CASE ── */}
      <section id="investment" className="relative overflow-hidden bg-[#EAE1D0] py-24 sm:py-32">
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-20 max-w-2xl">
            <Eyebrow dark>The investment case</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">
              Why buyers move <em className="italic text-[#A8814A]">early</em> here.
            </h2>
            <p className="mt-6 text-[#0C2E35]/65 text-base sm:text-lg leading-relaxed">
              Beachfront on a finite island is the one thing Dubai cannot produce more of on demand. The rest is timing.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0 border-t border-[#0C2E35]/12">
            {INVESTMENT.map(({ title, body }, i) => (
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
              Early releases move fast and allocations are tightly held. We track Nakheel&apos;s release phases directly and can position serious buyers ahead of general public launches, with full DLD-registered transaction support from reservation through to handover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#E4EDEB] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12 sm:mb-14">
            <Eyebrow dark>Common questions</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#0C2E35] tracking-[-0.02em] leading-[1.02]">Palm Jebel Ali, answered.</h2>
          </Reveal>
          <FaqAccordion faqs={FAQS} emitJsonLd={false} />
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
              <span className="h-px w-8 bg-[#C9A26A]" /> The invitation
            </p>
            <h2 className="font-serif font-medium text-white tracking-[-0.02em] leading-[1.05] mb-9" style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
              Your address on the new <em className="italic text-[#E7C989]">coastline</em>.
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Get the current release schedule, pricing by frond, and payment-plan breakdowns, sent directly, no obligation.
            </p>
            <div className="flex justify-center">
              <GoldButton href={waLink} size="lg">Request Palm Jebel Ali pricing</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter waLink={waLink} />
    </div>
  );
}
