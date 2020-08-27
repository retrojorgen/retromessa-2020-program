import React from "react";
import styled from "styled-components";
import video from "./videos/video-6.mp4";
import logo from "./images/retromessa-logo-white.svg";
import getTodaysEvent from "./program";

const todaysEvent = getTodaysEvent();

const TeaserStyles = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: grid;
  place-items: center;
  .video {
    position: absolute;
    left: 0;
    top: 0;

    opacity: 0.4;
    filter: blur(10px);
  }
  .content {
    position: relative;
    color: #e1e1e1;
    max-width: 100%;
    font-size: 2rem;
    font-family: "Yeseva One";
    margin-bottom: 20px;
    text-shadow: rgba(0, 0, 0, 0.4) 2px 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 400px;
      margin-bottom: 20px;
    }
    h1 {
      margin: 0;
    }
    p {
    }
  }
`;

function Teaser() {
  return (
    <TeaserStyles>
      <video width="1920" height="1080" className="video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <img src={logo} className="logo" alt="logo" />
        <h1>{todaysEvent.info}</h1>
        <p className="info">{todaysEvent.streamInfo}</p>
        <iframe
          title="stream"
          width="560"
          height="315"
          className="stream-teaser"
          src={`https://www.youtube.com/embed/${todaysEvent.youTubeStreamId}?controls=0&autoplay=1&mute=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </TeaserStyles>
  );
}

export default Teaser;
