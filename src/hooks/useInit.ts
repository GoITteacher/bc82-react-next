import { useEffect } from "react";

export const useInit = () => {
  useEffect(() => {
    console.log("Відправити сповіщення в телеграм");
    console.log("Відправити сповіщення в viber");
    console.log("Відправити сповіщення в whatsapp");
  }, []);
};
