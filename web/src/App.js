import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Icon from "./assets/SVG";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home
        className="section"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam."
      />
      <Icon width="1547" viewBox="0 0 1547 1066" />
    </div>
  );
}

export default App;
