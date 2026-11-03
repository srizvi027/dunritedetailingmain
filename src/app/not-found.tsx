import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hex-bg flex min-h-[90svh] flex-col items-center justify-center px-5 text-center">
      <p className="eyebrow mb-6">Error 404</p>
      <h1 className="type-3d text-[clamp(4rem,18vw,14rem)]">Lost.</h1>
      <p className="mt-6 max-w-md text-silver">That page took a wrong turn. Let&apos;s get you back on the road.</p>
      <div className="mt-10 flex gap-3">
        <Link href="/" className="btn btn-pink">Home</Link>
        <Link href="/services" className="btn btn-ghost">Services</Link>
      </div>
    </section>
  );
}
