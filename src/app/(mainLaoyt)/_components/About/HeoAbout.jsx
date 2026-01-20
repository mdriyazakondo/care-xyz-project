"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-background pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Who We Are
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-8">
              We Are Dedicated To{" "}
              <span className="text-secondary">Improve</span> Your Quality Of
              Life.
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Founded with a vision to provide hospital-grade care at the
              comfort of your home. We believe that healing happens best where
              the heart is — at home.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-foreground">Our Mission</h4>
                <p className="text-sm text-foreground/60 mt-2">
                  To provide accessible and professional healthcare to every
                  doorstep in Bangladesh.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-bold text-foreground">Our Vision</h4>
                <p className="text-sm text-foreground/60 mt-2">
                  To become the most trusted home healthcare partner for
                  families nationwide.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-100 md:h-125 rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
              alt="Healthcare Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
