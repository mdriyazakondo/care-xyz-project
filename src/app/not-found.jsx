"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const GlobalError = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    // আপনি চাইলে এখানে এররটি কনসোলে বা কোনো সার্ভিসে লগ করতে পারেন
    console.error("Global Error Log:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center text-red-600 animate-bounce shadow-xl shadow-red-100">
            <AlertTriangle size={48} />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-400">
            <span className="font-bold text-xs">500</span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500 mb-10 leading-relaxed">
          We apologize for the inconvenience. An unexpected error occurred. Our
          team has been notified and is working to fix it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()} // আগের পেজ রিফ্রেশ করার চেষ্টা করবে
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-[0.98] shadow-lg shadow-indigo-100"
          >
            <RefreshCw size={20} />
            Try Again
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 py-3.5 rounded-2xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              <ChevronLeft size={18} />
              Go Back
            </button>
            <button
              onClick={() => router.push("/")}
              className="flex items-center justify-center gap-2 bg-white text-gray-700 py-3.5 rounded-2xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              <Home size={18} />
              Home
            </button>
          </div>
        </div>

        {/* Help Link */}
        <p className="mt-10 text-sm text-gray-400">
          Need help?{" "}
          <a href="/support" className="text-indigo-600 font-medium underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default GlobalError;
