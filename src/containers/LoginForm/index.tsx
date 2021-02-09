import Button from "components/Form/Button";
import Input from "components/Form/Input";
import useForm from "hooks/useForm";
import { useContext } from "react";
import { UserContext } from "state/UserContext";

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
    <form onSubmit={handleSubmit}>
      <Input label="Usuário" name="username" {...username} />
      <Input type="password" label="Senha" name="password" {...password} />

      {context?.loading ? (
        <Button disabled>Carregando...</Button>
      ) : (
        <Button>Entrar</Button>
      )}

      {context?.error && context.error}
    </form>
  );
}

export default LoginForm;
