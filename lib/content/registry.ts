import type { HubContent, GuideContent } from "@/lib/content/types";
import { communityPalmJebelAli } from "@/lib/content/communities/palm-jebel-ali";
import { offplanPalmJebelAli } from "@/lib/content/intent/offplan-palm-jebel-ali";
import { investorGuide } from "@/lib/content/guides/palm-jebel-ali-investor-guide";

// Slug → content maps. Phase 2 adds the remaining hubs and guides here; the
// [slug] routes and sitemap read from these registries.

export const COMMUNITIES: Record<string, HubContent> = {
  "palm-jebel-ali": communityPalmJebelAli,
};

export const INTENT_BUY: Record<string, HubContent> = {};
export const INTENT_RENT: Record<string, HubContent> = {};
export const INTENT_OFFPLAN: Record<string, HubContent> = {
  "palm-jebel-ali": offplanPalmJebelAli,
};

export const GUIDES: Record<string, GuideContent> = {
  "palm-jebel-ali-investor-guide": investorGuide,
};

// Ordered list for the guides index + sitemap.
export const GUIDE_SLUGS = Object.keys(GUIDES);
