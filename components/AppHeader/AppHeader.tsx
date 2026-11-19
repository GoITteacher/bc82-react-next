"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useAuthStore } from "@/stores/authStore";

export default function AppHeader() {
  const isAuth = useAuthStore((s) => s.isAuth);

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Tasks</Link>
        </li>
        <li>
          <Link href="/">Bucket</Link>
        </li>
      </ul>

      <div>
        {!isAuth && <Link href="/sign-in">Sign In</Link>}
        {isAuth && <button>LogOut</button>}
      </div>
    </header>
  );
}
