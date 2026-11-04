import MediaView from "./MediaView";
import { MaskReveal } from "./Reveal";
import { MEDIA, type Media } from "@/lib/content";

type Tile = { media: Media; label: string; cls: string };

/** Uploaded Dun-Rite photography and service footage. */
const INSTAGRAM_TILES: Tile[] = [
  { media: MEDIA.instagramToyota, label: "Toyota GR Corolla · ceramic protection", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramBmw, label: "BMW ALPINA · ceramic coating", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramDefender, label: "Land Rover Defender · paint correction", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramRaptor, label: "Ford Raptor · ceramic protection", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramCybertruck, label: "Tesla Cybertruck detailing", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramF450, label: "Ford F-450 · wheel polish", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramHonda, label: "Honda CR-V · paint correction", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramGmc, label: "Black GMC · mobile wash", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramGmcWash, label: "Black GMC · exterior wash", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramBoat, label: "Boat detailing in the studio", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramBoatRear, label: "Boat finish under studio lights", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.instagramMobileVan, label: "Dun-Rite mobile detailing", cls: "md:col-span-4 aspect-[3/4]" },
];

const TILES: Tile[] = [
  ...INSTAGRAM_TILES,
  { media: MEDIA.galleryOne, label: "Lincoln in the detailing studio", cls: "md:col-span-8 aspect-[4/3] md:aspect-auto md:min-h-[520px]" },
  { media: MEDIA.galleryTwo, label: "Ceramic coating application", cls: "md:col-span-4 aspect-[4/5] md:aspect-auto" },
  { media: MEDIA.galleryThree, label: "Black SUV under studio lights", cls: "md:col-span-5 aspect-[3/2] md:aspect-auto md:min-h-[360px]" },
  { media: MEDIA.galleryFour, label: "Black Corvette in the studio", cls: "md:col-span-7 aspect-[4/3] md:aspect-auto md:min-h-[360px]" },
  { media: MEDIA.galleryFive, label: "Corvette reflecting studio lights", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.gallerySix, label: "Corvette finish", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.gallerySeven, label: "Classic Corvette", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.galleryEight, label: "Gray Corvette in the studio", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.galleryNine, label: "Classic Corvette and motorcycle", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.videoOne, label: "Detailing video 1", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.videoTwo, label: "Detailing video 2", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.videoThree, label: "Detailing video 3", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.videoFour, label: "Detailing video 4", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.videoFive, label: "Detailing video 5", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.interiorVideo, label: "Interior detailing", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.ceramic, label: "Ceramic coating", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.correction, label: "Paint correction", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.hero, label: "Steam cleaning", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoOne, label: "Detailing video · 2:10:28 AM", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoTwo, label: "Detailing video · 2:10:31 AM", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoThree, label: "Detailing video · 2:10:39 AM", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoFour, label: "Detailing video · 2:10:40 AM", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoFive, label: "Detailing video · 2:10:47 AM", cls: "md:col-span-4 aspect-[3/4]" },
  { media: MEDIA.whatsappVideoSix, label: "Detailing video · 2:11:15 AM", cls: "md:col-span-4 aspect-[3/4]" },
];

function TileGrid({ tiles }: { tiles: Tile[] }) {
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
              <MediaView
                media={t.media}
                sizes="(min-width:768px) 60vw, 100vw"
                priority={i === 0}
                className={t.media.kind === "image" ? "object-contain" : ""}
              />
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

export default function GalleryGrid({
  limit,
  separateMedia = false,
}: {
  limit?: number;
  separateMedia?: boolean;
}) {
  if (separateMedia) {
    const photos = TILES.filter(
      (tile) => tile.media.kind === "image",
    );
    const videos = TILES.filter((tile) => tile.media.kind === "video");

    return (
      <div className="space-y-20 sm:space-y-28">
        <section id="photos" aria-labelledby="gallery-photos">
          <h2 id="gallery-photos" className="mb-8 font-display text-2xl font-extrabold uppercase sm:text-3xl">
            Photos
          </h2>
          <TileGrid tiles={photos} />
        </section>
        <section id="videos" aria-labelledby="gallery-videos">
          <h2 id="gallery-videos" className="mb-8 font-display text-2xl font-extrabold uppercase sm:text-3xl">
            Videos
          </h2>
          <TileGrid tiles={videos} />
        </section>
      </div>
    );
  }

  const tiles = TILES.slice(0, limit ?? TILES.length);
  return <TileGrid tiles={tiles} />;
}
