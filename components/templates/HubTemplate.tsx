"use client";

import { PageShell } from "@/components/templates/PageShell";
import { BlockList } from "@/components/templates/Blocks";
import type { HubContent } from "@/lib/content/types";

// Drives both the community hub and the buy/rent/off-plan intent hubs — the
// visual difference between them comes from the blocks each page defines, not
// from separate layout code.
export function HubTemplate({ content, location, breadcrumbs }: { content: HubContent; location: string; breadcrumbs: { href: string; label: string }[] }) {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      hero={content.hero}
      heroInterest={content.cta.interest}
      location={location}
      statsBand={content.stats}
      faqs={content.faqs}
      related={content.related}
      cta={content.cta}
    >
      <BlockList blocks={content.blocks} />
    </PageShell>
  );
}
