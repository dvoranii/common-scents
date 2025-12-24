import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 40px 32px;
  max-width: 480px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 32px 24px;
    max-width: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: #666;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const ModalIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  font-family: ${(props) => props.theme.fonts.heading1};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const ModalDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 24px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #c9a876;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubscribeButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  background: #c9a876;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #b89765;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const PrivacyText = styled.p`
  font-size: 12px;
  color: #999;
  margin: 16px 0 0 0;
  line-height: 1.4;
`;

export const MessageBox = styled.div<{ $type: "success" | "error" }>`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  background-color: ${(props) =>
    props.$type === "success" ? "#d4edda" : "#f8d7da"};
  color: ${(props) => (props.$type === "success" ? "#155724" : "#721c24")};
  border: 1px solid
    ${(props) => (props.$type === "success" ? "#c3e6cb" : "#f5c6cb")};
`;
