import css from "./Modal.module.css";

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css["backdrop"]} onClick={handleBackdropClick}>
      <div className={css["modal"]}>
        <h5>Modal INFO</h5>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
