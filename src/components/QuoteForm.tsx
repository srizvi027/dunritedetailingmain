"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONSENT_TEXT, QUOTE_OPTIONS, SITE } from "@/lib/content";

type Status =
  | { s: "idle" }
  | { s: "sending" }
  | { s: "sent" }
  | { s: "unconfigured"; mailto: string }
  | { s: "error"; msg: string };

const field =
  "w-full border border-white/20 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white placeholder:text-steel transition-colors focus:border-pink focus:bg-white/[0.06] focus:outline-none";
const label = "mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-silver";

function Chips({
  name,
  legend,
  options,
  selected,
  toggle,
}: {
  name: string;
  legend: string;
  options: string[];
  selected: Set<string>;
  toggle: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-display text-sm font-extrabold uppercase tracking-wide">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((o) => {
          const on = selected.has(o);
          return (
            <label
              key={o}
              className={`cursor-pointer select-none border px-4 py-2.5 text-[0.82rem] font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-pink ${
                on
                  ? "border-pink bg-pink text-white"
                  : "border-white/20 text-silver hover:border-white/60 hover:text-white"
              }`}
            >
              <input
                type="checkbox"
                name={name}
                value={o}
                checked={on}
                onChange={() => toggle(o)}
                className="sr-only"
              />
              {o}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function QuoteForm() {
  const params = useSearchParams();
  const preset = params.get("service");

  const initial = useMemo(() => {
    const all = [...QUOTE_OPTIONS.interior, ...QUOTE_OPTIONS.exterior, ...QUOTE_OPTIONS.boat];
    if (!preset) return new Set<string>();
    const hit = all.find((o) => o.toLowerCase() === preset.toLowerCase());
    return new Set<string>(hit ? [hit] : []);
  }, [preset]);

  const [picked, setPicked] = useState<Set<string>>(initial);
  const [status, setStatus] = useState<Status>({ s: "idle" });

  const toggle = (v: string) =>
    setPicked((p) => {
      const n = new Set(p);
      if (n.has(v)) n.delete(v);
      else n.add(v);
      return n;
    });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      type: "quote",
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      year: String(fd.get("year") ?? ""),
      make: String(fd.get("make") ?? ""),
      model: String(fd.get("model") ?? ""),
      services: [...picked],
      details: String(fd.get("details") ?? ""),
      smsConsent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""), // honeypot
    };

    const body = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Vehicle: ${payload.year} ${payload.make} ${payload.model}`,
      `Services: ${payload.services.join(", ") || "Not specified"}`,
      `Details: ${payload.details || "—"}`,
      `SMS/MMS consent: ${payload.smsConsent ? "Yes" : "No"}`,
    ].join("\n");
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Quote request: ${payload.year} ${payload.make} ${payload.model}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatus({ s: "sending" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ s: "sent" });
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (data?.reason === "not_configured") {
        setStatus({ s: "unconfigured", mailto });
        return;
      }
      setStatus({
        s: "error",
        msg: data?.message ?? "Something went wrong. Please call or email us instead.",
      });
    } catch {
      setStatus({ s: "error", msg: "Network error. Please call or email us instead." });
    }
  }

  if (status.s === "sent") {
    return (
      <div role="status" className="border border-pink/60 bg-pink/10 p-10 text-center">
        <p className="type-pink font-display text-3xl font-extrabold uppercase">Request received</p>
        <p className="mt-4 text-silver">
          Thanks, we&apos;ll be in touch soon. Need us sooner? Call{" "}
          <a className="u-link text-white" href={`tel:${SITE.tel}`}>
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={label}>Full name *</label>
          <input id="q-name" name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="q-phone" className={label}>Phone number *</label>
          <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(843) 555-0123" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="q-email" className={label}>Email *</label>
          <input id="q-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
        </div>
      </div>

      <div>
        <p className="mb-3 font-display text-sm font-extrabold uppercase tracking-wide">Your vehicle</p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="q-year" className={label}>Year *</label>
            <input id="q-year" name="year" required inputMode="numeric" pattern="[0-9]{4}" maxLength={4} className={field} placeholder="2024" />
          </div>
          <div>
            <label htmlFor="q-make" className={label}>Make *</label>
            <input id="q-make" name="make" required className={field} placeholder="Chevrolet" />
          </div>
          <div>
            <label htmlFor="q-model" className={label}>Model *</label>
            <input id="q-model" name="model" required className={field} placeholder="Tahoe" />
          </div>
        </div>
      </div>

      <Chips name="svc-interior" legend="Interior services" options={QUOTE_OPTIONS.interior} selected={picked} toggle={toggle} />
      <Chips name="svc-exterior" legend="Exterior services" options={QUOTE_OPTIONS.exterior} selected={picked} toggle={toggle} />
      <Chips name="svc-boat" legend="Boating detail" options={QUOTE_OPTIONS.boat} selected={picked} toggle={toggle} />

      <div>
        <label htmlFor="q-details" className={label}>Additional details (optional)</label>
        <textarea
          id="q-details"
          name="details"
          rows={5}
          className={field}
          placeholder="Tell us about the condition of your vehicle, where you'd like service, or anything else."
        />
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex cursor-pointer items-start gap-4 text-sm leading-relaxed text-silver">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 h-5 w-5 shrink-0 accent-[#ed1a70]"
        />
        <span>{CONSENT_TEXT}</span>
      </label>

      {status.s === "unconfigured" && (
        <div role="alert" className="border border-white/20 bg-white/[0.04] p-6 text-sm leading-relaxed text-silver">
          <p className="font-bold text-white">Online submission isn&apos;t connected yet.</p>
          <p className="mt-2">
            Your details are filled in below. Send them by email, call us, or book directly.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={status.mailto} className="btn btn-pink">Email this request</a>
            <a href={`tel:${SITE.tel}`} className="btn btn-ghost">Call {SITE.phone}</a>
            <a href={SITE.bookUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Book online</a>
          </div>
        </div>
      )}
      {status.s === "error" && (
        <p role="alert" className="border border-pink/60 bg-pink/10 p-5 text-sm text-white">
          {status.msg}
        </p>
      )}

      <button type="submit" disabled={status.s === "sending"} className="btn btn-pink w-full sm:w-auto disabled:opacity-60">
        {status.s === "sending" ? "Sending…" : "Request my free quote"}
        <span className="arrow" aria-hidden>→</span>
      </button>
    </form>
  );
}
