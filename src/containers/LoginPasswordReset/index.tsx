import { PASSWORD_RESET } from "api";
import ErrorMessage from "components/ErrorMessage";
import Button from "components/Form/Button";
import InputField from "components/Form/Input";
import Head from "components/Head";
import { Title } from "components/Title";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm("password");
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response?.ok) navigate("/login");
    }
  }

  return (
    <div>
      <Head title="Resete a senha" />
      <Title>Reseta a senha</Title>
      <form onSubmit={handleSubmit}>
        <InputField label="Nova senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <ErrorMessage error={error} />
    </div>
  );
}

export default LoginPasswordReset;
