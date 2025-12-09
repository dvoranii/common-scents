import React from "react";
import {
  DonutContainer,
  DonutSegment,
  SegmentBackground,
  InnerCircle,
} from "./SeasonDonutWheel.styled";

interface SeasonDonutWheelProps {
  rotation: number;
  winterBg?: string;
  springBg?: string;
  summerBg?: string;
  autumnBg?: string;
}

const SeasonDonutWheel: React.FC<SeasonDonutWheelProps> = ({
  rotation,
  winterBg = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  springBg = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  summerBg = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  autumnBg = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
}) => {
  return (
    <DonutContainer $rotation={rotation}>
      {/* Winter - Top Right */}
      <DonutSegment $rotation={0} $background={winterBg}>
        <SegmentBackground
          $background={winterBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      {/* Spring - Bottom Right */}
      <DonutSegment $rotation={90} $background={springBg}>
        <SegmentBackground
          $background={springBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      {/* Summer - Bottom Left */}
      <DonutSegment $rotation={180} $background={summerBg}>
        <SegmentBackground
          $background={summerBg}
          $segmentRotation={0}
          $containerRotation={rotation}
        />
      </DonutSegment>

      {/* Autumn - Top Left */}
      <DonutSegment $rotation={270} $background={autumnBg}>
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
