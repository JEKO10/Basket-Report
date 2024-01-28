import styled from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const Navbar = styled.nav`
  ${flexMixin({ justify: "space-between", align: "center" })};
  background-color: #ff702c;
  padding: 10px 40px;

  img {
    height: 70px;
  }

  button {
    background-color: #454d60;
    color: #fff;
    font-size: 1rem;
    font-family: "Outfit", sans-serif;
    margin: 0 0.5rem;
    padding: 5px 20px 10px;
    border-radius: 20px;
    cursor: pointer;
  }
`;
