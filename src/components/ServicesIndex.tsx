"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MediaView from "./MediaView";
import { Reveal, Words } from "./Reveal";
import { MEDIA, SERVICES, serviceHref, type Media } from "@/lib/content";

const VIDEO_PREVIEW_IMAGES: Partial<Record<string, Media>> = {
  "paint-correction": MEDIA.instagramDefender,
  "ceramic-coating": MEDIA.galleryEight,
};

/** Editorial service index: a numbered list with a sticky cinematic preview. */
export default function ServicesIndex({
  heading = "Every finish. Every detail.",
  eyebrow = "02 — Services",
}: {
  heading?: string;
  eyebrow?: string;
}) {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const previewMedia =
    current.gallery && current.gallery.length > 0
      ? current.gallery[0]
      : current.media.kind === "video"
        ? VIDEO_PREVIEW_IMAGES[current.slug] ?? MEDIA.galleryTwo
        : current.media;

  return (
    <section className="relative bg-black py-28 sm:py-36" aria-labelledby="services-h">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-pink">{eyebrow.split(" — ")[0]}</span> — {eyebrow.split(" — ")[1]}
              </p>
            </Reveal>
            <Words
              as="h2"
              text={heading}
              className="text-[clamp(2.1rem,6.4vw,6.2rem)]"
            />
          </div>
          <Reveal className="lg:col-span-4" delay={0.15}>
            <p className="max-w-sm text-silver lg:ml-auto">
              Mobile at your home, office or marina, or in our protection studio. Pick a service
              to explore it, or request a quote for any of them.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {SERVICES.map((s, i) => {
              const href = serviceHref(s);
              const on = i === active;
              return (
                <li
                  key={s.slug}
                  onMouseEnter={() => setActive(i)}
                  onFocusCapture={() => setActive(i)}
                  className="group border-t border-white/10 last:border-b"
                >
                  <div className="relative flex items-start gap-4 py-6 sm:gap-8 sm:py-8">
                    <span
                      className={`mt-2 w-8 shrink-0 font-display text-xs transition-colors ${on ? "text-pink" : "text-steel"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link href={href} className="block">
                        <h3
                          className={`font-display text-[clamp(1.35rem,3.1vw,2.6rem)] font-extrabold uppercase leading-[1.02] tracking-tight transition-all duration-500 ${
                            on ? "translate-x-3 text-white" : "text-silver/80"
                          }`}
                        >
                          {s.title}
                        </h3>
                      </Link>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:opacity-0"
                        } max-lg:grid-rows-[1fr] max-lg:opacity-100`}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-3 max-w-lg text-sm leading-relaxed text-silver sm:text-base">
                            {s.blurb}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                            <Link
                              href={href}
                              className="u-link text-[0.7rem] font-extrabold uppercase tracking-[0.2em]"
                            >
                              {s.page ? "Explore" : "Details"} →
                            </Link>
                            <Link
                              href={`/get-a-quote?service=${encodeURIComponent(s.title)}`}
                              className="u-link text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-pink"
                            >
                              Get a quote
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="hidden pt-2 font-display text-[0.6rem] uppercase tracking-[0.25em] text-steel sm:block">
                      {s.group}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* sticky preview (desktop) */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-graphite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <MediaView media={previewMedia} sizes="40vw" />
                  </motion.div>
                </AnimatePresence>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-pink" />
                <p className="pointer-events-none absolute bottom-5 left-6 font-display text-sm font-bold uppercase tracking-wide">
                  {current.title}
                </p>
              </div>
              <Link href="/get-a-quote" className="btn btn-pink mt-5 w-full">
                Request a free quote <span className="arrow" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
