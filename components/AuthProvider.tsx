"use client";
import { useEffect } from "react";
import { getMe, refresh } from "@/lib/auth";
import { useAuthStore } from "@/stores/authStore";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    const fetchUser = async () => {
      const refreshResult = await refresh();
      if (refreshResult.success) {
        const res = await getMe();
        setUser(res.user);
      } else {
        clearUser();
      }
    };

    fetchUser();
  }, []);

  return children;
};

export default AuthProvider;
