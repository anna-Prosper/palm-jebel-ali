import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Editorial display serif, used only for narrative headlines, prices and
// pull-quotes; Jakarta carries everything functional.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// className applied to <body> in every root layout so both font variables and
// the base typography are available site-wide.
export const bodyClass = `${jakarta.variable} ${cormorant.variable} font-sans antialiased`;
