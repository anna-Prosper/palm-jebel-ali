import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9 ()-]{7,20}$/;

const FROM = process.env.LEAD_FROM_EMAIL || "Palm Jebel Ali <hello@binayah.ae>";
const TO = process.env.LEAD_TO_EMAIL || "hello@binayah.ae";
const RESEND_KEY = process.env.RESEND_API_KEY;

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

  if (!RESEND_KEY) {
    console.error("[lead] RESEND_API_KEY missing — cannot send lead email");
    return NextResponse.json({ error: "Server not configured. Please WhatsApp us instead." }, { status: 500 });
  }

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

  try {
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
    if (!res.ok) {
      const detail = await res.text();
      console.error("[lead] Resend error", res.status, detail);
      return NextResponse.json({ error: "Could not send right now. Please WhatsApp us instead." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] send failed", err);
    return NextResponse.json({ error: "Could not send right now. Please WhatsApp us instead." }, { status: 502 });
  }
}
