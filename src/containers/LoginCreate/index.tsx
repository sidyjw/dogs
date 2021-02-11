import { USER_POST } from "api";
import Button from "components/Form/Button";
import InputField from "components/Form/Input";
import { Title } from "components/Title";
import useForm from "hooks/useForm";
import React, { FormEvent, useContext } from "react";
import { UserContext } from "state/UserContext";
import { AnimeLeft } from "styles";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();
  const context = useContext(UserContext);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      if (response.ok) context?.userLogin(username.value, password.value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AnimeLeft>
      <section>
        <Title>Cadastre-se</Title>
        <form onSubmit={handleSubmit}>
          <InputField label="Usuário" name="username" {...username} />
          <InputField type="email" label="Email" name="email" {...email} />
          <InputField
            type="password"
            label="Senha"
            name="password"
            {...password}
          />
          <Button>Cadastrar</Button>
        </form>
      </section>
    </AnimeLeft>
  );
}

export default LoginCreate;
