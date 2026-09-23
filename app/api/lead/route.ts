import { NextRequest, NextResponse } from "next/server";
import { hasDb, leadsCollection } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9 ()-]{7,20}$/;

const FROM = process.env.LEAD_FROM_EMAIL || "Palm Jebel Ali <hello@binayah.ae>";
const TO = process.env.LEAD_TO_EMAIL || "hello@binayah.ae";
const RESEND_KEY = process.env.RESEND_API_KEY;

// Leads go to the shared Binayah pipeline so they land in `inquiries` alongside
// every other form: encrypted at rest, in the admin dashboard, in the Leads API
// (/api/admin/leads) that external CRMs poll, and carrying status tracking and
// assignment. Before this, a Palm Jebel Ali enquiry existed only as an email and
// a row in pja_leads, invisible to all of that.
//
// `source` is surfaced by the leads federation as the lead's `channel`, so these
// stay filterable as palm-jebel-ali rather than blending into website traffic.
const LEADS_ENDPOINT =
  process.env.BINAYAH_INQUIRIES_URL || "https://binayah-api.onrender.com/api/inquiries";
const LEAD_SOURCE = "palm-jebel-ali";

async function postToSharedPipeline(payload: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // The shared API is on Render and can cold-start. Cap the wait so a slow
      // upstream can't hold the visitor's form submit open.
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[lead] shared pipeline rejected", res.status, (await res.text()).slice(0, 200));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[lead] shared pipeline unreachable", err);
    return false;
  }
}

function esc(s: string) {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot — bots fill the hidden "company" field. Fake success, drop silently.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const interest = String(body.interest || "General enquiry").trim().slice(0, 80);
  const message = String(body.message || "").trim().slice(0, 2000);
  const pageUrl = String(body.pageUrl || "").trim().slice(0, 300);

  if (!name || name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  if (!PHONE_RE.test(phone)) return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0C2E35;line-height:1.6">
      <h2 style="margin:0 0 12px;font-size:18px">New Palm Jebel Ali enquiry</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#6B7782">Name</td><td><strong>${esc(name)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7782">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7782">Phone</td><td><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6B7782">Interest</td><td>${esc(interest)}</td></tr>
        ${message ? `<tr><td style="padding:4px 12px 4px 0;color:#6B7782;vertical-align:top">Message</td><td>${esc(message)}</td></tr>` : ""}
        ${pageUrl ? `<tr><td style="padding:4px 12px 4px 0;color:#6B7782">Source</td><td><a href="${esc(pageUrl)}">${esc(pageUrl)}</a></td></tr>` : ""}
      </table>
    </div>`;

  const text = `New Palm Jebel Ali enquiry
Name: ${name}
Email: ${email}
Phone: ${phone}
Interest: ${interest}
${message ? `Message: ${message}\n` : ""}${pageUrl ? `Source: ${pageUrl}` : ""}`;

  const forwardedIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

  // Primary path. On success the shared pipeline owns notification, so the
  // Resend email below is skipped and nobody gets the same enquiry twice.
  const posted = await postToSharedPipeline({
    name,
    email,
    phone,
    message: message || interest,
    inquiryType: interest || "General enquiry",
    pageUrl,
    source: LEAD_SOURCE,
    referrer: req.headers.get("referer") || "",
    // Forwarded so the lead is attributed to the visitor rather than to this
    // serverless function, which would otherwise look like one repeat enquirer.
    clientIp: forwardedIp,
  });

  let emailed = false;
  let emailError = false;
  // Fallback only: if the shared pipeline is down, this email is the one thing
  // standing between a real enquiry and silence.
  if (posted || !RESEND_KEY) {
    if (!posted) console.error("[lead] shared pipeline failed and RESEND_API_KEY missing");
  } else try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Palm Jebel Ali enquiry — ${name}${interest ? ` (${interest})` : ""}`,
        html,
        text,
      }),
    });
    if (res.ok) emailed = true;
    else {
      emailError = true;
      console.error("[lead] Resend error", res.status, await res.text());
    }
  } catch (err) {
    emailError = true;
    console.error("[lead] send failed", err);
  }

  // Persist the lead regardless of email outcome so nothing is lost. Best-effort.
  if (hasDb()) {
    try {
      const col = await leadsCollection();
      await col.insertOne({
        name, email, phone, interest, message, pageUrl, emailed,
        // Did this reach the shared Binayah pipeline? A run of false here means
        // the microsite is silently diverging from the main lead system again.
        forwardedToPipeline: posted,
        ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
        userAgent: req.headers.get("user-agent")?.slice(0, 300) || undefined,
        createdAt: new Date(),
      });
    } catch (err) {
      console.error("[lead] db insert failed", err);
    }
  }

  // If the email failed but we stored the lead, still tell the user to use
  // WhatsApp — but the lead is safe in the admin dashboard.
  if (!posted && !emailed) {
    return NextResponse.json({ error: "Could not send right now. Please WhatsApp us instead." }, { status: 502 });
  }
  void emailError;
  return NextResponse.json({ ok: true });
}
