import React, { useState, useEffect } from "react";
import * as S from "./KeyboardNavTooltip.styled";
import { Keyboard, X } from "lucide-react";

interface KeyboardNavTooltipProps {
  section: string;
  autoHideDuration?: number;
}

const KeyboardNavTooltip: React.FC<KeyboardNavTooltipProps> = ({
  section,
  autoHideDuration = 8000,
}) => {
  const [show, setShow] = useState(false);
  const storageKey = `keyboard-nav-${section}-seen`;

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem(storageKey);

    if (!hasSeenTooltip) {
      const showTimer = setTimeout(() => {
        setShow(true);
      }, 500);

      const hideTimer = setTimeout(() => {
        setShow(false);
      }, autoHideDuration + 500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [storageKey, autoHideDuration]);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem(storageKey, "true");
  };

  return (
    <S.TooltipContainer $show={show}>
      <S.IconWrapper>
        <Keyboard size={20} />
      </S.IconWrapper>
      <S.Content>
        <S.Title>Keyboard Navigation</S.Title>
        <S.Keys>
          Use <S.Key>←</S.Key> <S.Key>→</S.Key> to navigate pages
        </S.Keys>
      </S.Content>
      <S.DismissButton onClick={handleDismiss} aria-label="Dismiss">
        <X size={18} />
      </S.DismissButton>
    </S.TooltipContainer>
  );
};

export default KeyboardNavTooltip;
