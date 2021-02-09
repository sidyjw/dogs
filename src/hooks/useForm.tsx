import { ChangeEvent, useState } from "react";

const types = {
  email: {
    regex: /\S+@\S+\.\S+/,
    message: "Digite um email válido.",
  },
  password: {
    regex: /\S+@\S+\.\S+/,
    message: "Insira uma senha.",
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
