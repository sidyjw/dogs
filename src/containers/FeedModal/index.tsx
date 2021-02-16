import { PHOTO_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import PhotoContent from "containers/PhotoContent";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { ScaleUp } from "styles";
import { PhotoData } from "types/components/FeedPhotosItem";
import { IModalPhoto, SinglePhotoData } from "types/components/ModalPhoto";
import * as S from "./styles";

function FeedModal({
  photo,
  setModalPhoto,
}: {
  photo: PhotoData;
  setModalPhoto: IModalPhoto["setModalPhoto"];
}) {
  const { data, error, loading, request } = useFetch<SinglePhotoData>();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo.id, request]);

  function handleOutsideClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <S.FeedModal onClick={handleOutsideClick}>
      {error && <ErrorMessage error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.FeedModal>
  );
}

export default FeedModal;
