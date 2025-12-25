import React from "react";
import { Link } from "react-router-dom";
import * as S from "./MobileNav.styled";

export interface NavItemType {
  to: string;
  label: string;
  isExternal?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  navItemsBefore: NavItemType[];
  navItemsAfter: NavItemType[];
}

export const MobileNav: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPath,
  navItemsBefore,
  navItemsAfter,
}) => {
  return (
    <S.MobileNavOverlay $isOpen={isOpen} onClick={onClose}>
      <S.MobileNavSidebar $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <S.MobileNavList>
          {navItemsBefore.map((item) => (
            <S.MobileNavItem key={item.to}>
              <S.MobileNavLink
                as={Link}
                to={item.to}
                onClick={onClose}
                $isActive={
                  item.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(item.to)
                }
              >
                {item.label}
              </S.MobileNavLink>
            </S.MobileNavItem>
          ))}

          <S.MobileNavItem>
            <S.MobileNavLink
              as={Link}
              to="/guides"
              onClick={onClose}
              $isActive={currentPath === "/guides"}
            >
              Tips & Guides
            </S.MobileNavLink>
          </S.MobileNavItem>
          <S.MobileNavItem>
            <S.MobileNavLink
              as={Link}
              to="/academy"
              onClick={onClose}
              $isActive={currentPath === "/academy"}
            >
              Academy
            </S.MobileNavLink>
          </S.MobileNavItem>
          <S.MobileNavItem>
            <S.MobileNavLink
              as={Link}
              to="/categories"
              onClick={onClose}
              $isActive={currentPath === "/categories"}
            >
              Scent Categories
            </S.MobileNavLink>
          </S.MobileNavItem>
          <S.MobileNavItem>
            <S.MobileNavLink
              as={Link}
              to="/occasions"
              onClick={onClose}
              $isActive={currentPath === "/occasions"}
            >
              Occasions
            </S.MobileNavLink>
          </S.MobileNavItem>

          {navItemsAfter.map((item) => (
            <S.MobileNavItem key={item.to}>
              {item.isExternal ? (
                <S.MobileNavLink
                  as="a"
                  href={item.to}
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    window.location.href = item.to;
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </S.MobileNavLink>
              ) : (
                <S.MobileNavLink
                  as={Link}
                  to={item.to}
                  onClick={onClose}
                  $isActive={currentPath.startsWith(item.to)}
                >
                  {item.label}
                </S.MobileNavLink>
              )}
            </S.MobileNavItem>
          ))}
        </S.MobileNavList>
      </S.MobileNavSidebar>
    </S.MobileNavOverlay>
  );
};
