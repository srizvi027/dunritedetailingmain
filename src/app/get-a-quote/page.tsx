import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free quote for mobile detailing, ceramic coating, paint correction or boat detailing in Myrtle Beach, SC.",
  alternates: { canonical: "/get-a-quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Your free quote."
        accentFrom={1}
        text="Tell us about your vehicle and what you'd like done."
      />
      <section className="bg-black pb-28 pt-4 sm:pb-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-8">
            <Suspense fallback={<p className="text-silver">Loading form…</p>}>
              <QuoteForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-4">
            <Reveal>
              <div className="sticky top-28 border border-white/10 bg-white/[0.03] p-8">
                <h2 className="eyebrow mb-6 text-pink">Prefer to talk?</h2>
                <a href={`tel:${SITE.tel}`} className="font-display text-2xl font-extrabold">
                  {SITE.phone}
                </a>
                <p className="mt-4 break-all text-sm">
                  <a href={`mailto:${SITE.email}`} className="u-link text-silver hover:text-white">
                    {SITE.email}
                  </a>
                </p>
                <p className="mt-4 text-sm text-silver">{SITE.location}</p>
                <a
                  href={SITE.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost mt-8 w-full"
                >
                  Book online
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
