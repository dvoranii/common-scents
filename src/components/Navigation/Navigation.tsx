import "./Navigation.styled";
import {
  Nav,
  NavWrapperInner,
  NavWrapperOuter,
  NavList,
  NavItem,
  NavLink,
} from "./Navigation.styled";

export const Navigation: React.FC = () => {
  return (
    <>
      <NavWrapperOuter>
        <NavWrapperInner>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tips & Guides</NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </NavWrapperInner>
      </NavWrapperOuter>
    </>
  );
};
