"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useFruitsStore } from "@/store/fruitsStore";

export default function AppHeader() {
  const apples = useFruitsStore((s) => s.apples);
  const lemons = useFruitsStore((s) => s.lemons);
  const total = apples + lemons;

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/fruits">Fruits ({total})</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/wishlist">Bucket</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>
    </header>
  );
}
