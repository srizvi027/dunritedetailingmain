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
        text="Browse photos and videos from Dun-Rite's detailing and paint protection work."
        image={MEDIA.galleryNine.src}
        imageAlt={MEDIA.galleryNine.alt}
      />
      <section className="bg-black pb-24 pt-6 sm:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Gallery sections" className="mb-14 flex gap-6 border-b border-white/10 pb-5">
            <a href="#photos" className="u-link text-sm font-bold uppercase tracking-[0.18em]">Photos</a>
            <a href="#videos" className="u-link text-sm font-bold uppercase tracking-[0.18em]">Videos</a>
          </nav>
          <GalleryGrid separateMedia />
        </div>
      </section>
      <CTA />
    </>
  );
}
