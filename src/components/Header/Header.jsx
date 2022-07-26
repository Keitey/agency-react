import React from "react";
import * as C from "./styles";

import office from "../../img/office.jpg";
import { FaBrain } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <C.Header
      style={{
        backgroundImage: `url(${office}`,
        filter: "brightness(88%)",
        height: "95vh",
      }}
    >
      <C.NavContainer>
        <a href="#" className="brand">
          <FaBrain size={30}/>
          Agency
        </a>
        <C.NavBar>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li className="btn btn-primary">
              <a href="#">Entrar</a>
            </li>
            <li className="btn">
              <a href="#">Registrar</a>
            </li>
          </ul>
        </C.NavBar>
        <AiOutlineMenu className="menu-icon" />
      </C.NavContainer>
      <C.Title>
        <h2>Nós desenvolvemos</h2>
        <h1>Poderosas Experiências</h1>
        <a href="#" className="btn">Fazer Orçamento</a>
      </C.Title>
    </C.Header>
  );
};

export default Header;
