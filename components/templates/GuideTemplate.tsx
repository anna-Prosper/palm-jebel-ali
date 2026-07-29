"use client";

import { PageShell } from "@/components/templates/PageShell";
import { BlockList } from "@/components/templates/Blocks";
import type { GuideContent } from "@/lib/content/types";
import { UI, type Locale } from "@/lib/i18n";

// Editorial long-form guide — narrower reading measure, "at a glance" rail,
// prose sections with pull-quotes, FAQ, related guides.
export function GuideTemplate({ content, breadcrumbs, locale = "en", availableLocales = ["en"] }: { content: GuideContent; breadcrumbs: { href: string; label: string }[]; locale?: Locale; availableLocales?: Locale[] }) {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      hero={content.hero}
      heroCtaLabel={UI[locale].talkToTeam}
      heroInterest={content.cta.interest}
      location="guide"
      atAGlance={content.atAGlance}
      faqs={content.faqs}
      related={content.related}
      cta={content.cta}
      locale={locale}
      availableLocales={availableLocales}
    >
      <BlockList blocks={content.blocks} reading locale={locale} />
    </PageShell>
  );
}
