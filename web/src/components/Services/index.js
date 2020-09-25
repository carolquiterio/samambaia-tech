import React, { Component } from "react";

import ServiceContainer from "./ServiceContainer";

import pcImage from "../../assets/pcs.svg";

import "./styles.css";

export default class Services extends Component {
  render() {
    return (
      <div id="services" className="page-landing-services">
        <div id="page-landing-content-services" className="container">
          <div></div>
          <div className="text-services">
            <h1>NOSSOS SERVIÇOS</h1> <br />
            <ServiceContainer
              title="Análise de dados"
              description="Nossa equipe é composta por engenheiros e programadores. As
              soluções que se pode extrair dessas duas áreas do conhecimento
              quando convergidas são infinitas e que associadas a criatividade
              inovadora de nossa equipe geram produtos"
            />
            <ServiceContainer
              title="Análise de dados"
              description="Nossa equipe é composta por engenheiros e programadores. As
            soluções que se pode extrair dessas duas áreas do conhecimento
            quando convergidas são infinitas e que associadas a criatividade
            inovadora de nossa equipe geram produtos"
            />
            <ServiceContainer
              title="Análise de dados"
              description="Nossa equipe é composta por engenheiros e programadores. As
          soluções que se pode extrair dessas duas áreas do conhecimento
          quando convergidas são infinitas e que associadas a criatividade
          inovadora de nossa equipe geram produtos"
            />
          </div>
        </div>
      </div>
    );
  }
}
