"use client";
import { createService } from "@/app/_actions/serviceActions";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  FaPlusCircle,
  FaCloudUploadAlt,
  FaListUl,
  FaInfoCircle,
  FaStethoscope,
  FaClock,
} from "react-icons/fa";

const AddService = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      features: ["", "", ""], // Default 3ta field
      category: "Medical",
      availability: "24/7",
      rating: 5.0,
      reviews: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit = async (data) => {
    // Empty features filter kora
    data.features = data.features.filter((f) => f.trim() !== "");

    // Slug generate kora (Jodi backend-e na hoy)
    data.slug = data.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    const response = await createService(data);
    if (response?.success === false) {
      alert("Failed to create service: " + response.message);
    } else {
      alert("Service created successfully!");
      reset();
    }
  };

  return (
    <section className="bg-background min-h-screen pt-10 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-primary/10 p-4 rounded-2xl">
            <FaPlusCircle className="text-primary text-3xl" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-foreground">
              Add New <span className="text-secondary">Service</span>
            </h1>
            <p className="text-foreground/50 font-medium">
              Create a professional healthcare service listing.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-6 md:p-10 space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <FaInfoCircle className="text-primary" /> Core Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Service Title
                </label>
                <input
                  {...register("title", { required: "Title is required" })}
                  placeholder="e.g. Professional Nursing Care"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs ml-2">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Category
                </label>
                <select
                  {...register("category")}
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground appearance-none"
                >
                  <option value="Medical">Medical</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Price (৳)
                </label>
                <input
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  type="number"
                  placeholder="1500"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Unit
                </label>
                <input
                  {...register("unit")}
                  placeholder="e.g. Per Visit"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2 flex items-center gap-1">
                  <FaClock size={12} /> Availability
                </label>
                <input
                  {...register("availability")}
                  placeholder="e.g. 24/7 or 9am-5pm"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-6 md:p-10 space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <FaStethoscope className="text-primary" /> Details & Media
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 ml-2">
                Image URL
              </label>
              <div className="relative">
                <FaCloudUploadAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  {...register("image")}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 ml-2">
                Short Summary
              </label>
              <input
                {...register("short_desc")}
                placeholder="One line catchy description..."
                className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 ml-2">
                Detailed Description
              </label>
              <textarea
                {...register("long_desc")}
                rows="4"
                placeholder="Explain the service in detail (medical procedures, nurse qualifications, etc.)"
                className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground resize-none"
              ></textarea>
            </div>
          </div>

          {/* Section 3: Features Array */}
          <div className="bg-primary/5 border border-primary/10 rounded-[2.5rem] p-6 md:p-10 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <FaListUl className="text-primary" /> Service Features
              </h3>
              <button
                type="button"
                onClick={() => append("")}
                className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary/80 transition-all"
              >
                + Add Field
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field, index) => (
                <div key={field.id} className="relative group">
                  <Controller
                    name={`features.${index}`}
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder={`Feature ${index + 1}`}
                        className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-secondary outline-none text-foreground transition-all"
                      />
                    )}
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 active:scale-[0.98]"
          >
            PUBLISH SERVICE
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
