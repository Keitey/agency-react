import styled from "styled-components";

export const Header = styled.header`
  background-size: cover;
  background-position: center;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: #000;
  z-index: 10;
  height: 13vh;
  align-items: center;

  .brand {
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    transition: 0.5s;
    &:hover {
      color: #ff5200;
    }
  }

  .menu-icon {
    color: #fff;
    font-size: 2.5rem;
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .menu-icon {
      display: block; 
      font-size: 1.8rem;
    }

    .brand {
      font-size: 1.8rem;

      svg {
        height: 20px;
      }
    }
  }
`;

export const NavBar = styled.nav`
  ul {
    display: flex;
    align-items: center;
    height: 100%;
  }

  li {
    margin: 5px 10px;
  }

  a {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    transition: 0.5s;

    &:hover {
      color: #ff5200;
    }
  }

  .btn {
    padding: 0.6rem 1rem;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: 0.5s;
    color: #fff;

    &:hover {
      color: #ff5200;
      border-color: #ff5200;
    }
    &-primary {
      background-color: #ff5200;
      border-color: #ff5200;
    }
    &:hover {
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ff5200;
  font-weight: 900;
  font-size: 30px;
  filter: brightness(63%);
  filter: contrast(156%);
  text-shadow: 2px 3px #000;

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
    }
  }

  @media only screen and (max-width: 600px){
    h2,h1{
      text-align: center;
      font-size: 28px;
    }

    .btn{
      font-size: 12px;
    }
  }
`;
