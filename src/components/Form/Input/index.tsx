import Input from "types/components/Input";
import * as S from "./styles";

function InputField({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
}: Input) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputField
        id={name}
        type={type ?? "text"}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}

export default InputField;
