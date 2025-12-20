import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 9.6rem 2rem 2rem 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading1};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4.8rem;
  text-align: center;
`;

export const LastUpdated = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2.4rem;
  font-style: italic;
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading1};
  font-size: 1.8rem;
  color: rgb(38, 50, 70);
  margin-bottom: 1rem;

  position: relative;
  width: fit-content;

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
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;

export const Strong = styled.strong`
  font-weight: 600;
`;

export const Subsection = styled.section`
  padding-inline-start: 20px;
`;
