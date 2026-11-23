import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/content";

const unbounded = localFont({
  src: "../fonts/unbounded-latin-wght-normal.woff2",
  variable: "--font-unbounded",
  weight: "200 900",
  display: "swap",
});
const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});
const instrument = localFont({
  src: "../fonts/instrument-serif-latin-400-italic.woff2",
  variable: "--font-instrument",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Coming Soon | Dun-Rite Detailing & Coatings",
  description:
    "Dun-Rite Detailing & Coatings is coming soon.",
  icons: {
    icon: [{ url: "/img/logo.png", type: "image/png", sizes: "160x160" }],
    apple: [{ url: "/img/logo.png", type: "image/png", sizes: "160x160" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${manrope.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
