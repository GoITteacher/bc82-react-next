"use client";

import { useRouter } from "next/navigation";
import css from "./BackButton.module.css";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button onClick={handleClick} className={css["backButton"]}>
      Back
    </button>
  );
};

export default BackButton;
