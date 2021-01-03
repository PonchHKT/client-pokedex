import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import Pokedex from "./components/Pokedex";
import PokemonI from "./components/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/pokemon/:id" component={PokemonI}>
            </Route>
            <Route path="/">
            <h2>
            <span>P</span>
            <span>O</span>
            <span>K</span>
            <span>E</span>
            <span>D</span>
            <span>E</span>
            <span>X</span>
            </h2>
              <Pokedex />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
