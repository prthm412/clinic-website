import Link from "next/link";
import { clinicConfig } from "@/content/clinic-config";
import PhysioCard from "@/components/PhysioCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Intro */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            About {clinicConfig.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted">
            {clinicConfig.name} is run by two qualified physiotherapists who
            treat every patient with a clear, individual plan, rather than a
            one-size-fits-all routine. Both bring over a decade of hands-on
            clinical experience to every session.
          </p>
        </div>
      </section>

      {/* Clinic space */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/cabin.jpeg"
              alt={`${clinicConfig.name} treatment room`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Physio cards */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            <PhysioCard physio={clinicConfig.team.physio1} />
            <PhysioCard physio={clinicConfig.team.physio2} />
          </div>
        </div>
      </section>

      {/* Hospital affiliation — credibility framing */}
      <section className="bg-bg">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Hospital-Grade Standards, Independent Care
          </h2>
          <p className="mt-6 text-base text-muted">
            Alongside their work at {clinicConfig.name}, both physiotherapists
           practice at {clinicConfig.hospital.name}, in{" "}
            {clinicConfig.hospital.department}. That means the same assessment rigor and clinical standards
            you'd expect from a hospital setting, applied here in a
            focused, one-on-one clinic environment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Ready to book a session?
          </h2>
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