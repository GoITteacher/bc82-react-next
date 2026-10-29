import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import { useEffect } from "react";
interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {}, []);

  return createPortal(
    <div className={css["backdrop"]}>
      <div className={css["modal"]}>
        <button onClick={onClose}>CLOSE</button>
        {children}
      </div>
    </div>,
    document.querySelector("#modal") as HTMLDivElement
  );
};

export default Modal;
