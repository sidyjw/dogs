import Feed from "containers/Feed";
import { MainContainer } from "styles";

function Home() {
  return (
    <MainContainer>
      <section>
        <Feed />
      </section>
    </MainContainer>
  );
}

export default Home;
