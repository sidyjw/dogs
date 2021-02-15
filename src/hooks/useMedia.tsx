import { useEffect, useState } from "react";

function useMedia(media: string) {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };

    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
}

export default useMedia;
