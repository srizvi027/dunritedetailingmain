import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Dun-Rite Detailing & Coatings is coming soon.",
};

export default function ComingSoon() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-6 text-center">
      <div
        className="absolute inset-0 opacity-25 hex-bg"
        aria-hidden="true"
      />
      <div
        className="absolute h-[70vmin] w-[70vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(237,26,112,.18), rgba(237,26,112,.04) 38%, transparent 68%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <Image
          src="/img/logo.png"
          alt="Dun-Rite Detailing & Coatings"
          width={220}
          height={220}
          priority
          unoptimized
          className="h-auto w-36 sm:w-44"
        />
        <p className="eyebrow mt-8 text-pink">Dun-Rite Detailing &amp; Coatings</p>
        <h1 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Coming <span className="text-pink">Soon</span>
        </h1>
        <span className="mt-7 h-1 w-24 bg-pink" aria-hidden="true" />
      </div>
    </section>
  );
}
