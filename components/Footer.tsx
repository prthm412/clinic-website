import Link from "next/link";
import { clinicConfig, currentYear } from "@/content/clinic-config";
import { buildWhatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="mt-auto bg-bg-alt border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-primary-dark">{clinicConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{clinicConfig.tagline}</p>
          <div className="mt-4 flex gap-4 text-sm">
            {clinicConfig.social.instagram && (
              <a
                href={clinicConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary"
              >
                Instagram
              </a>
            )}
            {clinicConfig.social.facebook && (
              <a
                href={clinicConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary"
              >
                Facebook
              </a>
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="text-muted hover:text-primary">About</Link></li>
            <li><Link href="/services" className="text-muted hover:text-primary">Services</Link></li>
            <li><Link href="/faq" className="text-muted hover:text-primary">FAQ</Link></li>
            <li><Link href="/book" className="text-muted hover:text-primary">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{clinicConfig.contact.address}</li>
            <li>
              <a href={`tel:${clinicConfig.contact.phone}`} className="hover:text-primary">
                {clinicConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsappLink(clinicConfig.contact.whatsappNumber)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-primary">
                {clinicConfig.contact.email}
              </a>
            </li>
            <li>{clinicConfig.hours.display}{clinicConfig.hours.note ? ` · ${clinicConfig.hours.note}` : ""}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>
            © {currentYear} {clinicConfig.name}. All rights reserved.
            {clinicConfig.trademarkNumber !== "7917813" ? ` TM: ${clinicConfig.trademarkNumber}` : ""}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}