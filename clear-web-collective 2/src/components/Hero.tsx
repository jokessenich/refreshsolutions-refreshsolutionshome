"use client";

import { useReveal } from "./useReveal";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="min-h-screen flex items-center pt-[100px] pb-20" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-[780px]">
          <div className="reveal">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
              Website Rebuilds for Growing Businesses
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 font-display text-[clamp(44px,6.5vw,80px)] font-normal leading-[1.05] tracking-tight text-charcoal">
            Your website
            <br />
            should work as hard
            <br />
            as you do.
          </h1>

          <p className="reveal reveal-delay-2 text-[clamp(18px,2.2vw,22px)] leading-relaxed text-medium-gray max-w-[540px] mt-7 font-light">
            We take outdated, underperforming websites and rebuild them into clean,
            modern sites that actually bring in business. No hassle. No jargon. Just
            results.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 mt-11">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-[15px] font-medium px-9 py-4 bg-charcoal text-white rounded-md hover:bg-dark-gray hover:-translate-y-px hover:shadow-lg transition-all duration-300"
            >
              Get a Free Preview
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center text-[15px] font-medium px-9 py-4 border-[1.5px] border-light-gray text-charcoal rounded-md hover:border-charcoal transition-all duration-300"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-4 flex flex-wrap gap-8 sm:gap-12 mt-20 pt-10 border-t border-light-gray">
          {[
            { value: "2 weeks", label: "Average turnaround" },
            { value: "100%", label: "Mobile optimized" },
            { value: "$3k", label: "Starting price" },
          ].map((item) => (
            <div key={item.label} className="text-sm text-soft-gray">
              <strong className="block text-[28px] font-normal font-display text-charcoal mb-1">
                {item.value}
              </strong>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
