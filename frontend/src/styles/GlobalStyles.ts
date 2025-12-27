import { createGlobalStyle } from "styled-components";
import "flickity/css/flickity.css";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    font-family: ${(props) =>
      props.theme.fonts.body}, system-ui, -apple-system, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    line-height: 1.25;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }


  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }


  h1, h2 {
    font-family: ${(props) => props.theme.fonts.heading1}, serif;
    font-weight: 700;
  }

  h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading2}, serif;
    font-weight: 500;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    background: none;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
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
