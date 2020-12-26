import React, { Component } from "react";

class PokemonCard extends Component {
  render() {
    return (
      <div className="pokemon-card">
        <h1> {this.props.name} </h1>
      </div>
    );
  }
}

export default PokemonCard;
