import { createGlobalStyle } from "styled-components";
import "flickity/css/flickity.css";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    /* line-height: 1.6; */
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: 700;
  }

  button {
    font-family: ${(props) => props.theme.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden !important;
  }
  

  .carousel:focus {
    outline: none;
  }
`;
