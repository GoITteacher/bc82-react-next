import { useState } from "react";
import css from "./Accordion.module.css";

export default function Accordion() {
  const [isOpenDesc, setIsOpenDesc] = useState(false);

  const toggleDesc = () => {
    setIsOpenDesc(!isOpenDesc);
  };

  return (
    <div className={css["container"]}>
      <h3 onClick={toggleDesc}>Accordion {isOpenDesc ? "<" : ">"}</h3>
      {isOpenDesc && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          alias excepturi tenetur dolorem vitae obcaecati optio architecto sed
          praesentium modi maxime rem hic quo magnam, iste id. Atque, modi id?
        </p>
      )}
    </div>
  );
}
