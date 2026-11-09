import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingServiceCard from "@/components/PricingServiceCard";
import { Reveal } from "@/components/Reveal";
import { PRICING_CATEGORIES } from "@/lib/pricing";
import { MEDIA, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View Dun-Rite Detailing & Coatings pricing for mobile detailing, in-shop detailing, ceramic coating, paint correction, memberships and gift cards in Myrtle Beach, SC.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent pricing"
        title="The right care. The right price."
        accentFrom={4}
        text="Explore our mobile and in-shop service prices. Choose your vehicle size to see the listed rate."
        image={MEDIA.instagramToyota.src}
        imageAlt={MEDIA.instagramToyota.alt}
      />

      <div className="bg-black">
        <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-12 flex flex-wrap gap-3">
            {PRICING_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="min-h-11 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-silver transition-colors hover:border-pink hover:text-white sm:min-h-0"
              >
                {category.title}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {PRICING_CATEGORIES.map((category, index) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                className="scroll-mt-32"
              >
                <Reveal>
                  <p className="eyebrow mb-4">
                    <span className="text-pink">{String(index + 1).padStart(2, "0")}</span> — Pricing
                  </p>
                  <h2
                    id={`${category.id}-heading`}
                    className="font-display text-[clamp(1.7rem,4vw,3.5rem)] font-extrabold uppercase tracking-tight"
                  >
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="mt-4 max-w-2xl leading-relaxed text-silver">{category.description}</p>
                  )}
                </Reveal>
                <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {category.services.map((service) => (
                    <PricingServiceCard key={service.name} service={service} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-lg font-bold uppercase tracking-wide">
                Ready to book?
              </h2>
              <p className="mt-2 text-sm text-silver">
                Book online or call us to confirm the right service for your vehicle.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pink"
              >
                Book online <span className="arrow" aria-hidden>→</span>
              </a>
              <a href={`tel:${SITE.tel}`} className="btn btn-ghost">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
