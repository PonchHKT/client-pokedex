import React from "react";
import ReactDOM from "react-dom";
import "./pokemon.css";

import App from "./App";
import Pokemon from "./components/Pokemon";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="TEST"> POKEDEX </h1>
    <App />
    <Pokemon />
  </React.StrictMode>,
  document.getElementById("root")
);
