"use client";

// Shared design-system primitives for the Palm Jebel Ali microsite — copied
// faithfully from the home page so every content page renders in the identical
// light sand / teal / gold register with the same scroll-reveal motion.

import { useEffect, useRef, useState } from "react";

// ── scroll reveal ────────────────────────────────────────────────────────────

export function useRevealOnScroll<T extends HTMLElement>() {
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
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export function CountUp({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
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

// ── presentational atoms ─────────────────────────────────────────────────────

// Eyebrow — gold hairline + spaced caps, the recurring "opening mark".
export function Eyebrow({ children, dark = false, strong = false }: { children: React.ReactNode; dark?: boolean; strong?: boolean }) {
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

// Cinematic backdrop for a dark text section.
export function SectionBg({ src, opacity = 0.7, position = "center", top = 0.68, bottom = 0.42 }: {
  src: string;
  opacity?: number;
  position?: string;
  top?: number;
  bottom?: number;
}) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN backdrop */}
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity, objectPosition: position }} loading="lazy" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(6,35,46,${top}) 0%, rgba(6,35,46,${(top + bottom) / 2}) 45%, rgba(6,35,46,${bottom}) 100%)` }} />
    </div>
  );
}

// Diagonal light sweep on gold CTAs. Parent needs `group relative overflow-hidden`.
export function Shine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 h-full w-1/4 -skew-x-12 bg-white/40 blur-sm -translate-x-[300%] transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
    />
  );
}

// Gold pill CTA. Renders an <a> when `href` is given, otherwise a <button>.
export function GoldButton({ href, onClick, children, size = "md" }: { href?: string; onClick?: () => void; children: React.ReactNode; size?: "md" | "lg" }) {
  const cls = `group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] text-[#06232E] transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8814A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
    size === "lg" ? "px-9 py-4 text-sm" : "px-7 py-3.5 text-[13px]"
  }`;
  const style = { background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)", boxShadow: "0 10px 30px -10px rgba(201,162,106,0.55)" } as const;
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") || href.startsWith("tel:") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} onClick={onClick} className={cls} style={style}>
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

// Ghost/outline CTA companion.
export function GhostButton({ href, onClick, children, tone = "dark", size = "md" }: { href: string; onClick?: () => void; children: React.ReactNode; tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const color = tone === "light" ? "text-white border-white/40 hover:border-white" : "text-[#0C2E35] border-[#0C2E35]/25 hover:border-[#0C2E35]/60";
  return (
    <a
      href={href}
      target={href.startsWith("http") || href.startsWith("tel:") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8814A] ${color} ${
        size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3.5 text-[13px]"
      }`}
    >
      {children}
    </a>
  );
}

// Stat cell — big serif number over a spaced-caps label.
export function Stat({ value, label, suffix = "", countTo }: { value?: string; label: string; suffix?: string; countTo?: number }) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl sm:text-5xl text-[#0C2E35] leading-none">
        {countTo != null ? <CountUp target={countTo} suffix={suffix} /> : <>{value}{suffix}</>}
      </div>
      <div className="mt-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#0C2E35]/50">{label}</div>
    </div>
  );
}
