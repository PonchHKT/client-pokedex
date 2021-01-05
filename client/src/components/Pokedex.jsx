import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

import Img from '../images/pokeball.png';


class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pokemons: [],
      search: ''
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:4000/api/pokemons");
    const pokemons = await response.json();

    this.setState({ pokemons });
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {

    if (!this.state.pokemons.length) {
      return <div className=".loader">
                <div className="l-back">
                    <div className="l-img"></div>
                    <img src={Img} alt="pokeball" className="pokeballimg"/>

                </div>
            </div>
    }
    

    let filteredPokemons = this.state.pokemons.filter(
      (pokemon) => {
        return pokemon.nom.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    );

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

        <div className="searchbar">
          <input type="text" 
            value={this.state.search} 
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        <div className="pokedex">
          {filteredPokemons.map((pokemon) => (
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
