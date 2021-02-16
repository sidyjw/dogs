import styled from "styled-components";

export const PhotoContent = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background-color: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const PhotoImg = styled.div`
  grid-row: 1 / 4;

  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const PhotoDetails = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const PhotoViews = styled.span`
  &:before {
    content: " ";
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url("visualizacao-black.svg");
  }
`;

export const PhotoAttributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;

  & li {
    margin-right: 2rem;
  }

  & li:before {
    content: "";
    display: inline-block;
    height: 20px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background: #333;
    margin-top: 5px;
  }
`;

export const PhotoAuthor = styled.p`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a:hover {
    text-decoration: underline;
  }
`;
