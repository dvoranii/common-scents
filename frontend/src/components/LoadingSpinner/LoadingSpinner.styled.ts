import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid rgb(44, 62, 80);
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: ${spin} 1s linear infinite;
`;
