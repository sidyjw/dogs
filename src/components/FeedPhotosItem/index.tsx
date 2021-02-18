import Image from "components/Image";
import { PhotoData } from "types/components/FeedPhotosItem";
import { IModalPhoto } from "types/components/ModalPhoto";
import * as S from "./styles";

function FeedPhotosItem({
  photo,
  setModalPhoto,
}: {
  photo: PhotoData;
  setModalPhoto: IModalPhoto["setModalPhoto"];
}) {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <S.FeedPhotosItem onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <S.Views>{photo.acessos}</S.Views>
    </S.FeedPhotosItem>
  );
}

export default FeedPhotosItem;
