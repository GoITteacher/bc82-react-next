import { useState } from "react";
import css from "./TestForm.module.css";

const TestForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    age: "0",
    city: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormValues({ ...formValues, [key]: value });
  };

  const handleSubmit = () => {
    console.log(formValues);
  };

  return (
    <div className={css["testForm"]}>
      <input
        type="text"
        name="firstname"
        value={formValues.firstname}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <input
        type="text"
        name="lastname"
        value={formValues.lastname}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <input
        type="text"
        name="phoneNumber"
        value={formValues.phoneNumber}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <input
        type="text"
        name="age"
        value={formValues.age}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <input
        type="text"
        name="city"
        value={formValues.city}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default TestForm;
