import { PHOTOS_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import FeedPhotosItem from "components/FeedPhotosItem";
import Loading from "components/Loading";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { AnimeLeft } from "styles";
import { PhotoData } from "types/components/FeedPhotosItem";
import { IModalPhoto } from "types/components/ModalPhoto";
import * as S from "./styles";

function FeedPhotos({ setModalPhoto }: IModalPhoto) {
  const { data, error, loading, request } = useFetch<PhotoData[]>();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <ErrorMessage error={error} />;

  if (loading) return <Loading />;

  return (
    <AnimeLeft>
      <S.FeedPhotos>
        {data?.map((photo) => (
          <FeedPhotosItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </S.FeedPhotos>
    </AnimeLeft>
  );
}

export default FeedPhotos;
