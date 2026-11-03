import { useState } from "react";
import css from "./TestForm.module.css";

const TestForm = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  const handleSubmit = () => {
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);
    console.log(value5);
  };

  return (
    <form action={handleSubmit} className={css["testForm"]}>
      <input
        type="text"
        name="value1"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      <button onClick={() => setValue1(value1.toUpperCase())}>
        TO UPPER CASE
      </button>

      <input
        type="text"
        name="value2"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <input
        type="text"
        name="value3"
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
      />
      <input
        type="text"
        name="value4"
        value={value4}
        onChange={(e) => setValue4(e.target.value)}
      />
      <input
        type="text"
        name="value5"
        value={value5}
        onChange={(e) => setValue5(e.target.value)}
      />

      <button type="submit">Save Data</button>
    </form>
  );
};

export default TestForm;
