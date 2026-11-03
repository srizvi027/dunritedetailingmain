"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Cinematic logo loader. Mounted in the root layout, so it plays once per
 * full page load and never on client-side navigation.
 * Timeline (~1.9s): light streak -> logo emerges -> tagline + pink underline
 * -> mask-wipe reveal into the page.
 */
export default function Loader() {
  const [done, setDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.dispatchEvent(new CustomEvent("dr:scroll-lock", { detail: true }));
    document.documentElement.style.overflow = "hidden";
    const hold = reduce ? 600 : 1500;
    const t1 = setTimeout(() => setLeaving(true), hold);
    const t2 = setTimeout(
      () => {
        setDone(true);
        document.documentElement.style.overflow = "";
        window.dispatchEvent(new CustomEvent("dr:scroll-lock", { detail: false }));
        (window as unknown as { __drLoaded?: boolean }).__drLoaded = true;
        window.dispatchEvent(new CustomEvent("dr:loader-done"));
      },
      hold + (reduce ? 350 : 650),
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="dr-loader fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-black"
      role="status"
      aria-label="Loading Dun-Rite Detailing & Coatings"
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={
        leaving
          ? { clipPath: "inset(0% 0% 100% 0%)" }
          : { clipPath: "inset(0% 0% 0% 0%)" }
      }
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* pink light streak */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[40vw]">
        <div
          className="ld-streak absolute inset-y-[-10%] left-0 w-[18vw] min-w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(237,26,112,.0) 5%, rgba(237,26,112,.55) 45%, #ffffff 52%, rgba(237,26,112,.55) 58%, transparent)",
            filter: "blur(10px)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        <div
          className="absolute -z-10 h-[60vmin] w-[60vmin] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(237,26,112,.18), transparent 65%)",
          }}
        />
        <Image
          src="/img/logo.png"
          alt="Dun-Rite"
          width={160}
          height={160}
          priority
          unoptimized
          className="ld-logo h-auto w-[34vmin] max-w-[240px] min-w-[150px]"
        />
        <p className="ld-sub mt-6 text-[0.68rem] font-bold uppercase text-white sm:text-xs">
          Detailing &amp; Coatings
        </p>
        <span className="ld-line mt-4 block h-[3px] w-40 bg-pink" />
      </div>
    </motion.div>
  );
}
