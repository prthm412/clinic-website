import Link from "next/link";
import { clinicConfig } from "@/content/clinic-config";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/faq";
import { buildWhatsappLink } from "@/lib/whatsapp";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordionItem from "@/components/FaqAccordionItem";
import Image from "next/image";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-bg-alt px-4 py-1.5 text-sm font-medium text-primary-dark">
            <span className="h-2 w-2 rounded-full bg-success" />
            Physiotherapists at {clinicConfig.hospital.name}
          </p>

          <h1 className="mt-5 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-primary-dark">
            {clinicConfig.tagline}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0">
            Hands-on physiotherapy from two qualified physios who take the
            time to explain what's going on, and how you'll get
            better. Based at {clinicConfig.hospital.name}, Greater Noida.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href={buildWhatsappLink(
                clinicConfig.contact.whatsappNumber,
                "Hi, I'd like to book a physiotherapy appointment."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full border border-primary px-8 py-3.5 text-base font-semibold text-primary hover:bg-bg-alt transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          <a
            href={`tel:${clinicConfig.contact.phone}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-primary"
          >
            Or call us directly: <span className="font-semibold text-text">{clinicConfig.contact.phone}</span>
          </a>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <p className="text-sm font-semibold text-text">In-Clinic</p>
              <p className="mt-1 text-xs text-muted">At Promhex, Greater Noida</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Home Visits</p>
              <p className="mt-1 text-xs text-muted">Available on request</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Quick Response</p>
              <p className="mt-1 text-xs text-muted">Call or WhatsApp</p>
            </div>
          </div>
        </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/cabin.jpeg"
              alt={`${clinicConfig.name} clinic room`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

    <div className="mb-12 sm:mb-16">
      <ServicesMarquee />
    </div>

      {/* Meet the team preview */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <Link
              href={`/about#${clinicConfig.team.physio1.slug}`}
              className="group text-center"
            >
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-border">
                <Image
                  src={clinicConfig.team.physio1.image}
                  alt={clinicConfig.team.physio1.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-semibold text-text group-hover:text-primary-dark">
                {clinicConfig.team.physio1.name}
              </p>
              <p className="text-sm text-muted">
                {clinicConfig.team.physio1.qualifications}
              </p>
            </Link>

            <Link
              href={`/about#${clinicConfig.team.physio2.slug}`}
              className="group text-center"
            >
              <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-border">
                <Image
                  src={clinicConfig.team.physio2.image}
                  alt={clinicConfig.team.physio2.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-semibold text-text group-hover:text-primary-dark">
                {clinicConfig.team.physio2.name}
              </p>
              <p className="text-sm text-muted">
                {clinicConfig.team.physio2.qualifications}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              What We Treat
            </h2>
            <p className="mt-3 text-muted">
              Nine focus areas, one hands-on approach.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text">
              What to Expect
            </h2>
            <p className="mt-3 text-muted">
              From your first message to your first session.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Call, WhatsApp, or fill out our booking form.",
              },
              {
                step: "02",
                title: "We Confirm",
                desc: "We'll call or WhatsApp you to confirm a time that works.",
              },
              {
                step: "03",
                title: "First Session",
                desc: "A full assessment, followed by hands-on treatment and a clear plan.",
              },
              {
                step: "04",
                title: "Ongoing Care",
                desc: "Follow-up sessions tailored to your recovery, at your pace.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-bg-alt p-6"
              >
                <p className="text-3xl font-bold text-primary/30">{item.step}</p>
                <p className="mt-3 text-base font-semibold text-text">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            Both physiotherapists at {clinicConfig.name} also practice at{" "}
            {clinicConfig.hospital.name}, bringing hospital-grade assessment and
            treatment to an independent clinic setting.
          </p>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-text">
              Common Questions
            </h2>
            <div className="mt-8">
              {homeFaqs.map((item) => (
                <FaqAccordionItem key={item.q} item={item} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                See all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-dark">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">
            We'll call or WhatsApp you to confirm your appointment time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${clinicConfig.contact.phone}`}
              className="w-full sm:w-auto rounded-full border border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {clinicConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}