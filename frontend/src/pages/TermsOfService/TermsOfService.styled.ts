import styled from "styled-components";

export const Container = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 9.6rem 2rem 2rem 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading1};
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

export const LastUpdated = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 4.8rem;
  font-style: italic;
  text-align: center;

  time {
    font-weight: 500;
  }
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;
  scroll-margin-top: 100px;
`;

export const Subsection = styled.div`
  margin-inline-start: 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  padding-left: 20px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading1};
  font-size: 1.8rem;
  color: rgb(38, 50, 70);
  margin-bottom: 1rem;
  position: relative;
  width: fit-content;

  scroll-margin-top: 120px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    background-color: rgb(232, 145, 72);
    height: 2px;
  }
`;

export const SubsectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
`;

export const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  margin-left: 2rem;
  margin-bottom: 1rem;
  line-height: 1.8;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  &::marker {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
    opacity: 1;
  }
`;

export const Strong = styled.strong`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
