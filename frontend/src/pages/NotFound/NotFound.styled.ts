import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-family: ${({ theme }) => theme.fonts.heading1};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const HomeLink = styled(Link)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
