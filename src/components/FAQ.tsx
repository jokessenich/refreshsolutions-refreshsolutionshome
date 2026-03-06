"use client";

import { useState, useRef, useEffect } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects are completed within two to three weeks from approval. Larger sites with more pages or custom features may take a bit longer. We'll give you a clear timeline before we start, and we stick to it.",
  },
  {
    q: "What if I want changes after I see the design?",
    a: "Revisions are built into every plan. We want you to be completely happy with the result. You'll have dedicated revision rounds to adjust layout, copy, colors, and anything else. We don't move forward until you're satisfied.",
  },
  {
    q: "Do I need to switch my hosting?",
    a: "Not necessarily. We can work with your existing hosting provider or help you move to a faster, more reliable option. We'll recommend what makes the most sense for your situation and handle the technical side either way.",
  },
  {
    q: "Can you handle ongoing updates and changes?",
    a: "Absolutely. That's what our maintenance plans are for. Whether you need a quick text change, new photos, or a seasonal update, we take care of it so you can focus on running your business. You can also learn to make simple edits yourself — we'll show you how.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just your current website URL. That's enough for us to create your free homepage preview. If you move forward, we'll ask for your logo, brand colors, photos, and any specific content you'd like included. We guide you through the whole process.",
  },
  {
    q: "What if I don't like the preview?",
    a: "No obligation at all. The preview is free and comes with zero pressure. If it's not what you're looking for, just let us know. We'd rather you find the right fit than feel locked into anything.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item border-b border-light-gray ${open ? "open" : ""}`}>
      <button
        className="w-full bg-transparent border-none py-7 font-body text-[17px] font-medium text-charcoal text-left cursor-pointer flex justify-between items-center gap-4 hover:text-medium-gray transition-colors duration-300"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {item.q}
        <span className="faq-icon w-6 h-6 flex-shrink-0 relative" />
      </button>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ maxHeight: open ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="pb-7 text-base text-medium-gray leading-relaxed">
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useReveal();

  return (
    <section className="py-[clamp(80px,10vw,140px)]" id="faq" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="text-center reveal">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-medium-gray block mb-5">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal leading-[1.15] tracking-tight">
            Good questions.
            <br />
            Clear answers.
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto mt-14">
          {faqs.map((item, i) => (
            <div key={i} className={`reveal ${i > 0 && i < 4 ? `reveal-delay-${i}` : ""}`}>
              <FAQItem item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
