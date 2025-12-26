import styled from "styled-components";

export const NavWrapperOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 99;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavWrapperInner = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.md};
`;

export const Nav = styled.nav``;

export const NavList = styled.ul<{ $isHomePage?: boolean }>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.fontSizes.xl};
  font-size: ${(props) => props.theme.fontSizes.xl};
  list-style: none;

  ${(props) =>
    props.$isHomePage &&
    `
    & > li > * {
      opacity: 0;
      animation: fadeInNavLink 400ms ease forwards;
    }
    & > li:nth-child(1) > * {
      animation-delay: 1500ms;
    }

    & > li:nth-child(2) > * {
      animation-delay: 1600ms;
    }

    & > li:nth-child(3) > * {
      animation-delay: 1700ms;
    }

    & > li:nth-child(4) > * {
      animation-delay: 1800ms;
    }

    & > li:nth-child(5) > * {
      animation-delay: 1900ms;
    }
      
    & > li:nth-child(6) > * {
      animation-delay: 2000ms;
    }
    `}

  @keyframes fadeInNavLink {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  min-width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled.a<{ $textColour?: string; $isActive?: boolean }>`
  color: ${(props) =>
    props.$textColour ? props.$textColour : props.theme.colors.black};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  letter-spacing: 0.25px;
  text-transform: uppercase;
`;

export const AnimatedBurgerIcon = styled.div<{
  $isOpen: boolean;
  $xColour?: string;
  $burgerColour?: string;
}>`
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) =>
      props.$isOpen && props.$xColour ? props.$xColour : "currentColor"};
    top: 0;
    left: 0;

    transition: top 0.15s ease ${(props) => (props.$isOpen ? "0.2s" : "0.1s")},
      transform 0.15s ease ${(props) => (props.$isOpen ? "0.35s" : "0s")};

    top: ${(props) => (props.$isOpen ? "8px" : "0")};
    transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transform-origin: center;

    transition: all 0.2s ease ${(props) => (props.$isOpen ? "0s" : "0.2s")};

    transform: ${(props) =>
      props.$isOpen
        ? "translateY(-50%) scaleX(0)"
        : "translateY(-50%) scaleX(1)"};
    opacity: ${(props) => (props.$isOpen ? 0 : 1)};
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) =>
      props.$isOpen && props.$xColour ? props.$xColour : "currentColor"};
    bottom: 0;
    left: 0;

    transition: bottom 0.15s ease
        ${(props) => (props.$isOpen ? "0.2s" : "0.1s")},
      transform 0.15s ease ${(props) => (props.$isOpen ? "0.35s" : "0s")};

    bottom: ${(props) => (props.$isOpen ? "8px" : "0")};
    transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const BurgerButton = styled.button<{
  $textColour?: string;
  $xColour?: string;
}>`
  display: none;
  position: fixed;
  top: ${(props) => props.theme.spacing.md};
  right: ${(props) => props.theme.spacing.lg};
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  color: ${(props) =>
    props.$xColour || props.$textColour || props.theme.colors.black};
  padding: 8px;

  @media (max-width: 768px) {
    display: block;
  }
`;
