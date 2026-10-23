import { useState } from "react";
import css from "./ObjectExample.module.css";

interface Fruits {
  apples: number;
  lemons: number;
}

const ObjectExample = () => {
  const [fruits, setFruits] = useState<Fruits>({ apples: 0, lemons: 0 });

  const handleIncrementApples = () => {
    const copy = { ...fruits };
    copy.apples += 1;
    setFruits(copy);
  };

  const handleIncrementLemons = () => {
    setFruits({ ...fruits, lemons: fruits.lemons + 1 });
  };

  return (
    <div className={css["objectExample"]}>
      <p>Apples: {fruits.apples}</p>
      <p>Lemons: {fruits.lemons}</p>

      <button onClick={handleIncrementApples}>Apples++</button>
      <button onClick={handleIncrementLemons}>Lemons++</button>
    </div>
  );
};

export default ObjectExample;
