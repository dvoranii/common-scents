import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Nav,
  NavWrapperInner,
  NavWrapperOuter,
  NavList,
  NavItem,
  NavLink,
  BurgerButton,
  MobileNavOverlay,
  MobileNavSidebar,
  MobileNavList,
  MobileNavItem,
  MobileNavLink,
  AnimatedBurgerIcon,
} from "./Navigation.styled";

const OCCASION_NAV_COLORS: Record<string, string> = {
  "date-night": "#ffffff",
  "daily-driver": "#0b7bfc",
  "night-out": "#ffffff",
  formal: "#eeeeee",
  office: "#34495E",
  "active-gym": "#ffe1de",
  "summer-vibes": "#392300",
  "cold-weather": "#ffffff",
};

const getNavColor = (pathname: string): string | undefined => {
  if (pathname === "/") {
    return "#000000";
  }

  const occasionMatch = pathname.match(/^\/occasions\/(.+)$/);
  if (occasionMatch) {
    const slug = occasionMatch[1];
    return OCCASION_NAV_COLORS[slug] || "#333";
  }

  return "#333";
};

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navColor = getNavColor(location.pathname);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const getXColour = () => {
    return isMobileNavOpen ? "#000000" : navColor;
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/guides", label: "Tips & Guides" },
  ];

  return (
    <>
      <NavWrapperOuter>
        <NavWrapperInner>
          <Nav>
            <NavList>
              {navItems.map((item) => (
                <NavItem key={item.to}>
                  <NavLink as={Link} to={item.to} $textColour={navColor}>
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </NavWrapperInner>
      </NavWrapperOuter>

      <BurgerButton
        onClick={toggleMobileNav}
        $textColour={navColor}
        $xColour={getXColour()}
        aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
      >
        <AnimatedBurgerIcon $isOpen={isMobileNavOpen} $xColour={getXColour()}>
          <div />
        </AnimatedBurgerIcon>
      </BurgerButton>
      <MobileNavOverlay $isOpen={isMobileNavOpen} onClick={closeMobileNav}>
        <MobileNavSidebar
          $isOpen={isMobileNavOpen}
          onClick={(e) => e.stopPropagation()}
        >
          <MobileNavList>
            {navItems.map((item) => (
              <MobileNavItem key={item.to}>
                <MobileNavLink
                  as={Link}
                  to={item.to}
                  onClick={closeMobileNav}
                  $isActive={location.pathname === item.to}
                >
                  {item.label}
                </MobileNavLink>
              </MobileNavItem>
            ))}
          </MobileNavList>
        </MobileNavSidebar>
      </MobileNavOverlay>
    </>
  );
};
