import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PAGE_SERVICES, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 pb-10 pt-20 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-flex items-center gap-4" aria-label="Dun-Rite home">
            <Image src="/img/logo.png" alt="Dun-Rite" width={160} height={160} unoptimized className="h-20 w-20" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver">
            Professional mobile and in-shop detailing, ceramic coatings and paint correction,
            serving Myrtle Beach and the Grand Strand.
          </p>
          <p className="accent mt-5 text-xl text-white">{SITE.tagline}</p>
          <Link href="/get-a-quote" className="btn btn-pink mt-8">
            Book now <span className="arrow" aria-hidden>→</span>
          </Link>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h2 className="eyebrow mb-5 text-pink">Navigate</h2>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="u-link text-silver hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-a-quote" className="u-link text-silver hover:text-white">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-5 text-pink">Services</h2>
            <ul className="space-y-3 text-sm">
              {PAGE_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="u-link text-silver hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="eyebrow mb-5 text-pink">Contact</h2>
            <address className="space-y-3 text-sm not-italic text-silver">
              <p>{SITE.name}</p>
              <p>
                <a href={`tel:${SITE.tel}`} className="u-link text-white">
                  {SITE.phone}
                </a>
              </p>
              <p className="break-all">
                <a href={`mailto:${SITE.email}`} className="u-link text-white">
                  {SITE.email}
                </a>
              </p>
              <p>{SITE.location}</p>
            </address>
            <ul className="mt-6 flex gap-5 text-sm">
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="u-link text-silver hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="u-link text-silver hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-6 text-xs text-steel sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>Serving {SITE.areas.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
