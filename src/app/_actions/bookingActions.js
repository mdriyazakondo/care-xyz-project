"use server";

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
