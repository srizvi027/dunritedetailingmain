import MediaView from "./MediaView";
import { MaskReveal } from "./Reveal";
import { MEDIA, type Media } from "@/lib/content";

type Tile = { media: Media; label: string; cls: string };

/** Uploaded Dun-Rite photography and service footage. */
const TILES: Tile[] = [
  { media: MEDIA.tesla, label: "Vehicle detailing", cls: "md:col-span-8 aspect-[4/3] md:aspect-auto md:min-h-[520px]" },
  { media: MEDIA.ceramic, label: "Ceramic coating application", cls: "md:col-span-4 aspect-[4/5] md:aspect-auto" },
  { media: MEDIA.rangeRover, label: "Exterior detailing", cls: "md:col-span-5 aspect-[3/2] md:aspect-auto md:min-h-[360px]" },
  { media: MEDIA.gClass, label: "Paint protection", cls: "md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[360px]" },
  { media: MEDIA.correction, label: "Paint correction", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.interiorCabin, label: "Interior detail", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.boat, label: "Boat detailing", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.mobileWash, label: "Mobile detailing", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.interiorDetail, label: "Interior care", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.technician, label: "Professional detailing", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.hero, label: "Supercar interior", cls: "md:col-span-4 aspect-[3/4]" },
];

export default function GalleryGrid({ limit }: { limit?: number }) {
  const tiles = TILES.slice(0, limit ?? TILES.length);
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-5">
      {tiles.map((t, i) => (
        <figure key={t.label} className={`group relative ${t.cls}`}>
          <MaskReveal
            from={i % 2 ? "right" : "left"}
            className="h-full w-full bg-graphite"
            parallax={i === 0 ? 30 : 18}
          >
            <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]">
              <MediaView media={t.media} sizes="(min-width:768px) 60vw, 100vw" priority={i === 0} />
            </div>
          </MaskReveal>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
          <figcaption className="pointer-events-none absolute bottom-4 left-5 flex items-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.22em]">
            <span className="h-[2px] w-6 bg-pink transition-all duration-500 group-hover:w-12" />
            {t.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
