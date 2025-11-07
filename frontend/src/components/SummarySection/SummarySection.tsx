import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Tooltip from "../Tooltip/Tooltip";
import { useTypewriter } from "../../hooks/useTypewriter";
import {
  Disclaimer,
  GenerateSummaryButton,
  LoadingContainer,
  LoadingText,
  SectionContainer,
  SummaryText,
  SummaryTitle,
  TitleContainer,
} from "./SummarySection.styled";

interface SummarySectionProps {
  title: string;
  onGenerate: () => Promise<void>;
  isLoading: boolean;
  content: string | null;
}

const SummarySection: React.FC<SummarySectionProps> = ({
  title,
  onGenerate,
  isLoading,
  content,
}) => {
  const { displayedText, isTyping } = useTypewriter(content || "", 15);

  const getButtonText = () => {
    if (isLoading) return "Analyzing Reviews...";
    if (content) return "Analysis Complete";
    return "Summarize Fragrantica Reviews";
  };

  return (
    <SectionContainer>
      <TitleContainer>
        <SummaryTitle>{title}</SummaryTitle>
        <Tooltip
          content="We analyze the 10 most recent reviews to identify common themes and sentiments. This may take a few seconds."
          position="right"
        />
      </TitleContainer>

      <Disclaimer role="note">
        Note: Fragrance preferences are highly personal. For the most accurate
        impression, we recommend testing the scent yourself.
      </Disclaimer>

      <GenerateSummaryButton
        onClick={() => onGenerate()}
        disabled={isLoading || content !== null}
      >
        {getButtonText()}
      </GenerateSummaryButton>

      {isLoading && (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Gathering the 10 most recent reviews...</LoadingText>
        </LoadingContainer>
      )}

      {content && (
        <SummaryText $isTyping={isTyping}>{displayedText}</SummaryText>
      )}
    </SectionContainer>
  );
};

export default SummarySection;
