import React from "react";
import Image from "next/image";
import {
  FaStar,
  FaCheckCircle,
  FaClock,
  FaTags,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import BookingServiceButton from "../_components/BookingServiceButton";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/services/${id}`, {
    cache: "no-store",
  });
  const result = await res.json();
  const service = result.data;

  if (!service) return <div className="pt-32 text-center">Loading...</div>;

  return (
    <main className="bg-background min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/my-services"
          className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all"
        >
          <FaArrowLeft /> Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="relative h-100 md:h-137.5 w-full rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute top-8 left-8 bg-secondary text-white px-6 py-2 rounded-2xl font-black uppercase tracking-widest shadow-lg">
              {service.category}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-secondary font-bold">
                  <FaStar /> {service.rating}
                </div>
                <span className="text-foreground/40">|</span>
                <span className="text-foreground/60 font-medium">
                  {service.reviews} Happy Clients
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
              {service.short_desc}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <FaTags className="text-primary" /> Service Details
              </h3>
              <p className="text-foreground/60 leading-loose">
                {service.long_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10"
                >
                  <FaCheckCircle className="text-primary" />
                  <span className="text-foreground/80 font-bold text-sm uppercase tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-primary/10" />

            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest">
                  {service.unit}
                </p>
                <p className="text-4xl font-black text-primary">
                  ৳{service.price}
                </p>
              </div>
              <div className="flex items-center gap-3 bg-secondary/10 px-6 py-4 rounded-3xl border border-secondary/20">
                <FaClock className="text-secondary" size={20} />
                <div>
                  <p className="text-[10px] font-bold text-secondary uppercase leading-none">
                    Availability
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    {service.availability}
                  </p>
                </div>
              </div>
            </div>
            <BookingServiceButton service={service} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
