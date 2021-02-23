import styled from "styled-components";

export const UserPhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  & #img {
    margin-bottom: 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`;

export const ImgPreview = styled.div<{ imgURL: string }>`
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;

  &:after {
    content: " ";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
