import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.white};
`;

export const HeroSection = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding: ${(props) =>
    `${props.theme.spacing["4xl"]} ${props.theme.spacing.lg}`};
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.white}
  );
`;

export const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 30vh;
  }
`;

export const TitleContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes["6xl"]};
  font-weight: 700;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes["4xl"]};
  }
`;

export const Tagline = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.15em;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.lg};
  border-bottom: 2px solid #451a03;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.spacing.md};
`;

export const PrimaryButton = styled.button`
  position: relative;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid #e78732;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.xl}`};
  border-radius: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #efad70, #e88e44);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid #c7c6cb;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.xl}`};
  border-radius: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  z-index: 1;

  span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(to bottom, #92400e 4%, #451a03 96%);
    transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: #e88e44;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;

    span {
      width: 225%;
      height: 562.5px;
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.backgroundAlt};
  }
`;

export const Section = styled.section<{ altBg?: boolean }>`
  padding: ${(props) =>
    `${props.theme.spacing["3xl"]} ${props.theme.spacing.lg}`};
  background-color: ${(props) =>
    props.altBg ? props.theme.colors.backgroundAlt : "transparent"};
`;

export const SectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes["5xl"]};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes["3xl"]};
  }
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ReviewCard = styled.div`
  background-color: #fef3c7;
  border-radius: ${(props) => props.theme.spacing.sm};
  overflow: hidden;
  transition: box-shadow 0.3s;
  border: 1px solid grey;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const ReviewImage = styled.div`
  height: 256px;
  /* background: linear-gradient(to bottom right, #e7e5e4, #d6d3d1); */
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottleImage = styled.img`
  height: 100%;
  object-fit: contain;
  /* border-radius: ${(props) => props.theme.spacing.sm}; */
  /* filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)); */
`;

export const ReviewContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`;

export const ReviewTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

export const ReviewDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textLight};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const ReviewLink = styled.button`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: 600;
  background: none;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #b45309;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.md};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const CategoryCard = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.spacing.sm};
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.primaryLight};
`;

export const CategoryName = styled.h3`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

export const GuidesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GuidesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const GuideItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export const GuideTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const GuideMetaTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes["5xl"]};
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes["3xl"]};
  }
`;

export const GuideMeta = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textLight};
`;

export const AuthorSection = styled.div`
  background-color: #e7e5e4;
  border-radius: ${(props) => props.theme.spacing.sm};
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthorContent = styled.div`
  text-align: center;
  color: #78716c;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
`;

export const AuthorImage = styled.div`
  width: 192px;
  height: 192px;
  margin: ${(props) => `0 auto ${props.theme.spacing.md}`};
  background-color: #d6d3d1;
  border-radius: ${(props) => props.theme.spacing.sm};
`;
