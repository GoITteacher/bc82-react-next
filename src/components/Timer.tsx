/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 5);
    return date;
  });

  useEffect(() => {
    console.log("Запускаємо інтервал");

    const id = setInterval(() => {
      console.log("Tick");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Видаляю інтервал");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("Запускаємо інтервал");

    const id = setInterval(() => {
      console.log("Tick");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Видаляю інтервал");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("Запускаємо інтервал");

    const id = setInterval(() => {
      console.log("Tick");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Видаляю інтервал");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("Запускаємо інтервал");

    const id = setInterval(() => {
      console.log("Tick");
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Видаляю інтервал");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    return () => {
      console.log("THE END");
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
