import React, { Component } from "react";

class PokemonAttack extends Component {
  
  render() {

    return (
        <tr>
            <td>
            Niveau :
            </td>
            <td>
              {this.props.niveau}
            </td>
        </tr>
    );
  }
}

export default PokemonAttack;
