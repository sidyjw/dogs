import { PHOTO_DELETE } from "api";
import useFetch from "hooks/useFetch";
import * as S from "./styles";

function PhotoDelete({ id }: { id: number }) {
  const { request, loading } = useFetch();

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const confirm = window.confirm("Você tem certeza disso?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);

      if (response?.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <S.PhotoDelete disabled>Carregando...</S.PhotoDelete>
      ) : (
        <S.PhotoDelete onClick={handleClick}>Deletar</S.PhotoDelete>
      )}
    </>
  );
}

export default PhotoDelete;
