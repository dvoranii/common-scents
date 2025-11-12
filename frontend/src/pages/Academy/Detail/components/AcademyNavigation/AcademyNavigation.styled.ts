import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const NavSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  &:first-child {
    align-items: flex-start;
  }

  &:last-child {
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    align-items: center !important;
    width: 100%;
  }
`;

export const NavButtonWrapper = styled.div<{ $alignItems: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignItems};
  gap: 0.5rem;
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: #f8f9fa;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: #e9ecef;
    border-color: #007bff;
    transform: translateY(-1px);
  }

  ${(props) =>
    props.$position === "right" &&
    `
    flex-direction: row-reverse;
  `}
`;

export const NavTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
`;

export const GuideTitle = styled.span<{ $textAlign: string }>`
  font-size: 0.875rem;
  color: #333;
  text-align: ${(props) => props.$textAlign};
  max-width: 200px;
  line-height: 1.3;
  font-weight: 500;
  padding-top: 12px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`;
