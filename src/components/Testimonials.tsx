"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const t = TESTIMONIALS[i];
  const go = (n: number) => {
    setDir(n > i || (i === TESTIMONIALS.length - 1 && n === 0) ? 1 : -1);
    setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-40" aria-labelledby="reviews-h">
      <div
        aria-hidden
        className="type-outline pointer-events-none absolute -left-6 -top-16 select-none text-[34vw] leading-none opacity-[0.12]"
      >
        “
      </div>
      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p id="reviews-h" className="eyebrow mb-10">
            <span className="text-pink">05</span> — Customer words
          </p>
        </Reveal>

        <div className="relative min-h-[320px] sm:min-h-[300px]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote>
                <p className="accent text-[clamp(1.9rem,4.8vw,4.4rem)] leading-[1.08] text-white">
                  <span className="text-pink">“</span>
                  {t.quote}
                  <span className="text-pink">”</span>
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-5">
                <span className="h-[2px] w-12 bg-pink" />
                <span>
                  <span className="block font-display text-sm font-bold uppercase tracking-[0.18em]">
                    {t.name}
                  </span>
                  {t.note && <span className="mt-1 block text-xs text-steel">{t.note}</span>}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button
            type="button"
            onClick={() => go(i - 1)}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center border border-white/25 transition-colors hover:border-pink hover:bg-pink"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(i + 1)}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center border border-white/25 transition-colors hover:border-pink hover:bg-pink"
          >
            →
          </button>
          <div className="ml-2 flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                role="tab"
                aria-selected={n === i}
                aria-label={`Testimonial ${n + 1}`}
                onClick={() => go(n)}
                className={`h-[3px] transition-all duration-500 ${n === i ? "w-12 bg-pink" : "w-6 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
          <span className="ml-auto font-display text-xs text-steel">
            {String(i + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
