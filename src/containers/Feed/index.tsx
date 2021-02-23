import FeedModal from "containers/FeedModal";
import FeedPhotos from "containers/FeedPhotos";
import { useEffect, useState } from "react";
import { PhotoData } from "types/components/FeedPhotosItem";

function Feed({ user }: { user?: number | string }) {
  const [modalPhoto, setModalPhoto] = useState<PhotoData | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        //15:20
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setInfinite={setInfinite}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
}

export default Feed;
