const ITEMS = [
  "Ceramic Coating",
  "Paint Correction",
  "Interior Detailing",
  "Exterior Detailing",
  "Headlight Restoration",
  "Boat Detailing",
  "Mobile & In-Shop",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-black py-5"
      aria-hidden
    >
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <li
                key={`${k}-${i}`}
                className="flex items-center gap-8 pr-8 font-display text-lg font-extrabold uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.5)] sm:text-2xl"
              >
                {t}
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-pink" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
