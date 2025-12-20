import * as S from "./Footer.styled";
import Logo from "/assets/images/cs-bulb.png";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  const { pathname } = useLocation();

  const checkActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/fragrance-reviews", label: "Reviews" },
    { to: "/guides", label: "Tips & Guides" },
    { to: "/academy", label: "Academy" },
    { to: "/categories", label: "Scent Categories" },
    { to: "/occasions", label: "Occasions" },
  ];

  return (
    <S.Container>
      <S.ContainerInner>
        <S.NavListWrapper>
          <S.NavList>
            {navLinks.map((link) => (
              <S.NavListItem key={link.to}>
                <S.NavLink to={link.to} $isActive={checkActive(link.to)}>
                  {link.label}
                </S.NavLink>
              </S.NavListItem>
            ))}
          </S.NavList>
        </S.NavListWrapper>
        <S.ImgWrapper>
          <S.LogoImg src={Logo} alt="Common Scents Logo" />
        </S.ImgWrapper>
      </S.ContainerInner>

      <S.TermsAndPrivacyWrapperOuter>
        <S.TermsAndPrivacyWrapperInner>
          <S.TermsLink to="/terms-of-service">Terms of Service</S.TermsLink>
          &nbsp;<S.Delimeter>|</S.Delimeter>&nbsp;
          <S.PrivacyLink to="/privacy-policy">Privacy Policy</S.PrivacyLink>
        </S.TermsAndPrivacyWrapperInner>
      </S.TermsAndPrivacyWrapperOuter>
      <S.Trademark>
        © {currentYear} Common Scents™. All rights reserved.
      </S.Trademark>
    </S.Container>
  );
};

export default Footer;
