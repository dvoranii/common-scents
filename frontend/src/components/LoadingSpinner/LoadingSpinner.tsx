import React from "react";
import * as S from "./LoadingSpinner.styled";

const LoadingSpinner: React.FC = () => {
  return (
    <S.Container>
      <S.Spinner />
    </S.Container>
  );
};

export default LoadingSpinner;
