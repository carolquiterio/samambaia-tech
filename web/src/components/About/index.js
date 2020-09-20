import React, { Component } from "react";
import "./styles.css";
import pcImage from "../../assets/pcs.svg";

export default class About extends Component {
  render() {
    return (
      <div id="page-landing-about">
        <div id="page-landing-content-about" className="container">
          <div></div>
          <div className="text-about">
            <h1>SOBRE NÓS</h1> <br />
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
          </div>
        </div>
      </div>
    );
  }
}
