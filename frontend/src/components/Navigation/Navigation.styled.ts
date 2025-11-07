import styled from "styled-components";

export const NavWrapperOuter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavWrapperInner = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.md};
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.fontSizes.xxxl};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const NavItem = styled.li``;

export const NavLink = styled.a<{ $textColour?: string }>`
  color: ${(props) =>
    props.$textColour ? props.$textColour : props.theme.colors.black};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: ${(props) => props.theme.fontSizes.base};
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
    /* background-color: currentColor; */
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

export const MobileNavOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    transition: all 0.3s ease;
  }
`;

export const MobileNavSidebar = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    right: ${(props) => (props.$isOpen ? "0" : "-50%")};
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: right 0.3s ease;
    padding: ${(props) => props.theme.spacing.xxl};
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  margin-top: ${(props) => props.theme.spacing.xxl};
`;

export const MobileNavItem = styled.li`
  list-style: none;
`;

export const MobileNavLink = styled.a<{ $isActive?: boolean }>`
  color: ${(props) =>
    props.$isActive ? props.theme.colors.text : props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  text-decoration: none;
  display: block;
  padding: ${(props) => props.theme.spacing.sm} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: color 0.2s ease;

  &:hover {
    color: grey;
  }
`;
