import React from "react";
import styled from "@emotion/styled";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

import LatestMovieSection from "~/features/latest";
import NowPlayingSection from "~/features/nowPlaying";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => (
  <>
    <Header />
    <Main>
      <Container>
        <LatestMovieSection />
        <NowPlayingSection />
      </Container>
    </Main>
    <Footer />
  </>
);

export default MainPage;
