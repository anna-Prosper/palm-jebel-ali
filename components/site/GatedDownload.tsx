"use client";

import { useEffect, useState } from "react";
import { Download, Check } from "lucide-react";
import { LeadFormModal } from "@/components/LeadFormModal";
import { useLeadForm } from "@/components/site/useLeadForm";
import { waHref } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const WA_MESSAGE = "Hi! I'd like the Palm Jebel Ali floor plans and current pricing.";

// A gated-download CTA card. The asset (floor plans / price list / brochure) is
// delivered by the team after the lead form is submitted — so no fake PDF, and
// a real file can be attached to the follow-up the moment one exists.
export function GatedDownload({
  heading,
  blurb,
  bullets,
  interest,
  buttonLabel = "Get the floor plans",
  note,
  location,
}: {
  heading: string;
  blurb?: string;
  bullets?: string[];
  interest: string;
  buttonLabel?: string;
  note?: string;
  location: string;
}) {
  const { formOpen, formInterest, openForm, closeForm } = useLeadForm(interest);
  const [waLink, setWaLink] = useState(() => waHref(WA_MESSAGE));
  useEffect(() => setWaLink(waHref(WA_MESSAGE, window.location.href)), []);

  return (
    <section className="relative overflow-hidden bg-[#06232E] py-16 sm:py-20">
      <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,106,0.16), transparent 60%)" }} />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl border border-[#C9A26A]/30 bg-white/[0.03] p-7 sm:p-10 text-center">
          <div className="mx-auto mb-5 h-12 w-12 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #E7C989, #A8814A)" }}>
            <Download className="h-5 w-5 text-[#06232E]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-3">{heading}</h2>
          {blurb && <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mb-6">{blurb}</p>}

          {bullets && bullets.length > 0 && (
            <ul className="inline-flex flex-col gap-2 text-left mb-8">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/80 text-sm">
                  <Check className="h-4 w-4 text-[#E7C989] flex-shrink-0 mt-0.5" />{b}
                </li>
              ))}
            </ul>
          )}

          <div>
            <button
              type="button"
              onClick={() => { trackEvent("download_request", { location, interest }); openForm(interest, location); }}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#06232E] transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)", boxShadow: "0 10px 30px -10px rgba(201,162,106,0.55)" }}
            >
              <Download className="h-4 w-4" /> {buttonLabel}
            </button>
          </div>

          {note && <p className="mt-5 text-white/45 text-xs leading-relaxed max-w-md mx-auto">{note}</p>}
        </div>
      </div>

      <LeadFormModal
        open={formOpen}
        onClose={closeForm}
        waLink={waLink}
        defaultInterest={formInterest}
        successTitle="On its way."
        successBody="Thanks — our Palm Jebel Ali team will email you the floor plans and current pricing shortly. Check your inbox (and spam, just in case)."
      />
    </section>
  );
}
