import { useState } from "react";
import Modal from "../Modal/Modal";
import css from "./ModalExample.module.css";

const ModalExample = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div className={css["modalExample"]}>
      <h1>Modal</h1>
      <button onClick={openModal}>Open Modal</button>

      {isVisible && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ModalExample;
