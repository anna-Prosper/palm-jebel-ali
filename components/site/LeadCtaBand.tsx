"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { GoldButton, GhostButton } from "@/components/ui/kit";
import { LeadFormModal } from "@/components/LeadFormModal";
import { useLeadForm } from "@/components/site/useLeadForm";
import { waHref } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { UI, type Locale } from "@/lib/i18n";

const WA_MESSAGE = "Hi! I'd like the current release schedule and pricing for Palm Jebel Ali.";

// Reusable dark CTA band (form + WhatsApp) for pages that don't use PageShell
// (the residences / guides index pages).
export function LeadCtaBand({
  heading,
  body,
  interest = "General enquiry",
  location,
  locale = "en",
}: {
  heading: string;
  body?: string;
  interest?: string;
  location: string;
  locale?: Locale;
}) {
  const { formOpen, formInterest, openForm, closeForm } = useLeadForm(interest);
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  useEffect(() => setWaLink(waHref(WA_MESSAGE, window.location.href)), []);
  const ui = UI[locale];

  return (
    <section className="relative overflow-hidden bg-[#06232E] py-20 sm:py-28">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,106,0.16), transparent 60%)" }} />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight mb-5">{heading}</h2>
        {body && <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-9 max-w-xl mx-auto">{body}</p>}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <GoldButton onClick={() => openForm(interest, `${location}_cta`)} size="lg">{ui.registerInterest}</GoldButton>
          <GhostButton href={waLink} tone="light" size="lg" onClick={() => trackEvent("whatsapp_click", { location: `${location}_cta` })}>
            <MessageCircle className="h-4 w-4" /> {ui.whatsappUs}
          </GhostButton>
        </div>
      </div>
      <LeadFormModal open={formOpen} onClose={closeForm} waLink={waLink} defaultInterest={formInterest} />
    </section>
  );
}
