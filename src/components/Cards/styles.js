import styled from "styled-components";

export const CardsContainer = styled.div`
  text-align: center;
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
    text-align: center;
  }

  .btn {
    padding: 0.8rem 1.2rem;
    border: 2px solid #ff5200;
    border-radius: 2rem;
    transition: 0.5s;
    color: #fff;
    margin-top: 1rem;
    font-size: 16px;
    background-color: #ff5200;
    transition: 0.5s;
    text-shadow: none !important;

    &:hover {
      background-color: transparent;
      color: #ff5200;
    }
  }

  @media only screen and (max-width: 600px){
    h2{
      font-size: 1.8rem;
    }

    .btn{
      font-size: 14px;
    }
  }
`;

export const CardServices = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem;

  @media only screen and (max-width: 600px){
    width: 100%;
    padding: 0;
  }
`;

export const Card = styled.div`
  width: 30%;
  margin: 1%;
  padding: 2rem;
  border: 1.4px solid #ccc;
  transition: 0.5s;

  svg {
    color: #ff5200;
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #8b8e94;
  }

  &:hover {
    border: transparent;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  @media only screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
  }
`;
