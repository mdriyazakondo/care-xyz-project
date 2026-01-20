"use client";
import Image from "next/image";

const OurStory = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 p-4 bg-background border border-primary/10 rounded-[4rem] rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="relative h-112.5 w-full rounded-[3.5rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
                  alt="Founder Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">
              Our Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
              A Decade of <span className="text-secondary">Healing</span> and
              Hope
            </h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              What started as a small initiative with 2 nurses has now grown
              into a network of over 100+ medical professionals serving
              thousands of families across the Rangpur division.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Our founder, having faced the struggle of finding home care for
              his own parents, realized the need for a professional and
              organized home care system in Bangladesh. Today, we are proud to
              be the pioneers in this field.
            </p>
            <div className="pt-6">
              <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
