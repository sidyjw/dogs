import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`    
    * {
        box-sizing: border-box;
    }

    body { 
        padding-top: 4rem;
        margin: 0;
        color: #333;
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', georgia;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    h1,
    h2,
    h3,
    h4,
    p { 
        margin: 0;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }
    
    button,
    input {
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }
`;

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  margin-top: 2rem;
`;

const animeLeft = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const AnimeLeft = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;

const scaleUp = keyframes`
    to {
        opacity: initial;
        transform: initial;
    }   
`;

export const ScaleUp = styled.div`
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;
`;
