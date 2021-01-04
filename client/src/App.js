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
              <Pokedex />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
