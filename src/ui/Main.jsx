import React from "react";
import styled from "styled-components";
import ShopNow from "./ShopNow";
import Hero from "./Hero";

const MainTag = styled.main`
  //   background-color: var(--color-grey-50);
  background: url("hero-large-copy.jpg") no-repeat;
  background-size: cover;
  padding: 4rem 2.5rem 6.4rem;
  height: 100vh;
`;

const Container = styled.div`
  width: 1270px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 200px;
`;
const Main = () => {
  return (
    <MainTag>
      <Container>
        <ShopNow />
        <Hero />
      </Container>
    </MainTag>
  );
};

export default Main;
