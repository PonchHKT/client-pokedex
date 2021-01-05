import React, { Component } from "react";

import PokemonAttack from "./PokemonAttack";

import Img from '../images/pokeball.png';


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


    if (!this.state.pokemons.attaques) {
      return <div className=".loader">
                <div className="l-back">
                    <div className="l-img"></div>
                    <img src={Img} alt="pokeball" className="pokeballimg"/>

                </div>
            </div>
    }
    
    let type2verif;
    if(poke.type2) {
      type2verif = (
        <tr>
          <td>
            Type 2
          </td>
          <td>
            {poke.type2}
          </td>
        </tr>)
    }

    let nomromajiverif;
    if (poke.nomromaji) {
      nomromajiverif = (
        <tr>
          <td>
            Nom ROMAJI
          </td>
          <td>
            {poke.nomromaji}
          </td>
        </tr>)
    }

    return (
      <div className="p-card">
        <div className="p-header">
          <button>
            <a href="../" className="Page2Bouton"><div className="buttonimg"></div></a>
          </button>
          <div>
            <div className="text">
              <h1>#{poke.numéro}</h1>
              <h1>{poke.nom}</h1>
            </div>
            <img src={pokeurl} alt="Pokemon"/>
          </div>
        </div>

        <div className="p-identite">

          <div className="p-title">
            <h1>
              Identité
            </h1>
            <div className="line"></div>
          </div>

          <div className="p-center">
            <table>

              <div className="p-identite2">
                <div className="p-idbody">
                  <tbody className="tbody1">

                    <tr>
                      <td>
                        Couleur
                      </td>
                      <td>
                        {poke.couleur}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Espece
                      </td>
                      <td>
                        {poke.espece}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Type 1
                      </td>
                      <td>
                        {poke.type1}
                      </td>
                    </tr>

                    {type2verif}
                  
                    <tr>
                      <td>
                        Taille
                      </td>
                      <td>
                        {poke.taille}m
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Poids
                      </td>
                      <td>
                        {poke.poids}kg
                      </td>
                    </tr> 

                    <tr>
                      <td>
                        Forme
                      </td>
                      <td>
                        {poke.forme}
                      </td>
                    </tr> 

                  </tbody>
                </div>


                <tbody className="tbody2">

                  <tr>
                    <td>
                      Pokemon
                    </td>
                    <td>
                      {poke.nom}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Nom FR
                    </td>
                    <td>
                      {poke.nom}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Nom EN
                    </td>
                    <td>
                      {poke.nomen}
                    </td>
                  </tr>
                
                  <tr>
                    <td>
                      Nom DE
                    </td>
                    <td>
                      {poke.nomde}
                    </td>
                  </tr>

                  {nomromajiverif}

                  <tr>
                    <td>
                      Nom TM
                    </td>
                    <td>
                      {poke.nomtm}
                    </td>
                  </tr> 

                  <tr>
                    <td>
                      Nom JA
                    </td>
                    <td>
                      {poke.nomja}
                    </td>
                  </tr> 

                </tbody>
              </div>

            </table>
          </div>
        </div>

          <div className="p-attack">

            <div className="separator"></div>
           
            <div className="p-title">
              <h1>
                Attaques
              </h1>
              <div className="line"></div>
            </div>

              <table>

              {this.state.pokemons.attaques.map((attack, index) => (
                <PokemonAttack
                  key={attack.index}
                  lvl={attack.niveau}
                  nom={attack.nom}
                  power={attack.puissance}
                  prec={attack.precision}
                  pp={attack.pp}
                />
              ))}

            </table>
        </div>
      </div>
    );
  }
}

export default PokemonI;
