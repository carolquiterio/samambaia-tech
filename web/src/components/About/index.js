import React, { Component } from "react";
import "./styles.css";
import pcImage from "../../assets/pcs.svg";

import { RiCheckLine } from "react-icons/ri";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="page-landing">
        <div id="page-landing-content-about" className="container">
          <div></div>
          <div className="text-about">
            <h1>SOBRE NÓS</h1> <br />
            <img src={pcImage} className="image-about" />
            <h4>
              Nossa equipe é composta por engenheiros e programadores. As
              soluções que se pode extrair dessas duas áreas do conhecimento
              quando convergidas são infinitas e que associadas a criatividade
              inovadora de nossa equipe geram produtos que otimizam e
              desenvolvem novas tecnologias digitais para intervir no
              ciberespaço de forma justa, igualitária e ética favorecendo,
              assim, a pluridiversidade.
            </h4>
            <br />
            <h3>Porque escolher?</h3>
            <ul>
              <li>
                <RiCheckLine color="#6EDDB5" size={30} />
                Maior visibilidade e otimização dos processos;
              </li>
              <li>
                <RiCheckLine color="#6EDDB5" size={30} />
                Redução de danos ao meio ambiente;
              </li>

              <li>
                <RiCheckLine color="#6EDDB5" size={30} />
                Preservar a integridade física de seus funcionários.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
