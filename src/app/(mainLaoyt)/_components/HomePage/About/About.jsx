"use client";
import Image from "next/image";
import { FaAward, FaUserNurse, FaClock, FaCheckCircle } from "react-icons/fa";

const stats = [
  { label: "Years Experience", value: "12+", icon: <FaAward /> },
  { label: "Expert Nurses", value: "85+", icon: <FaUserNurse /> },
  { label: "Active Families", value: "500+", icon: <FaCheckCircle /> },
];

const About = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 w-full h-100 md:h-137.5 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
                alt="Caregiver"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-10 -right-4 md:-right-8 bg-background p-6 rounded-2xl shadow-2xl z-20 border border-primary/10 max-w-50">
              <div className="flex flex-col items-center text-center">
                <div className="text-secondary mb-2">
                  <FaClock size={30} />
                </div>
                <p className="text-xl font-bold text-foreground">
                  24/7 Support
                </p>
                <p className="text-xs text-foreground/60 mt-1 font-medium">
                  Emergency care ready.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              About Our Organization
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Leading the Way in{" "}
              <span className="text-secondary">Compassionate</span> Home
              Healthcare
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Since 2012, HomeCare Services has been dedicated to bridging the
              gap between hospital-level care and the comfort of your home.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Certified and Background-checked Staff",
                "Personalized Care Plans",
                "Regular Health Monitoring",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <FaCheckCircle className="text-primary" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 border-t border-primary/10 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-primary mb-2 flex justify-center md:justify-start">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-black text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-foreground/50 font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
