import { Title } from "components/Title";
import { MainContainer, Container } from "styles";

function NotFound() {
  return (
    <Container>
      <MainContainer>
        <Title>Erro: 404</Title>
        <p>Página não encontrada</p>
      </MainContainer>
    </Container>
  );
}

export default NotFound;
