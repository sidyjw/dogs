import { useState } from "react";
import * as S from "./styles";
import { ReactComponent as Enviar } from "assets/enviar.svg";
import useFetch from "hooks/useFetch";
import { COMMENT_POST } from "api";
import { CommentData } from "types/components/ModalPhoto";
import ErrorMessage from "components/ErrorMessage";
function PhotoCommentsForm({
  id,
  single,
  setCommentsList,
}: {
  id: number;
  single?: boolean;
  setCommentsList: React.Dispatch<React.SetStateAction<CommentData[]>>;
}) {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch<CommentData>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response?.ok) {
      setComment("");
      setCommentsList((comments) => [...comments, json as CommentData]);
    }
  }

  return (
    <S.PhotoCommentsForm single={single} onSubmit={handleSubmit}>
      <S.PhotoCommentTextArea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <S.PhotoCommentButton>
        <Enviar />
      </S.PhotoCommentButton>
      <ErrorMessage error={error} />
    </S.PhotoCommentsForm>
  );
}

export default PhotoCommentsForm;
