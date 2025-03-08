"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    const refreshToken = sessionStorage.getItem("refresh_token"); // Correct key

    if (!refreshToken) {
      clearSession(); // Ensure all session data is cleared
      router.push("/sign-in");
      return;
    }

    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Logout failed");
      }

      console.log(data.message);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      clearSession(); // Remove all stored data
      router.push("/sign-in");
      setLoading(false);
    }
  };

  const clearSession = () => {
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("refresh_token");
    sessionStorage.removeItem("user"); // Ensure user info is also removed
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded disabled:opacity-50"
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
