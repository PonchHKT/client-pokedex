import React, { Component } from "react";

import "../loader.css";


class Loader extends Component {

  render() {
    return (
        <div>
            <div className="l-back">
                <div className="l-img"></div>
            </div>
        </div>
    );
  }
}

export default Loader;
