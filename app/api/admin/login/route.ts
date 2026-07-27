import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, expectedToken, isConfigured, passwordMatches } from "@/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isConfigured()) {
    return NextResponse.json({ error: "Admin is not configured." }, { status: 500 });
  }
  let password = "";
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const body = await req.json().catch(() => ({}));
    password = String(body?.password || "");
  } else {
    const form = await req.formData().catch(() => null);
    password = String(form?.get("password") || "");
  }

  if (!passwordMatches(password)) {
    // Redirect back with an error flag for the form-post path.
    const url = new URL("/admin?e=1", req.url);
    return NextResponse.redirect(url, { status: 303 });
  }

  const res = NextResponse.redirect(new URL("/admin", req.url), { status: 303 });
  res.cookies.set(ADMIN_COOKIE, expectedToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
