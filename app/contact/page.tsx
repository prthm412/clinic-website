import { clinicConfig } from "@/content/clinic-config";
import { buildWhatsappLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(clinicConfig.contact.address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted">
            We'll call or WhatsApp you to confirm any appointment
            request. Reach out directly using any of the details below.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl border border-border bg-white p-8 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Address
              </p>
              <p className="mt-2 text-base text-text">
                {clinicConfig.contact.address}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-primary hover:text-primary-dark"
              >
                Get Directions →
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Phone &amp; WhatsApp
              </p>
              <a
                href={`tel:${clinicConfig.contact.phone}`}
                className="mt-2 block text-base text-text hover:text-primary"
              >
                {clinicConfig.contact.phone}
              </a>
              <a
                href={buildWhatsappLink(
                  clinicConfig.contact.whatsappNumber,
                  "Hi, I'd like to get in touch."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-medium text-primary hover:text-primary-dark"
              >
                Message on WhatsApp →
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Email
              </p>
              <a
                href={`mailto:${clinicConfig.contact.email}`}
                className="mt-2 block text-base text-text hover:text-primary"
              >
                {clinicConfig.contact.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Hours
              </p>
              <p className="mt-2 text-base text-text">
                {clinicConfig.hours.display}
              </p>
              {clinicConfig.hours.note && (
                <p className="text-sm text-muted">{clinicConfig.hours.note}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}