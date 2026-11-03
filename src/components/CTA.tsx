import Link from "next/link";
import { Reveal, Words } from "./Reveal";
import { SITE } from "@/lib/content";

export default function CTA({
  title = "Stay Dun-Rite.",
  text = "Tell us about your vehicle and what you'd like done. We'll come back with a quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="grain relative overflow-hidden border-t border-white/10 bg-black py-28 sm:py-40">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_at_bottom,rgba(237,26,112,.28),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-[1600px] px-5 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-8">Ready when you are</p>
        </Reveal>
        <Words
          as="h2"
          text={title}
          className="mx-auto text-[clamp(2.4rem,9vw,9rem)]"
        />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-silver sm:text-lg">{text}</p>
        </Reveal>
        <Reveal delay={0.25} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/get-a-quote" className="btn btn-pink">
            Get a free quote <span className="arrow" aria-hidden>→</span>
          </Link>
          <a href={`tel:${SITE.tel}`} className="btn btn-ghost">
            Call {SITE.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
