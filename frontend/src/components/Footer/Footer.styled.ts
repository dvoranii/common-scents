import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  width: 100%;
  min-height: 280px;

  background: linear-gradient(to top, rgba(38, 50, 70, 0.8), rgb(38, 50, 70));
  border-top: 4px solid whitesmoke;
  position: relative;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 50%,
      rgba(0, 0, 0, 0.1)
    );
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      inset 0 1px 1px rgba(255, 255, 255, 0.5);
  }
`;

export const ContainerInner = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 643px) {
    align-items: flex-start;
  }
`;

export const Trademark = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 10px;

  font-family: "Lato", sans-serif;
  font-display: swap;
  color: whitesmoke;
  letter-spacing: 0.5px;
  font-weight: 200;
  font-size: ${(props) => props.theme.fontSizes.sm};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

export const LogoImg = styled.img`
  width: 65px;
  height: 87px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
`;

export const NavListWrapper = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  gap: 0.4rem;
`;

export const NavListItem = styled.li`
  transition: transform 300ms ease;
  width: max-content;
  cursor: pointer;
`;

export const NavLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => (props.$isActive ? "600" : "200")};
  color: whitesmoke;
  text-shadow: -1px 1px 2px black;
  transition: color 200ms ease, filter 200ms ease;
  text-decoration: none;
  position: relative;

  &:hover {
    color: white;
    filter: brightness(1.15);
  }

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: rgb(233, 147, 76);
    bottom: 0px;
    left: 0;
    width: ${(props) => (props.$isActive ? "100%" : "0%")};
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${(props) =>
    !props.$isActive &&
    `
    &:hover::after {
      width: 100%;
    }
  `}
`;

export const TermsAndPrivacyWrapperOuter = styled.div`
  width: 100%;
`;

export const TermsLink = styled(Link)`
  &:hover {
    text-shadow: -2px 2px 8px rgba(255, 255, 255, 1);
  }
`;
export const PrivacyLink = styled(Link)`
  &:hover {
    text-shadow: -2px 2px 8px rgba(234, 150, 79, 1);
  }
`;

export const TermsAndPrivacyWrapperInner = styled.div`
  display: flex;
  justify-content: center;

  ${TermsLink}, ${PrivacyLink} {
    color: whitesmoke;
    font-weight: 200;
    font-size: ${(props) => props.theme.fontSizes.base};
    letter-spacing: 0.25px;
    text-decoration: underline;
    transition: filter 200ms ease;

    &:hover {
      filter: brightness(1.15);
    }
  }
`;

export const Delimeter = styled.span`
  color: whitesmoke;
`;
