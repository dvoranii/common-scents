import styled from "styled-components";

export const NavWrapperOuter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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

export const NavLink = styled.a``;
