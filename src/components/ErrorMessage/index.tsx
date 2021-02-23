import * as S from "./styles";
function ErrorMessage({ error }: { error: string | null }) {
  if (!error) return null;

  return <S.Error>{error}</S.Error>;
}

export default ErrorMessage;
