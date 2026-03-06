"use client";

import { useReveal } from "./useReveal";

const tiers = [
  {
    tier: "Essential",
    name: "Clean Start",
    price: "Starting at $3,000",
    desc: "For businesses that need a clean, modern website without a lot of complexity. Ideal if you have a simple site that just needs to look and work better.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "Hosting & domain setup",
      "2 rounds of revisions",
    ],
    featured: false,
  },
  {
    tier: "Recommended",
    name: "Full Rebuild",
    price: "Starting at $5,000",
    desc: "For businesses that want more — more pages, more polish, and a site that's built to convert visitors into customers.",
    features: [
      "Up to 10 pages",
      "Custom design & layout",
      "Conversion-focused structure",
      "Advanced SEO",
      "Speed optimization",
      "Google Analytics setup",
      "3 rounds of revisions",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    name: "Complete Overhaul",
    price: "Starting at $8,000",
    desc: "For established businesses that need a comprehensive web presence — multiple service pages, booking systems, and ongoing strategy.",
    features: [
      "15+ pages",
      "Fully custom design",
      "Booking or scheduling integration",
      "Content writing assistance",
      "Local SEO strategy",
      "Priority support",
      "Unlimited revisions",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)]" id="pricing" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
            Pricing
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            Straightforward pricing.
            <br />
            No hidden fees.
          </h2>
          <p className="text-[clamp(18px,2vw,20px)] leading-relaxed text-medium-gray mt-4 max-w-[540px]">
            Every project is a little different, but here&apos;s a clear starting
            point. We&apos;ll give you an exact quote before any work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-light-gray border border-light-gray mt-14">
          {tiers.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} flex flex-col p-[clamp(32px,3vw,48px)] ${
                t.featured ? "bg-off-white" : "bg-white"
              }`}
            >
              <span
                className={`text-xs font-medium tracking-[0.15em] uppercase mb-3 ${
                  t.featured ? "text-accent" : "text-soft-gray"
                }`}
              >
                {t.tier}
              </span>
              <h3 className="font-display text-[28px] font-normal mb-2">{t.name}</h3>
              <div className="text-[15px] text-medium-gray mb-6">{t.price}</div>
              <p className="text-[15px] text-medium-gray leading-relaxed mb-7 pb-7 border-b border-light-gray">
                {t.desc}
              </p>
              <ul className="mb-8 flex-grow space-y-0">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="text-[15px] text-medium-gray py-2 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center self-start text-[15px] font-medium px-9 py-4 bg-charcoal text-white rounded-md hover:bg-dark-gray hover:-translate-y-px hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
