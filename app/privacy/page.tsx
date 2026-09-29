import { clinicConfig } from "@/content/clinic-config";

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            Privacy Policy
          </h1>
          <div className="mt-10 space-y-8 text-base text-text">
            <p>
              {clinicConfig.name} respects your privacy and is committed to
              protecting the personal information you share with us through
              this website.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Information We Collect
              </h2>
              <p className="mt-3 text-muted">
                When you use our contact or booking forms, we collect the
                information you provide directly, such as your name, phone
                number, and any message or appointment details you choose to
                share.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                How We Use Your Information
              </h2>
              <p className="mt-3 text-muted">
                Information submitted through this website is used only to
                arrange appointments, communicate with you about your care,
                and provide physiotherapy services. We do not sell or share
                your information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Educational Content
              </h2>
              <p className="mt-3 text-muted">
                Content on this website is provided for general educational
                purposes only and does not replace professional medical
                advice, diagnosis, or treatment. Always consult a qualified
                healthcare provider regarding any medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Appointment Requests
              </h2>
              <p className="mt-3 text-muted">
                Submitting a booking request through this website does not
                guarantee an appointment. All appointments are subject to
                confirmation by {clinicConfig.name} via phone or WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-text">
                Contact Us
              </h2>
              <p className="mt-3 text-muted">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
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

            <p className="text-sm text-muted">
              By using this website, you agree to this Privacy Policy and our
              Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}