import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UT SMILE | Good people. Real impact. Big smiles.",
  description:
    "Students Making Impacts Through Love & Empathy at UT Austin. Childhood cancer awareness, volunteering, and pre-med opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${hand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
