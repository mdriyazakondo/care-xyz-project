"use client";
import {
  FaUserNurse,
  FaWheelchair,
  FaStethoscope,
  FaBaby,
  FaFirstAid,
  FaHandsHelping,
} from "react-icons/fa";

const services = [
  {
    title: "Nursing Care",
    description:
      "Professional nursing services including wound dressing, injections, and medication management.",
    icon: <FaUserNurse size={30} />,
  },
  {
    title: "Elderly Care",
    description:
      "Dedicated companions to help seniors with daily activities, hygiene, and emotional support.",
    icon: <FaWheelchair size={30} />,
  },
  {
    title: "Post-Surgical Care",
    description:
      "Specialized recovery support at home to ensure fast and safe healing after hospital discharge.",
    icon: <FaStethoscope size={30} />,
  },
  {
    title: "Baby Sitting",
    description:
      "Experienced caregivers to look after your little ones with love and maximum safety.",
    icon: <FaBaby size={30} />,
  },
  {
    title: "Physiotherapy",
    description:
      "Expert physiotherapists providing pain relief and mobility exercises in your living room.",
    icon: <FaFirstAid size={30} />,
  },
  {
    title: "Full-time Maid",
    description:
      "Trained domestic help for household management and maintaining a clean environment.",
    icon: <FaHandsHelping size={30} />,
  },
];

const Services = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-foreground">
            Our Specialized <span className="text-secondary">Services</span>
          </h3>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            We provide a wide range of home-based healthcare services tailored
            to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-background p-2 rounded-2xl">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h4>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  LEARN MORE <span className="text-secondary">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-primary/5 border border-primary/10">
            <p className="text-foreground/80 font-medium italic">
              Need a customized plan for your family?
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-secondary/20">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
