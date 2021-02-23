import { ChangeEvent, useState } from "react";

const types = {
  email: {
    regex: /\S+@\S+\.\S+/,
    message: "Digite um email válido.",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maísculo, 1 minúsculo e 1 digito. Com no mínio 8 caracteres.",
  },
  number: {
    regex: /^[0-9]+$/,
    message: "Utilize números apenas.",
  },
};

function useForm(type?: keyof typeof types) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (type === undefined) {
      return true;
    }
    if (value.length === 0) {
      setError("Insira um valor.");
      return false;
    } else if (type in types && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }
    setError(null);
    return true;
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (error) validate(value);
    setValue(event.currentTarget.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
