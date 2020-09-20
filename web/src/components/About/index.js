import React, { Component } from "react";
import "./styles.css";

export default class About extends Component {
  render() {
    return (
      <div id="page-landing-about">
        <div id="page-landing-content" className="container">
          <div>
            <div className="logo-container">
              <h1>Bem vindo(a) a</h1>
              <h2>Samambaia Tech</h2>
              <h5 className="description">{this.props.description}</h5>
            </div>
            <div className="button-container">
              <button className="start-button">Entrar em contato</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
