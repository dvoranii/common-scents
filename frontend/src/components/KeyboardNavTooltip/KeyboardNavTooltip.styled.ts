import styled from "styled-components";

export const TooltipContainer = styled.div<{ $show: boolean }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  transform: translateY(${(props) => (props.$show ? 0 : "20px")});
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${(props) => (props.$show ? "auto" : "none")};

  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
    left: 16px;
    padding: 12px 16px;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const Keys = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 13px;
  opacity: 0.9;
`;

export const Key = styled.kbd`
  background: rgba(255, 255, 255, 0.15);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const DismissButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 0.7;
  transition: all 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
