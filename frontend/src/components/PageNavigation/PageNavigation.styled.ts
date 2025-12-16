import styled from "styled-components";

export const NavigationContainer = styled.div<{
  $stackMobile?: boolean;
  $center?: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.$center ? "center" : "space-between")};
  align-items: flex-start;
  margin-top: 4rem;
  padding: 2rem 2rem 0 2rem;
  border-top: 1px solid #e5e5e5;
  gap: 1rem;

  @media (max-width: 768px) {
    /* Only stack if $stackMobile is true (defaulting to true for safety) */
    ${(props) =>
      props.$stackMobile !== false &&
      `
      flex-direction: column;
      align-items: stretch;
      gap: 2rem;
    `}

    /* If we ARE NOT stacking, we might want to reduce padding/gap 
       so buttons don't feel squashed on tiny screens */
    ${(props) =>
      props.$stackMobile === false &&
      `
      padding: 2rem 1rem 0 1rem;
      gap: 0.5rem;
    `}
  }
`;

export const NavSection = styled.div<{ $type?: "left" | "right" }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.$type === "right" ? "flex-end" : "flex-start"};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const NavButtonWrapper = styled.div<{
  $alignItems: string;
  $center?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$center ? "center" : props.$alignItems)};
  gap: 0.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: #f8f9fa;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: #333;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 110px;
  justify-content: center;

  flex-direction: ${(props) =>
    props.$position === "right" ? "row-reverse" : "row"};

  &:hover {
    background: #e9ecef;
    border-color: #007bff;
    transform: translateY(-1px);
  }
`;

export const NavTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const GuideTitle = styled.span<{ $textAlign: "left" | "right" }>`
  font-size: 0.9rem;
  color: #333;
  text-align: ${(props) => props.$textAlign};
  max-width: 220px;
  line-height: 1.4;
  font-weight: 500;
  padding-top: 8px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.85rem;
  }
`;
