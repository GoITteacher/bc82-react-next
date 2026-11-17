import { useState } from "react";
import { create } from "zustand";

interface FruitStore {
  apples: number;
  lemons: number;

  setApples: (userValue: number) => void;
  incrementApples: () => void;
  decrementApples: () => void;

  setLemons: (userValue: number) => void;
  incrementLemons: () => void;
  decrementLemons: () => void;

  clearFruits: () => void;
}

export const useFruitsStore = create<FruitStore>((setStore) => {
  return {
    apples: 0,
    setApples: (userValue) => {
      setStore(() => {
        return { apples: userValue };
      });
    },
    incrementApples: () => {
      setStore((store) => {
        return { apples: store.apples + 1 };
      });
    },
    decrementApples: () => {
      setStore((store) => {
        if (store.apples > 0) {
          return { apples: store.apples - 1 };
        }

        return {};
      });
    },

    lemons: 0,
    setLemons: (userValue) => {
      setStore(() => {
        return { lemons: userValue };
      });
    },
    incrementLemons: () => {
      setStore((store) => {
        return { lemons: store.lemons + 1 };
      });
    },
    decrementLemons: () => {
      setStore((store) => {
        if (store.lemons > 0) {
          return { lemons: store.lemons - 1 };
        }

        return {};
      });
    },
    clearFruits: () => {
      setStore(() => {
        return { apples: 0, lemons: 0 };
      });
    },
  };
});

//!=========================================

// import { create } from "zustand";

// interface ExampleStore {
//   value: number;
//   setValue: (newValue: number) => void;
//   increment: () => void;
//   clearValue: () => void;
// }

// export const useExampleStore = create<ExampleStore>()((setStore) => {
//   return {
//     value: 0,

//     setValue: (newValue) => {
//       setStore({ value: newValue });
//     },

//     increment: () => {
//       setStore((s) => {
//         return { value: s.value + 1 };
//       });
//     },

//     clearValue: () => {
//       setStore({ value: 0 });
//     },
//   };
// });

//!=========================================

// const [value, setValue] = useState(0);
// setValue(25);
// setValue(0);
