import React, { Component } from "react";

class PokemonCard extends Component {
  render() {
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.ndex}.png`;

    return (
      <div className="pokemon-card">
        <img src={url} alt="new" />
        <h1> #{this.props.id} </h1>
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

export default PokemonCard;
