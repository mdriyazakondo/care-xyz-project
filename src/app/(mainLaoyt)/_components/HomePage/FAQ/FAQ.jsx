"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I book a home visit?",
    a: "You can book easily via our 'Book Now' button or by calling our 24/7 hotline.",
  },
  {
    q: "Are your caregivers certified?",
    a: "Yes, all our nurses and caregivers are background-checked and professionally certified.",
  },
  {
    q: "Do you provide 24/7 emergency care?",
    a: "Absolutely. We have a dedicated team for round-the-clock medical support.",
  },
  {
    q: "Which areas do you cover?",
    a: "Currently, we provide home care services across all major parts of the city.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Support
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary/10 rounded-2xl overflow-hidden bg-primary/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-all"
              >
                <span className="font-bold text-foreground md:text-lg">
                  {faq.q}
                </span>
                <FaChevronDown
                  className={`text-primary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-40" : "max-h-0"}`}
              >
                <p className="p-6 pt-0 text-foreground/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
