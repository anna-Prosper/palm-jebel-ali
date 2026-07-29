"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Eyebrow, Reveal } from "@/components/ui/kit";
import { waHref } from "@/lib/whatsapp";
import { COLLECTIONS, BEACH_DESIGNS, IMG } from "@/lib/content/palm-facts";

const WA_MESSAGE = "Hi! I'd like the current release schedule and pricing for Palm Jebel Ali.";

export function ResidencesIndex() {
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  useEffect(() => setWaLink(waHref(WA_MESSAGE, window.location.href)), []);

  return (
    <div className="bg-[#F4EEE2] min-h-screen">
      <SiteHeader waLink={waLink} />

      <section className="relative min-h-[54vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN hero */}
        <img src={IMG.heroAerial} alt="Palm Jebel Ali residences" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 55%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.6) 0%, rgba(5,24,32,0.2) 45%, rgba(5,24,32,0.78) 100%)" }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 pt-32">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-white/70">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="h-3 w-3 text-white/40" /><span className="text-white/90">Residences</span>
          </nav>
          <Eyebrow strong>The Residences</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-[1.03] max-w-3xl [text-shadow:0_2px_24px_rgba(4,20,26,0.5)]">
            Three collections, <span className="italic text-[#F0D9A0]">one coastline</span>
          </h1>
          <p className="mt-5 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed [text-shadow:0_1px_12px_rgba(4,20,26,0.6)]">
            From beachfront family villas to ultra-prime signature mansions and a connected resort-apartment district — every home Palm Jebel Ali offers, in one place.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <a href={c.href} className="group block h-full rounded-2xl overflow-hidden bg-white border border-[#0C2E35]/8 hover:border-[#C9A26A]/50 transition-colors flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN render */}
                  <img src={c.image} alt={`${c.name} at Palm Jebel Ali`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-1.5">{c.meta}</p>
                  <h2 className="font-serif text-xl text-[#0C2E35] mb-3">{c.name}</h2>
                  <ul className="space-y-2 mb-5 flex-1">
                    {c.facts.map((f, k) => (
                      <li key={k} className="text-[#0C2E35]/65 text-sm leading-relaxed flex gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-[#C9A26A] flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#0C2E35]/45">From <span className="font-serif text-lg text-[#0C2E35] normal-case tracking-normal">AED {c.priceFromAed}</span>
                    <span className="ml-2 inline-flex items-center gap-1 text-[#A8814A] normal-case tracking-normal">View <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F7F2EA] border-t border-[#0C2E35]/8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Eyebrow dark>Beach Collection designs</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight mb-8 max-w-2xl">Explore the individual villa designs</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {BEACH_DESIGNS.map((d) => (
              <a key={d.slug} href={`/residences/${d.slug}`} className="group rounded-xl bg-white border border-[#0C2E35]/8 p-6 hover:border-[#C9A26A]/50 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-1.5">{d.sqft} sqft · {d.architect}</p>
                <p className="font-serif text-xl text-[#0C2E35] leading-snug flex items-center justify-between gap-2">
                  {d.name}
                  <ChevronRight className="h-4 w-4 text-[#C9A26A] flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter waLink={waLink} />
      <FloatingWhatsApp waLink={waLink} />
    </div>
  );
}
