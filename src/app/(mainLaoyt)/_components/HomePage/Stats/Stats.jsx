"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserShield,
  FaSmileBeam,
  FaHospitalUser,
  FaAward,
} from "react-icons/fa";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    return num >= 1000 ? (num / 1000).toFixed(1) + "k" : num;
  });

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const numericValue = value.includes("k")
        ? parseFloat(value) * 1000
        : parseFloat(value);
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
  {
    label: "Successful Care",
    value: "15k+",
    icon: <FaHospitalUser size={30} />,
    desc: "Patients served with love",
  },
  {
    label: "Expert Staff",
    value: "120+",
    icon: <FaUserShield size={30} />,
    desc: "Certified professionals",
  },
  {
    label: "Happy Families",
    value: "98%",
    icon: <FaSmileBeam size={30} />,
    desc: "Positive feedback rate",
  },
  {
    label: "Years of Trust",
    value: "10+",
    icon: <FaAward size={30} />,
    desc: "Award winning service",
  },
];

const Stats = () => {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/5 mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  {stat.icon}
                </motion.div>

                <h4 className="text-3xl md:text-5xl font-black text-foreground mb-2 flex">
                  <Counter value={stat.value} />
                  {stat.value.includes("%") && "%"}
                  {stat.value.includes("+") && !stat.value.includes("k") && "+"}
                </h4>

                <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className="text-foreground/50 text-xs font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
