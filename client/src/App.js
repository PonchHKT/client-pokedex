import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import PokemonI from "./pages/Pokemon";

import musique from "./images/generique-pokemon-saison-1-pokemon-attrapez-les-tous.mp3";

class App extends Component {
  
  render() {
    return (
      <Router>
        <audio className="music" src={musique} autoplay="true" loop="false" hidden="true"></audio>  
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
