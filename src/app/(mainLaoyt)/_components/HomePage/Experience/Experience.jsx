"use client";
import Image from "next/image";
import { FaHeart, FaUserTie, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="bg-background py-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary/5 dark:bg-primary/10 rounded-[3rem] p-8 md:p-16 border border-primary/10">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                  <FaHeart className="text-secondary" /> Why Choose Us
                </h2>
                <h3 className="text-3xl md:text-5xl font-black text-foreground leading-[1.2]">
                  Experience <span className="text-primary">Professional</span>,
                  Compassionate, and{" "}
                  <span className="text-secondary">Tailored</span> Home Care
                </h3>
              </div>

              <p className="text-foreground/70 text-lg leading-relaxed">
                We don`t just provide medical assistance; we provide a
                supportive environment where your loved ones feel valued, safe,
                and cared for with the utmost dignity.
              </p>

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FaUserTie />,
                    text: "Professional Staff",
                    color: "text-primary",
                  },
                  {
                    icon: <FaHeart />,
                    text: "Compassionate Care",
                    color: "text-secondary",
                  },
                  {
                    icon: <FaCheckCircle />,
                    text: "Customized Plans",
                    color: "text-primary",
                  },
                  {
                    icon: <FaPhoneAlt />,
                    text: "24/7 Availability",
                    color: "text-secondary",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`${item.color} bg-background p-3 rounded-xl shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <span className="font-bold text-foreground/80">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                  Get Started Now
                </button>
                <button className="flex items-center gap-3 border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary hover:text-white transition-all">
                  <FaPhoneAlt size={16} /> Contact Support
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-87.5 md:h-112.5 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop"
                  alt="Compassionate home care"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 md:right-10 bg-secondary text-white p-6 rounded-3xl shadow-2xl animate-bounce-slow">
                <p className="text-3xl font-black">10k+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-90">
                  Happy Families
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
