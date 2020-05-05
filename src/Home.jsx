import React from "react";
import { Container } from "reactstrap";

import Posts from "./Posts";

function Home() {
  return (
    <main>
      <Container>
        <Posts />
      </Container>
    </main>
  );
}

export default Home;
