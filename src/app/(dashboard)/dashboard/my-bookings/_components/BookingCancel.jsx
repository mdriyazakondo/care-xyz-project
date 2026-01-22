"use client";

import { BookingCanceled } from "@/app/_actions/bookingActions";
import { useState } from "react";

const BookingCancel = ({ id, status }) => {
  const [loading, setLoading] = useState(false);
  const handleCancel = async () => {
    const confirmCancel = confirm(
      "Are you sure you want to cancel this booking?",
    );
    if (!confirmCancel) return;

    setLoading(true);
    try {
      await BookingCanceled(id);
    } catch (error) {
      console.error("Failed to cancel booking:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const isCancelled = status === "cancelled";

  return (
    <div>
      <button
        onClick={handleCancel}
        disabled={isCancelled || loading}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all 
          ${
            isCancelled
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-sm"
          } ${loading ? "opacity-50 cursor-wait" : ""}`}
      >
        {loading ? "Processing..." : isCancelled ? "Cancelled" : "Cancel"}
      </button>
    </div>
  );
};

export default BookingCancel;
