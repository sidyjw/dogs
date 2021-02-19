import styled, { css } from "styled-components";

export const Comment = styled.ul<{ single?: boolean }>`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
  ${(props) =>
    props.single &&
    css`
      padding: 0 0;
    `}

  & li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;
