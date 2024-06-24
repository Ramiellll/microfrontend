import React from "react";
import ReactDOM from "react-dom/client";
import Eyeglasses from "./components/Eyeglasses/Eyeglasses";

import "./index.scss";

const App = () => (
  <>
    <Eyeglasses />
  </>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
