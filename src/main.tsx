import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PlayGround from "./PlayGround";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(
  <StrictMode>
    <PlayGround />
  </StrictMode>,
);
