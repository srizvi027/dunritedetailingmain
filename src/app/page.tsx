import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesIndex from "@/components/ServicesIndex";
import GallerySection from "@/components/GallerySection";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: { absolute: "Dun-Rite Detailing & Coatings | Myrtle Beach" },
  description:
    "Professional mobile and in-shop detailing, ceramic coating, paint correction and paint protection in Myrtle Beach, SC.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesIndex />
      <GallerySection />
      <Why />
      <Testimonials />
      <CTA />
    </>
  );
}
