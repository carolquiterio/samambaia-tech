import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import NavBar from "./components/Nav/Navbar";
import About from "./components/About";

import Icon from "./assets/SVG";

import "./global.css";

function App() {
  return (
    <div className="landing">
      <NavBar />
      <About />
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
