// FragranceReviews.styled.ts
import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl};
`;

export const TopControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.md};
  margin: ${(props) => props.theme.spacing.xl} 0
    ${(props) => props.theme.spacing.xl} 0;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchBar = styled.input`
  width: 256px;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-right: none;
  border-radius: 4px 0 0 4px;
  font-size: ${(props) => props.theme.fontSizes.sm};

  &:focus {
    outline: none;
    border-color: #fb923d;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchBarButton = styled.button`
  width: 40px;
  height: 40px;
  background: #f97316;
  border: none;
  border-radius: 0 4px 4px 0;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: #ea580c;
  }

  &:focus {
    outline: none;
  }
`;

export const FilterDropdownWrapper = styled.div`
  position: relative;
`;

export const FilterDropdownButton = styled.button<{ $isOpen: boolean }>`
  padding: 8px 16px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  &:focus {
    outline: none;
  }
`;

export const FilterDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  top: 48px;
  width: 320px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  max-height: 384px;
  overflow-y: auto;
`;

export const FilterModeSection = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

export const FilterModeLabel = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #4b5563;
  margin-bottom: 8px;
`;

export const FilterModeButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModeButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.$isActive
      ? `
    background: #3b82f6;
    color: white;
  `
      : `
    background: #f3f4f6;
    color: #374151;
    
    &:hover {
      background: #e5e7eb;
    }
  `}

  &:focus {
    outline: none;
  }
`;

export const TagSection = styled.div<{ $hasBorder?: boolean }>`
  padding: 16px;
  ${(props) => props.$hasBorder && "border-bottom: 1px solid #e5e7eb;"}
`;

export const TagSectionTitle = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.button<{
  $color: string;
  $isSelected: boolean;
  $isSmall?: boolean;
}>`
  display: inline-block;
  padding: ${(props) => (props.$isSmall ? "4px 12px" : "6px 12px")};
  border-radius: 16px;
  font-size: ${(props) =>
    props.$isSmall ? props.theme.fontSizes.xs : "0.8rem"};
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s;
  border: 2px solid;

  ${(props) =>
    props.$isSelected
      ? `
      background-color: ${props.$color};
      color: white;
      border-color: ${props.$color};
      
      &:hover {
        opacity: 0.8;
      }
    `
      : `
      background-color: white;
      color: ${props.$color};
      border-color: ${props.$color};
      
      &:hover {
        opacity: 0.7;
      }
    `}

  &:focus {
    outline: none;
  }
`;

export const RemoveTagButton = styled.button<{ $isSmall?: boolean }>`
  margin-left: 6px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: ${(props) => (props.$isSmall ? "0.9rem" : "1rem")};
  line-height: 1;
  padding: 0px 0px 0px 4px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

export const ActiveFiltersSummary = styled.div`
  margin-bottom: 16px;
  padding: 12px;
  background: #f9fafb;
  border-radius: 4px;
`;

export const FilterSummaryText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #4b5563;
  display: block;
  margin-bottom: 8px;
`;

export const ContentPlaceholder = styled.div`
  text-align: center;
  color: #6b7280;
  padding: 48px;
  border: 2px dashed #d1d5db;
  border-radius: 4px;
`;

export const TagSectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClearButton = styled.button`
  padding: 4px 12px;
  background: transparent;
  border: 1px solid #ef4444;
  color: #ef4444;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ef4444;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
