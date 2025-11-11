import styled from "styled-components";
export const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const IntroText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  max-width: 1200px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.text};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const Card = styled.div<{ $bgColor?: string; $padding?: string }>`
  background: ${(props) => props.$bgColor || "#fff"};
  border-radius: 12px;
  padding: ${(props) => (props.$padding ? props.$padding : "40px 30px")};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 270px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const CardIcon = styled.div<{ $color?: string }>`
  color: ${(props) => props.$color || "#000"};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text};
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
`;

export const CardTextWrapper = styled.div<{ $padding?: string }>`
  padding: ${(props) => (props.$padding ? props.$padding : "0px")};
`;
