import React from "react";
import ReactDOM from "react-dom/client";
import { Lenses } from "./components/Lenses";

import "./index.scss";

const App = () => (
  <>
    <Lenses />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
