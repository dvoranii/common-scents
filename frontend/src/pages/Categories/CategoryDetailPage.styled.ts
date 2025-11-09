import styled from "styled-components";

// Your original components
export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  padding-bottom: ${(props) => props.theme.spacing.xxl};
`;

interface CategoryHeaderProps {
  $bgColor: string;
}

export const CategoryHeader = styled.div<CategoryHeaderProps>`
  background: ${(props) => props.$bgColor};
  padding: ${(props) => props.theme.spacing.xxxl};
  ${(props) => props.theme.spacing.xl};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  margin-bottom: ${(props) => props.theme.spacing.xxxl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 400px;
  }
`;

interface CategoryIconProps {
  $color?: string;
}

export const CategoryIcon = styled.div<CategoryIconProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.$color || "darkbrown"};
`;

export const CategoryName = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const CategoryDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  text-align: center;
  max-width: 600px;
  margin: ${(props) => props.theme.spacing.xxl} auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

export const SectionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading2};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const FragranceListPlaceholder = styled.section`
  margin-top: ${(props) => props.theme.spacing.xxxl};
  padding: ${(props) => props.theme.spacing.xxl};
  border-radius: ${(props) => props.theme.spacing.md};
  min-height: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

// NEW COMPONENTS I ADDED
export const CategorySubtitle = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 400;
  margin-top: ${(props) => props.theme.spacing.md};
  margin-bottom: 0;
`;

export const ImgAndDescriptionWrapper = styled.div`
  padding: 0 40px;
  display: flex;
  gap: 2.4rem;
  max-width: 1600px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const CategoryImg = styled.img`
  object-fit: contain;
  aspect-ratio: 6/4;

  @media screen and (max-width: 900px) {
    min-width: auto;
  }
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.8;
  margin: 0 auto ${(props) => props.theme.spacing.xxl};
`;

export const NoteProfilesSection = styled.section`
  max-width: 1600px;
  padding: 0 40px;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.xxl};
`;

export const NoteProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  padding: 0 80px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const NoteProfileCard = styled.div`
  border-radius: ${(props) => props.theme.spacing.md};
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: white;
`;

export const NoteProfileTitle = styled.h4`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-align: center;
`;

export const NoteProfileDescription = styled.p`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const ExampleNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.spacing.md};

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const ExampleImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  background: #eee;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CharactersticsAndBestForSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  max-width: 1600px;
  width: 90%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CharacteristicsSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
  border-right: 1px solid grey;
`;

export const BestForSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxxl} 0;
  flex: 1;
`;

export const CharacteristicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const CharacteristicChip = styled.span<{ $bgColour?: string }>`
  background: ${(props) => (props.$bgColour ? props.$bgColour : "#332421")};
  color: white;
  padding: ${(props) => props.theme.spacing.sm};
  ${(props) => props.theme.spacing.lg};
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
`;

export const CategoryNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem;
  border-top: 1px solid #e0e0e0;
`;

export const NavButtonWrapper = styled.div`
  flex: 1;
  display: flex;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const NavButton = styled.button<{ $position: "left" | "right" }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: #e99047;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #efac6f;
    color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
