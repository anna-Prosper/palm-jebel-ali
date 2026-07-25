import { track as vercelTrack } from "@vercel/analytics";

type Props = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire a conversion/interaction event to whatever analytics are wired:
 * Vercel Web Analytics (always, no-op if not enabled) + GA4 (if
 * NEXT_PUBLIC_GA_ID is set and gtag has loaded).
 */
export function trackEvent(name: string, props: Props = {}) {
  try {
    vercelTrack(name, props);
  } catch {
    /* analytics disabled — ignore */
  }
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }
}
