import styled from "styled-components";

export const Subtitle = styled.h2`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;

  &:after {
    content: " ";
    display: block;
    background-color: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
