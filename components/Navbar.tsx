"use client";

import { useState } from "react";

const links = [
  { href: "#why", label: "Why a website" },
  { href: "#process", label: "How it's built" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-bp-line/40 bg-bp-deep/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-wide text-bp-paper">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute h-full w-px bg-signal" />
            <span className="absolute h-px w-full bg-signal" />
          </span>
          CLOUD&nbsp;BUILD
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wider text-bp-mist transition hover:text-bp-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-signal px-4 py-2 font-mono text-xs uppercase tracking-wider text-signal transition hover:bg-signal hover:text-bp-deep"
          >
            Start a project
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-bp-paper transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-bp-paper transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-bp-paper transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-bp-line/40 bg-bp-deep px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-bp-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="border border-signal px-4 py-2 text-center font-mono text-sm uppercase tracking-wider text-signal"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
