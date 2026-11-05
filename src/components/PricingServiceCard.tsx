import type { PriceService } from "@/lib/pricing";

function formatPrice(amount: number) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function PricingServiceCard({
  service,
}: {
  service: PriceService;
}) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-5 sm:p-6">
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
      <ul className="mt-5 grid flex-1 auto-rows-fr grid-cols-2 gap-2 sm:grid-cols-3">
        {service.options.map((option) => (
          <li
            key={option.label}
            className="flex min-w-0 flex-col justify-between border border-white/10 bg-black/50 p-3"
          >
            <span className="text-xs leading-relaxed text-silver">{option.label}</span>
            <span className="mt-2 font-display text-sm font-bold text-white sm:text-base">
              {formatPrice(option.amount)}
              {option.startingAt && <span className="text-pink">+</span>}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
