import { PHOTOS_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import FeedPhotosItem from "components/FeedPhotosItem";
import Loading from "components/Loading";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { AnimeLeft } from "styles";
import { PhotoData } from "types/components/FeedPhotosItem";
import { IFeedPhotos } from "types/FeedPhotos";
import * as S from "./styles";

function FeedPhotos({ setModalPhoto, user, page, setInfinite }: IFeedPhotos) {
  const { data, error, loading, request } = useFetch<PhotoData[]>();

  useEffect(() => {
    const total = 3;
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { json, response } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
