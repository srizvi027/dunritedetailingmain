import { NextResponse } from "next/server";

/**
 * Quote / contact submission endpoint.
 *
 * The original site's form destination (a WordPress Fluent Forms instance) is
 * not reachable from outside, so nothing is faked here. Set QUOTE_WEBHOOK_URL
 * in the environment (Vercel → Settings → Environment Variables) to any
 * endpoint that accepts a JSON POST (Formspree, Make, Zapier, Resend relay,
 * a Google Apps Script, etc.). Until it is set this route answers 503 with
 * reason "not_configured" and the UI offers email / phone / online booking
 * instead of pretending the message was sent.
 */
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // honeypot: pretend success to bots
  if (typeof data.website === "string" && data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(data.name);
  const email = str(data.email);
  const phone = str(data.phone);
  if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide your name, phone and a valid email." },
      { status: 400 },
    );
  }

  const url = process.env.QUOTE_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        website: undefined,
        receivedAt: new Date().toISOString(),
        source: "dunritedetailing.com",
      }),
    });
    if (!upstream.ok) throw new Error(`upstream ${upstream.status}`);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "We couldn't send that just now. Please call or email us." },
      { status: 502 },
    );
  }
}
