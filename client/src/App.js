import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import PokemonI from "./pages/Pokemon";


class App extends Component {
  
  render() {
    return (
      <Router>
        <audio className="music" src="https://www.cjoint.com/doc/18_09/HIkpnJ4y0Fw_generique-francais-de-la-saison-1-de-pokemon.mp3" autoplay="true" loop="false" hidden="true"></audio>  
        <div>
          <Switch>
            <Route path="/pokemon/:id" component={PokemonI}>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
