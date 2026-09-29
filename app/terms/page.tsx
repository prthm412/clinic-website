import { clinicConfig } from "@/content/clinic-config";

export default function TermsPage() {
  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            Terms of Service
          </h1>
          <div className="mt-10 space-y-8 text-base text-text">
            <p>
              These terms govern your use of the {clinicConfig.name} website.
              By using this site, you agree to the terms outlined below.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Website Use
              </h2>
              <p className="mt-3 text-muted">
                This website is provided for informational purposes and to
                help you get in touch with {clinicConfig.name} regarding our
                physiotherapy services. Content on this site is for general
                educational purposes only and does not replace professional
                medical advice, diagnosis, or treatment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Appointment Requests
              </h2>
              <p className="mt-3 text-muted">
                Submitting a request through our booking form is not a
                confirmed appointment. All appointments are confirmed
                directly by {clinicConfig.name} via phone or WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Rescheduling &amp; Cancellations
              </h2>
              <p className="mt-3 text-muted">
                If you need to reschedule or cancel an appointment, please
                contact us directly by phone or WhatsApp as soon as possible.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Limitation of Liability
              </h2>
              <p className="mt-3 text-muted">
                While we strive to keep information on this website accurate
                and up to date, {clinicConfig.name} makes no warranties about
                the completeness or accuracy of website content, and is not
                liable for any decisions made solely on the basis of it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Contact Us
              </h2>
              <p className="mt-3 text-muted">
                Questions about these terms can be directed to{" "}
                <a
                  href={`mailto:${clinicConfig.contact.email}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {clinicConfig.contact.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${clinicConfig.contact.phone}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {clinicConfig.contact.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}