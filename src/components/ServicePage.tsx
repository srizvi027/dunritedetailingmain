import Image from "next/image";
import Link from "next/link";
import MediaView from "./MediaView";
import CTA from "./CTA";
import { Reveal, Words, MaskReveal, PinkRule } from "./Reveal";
import {
  COATING_TIERS,
  SITE,
  serviceBySlug,
  serviceHref,
  type Service,
} from "@/lib/content";

/** Reusable template for every dedicated service page. */
export default function ServicePage({ service }: { service: Service }) {
  const isVideo = service.media.kind === "video";
  const related = service.related
    .map((s) => serviceBySlug(s))
    .filter((s): s is Service => !!s);
  const gallery = service.gallery ?? [];
  const isCeramic = service.slug === "ceramic-coating";

  return (
    <>
      {/* cinematic hero */}
      <section className="grain relative flex min-h-[88svh] items-end overflow-hidden bg-black pb-16 pt-36 sm:pb-24">
        <div className="absolute inset-0" aria-hidden>
          {isVideo ? (
            <Image
              src={service.media.poster!}
              alt=""
              fill
              priority
              sizes="100vw"
              className="scale-125 object-cover opacity-40 blur-2xl"
            />
          ) : (
            <Image
              src={service.media.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          )}
          <div className="hex-bg absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/70" />
        </div>

        {isVideo && (
          <div className="absolute inset-y-0 right-0 hidden w-[34vw] max-w-[520px] items-center pr-[5vw] pt-24 md:flex">
            <div className="relative aspect-[9/16] w-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(237,26,112,.35)]">
              <MediaView media={service.media} sizes="30vw" priority />
              <span className="absolute inset-0 border border-white/15" />
            </div>
          </div>
        )}

        <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="eyebrow mb-7 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white">Home</Link> /
            <Link href="/services" className="hover:text-white">Services</Link> /
            <span className="text-pink">{service.title}</span>
          </nav>
          <Words
            as="h1"
            text={service.title}
            className="max-w-[16ch] text-[clamp(2.4rem,8vw,8.6rem)] md:max-w-[60%]"
          />
          <Reveal delay={0.2}>
            <p className="accent mt-6 text-2xl text-white sm:text-4xl">{service.tagline}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
              className="btn btn-pink"
            >
              Get a quote <span className="arrow" aria-hidden>→</span>
            </Link>
            <a href={`tel:${SITE.tel}`} className="btn btn-ghost">
              {SITE.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* description */}
      <section className="relative bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6"><span className="text-pink">01</span> — Overview</p>
            </Reveal>
            <Words
              as="h2"
              text={service.blurb}
              wordClass=""
              className="font-display text-[clamp(1.4rem,2.6vw,2.4rem)] font-bold normal-case leading-[1.15] tracking-tight text-white"
            />
            <PinkRule className="mt-8 w-24" />
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-silver sm:text-lg">
              {service.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.08} y={20}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <h3 className="eyebrow mb-6 text-pink">What&apos;s included</h3>
                <ul className="divide-y divide-white/10">
                  {service.includes.map((x) => (
                    <li key={x} className="flex gap-4 py-4 text-sm font-semibold sm:text-base">
                      <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-pink" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs leading-relaxed text-steel">
                  Pricing depends on your vehicle and its condition. Request a quote for exact
                  details.
                </p>
                <Link
                  href={`/get-a-quote?service=${encodeURIComponent(service.title)}`}
                  className="btn btn-pink mt-6 w-full"
                >
                  Get a quote
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ceramic tiers */}
      {isCeramic && (
        <section id="tiers" className="relative scroll-mt-24 border-y border-white/10 bg-black py-24 sm:py-32">
          <div className="hex-bg absolute inset-0 opacity-50" aria-hidden />
          <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <p className="eyebrow mb-6"><span className="text-pink">02</span> — Coating levels</p>
            </Reveal>
            <Words as="h2" text="Choose your level of protection." className="max-w-4xl text-[clamp(2rem,5.4vw,5.2rem)]" />
            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {COATING_TIERS.map((t, i) => (
                <Reveal key={t.id} delay={i * 0.1}>
                  <article
                    id={t.id}
                    className={`group relative flex h-full flex-col border p-8 transition-colors duration-500 sm:p-10 ${
                      t.badge
                        ? "border-pink bg-pink/10"
                        : "border-white/15 bg-white/[0.02] hover:border-white/40"
                    }`}
                  >
                    {t.badge && (
                      <span className="absolute -top-3 left-8 bg-pink px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.2em]">
                        {t.badge}
                      </span>
                    )}
                    <span className="font-display text-xs text-steel">0{i + 1}</span>
                    <h3 className="mt-10 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight">
                      {t.name}
                    </h3>
                    <p className="mt-4 flex-1 leading-relaxed text-silver">{t.text}</p>
                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(t.name)}`}
                      className="btn btn-ghost mt-10"
                    >
                      Quote this coating
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* media band */}
      {(gallery.length > 0 || !isVideo) && (
        <section className="bg-black pb-24 sm:pb-32">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            {gallery.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {gallery.map((item, index) => (
                  <MaskReveal
                    key={`${service.slug}-${index}`}
                    className="relative aspect-[4/5] overflow-hidden"
                    parallax={24}
                  >
                    <MediaView media={item} sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" />
                  </MaskReveal>
                ))}
              </div>
            ) : (
              <MaskReveal className="aspect-[16/9] w-full sm:aspect-[21/9]" parallax={50}>
                <MediaView media={service.media} sizes="100vw" />
              </MaskReveal>
            )}
          </div>
        </section>
      )}

      {/* related */}
      {related.length > 0 && (
        <section className="bg-black pb-28 pt-6 sm:pb-36">
          <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <p className="eyebrow mb-10"><span className="text-pink">→</span> Related services</p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link href={serviceHref(r)} className="group relative block aspect-[4/5] overflow-hidden bg-graphite">
                    {r.media.kind === "video" ? (
                      <Image
                        src={r.media.poster!}
                        alt={r.media.alt}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      />
                    ) : (
                      <Image
                        src={r.media.src}
                        alt={r.media.alt}
                        fill
                        sizes="(min-width:768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <h3 className="font-display text-xl font-extrabold uppercase leading-tight">{r.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-silver">{r.blurb}</p>
                      <span className="mt-4 block h-[2px] w-10 bg-pink transition-all duration-500 group-hover:w-24" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title={`Book ${service.title.split(" ")[0]}.`}
        text="Request a free quote and we'll recommend the right service for your vehicle."
      />
    </>
  );
}
