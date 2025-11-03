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

export const NavLink = styled.a<{ $textColour?: string }>`
  color: ${(props) =>
    props.$textColour ? props.$textColour : props.theme.colors.black};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
