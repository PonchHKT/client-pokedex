import React, { Component } from "react";

class PokemonAttack extends Component {
  
  render() {

    return (
        <div className="attackcard">
          <tr>
            <td>
              Niveau
            </td>
            <td>
              {this.props.lvl}
            </td>
          </tr>


          <tr>
            <td>
              Nom
            </td>
            <td>
              {this.props.nom}
            </td>
          </tr>


          <tr>
            <td>
              Puissance
            </td>
            <td>
              {this.props.power}
            </td>
          </tr>


          <tr>
            <td>
              Précision
            </td>
            <td>
              {this.props.prec}
            </td>
          </tr>


          <tr>
            <td>
              PP
            </td>
            <td>
              {this.props.pp}
            </td>
          </tr>
        </div>
    );
  }
}

export default PokemonAttack;
