import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./components/App";

createRoot(document.querySelector("#root") as HTMLDivElement).render(
  <App></App>
);
