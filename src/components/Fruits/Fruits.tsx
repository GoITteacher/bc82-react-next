import css from "./Fruits.module.css";
import AppleCounter from "./AppleCounter/AppleCounter";
import GrapesCounter from "./GrapesCounter/GrapesCounter";
import LemonCounter from "./LemonCounter/LemonCounter";
import FruitsCounter from "./FruitsCounter/FruitsCounter";
import { useState } from "react";

const Fruits = () => {
  const [apples, setApples] = useState(0);
  const [lemons, setLemons] = useState(0);
  const [grapes, setGrapes] = useState(0);

  const handleIncrementApples = () => {
    setApples(apples + 1);
  };

  const handleIncrementLemons = () => {
    setLemons(lemons + 1);
  };
  const handleIncrementGrapes = () => {
    setGrapes(grapes + 1);
  };

  return (
    <div className={css["fruits"]}>
      <h2>Fruits</h2>
      <FruitsCounter apples={apples} lemons={lemons} grapes={grapes} />

      <AppleCounter handleIncrement={handleIncrementApples} />
      <GrapesCounter handleIncrement={handleIncrementGrapes} />
      <LemonCounter handleIncrement={handleIncrementLemons} />
    </div>
  );
};

export default Fruits;
