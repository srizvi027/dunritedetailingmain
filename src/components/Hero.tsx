"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import LoopVideo from "./LoopVideo";
import { MEDIA, SITE } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function useLoaderDone() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const w = window as unknown as { __drLoaded?: boolean };
    if (w.__drLoaded) {
      setReady(true);
      return;
    }
    const on = () => setReady(true);
    window.addEventListener("dr:loader-done", on);
    // safety net so content can never stay hidden
    const t = setTimeout(on, 4000);
    return () => {
      window.removeEventListener("dr:loader-done", on);
      clearTimeout(t);
    };
  }, []);
  return ready;
}

function Line({
  children,
  ready,
  delay,
  className,
}: {
  children: React.ReactNode;
  ready: boolean;
  delay: number;
  className: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.4em] -mb-[0.4em] pr-[0.06em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "170%" }}
        animate={ready ? { y: "0%" } : { y: "170%" }}
        transition={{ duration: 1.15, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useLoaderDone();
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const backgroundFade = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  const fadeUp = (d: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
    transition: { duration: 0.9, ease: EASE, delay: d },
  });

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-black"
      aria-label="Introduction"
    >
      {/* Full-bleed video background */}
      <motion.div
        style={{ opacity: backgroundFade }}
        className="pointer-events-none fixed inset-0 z-0"
      >
        <motion.div
          className="relative h-full w-full overflow-hidden"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={ready ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          <LoopVideo
            src={MEDIA.hero.src}
            poster={MEDIA.hero.poster}
            label="Dun-Rite technician steam-cleaning a supercar interior"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="hex-bg absolute inset-0 opacity-30" />
        </motion.div>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: textY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12"
      >
        <motion.p
          {...fadeUp(0.35)}
          className="eyebrow mb-6 max-w-[22rem] leading-relaxed sm:max-w-none"
        >
          Auto Detailing <span className="text-pink">·</span> Ceramic Coating{" "}
          <span className="text-pink">·</span> Paint Correction
        </motion.p>

        <h1 className="font-display font-extrabold uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.35rem,12.4vw,3.8rem)] md:text-[clamp(3.4rem,9.4vw,9.5rem)]">
          <Line ready={ready} delay={0.25} className="type-3d">Your</Line>
          <Line ready={ready} delay={0.38} className="type-3d">Vehicle.</Line>
          <Line ready={ready} delay={0.51} className="type-pink">Redefined.</Line>
        </h1>

        <motion.p
          {...fadeUp(0.9)}
          className="mt-8 max-w-md text-base leading-relaxed text-silver md:max-w-lg md:text-lg"
        >
          Professional detailing and paint protection designed to restore your vehicle&apos;s
          appearance and preserve its finish.
        </motion.p>

        <motion.div {...fadeUp(1.05)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/services" className="btn btn-pink group relative isolate overflow-hidden">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-30 group-focus-visible:opacity-30"
              style={{ backgroundImage: "url('/img/2.jpg')" }}
            />
            Explore services <span className="arrow" aria-hidden>→</span>
          </Link>
          <Link href="/get-a-quote" className="btn btn-ghost">
            Get a free quote
          </Link>
          <a href={`tel:${SITE.tel}`} className="btn btn-ghost">
            Call {SITE.phone}
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
