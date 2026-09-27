"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";

export default function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-medium text-text">{item.q}</span>
        <span
          className={`ml-4 shrink-0 text-primary transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && <p className="mt-3 text-sm text-muted">{item.a}</p>}
    </div>
  );
}