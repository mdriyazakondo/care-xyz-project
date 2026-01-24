"use client";

import { useForm } from "react-hook-form";
import { Mail, Lock, ArrowLeft, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { createUserAction } from "@/app/_actions/userAction";

const SignInPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Prepare payload
    const payload = {
      action: "login",
      email: data.email,
      password: data.password,
    };

    const res = await createUserAction(payload);

    if (res.error) {
      alert(res.error);
      return;
    }

    // Login successful → redirect to dashboard or home
    alert(`Welcome back, ${res.user.name}!`);
    router.push("/"); // Change to your protected page
  };

  return (
    <div className="min-h-screen relative bg-gray-50 flex items-center justify-center p-4">
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-200 hover:bg-gray-100 transition-all active:scale-95 z-10"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <div className="bg-white mt-12 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 sm:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-4">
            <LogIn size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-indigo-600 hover:underline"
              >
                Forgot?
              </a>
            </div>
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

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transform transition active:scale-[0.98] shadow-lg shadow-indigo-200 mt-4 flex items-center justify-center gap-2"
          >
            Sign In
          </button>

          {/* Bottom Link */}
          <p className="text-center text-sm text-gray-600 pt-2">
            Do not have an account?{" "}
            <a
              href="/sign-up"
              className="text-indigo-600 font-bold hover:underline"
            >
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
