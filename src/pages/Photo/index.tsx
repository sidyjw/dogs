import { PHOTO_GET } from "api";
import ErrorMessage from "components/ErrorMessage";
import Loading from "components/Loading";
import PhotoContent from "containers/PhotoContent";
import useFetch from "hooks/useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, MainContainer } from "styles";
import { SinglePhotoData } from "types/components/ModalPhoto";

function Photo() {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch<SinglePhotoData>();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container>
        <MainContainer>
          <section>
            <PhotoContent single data={data} />
          </section>
        </MainContainer>
      </Container>
    );
  else return null;
}

export default Photo;
