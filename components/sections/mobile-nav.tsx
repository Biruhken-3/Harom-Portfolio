"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

/** Mobile hamburger menu with slide-down panel. */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-ink/15"
      >
        <span
          className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span className={`h-0.5 w-5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden border-b border-ink/10 bg-surface/95 backdrop-blur transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-teal/10 hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-teal px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
