import Link from "next/link";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted">
            Nine focus areas, one hands-on approach — every plan built around
            what you actually need.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-2xl border border-border bg-white p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {service.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-text">
                {service.name}
              </h2>
              <p className="mt-3 text-base text-muted">{service.desc}</p>
              <p className="mt-4 text-sm font-medium text-text">
                <span className="text-primary">Who it&apos;s for:</span>{" "}
                {service.who}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium text-primary-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Reach out and we&apos;ll help you figure out the right starting
            point.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}