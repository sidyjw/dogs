import FeedModal from "containers/FeedModal";
import FeedPhotos from "containers/FeedPhotos";
import { useState } from "react";
import { PhotoData } from "types/components/FeedPhotosItem";

function Feed() {
  const [modalPhoto, setModalPhoto] = useState<PhotoData | null>(null);
  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
