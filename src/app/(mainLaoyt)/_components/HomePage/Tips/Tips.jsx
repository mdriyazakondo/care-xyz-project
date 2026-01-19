"use client";
import Image from "next/image";
import { FaCalendarAlt, FaUserEdit, FaArrowRight } from "react-icons/fa";

const tips = [
  {
    title: "Essential Guide to Elderly Nutrition at Home",
    category: "Nutrition",
    date: "Jan 18, 2026",
    author: "Dr. Ariful",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Post-Surgical Recovery: What You Need to Know",
    category: "Medical",
    date: "Jan 16, 2026",
    author: "Nurse Lima",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dad99901?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Safe Home Environments for Mobility Impaired",
    category: "Safety",
    date: "Jan 14, 2026",
    author: "Dr. Sarah",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Supporting Mental Health in Long-term Care",
    category: "Wellness",
    date: "Jan 12, 2026",
    author: "Consultant Roy",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop",
  },
];

const Tips = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Expert Insights
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Discover Valuable <span className="text-secondary">Home Care</span>{" "}
            Tips
          </h3>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Essential advice and the latest updates from our medical experts to
            help you care for your loved ones better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((item, index) => (
            <article
              key={index}
              className="group bg-background rounded-[2.5rem] overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col shadow-sm"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-xl text-[10px] font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-7 grow flex flex-col">
                <div className="flex items-center gap-3 text-foreground/50 text-[11px] mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <FaCalendarAlt className="text-primary" /> {item.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <FaUserEdit className="text-primary" /> {item.author}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-foreground mb-6 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-xs tracking-widest uppercase">
                    Read More{" "}
                    <FaArrowRight size={14} className="text-secondary" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
