"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Camera,
  Mail,
  Lock,
  User,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { createUserAction } from "@/app/_actions/userAction";

const SignUpPage = () => {
  const router = useRouter();
  const [previews, setPreviews] = useState({ profile: null, cover: null });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setPreviews((prev) => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const onSubmit = async (data) => {
    const payload = {
      action: "register",
      name: data.fullName,
      email: data.email,
      password: data.password,
      image: previews.profile || null,
      coverImage: previews.cover || null,
    };

    const res = await createUserAction(payload);

    if (res.error) {
      alert(res.error);
      return;
    }

    alert("Account created successfully!");
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen relative bg-gray-50 flex items-center justify-center p-4">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition-all active:scale-95 z-10"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <div className="bg-white w-full mt-12 max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Cover Image */}
        <div className="relative h-40 sm:h-52 bg-gradient-to-r from-indigo-100 to-purple-100">
          {previews.cover ? (
            <img
              src={previews.cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : (
            <label className="w-full h-full flex flex-col items-center justify-center text-gray-400 cursor-pointer">
              <ImageIcon size={48} className="opacity-40" />
              <span className="mt-2 text-sm font-medium">Add Cover Photo</span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "cover")}
              />
            </label>
          )}

          <label className="absolute bottom-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full cursor-pointer hover:bg-white transition shadow-lg">
            <Camera size={20} className="text-gray-700" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "cover")}
            />
          </label>
        </div>

        {/* Profile Image */}
        <div className="relative -mt-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-xl">
              {previews.profile ? (
                <img
                  src={previews.profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <User size={48} />
                </div>
              )}
            </div>
            <label className="absolute bottom-1 right-1 p-2 bg-indigo-600 rounded-full cursor-pointer hover:bg-indigo-700 transition shadow-lg text-white ring-2 ring-white">
              <Camera size={18} />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, "profile")}
              />
            </label>
          </div>
        </div>

        {/* Form */}
        <form
          className="p-6 sm:p-10 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Create Account
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Join us and manage your bookings easily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 ml-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 characters" },
                })}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transform transition active:scale-[0.98] shadow-lg shadow-indigo-200 mt-4"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600 pt-2">
            Already have an account?{" "}
            <a
              href="/sign-in"
              className="text-indigo-600 font-bold hover:underline"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
