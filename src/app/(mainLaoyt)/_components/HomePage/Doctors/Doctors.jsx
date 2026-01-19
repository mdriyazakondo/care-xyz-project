"use client";
import Image from "next/image";
import {
  FaLinkedin,
  FaStethoscope,
  FaStar,
  FaChevronRight,
} from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Senior Cardiologist",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Physical Therapist",
    experience: "8+ Years",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Nurse Emily Blunt",
    specialty: "Elderly Care Specialist",
    experience: "12+ Years",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "General Physician",
    experience: "7+ Years",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
  },
];

const Doctors = () => {
  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="max-w-362.5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Certified Professionals
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-foreground">
              Meet Our Expert <span className="text-secondary">Medical</span>{" "}
              Team
            </h3>
            <p className="text-foreground/60 mt-4 text-lg">
              Highly qualified specialists available for home visits and online
              consultations.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
            See All Members <FaChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-background border border-primary/10 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-primary/10">
                  <FaStar className="text-secondary" size={12} />
                  <span className="text-[10px] font-bold text-foreground">
                    {doctor.experience} Exp.
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <div className="bg-primary/10 w-fit mx-auto p-3 rounded-2xl text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaStethoscope size={20} />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {doctor.name}
                </h4>
                <p className="text-foreground/60 text-sm mb-6 font-medium tracking-wide">
                  {doctor.specialty}
                </p>

                <div className="flex justify-center gap-3">
                  <button className="p-3 rounded-xl bg-primary/5 text-primary hover:bg-secondary hover:text-white transition-all">
                    <FaLinkedin size={18} />
                  </button>
                  <button className="grow bg-primary text-white font-bold py-2 rounded-xl shadow-md shadow-primary/20 hover:bg-primary-dark transition-all">
                    Consult
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
