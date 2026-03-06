"use client";

import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    title: "We create a preview",
    desc: "Send us your current website. We'll design a free homepage preview so you can see exactly what your new site could look like — before you spend a dollar.",
  },
  {
    num: "02",
    title: "You review",
    desc: "Look it over. Share it with your team. Give us feedback. We'll refine the direction until it feels right. No pressure, no commitments at this stage.",
  },
  {
    num: "03",
    title: "We build & launch",
    desc: "Once you approve, we build out the full site, optimize it for every device, connect your domain, and launch. Typical turnaround is about two weeks.",
  },
  {
    num: "04",
    title: "Ongoing support",
    desc: "Need updates, content changes, or ongoing maintenance? We offer simple monthly plans so your site stays current and runs smoothly over time.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)] bg-off-white" id="process" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
            How It Works
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            Four steps.
            <br />
            No surprises.
          </h2>
          <p className="text-[clamp(18px,2vw,20px)] leading-relaxed text-medium-gray mt-4 max-w-[540px]">
            We&apos;ve simplified everything so you can focus on your business.
            Here&apos;s how a typical project looks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(32px,4vw,56px)] mt-14">
          {steps.map((step, i) => (
            <div key={step.num} className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""}`}>
              <div className="font-display text-5xl text-light-gray leading-none mb-5">
                {step.num}
              </div>
              <h3 className="text-[17px] font-medium mb-2.5">{step.title}</h3>
              <p className="text-[15px] text-medium-gray leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
