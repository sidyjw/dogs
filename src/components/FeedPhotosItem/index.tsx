import { PhotoData } from "types/components/FeedPhotosItem";
import * as S from "./styles";
function FeedPhotosItem({ photo }: { photo: PhotoData }) {
  return (
    <S.FeedPhotosItem>
      <img src={photo.src} alt={photo.title} />
      <S.Views>{photo.acessos}</S.Views>
    </S.FeedPhotosItem>
  );
}

export default FeedPhotosItem;
