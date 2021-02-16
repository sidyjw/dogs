import { PhotoData } from "./FeedPhotosItem";

export interface IModalPhoto {
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoData | null>>;
}

export interface SinglePhotoData {
  photo: PhotoData;
  comments: [];
}
