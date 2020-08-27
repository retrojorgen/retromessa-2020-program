import React from "react";

import styled from "styled-components";
import LeftMenu from "./LeftMenu";
import Sponsors from "./Sponsors";
import Teaser from "./Teaser";

import blackPixelPattern from "./images/black-pixel-pattern.png";
import whitePixelPattern from "./images/white-pixel-pattern.png";
const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  display: flex;
  overflow: hidden;
`;

const ProgramWrapper = styled.div`
  width: 700px;
  flex: 1 1 700px;
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
    background-repeat-x: no-repeat;
    left: 100%;
    top: 0;
  }
`;

const MainWrapper = styled.div`
  width: calc(100% - 700px);
  height: 100%;
  flex-direction: column;
`;

const TeaserWrapper = styled.div`
  width: 100%;
  height: calc(100% - 160px);
  background-color: blue;
  position: relative;
`;
const SponsorsWrapper = styled.div`
  height: 160px;
  width: 100%;
  background-color: #f4f5f7;
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
        <TeaserWrapper>
          <Teaser />
        </TeaserWrapper>
        <SponsorsWrapper>
          <Sponsors />
        </SponsorsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
