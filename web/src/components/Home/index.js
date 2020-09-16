import React, { Component } from "react";

import "./styles.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className="small-div"></div>

        <div className="big-div">
          <span className="div-title">Bem vindo(a) a</span>
          <br />
          <span className="div-title-bold">Samambaia Tech</span>

          <br />
          <span className="description">{this.props.description}</span>
        </div>

        <button className="start-button">Entrar em contato</button>
      </div>
    );
  }
}
