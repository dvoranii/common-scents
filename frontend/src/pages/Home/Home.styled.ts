import styled from "styled-components";

export const SeeMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${(props) => props.theme.spacing.xxxl};
`;

export const GradientHoverLink = styled.a`
  text-align: center;
  margin: 0 auto;
  font-size: ${(props) => props.theme.fontSizes.base};
  text-transform: uppercase;
  position: relative;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  background: linear-gradient(
    to right,
    #b45309 0%,
    #b45309 50%,
    ${(props) => props.theme.colors.text} 50%,
    ${(props) => props.theme.colors.text} 100%
  );

  background-size: 200% 100%;
  background-position: 100% 0;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: background-position 0.5s ease, transform 0.2s ease;

  &:hover {
    background-position: 0% 0;
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: #b45309;
    bottom: -5px;
    left: 0;
    width: 0%;
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
