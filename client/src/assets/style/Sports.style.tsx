import styled from "styled-components";

export const Sports = styled.section`
  background-color: #ff702c;
  max-width: 80vw;
  margin: 5rem auto;
  text-align: center;
  padding: 40px;

  h2 {
    color: #fff;
    font-family: "Outfit", sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 2rem;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(246px, 1fr));
    gap: 16px;

    > div {
      overflow: hidden;
      background: gray;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
      transition: transform 300ms ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;
