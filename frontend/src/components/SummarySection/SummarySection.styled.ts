import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 0.25rem 0;
  height: 20px;
`;

export const SummaryTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: sans-serif;
`;

export const SummaryText = styled.div<{ $isTyping?: boolean }>`
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  border-left: 3px solid #2196f3;
  font-family: sans-serif;
  line-height: 1.6;
  white-space: pre-line;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  min-height: 100px;
`;

export const InfoMessage = styled.p`
  display: flex;
  gap: 4px;
`;
export const InfoSymbol = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  background: #2196f3;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
`;

export const SummaryButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GenerateSummaryButton = styled.button<{ disabled?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;

  &:hover {
    background-color: #0b7dda;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

export const LoadingText = styled.p`
  color: black;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
`;

export const Disclaimer = styled.small`
  color: grey;
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 4px 0 12px 0;
  font-style: italic;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ReviewCountSelector = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 0.5rem 0 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const RadioLabel = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  font-family: sans-serif;
  font-size: 0.9rem;
  color: ${(props) => (props.$disabled ? "#999" : "#333")};
  transition: color 0.2s ease;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};

  &:hover {
    color: ${(props) => (props.$disabled ? "#999" : "#2196f3")};
  }
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    border-color: #2196f3;
    background-color: #2196f3;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
    }
  }

  &:hover:not(:disabled) {
    border-color: #2196f3;
  }

  &:focus:not(:disabled) {
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    border-color: #ddd;

    &:checked {
      background-color: #ccc;
      border-color: #ccc;
    }
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 456px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SelectorTitle = styled.p`
  margin-top: ${(props) => props.theme.spacing.sm};
  font-family: sans-serif;
  font-weight: 600;
  color: #333;
`;
