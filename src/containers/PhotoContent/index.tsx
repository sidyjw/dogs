import PhotoComments from "components/PhotoComments";
import { Title } from "components/Title";
import { Link } from "react-router-dom";
import { SinglePhotoData } from "types/components/ModalPhoto";
import * as S from "./styles";

function PhotoContent({ data }: { data: SinglePhotoData }) {
  const { photo, comments } = data;
  return (
    <S.PhotoContent>
      <S.PhotoImg>
        <img src={photo.src} alt={photo.title} />
      </S.PhotoImg>
      <S.PhotoDetails>
        <div>
          <p>
            <Link to={`/perfil/${photo.id}`}>@{photo.author}</Link>
            <S.PhotoViews>{photo.acessos}</S.PhotoViews>
          </p>
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
