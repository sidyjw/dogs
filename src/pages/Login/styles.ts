import styled from "styled-components";

export const LoginPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &:before {
    display: block;
    content: " ";
    background: url("./login.jpg") no-repeat center center;
    background-size: cover;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;

    &:before {
      display: none;
    }
  }
`;

export const FormWrapper = styled.section`
  max-width: 30rem;
  padding: 1rem;

  @media (max-width: 40rem) {
    max-width: 100%;
  }
`;
