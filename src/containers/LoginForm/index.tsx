import Button from "components/Form/Button";
import Input from "components/Form/Input";

function LoginForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Usuário" name="username" />
      <Input type="password" label="Senha" name="password" />
      <Button>Entrar</Button>
    </form>
  );
}

export default LoginForm;
