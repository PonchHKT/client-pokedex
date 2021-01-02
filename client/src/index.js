import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import Pokedex from "./components/Pokedex";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="TEST"> </h1>
    <h2>
      <span>P</span>
      <span>O</span>
      <span>K</span>
      <span>E</span>
      <span>D</span>
      <span>E</span>
      <span>X</span>
      </h2>
    <App />
    <Pokedex />
  </React.StrictMode>,
  document.getElementById("root")
);
