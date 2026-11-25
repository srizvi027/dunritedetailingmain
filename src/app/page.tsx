import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Coming Soon | Dun-Rite Detailing & Coatings" },
  description:
    "Dun-Rite Detailing & Coatings is currently upgrading its website.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="coming-soon grain relative isolate min-h-dvh overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[58%_center] opacity-35 sm:bg-center"
        style={{
          backgroundImage:
            "url('/img/WhatsApp%20Image%202026-11-05%20at%202.10.36%20AM.jpeg')",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.82)_48%,rgba(0,0,0,.28)_100%)]"
      />
      <div aria-hidden="true" className="hex-bg absolute inset-0 opacity-25" />

      <div
        aria-hidden="true"
        className="coming-orbit absolute -right-24 top-1/2 h-[75vw] max-h-[720px] max-w-[720px] min-h-[430px] min-w-[430px] -translate-y-1/2 rounded-full border border-pink/30"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/2 h-[58vw] max-h-[560px] max-w-[560px] min-h-[340px] min-w-[340px] -translate-y-1/2 rounded-full border border-white/10"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-[1600px] flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:px-12">
        <header className="flex items-center justify-between">
          <Link href="/" aria-label="Dun-Rite Detailing & Coatings home" className="flex items-center gap-3">
            <Image
              src="/img/logo.png"
              alt=""
              width={96}
              height={96}
              priority
              unoptimized
              className="h-14 w-14 sm:h-16 sm:w-16"
            />
            <span className="hidden font-display text-[0.68rem] font-extrabold uppercase leading-tight tracking-[0.22em] sm:block">
              Dun-Rite
              <span className="block text-[0.48rem] tracking-[0.34em] text-silver">
                Detailing &amp; Coatings
              </span>
            </span>
          </Link>
          <a
            href={`tel:${SITE.tel}`}
            className="border-b border-pink pb-1 text-xs font-bold tracking-[0.12em] text-silver transition-colors hover:text-white sm:text-sm"
          >
            {SITE.phone}
          </a>
        </header>

        <section className="py-16 sm:py-20">
          <p className="coming-kicker eyebrow mb-5 text-pink">Experience upgrade in progress</p>
          <h1 className="max-w-5xl">
            <span className="coming-line coming-line-one block font-display text-[clamp(4.2rem,13vw,10rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.065em]">
              Coming
            </span>
            <span className="coming-line coming-line-two type-pink mt-[0.08em] block font-display text-[clamp(4.2rem,13vw,10rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.065em]">
              Soon
            </span>
          </h1>
          <div className="coming-copy mt-8 flex max-w-xl items-start gap-4 border-l-2 border-pink pl-5 sm:mt-10">
            <p className="text-sm leading-7 text-silver sm:text-base">
              We&apos;re refining the details so the next Dun-Rite experience looks as good as the finish on your vehicle.
            </p>
          </div>
          <div className="coming-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${SITE.tel}`} className="btn btn-pink min-h-14 px-7">
              Call Dun-Rite <span className="arrow" aria-hidden>→</span>
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost min-h-14 px-7"
            >
              Follow our work
            </a>
          </div>
        </section>

        <footer className="flex items-end justify-between gap-5 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-steel">
          <p>Myrtle Beach, SC</p>
          <div className="flex items-center gap-3 text-pink">
            <span className="coming-status h-2 w-2 rounded-full bg-pink" />
            <span>Est. 2019</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
