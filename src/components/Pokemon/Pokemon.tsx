import { useEffect, useState } from "react";
import css from "./Pokemon.module.css";
import axios from "axios";

const Pokemon = () => {
  const [age, setAge] = useState(() => {
    const random = Math.round(Math.random() * 1000);
    return random;
  });
  const [balance, setBalance] = useState(() => {
    return 0;
  });
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      setRes(response.data);
      console.log(response.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Привіт, ми з податкової");
  }, [balance]);

  useEffect(() => {
    console.log("З днем народження");
  }, [age]);

  useEffect(() => {
    console.log("Новий статус в інстаграмі", age, balance);
  }, [age, balance]);

  return (
    <div className={css["pokemon"]}>
      <button onClick={() => setBalance(balance + 100)}>
        Balance++ ({balance})
      </button>
      <button onClick={() => setBalance(balance - 100)}>
        Balance-- ({balance})
      </button>
      <button onClick={() => setBalance(0)}>Reset Balance ({balance})</button>
      <button onClick={() => setAge(age + 1)}>Age++ ({age})</button>
    </div>
  );
};

export default Pokemon;
