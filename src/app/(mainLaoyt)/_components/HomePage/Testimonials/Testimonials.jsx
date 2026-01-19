"use client";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "Rahim Ullah",
    role: "Patient's Son",
    text: "The nursing care provided for my father was exceptional. They treat patients like family. Truly professional and reliable service.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Jannatul Ferdous",
    role: "Regular Client",
    text: "Physiotherapy at home saved me so much time and hassle. The doctors are very punctual, expert, and extremely caring.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Michael Roberts",
    role: "Elderly Care Client",
    text: "Finding a trustworthy caregiver was hard until I found HomeCare. Their 24/7 support gives our family great peace of mind.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Client Stories
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            What Our <span className="text-secondary">Clients</span> Say
          </h3>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            Real feedback from the families we have had the privilege to serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-primary/5 border border-primary/10 p-10 rounded-[3rem] relative transition-all duration-300 hover:border-primary/40 group flex flex-col h-full"
            >
              <FaQuoteLeft
                className="text-primary/10 absolute top-8 right-10 group-hover:text-primary/20 transition-colors"
                size={50}
              />

              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              <p className="text-foreground/80 text-lg italic mb-10 relative z-10 grow leading-relaxed">
                `{rev.text}``
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <Image
                    src={rev.image}
                    alt={rev.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    {rev.name}
                  </h4>
                  <p className="text-sm text-foreground/50 font-medium uppercase tracking-wider">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
