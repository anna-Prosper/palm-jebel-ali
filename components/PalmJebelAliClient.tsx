"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Anchor, Waves, UtensilsCrossed, ShoppingBag, HeartPulse, Trees, Building2, Phone, MessageCircle } from "lucide-react";
import { GalleryModal } from "@/components/GalleryModal";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { waHref } from "@/lib/whatsapp";

const IMG_BASE = "https://binayah-media-456051253184-us-east-1-an.s3.us-east-1.amazonaws.com/showcase-images/palm-jebel-ali";
const HERO_IMG = `${IMG_BASE}/hero-aerial.png`;
const MASTERPLAN_IMG = `${IMG_BASE}/masterplan-aerial.png`;
const VILLA_EXT_IMG = `${IMG_BASE}/villa-exterior.png`;
const VILLA_INT_IMG = `${IMG_BASE}/villa-interior.png`;
const MARINA_IMG = `${IMG_BASE}/marina-club.png`;
const POOL_IMG = `${IMG_BASE}/amenities-pool.png`;
const BEDROOM_IMG = `${IMG_BASE}/bedroom-suite.png`;

const WA_MESSAGE = "Hi Binayah! I'd like the current release schedule and pricing for Palm Jebel Ali.";

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
    // Safety net — nothing may ever stay invisible.
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

