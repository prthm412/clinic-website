import Link from "next/link";
import { fullFaqs } from "@/content/faq";
import FaqAccordionItem from "@/components/FaqAccordionItem";

export default function FaqPage() {
  return (
    <main className="flex-1">
      <section className="bg-bg">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-primary-dark">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted">
            Everything you need to know before your first visit.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {fullFaqs.map((item) => (
            <FaqAccordionItem key={item.q} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Reach out directly and we&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full border border-primary px-8 py-3.5 text-base font-semibold text-primary hover:bg-bg-alt transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book"
              className="w-full sm:w-auto rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}