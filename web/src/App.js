import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import NavBar from "./components/Nav/Navbar";

import Icon from "./assets/SVG";

import "./global.css";

function App() {
  return (
    <>
      <NavBar
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam."
      />
    </>
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
