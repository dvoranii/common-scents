import styled from "styled-components";

export const SecondaryButton = styled.button`
  position: relative;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid #c7c6cb;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: 16px 32px;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  z-index: 1;

  opacity: 0;
  animation: pureFadeIn 500ms ease 1500ms forwards;
  transform: none !important;

  span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(to bottom, #92400e 4%, #451a03 96%);
    transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;

    span {
      width: 225%;
      height: 562.5px;
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.backgroundAlt};
  }

  @keyframes pureFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
