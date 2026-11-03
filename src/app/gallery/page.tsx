import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { MEDIA } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery: The Art of the Finish",
  description:
    "Photos and footage from the Dun-Rite protection studio: ceramic coating, paint correction and interior detailing in Myrtle Beach, SC.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="The art of the finish."
        accentFrom={3}
        text="Real photography and footage from the Dun-Rite studio."
        image={MEDIA.gClass.src}
        imageAlt={MEDIA.gClass.alt}
      />
      <section className="bg-black pb-24 pt-6 sm:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <GalleryGrid />
        </div>
      </section>
      <CTA />
    </>
  );
}
