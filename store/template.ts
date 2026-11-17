import { create } from "zustand";

interface ExampleStore {
  value: number;
  setValue: (newValue: number) => void;
  increment: () => void;
  clearValue: () => void;
}

export const useExampleStore = create<ExampleStore>()((setStore) => {
  return {
    value: 0,

    setValue: (newValue) => {
      setStore({ value: newValue });
    },

    increment: () => {
      setStore((s) => {
        return { value: s.value + 1 };
      });
    },

    clearValue: () => {
      setStore({ value: 0 });
    },
  };
});
