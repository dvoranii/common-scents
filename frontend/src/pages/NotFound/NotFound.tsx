import * as S from "./NotFound.styled";

function NotFound() {
  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.Message>Oops! The scent trail has gone cold.</S.Message>
      <S.HomeLink to="/">Return Home</S.HomeLink>
    </S.Container>
  );
}

export default NotFound;
