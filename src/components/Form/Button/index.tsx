import * as S from "./styles";

interface Btn {
  children: JSX.Element | string;
  disabled?: boolean;
}

function Button({ children, disabled, ...props }: Btn) {
  return (
    <S.Btn disabled={disabled ?? false} {...props}>
      {children}
    </S.Btn>
  );
}

export default Button;
