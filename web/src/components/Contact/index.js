import React, { Component } from "react";

import pcImage from "../../assets/pcs.svg";

import "./styles.css";

import { MdPlace } from "react-icons/md";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="page-landing-contact">
        <div id="page-landing-content-contact" className="container-contact">
          <div className="text-contact">
            <h1>ENTRE EM CONTATO</h1> <br />
            <br />
            <form className="form-contact">
              <div className="input-div">
                <input
                  type="text"
                  name="name"
                  className="contact-input"
                  placeholder="Seu nome"
                />
              </div>
              <input
                type="email"
                name="name"
                className="contact-input"
                placeholder="Seu email"
              />
              <textarea
                type="text"
                name="name"
                className="contact-input"
                placeholder="Sua mensagem"
                rows="10"
                cols="30"
              />
              <br />
              <input
                type="submit"
                value="Enviar"
                className="form-button-contact"
              />
            </form>
            <br />
            <label className="info-title">Informações para contato</label>
            <div className="icon-text-div">
              <MdPlace color="#363636" size={25} />
              <label className="info-description-title"> Endereço</label>
            </div>
            <label className="info-description">Rua Amélia Bueno n° 87</label>
            <div className="icon-text-div">
              <MdPlace color="#363636" size={25} />
              <label className="info-description-title"> Endereço</label>
            </div>
            <label className="info-description">Rua Amélia Bueno n° 87</label>
            <div className="icon-text-div">
              <MdPlace color="#363636" size={25} />
              <label className="info-description-title"> Endereço</label>
            </div>
            <label className="info-description">Rua Amélia Bueno n° 87</label>
          </div>
        </div>
      </div>
    );
  }
}
