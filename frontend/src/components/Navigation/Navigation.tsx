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
  DropdownContainer,
  DropdownLink,
  DropdownMenu,
  DropdownMenuItem,
} from "./Navigation.styled";

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

  const navItemsBefore = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/fragrance-reviews", label: "Reviews" },
  ];

  const navItemsAfter = [{ to: "/note-pyramid", label: "Note Pyramid" }];

  const learnItems = [
    { to: "/guides", label: "Tips & Guides" },
    { to: "/academy", label: "Academy" },
  ];

  const exploreItems = [
    { to: "/categories", label: "Scent Categories" },
    { to: "/occasions", label: "Occasions" },
  ];

  const LEARN_PATH_SEGMENTS = ["guides", "academy"];
  const EXPLORE_PATH_SEGMENTS = ["categories", "occasions"];

  const isLearnActive = LEARN_PATH_SEGMENTS.some((segment) =>
    location.pathname.includes(segment)
  );
  const isExploreActive = EXPLORE_PATH_SEGMENTS.some((segment) =>
    location.pathname.includes(segment)
  );

  const getDropdownItemIsActive = (
    to: string,
    currentPath: string
  ): boolean => {
    return currentPath.startsWith(to);
  };

  return (
    <>
      <NavWrapperOuter>
        <NavWrapperInner>
          <Nav>
            <NavList>
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
                <DropdownContainer>
                  <NavLink
                    as="span"
                    $textColour={navColor}
                    $isActive={isLearnActive}
                  >
                    Learn▾
                  </NavLink>
                  <DropdownMenu>
                    {learnItems.map((item) => (
                      <DropdownMenuItem key={item.to}>
                        <DropdownLink
                          as={Link}
                          to={item.to}
                          $isActive={getDropdownItemIsActive(
                            item.to,
                            location.pathname
                          )}
                        >
                          {item.label}
                        </DropdownLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenu>
                </DropdownContainer>
              </NavItem>
              <NavItem>
                <DropdownContainer>
                  <NavLink
                    as="span"
                    $textColour={navColor}
                    $isActive={isExploreActive}
                  >
                    Explore▾
                  </NavLink>
                  <DropdownMenu>
                    {exploreItems.map((item) => (
                      <DropdownMenuItem key={item.to}>
                        <DropdownLink
                          as={Link}
                          to={item.to}
                          $isActive={getDropdownItemIsActive(
                            item.to,
                            location.pathname
                          )}
                        >
                          {item.label}
                        </DropdownLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenu>
                </DropdownContainer>
              </NavItem>

              {navItemsAfter.map((item) => (
                <NavItem key={item.to}>
                  <NavLink
                    as={Link}
                    to={item.to}
                    $textColour={navColor}
                    $isActive={location.pathname.startsWith(item.to)}
                  >
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
            {navItemsBefore.map((item) => (
              <MobileNavItem key={item.to}>
                <MobileNavLink
                  as={Link}
                  to={item.to}
                  onClick={closeMobileNav}
                  $isActive={
                    item.to === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.to)
                  }
                >
                  {item.label}
                </MobileNavLink>
              </MobileNavItem>
            ))}

            <MobileNavItem>
              <MobileNavLink
                as={Link}
                to="/guides"
                onClick={closeMobileNav}
                $isActive={location.pathname === "/guides"}
              >
                Tips & Guides
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink
                as={Link}
                to="/academy"
                onClick={closeMobileNav}
                $isActive={location.pathname === "/academy"}
              >
                Academy
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink
                as={Link}
                to="/categories"
                onClick={closeMobileNav}
                $isActive={location.pathname === "/categories"}
              >
                Scent Categories
              </MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink
                as={Link}
                to="/occasions"
                onClick={closeMobileNav}
                $isActive={location.pathname === "/occasions"}
              >
                Occasions
              </MobileNavLink>
            </MobileNavItem>

            {navItemsAfter.map((item) => (
              <MobileNavItem key={item.to}>
                <MobileNavLink
                  as={Link}
                  to={item.to}
                  onClick={closeMobileNav}
                  $isActive={location.pathname.startsWith(item.to)}
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
