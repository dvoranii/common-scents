import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 250px;
  background: linear-gradient(to top, #efad70, #e88e44);
  border-top: 4px solid #e78732;
  position: relative;
`;

export const Trademark = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  font-family: "Lato", sans-serif;
  padding-bottom: 12px;
`;
export const ContainerInner = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;

    li {
      font-size: clamp(16px, 2vw, 1.2rem);
      font-weight: bold;
      color: #fff;
      text-shadow: -1px 1px 2px black;
      transition: all 300ms ease;
      position: relative;
      width: fit-content;
      cursor: pointer;
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
    }
  }
`;
export const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 20px;
`;
export const LogoImg = styled.img`
  max-width: 70px;
`;
