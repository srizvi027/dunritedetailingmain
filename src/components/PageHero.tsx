import Image from "next/image";
import { Words, Reveal } from "./Reveal";

/** Shared hero for inner pages. */
export default function PageHero({
  eyebrow,
  title,
  accentFrom,
  text,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  accentFrom?: number;
  text?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="grain relative flex min-h-[62svh] items-end overflow-hidden bg-black pb-16 pt-40 sm:min-h-[70svh] sm:pb-24">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/70" />
        </>
      )}
      <div className="hex-bg absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-7">{eyebrow}</p>
        </Reveal>
        <Words
          as="h1"
          text={title}
          accentFrom={accentFrom}
          accentClass="type-pink"
          className="max-w-6xl text-[clamp(2.2rem,7.6vw,8rem)]"
        />
        {text && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-silver sm:text-lg">{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
