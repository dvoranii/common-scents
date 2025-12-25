import React from "react";
import * as S from "./SeasonDonutWheel.styled";

interface SeasonDonutWheelProps {
  rotation: number;
  activeIndex: number;
  winterImg?: string;
  springImg?: string;
  summerImg?: string;
  autumnImg?: string;
}

const SeasonDonutWheel: React.FC<SeasonDonutWheelProps> = ({
  rotation,
  activeIndex,
  winterImg = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  springImg = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  summerImg = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  autumnImg = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
}) => {
  const seasonOrder = ["winter", "autumn", "summer", "spring"];
  const activeSegment = seasonOrder[((activeIndex % 4) + 4) % 4];

  const getBg = (img?: string, fallback?: string) =>
    img && !img.includes("gradient") ? `url(${img})` : img || fallback;

  const backgrounds = {
    winter: getBg(winterImg),
    spring: getBg(springImg),
    summer: getBg(summerImg),
    autumn: getBg(autumnImg),
  };

  return (
    <S.DonutContainer $rotation={rotation} aria-hidden="true">
      <S.DonutSegment $rotation={0} $isActive={activeSegment === "winter"}>
        <S.SegmentBackground
          $background={backgrounds.winter!}
          $segmentRotation={0}
        />
      </S.DonutSegment>

      <S.DonutSegment $rotation={90} $isActive={activeSegment === "spring"}>
        <S.SegmentBackground
          $background={backgrounds.spring!}
          $segmentRotation={0}
        />
      </S.DonutSegment>

      <S.DonutSegment $rotation={180} $isActive={activeSegment === "summer"}>
        <S.SegmentBackground
          $background={backgrounds.summer!}
          $segmentRotation={0}
        />
      </S.DonutSegment>

      <S.DonutSegment $rotation={270} $isActive={activeSegment === "autumn"}>
        <S.SegmentBackground
          $background={backgrounds.autumn!}
          $segmentRotation={0}
        />
      </S.DonutSegment>
    </S.DonutContainer>
  );
};

export default SeasonDonutWheel;
