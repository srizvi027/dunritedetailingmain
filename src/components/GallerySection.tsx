import Link from "next/link";
import GalleryGrid from "./GalleryGrid";
import { Reveal, Words } from "./Reveal";

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-36" aria-labelledby="work-h">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">
                <span className="text-pink">03</span> — Our work
              </p>
            </Reveal>
            <Words
              as="h2"
              text="The art of the finish."
              className="text-[clamp(2.1rem,6.8vw,6.6rem)]"
            />
          </div>
          <Reveal delay={0.1}>
            <Link href="/gallery" className="btn btn-ghost">
              Full gallery <span className="arrow" aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
        <GalleryGrid limit={4} />
      </div>
    </section>
  );
}
