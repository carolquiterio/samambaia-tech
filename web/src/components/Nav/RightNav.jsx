import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #363636;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a className="itemMenu" href="/">
        Início
      </a>
      <a className="itemMenu" href="/about">
        Sobre
      </a>
      <a className="itemMenu" href="/services">
        Serviços
      </a>
      <a className="itemMenu" href="/works">
        Trabalhos
      </a>
      <a className="itemMenu" href="/clients">
        Clientes
      </a>
      <a className="itemMenu" href="/contact">
        Contato
      </a>
    </Ul>
  );
};

export default RightNav;
