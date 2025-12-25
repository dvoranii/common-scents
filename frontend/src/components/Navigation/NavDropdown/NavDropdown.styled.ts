import styled from "styled-components";

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 4px 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
  list-style: none;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }

  &:hover ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const DropdownMenuItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #eee;
`;

export const DropdownLink = styled.a<{ $isActive?: boolean }>`
  display: block;
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  color: ${(props) =>
    props.$isActive ? "#e78732" : `${props.theme.colors.text}`};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#fff" : "#eee")};
    cursor: ${(props) => (props.$isActive ? "default" : "pointer")};
  }
`;
