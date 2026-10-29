import { useEffect } from "react";
import css from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={css["button"]}>{children}</button>;
};

export default Button;
