"use client";
import { useEffect } from "react";
import css from "./Timer.module.css";

const Timer = () => {
  useEffect(() => {
    document.addEventListener("visibilitychange", (e) => {
      console.log(document.hidden);
      if (document.hidden) {
        console.log("Зупинити відтворення відео");
      } else {
        console.log("Запустити відтворення відео");
      }
    });

    // const initTime = Date.now();
    // setInterval(() => {
    //   const currentTime = Date.now();
    //   console.log(currentTime - initTime);
    // }, 1000);
  });
  return <div className={css["timer"]}></div>;
};

export default Timer;
