import { PhotoData } from "./FeedPhotosItem";

export interface IModalPhoto {
  setModalPhoto: React.Dispatch<React.SetStateAction<PhotoData | null>>;
}

export interface SinglePhotoData {
  photo: PhotoData;
  comments: CommentData[];
}

export interface CommentData {
  comment_ID: number;
  comment_author: string;
  comment_content: string;
}
