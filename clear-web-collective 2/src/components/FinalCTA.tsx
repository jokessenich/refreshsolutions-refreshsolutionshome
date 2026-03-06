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
          <div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="mailto:hello@clearwebcollective.com?subject=Free%20Homepage%20Preview&body=Here's%20my%20current%20website%3A%20"
              className="inline-flex items-center justify-center text-[15px] font-medium px-9 py-4 bg-accent text-charcoal rounded-md hover:bg-accent-hover transition-all duration-300"
            >
              Get Your Free Preview
            </a>
            <a
              href="mailto:hello@clearwebcollective.com"
              className="inline-flex items-center justify-center text-[15px] font-medium px-9 py-4 border-[1.5px] border-white/20 text-white rounded-md hover:border-white/50 transition-all duration-300"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
