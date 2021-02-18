import PhotoComments from "components/PhotoComments";
import PhotoDelete from "components/PhotoDelete";
import { Title } from "components/Title";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "state/UserContext";
import { SinglePhotoData } from "types/components/ModalPhoto";
import * as S from "./styles";

function PhotoContent({ data }: { data: SinglePhotoData }) {
  const context = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <S.PhotoContent>
      <S.PhotoImg>
        <img src={photo.src} alt={photo.title} />
      </S.PhotoImg>
      <S.PhotoDetails>
        <div>
          <S.PhotoAuthor>
            {context?.data?.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.id}`}>@{photo.author}</Link>
            )}
            <S.PhotoViews>{photo.acessos}</S.PhotoViews>
          </S.PhotoAuthor>
          <Title>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>
          <S.PhotoAttributes>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </S.PhotoAttributes>
        </div>
      </S.PhotoDetails>
      <PhotoComments id={photo.id} comments={comments} />
    </S.PhotoContent>
  );
}

export default PhotoContent;
