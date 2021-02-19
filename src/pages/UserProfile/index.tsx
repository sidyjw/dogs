import Head from "components/Head";
import { Title } from "components/Title";
import Feed from "containers/Feed";
import { useParams } from "react-router-dom";
import { Container, MainContainer } from "styles";

function UserProfile() {
  const { user } = useParams();
  return (
    <Container>
      <MainContainer>
        <Head title={user} />
        <Title>{user}</Title>
        <Feed user={user} />
      </MainContainer>
    </Container>
  );
}

export default UserProfile;
