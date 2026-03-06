"use client";

import { useReveal } from "./useReveal";

const plans = [
  {
    name: "Basic Care",
    price: "$99 / month",
    features: [
      "Monthly security updates",
      "Uptime monitoring",
      "Monthly backup",
      "1 content update per month",
      "Email support",
    ],
  },
  {
    name: "Standard",
    price: "$199 / month",
    features: [
      "Everything in Basic Care",
      "Weekly backups",
      "Up to 4 content updates",
      "Performance monitoring",
      "Priority email support",
    ],
  },
  {
    name: "Full Service",
    price: "$349 / month",
    features: [
      "Everything in Standard",
      "Unlimited content updates",
      "Monthly performance report",
      "SEO monitoring",
      "Phone & email support",
      "Quarterly design refresh",
    ],
  },
];

export default function Maintenance() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)] bg-charcoal text-white" id="maintenance" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent block mb-5">
            Maintenance Plans
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            Keep it running.
            <br />
            Keep it fresh.
          </h2>
          <p className="text-[clamp(18px,2vw,20px)] leading-relaxed text-soft-gray mt-4 max-w-[540px]">
            Your website shouldn&apos;t be something you launch and forget. These
            plans keep things updated, secure, and working — so you don&apos;t have
            to think about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-14">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} bg-dark-gray p-[clamp(32px,3vw,48px)]`}
            >
              <h3 className="font-display text-2xl font-normal mb-1">{p.name}</h3>
              <div className="text-sm text-accent mb-6">{p.price}</div>
              <ul className="space-y-0">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-[15px] text-soft-gray py-[7px] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
