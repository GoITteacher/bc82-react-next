import { useState } from "react";
import css from "./ArrayExample.module.css";

const ArrayExample = () => {
  const [array, setArray] = useState<number[]>([]);

  const handleClick = () => {
    const x = Math.round(Math.random() * 1000);
    // const copy = [...array];
    // copy.push(x);
    // setArray(copy);
    setArray([...array, x]);
  };

  const handleFilter = () => {
    const copy = array.filter((el) => el < 500);
    setArray(copy);
  };

  return (
    <div className={css["arrayExample"]}>
      <button onClick={handleClick}>Add Random Number</button>
      <button onClick={handleFilter}>Filter Array</button>
      <ul>
        {array.map((el, i) => {
          return <li key={i}>|{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default ArrayExample;
