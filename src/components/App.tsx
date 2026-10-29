import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Songs from "./Songs/Songs";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={open}>Open Modal</button>

      {isOpen && (
        <Modal onClose={close}>
          <button onClick={close}> MY CUSTOM CLOSE BTN</button>
        </Modal>
      )}

      <Songs />
    </>
  );
}
