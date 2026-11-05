import Link from "next/link";
import { HOMEPAGE_PRICING } from "@/lib/pricing";
import { SITE } from "@/lib/content";
import PricingServiceCard from "./PricingServiceCard";
import { Reveal, Words } from "./Reveal";

export default function PricingOverview() {
  return (
    <section className="relative border-y border-white/10 bg-black py-24 sm:py-32">
      <div className="hex-bg absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-pink">Pricing</span> — Service menu
              </p>
            </Reveal>
            <Words
              as="h2"
              text="Know what to expect."
              className="text-[clamp(2rem,5.8vw,5.5rem)]"
            />
          </div>
          <Reveal className="lg:col-span-4" delay={0.15}>
            <p className="max-w-sm text-silver lg:ml-auto">
              A few of our most-requested services, with pricing based on vehicle size.
              Explore the full menu for every package.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {HOMEPAGE_PRICING.map((service) => (
            <PricingServiceCard key={service.name} service={service} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/pricing" className="btn btn-ghost">
            View all pricing <span className="arrow" aria-hidden>→</span>
          </Link>
          <a
            href={SITE.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pink"
          >
            Book a service <span className="arrow" aria-hidden>→</span>
          </a>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-steel">
          Ceramic coating Level 1 shown at its starting price. Final pricing may vary by vehicle.
        </p>
      </div>
    </section>
  );
}
