import Button from "components/Form/Button";
import Input from "components/Form/Input";
import * as S from "./styles";
import { AnimeLeft } from "styles";
import useForm from "hooks/useForm";
import { useContext } from "react";
import { UserContext } from "state/UserContext";
import ErrorMessage from "components/ErrorMessage";
import { Link } from "react-router-dom";
import { Title } from "components/Title";
import { Subtitle } from "components/Subtitle";
function LoginForm() {
  const username = useForm();
  const password = useForm();
  const context = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      context?.userLogin(username.value, password.value);
    }
  }

  return (
    <AnimeLeft>
      <S.Section>
        <Title>Login</Title>
        <S.Form onSubmit={handleSubmit}>
          <Input label="Usuário" name="username" {...username} />
          <Input type="password" label="Senha" name="password" {...password} />

          {context?.loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}

          {context?.error && <ErrorMessage error={context.error} />}
        </S.Form>
        <S.LostPasswordLink>
          <Link to="/login/perdeu">Perdeu a Senha?</Link>
        </S.LostPasswordLink>
        <S.RegisterWrapper>
          <Subtitle>Cadastre-se</Subtitle>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to="/login/criar">
            <Button>Cadastro</Button>
          </Link>
        </S.RegisterWrapper>
      </S.Section>
    </AnimeLeft>
  );
}

export default LoginForm;
