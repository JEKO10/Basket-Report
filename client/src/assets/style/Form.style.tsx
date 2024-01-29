import styled from "styled-components";
import { flexMixin } from "./GlobalStyles";

export const Form = styled.form`
  background-color: #ff702c;
  color: #fff;
  ${flexMixin({ justify: "center", align: "center" })};
  flex-direction: column;

  div {
    ${flexMixin({ justify: "center", align: "center" })};
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
