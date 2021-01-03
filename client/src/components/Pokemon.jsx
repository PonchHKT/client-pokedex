import React, { Component } from "react";

class PokemonI extends Component {
  constructor(props) {
    super(props);

    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await fetch(`http://localhost:4000/api/pokemons/${id}`);
    const pokemons = await response.json(); 

    this.setState({ pokemons });
  }

  render() {

    const poke = this.state.pokemons;

    const pokeurl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${poke.ndex}.png`;

    let type2verif;
    if(poke.type2) {
      type2verif = (
        <tr>
          <td>
            Type 2 : 
          </td>
          <td>
            {poke.type2}
          </td>
        </tr>)
    } 

    return (
      <div className="p-card">
        <div className="p-header">
          <button>
            <a href="../">←</a>
          </button>
          <div>
            <h1>#{poke.numéro}</h1>
            <h1>{poke.nom}</h1>
            <img src={pokeurl} alt="Pokemon"/>
          </div>
        </div>
        <div className="p-identite">
          <table>

            <thead>
              <tr>
                <th>
                  IDENTITE
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>
                  Couleur :
                </td>
                <td>
                  {poke.couleur}
                </td>
              </tr>

              <tr>
                <td>
                  Espece :
                </td>
                <td>
                  {poke.espece}
                </td>
              </tr>

              <tr>
                <td>
                  Type 1 :
                </td>
                <td>
                  {poke.type1}
                </td>
              </tr>

              {type2verif}
            
              <tr>
                <td>
                  Taille :
                </td>
                <td>
                  {poke.taille}
                </td>
              </tr>

              <tr>
                <td>
                  Poids :
                </td>
                <td>
                  {poke.poids}
                </td>
              </tr> 

              <tr>
                <td>
                  Forme :
                </td>
                <td>
                  {poke.forme}
                </td>
              </tr> 

            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default PokemonI;
