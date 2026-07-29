import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { bodyClass } from "@/lib/fonts";
import { RootChrome } from "@/components/RootChrome";
import { dir, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com"),
};

// Only non-English locales are prefixed; English is served from the root group.
const PREFIXED: Locale[] = ["ar", "ru"];

export function generateStaticParams() {
  return PREFIXED.map((locale) => ({ locale }));
}

// Root layout for the localized site (/ar, /ru). Renders the document shell so
// <html lang/dir> matches the page language — the whole point of the split.
export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!PREFIXED.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  return (
    <html lang={loc} dir={dir(loc)}>
      <body className={bodyClass}>
        {children}
        <RootChrome />
      </body>
    </html>
  );
}
