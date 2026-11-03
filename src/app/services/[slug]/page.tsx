import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { PAGE_SERVICES, serviceBySlug, SITE } from "@/lib/content";

export function generateStaticParams() {
  return PAGE_SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s || !s.page) return {};
  return {
    title: `${s.title} in Myrtle Beach, SC`,
    description: `${s.blurb} Dun-Rite Detailing & Coatings serves Myrtle Beach, SC. Call ${SITE.phone} for a free quote.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { images: [{ url: s.media.kind === "image" ? s.media.src : s.media.poster! }] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s || !s.page) notFound();
  return <ServicePage service={s} />;
}
