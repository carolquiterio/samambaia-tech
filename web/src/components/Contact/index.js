import React, { Component } from "react";

import pcImage from "../../assets/pcs.svg";

import "./styles.css";

export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className="page-landing-contact">
        <div id="page-landing-content-contact" className="container-contact">
          <div></div>
          <div className="text-contact">
            <h1>ENTRE EM CONTATO</h1> <br />
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h4>
            <br />
            <form className="form-contact">
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Seu nome"
              />
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Seu email"
              />
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Sua mensagem"
              />
              <br />
              <input
                type="submit"
                value="Enviar"
                className="form-button-contact"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
