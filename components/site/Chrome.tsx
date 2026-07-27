"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, Menu, X } from "lucide-react";
import { Shine } from "@/components/ui/kit";
import { trackEvent } from "@/lib/analytics";

// Real cross-page nav (content pages link to other routes, unlike the home
// page's single-scroll anchor nav).
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#residences", label: "Residences" },
  { href: "/communities/palm-jebel-ali", label: "Community" },
  { href: "/pulse/guides", label: "Guides" },
];

export function SiteHeader({ waLink }: { waLink: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let raf = 0;
    const update = () => { raf = 0; setScrolled(window.scrollY > 60); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A solid surface is needed whenever scrolled OR the mobile menu is open.
  const solid = scrolled || menuOpen;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "bg-[#F4EEE2]/95 backdrop-blur-md border-b border-[#0C2E35]/10 py-3" : "py-5"}`}>
      {!solid && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28" style={{ background: "linear-gradient(180deg, rgba(5,24,32,0.55), transparent)" }} />
      )}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-2">
          <span className={`font-serif text-lg sm:text-xl leading-none transition-colors ${solid ? "text-[#0C2E35]" : "text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]"}`}>Palm Jebel Ali</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] uppercase tracking-[0.15em] transition-colors ${scrolled ? "text-[#0C2E35]/70 hover:text-[#0C2E35]" : "text-white/90 hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="group relative overflow-hidden inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] text-[#06232E]"
            style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}
          >
            <MessageCircle className="h-3.5 w-3.5" /> Enquire
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

      {/* mobile dropdown */}
      {menuOpen && (
        <nav className="lg:hidden mt-3 border-t border-[#0C2E35]/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.14em] text-[#0C2E35]/80 hover:text-[#A8814A] border-b border-[#0C2E35]/5 last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

// Footer with cluster links for cross-linking + discovery.
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
];

export function SiteFooter({ waLink }: { waLink: string }) {
  return (
    <footer className="bg-[#EAE1D0] border-t border-[#0C2E35]/10 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-12">
          <div>
            <p className="font-serif text-2xl text-[#0C2E35] mb-3">Palm Jebel Ali</p>
            <p className="text-[#0C2E35]/60 text-sm max-w-sm leading-relaxed mb-5">
              An independent showcase for Nakheel&apos;s Palm Jebel Ali, curated by a Dubai brokerage tracking release phases directly.
            </p>
            <div className="flex gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#06232E]" style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}>
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a href="tel:+971549988811" onClick={() => trackEvent("call_click", { location: "footer" })} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-[#0C2E35] border border-[#0C2E35]/25 hover:border-[#0C2E35]/50 transition-colors">
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
            </div>
          </div>
          <FooterCol title="Residences" links={FOOTER_RESIDENCES} />
          <FooterCol title="Explore" links={FOOTER_HUBS} />
          <FooterCol title="Guides" links={FOOTER_GUIDES} />
        </div>
        <div className="pt-8 border-t border-[#0C2E35]/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-[#0C2E35]/45 text-xs leading-relaxed max-w-2xl">
            Palm Jebel Ali is a master development by Nakheel. Renders shown are illustrative concept imagery and subject to change. This is an independent showcase, not affiliated with or endorsed by Nakheel.
          </p>
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
          <li key={l.href}>
            <a href={l.href} className="text-sm text-[#0C2E35]/75 hover:text-[#A8814A] transition-colors">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
