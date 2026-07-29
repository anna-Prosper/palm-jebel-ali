"use client";

import { Reveal, Eyebrow, SectionBg, Stat } from "@/components/ui/kit";
import { GatedDownload } from "@/components/site/GatedDownload";
import { COLLECTIONS, type Collection } from "@/lib/content/palm-facts";
import type { Block } from "@/lib/content/types";

// Light section tones cycled for rhythm between blocks.
const TONES = ["bg-[#F4EEE2]", "bg-[#F7F2EA]", "bg-[#E4EDEB]"];

export function BlockList({ blocks, reading = false }: { blocks: Block[]; reading?: boolean }) {
  let lightIndex = 0;
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "connectivity") return <ConnectivityBlock key={i} block={block} />;
        if (block.kind === "download")
          return (
            <GatedDownload
              key={i}
              heading={block.heading}
              blurb={block.blurb}
              bullets={block.bullets}
              interest={block.interest}
              buttonLabel={block.buttonLabel}
              note={block.note}
              location="floor_plans_gate"
            />
          );
        const tone = TONES[lightIndex % TONES.length];
        lightIndex++;
        return (
          <section key={i} className={`relative overflow-hidden ${tone} py-16 sm:py-24`}>
            <div className={`mx-auto px-5 sm:px-8 ${reading ? "max-w-3xl" : "max-w-6xl"}`}>
              <BlockBody block={block} />
            </div>
          </section>
        );
      })}
    </>
  );
}

function BlockBody({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <Reveal>
          {block.heading && <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight mb-6">{block.heading}</h2>}
          <div className="space-y-5">
            {block.body.map((p, j) => (
              <p key={j} className="text-[#0C2E35]/75 text-base sm:text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </Reveal>
      );

    case "stats":
      return (
        <Reveal>
          {block.heading && <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight mb-10 text-center">{block.heading}</h2>}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6">
            {block.items.map((s, j) => (
              <Stat key={j} value={s.value} suffix={s.suffix} countTo={s.countTo} label={s.label} />
            ))}
          </div>
        </Reveal>
      );

    case "cards": {
      const cols = block.columns === 2 ? "sm:grid-cols-2" : block.columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
      return (
        <div>
          {(block.heading || block.intro) && (
            <Reveal className="max-w-2xl mb-10">
              {block.heading && <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight">{block.heading}</h2>}
              {block.intro && <p className="mt-4 text-[#0C2E35]/70 text-base sm:text-lg leading-relaxed">{block.intro}</p>}
            </Reveal>
          )}
          <div className={`grid gap-5 ${cols}`}>
            {block.items.map((c, j) => (
              <Reveal key={j} delay={j * 60}>
                <div className="h-full rounded-2xl bg-white/70 border border-[#0C2E35]/8 p-6 sm:p-7">
                  {c.meta && <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-2">{c.meta}</p>}
                  <h3 className="font-serif text-xl text-[#0C2E35] mb-2.5 leading-snug">{c.title}</h3>
                  <p className="text-[#0C2E35]/65 text-sm leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );
    }

    case "steps":
      return (
        <div>
          {(block.heading || block.intro) && (
            <Reveal className="max-w-2xl mb-10">
              {block.heading && <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight">{block.heading}</h2>}
              {block.intro && <p className="mt-4 text-[#0C2E35]/70 text-base sm:text-lg leading-relaxed">{block.intro}</p>}
            </Reveal>
          )}
          <div className="space-y-4">
            {block.items.map((s, j) => (
              <Reveal key={j} delay={j * 60}>
                <div className="flex gap-5 rounded-2xl bg-white/60 border border-[#0C2E35]/8 p-6">
                  <span className="font-serif text-3xl text-[#C9A26A] leading-none w-10 flex-shrink-0">{String(j + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-xl text-[#0C2E35] mb-1.5">{s.title}</h3>
                    <p className="text-[#0C2E35]/65 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "collections":
      return <CollectionsBody heading={block.heading} intro={block.intro} items={block.items ?? COLLECTIONS} />;

    case "pullquote":
      return (
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-2xl sm:text-3xl text-[#0C2E35] leading-snug">
            <span className="text-[#C9A26A]">“</span>{block.text}<span className="text-[#C9A26A]">”</span>
          </p>
        </Reveal>
      );

    default:
      return null;
  }
}

function CollectionsBody({ heading, intro, items }: { heading?: string; intro?: string; items: Collection[] }) {
  return (
    <div>
      {(heading || intro) && (
        <Reveal className="max-w-2xl mb-10">
          {heading && <h2 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight">{heading}</h2>}
          {intro && <p className="mt-4 text-[#0C2E35]/70 text-base sm:text-lg leading-relaxed">{intro}</p>}
        </Reveal>
      )}
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((c, j) => {
          const Wrapper = c.href ? "a" : "div";
          return (
            <Reveal key={c.key} delay={j * 80}>
              <Wrapper
                {...(c.href ? { href: c.href } : {})}
                className={`group block h-full rounded-2xl overflow-hidden bg-white border border-[#0C2E35]/8 flex flex-col ${c.href ? "hover:border-[#C9A26A]/50 transition-colors" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN render */}
                  <img src={c.image} alt={`${c.name} at Palm Jebel Ali`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#A8814A] mb-1.5">{c.meta}</p>
                  <h3 className="font-serif text-xl text-[#0C2E35] mb-3">{c.name}</h3>
                  <ul className="space-y-2 mb-5 flex-1">
                    {c.facts.map((f, k) => (
                      <li key={k} className="text-[#0C2E35]/65 text-sm leading-relaxed flex gap-2">
                        <span className="text-[#C9A26A] mt-1.5 h-1 w-1 rounded-full bg-[#C9A26A] flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#0C2E35]/45">From <span className="font-serif text-lg text-[#0C2E35] normal-case tracking-normal">AED {c.priceFromAed}</span>{c.href && <span className="ml-2 text-[#A8814A] normal-case tracking-normal">· View →</span>}</p>
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function ConnectivityBlock({ block }: { block: Extract<Block, { kind: "connectivity" }> }) {
  return (
    <section className="relative overflow-hidden bg-[#06232E] py-20 sm:py-28">
      <SectionBg src={block.image} opacity={0.98} top={0.5} bottom={0.42} />
      {/* Full-bleed left-darkening scrim (no boxed edges) so the copy stays
          legible while the ocean breathes on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(6,35,46,0.88) 0%, rgba(6,35,46,0.55) 42%, rgba(6,35,46,0.12) 80%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl">
          {block.heading && <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-5">{block.heading}</h2>}
          {block.intro && <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">{block.intro}</p>}
          <div className="space-y-3.5">
            {block.rows.map((r, j) => (
              <div key={j} className="flex items-baseline gap-3 sm:gap-4">
                <span className="text-white text-[15px] sm:text-2xl [text-shadow:0_1px_10px_rgba(4,20,26,0.6)]">{r.place}</span>
                <span className="flex-1 min-w-[1.5rem] border-b border-dotted border-white/25 translate-y-[-4px]" />
                <span className="font-serif text-xl sm:text-3xl leading-none whitespace-nowrap text-[#F0D9A0] [text-shadow:0_2px_14px_rgba(4,20,26,0.75)]">{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
