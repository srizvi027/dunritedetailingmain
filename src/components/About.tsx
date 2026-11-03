import Link from "next/link";
import Image from "next/image";
import { Reveal, Words, MaskReveal, PinkRule } from "./Reveal";
import { MEDIA } from "@/lib/content";

const SPECIALTIES = [
  "Interior & exterior detailing",
  "Paint correction",
  "Ceramic coatings",
  "Headlight restoration",
  "Vehicle appearance & paint protection",
];

export default function About({ full = false }: { full?: boolean }) {
  const primaryImage = full ? MEDIA.about : MEDIA.interiorDetail;

  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-40" aria-labelledby="about-h">
      <div className="hex-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-[1600px] gap-y-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        {/* imagery */}
        <div className="relative lg:col-span-6 lg:self-start">
          <MaskReveal
            className={`${full ? "aspect-[4/5] w-full" : "aspect-[4/5] w-[78%]"}`}
            parallax={36}
          >
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              sizes={full ? "(min-width:1024px) 48vw, 100vw" : "(min-width:1024px) 38vw, 80vw"}
              className={full ? "bg-black object-contain" : "object-cover object-[28%_50%]"}
            />
          </MaskReveal>
          {!full && (
            <MaskReveal
              from="right"
              className="absolute -bottom-12 right-0 aspect-[4/3] w-[58%] border-[6px] border-black sm:-bottom-20"
              parallax={20}
            >
              <Image
                src={MEDIA.galleryNine.src}
                alt={MEDIA.galleryNine.alt}
                fill
                sizes="(min-width:1024px) 24vw, 50vw"
                className="object-cover"
              />
            </MaskReveal>
          )}
          <p
            aria-hidden
            className="type-outline pointer-events-none absolute -left-2 top-1/3 hidden -rotate-90 origin-left text-6xl opacity-40 xl:block"
          >
            Myrtle Beach
          </p>
        </div>

        {/* copy */}
        <div className="lg:col-span-6 lg:pl-10 lg:pt-24">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="text-pink">01</span> — About Dun-Rite
            </p>
          </Reveal>
          <Words
            as="h2"
            text="Detail is never just a detail."
            className="text-[clamp(2.1rem,5.6vw,5.4rem)]"
          />
          <PinkRule className="mt-8 w-28" />
          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-silver sm:text-lg">
            <p>
              Dun-Rite Detailing &amp; Coatings is a professional detailing business in Myrtle Beach,
              South Carolina, bringing mobile and in-shop care to vehicles and boats across the Grand Strand.
            </p>
            <p>
              Every service is built around one idea: restore the appearance of your vehicle, then
              preserve the finish so it keeps looking that way.
            </p>
          </Reveal>

          <ul className="mt-10 max-w-xl divide-y divide-white/10 border-y border-white/10">
            {SPECIALTIES.map((s, i) => (
              <Reveal key={s} delay={i * 0.06} y={18}>
                <li className="flex items-center gap-5 py-4 text-sm font-bold uppercase tracking-[0.14em] sm:text-[0.82rem]">
                  <span className="font-display text-xs text-pink">0{i + 1}</span>
                  {s}
                </li>
              </Reveal>
            ))}
          </ul>

          {!full && (
            <Reveal delay={0.2} className="mt-10">
              <Link href="/about" className="btn btn-ghost">
                Our story <span className="arrow" aria-hidden>→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
