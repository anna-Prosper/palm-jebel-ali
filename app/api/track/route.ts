import { NextRequest, NextResponse } from "next/server";
import { eventsCollection, hasDb } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort event beacon. The client fires this alongside Vercel Analytics /
// GA so we keep our own queryable copy for the admin dashboard. Never blocks
// or errors visibly — analytics must never break the page.
export async function POST(req: NextRequest) {
  if (!hasDb()) return NextResponse.json({ ok: true });
  try {
    const body = await req.json().catch(() => ({}));
    const name = String(body?.name || "").trim().slice(0, 80);
    if (!name) return NextResponse.json({ ok: true });

    const props = body?.props && typeof body.props === "object" ? body.props : {};
    // Trim props to a sane size.
    const safeProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(props).slice(0, 20)) {
      safeProps[String(k).slice(0, 40)] = typeof v === "string" ? v.slice(0, 200) : v;
    }

    const col = await eventsCollection();
    await col.insertOne({
      name,
      props: safeProps,
      pageUrl: String(body?.pageUrl || "").slice(0, 300),
      referrer: String(body?.referrer || "").slice(0, 300),
      ip: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
      userAgent: req.headers.get("user-agent")?.slice(0, 300) || undefined,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error("[track] failed", err);
  }
  return NextResponse.json({ ok: true });
}
