"use client";

import { useEffect, useState } from "react";

const CurrentUserInfo = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(user, "hello");
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/auth/users", {
          method: "GET",
          credentials: "include", // ✅ must for cookie
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>You are not logged in</p>;

  return (
    <div className="flex items-center gap-3">
      <img
        src={user.image || "/avatar.png"} // ✅ fallback
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-bold">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default CurrentUserInfo;
