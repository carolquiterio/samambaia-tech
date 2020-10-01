import React, { Component } from "react";

import pcImage from "../../assets/pcs.svg";

import Carousel from "./Carousel";

import "./styles.css";

export default class Clients extends Component {
  render() {
    return (
      <div id="clients" className="page-landing-clients">
        <div id="page-landing-content-clients" className="container">
          <div></div>
          <div className="text-clients">
            <h1>NOSSOS CLIENTES</h1> <br />
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h4>
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}
