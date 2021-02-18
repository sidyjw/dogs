import Feed from "containers/Feed";
import React from "react";
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
