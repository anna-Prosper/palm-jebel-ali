"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Menu, X, Globe, ChevronDown, ChevronRight } from "lucide-react";
import { Shine } from "@/components/ui/kit";
import { trackEvent } from "@/lib/analytics";
import { UI, localePath, type Locale } from "@/lib/i18n";
import { IMG } from "@/lib/content/palm-facts";

type NavKey = keyof (typeof UI)["en"]["nav"];
type MenuLink = { href: string; label: string; desc: string };
type Featured = { img: string; eyebrow: string; title: string; href: string };
type NavItem =
  | { kind: "link"; navKey: NavKey; href: string }
  | { kind: "menu"; id: string; navKey: NavKey; links: MenuLink[]; featured: Featured };

// Top-level triggers are localized via UI[locale].nav; sub-link labels stay in
// English (proper page names), matching the footer. hrefs are locale-prefixed.
const MENU: NavItem[] = [
  {
    kind: "menu", id: "residences", navKey: "residences",
    featured: { img: IMG.coral, eyebrow: "Signature", title: "The Coral Collection", href: "/residences/coral-collection" },
    links: [
      { href: "/residences/beach-collection", label: "The Beach Collection", desc: "5–6 bed beachfront villas" },
      { href: "/residences/coral-collection", label: "The Coral Collection", desc: "7-bed signature mansions" },
      { href: "/residences/palm-central", label: "Palm Central Residences", desc: "1–5 bed apartments & townhouses" },
      { href: "/residences", label: "All residences", desc: "Browse every collection" },
    ],
  },
  {
    kind: "menu", id: "buy", navKey: "buy",
    featured: { img: IMG.heroAerial, eyebrow: "The island", title: "Community overview", href: "/communities/palm-jebel-ali" },
    links: [
      { href: "/buy-property-in/palm-jebel-ali", label: "Buy", desc: "Ownership, pricing & freehold" },
      { href: "/off-plan-in/palm-jebel-ali", label: "Off-plan", desc: "Launches, 80/20 plans & handover" },
      { href: "/rent-property-in/palm-jebel-ali", label: "Rent", desc: "Future rental & yield outlook" },
      { href: "/communities/palm-jebel-ali", label: "Community overview", desc: "The island at a glance" },
    ],
  },
  {
    kind: "menu", id: "guides", navKey: "guides",
    featured: { img: IMG.gInvestor, eyebrow: "Start here", title: "Investor guide", href: "/pulse/guides/palm-jebel-ali-investor-guide" },
    links: [
      { href: "/pulse/guides/palm-jebel-ali-prices", label: "Prices", desc: "What every collection costs" },
      { href: "/pulse/guides/palm-jebel-ali-payment-plans", label: "Payment plans", desc: "How the 80/20 works" },
      { href: "/pulse/guides/palm-jebel-ali-golden-visa", label: "Golden Visa", desc: "10-year residency" },
      { href: "/pulse/guides", label: "All guides", desc: "Every guide →" },
    ],
  },
];

