"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinicConfig } from "@/content/clinic-config";
import { buildWhatsappLink } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header className="sticky top-0 z-50 bg-bg/20 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-primary-dark"
          onClick={() => setMenuOpen(false)}
        >
          {clinicConfig.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-primary-dark"
                  : "text-text hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={buildWhatsappLink(clinicConfig.contact.whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:text-primary-dark"
          >
            WhatsApp Us
          </a>
          <Link
            href="/book"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      
    </header>
    {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-border bg-bg px-4 sm:px-6 py-6 flex flex-col gap-4">          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium ${
                isActive(link.href) ? "text-primary-dark" : "text-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={buildWhatsappLink(clinicConfig.contact.whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-primary"
          >
            WhatsApp Us
          </a>
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-accent px-5 py-3 text-center text-base font-semibold text-white"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
}