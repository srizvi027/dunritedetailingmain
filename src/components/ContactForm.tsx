"use client";

import { useState } from "react";
import { CONSENT_TEXT, SITE } from "@/lib/content";

const field =
  "w-full border border-white/20 bg-white/[0.03] px-4 py-3.5 text-[0.95rem] text-white placeholder:text-steel transition-colors focus:border-pink focus:bg-white/[0.06] focus:outline-none";
const label = "mb-2 block text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-silver";

type Status =
  | { s: "idle" | "sending" | "sent" }
  | { s: "unconfigured"; mailto: string }
  | { s: "error"; msg: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ s: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      type: "contact",
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
      smsConsent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Message from ${payload.name}`,
    )}&body=${encodeURIComponent(
      `${payload.message}\n\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}`,
    )}`;

    setStatus({ s: "sending" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) return setStatus({ s: "sent" });
      const data = await res.json().catch(() => ({}));
      if (data?.reason === "not_configured") return setStatus({ s: "unconfigured", mailto });
      setStatus({ s: "error", msg: data?.message ?? "Something went wrong. Please call or email us." });
    } catch {
      setStatus({ s: "error", msg: "Network error. Please call or email us." });
    }
  }

  if (status.s === "sent") {
    return (
      <div role="status" className="border border-pink/60 bg-pink/10 p-10 text-center">
        <p className="type-pink font-display text-3xl font-extrabold uppercase">Message sent</p>
        <p className="mt-4 text-silver">Thanks for reaching out. We&apos;ll reply soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={label}>Full name *</label>
          <input id="c-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="c-phone" className={label}>Phone # *</label>
          <input id="c-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="c-email" className={label}>Email *</label>
        <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="c-msg" className={label}>Message *</label>
        <textarea id="c-msg" name="message" required rows={5} className={field} />
      </div>
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="flex cursor-pointer items-start gap-4 text-sm leading-relaxed text-silver">
        <input type="checkbox" name="consent" className="mt-1 h-5 w-5 shrink-0 accent-[#ed1a70]" />
        <span>{CONSENT_TEXT}</span>
      </label>

      {status.s === "unconfigured" && (
        <div role="alert" className="border border-white/20 bg-white/[0.04] p-6 text-sm leading-relaxed text-silver">
          <p className="font-bold text-white">Online messaging isn&apos;t connected yet.</p>
          <p className="mt-2">Your message is ready. Send it by email or call us.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={status.mailto} className="btn btn-pink">Email this message</a>
            <a href={`tel:${SITE.tel}`} className="btn btn-ghost">Call {SITE.phone}</a>
          </div>
        </div>
      )}
      {status.s === "error" && (
        <p role="alert" className="border border-pink/60 bg-pink/10 p-5 text-sm">{status.msg}</p>
      )}

      <button type="submit" disabled={status.s === "sending"} className="btn btn-pink disabled:opacity-60">
        {status.s === "sending" ? "Sending…" : "Send message"} <span className="arrow" aria-hidden>→</span>
      </button>
    </form>
  );
}
