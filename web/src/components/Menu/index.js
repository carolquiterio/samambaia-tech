import React, { Component } from "react";

import "./styles.css";
export default class Menu extends Component {
  render() {
    return (
      <nav className="fundo">
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
      </nav>
    );
  }
}
