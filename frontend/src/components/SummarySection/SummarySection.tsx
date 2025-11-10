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
import { useEffect, useState } from "react";

interface SummarySectionProps {
  fragranticaUrl: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ fragranticaUrl }) => {
  const [numberOfReviews, setNumberOfReviews] = useState(10);
  const [currentSummary, setCurrentSummary] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pendingReviewCount, setPendingReviewCount] = useState<number | null>(
    null
  );

  const reviewsToUseForApi = pendingReviewCount || numberOfReviews;

  const { isReviewsLoading, reviewsSummary, handleSummarizeReviews } =
    useFragranceReviews(reviewsToUseForApi);

  useEffect(() => {
    if (reviewsSummary) {
      setCurrentSummary(reviewsSummary);
      setIsGenerating(false);

      if (pendingReviewCount) {
        setNumberOfReviews(pendingReviewCount);
        setPendingReviewCount(null);
      }
    }
  }, [reviewsSummary, pendingReviewCount]);

  const handleSummarizeReviewsWithUrl = () => {
    setIsGenerating(true);
    setCurrentSummary(null);
    handleSummarizeReviews(fragranticaUrl);
  };

  const { displayedText, isTyping } = useTypewriter(reviewsSummary || "", 15);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNumberOfReviews = parseInt(event.target.value, 10);
    setPendingReviewCount(newNumberOfReviews);
  };

  const getButtonText = () => {
    if (isReviewsLoading || isGenerating) return "Analyzing Reviews...";
    if (currentSummary && isTyping) return "Summary Typing...";
    if (currentSummary) return "Generate New Summary";
    return "Summarize Fragrantica Reviews";
  };

  const isButtonDisabled = isReviewsLoading || isGenerating || isTyping;
  const areRadiosDisabled = isReviewsLoading || isGenerating || isTyping;

  const displayReviewCount = pendingReviewCount || numberOfReviews;

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
            <RadioLabel $disabled={areRadiosDisabled}>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="10"
                checked={displayReviewCount === 10}
                onChange={handleChange}
                disabled={areRadiosDisabled}
              />
              10 Reviews
            </RadioLabel>
            <RadioLabel $disabled={areRadiosDisabled}>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="25"
                checked={displayReviewCount === 25}
                onChange={handleChange}
                disabled={areRadiosDisabled}
              />
              25 Reviews
            </RadioLabel>
            <RadioLabel $disabled={areRadiosDisabled}>
              <RadioInput
                type="radio"
                name="reviewCount"
                value="50"
                checked={displayReviewCount === 50}
                onChange={handleChange}
                disabled={areRadiosDisabled}
              />
              50 Reviews
            </RadioLabel>
          </RadioGroup>
        </ReviewCountSelector>

        <SummaryButtonWrapper>
          <GenerateSummaryButton
            onClick={handleSummarizeReviewsWithUrl}
            disabled={isButtonDisabled}
          >
            {getButtonText()}
          </GenerateSummaryButton>
        </SummaryButtonWrapper>

        {(isReviewsLoading || isGenerating) && (
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>
              Gathering the {displayReviewCount} most recent reviews...
            </LoadingText>
          </LoadingContainer>
        )}

        {currentSummary && (
          <SummaryText $isTyping={isTyping}>{displayedText}</SummaryText>
        )}
      </SectionContainer>
    </>
  );
};

export default SummarySection;
