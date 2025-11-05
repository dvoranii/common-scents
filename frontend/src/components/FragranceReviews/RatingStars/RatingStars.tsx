import {
  StarsContainer,
  StarContainer,
  StarEmpty,
  StarFill,
} from "./RatingStars.styled";

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <StarsContainer>
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.min(Math.max(rating - i, 0), 1) * 100;
        return (
          <StarContainer key={i}>
            <StarEmpty>☆</StarEmpty>
            <StarFill $fillPercentage={fillPercentage}>★</StarFill>
          </StarContainer>
        );
      })}
    </StarsContainer>
  );
};

export default RatingStars;
