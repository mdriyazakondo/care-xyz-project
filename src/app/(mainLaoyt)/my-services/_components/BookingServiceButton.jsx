"use client";

import { createBookings } from "@/app/_actions/bookingActions";
import { useState, useTransition } from "react";

const BookingServiceButton = ({ service }) => {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");
  const services = {
    userId: service?._id,
    title: service?.title,
    slug: service?.slug,
    category: service?.category,
    price: service?.price,
    unit: service?.unit,
    rating: service?.rating,
    reviews: service?.reviews,
    image: service?.image,
    short_desc: service?.short_desc,
    long_desc: service?.long_desc,
    features: service?.features,
    availability: service?.availability,
    date: new Date(),
    status: service?.status,
  };

  const handleBooking = () => {
    startTransition(async () => {
      const result = await createBookings(services);

      if (result.success) {
        setMessage(" Booking successful!");
      } else {
        setMessage(" Booking failed: " + result.message);
      }
    });
  };

  return (
    <div>
      <button
        onClick={handleBooking}
        disabled={isPending}
        className="w-full bg-primary text-white py-6 rounded-4xl font-black text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-95 disabled:opacity-60"
      >
        {isPending ? "BOOKING..." : "BOOK THIS SERVICE NOW"}
      </button>

      {message && (
        <p className="mt-4 text-center text-lg font-semibold">{message}</p>
      )}
    </div>
  );
};

export default BookingServiceButton;
