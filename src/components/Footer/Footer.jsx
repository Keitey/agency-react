import React from "react";
import * as C from "./styles";

const Footer = () => {
  return (
    <C.Footer>
      <C.Container>
        <C.Description>
          <h3>Agency</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            velit corporis blanditiis dignissimos illo, distinctio modi optio
            deserunt sed rem eius, quia eaque doloremque explicabo accusantium
            aut, veritatis illum. Accusantium!
          </p>
        </C.Description>
        <C.Links>
          <div className="container-list">
            <p>Links</p>
            <ul>
              <li>
                <a href="#">Base de conhecimentos</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#">Últimos Projetos</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="container-list">
            <p>Links</p>
            <ul>
              <li>
                <a href="#">Base de conhecimentos</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#">Últimos Projetos</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="container-list">
            <p>Links</p>
            <ul>
              <li>
                <a href="#">Base de conhecimentos</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#">Últimos Projetos</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </C.Links>
      <C.Copy>
        <p>&copy; 2022 Agency</p>
        <p>A melhor agência web para seus projetos</p>
      </C.Copy>
      </C.Container>
    </C.Footer>
  );
};

export default Footer;
