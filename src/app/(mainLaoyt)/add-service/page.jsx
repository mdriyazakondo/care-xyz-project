"use client";
import { createService } from "@/app/_actions/serviceActions";
import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  FaPlusCircle,
  FaCloudUploadAlt,
  FaListUl,
  FaInfoCircle,
} from "react-icons/fa";

const AddService = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { fields, append } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit = async (data) => {
    data.features = data.features.filter((f) => f !== "");
    const response = await createService(data);
    if (response.success === false) {
      alert("Failed to create service: " + response.message);
    } else {
      alert("Service created successfully!");
      reset();
    }
  };

  return (
    <section className="bg-background min-h-screen pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
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
              Create a new healthcare service for your clients.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Info */}
          <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-12 space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <FaInfoCircle className="text-primary" /> Basic Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Service Title
                </label>
                <input
                  {...register("title", { required: true })}
                  placeholder="e.g. Oxygen Support"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Title is required</p>
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
                  <option value="Personal">Personal Care</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
                  placeholder="500"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">Price is required</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground/70 ml-2">
                  Unit
                </label>
                <input
                  {...register("unit")}
                  placeholder="e.g. Per Visit / 8 Hours Shift"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
            </div>
          </div>

          {/* Image & Description */}
          <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 ml-2">
                Image URL
              </label>
              <div className="relative">
                <FaCloudUploadAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  {...register("image")}
                  placeholder="https://unsplash.com/photos/..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-foreground/70 ml-2">
                Short Description
              </label>
              <textarea
                {...register("short_desc")}
                rows="2"
                placeholder="A brief summary of the service..."
                className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-primary outline-none text-foreground resize-none"
              ></textarea>
            </div>
          </div>

          {/* Features */}
          <div className="bg-primary/5 border border-primary/10 rounded-[3rem] p-8 md:p-12 space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
              <FaListUl className="text-primary" /> Service Features
            </h3>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <Controller
                  key={field.id}
                  name={`features.${index}`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder={`Feature ${index + 1} (e.g. 24/7 Support)`}
                      className="w-full px-6 py-4 rounded-2xl bg-background border border-primary/10 focus:border-secondary outline-none text-foreground transition-all block"
                    />
                  )}
                />
              ))}

              <button
                type="button"
                onClick={() => append("")}
                className="text-primary font-bold text-sm hover:underline ml-2"
              >
                + Add More Feature
              </button>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 active:scale-[0.98]">
            PUBLISH SERVICE
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
