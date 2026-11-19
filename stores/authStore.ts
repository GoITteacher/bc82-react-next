import { User } from "@/types/user";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  isAuth: boolean;

  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>()((setStore) => {
  return {
    user: null,
    isAuth: false,

    setUser: (user) => {
      setStore(() => {
        return {
          user: user,
          isAuth: true,
        };
      });
    },

    clearUser: () => {
      setStore(() => {
        return {
          user: null,
          isAuth: false,
        };
      });
    },
  };
});
