"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuGlyph } from "@/components/icons";
import { navLinks } from "@/lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full"
          aria-label="UT SMILE home"
        >
          <Image
            src="/images/smile-logo.png"
            alt=""
            width={480}
            height={470}
            priority
            className="h-12 w-12 transition-transform duration-300 group-hover:-rotate-12"
          />
          <span className="font-display text-2xl font-extrabold tracking-tight">
            UT SMILE
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.95rem] font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:rounded-full after:bg-yellow after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="hidden rounded-full border-2 border-navy bg-red px-5 py-2 text-sm font-bold text-white shadow-sticker-sm transition hover:-translate-y-0.5 hover:shadow-sticker sm:inline-block"
          >
            Join SMILE
          </a>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border-2 border-navy px-4 py-2 text-sm font-bold lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuGlyph open={menuOpen} />
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t-2 border-navy/10 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-xl font-bold hover:bg-yellow-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 pb-2 pt-3 sm:hidden">
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full border-2 border-navy bg-red px-5 py-3 text-center font-bold text-white shadow-sticker-sm"
            >
              Join SMILE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
