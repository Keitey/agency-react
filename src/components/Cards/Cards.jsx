import React from "react";
import * as C from "./styles";

import {
  FaBuffer,
  FaBolt,
  FaCartPlus,
  FaChartLine,
  FaChessPawn,
  FaCloud,
} from "react-icons/fa";

const Cards = () => {
  return (
    <C.CardsContainer>
      <h2>O que fazemos</h2>
      <C.CardServices>
      <C.Card>
        <FaBuffer />
        <h3>Desenvolvimento full stack</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>

      <C.Card>
        <FaBolt />
        <h3>Sites leves e rápidos</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>

      <C.Card>
        <FaCartPlus />
        <h3>E-Commerces</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>

      <C.Card>
        <FaChartLine />
        <h3>SEO</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>

      <C.Card>
        <FaChessPawn />
        <h3>Estratégias de Marketing</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>

      <C.Card>
        <FaCloud />
        <h3>Hospedagem AWS/Azure</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
          reprehenderit nihil atque error delectus officiis sunt fuga, dolorum
          ad autem, sapiente blanditiis consequuntur illo dicta recusandae.
          Dolor labore ad facilis.
        </p>
      </C.Card>
      </C.CardServices>
      <a href="#" className="btn">Veja todos os serviços</a>
    </C.CardsContainer>
  );
};

export default Cards;
