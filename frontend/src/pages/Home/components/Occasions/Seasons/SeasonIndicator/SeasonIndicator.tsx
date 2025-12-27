import * as S from "./SeasonIndicator.styled";
import SpringIcon from "/assets/images/Occasions/Seasons/spring-icon.webp";
import AutumnIcon from "/assets/images/Occasions/Seasons/fall-icon.webp";
import WinterIcon from "/assets/images/Occasions/Seasons/winter-icon.webp";
import SummerIcon from "/assets/images/Occasions/Seasons/summer-icon.webp";
import CrossIcon from "/assets/images/Occasions/Seasons/cross.webp";

interface SeasonIndicatorProps {
  activeSeason: "Winter" | "Autumn" | "Summer" | "Spring";
}

const SeasonIndicator: React.FC<SeasonIndicatorProps> = ({ activeSeason }) => {
  return (
    <S.IndicatorContainer aria-hidden="true">
      <S.CrossDivider src={CrossIcon} alt="" width="120" height="120" />

      <S.WinterIcon
        src={WinterIcon}
        alt="Winter"
        $isActive={activeSeason === "Winter"}
        width="50"
        height="50"
      />

      <S.AutumnIcon
        src={AutumnIcon}
        alt="Autumn"
        $isActive={activeSeason === "Autumn"}
        width="50"
        height="50"
      />

      <S.SummerIcon
        src={SummerIcon}
        alt="Summer"
        $isActive={activeSeason === "Summer"}
        width="50"
        height="50"
      />

      <S.SpringIcon
        src={SpringIcon}
        alt="Spring"
        $isActive={activeSeason === "Spring"}
        width="50"
        height="50"
      />
    </S.IndicatorContainer>
  );
};

export default SeasonIndicator;
