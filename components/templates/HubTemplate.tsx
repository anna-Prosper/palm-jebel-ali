"use client";

import { PageShell } from "@/components/templates/PageShell";
import { BlockList } from "@/components/templates/Blocks";
import type { HubContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";

// Drives both the community hub and the buy/rent/off-plan intent hubs — the
// visual difference between them comes from the blocks each page defines, not
// from separate layout code.
export function HubTemplate({ content, location, breadcrumbs, locale = "en", availableLocales = ["en"] }: { content: HubContent; location: string; breadcrumbs: { href: string; label: string }[]; locale?: Locale; availableLocales?: Locale[] }) {
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
      locale={locale}
      availableLocales={availableLocales}
    >
      <BlockList blocks={content.blocks} locale={locale} />
    </PageShell>
  );
}
