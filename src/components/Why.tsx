import { Reveal, Words, PinkRule } from "./Reveal";
import { WHY } from "@/lib/content";

const ICONS = [
  // mobile / pin
  <path key="a" d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  // magnifier / detail
  <path key="b" d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21m-10.5-6v-2m0 0V9m0 3h-2m2 0h2" />,
  // handshake-ish / check
  <path key="c" d="M4 12.5 9.5 18 20 6.5" />,
  // drop / product
  <path key="d" d="M12 3s6 6.2 6 10.5A6 6 0 0 1 6 13.5C6 9.2 12 3 12 3Z" />,
];

export default function Why() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-28 sm:py-40" aria-labelledby="why-h">
      <div className="hex-bg absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-pink/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="text-pink">04</span> — Why Dun-Rite
          </p>
        </Reveal>
        <Words
          as="h2"
          text="Precision in every pass."
          className="max-w-5xl text-[clamp(2.1rem,6.6vw,6.4rem)]"
        />
        <PinkRule className="mt-8 w-28" />

        <div className="mt-20 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.08} className="group bg-black p-8 transition-colors duration-500 hover:bg-graphite/40 lg:p-10">
              <div className="flex items-center justify-between">
                <svg
                  viewBox="0 0 24 24"
                  width="34"
                  height="34"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-pink"
                  aria-hidden
                >
                  {ICONS[i]}
                </svg>
                <span className="font-display text-xs text-steel">{w.n}</span>
              </div>
              <h3 className="mt-14 font-display text-lg font-extrabold uppercase leading-tight tracking-tight sm:text-xl">
                {w.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
