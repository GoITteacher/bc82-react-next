import { useState } from "react";
import css from "./CounterExample.module.css";

const CounterExample = () => {
  const [x, setX] = useState(0);

  const handleIncrementX = () => {
    const result = x + 1;
    setX(result);
  };

  return (
    <div className={css["counterExample"]}>
      <button onClick={handleIncrementX}>Click Me</button>
      <p>Count: {x}</p>
    </div>
  );
};

export default CounterExample;
