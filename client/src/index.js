import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import Pokedex from "./components/Pokedex";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="TEST"> POKEDEX </h1>
    <App />
    <Pokedex />
  </React.StrictMode>,
  document.getElementById("root")
);
