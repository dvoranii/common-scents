import React from "react";
import {
  DonutContainer,
  DonutSegment,
  SegmentBackground,
  InnerCircle,
} from "./SeasonDonutWheel.styled";

interface SeasonDonutWheelProps {
  rotation: number;
  activeIndex: number;
  winterBg?: string;
  springBg?: string;
  summerBg?: string;
  autumnBg?: string;
}

const SeasonDonutWheel: React.FC<SeasonDonutWheelProps> = ({
  rotation,
  activeIndex,
  winterBg = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  springBg = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  summerBg = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  autumnBg = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
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
  return (
    <DonutContainer $rotation={rotation}>
      <DonutSegment
        $rotation={0}
        $background={winterBg}
        $isActive={activeSegment === "winter"}
      >
        <SegmentBackground
          $background={winterBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      <DonutSegment
        $rotation={90}
        $background={springBg}
        $isActive={activeSegment === "spring"}
      >
        <SegmentBackground
          $background={springBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      <DonutSegment
        $rotation={180}
        $background={summerBg}
        $isActive={activeSegment === "summer"}
      >
        <SegmentBackground
          $background={summerBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      <DonutSegment
        $rotation={270}
        $background={autumnBg}
        $isActive={activeSegment === "autumn"}
      >
        <SegmentBackground
          $background={autumnBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      <InnerCircle />
    </DonutContainer>
  );
};

export default SeasonDonutWheel;
