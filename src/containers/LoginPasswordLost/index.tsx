import { PASSWORD_LOST } from "api";
import ErrorMessage from "components/ErrorMessage";
import Button from "components/Form/Button";
import InputField from "components/Form/Input";
import Head from "components/Head";
import { Title } from "components/Title";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch<string>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url:
          process.env.REACT_APP_URL + "/login/resetar" ||
          window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha?" />
      <Title>Perdeu a senha?</Title>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email / Usuário"
            type="text"
            name="email"
            {...login}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <ErrorMessage error={error} />
    </section>
  );
}

export default LoginPasswordLost;
