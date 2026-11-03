"use client";

import { useEffect, useRef } from "react";

/**
 * Muted looping video that only plays while on screen and never autoplays
 * for visitors who prefer reduced motion (the poster is shown instead).
 */
export default function LoopVideo({
  src,
  poster,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={`h-full w-full object-cover ${className}`}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      poster={poster}
      aria-label={label}
      role="img"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
