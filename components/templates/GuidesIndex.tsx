"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/site/Chrome";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Eyebrow, Reveal } from "@/components/ui/kit";
import { LeadCtaBand } from "@/components/site/LeadCtaBand";
import { waHref } from "@/lib/whatsapp";
import { GUIDES, GUIDE_SLUGS } from "@/lib/content/registry";
import { IMG } from "@/lib/content/palm-facts";

const WA_MESSAGE = "Hi! I'd like the current release schedule and pricing for Palm Jebel Ali.";

export function GuidesIndex() {
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  useEffect(() => setWaLink(waHref(WA_MESSAGE, window.location.href)), []);

  return (
    <div className="bg-[#F4EEE2] min-h-screen">
      <SiteHeader waLink={waLink} />

      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN hero */}
        <img src={IMG.oceanAerial} alt="Palm Jebel Ali guides" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.6) 0%, rgba(5,24,32,0.2) 45%, rgba(5,24,32,0.75) 100%)" }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 pb-14 sm:pb-20 pt-32">
          <Eyebrow strong>Pulse · Guides</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-6xl text-white leading-[1.03] max-w-3xl [text-shadow:0_2px_24px_rgba(4,20,26,0.5)]">
            Palm Jebel Ali, <span className="italic text-[#F0D9A0]">explained</span>
          </h1>
          <p className="mt-5 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed [text-shadow:0_1px_12px_rgba(4,20,26,0.6)]">
            Straight-talking guides to pricing, payment plans, handover, the villa collections and how the island stacks up.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_SLUGS.map((slug, i) => {
            const g = GUIDES[slug];
            return (
              <Reveal key={slug} delay={i * 60}>
                <a href={`/pulse/guides/${slug}`} className="group block h-full rounded-2xl overflow-hidden bg-white border border-[#0C2E35]/8 hover:border-[#C9A26A]/50 transition-colors">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN render */}
                    <img src={g.hero.image} alt={g.meta.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-2">{g.hero.eyebrow}</p>
                    <h2 className="font-serif text-xl text-[#0C2E35] leading-snug mb-2">{g.meta.title.split("|")[0].trim()}</h2>
                    <p className="text-[#0C2E35]/60 text-sm leading-relaxed line-clamp-3">{g.meta.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#A8814A]">
                      Read guide <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <LeadCtaBand
        heading="Still have questions?"
        body="Our Palm Jebel Ali team can send the current release schedule, pricing and floor plans — and answer anything the guides didn't."
        interest="General enquiry"
        location="guides_index"
      />

      <SiteFooter waLink={waLink} />
      <FloatingWhatsApp waLink={waLink} />
    </div>
  );
}
