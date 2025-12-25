import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Footer.styled";
import Logo from "/assets/images/cs-bulb-footer.webp";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/fragrance-reviews", label: "Reviews" },
  { to: "/guides", label: "Tips & Guides" },
  { to: "/academy", label: "Academy" },
  { to: "/categories", label: "Scent Categories" },
  { to: "/occasions", label: "Occasions" },
];

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  const checkActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <S.Container>
      <S.ContainerInner>
        <S.NavListWrapper>
          <S.NavList>
            {NAV_LINKS.map((link) => (
              <S.NavListItem key={link.to}>
                <S.NavLink to={link.to} $isActive={checkActive(link.to)}>
                  {link.label}
                </S.NavLink>
              </S.NavListItem>
            ))}
          </S.NavList>
        </S.NavListWrapper>

        <S.ImgWrapper>
          <S.LogoImg
            src={Logo}
            alt="Common Scents Logo"
            width="65"
            height="87"
            loading="lazy"
          />
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

export default memo(Footer);
