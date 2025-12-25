import styled from "styled-components";

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
  list-style: none;
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
