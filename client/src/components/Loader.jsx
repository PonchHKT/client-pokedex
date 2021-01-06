import React, { Component } from "react";
import Img from "../images/pokeball.png";

class Loader extends Component {
  render() {

    return (
        <div className=".loader">
            <div className="l-back">
                <div className="l-img"></div>
                <img src={Img} alt="pokeball" className="pokeballimg"/>

            </div>
        </div>
    );
  }
}

export default Loader;
