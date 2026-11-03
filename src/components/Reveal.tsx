"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  ...rest
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Headline that rises word by word out of a mask. */
export function Words({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  accentFrom,
  accentClass = "accent text-white",
  wordClass = "type-3d",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  delay?: number;
  /** words from this index onward use accentClass */
  accentFrom?: number;
  accentClass?: string;
  /** applied to each word (gradient text must sit on the animated element itself) */
  wordClass?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // The trigger must live on the unclipped heading: a word translated out of
  // its mask never intersects the viewport, so it can't observe itself.
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const show = reduce || inView;
  const words = text.split(" ");
  const El = Tag as "h2";
  return (
    <El
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={`${className} leading-[0.95]`}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: "0.4em", marginBottom: "-0.4em", paddingRight: "0.06em" }}
        >
          <motion.span
            className={`inline-block ${accentFrom !== undefined && i >= accentFrom ? accentClass : wordClass}`}
            initial={false}
            animate={show ? { y: "0%", rotate: 0 } : { y: "170%", rotate: 3 }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.07 }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </El>
  );
}

/** Clip-path image/video reveal with inner parallax. */
export function MaskReveal({
  children,
  className = "",
  from = "bottom",
  parallax = 40,
}: {
  children: React.ReactNode;
  className?: string;
  from?: "bottom" | "left" | "right";
  parallax?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);
  const hidden =
    from === "bottom"
      ? "inset(100% 0% 0% 0%)"
      : from === "left"
        ? "inset(0% 100% 0% 0%)"
        : "inset(0% 0% 0% 100%)";
  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} ${className}`}
      initial={reduce ? false : { clipPath: hidden }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y, scale: 1.18 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Animated pink rule that draws in on scroll. */
export function PinkRule({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`block h-[3px] origin-left bg-pink ${className}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
    />
  );
}
