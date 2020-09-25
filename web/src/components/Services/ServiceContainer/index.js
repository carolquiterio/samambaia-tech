import React, { Component } from "react";

import "./styles.css";

import { AiOutlineAreaChart } from "react-icons/ai";

export default class ServiceContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="service-container">
        <div className="circle">
          <AiOutlineAreaChart color="#fff" size={60} />
        </div>
        <div className="text-service-container">
          <h1>{this.props.title}</h1>
          <h2>{this.props.description}</h2>
        </div>
      </div>
    );
  }
}
