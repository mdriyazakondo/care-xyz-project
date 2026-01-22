"use server";

import { revalidateTag } from "next/cache";

export const createBookings = async (service) => {
  try {
    const res = await fetch(`http://localhost:3000/api/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });

    if (!res.ok) {
      throw new Error("Failed to create item");
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("booking Error:", error);
    return { success: false, message: error.message };
  }
};

export const getBookings = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/bookings", {
      cache: "no-store",
      next: { tags: ["bookings"] },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }

    return await res.json();
  } catch (error) {
    console.error("Get booking error:", error);
    return [];
  }
};

export const BookingCanceled = async (id) => {
  await fetch(`http://localhost:3000/api/bookings/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "cancelled" }),
  });
  revalidateTag("bookings");
};
