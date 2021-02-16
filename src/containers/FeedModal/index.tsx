import { PHOTO_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import PhotoContent from "containers/PhotoContent";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { PhotoData } from "types/components/FeedPhotosItem";
import { SinglePhotoData } from "types/components/ModalPhoto";
import * as S from "./styles";

function FeedModal({ photo }: { photo: PhotoData }) {
  const { data, error, loading, request } = useFetch<SinglePhotoData>();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo.id, request]);

  return (
    <S.FeedModal>
      {error && <ErrorMessage error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.FeedModal>
  );
}

export default FeedModal;
