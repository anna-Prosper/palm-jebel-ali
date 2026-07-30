"use client";

import { useEffect, useState } from "react";
import { MessageCircle, ChevronRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LeadFormModal } from "@/components/LeadFormModal";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { GoldButton, GhostButton, Reveal, Eyebrow, Stat } from "@/components/ui/kit";
import { useLeadForm } from "@/components/site/useLeadForm";
import { waHref } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { UI, dir, type Locale } from "@/lib/i18n";
import type { Hero, StatItem, RelatedLink } from "@/lib/content/types";

const WA_MESSAGE = "Hi! I'd like the current release schedule and pricing for Palm Jebel Ali.";

export interface PageShellProps {
  breadcrumbs: { href: string; label: string }[];
  hero: Hero;
  heroCtaLabel?: string;
  heroInterest: string;
  location: string;            // analytics location prefix, e.g. "community", "offplan", "guide"
  statsBand?: StatItem[];
  atAGlance?: { k: string; v: string }[];
  children: React.ReactNode;   // block body
  faqs: FaqItem[];
  faqHeading?: string;
  related?: RelatedLink[];
  cta: { heading: string; body?: string; interest: string };
  locale?: Locale;
  availableLocales?: Locale[];
}

export function PageShell(props: PageShellProps) {
  const { hero, breadcrumbs, statsBand, atAGlance, children, faqs, related, cta, heroInterest, location, locale = "en", availableLocales = ["en"] } = props;
  const t = UI[locale];
  const faqHeading = props.faqHeading ?? t.faqHeading;
  const heroCtaLabel = props.heroCtaLabel ?? t.registerInterest;

  const { formOpen, formInterest, openForm, closeForm } = useLeadForm(heroInterest);
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  useEffect(() => {
    setWaLink(waHref(WA_MESSAGE, window.location.href));
  }, []);

  return (
    <div className="bg-[#F4EEE2]" dir={dir(locale)} lang={locale}>
      <SiteHeader waLink={waLink} locale={locale} availableLocales={availableLocales} />

      {/* ── hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[74vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN hero */}
        <img src={hero.image} alt={hero.title} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: hero.imagePosition ?? "center" }} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.55) 0%, rgba(5,24,32,0.15) 40%, rgba(5,24,32,0.72) 100%)" }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 pb-16 sm:pb-24 pt-32">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-white/70">
            {breadcrumbs.map((b, i) => (
              <span key={b.href} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-white/40" />}
                {i < breadcrumbs.length - 1 ? <a href={b.href} className="hover:text-white transition-colors">{b.label}</a> : <span className="text-white/90">{b.label}</span>}
              </span>
            ))}
          </nav>
          <Eyebrow strong>{hero.eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.02] max-w-4xl [text-shadow:0_2px_24px_rgba(4,20,26,0.5)]">
            {hero.title}
            {hero.titleItalic && <span className="block italic text-[#F0D9A0] mt-1">{hero.titleItalic}</span>}
          </h1>
          <p className="mt-6 text-white/85 text-base sm:text-xl max-w-2xl leading-relaxed [text-shadow:0_1px_12px_rgba(4,20,26,0.6)]">{hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <GoldButton onClick={() => openForm(heroInterest, `${location}_hero`)} size="lg">{heroCtaLabel}</GoldButton>
            <GhostButton href={waLink} tone="light" size="lg" onClick={() => trackEvent("whatsapp_click", { location: `${location}_hero` })}>
              <MessageCircle className="h-4 w-4" /> {t.whatsappUs}
            </GhostButton>
          </div>
        </div>
      </section>

      {/* ── stat band (hubs) ─────────────────────────────────────────────── */}
      {statsBand && statsBand.length > 0 && (
        <section className="border-b border-[#0C2E35]/10 bg-[#EAE1D0] py-12 sm:py-14">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
            {statsBand.map((s, j) => (
              <Stat key={j} value={s.value} suffix={s.suffix} countTo={s.countTo} label={s.label} />
            ))}
          </div>
        </section>
      )}

      {/* ── at a glance (guides) ─────────────────────────────────────────── */}
      {atAGlance && atAGlance.length > 0 && (
        <section className="bg-[#F7F2EA] border-b border-[#0C2E35]/10 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Eyebrow dark>{t.atAGlance}</Eyebrow>
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {atAGlance.map((row, j) => (
                <div key={j} className="flex justify-between gap-4 border-b border-[#0C2E35]/10 pb-3">
                  <dt className="text-[#0C2E35]/55 text-sm">{row.k}</dt>
                  <dd className="text-[#0C2E35] text-sm font-medium text-right">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── block body ───────────────────────────────────────────────────── */}
      {children}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="bg-[#EAF0EF] py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-8">
              <Eyebrow dark>FAQ</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight">{faqHeading}</h2>
            </Reveal>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* ── related ──────────────────────────────────────────────────────── */}
      {related && related.length > 0 && (
        <section className="bg-[#F4EEE2] py-16 sm:py-20 border-t border-[#0C2E35]/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <Eyebrow dark>{t.keepReading}</Eyebrow>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <a key={r.href} href={r.href} className="group rounded-xl bg-white/70 border border-[#0C2E35]/8 p-6 hover:border-[#C9A26A]/50 transition-colors">
                  {r.kicker && <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-2">{r.kicker}</p>}
                  <p className="font-serif text-lg text-[#0C2E35] leading-snug flex items-center justify-between gap-2">
                    {r.label}
                    <ChevronRight className="h-4 w-4 text-[#C9A26A] flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA band ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#06232E] py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,106,0.16), transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight mb-5">{cta.heading}</h2>
          {cta.body && <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-9 max-w-xl mx-auto">{cta.body}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <GoldButton onClick={() => openForm(cta.interest, `${location}_final_cta`)} size="lg">{t.registerInterest}</GoldButton>
            <GhostButton href={waLink} tone="light" size="lg" onClick={() => trackEvent("whatsapp_click", { location: `${location}_final_cta` })}>
              <MessageCircle className="h-4 w-4" /> {t.whatsappUs}
            </GhostButton>
          </div>
        </div>
      </section>

      <SiteFooter waLink={waLink} locale={locale} />
      <FloatingWhatsApp waLink={waLink} locale={locale} />
      <LeadFormModal open={formOpen} onClose={closeForm} waLink={waLink} defaultInterest={formInterest} />
    </div>
  );
}
