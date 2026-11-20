import type { PriceService } from "@/lib/pricing";
import MediaView from "./MediaView";

function formatPrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function PricingServiceCard({
  service,
}: {
  service: PriceService;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03]">
      {service.media && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite">
          <MediaView
            media={service.media}
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"
            aria-hidden
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-sm font-bold uppercase leading-relaxed tracking-wide sm:text-base">
            {service.name}
          </h3>
          {service.badge && (
            <span className="bg-pink px-2 py-1 text-[0.55rem] font-extrabold uppercase tracking-[0.15em] text-white">
              {service.badge}
            </span>
          )}
        </div>
        {service.note && <p className="mt-2 text-sm leading-relaxed text-silver">{service.note}</p>}
        {service.duration && (
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-steel">
            {service.duration}
          </p>
        )}
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {service.options.map((option) => (
            <li
              key={option.label}
              className="flex min-h-[88px] min-w-0 flex-col gap-3 border border-white/10 bg-black/50 p-3"
            >
              <span className="text-xs leading-relaxed text-silver">{option.label}</span>
              <span className="font-display text-sm font-bold text-white sm:text-base">
                {formatPrice(option.amount)}
                {option.startingAt && <span className="text-pink">+</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
