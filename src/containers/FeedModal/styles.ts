import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`
    to {
        opacity: 1;
        transform: scale(1);
    }   
`;

export const FeedModal = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  @media (max-width: 40rem) {
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`;
