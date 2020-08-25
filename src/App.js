import React from "react";

import styled from "styled-components";
import LeftMenu from "./LeftMenu";

import blackPixelPattern from "./images/black-pixel-pattern.png";
import whitePixelPattern from "./images/white-pixel-pattern.png";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ProgramWrapper = styled.div`
  width: 500px;
  height: 100%;
  background-color: black;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    width: 32px;
    height: 100%;
    background: url(${blackPixelPattern});
    left: 100%;
    top: 0;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TeaserWrapper = styled.div`
  width: 100%;
  height: calc(100% - 400px);
  background-color: blue;
`;
const SponsorsWrapper = styled.div`
  height: 400px;
  width: 100%;
  background-color: white;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 32px;
    background: url(${whitePixelPattern});
    left: 0;
    top: -32px;
  }
`;

function App() {
  return (
    <Wrapper>
      <ProgramWrapper>
        <LeftMenu />
      </ProgramWrapper>
      <MainWrapper>
        <TeaserWrapper></TeaserWrapper>
        <SponsorsWrapper></SponsorsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
