"use client";

import { useReveal } from "./useReveal";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-accent stroke-[1.5] fill-none">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Complete Redesign",
    desc: "A full visual rebuild with clean, modern layouts that reflect the quality of your business and make visitors want to stay.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-accent stroke-[1.5] fill-none">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: "Mobile Optimization",
    desc: "Your site will look and work beautifully on every device — phone, tablet, and desktop. No pinching. No squinting.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-accent stroke-[1.5] fill-none">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Speed & Performance",
    desc: "Fast load times, clean code, and proper structure so your site performs well on search engines and keeps visitors engaged.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-accent stroke-[1.5] fill-none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Launch & Setup",
    desc: "We handle hosting, domain connection, SSL, and everything technical so you don't have to think about it. Just approve, and we go live.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)]" id="services" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
            What We Do
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            Everything your website
            <br />
            needs. Nothing it doesn&apos;t.
          </h2>
          <p className="text-[clamp(18px,2vw,20px)] leading-relaxed text-medium-gray mt-4 max-w-[540px]">
            We handle the full rebuild — design, development, content, and launch.
            You get a modern, fast, professional website without the complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-light-gray border border-light-gray mt-14">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} bg-white p-[clamp(28px,3vw,44px)]`}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-[17px] font-medium mb-3">{s.title}</h3>
              <p className="text-[15px] text-medium-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
