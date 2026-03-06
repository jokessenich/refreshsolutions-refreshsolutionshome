"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClasses =
    "text-sm text-medium-gray hover:text-charcoal transition-colors duration-300";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-[17px] font-medium tracking-tight text-charcoal">
            Clear Web <span className="text-soft-gray font-light">Collective</span>
          </a>

          <ul className="hidden md:flex gap-9">
            <li><a href="#services" className={linkClasses}>Services</a></li>
            <li><a href="#process" className={linkClasses}>Process</a></li>
            <li><a href="#pricing" className={linkClasses}>Pricing</a></li>
            <li><a href="#faq" className={linkClasses}>FAQ</a></li>
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex text-sm font-medium px-6 py-2.5 bg-charcoal text-white rounded-[5px] hover:bg-dark-gray transition-all duration-300"
          >
            Get a Preview
          </a>

          <button
            className="md:hidden flex flex-col justify-between w-7 h-5"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-full h-[1.5px] bg-charcoal" />
            <span className="block w-full h-[1.5px] bg-charcoal" />
            <span className="block w-full h-[1.5px] bg-charcoal" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-3xl font-light text-charcoal"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        {["Services", "Process", "Pricing", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-display text-3xl text-charcoal hover:text-medium-gray transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="font-display text-3xl text-charcoal hover:text-medium-gray transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          Get a Preview
        </a>
      </div>
    </>
  );
}
