import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { MobileNav, type NavItemType } from "./MobileNav/MobileNav";
import {
  Nav,
  NavWrapperInner,
  NavWrapperOuter,
  NavList,
  NavItem,
  NavLink,
  BurgerButton,
  AnimatedBurgerIcon,
} from "./Navigation.styled";
import { NavDropdown } from "./NavDropdown/NavDropdown";

const OCCASION_NAV_COLORS: Record<string, string> = {
  "date-night": "#ffffff",
  "daily-driver": "#ffffff",
  "night-out": "#ffffff",
  formal: "#ffffff",
  office: "#1d2636",
  "active-gym": "#ffffff",
  "summer-vibes": "#111111",
  "cold-weather": "#ffffff",
};

const SEASON_NAV_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "#1d2636",
  summer: "#ffffff",
  autumn: "#ffffff",
};

const getNavColor = (pathname: string): string | undefined => {
  if (pathname === "/") return "#000000";

  const occasionMatch = pathname.match(/^\/occasions\/(.+)$/);
  if (occasionMatch) {
    return OCCASION_NAV_COLORS[occasionMatch[1]] || "#333";
  }

  const seasonMatch = pathname.match(/^\/seasons\/(.+)$/);
  if (seasonMatch) {
    return SEASON_NAV_COLORS[seasonMatch[1]] || "#333";
  }

  return "#333";
};

export const Navigation: React.FC = () => {
  const location = useLocation();
  const navColor = getNavColor(location.pathname);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  const getXColour = () => (isMobileNavOpen ? "#000000" : navColor);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  const navItemsBefore: NavItemType[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/fragrance-reviews", label: "Reviews" },
  ];

  const navItemsAfter: NavItemType[] = [
    {
      to: import.meta.env.VITE_NOTE_PYRAMID_PATH || "/note-pyramid-staging/",
      label: "Note Pyramid",
      isExternal: true,
    },
  ];

  const learnItems = [
    { to: "/guides", label: "Tips & Guides" },
    { to: "/academy", label: "Academy" },
  ];

  const exploreItems = [
    { to: "/categories", label: "Scent Categories" },
    { to: "/occasions", label: "Occasions" },
  ];

  const isLearnActive = ["guides", "academy"].some((segment) =>
    location.pathname.includes(segment)
  );

  const isExploreActive = ["categories", "occasions"].some((segment) =>
    location.pathname.includes(segment)
  );

  return (
    <>
      <NavWrapperOuter>
        <NavWrapperInner>
          <Nav>
            <NavList $isHomePage={isHomePage}>
              {navItemsBefore.map((item) => (
                <NavItem key={item.to}>
                  <NavLink
                    as={Link}
                    to={item.to}
                    $textColour={navColor}
                    $isActive={
                      item.to === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(item.to)
                    }
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              ))}

              <NavItem>
                <NavDropdown
                  label="Learn"
                  items={learnItems}
                  navColor={navColor}
                  isTriggerActive={isLearnActive}
                  currentPath={location.pathname}
                />
              </NavItem>

              <NavItem>
                <NavDropdown
                  label="Explore"
                  items={exploreItems}
                  navColor={navColor}
                  isTriggerActive={isExploreActive}
                  currentPath={location.pathname}
                />
              </NavItem>

              {navItemsAfter.map((item) => (
                <NavItem key={item.to}>
                  {item.isExternal ? (
                    <NavLink
                      as="a"
                      href={item.to}
                      $textColour={navColor}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = item.to;
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <NavLink
                      as={Link}
                      to={item.to}
                      $textColour={navColor}
                      $isActive={location.pathname.startsWith(item.to)}
                    >
                      {item.label}
                    </NavLink>
                  )}
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

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={closeMobileNav}
        currentPath={location.pathname}
        navItemsBefore={navItemsBefore}
        navItemsAfter={navItemsAfter}
      />
    </>
  );
};
