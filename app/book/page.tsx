"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { clinicConfig } from "@/content/clinic-config";

export default function BookPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      preferredTime: (form.elements.namedItem("preferredTime") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
              Book an Appointment
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted">
              Fill out the form below and we&apos;ll call or WhatsApp you to
              confirm your appointment time. This isn&apos;t an instant
              booking, just your first step toward one.
            </p>
          </div>

          {status === "success" ? (
            <div className="mt-10 rounded-2xl border border-success bg-bg-alt p-8 text-center">
              <p className="text-lg font-semibold text-text">
                Request received!
              </p>
              <p className="mt-2 text-muted">
                We&apos;ll call or WhatsApp you shortly to confirm your
                appointment. If it&apos;s urgent, feel free to reach us
                directly at{" "}
                <a
                  href={`tel:${clinicConfig.contact.phone}`}
                  className="text-primary hover:text-primary-dark"
                >
                  {clinicConfig.contact.phone}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text">
                  Service You&apos;re Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-text">
                  Preferred Day / Time
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  placeholder="e.g. Weekday mornings"
                  className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text">
                  Anything else we should know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-text"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}