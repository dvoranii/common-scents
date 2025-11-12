import React from "react";
import * as S from "./TipsTemplate.styled";

export interface TipsTemplateProps {
  title: string;
  date: string;
  time: string;
  category: string;
  children: React.ReactNode;
}

const TipsTemplate: React.FC<TipsTemplateProps> = ({
  title,
  date,
  time,
  category,
  children,
}) => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
          <S.Meta>
            <S.Date>{date}</S.Date>
            <S.Separator>•</S.Separator>
            <S.Time>{time} (Eastern Standard Time)</S.Time>
          </S.Meta>
        </S.Header>

        <S.Article>{children}</S.Article>
      </S.Content>
    </S.Container>
  );
};

export default TipsTemplate;
