import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// TEMPORARY diagnostic — remove after verifying the admin dashboard.
export async function GET() {
  try {
    const db = await getDb();
    const n = await db.collection("events").estimatedDocumentCount();
    return NextResponse.json({ ok: true, events: n });
  } catch (err) {
    return NextResponse.json(
      { ok: false, name: err instanceof Error ? err.name : "unknown", message: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
