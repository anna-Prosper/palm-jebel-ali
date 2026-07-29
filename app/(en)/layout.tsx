import type { Metadata } from "next";
import "../globals.css";
import { bodyClass } from "@/lib/fonts";
import { RootChrome } from "@/components/RootChrome";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.jebelalipalmdubai.com"),
};

// Root layout for the English site (served at "/"). Arabic/Russian live under
// app/[locale] with their own root layout so each document declares the
// correct <html lang/dir>.
export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={bodyClass}>
        {children}
        <RootChrome />
      </body>
    </html>
  );
}
