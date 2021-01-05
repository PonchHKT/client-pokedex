import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pokemons: [],
      searchString: ''
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/api/pokemons");
    const pokemons = await response.json();

    this.setState({ pokemons });
  }

  handleSearch = event => {
    this.setState({ searchString: event.target.value })
  }

  render() {

    if (!this.state.pokemons.length) {
      return <div> loading ... </div>
    }

    return (
      <div>
        <h2>
          <span>P</span>
          <span>O</span>
          <span>K</span>
          <span>E</span>
          <span>D</span>
          <span>E</span>
          <span>X</span>
        </h2>

        <div>
          <div>
            <input onChange={this.handleSearch} value={this.state.searchString} type="text" placeholder="search" />
          </div>
        </div>

        <div className="pokedex">
          {this.state.pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.numéro}
              id={pokemon.numéro}
              ndex={pokemon.ndex}
              name={pokemon.nom}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
