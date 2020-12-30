import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/api/pokemons");
    const pokemons = await response.json();

    this.setState({ pokemons });
  }

  render() {
    return (
      <div className="pokedex">
        {this.state.pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.numéro}
            ndex={pokemon.ndex}
            name={pokemon.nom}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
