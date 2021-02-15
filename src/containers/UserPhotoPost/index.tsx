import InputField from "components/Form/Input";
import useFetch from "hooks/useFetch";
import useForm from "hooks/useForm";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AnimeLeft } from "styles";
import * as S from "./styles";
import { PHOTO_POST } from "api";
import Button from "components/Form/Button";
import ErrorMessage from "components/ErrorMessage";
import { useNavigate } from "react-router";
interface ImgFile {
  raw: Blob | null;
  preview: string;
}

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<ImgFile | undefined>();
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [navigate, data]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img?.raw ?? "");
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token") as string;
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  }

  function handleFileChange({ target }: ChangeEvent<HTMLInputElement>) {
    const file = target.files && target.files[0];

    if (file)
      setImg({
        preview: URL.createObjectURL(file),
        raw: file,
      });
  }

  return (
    <AnimeLeft>
      <S.UserPhotoPost>
        <form onSubmit={handleSubmit}>
          <InputField label="Nome" name="nome" {...nome} />
          <InputField label="Peso" type="number" name="peso" {...peso} />
          <InputField label="Idade" type="number" name="idade" {...idade} />
          <input type="file" name="img" id="img" onChange={handleFileChange} />
          <div style={{ marginBottom: "1rem" }} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <ErrorMessage error={error} />
        </form>
        <div>{img?.preview && <S.ImgPreview imgURL={img.preview} />}</div>
      </S.UserPhotoPost>
    </AnimeLeft>
  );
}

export default UserPhotoPost;
