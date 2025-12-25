import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #faf9f7;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

export const Content = styled.article`
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const Header = styled.header`
  margin-bottom: 48px;
  border-bottom: 2px solid #f0ede8;
  padding-bottom: 32px;
`;

export const Category = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #e07a3f;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  line-height: 1.3;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #6c757d;
`;

export const Date = styled.span`
  font-weight: 500;
`;

export const Separator = styled.span`
  color: #d1d1d1;
`;

export const Time = styled.span``;

export const Article = styled.div`
  color: #333;
  font-size: 17px;
  line-height: 1.8;
`;

export const Section = styled.section`
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
  padding-top: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  margin: 0 0 20px 0;
  color: #4a4a4a;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  margin: 20px 0;
  padding-left: 24px;
`;

export const ListItem = styled.li`
  margin-bottom: 12px;
  color: #4a4a4a;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #e07a3f; /* The orange again */
`;

export const Intro = styled.div`
  font-size: 19px;
  color: #555;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid #f0ede8;
  line-height: 1.7;
`;
