"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-background pt-32 pb-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <FaCheckCircle className="text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Certified Home Care
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-[1.15] mb-6">
              Expert Medical Care in the{" "}
              <span className="text-primary">Comfort</span> of Your{" "}
              <span className="text-secondary">Home</span>
            </h1>

            <p className="text-lg text-foreground/70 mb-10 max-w-lg mx-auto lg:mx-0">
              We provide professional nursing, elderly care, and physiotherapy
              services. Our team is dedicated to your family`s health and
              happiness 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/services"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:opacity-90 shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2"
              >
                Our Services <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary hover:text-white transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <span className="font-bold text-xl text-foreground/50 tracking-widest">
                TRUSTED BY 500+ FAMILIES
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 w-full h-87.5 md:h-125 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
                alt="Professional Nurse assisting elderly patient at home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                  <FaCheckCircle size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground">100%</p>
                  <p className="text-sm text-foreground/60 font-medium">
                    Satisfaction Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
