"use server";
export const createUserAction = async (body) => {
  try {
    const res = await fetch("http://localhost:3000/api/auth/userAction", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
      next: { tags: ["userAction"] },
    });

    if (!res) {
      throw new Error("Failed to perform user action");
    }

    return await res.json();
  } catch (err) {
    console.error("User action fetch error:", err);
    return { error: err.message || "Something went wrong" };
  }
};
