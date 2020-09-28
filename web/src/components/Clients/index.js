import React, { Component } from "react";

import pcImage from "../../assets/pcs.svg";

import Carousel from "./Carousel";

export default class Clients extends Component {
  render() {
    return (
      <div id="clients" className="page-landing-clients">
        <div id="page-landing-content-clients" className="container">
          <div></div>
          <div className="text-clients">
            <h1>Clientes</h1> <br />
            <h4>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h4>
            <br />
            <h3>Porque escolher?</h3>
            <ul>
              <li>osfsdfdi</li>
              <li>odfsdfi</li>
            </ul>
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}
