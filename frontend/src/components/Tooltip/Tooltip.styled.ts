import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: #666;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  cursor: help;
  margin-left: 8px;
`;

export const TooltipContent = styled.div<{
  $visible: boolean;
  $position: string;
}>`
  position: absolute;
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
  z-index: 1000;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;

  ${(props) => {
    switch (props.$position) {
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 8px;
        `;
      case "top":
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        `;
      default:
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
        `;
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border: 5px solid transparent;

    ${(props) => {
      switch (props.$position) {
        case "right":
          return `
            right: 100%;
            top: 50%;
            border-right-color: #333;
            transform: translateY(-50%);
          `;
        case "top":
          return `
            top: 100%;
            left: 50%;
            border-top-color: #333;
            transform: translateX(-50%);
          `;
        default:
          return `
            bottom: 100%;
            left: 50%;
            border-bottom-color: #333;
            transform: translateX(-50%);
          `;
      }
    }}
  }
`;
