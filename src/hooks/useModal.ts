import { useState } from "react";

type UseModalResponse = [boolean, () => void, () => void, (v: boolean) => void];

export const useModal = (): UseModalResponse => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return [isOpenModal, openModal, closeModal, setIsOpenModal];
};