// Eyebrow — gold hairline + spaced caps, the recurring "opening mark".
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-8 bg-[#C9A26A]" />
      <span className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${dark ? "text-[#A8814A]" : "text-[#C9A26A]"}`}>
        {children}
      </span>
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
      className="overflow-hidden border-y border-[#C9A26A]/15 bg-[#051820] py-5 sm:py-6"
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
  const stroke = tone === "gold" ? "#C9A26A" : "rgba(201,162,106,0.4)";
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
        className="relative mx-auto grid items-end justify-center gap-x-8 sm:gap-x-16"
        style={{ gridTemplateColumns: "clamp(90px, 19vw, 140px) auto clamp(170px, 38vw, 264px)" }}
      >
        {/* row 1 — silhouettes, both sitting on the same ground line */}
        <PalmSilhouette fronds={8} draw={visible} tone="muted" animate={animate} className="w-full h-auto" />
        {/* 2× — boxed to the SMALL palm's height and bottom-aligned to the ground
            line, so it sits at the small palm's vertical centre, reading "×2". */}
        <div
          className="self-end flex flex-col items-center justify-center px-1 sm:px-2"
          style={{ height: "clamp(119px, 25vw, 185px)" }}
        >
          <span className="font-serif italic text-4xl sm:text-6xl leading-none bg-gradient-to-b from-[#E7C989] to-[#A8814A] bg-clip-text text-transparent">2×</span>
          <span className="mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-white/40 whitespace-nowrap">the size</span>
        </div>
        <PalmSilhouette fronds={11} draw={visible} tone="gold" animate={animate} className="w-full h-auto" />

        {/* row 2 — the shared ground line */}
        <div className="col-span-3 mt-7 sm:mt-9 h-px bg-gradient-to-r from-transparent via-[#C9A26A]/30 to-transparent" />

        {/* row 3 — labels on a common baseline (matched km sizes) */}
        <div className="mt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">Palm Jumeirah</p>
          <p className="mt-2 font-serif text-3xl sm:text-4xl text-white/60 leading-none">
            <CountUp target={56} /> <span className="text-sm align-top">km</span>
          </p>
        </div>
        <div />
        <div className="mt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C9A26A]">Palm Jebel Ali · 16 fronds</p>
          <p className="mt-2 font-serif text-3xl sm:text-4xl text-white leading-none">
            <CountUp target={110} /> <span className="text-sm align-top text-[#C9A26A]">km</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── header / footer ─────────────────────────────────────────────────────────

const NAV_LINKS = [
  { href: "#residences", label: "Residences" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#payment-plan", label: "Payment Plan" },
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06232E]/85 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-baseline gap-2"
        >
          <span className="font-serif text-lg sm:text-xl text-white leading-none">Palm Jebel Ali</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => scrollToAnchor(e, l.href)} className="text-white/65 hover:text-white text-[11px] uppercase tracking-[0.15em] transition-colors">
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
            Palm Jebel Ali is a master development by Nakheel. Renders shown are illustrative concept imagery, not official developer material. Marketed by{" "}
            <a href="https://www.binayah.ae" className="underline hover:text-white/60">Binayah Properties</a>, RERA ORN 1162, an independent brokerage, not affiliated with or endorsed by Nakheel.
          </p>
          <p className="text-white/35 text-xs whitespace-nowrap">© 2026 Palm Jebel Ali Showcase</p>
        </div>
      </div>
    </footer>
  );
}

// ── content data ────────────────────────────────────────────────────────────

const FAQS: FaqItem[] = [
  { question: "What is Palm Jebel Ali?", answer: "A new palm-shaped island development by Nakheel off Dubai's southern coast, roughly twice the size of Palm Jumeirah, comprising 16 fronds across 7 islands." },
  { question: "How much does it cost to buy at Palm Jebel Ali?", answer: "Beachfront villas start from AED 18.5 million; apartments and townhouses at Palm Central start from AED 2.7 million, depending on release phase and unit." },
  { question: "What is the payment plan?", answer: "Launch inventory has typically followed an 80/20 structure, 20% on booking, 60% during construction, 20% on handover, though terms vary by release." },
  { question: "When is handover?", answer: "Villas are phased in across multiple fronds under active construction. Palm Central apartments and townhouses are scheduled from 2028, with later phases through 2030." },
  { question: "Is Palm Jebel Ali really bigger than Palm Jumeirah?", answer: "Yes, the master plan is roughly double the footprint, adding around 110km of new coastline to Dubai." },
  { question: "Can foreign buyers own freehold here?", answer: "Yes, Palm Jebel Ali falls within Dubai's designated freehold zones, open to foreign ownership like Palm Jumeirah and other Nakheel master communities." },
];

const GALLERY_IMAGES = [VILLA_EXT_IMG, VILLA_INT_IMG, BEDROOM_IMG, MARINA_IMG, POOL_IMG, MASTERPLAN_IMG];

const AMENITIES = [
  { icon: Waves, label: "Private beach frontage on every frond" },
  { icon: Anchor, label: "Marina & yacht club" },
  { icon: UtensilsCrossed, label: "Beach clubs & fine dining" },
  { icon: ShoppingBag, label: "Boutique retail districts" },
  { icon: HeartPulse, label: "Wellness centres & spas" },
  { icon: Trees, label: "Parks & waterfront promenades" },
  { icon: Building2, label: "Up to 80 hotels & resorts island-wide" },
];

const RESIDENCES = [
  {
    img: VILLA_EXT_IMG,
    tag: "Beachfront Villas",
    meta: "5 · 6 · 7 bedroom · direct beach",
    price: "18.5M",
    facts: ["Frond-front plots with private beach access", "544 villas under construction across six fronds"],
  },
  {
    img: MARINA_IMG,
    tag: "Palm Central Residences",
    meta: "1–4 bed apartments · 4–5 bed townhouses",
    price: "2.7M",
    facts: ["Sea-facing, resort-style low-rise blocks", "Handover phased toward 2030"],
  },
];

// ── hero entrance ────────────────────────────────────────────────────────────

const heroStagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const heroItem: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };

// ── page ─────────────────────────────────────────────────────────────────────

export default function PalmJebelAliClient() {
  const reduceMotion = useReducedMotion();
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
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));
      if (heroImgRef.current) heroImgRef.current.style.transform = `translateY(${p * 12}%)`;
      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translateY(${p * 26}%)`;
        heroTextRef.current.style.opacity = `${Math.max(0, 1 - p / 0.7)}`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div id="top" className="bg-[#06232E]">
      <SiteHeader waLink={waLink} />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div ref={heroImgRef} className="absolute inset-x-0 -top-[8%] h-[128%] will-change-transform">
            {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN hero */}
            <img src={HERO_IMG} alt="Aerial view of Palm Jebel Ali, Dubai's second palm island" className="ken-burns w-full h-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.25) 0%, transparent 32%, rgba(5,24,32,0.55) 72%, #06232E 100%)" }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 40%, transparent 55%, rgba(5,24,32,0.5) 100%)" }} />
          </div>
        </div>

        <div ref={heroTextRef} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-[12vh] w-full will-change-transform">
          <motion.div variants={reduceMotion ? undefined : heroStagger} initial={reduceMotion ? undefined : "hidden"} animate={reduceMotion ? undefined : "show"} className="max-w-3xl">
            <motion.div variants={reduceMotion ? undefined : heroItem}>
              <Eyebrow>Nakheel · Dubai&apos;s Second Palm</Eyebrow>
            </motion.div>
            <motion.h1
              variants={reduceMotion ? undefined : heroItem}
              className="font-serif font-medium text-[#F0E6D2] tracking-[-0.02em] leading-[0.98] mb-7"
              style={{ fontSize: "clamp(2.9rem, 7vw, 6.4rem)" }}
            >
              <span className="block" style={{ fontSize: "0.62em" }}>The second palm.</span>
              Twice the <em className="italic text-[#E7C989]">shoreline</em>.
            </motion.h1>
            <motion.p variants={reduceMotion ? undefined : heroItem} className="text-white/75 text-base sm:text-xl max-w-xl mb-10 leading-relaxed">
              16 fronds. 110 kilometres of new coastline. A private island city rising off Dubai&apos;s southern shore, and the first villas are already under construction.
            </motion.p>
            <motion.div variants={reduceMotion ? undefined : heroItem} className="flex flex-wrap items-center gap-6">
              <GoldButton href={waLink} size="lg">Register your interest</GoldButton>
              <span className="hidden sm:block h-10 w-px bg-white/20" />
              <a href="#residences" onClick={(e) => scrollToAnchor(e, "#residences")} className="group inline-flex flex-col text-white text-sm font-medium">
                <span className="uppercase tracking-[0.12em]">View the residences</span>
                <span className="mt-1 h-px w-0 bg-[#C9A26A] transition-all duration-500 group-hover:w-full" />
              </a>
            </motion.div>
          </motion.div>
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
      <section className="border-b border-white/10 bg-[#051820]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid grid-cols-2 sm:grid-cols-4 gap-y-10 sm:gap-4 sm:divide-x sm:divide-white/10">
          {[
            { value: 110, suffix: "km", label: "New coastline" },
            { value: 2, suffix: "×", label: "Size of Palm Jumeirah" },
            { value: 16, suffix: "", label: "Fronds · 7 islands" },
            { value: 80, suffix: "/20", label: "Launch payment plan" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:px-4">
              <div className="font-serif text-4xl sm:text-6xl text-white mb-2 leading-none">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/45 text-[11px] sm:text-xs uppercase tracking-[0.18em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POSITIONING INTRO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-24 sm:py-36 text-center">
          <Reveal>
            <p className="font-serif text-2xl sm:text-4xl leading-[1.28] text-[#F0E6D2]">
              Nakheel built Palm Jumeirah once. Palm Jebel Ali is what happens when they get to do it again — with two more decades of lessons, twice the land, and a waterfront capable of housing <span className="italic text-[#E7C989]">35,000 families</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* ── FRONDS / SIGNATURE COMPARISON ── */}
      <section className="relative bg-[#0E3B45] py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10 sm:mb-14 max-w-2xl text-center mx-auto">
            <div className="flex justify-center"><Eyebrow>One trunk, sixteen fronds</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02]">
              A coastline, <em className="italic text-[#E7C989]">drawn</em> from the sea.
            </h2>
          </Reveal>

          <FrondComparison />

          <Reveal className="mt-14 sm:mt-20 max-w-2xl mx-auto text-center" delay={120}>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              Seven islands, sixteen fronds, and more shoreline than most countries add in a decade — all connected by three mainland access points straight onto Sheikh Zayed Road.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── RESIDENCES (editorial asymmetric) ── */}
      <section id="residences" className="bg-[#06232E] py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 sm:mb-20 max-w-2xl">
            <Eyebrow>The residences</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02]">
              Two ways to own the <em className="italic text-[#E7C989]">water</em>.
            </h2>
          </Reveal>

          <div className="space-y-16 sm:space-y-24">
            {RESIDENCES.map((r, idx) => (
              <Reveal key={r.tag}>
                <div className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-3 relative overflow-hidden rounded-2xl group">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
                    <img src={r.img} alt={r.tag} className="w-full h-[46vh] lg:h-[62vh] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]" loading="lazy" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#C9A26A] mb-4">{r.tag}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-white/50 text-lg">From AED</span>
                      <span className="font-serif text-5xl sm:text-6xl text-white leading-none">{r.price}</span>
                    </div>
                    <div className="h-px w-full bg-white/10 my-5" />
                    <p className="text-white/60 text-sm uppercase tracking-[0.14em] mb-5">{r.meta}</p>
                    <ul className="space-y-2.5">
                      {r.facts.map((f) => (
                        <li key={f} className="flex gap-3 text-white/70 text-sm sm:text-base">
                          <span className="mt-2 h-1 w-1 rounded-full bg-[#C9A26A] flex-shrink-0" />
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
          <Eyebrow>Built for a life lived outdoors</Eyebrow>
          <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02] max-w-3xl">
            Private beaches. A working marina. Everyday texture as considered as the <em className="italic text-[#E7C989]">villas</em>.
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

      {/* ── AMENITIES (numbered index) ── */}
      <section className="bg-[#F0E6D2] py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14">
            <Eyebrow dark>Island lifestyle</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#06232E] tracking-[-0.02em] leading-[1.02]">
              Everything the island needs, <em className="italic text-[#A8814A]">nothing</em> it doesn&apos;t.
            </h2>
          </Reveal>

          <div className="border-t border-[#06232E]/10">
            {AMENITIES.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 40}>
                <div className="group flex items-center gap-5 sm:gap-8 py-5 sm:py-6 border-b border-[#06232E]/10 transition-colors hover:bg-[#06232E]/[0.03] -mx-4 px-4 rounded-lg">
                  <span className="font-serif text-2xl sm:text-3xl text-[#A8814A] w-10 sm:w-14 flex-shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-[#A8814A] flex-shrink-0" />
                  <span className="text-[#06232E] text-lg sm:text-2xl font-medium">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="relative bg-[#06232E] py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-0 w-[600px] h-[600px]"
          style={{ background: "radial-gradient(closest-side, rgba(201,162,106,0.08), transparent)" }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14 sm:mb-16 max-w-xl">
            <Eyebrow>Location &amp; connectivity</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.02]">
              Minutes from the airport <em className="italic text-[#E7C989]">reshaping</em> Dubai.
            </h2>
          </Reveal>

          <div>
            {[
              ["Al Maktoum International (DWC)", "15 min"],
              ["Dubai Marina", "25 min"],
              ["Expo City Dubai", "Minutes"],
              ["Sheikh Zayed Road (E11)", "Direct"],
            ].map(([place, time], i) => (
              <Reveal key={place} delay={i * 50}>
                <div className="flex items-baseline gap-4 py-5 sm:py-6 border-b border-white/10">
                  <span className="text-white/70 text-base sm:text-xl">{place}</span>
                  <span className="flex-1 border-b border-dotted border-[#C9A26A]/30 translate-y-[-4px]" />
                  <span className="font-serif text-2xl sm:text-3xl text-[#C9A26A] whitespace-nowrap">{time}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYMENT PLAN ── */}
      <section id="payment-plan" className="bg-[#0E3B45] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-16 sm:mb-24 text-center">
            <div className="flex justify-center"><Eyebrow>Payment plan</Eyebrow></div>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-white tracking-[-0.02em] leading-[1.04]">
              Capital that isn&apos;t <em className="italic text-[#E7C989]">locked up</em> early.
            </h2>
          </Reveal>

          <div ref={payment.ref} className="relative flex justify-between items-start">
            {/* base rail */}
            <div className="absolute top-3 left-0 right-0 h-px bg-white/12" />
            {/* gold rail draws left→right */}
            <div
              className="absolute top-3 left-0 h-px origin-left bg-gradient-to-r from-[#E7C989] to-[#A8814A] transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                    background: payment.visible ? (s.emphasize ? "#C9A26A" : "#F0E6D2") : "rgba(255,255,255,0.2)",
                    transitionDelay: `${600 + i * 260}ms`,
                    boxShadow: s.emphasize && payment.visible ? "0 0 0 6px rgba(201,162,106,0.18)" : "none",
                  }}
                />
                <p className={`font-serif text-3xl sm:text-5xl ${s.emphasize ? "text-[#C9A26A]" : "text-white"}`}>{s.pct}</p>
                <p className="text-white/45 text-xs sm:text-sm uppercase tracking-[0.14em] text-center">{s.label}</p>
              </div>
            ))}
          </div>

          <Reveal>
            <p className="text-white/55 text-sm sm:text-base text-center mt-16 sm:mt-24 max-w-xl mx-auto leading-relaxed">
              An 80/20 plan spreads the bulk of your commitment across the build period rather than the day you sign — standard Nakheel structuring on launch-phase inventory, subject to unit and release.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHY BINAYAH ── */}
      <section className="bg-[#06232E] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <div className="flex justify-center"><Eyebrow>Off-plan access, without the guesswork</Eyebrow></div>
            <h2 className="font-serif font-medium text-3xl sm:text-5xl text-white tracking-[-0.02em] leading-[1.08] mb-7">
              Early releases move fast, and allocations are <em className="italic text-[#E7C989]">tightly held</em>.
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">
              Binayah tracks Nakheel&apos;s release phases directly and can position serious buyers ahead of general public launches — with full DLD-registered transaction support from reservation to handover.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#F0E6D2] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12 sm:mb-14">
            <Eyebrow dark>Common questions</Eyebrow>
            <h2 className="font-serif font-medium text-4xl sm:text-6xl text-[#06232E] tracking-[-0.02em] leading-[1.02]">Palm Jebel Ali, answered.</h2>
          </Reveal>
          <FaqAccordion faqs={FAQS} emitJsonLd={false} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN */}
          <img src={POOL_IMG} alt="Resort pool at Palm Jebel Ali at dusk" className="w-full h-full object-cover" loading="lazy" />
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
              Get the current release schedule, pricing by frond, and payment-plan breakdowns — sent directly, no obligation.
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
