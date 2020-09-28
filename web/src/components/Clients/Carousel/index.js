import React, { Component } from "react";
import Slider from "react-slick";

import { StyledCard } from "./styles";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <StyledCard>
            <h3>1111111</h3>
          </StyledCard>
          <StyledCard>
            <h3>2222222222</h3>
          </StyledCard>
          <StyledCard>
            <h3>3333333333</h3>
          </StyledCard>
        </Slider>
      </div>
    );
  }
}
