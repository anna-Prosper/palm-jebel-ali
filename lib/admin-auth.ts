import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "pja_admin";
const PASSWORD = process.env.ADMIN_PASSWORD || "";

// The cookie stores an HMAC of a fixed marker keyed by the admin password —
// so the plaintext password is never persisted in the browser, and rotating
// ADMIN_PASSWORD instantly invalidates every existing session.
export function expectedToken(): string {
  return createHmac("sha256", PASSWORD || "unset").update("palm-jebel-ali-admin").digest("hex");
}

export function isConfigured(): boolean {
  return PASSWORD.length > 0;
}

export function passwordMatches(candidate: string): boolean {
  if (!PASSWORD) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(PASSWORD);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAuthed(): Promise<boolean> {
  if (!PASSWORD) return false;
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE)?.value;
  if (!token) return false;
  const expected = expectedToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
