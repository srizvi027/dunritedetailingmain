import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MEDIA, SITE } from "@/lib/content";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

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
  title: {
    default: "Dun-Rite Detailing & Coatings | Mobile Detailing, Ceramic Coating & Paint Correction in Myrtle Beach, SC",
    template: "%s | Dun-Rite Detailing & Coatings",
  },
  description:
    "Professional mobile and in-shop auto detailing, ceramic coating, paint correction and paint protection in Myrtle Beach, SC. Request a free quote.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    images: [{ url: MEDIA.galleryEight.src, alt: MEDIA.galleryEight.alt }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/img/logo.png", type: "image/png", sizes: "160x160" }],
    apple: [{ url: "/img/logo.png", type: "image/png", sizes: "160x160" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  telephone: SITE.tel,
  email: SITE.email,
  image: `${SITE.url}${MEDIA.galleryEight.src}`,
  logo: `${SITE.url}/img/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: "SC",
    addressCountry: "US",
  },
  areaServed: SITE.areas.map((name) => ({ "@type": "City", name })),
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${manrope.variable} ${instrument.variable}`}>
      <body>
        <noscript>
          <style>{`.dr-loader{display:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-pink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
