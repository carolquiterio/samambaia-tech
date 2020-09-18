import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Menu from "../Menu";

const Nav = styled.nav`
  width: 100%;
  height: 55px;

  padding: 0 20px;
  display: flex;

  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  position: absolute;
  flex-direction: top;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="logo"></div>
        <Burger />
      </Nav>
      <Menu
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam."
      />
    </>
  );
};

export default Navbar;
