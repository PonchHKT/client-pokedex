import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = { pokemon: [] };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/api/pokemons/1");
    const pokemon = await response.json();

    this.setState({ pokemon });
  }

  render() {
    return (
      <div className="pokedex">
          <PokemonCard
            id={pokemon.numéro}
            ndex={pokemon.ndex}
            name={pokemon.nom}
          />
        )
      </div>
    );
  }
}

export default Pokedex;
