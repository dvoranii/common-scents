import { useState } from "react";
import * as S from "./NewsletterModal.styled";
import { subscribeToNewsletter } from "../../services/api.service";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const result = await subscribeToNewsletter(email);
      setMessage({ type: "success", text: result.message });
      setEmail("");

      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.ModalIcon>✉️</S.ModalIcon>

        <S.ModalTitle>Stay In The Scent Loop!</S.ModalTitle>

        <S.ModalDescription>
          Join our weekly newsletter for exclusive
          <br />
          updates, reviews, and tips.
        </S.ModalDescription>

        <form onSubmit={handleSubmit} name="newsletter" id="newsletter-form">
          <S.EmailInput
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />

          <S.SubscribeButton type="submit" disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Subscribe Now"}
          </S.SubscribeButton>
        </form>

        {message && (
          <S.MessageBox $type={message.type}>{message.text}</S.MessageBox>
        )}

        <S.PrivacyText>
          Unsubscribe anytime. Your privacy matters to us.
        </S.PrivacyText>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default NewsletterModal;
