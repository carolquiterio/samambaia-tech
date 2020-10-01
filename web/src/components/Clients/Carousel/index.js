import React, { Component } from "react";
import Slider from "react-slick";

import { StyledCard, ClientSays, ClientImg } from "./styles";

import clientImg from "../../../assets/quadrado.jpg";

import "./styles.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#6EDDB5" }}
      onClick={onClick}
    />
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="client-card-container">
            <h1 className="card-text">
              <img src={clientImg} className="client-image" />
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            </h1>
            <br />
            <br />

            <h1 className="card-text">- Maísa Silva</h1>
          </div>
          <div className="client-card-container">
            <h1 className="card-text">
              <img src={clientImg} className="client-image" />
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            </h1>
            <br />
            <br />

            <h1 className="card-text">- Maísa Silva</h1>
          </div>
          <div className="client-card-container">
            <h1 className="card-text">
              <img src={clientImg} className="client-image" />
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            </h1>
            <br />
            <br />

            <h1 className="card-text">- Maísa Silva</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
