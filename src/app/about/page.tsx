import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Why from "@/components/Why";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { MEDIA, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Dun-Rite Detailing",
  description:
    "Dun-Rite Detailing & Coatings is a professional mobile and in-shop detailing business in Myrtle Beach, SC specializing in paint correction and ceramic coating.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Myrtle Beach's paint protection specialist."
        accentFrom={2}
        text="Professional detailing and paint protection, at your doorstep or in our protection studio."
        image={MEDIA.technician.src}
        imageAlt={MEDIA.technician.alt}
      />
      <About full />
      <section className="border-y border-white/10 bg-black py-24">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6">Service area</p>
            <p className="accent max-w-4xl text-[clamp(1.7rem,3.6vw,3.2rem)] leading-tight">
              Mobile service across {SITE.areas.slice(0, -1).join(", ")} and {SITE.areas.at(-1)}.
            </p>
          </Reveal>
        </div>
      </section>
      <Why />
      <CTA />
    </>
  );
}
