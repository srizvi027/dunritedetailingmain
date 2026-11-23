import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "Coming Soon | Dun-Rite Detailing & Coatings" },
  description: "Dun-Rite Detailing & Coatings is coming soon.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-black px-6 py-12 text-center text-white">
      <div
        aria-hidden="true"
        className="hex-bg absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute h-[70vmin] w-[70vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(237,26,112,.15), transparent 68%)",
        }}
      />

      <section className="relative z-10 flex flex-col items-center">
        <Image
          src="/img/logo.png"
          alt="Dun-Rite Detailing & Coatings"
          width={160}
          height={160}
          priority
          unoptimized
          className="h-auto w-[34vmin] max-w-[240px] min-w-[150px]"
        />
        <span className="mt-7 block h-[3px] w-24 bg-pink" />
        <h1 className="mt-8 font-display text-4xl font-bold uppercase tracking-[0.12em] sm:text-6xl">
          Coming Soon
        </h1>
      </section>
    </main>
  );
}
