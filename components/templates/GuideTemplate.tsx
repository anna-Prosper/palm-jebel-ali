"use client";

import { PageShell } from "@/components/templates/PageShell";
import { BlockList } from "@/components/templates/Blocks";
import type { GuideContent } from "@/lib/content/types";

// Editorial long-form guide — narrower reading measure, "at a glance" rail,
// prose sections with pull-quotes, FAQ, related guides.
export function GuideTemplate({ content, breadcrumbs }: { content: GuideContent; breadcrumbs: { href: string; label: string }[] }) {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      hero={content.hero}
      heroCtaLabel="Talk to our team"
      heroInterest={content.cta.interest}
      location="guide"
      atAGlance={content.atAGlance}
      faqs={content.faqs}
      related={content.related}
      cta={content.cta}
    >
      <BlockList blocks={content.blocks} reading />
    </PageShell>
  );
}
