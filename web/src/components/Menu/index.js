import React, { Component } from "react";
import Icon from "../../assets/SVG";
import "./styles.css";

import backHomeImage from "../../assets/page.svg";

export default class Menu extends Component {
  render() {
    return (
      <div className="fundo">
        <div className="menu-container">
          <a className="itemMenu" href="/">
            Contato
          </a>
          <a className="itemMenu" href="/">
            Clientes
          </a>
          <a className="itemMenu" href="/">
            Trabalhos
          </a>
          <a className="itemMenu" href="/">
            Serviços
          </a>
          <a className="itemMenu" href="/">
            Sobre
          </a>
          <a className="itemMenu" href="/">
            Início
          </a>
        </div>
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
      </div>
    );
  }
}

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-around",
  position: "absolute"
};

/*



import React, { Component } from "react";
import Icon from "../../assets/SVG";
import "./styles.css";

import backHomeImage from "../../assets/homeImag.svg";

export default class Menu extends Component {
  render() {
    return (
      <div styles={styles} className="fundo">
        <a className="itemMenu" href="/">
          Contato
        </a>
        <a className="itemMenu" href="/">
          Clientes
        </a>
        <a className="itemMenu" href="/">
          Trabalhos
        </a>
        <a className="itemMenu" href="/">
          Serviços
        </a>
        <a className="itemMenu" href="/">
          Sobre
        </a>
        <a className="itemMenu" href="/">
          Início
        </a>
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
      </div>
    );
  }
}

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-around",
  position: "absolute"
};
*/
