import type { HubContent, GuideContent } from "@/lib/content/types";
import { communityPalmJebelAli } from "@/lib/content/communities/palm-jebel-ali";
import { offplanPalmJebelAli } from "@/lib/content/intent/offplan-palm-jebel-ali";
import { buyPalmJebelAli } from "@/lib/content/intent/buy-palm-jebel-ali";
import { rentPalmJebelAli } from "@/lib/content/intent/rent-palm-jebel-ali";

import { beachCollection } from "@/lib/content/residences/beach-collection";
import { coralCollection } from "@/lib/content/residences/coral-collection";
import { palmCentral } from "@/lib/content/residences/palm-central";

import { investorGuide } from "@/lib/content/guides/palm-jebel-ali-investor-guide";
import { vsPalmJumeirah } from "@/lib/content/guides/palm-jebel-ali-vs-palm-jumeirah";
import { paymentPlans } from "@/lib/content/guides/palm-jebel-ali-payment-plans";
import { handoverTimeline } from "@/lib/content/guides/palm-jebel-ali-handover-timeline";
import { masterplan } from "@/lib/content/guides/palm-jebel-ali-masterplan";
import { villas } from "@/lib/content/guides/palm-jebel-ali-villas";
import { goldenVisa } from "@/lib/content/guides/palm-jebel-ali-golden-visa";
import { location } from "@/lib/content/guides/palm-jebel-ali-location";
import { rentalYield } from "@/lib/content/guides/palm-jebel-ali-rental-yield";
import { vsDubaiIslands } from "@/lib/content/guides/palm-jebel-ali-vs-dubai-islands";
import { developer } from "@/lib/content/guides/nakheel-palm-jebel-ali-developer";
import { floorPlans } from "@/lib/content/guides/palm-jebel-ali-floor-plans";
import { serviceCharges } from "@/lib/content/guides/palm-jebel-ali-service-charges";
import { mortgage } from "@/lib/content/guides/palm-jebel-ali-mortgage";
import { resale } from "@/lib/content/guides/palm-jebel-ali-resale";
import { vsEmaarBeachfront } from "@/lib/content/guides/palm-jebel-ali-vs-emaar-beachfront";

// Slug → content maps. The [slug] routes and sitemap read from these.

export const COMMUNITIES: Record<string, HubContent> = {
  "palm-jebel-ali": communityPalmJebelAli,
};

// Dedicated collection landing pages.
export const RESIDENCES: Record<string, HubContent> = {
  "beach-collection": beachCollection,
  "coral-collection": coralCollection,
  "palm-central": palmCentral,
};

export const INTENT_BUY: Record<string, HubContent> = {
  "palm-jebel-ali": buyPalmJebelAli,
};
export const INTENT_RENT: Record<string, HubContent> = {
  "palm-jebel-ali": rentPalmJebelAli,
};
export const INTENT_OFFPLAN: Record<string, HubContent> = {
  "palm-jebel-ali": offplanPalmJebelAli,
};

// Ordered so the guides index reads as a deliberate cluster.
export const GUIDES: Record<string, GuideContent> = {
  "palm-jebel-ali-investor-guide": investorGuide,
  "palm-jebel-ali-vs-palm-jumeirah": vsPalmJumeirah,
  "palm-jebel-ali-payment-plans": paymentPlans,
  "palm-jebel-ali-handover-timeline": handoverTimeline,
  "palm-jebel-ali-masterplan": masterplan,
  "palm-jebel-ali-villas": villas,
  "palm-jebel-ali-golden-visa": goldenVisa,
  "palm-jebel-ali-location": location,
  "palm-jebel-ali-rental-yield": rentalYield,
  "palm-jebel-ali-vs-dubai-islands": vsDubaiIslands,
  "nakheel-palm-jebel-ali-developer": developer,
  "palm-jebel-ali-floor-plans": floorPlans,
  "palm-jebel-ali-service-charges": serviceCharges,
  "palm-jebel-ali-mortgage": mortgage,
  "palm-jebel-ali-resale": resale,
  "palm-jebel-ali-vs-emaar-beachfront": vsEmaarBeachfront,
};

export const GUIDE_SLUGS = Object.keys(GUIDES);
