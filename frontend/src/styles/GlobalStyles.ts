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
    overflow-x: hidden;
  }

  h1, h2 {
    font-family: ${(props) =>
      props.theme.fonts
        .heading1}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 700;
  }

  h3, h4, h5, h6 {
    font-family: ${(props) =>
      props.theme.fonts
        .heading2}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 500;
  }

  button {
    font-family: ${(props) =>
      props.theme.fonts
        .body}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
