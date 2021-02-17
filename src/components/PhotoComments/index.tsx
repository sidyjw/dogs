import PhotoCommentsForm from "components/PhotoCommentsForm";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "state/UserContext";
import { SinglePhotoData } from "types/components/ModalPhoto";
import * as S from "./styles";

function PhotoComments({
  id,
  comments,
}: {
  id: number;
  comments: SinglePhotoData["comments"];
}) {
  const context = useContext(UserContext);
  const [commentsList, setCommentsList] = useState(() => comments);
  const refComments = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const element = refComments.current as HTMLUListElement;
    const height = element?.scrollHeight as number;
    element.scrollTop = height;
  }, []);

  return (
    <>
      <S.Comment ref={refComments}>
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </S.Comment>
      {context?.login && (
        <PhotoCommentsForm id={id} setCommentsList={setCommentsList} />
      )}
    </>
  );
}

export default PhotoComments;
