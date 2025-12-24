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
  const getActiveSegment = () => {
    switch (activeIndex % 4) {
      case 0:
        return "winter";
      case 1:
        return "autumn";
      case 2:
        return "summer";
      case 3:
        return "spring";
      default:
        return "winter";
    }
  };

  const activeSegment = getActiveSegment();

  const winterBackground = winterImg
    ? `url(${winterImg})`
    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  const springBackground = springImg
    ? `url(${springImg})`
    : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
  const summerBackground = summerImg
    ? `url(${summerImg})`
    : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
  const autumnBackground = autumnImg
    ? `url(${autumnImg})`
    : "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
  return (
    <S.DonutContainer $rotation={rotation}>
      <S.DonutSegment
        $rotation={0}
        $background={winterBackground}
        $isActive={activeSegment === "winter"}
      >
        <S.SegmentBackground
          $background={winterBackground}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </S.DonutSegment>

      <S.DonutSegment
        $rotation={90}
        $background={springBackground}
        $isActive={activeSegment === "spring"}
      >
        <S.SegmentBackground
          $background={springBackground}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </S.DonutSegment>

      <S.DonutSegment
        $rotation={180}
        $background={summerBackground}
        $isActive={activeSegment === "summer"}
      >
        <S.SegmentBackground
          $background={summerBackground}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </S.DonutSegment>

      <S.DonutSegment
        $rotation={270}
        $background={autumnBackground}
        $isActive={activeSegment === "autumn"}
      >
        <S.SegmentBackground
          $background={autumnBackground}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </S.DonutSegment>

      <S.InnerCircle />
    </S.DonutContainer>
  );
};

export default SeasonDonutWheel;
