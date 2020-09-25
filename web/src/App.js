import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import NavBar from "./components/Nav/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Works from "./components/Works";

import Icon from "./assets/SVG";

import "./global.css";

function App() {
  return (
    <div className="landing">
      <NavBar />
      <About />
      <Services />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between",
  position: "absolute"
};

/**      <Icon width="1547" viewBox="0 0 1547 1066" /> */
