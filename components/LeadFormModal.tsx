"use client";

import { useEffect, useState } from "react";
import { X, Check, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const INTERESTS = [
  "General enquiry",
  "The Beach Collection",
  "The Coral Collection",
  "Palm Central Private Residences",
  "Investment / payment plans",
];

export function LeadFormModal({
  open,
  onClose,
  waLink,
  defaultInterest = "General enquiry",
}: {
  open: boolean;
  onClose: () => void;
  waLink: string;
  defaultInterest?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  // Lock scroll + close on Esc while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  // Reset to a fresh form each time it re-opens.
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, pageUrl: typeof window !== "undefined" ? window.location.href : "" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      trackEvent("form_submit", { interest: String(data.interest || "") });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      trackEvent("form_error", {});
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="Register your interest">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-[#06232E]/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-lg rounded-2xl bg-[#F7F2EA] shadow-2xl ring-1 ring-[#0C2E35]/10 overflow-hidden">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full flex items-center justify-center text-[#0C2E35]/60 hover:text-[#0C2E35] hover:bg-[#0C2E35]/5 transition-colors">
          <X className="h-5 w-5" />
        </button>

        {status === "done" ? (
          <div className="px-7 sm:px-10 py-14 text-center">
            <div className="mx-auto mb-6 h-14 w-14 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #E7C989, #A8814A)" }}>
              <Check className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-serif text-3xl text-[#0C2E35] mb-3">Thank you.</h3>
            <p className="text-[#0C2E35]/65 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
              Your enquiry is with our Palm Jebel Ali team. We&apos;ll be in touch shortly with the current release schedule and pricing.
            </p>
            <button onClick={onClose} className="mt-8 text-[11px] uppercase tracking-[0.14em] text-[#A8814A] hover:text-[#0C2E35] transition-colors">Close</button>
          </div>
        ) : (
          <div className="px-7 sm:px-10 py-9 sm:py-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-7 bg-[#A8814A]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A8814A]">Register your interest</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0C2E35] leading-tight mb-6">Request pricing &amp; availability</h3>

            <form onSubmit={onSubmit} className="space-y-4">
              {/* honeypot — hidden from humans */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" type="text" autoComplete="name" required />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
              <Field label="Email" name="email" type="email" autoComplete="email" required />

              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-[#0C2E35]/55 mb-1.5">I&apos;m interested in</span>
                <select name="interest" defaultValue={defaultInterest} className="w-full rounded-lg border border-[#0C2E35]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#0C2E35] focus:outline-none focus:border-[#A8814A] focus:ring-2 focus:ring-[#A8814A]/20 transition">
                  {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-[#0C2E35]/55 mb-1.5">Message <span className="normal-case tracking-normal text-[#0C2E35]/35">(optional)</span></span>
                <textarea name="message" rows={3} className="w-full rounded-lg border border-[#0C2E35]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#0C2E35] focus:outline-none focus:border-[#A8814A] focus:ring-2 focus:ring-[#A8814A]/20 transition resize-none" />
              </label>

              {status === "error" && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#06232E] disabled:opacity-60 transition-transform hover:scale-[1.01]"
                style={{ background: "linear-gradient(to right, #E7C989, #C9A26A 55%, #A8814A)" }}
              >
                {status === "sending" ? "Sending…" : "Submit enquiry"}
              </button>

              <div className="flex items-center gap-3 pt-1">
                <span className="h-px flex-1 bg-[#0C2E35]/10" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#0C2E35]/40">or</span>
                <span className="h-px flex-1 bg-[#0C2E35]/10" />
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "form_modal" })}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0C2E35] border border-[#0C2E35]/25 hover:border-[#0C2E35]/50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type, autoComplete, required }: { label: string; name: string; type: string; autoComplete?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-[#0C2E35]/55 mb-1.5">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-[#0C2E35]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#0C2E35] focus:outline-none focus:border-[#A8814A] focus:ring-2 focus:ring-[#A8814A]/20 transition"
      />
    </label>
  );
}
