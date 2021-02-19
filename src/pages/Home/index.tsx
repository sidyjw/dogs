import Head from "components/Head";
import Feed from "containers/Feed";
import React from "react";
import { MainContainer } from "styles";

function Home() {
  return (
    <MainContainer>
      <section>
        <Head
          title="Fotos"
          description="Home do site Dogs, com o feed de fotos."
        />
        <Feed />
      </section>
    </MainContainer>
  );
}

export default Home;
