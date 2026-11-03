import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import ServicesIndex from "@/components/ServicesIndex";
import GallerySection from "@/components/GallerySection";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "Dun-Rite Detailing & Coatings | Mobile Detailing, Ceramic Coating & Paint Correction in Myrtle Beach, SC",
  },
  description:
    "Professional mobile and in-shop auto detailing, System X ceramic coatings, paint correction and paint protection in Myrtle Beach, SC. Get a free quote.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <ServicesIndex />
      <GallerySection />
      <Why />
      <Testimonials />
      <CTA />
    </>
  );
}
