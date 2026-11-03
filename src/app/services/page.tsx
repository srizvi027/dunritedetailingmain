import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesIndex from "@/components/ServicesIndex";
import MediaView from "@/components/MediaView";
import CTA from "@/components/CTA";
import { Reveal, MaskReveal, Words } from "@/components/Reveal";
import { COATING_TIERS, MEDIA, PAGE_SERVICES, QUOTE_OPTIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services: Detailing, Ceramic Coating & Paint Correction",
  description:
    "Interior and exterior detailing, paint correction, System X ceramic coatings, headlight restoration, wash & wax, engine and boat detailing in Myrtle Beach, SC.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const features = PAGE_SERVICES.filter((s) => s.slug !== "paint-protection-film");
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your finish needs."
        accentFrom={2}
        text="From a fast wash and wax to multi-year ceramic protection, mobile or in our studio."
        image={MEDIA.mobileWash.src}
        imageAlt={MEDIA.mobileWash.alt}
      />

      <ServicesIndex heading="The complete lineup." eyebrow="01 — All services" />

      {/* feature rows */}
      <section className="bg-black pb-10">
        {features.map((s, i) => (
          <div key={s.slug} className="border-t border-white/10 py-20 sm:py-28">
            <div
              className={`mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12`}
            >
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <MaskReveal
                  from={i % 2 ? "right" : "left"}
                  className={s.media.kind === "video" ? "mx-auto aspect-[3/4] max-w-[460px]" : "aspect-[4/3]"}
                  parallax={26}
                >
                  <MediaView media={s.media} sizes="(min-width:1024px) 45vw, 100vw" />
                </MaskReveal>
              </div>
              <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}>
                <Reveal>
                  <p className="eyebrow mb-5">
                    <span className="text-pink">{String(i + 1).padStart(2, "0")}</span> — {s.group}
                  </p>
                </Reveal>
                <Words as="h2" text={s.title} className="text-[clamp(1.9rem,4.4vw,4.2rem)]" />
                <Reveal delay={0.1}>
                  <p className="accent mt-5 text-2xl text-white">{s.tagline}</p>
                  <p className="mt-6 max-w-lg leading-relaxed text-silver">{s.blurb}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href={`/services/${s.slug}`} className="btn btn-ghost">
                      Explore <span className="arrow" aria-hidden>→</span>
                    </Link>
                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(s.title)}`}
                      className="btn btn-pink"
                    >
                      Get a quote
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* packages */}
      <section className="relative border-y border-white/10 bg-black py-24 sm:py-32">
        <div className="hex-bg absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Interior packages</p>
            </Reveal>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {QUOTE_OPTIONS.interior.map((o, i) => (
                <Reveal key={o} delay={i * 0.05} y={14}>
                  <li className="flex items-center justify-between gap-4 py-5 font-display text-sm font-bold uppercase tracking-wide sm:text-base">
                    {o}
                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(o)}`}
                      className="u-link shrink-0 text-[0.68rem] tracking-[0.2em] text-pink"
                    >
                      Quote
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Coating levels</p>
            </Reveal>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {COATING_TIERS.map((t, i) => (
                <Reveal key={t.id} delay={i * 0.05} y={14}>
                  <li className="py-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-sm font-bold uppercase tracking-wide sm:text-base">
                        {t.name}
                        {t.badge && (
                          <span className="ml-3 bg-pink px-2 py-1 align-middle text-[0.55rem] tracking-[0.18em]">
                            {t.badge}
                          </span>
                        )}
                      </h3>
                      <Link
                        href={`/get-a-quote?service=${encodeURIComponent(t.name)}`}
                        className="u-link shrink-0 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-pink"
                      >
                        Quote
                      </Link>
                    </div>
                    <p className="mt-2 max-w-md text-sm text-silver">{t.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
