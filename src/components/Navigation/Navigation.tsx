import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Nav,
  NavWrapperInner,
  NavWrapperOuter,
  NavList,
  NavItem,
  NavLink,
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

  return (
    <NavWrapperOuter>
      <NavWrapperInner>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink as={Link} to="/" $textColour={navColor}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/about" $textColour={navColor}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/reviews" $textColour={navColor}>
                Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/guides" $textColour={navColor}>
                Tips & Guides
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </NavWrapperInner>
    </NavWrapperOuter>
  );
};
