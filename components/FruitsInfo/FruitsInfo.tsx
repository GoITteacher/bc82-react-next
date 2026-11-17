"use client";
import { useFruitsStore } from "@/store/fruitsStore";
import css from "./FruitsInfo.module.css";

const FruitsInfo = () => {
  const apples = useFruitsStore((s) => s.apples);
  const lemons = useFruitsStore((s) => s.lemons);

  return (
    <div className={css["fruitsInfo"]}>
      <h1>Fruits Stats</h1>
      <p>Apples: {apples}</p>
      <p>Lemons: {lemons}</p>
      <p>Total: {apples + lemons}</p>
    </div>
  );
};

export default FruitsInfo;
