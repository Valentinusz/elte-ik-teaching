import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RandomColorDiv from "./RandomColorDiv";

const container = document.getElementById("root");
const root = createRoot(container);

setInterval(() => {
  root.render(
    <React.StrictMode>
      <RandomColorDiv>asd</RandomColorDiv>
    </React.StrictMode>
  );
}, 1000);
