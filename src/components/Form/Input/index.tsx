import * as S from "./styles";

interface Input {
  label: string;
  type?: string | undefined | null;
  name: string;
}

function InputField({ label, type, name }: Input) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputField id={name} type={type ?? "text"} name={name} />
      <S.ErrorText>Erro</S.ErrorText>
    </S.Wrapper>
  );
}

export default InputField;
