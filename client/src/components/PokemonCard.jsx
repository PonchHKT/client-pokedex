import React, { Component } from "react";

class PokemonCard extends Component {
  render() {

    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.ndex}.png`;

    return (
      <button className="pokemon-card">
        <a href="./pokemon.html">
          <div>
            <img src={url} alt="img-pokemon" />
            <h1> #{this.props.id} </h1>
            <h1> {this.props.name} </h1>
          </div>
        </a>
      </button>
    );
  }
}

export default PokemonCard;
