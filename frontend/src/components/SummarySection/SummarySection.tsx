import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Tooltip from "../Tooltip/Tooltip";
import { useTypewriter } from "../../hooks/useTypewriter";
import {
  Disclaimer,
  GenerateSummaryButton,
  LoadingContainer,
  LoadingText,
  RadioGroup,
  RadioInput,
  RadioLabel,
  ReviewCountSelector,
  SectionContainer,
  SelectorTitle,
  SummaryButtonWrapper,
  SummaryText,
  SummaryTitle,
  TitleContainer,
} from "./SummarySection.styled";
import { useFragranceReviews } from "../../hooks/useFragranceReviews";
import { useState } from "react";

interface SummarySectionProps {
  fragranticaUrl: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ fragranticaUrl }) => {
  const [numberOfReviews, setNumberOfReviews] = useState(10);

  const { isReviewsLoading, reviewsSummary, handleSummarizeReviews } =
    useFragranceReviews(numberOfReviews);

  const handleSummarizeReviewsWithUrl = () => {
    handleSummarizeReviews(fragranticaUrl);
  };

  const { displayedText, isTyping } = useTypewriter(reviewsSummary || "", 15);

  const getButtonText = () => {
    if (isReviewsLoading) return "Analyzing Reviews...";
    if (reviewsSummary) return "Analysis Complete";
    return "Summarize Fragrantica Reviews";
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfReviews(parseInt(event.target.value, 10));
    console.log(event.target.value);
  };

  return (
    <>
      <SectionContainer>
        <TitleContainer>
          <SummaryTitle>Community Reviews - AI Analysis</SummaryTitle>
          <Tooltip
            textContent={`We analyze the ${numberOfReviews} most recent reviews to identify common themes and sentiments. This may take a few seconds.`}
            position="right"
          />
        </TitleContainer>

        <Disclaimer role="note">
          Note: Fragrance preferences are highly personal. For the most accurate
          impression, we recommend testing the scent yourself.
        </Disclaimer>

        <SelectorTitle>Number of reviews to analyze:</SelectorTitle>
        <ReviewCountSelector>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="10"
                checked={numberOfReviews === 10}
                onChange={handleChange}
              />
              10 Reviews
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="25"
                checked={numberOfReviews === 25}
                onChange={handleChange}
              />
              25 Reviews
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="50"
                checked={numberOfReviews === 50}
                onChange={handleChange}
              />
              50 Reviews
            </RadioLabel>
          </RadioGroup>
        </ReviewCountSelector>

        <SummaryButtonWrapper>
          <GenerateSummaryButton
            onClick={handleSummarizeReviewsWithUrl}
            disabled={isReviewsLoading || reviewsSummary !== null}
          >
            {getButtonText()}
          </GenerateSummaryButton>
        </SummaryButtonWrapper>

        {isReviewsLoading && (
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>
              Gathering the {numberOfReviews} most recent reviews...
            </LoadingText>
          </LoadingContainer>
        )}

        {reviewsSummary && (
          <SummaryText $isTyping={isTyping}>{displayedText}</SummaryText>
        )}
      </SectionContainer>
    </>
  );
};

export default SummarySection;
