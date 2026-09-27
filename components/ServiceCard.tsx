import Link from "next/link";
import type { Service } from "@/content/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group rounded-2xl border border-border bg-white p-6 transition-colors hover:border-primary"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        {service.category}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-text group-hover:text-primary-dark">
        {service.name}
      </h3>
      <p className="mt-2 text-sm text-muted">{service.homeDesc}</p>
    </Link>
  );
}