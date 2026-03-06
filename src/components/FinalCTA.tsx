Working

Updated FinalCTA with correct Formspree form fields: name, website, email
typescript

"use client";

import { useReveal } from "./useReveal";

export default function FinalCTA() {
  const ref = useReveal();

  return (
    <section
      className="py-[clamp(100px,12vw,160px)] bg-charcoal text-white text-center"
      id="contact"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent block mb-5">
            Get Started
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight max-w-[600px] mx-auto">
            Send us your website.
            <br />
            See what&apos;s possible.
          </h2>
          <p className="max-w-[480px] mx-auto mt-5 text-soft-gray text-[17px]">
            We&apos;ll create a free homepage preview — no commitment, no credit
            card, no sales pitch.
          </p>

          <form
            action="https://formspree.io/f/mjgeqddy"
            method="POST"
            className="reveal reveal-delay-1 max-w-[480px] mx-auto mt-10 flex flex-col gap-4 text-left"
          >
            <label className="flex flex-col gap-2 text-[15px] font-medium text-soft-gray">
              Your name:
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-md text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300"
                placeholder="Jane Smith"
              />
            </label>
            <label className="flex flex-col gap-2 text-[15px] font-medium text-soft-gray">
              Your website:
              <input
                type="url"
                name="website"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-md text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300"
                placeholder="https://yourwebsite.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-[15px] font-medium text-soft-gray">
              Your email:
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-md text-white text-[15px] placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors duration-300"
                placeholder="you@example.com"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center text-[15px] font-medium px-9 py-4 bg-accent text-charcoal rounded-md hover:bg-accent-hover transition-all duration-300 mt-2"
            >
              Get Your Free Preview
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
