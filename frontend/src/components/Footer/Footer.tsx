import {
  Container,
  ContainerInner,
  NavList,
  ImgWrapper,
  LogoImg,
  Trademark,
} from "./Footer.styled";
import { Link } from "react-router-dom";

import Logo from "../../assets/cs-bulb.png";

const Footer: React.FC = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <>
      <Container>
        <ContainerInner>
          <NavList>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/fragrance-reviews">Reviews</Link>
              </li>
              <li>Tips & Guides</li>
            </ul>
          </NavList>
          <ImgWrapper>
            <LogoImg src={Logo} />
          </ImgWrapper>
        </ContainerInner>
        <Trademark>
          © {currentYear} Common Scents™. All rights reserved.
        </Trademark>
      </Container>
    </>
  );
};

export default Footer;
