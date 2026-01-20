"use client";
import React from "react"; // React ইমপোর্ট করা হলো
import {
  FaHeartbeat,
  FaUserCheck,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa";

const values = [
  {
    title: "Compassion",
    desc: "We care for your loved ones with the same love and empathy as our own family.",
    icon: <FaHeartbeat size={40} />, 
  },
  {
    title: "Professionalism",
    desc: "All our staff are certified, background-checked, and regularly trained.",
    icon: <FaUserCheck size={40} />,
  },
  {
    title: "Reliability",
    desc: "Available 24/7, ensuring that medical help is never more than a call away.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "Integrity",
    desc: "We maintain complete transparency in treatment and billing processes.",
    icon: <FaHandHoldingHeart size={40} />,
  },
];

const CoreValues = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Core Values
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Principles That <span className="text-secondary">Guide</span> Us
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10 hover:border-secondary transition-all group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 group-hover:text-secondary transition-all">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                {val.title}
              </h4>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
