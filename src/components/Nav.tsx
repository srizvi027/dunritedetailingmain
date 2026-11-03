"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, NAV_SERVICES, SITE } from "@/lib/content";

const Chevron = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 12 12"
    width="10"
    height="10"
    aria-hidden
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M2.5 4.5 6 8l3.5-3.5" />
  </svg>
);

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [svc, setSvc] = useState(false); // desktop services dropdown
  const [sub, setSub] = useState<string | null>(null); // desktop nested submenu
  const [mSvc, setMSvc] = useState(false); // mobile services accordion
  const [mSub, setMSub] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on route change
  useEffect(() => {
    setOpen(false);
    setSvc(false);
    setSub(null);
  }, [pathname]);

  // lock scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("dr:scroll-lock", { detail: open }));
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSvc(false);
        setSub(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hoverOpen = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSvc(true);
  }, []);
  const hoverClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setSvc(false);
      setSub(null);
    }, 160);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-black/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
        }`}
      >
        <div className="border-b border-white/10 bg-pink px-4 py-2 text-center text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-white sm:text-xs sm:tracking-[0.18em]">
          Free custom quotes. Call us any time{" "}
          <a href={`tel:${SITE.tel}`} className="whitespace-nowrap underline underline-offset-2 hover:text-black">
            {SITE.phone}
          </a>
        </div>
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <Link href="/" aria-label="Dun-Rite Detailing & Coatings, home" className="relative z-[110] flex items-center gap-3">
            <Image src="/img/logo.png" alt="" width={160} height={160} unoptimized className="h-12 w-12" />
            <span className="hidden font-display text-[0.7rem] font-extrabold uppercase leading-tight tracking-[0.22em] sm:block">
              Dun-Rite
              <span className="block text-[0.52rem] font-semibold tracking-[0.34em] text-silver">
                Detailing &amp; Coatings
              </span>
            </span>
          </Link>

          {/* desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) =>
              l.label === "Services" ? (
                <li
                  key={l.href}
                  className="relative"
                  onMouseEnter={hoverOpen}
                  onMouseLeave={hoverClose}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setSvc(false);
                      setSub(null);
                    }
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <Link
                      href={l.href}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="u-link py-6 text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={svc}
                      aria-controls="services-menu"
                      onClick={() => setSvc((v) => !v)}
                      className="p-1 text-silver hover:text-white"
                    >
                      <Chevron className={`transition-transform duration-300 ${svc ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {svc && (
                      <motion.div
                        id="services-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[340px] -translate-x-1/2"
                      >
                        <div className="relative border border-white/10 bg-black/95 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,.9)] backdrop-blur-xl">
                          <span className="absolute inset-x-0 top-0 h-[2px] bg-pink" />
                          <ul>
                            {NAV_SERVICES.map((item) => {
                              const hasKids = !!item.children;
                              return (
                                <li
                                  key={item.title}
                                  className="relative"
                                  onMouseEnter={() => setSub(hasKids ? item.title : null)}
                                  onFocus={() => setSub(hasKids ? item.title : null)}
                                >
                                  <Link
                                    href={item.href}
                                    className="group flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
                                  >
                                    <span>
                                      <span className="block font-display text-[0.8rem] font-bold uppercase tracking-wide">
                                        {item.title}
                                      </span>
                                      <span className="mt-0.5 block text-xs text-steel transition-colors group-hover:text-silver">
                                        {item.desc}
                                      </span>
                                    </span>
                                    {hasKids ? (
                                      <Chevron className="-rotate-90 text-pink" />
                                    ) : (
                                      <span className="text-pink opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                                        →
                                      </span>
                                    )}
                                  </Link>

                                  {hasKids && sub === item.title && (
                                    <div className="absolute left-full top-0 w-[270px] pl-1">
                                      <ul className="relative border border-white/10 bg-black/95 p-2 backdrop-blur-xl">
                                        <span className="absolute inset-y-0 left-0 w-[2px] bg-pink" />
                                        {item.children!.map((c) => (
                                          <li key={c.href}>
                                            <Link
                                              href={c.href}
                                              className="group block px-4 py-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
                                            >
                                              <span className="block text-[0.82rem] font-bold">
                                                {c.title}
                                              </span>
                                              <span className="block text-xs text-steel group-hover:text-silver">
                                                {c.desc}
                                              </span>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                          <Link
                            href="/services"
                            className="mt-1 block border-t border-white/10 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pink hover:text-white"
                          >
                            View all services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className="u-link py-6 text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                  >
                    {l.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={SITE.bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-pink relative z-[110] !px-5 !py-3 sm:!px-7"
            >
              Book now
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-[110] flex h-12 w-12 flex-col items-center justify-center gap-[6px] lg:hidden"
            >
              <span className={`h-[2px] w-7 bg-white transition-transform duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-7 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-7 bg-white transition-transform duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="hex-bg fixed inset-0 z-[95] overflow-y-auto bg-black pt-[112px]"
          >
            <div className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-12">
              <ul className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-white/10"
                  >
                    {l.label === "Services" ? (
                      <div>
                        <button
                          type="button"
                          aria-expanded={mSvc}
                          onClick={() => setMSvc((v) => !v)}
                          className="flex w-full items-center justify-between py-5 font-display text-3xl font-extrabold uppercase tracking-tight"
                        >
                          Services
                          <Chevron className={`h-5 w-5 text-pink transition-transform ${mSvc ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mSvc && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              {NAV_SERVICES.map((item) => (
                                <li key={item.title} className="border-t border-white/5">
                                  {item.children ? (
                                    <>
                                      <button
                                        type="button"
                                        aria-expanded={mSub}
                                        onClick={() => setMSub((v) => !v)}
                                        className="flex w-full items-center justify-between py-4 pl-2 text-left"
                                      >
                                        <span>
                                          <span className="block font-bold">{item.title}</span>
                                          <span className="block text-xs text-steel">{item.desc}</span>
                                        </span>
                                        <Chevron className={`text-pink transition-transform ${mSub ? "rotate-180" : ""}`} />
                                      </button>
                                      {mSub && (
                                        <ul className="mb-3 ml-2 border-l-2 border-pink pl-4">
                                          {item.children.map((c) => (
                                            <li key={c.href}>
                                              <Link href={c.href} className="block py-2.5 text-silver hover:text-white">
                                                {c.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </>
                                  ) : (
                                    <Link href={item.href} className="block py-4 pl-2">
                                      <span className="block font-bold">{item.title}</span>
                                      <span className="block text-xs text-steel">{item.desc}</span>
                                    </Link>
                                  )}
                                </li>
                              ))}
                              <li className="border-t border-white/5">
                                <Link href="/services" className="block py-4 pl-2 text-xs font-bold uppercase tracking-[0.2em] text-pink">
                                  View all services →
                                </Link>
                              </li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={l.href}
                        aria-current={isActive(l.href) ? "page" : undefined}
                        className="block py-5 font-display text-3xl font-extrabold uppercase tracking-tight aria-[current=page]:text-pink"
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 space-y-3 text-sm text-silver">
                <Link href="/get-a-quote" className="btn btn-ghost w-full">
                  Get a free quote
                </Link>
                <a href={`tel:${SITE.tel}`} className="block pt-4 font-display text-xl font-bold text-white">
                  {SITE.phone}
                </a>
                <p>{SITE.location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
