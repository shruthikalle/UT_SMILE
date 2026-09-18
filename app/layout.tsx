import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UT SMILE — Good people. Real impact. Big smiles.",
  description:
    "Students Making Impacts Through Love & Empathy at UT Austin. Volunteer, build friendships, and help kids be kids.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
