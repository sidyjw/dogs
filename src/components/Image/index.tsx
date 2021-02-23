import { ImgHTMLAttributes, useState } from "react";
import * as S from "./styles";
function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    const image = event.target as HTMLImageElement;
    setSkeleton(false);
    image.style.opacity = "1";
  }

  return (
    <S.ImgWrapper>
      {skeleton && <S.ImgSkeleton />}
      <S.Img onLoad={handleLoad} {...props} />
    </S.ImgWrapper>
  );
}

export default Image;
