import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UseKeyboardNavigationProps {
  prevPath: string | null;
  nextPath: string | null;
  enabled?: boolean;
}

export const useKeyboardNavigation = ({
  prevPath,
  nextPath,
  enabled = true,
}: UseKeyboardNavigationProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft" && prevPath) {
        navigate(prevPath);
      } else if (e.key === "ArrowRight" && nextPath) {
        navigate(nextPath);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevPath, nextPath, enabled, navigate]);
};
