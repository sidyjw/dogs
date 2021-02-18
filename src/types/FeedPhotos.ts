import { IModalPhoto } from "./components/ModalPhoto";

export interface IFeedPhotos {
  setModalPhoto: IModalPhoto["setModalPhoto"];
  setInfinite: React.Dispatch<React.SetStateAction<boolean>>;
  user?: number;
  page?: number;
}
