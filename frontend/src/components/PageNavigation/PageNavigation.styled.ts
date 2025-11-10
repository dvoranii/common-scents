import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid #e0e0e0;
`;

export const NavButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 20px;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid #e78732;
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 0.75rem;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #efad70, #e88e44);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;
