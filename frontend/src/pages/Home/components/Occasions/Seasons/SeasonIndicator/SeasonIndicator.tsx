import * as S from "./SeasonIndicator.styled";
import SpringIcon from "/assets/images/Occasions/Seasons/spring-icon.png";
import AutumnIcon from "/assets/images/Occasions/Seasons/fall-icon.png";
import WinterIcon from "/assets/images/Occasions/Seasons/winter-icon.png";
import SummerIcon from "/assets/images/Occasions/Seasons/summer-icon.png";
import CrossIcon from "/assets/images/Occasions/Seasons/cross.png";

interface SeasonIndicatorProps {
  activeSeason: "Winter" | "Autumn" | "Summer" | "Spring";
}

const SeasonIndicator: React.FC<SeasonIndicatorProps> = ({ activeSeason }) => {
  return (
    <S.IndicatorContainer>
      <S.CrossDivider src={CrossIcon} alt="divider" />

      <S.WinterIcon
        src={WinterIcon}
        alt="Winter"
        $isActive={activeSeason === "Winter"}
      />

      <S.AutumnIcon
        src={AutumnIcon}
        alt="Autumn"
        $isActive={activeSeason === "Autumn"}
      />

      <S.SummerIcon
        src={SummerIcon}
        alt="Summer"
        $isActive={activeSeason === "Summer"}
      />

      <S.SpringIcon
        src={SpringIcon}
        alt="Spring"
        $isActive={activeSeason === "Spring"}
      />
    </S.IndicatorContainer>
  );
};

export default SeasonIndicator;
