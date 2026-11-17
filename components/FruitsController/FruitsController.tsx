"use client";
import { useFruitsStore } from "@/store/fruitsStore";
import css from "./FruitsController.module.css";

const FruitsController = () => {
  const incrementApples = useFruitsStore((s) => s.incrementApples);
  const decrementApples = useFruitsStore((s) => s.decrementApples);

  const incLemons = useFruitsStore((s) => s.incrementLemons);
  const decLemons = useFruitsStore((s) => s.decrementLemons);

  const clear = useFruitsStore((s) => s.clearFruits);

  return (
    <div className={css["fruitsController"]}>
      <div>
        <p>Apples</p>
        <button onClick={incrementApples}>+</button>
        <button onClick={decrementApples}>-</button>
      </div>

      <div>
        <p>Lemons</p>
        <button onClick={incLemons}>+</button>
        <button onClick={decLemons}>-</button>
      </div>

      <button onClick={clear}>Clear Store</button>
    </div>
  );
};

export default FruitsController;
