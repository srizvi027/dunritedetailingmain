import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/content";

const REASONS = [
  {
    title: "Convenience",
    text: "We understand your busy lifestyle. Our mobile service brings professional detailing right to your preferred location, whether it's your home, office or marina. Sit back and relax while our experienced team transforms your vehicle or boat.",
  },
  {
    title: "Attention to detail",
    text: "We take pride in our meticulous approach. Every surface, every crevice and every inch is carefully inspected and treated to ensure a thorough, exceptional result. With our attention to detail, your vehicle or boat will regain its original shine and beauty.",
  },
  {
    title: "Professionalism",
    text: "Our team consists of skilled professionals who are passionate about their craft. We are dedicated to providing exceptional customer service and making your experience seamless and satisfying from start to finish.",
  },
  {
    title: "Quality products",
    text: "We use carefully selected products and materials throughout our detailing process, from wash soaps and microfiber towels to waxes, polishes and protective coatings.",
  },
  {
    title: "Customized solutions",
    text: "Every vehicle and boat is unique. We offer a range of services that can be tailored to your needs, whether you need a comprehensive detail, paint protection or specialized treatment.",
  },
];

const FAQS = [
  {
    question: "Where does Dun-Rite provide mobile service?",
    answer: `Mobile service is available across ${SITE.areas.join(", ")}.`,
  },
  {
    question: "What services can I ask about?",
    answer:
      "Dun-Rite offers interior and exterior detailing, paint correction, ceramic coatings, paint protection film, headlight restoration, and boat detailing.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use the free quote form and share details about your vehicle and the service you need. Pricing depends on your vehicle and its condition.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. Use the Book online link to visit Dun-Rite's scheduling page, or contact the team by phone.",
  },
];

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
      />
      <About full />
      <section className="relative border-y border-white/10 bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="eyebrow mb-6"><span className="text-pink">02</span> — Why Dun-Rite</p>
            <h2 className="max-w-4xl font-display text-[clamp(2rem,5.6vw,5rem)] font-extrabold italic uppercase leading-[1.05]">
              Why choose Dun-Rite mobile detailing?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {REASONS.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.06} className="bg-black p-7 sm:p-9">
                <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-pink">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-relaxed text-silver">{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
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
      <section className="bg-black py-24 sm:py-32" aria-labelledby="about-faq-heading">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow mb-6"><span className="text-pink">03</span> — FAQs</p>
            <h2 id="about-faq-heading" className="font-display text-[clamp(2rem,5vw,4.5rem)] font-extrabold uppercase">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-sm font-bold uppercase sm:text-base [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-xl text-pink transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-silver">{faq.answer}</p>
                {faq.question === "How do I get a quote?" && (
                  <Link href="/get-a-quote" className="u-link mt-3 inline-block text-sm font-bold text-pink">
                    Request a free quote →
                  </Link>
                )}
                {faq.question === "Can I book online?" && (
                  <a
                    href={SITE.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-link mt-3 inline-block text-sm font-bold text-pink"
                  >
                    Book online →
                  </a>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