// Strip any /ar|/ru prefix from the current path to get the base path.
function basePath(pathname: string): string {
  const m = pathname.match(/^\/(ar|ru)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
}

function LangSwitcher({ available, current }: { available: Locale[]; current: Locale }) {
  const pathname = usePathname() || "/";
  const base = basePath(pathname);
  if (available.length < 2) return null;
  return (
    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em]">
      <Globe className="h-3.5 w-3.5 opacity-70" />
      {available.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-30">·</span>}
          <a href={localePath(l, base)} aria-current={l === current ? "true" : undefined} className={l === current ? "font-semibold" : "opacity-70 hover:opacity-100"}>
            {l.toUpperCase()}
          </a>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader({ waLink, locale = "en", availableLocales = ["en"] }: { waLink: string; locale?: Locale; availableLocales?: Locale[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = UI[locale];
  const lp = (href: string) => localePath(locale, href);

  useEffect(() => {
    let raf = 0;
    const update = () => { raf = 0; setScrolled(window.scrollY > 60); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpenId(null); setMenuOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  const open = (id: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenId(id); };
  const scheduleClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpenId(null), 140); };

  const solid = scrolled || menuOpen || openId !== null;
  const active = MENU.find((m) => m.kind === "menu" && m.id === openId) as Extract<NavItem, { kind: "menu" }> | undefined;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "bg-[#F4EEE2]/95 backdrop-blur-md border-b border-[#0C2E35]/10 py-3" : "py-5"}`}>
      {!solid && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.55), transparent)" }} />
      )}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href={lp("/")} className="flex items-baseline gap-2">
          <span className={`font-serif text-lg sm:text-xl leading-none transition-colors ${solid ? "text-[#0C2E35]" : "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"}`}>Palm Jebel Ali</span>
        </a>

        {/* Desktop mega-menu */}
        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={scheduleClose}>
          {MENU.map((item) => {
            if (item.kind === "link") {
              return (
                <a key={item.navKey} href={lp(item.href)} className={`px-3 py-2 text-[11px] uppercase tracking-[0.15em] transition-colors ${solid ? "text-[#0C2E35]/70 hover:text-[#0C2E35]" : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"}`}>
                  {t.nav[item.navKey]}
                </a>
              );
            }
            const isOpen = openId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => open(item.id)}
                onFocus={() => open(item.id)}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className={`inline-flex items-center gap-1 px-3 py-2 text-[11px] uppercase tracking-[0.15em] transition-colors ${isOpen ? "text-[#A8814A]" : solid ? "text-[#0C2E35]/70 hover:text-[#0C2E35]" : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"}`}
              >
                {t.nav[item.navKey]}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#A8814A]" : ""}`} />
              </button>
            );
          })}

          {/* Shared dropdown panel */}
          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 ${active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
            onMouseEnter={() => active && open(active.id)}
            onMouseLeave={scheduleClose}
          >
            <div className="pt-4">
              {active && (
                <div className="w-[660px] max-w-[92vw] overflow-hidden rounded-2xl border border-[#0C2E35]/10 bg-[#F4EEE2] shadow-[0_30px_70px_-24px_rgba(12,46,53,0.55)] grid grid-cols-[0.85fr_1.15fr]">
                  <a href={lp(active.featured.href)} className="relative hidden sm:block group overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element -- external S3 CDN image */}
                    <img src={active.featured.img} alt={active.featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,35,46,0.15) 0%, rgba(6,35,46,0.55) 60%, rgba(6,35,46,0.85) 100%)" }} />
                    <div className="relative h-full min-h-[220px] flex flex-col justify-end p-5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#E7C989] mb-1">{active.featured.eyebrow}</p>
                      <p className="font-serif text-xl text-white leading-snug">{active.featured.title}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.12em] text-white/85">Explore <ChevronRight className="h-3 w-3" /></span>
                    </div>
                  </a>
                  <div className="p-3">
                    {active.links.map((link) => (
                      <a key={link.href} href={lp(link.href)} onClick={() => setOpenId(null)} className="group block rounded-xl px-4 py-3 transition-colors hover:bg-[#0C2E35]/[0.05]">
                        <span className="flex items-center justify-between">
                          <span className="font-serif text-[15px] text-[#0C2E35]">{link.label}</span>
                          <ChevronRight className="h-3.5 w-3.5 text-[#A8814A] opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                        </span>
                        <span className="block text-xs text-[#0C2E35]/55 mt-0.5">{link.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className={`flex items-center gap-2 ${solid ? "text-[#0C2E35]" : "text-white"}`}>
          <div className="hidden sm:block"><LangSwitcher available={availableLocales} current={locale} /></div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="group relative overflow-hidden inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#06232E]"
            style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}
          >
            <MessageCircle className="h-3.5 w-3.5" /> {t.enquire}
            <Shine />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full transition-colors ${solid ? "text-[#0C2E35] hover:bg-[#0C2E35]/5" : "text-white"}`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — sections expanded */}
      {menuOpen && (
        <nav className="lg:hidden mt-3 border-t border-[#0C2E35]/10 max-h-[75vh] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col gap-5">
            {MENU.map((item) =>
              item.kind === "link" ? (
                <a key={item.navKey} href={lp(item.href)} onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-[0.14em] text-[#0C2E35]/80 hover:text-[#A8814A]">
                  {t.nav[item.navKey]}
                </a>
              ) : (
                <div key={item.id}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#A8814A] mb-2">{t.nav[item.navKey]}</p>
                  <div className="flex flex-col">
                    {item.links.map((link) => (
                      <a key={link.href} href={lp(link.href)} onClick={() => setMenuOpen(false)} className="flex items-center justify-between py-2.5 border-b border-[#0C2E35]/5 last:border-0 group">
                        <span className="text-[15px] text-[#0C2E35]/85 group-hover:text-[#A8814A] transition-colors">{link.label}</span>
                        <ChevronRight className="h-4 w-4 text-[#0C2E35]/30" />
                      </a>
                    ))}
                  </div>
                </div>
              )
            )}
            <div className="pt-2 text-[#0C2E35]/80"><LangSwitcher available={availableLocales} current={locale} /></div>
          </div>
        </nav>
      )}
    </header>
  );
}

const FOOTER_GUIDES = [
  { href: "/pulse/guides/palm-jebel-ali-investor-guide", label: "Investor guide" },
  { href: "/pulse/guides/palm-jebel-ali-payment-plans", label: "Payment plans" },
  { href: "/pulse/guides/palm-jebel-ali-vs-palm-jumeirah", label: "vs Palm Jumeirah" },
  { href: "/pulse/guides/palm-jebel-ali-villas", label: "Villas" },
];
const FOOTER_HUBS = [
  { href: "/communities/palm-jebel-ali", label: "Community overview" },
  { href: "/buy-property-in/palm-jebel-ali", label: "Buy" },
  { href: "/off-plan-in/palm-jebel-ali", label: "Off-plan" },
  { href: "/rent-property-in/palm-jebel-ali", label: "Rent" },
];
const FOOTER_RESIDENCES = [
  { href: "/residences/beach-collection", label: "The Beach Collection" },
  { href: "/residences/coral-collection", label: "The Coral Collection" },
  { href: "/residences/palm-central", label: "Palm Central Residences" },
  { href: "/residences", label: "All residences →" },
];

export function SiteFooter({ waLink, locale = "en" }: { waLink: string; locale?: Locale }) {
  const t = UI[locale];
  // Footer links stay pointed at the English canonical pages (many aren't
  // translated yet); labels stay English for those specific page names.
  return (
    <footer className="bg-[#EAE1D0] border-t border-[#0C2E35]/10 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-12">
          <div>
            <p className="font-serif text-2xl text-[#0C2E35] mb-3">Palm Jebel Ali</p>
            <p className="text-[#0C2E35]/60 text-sm max-w-sm leading-relaxed mb-5">{t.footer.blurb}</p>
            <div className="flex gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#06232E]" style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}>
                <MessageCircle className="h-3.5 w-3.5" /> {t.whatsapp}
              </a>
              <a href="tel:+971549988811" onClick={() => trackEvent("call_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#0C2E35] border border-[#0C2E35]/25 hover:border-[#0C2E35]/50 transition-colors">
                <Phone className="h-3.5 w-3.5" /> {t.call}
              </a>
            </div>
          </div>
          <FooterCol title={t.footer.residences} links={FOOTER_RESIDENCES} />
          <FooterCol title={t.footer.explore} links={FOOTER_HUBS} />
          <FooterCol title={t.footer.guides} links={FOOTER_GUIDES} />
        </div>
        <div className="pt-8 border-t border-[#0C2E35]/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[#0C2E35]/45 text-xs leading-relaxed max-w-2xl">{t.footer.disclaimer}</p>
          <p className="text-[#0C2E35]/45 text-xs whitespace-nowrap">© 2026 Palm Jebel Ali Showcase</p>
        </div>
      </div>
    </footer>
  );
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
