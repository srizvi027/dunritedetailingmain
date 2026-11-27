import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Dun-Rite Detailing",
  description: `Email ${SITE.email}. Dun-Rite Detailing & Coatings, ${SITE.location}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." text="Questions, appointments or quotes: reach us any way you like." />
      <section className="bg-black pb-28 pt-4 sm:pb-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-xl font-extrabold uppercase">{SITE.name}</h2>
              <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
                <li className="py-6">
                  <p className="eyebrow mb-2 text-pink">Email</p>
                  <a href={`mailto:${SITE.email}`} className="u-link break-all text-lg font-bold">
                    {SITE.email}
                  </a>
                </li>
                <li className="py-6">
                  <p className="eyebrow mb-2 text-pink">Location</p>
                  <p className="text-lg font-bold">{SITE.location}</p>
                  <p className="mt-2 text-sm text-silver">Mobile service: {SITE.areas.join(", ")}.</p>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/get-a-quote" className="btn btn-pink">Get a free quote</Link>
                <a href={SITE.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Book now</a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-10">
                <h2 className="font-display text-xl font-extrabold uppercase">Send a message</h2>
                <p className="mb-8 mt-3 text-sm leading-relaxed text-silver">
                  Fill out the form and tell us how we can help.
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
