"use client";
import { login } from "@/lib/auth";
import css from "./LoginForm.module.css";
import { useAuthStore } from "@/stores/authStore";
import { User } from "@/types/user";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const res = await login(data);
    setUser(res.user);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="email" defaultValue="user@example.com" />
      <input type="text" name="password" defaultValue="string" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
