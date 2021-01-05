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
                <embed className="music" src="https://www.cjoint.com/doc/18_09/HIkpnJ4y0Fw_generique-francais-de-la-saison-1-de-pokemon.mp3" autostart="true" loop="false" hidden="true"></embed>

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
