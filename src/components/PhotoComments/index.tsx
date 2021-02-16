import { SinglePhotoData } from "types/components/ModalPhoto";

function PhotoComments({
  id,
  comments,
}: {
  id: number;
  comments: SinglePhotoData["comments"];
}) {
  return <div>PhotoComments</div>;
}

export default PhotoComments;
