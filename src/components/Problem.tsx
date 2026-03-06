"use client";

import { useReveal } from "./useReveal";

const problems = [
  {
    title: "People leave before they read a word.",
    desc: "If your site looks like it was built in 2014, visitors assume your business is behind too. First impressions happen in seconds — and most don't come back.",
  },
  {
    title: "It doesn't work on phones.",
    desc: "More than half your visitors are on mobile. If your site is hard to read or slow to load on a phone, you're turning away the majority of your potential customers.",
  },
  {
    title: "You're invisible on Google.",
    desc: "Search engines penalize slow, poorly structured websites. If your competitors have modern sites and you don't, they're getting the calls that should be yours.",
  },
  {
    title: "It's too complicated to update.",
    desc: "If changing a phone number on your website requires a developer, something is wrong. Your site should be easy to manage — not a source of frustration.",
  },
];

export default function Problem() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)] bg-off-white" id="problem" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
            The Problem
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            An outdated website
            <br />
            costs you more than
            <br />
            you think.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(48px,6vw,96px)] mt-12">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} py-9 border-t border-light-gray`}
            >
              <h3 className="text-lg font-medium leading-snug">{item.title}</h3>
              <p className="text-medium-gray mt-3 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
