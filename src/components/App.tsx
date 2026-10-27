import { useState, useEffect } from "react";
import Pokemon from "./Pokemon/Pokemon";

import Timer from "./Timer";
import Sidebar from "./Sidebar";
import Songs from "./Songs/Songs";
// import Sidebar from "./Sidebar";
// import CharacterWidget from "./CharacterWidget";

export default function App() {
  const [isOpen, setIsOpen] = useState(() => {
    const json = localStorage.getItem("SidebarState") || "false";
    console.log(json);
    return JSON.parse(json);
  });

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("SidebarState", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <>
      <Songs />

      {/* <Pokemon /> */}

      {/* <button onClick={open}>Open</button>
      {isOpen && <Sidebar onClose={close} />} */}

      {/* <CharacterWidget /> */}

      {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button> */}
      {/* {isOpen && <Timer />} */}
    </>
  );
}
