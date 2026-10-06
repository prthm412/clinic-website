import { services } from "@/content/services";

export default function ServicesMarquee() {
  const items = [...services, ...services]; // duplicated for a seamless loop

  return (
    <div className="overflow-hidden border-y border-border bg-white py-4">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((s, i) => (
          <span
            key={`${s.slug}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-muted"
            >
            {s.name}
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            </span>
        ))}
      </div>
    </div>
  );
}