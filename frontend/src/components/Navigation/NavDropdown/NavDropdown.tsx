import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "../Navigation.styled";

import * as S from "./NavDropdown.styled";

export interface DropdownItem {
  to: string;
  label: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  navColor?: string;
  isTriggerActive: boolean;
  currentPath: string;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  navColor,
  isTriggerActive,
  currentPath,
}) => {
  return (
    <S.DropdownContainer>
      <NavLink as="span" $textColour={navColor} $isActive={isTriggerActive}>
        {label}▾
      </NavLink>

      <S.DropdownMenu>
        {items.map((item) => (
          <S.DropdownMenuItem key={item.to}>
            <S.DropdownLink
              as={Link}
              to={item.to}
              $isActive={currentPath.startsWith(item.to)}
            >
              {item.label}
            </S.DropdownLink>
          </S.DropdownMenuItem>
        ))}
      </S.DropdownMenu>
    </S.DropdownContainer>
  );
};
