import React from "react";
import styled, { keyframes } from "styled-components";
import logo1 from "./images/sponsor/allegro.jpg";
import logo2 from "./images/sponsor/bk-grafisk.jpg";
import logo3 from "./images/sponsor/capcom.jpg";
import logo4 from "./images/sponsor/dotemu.jpg";
import logo5 from "./images/sponsor/elkjop.jpg";
import logo6 from "./images/sponsor/lego.jpg";
import logo7 from "./images/sponsor/nintendo.jpg";
import logo8 from "./images/sponsor/playstation.jpg";
import logo9 from "./images/sponsor/playtonic.jpg";
import logo10 from "./images/sponsor/sb.jpg";
import logo11 from "./images/sponsor/strand-forlag.jpg";
import logo12 from "./images/sponsor/topp-trafikkskole.jpg";
import logo13 from "./images/sponsor/innowin.jpg";
import logo14 from "./images/sponsor/meny-indrehavn.jpg";
import logo15 from "./images/sponsor/com2gether.jpg";
import logo16 from "./images/sponsor/cosmos-it.jpg";
import logo17 from "./images/sponsor/fon-anlegg.jpg";
import logo18 from "./images/sponsor/hp-omen.jpg";
import logo19 from "./images/sponsor/hvaltorvet.jpg";
import logo20 from "./images/sponsor/fjorden-elektro.jpg";
import logo21 from "./images/sponsor/activision-blizzard.jpg";

const Loop = keyframes`
    0% {
        transform: translateX(0)
    }
    100% {
        transform: translateX(5850px)
    }
`;
const Scale = keyframes`
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`;

const SponsorsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: block;
  .inner-wrapper {
    padding: 20px 0;
    display: flex;
    margin-left: -10500px;
    animation: ${Loop} 60s linear infinite;
    flex-wrap: nowrap;
    .sponsor-logo {
      padding-left: 40px;
      &:nth-child(40) {
        animation: ${Scale} 2s 0s ease-in-out infinite;
      }
      &:nth-child(41) {
        animation: ${Scale} 2s 0s ease-in-out infinite;
      }
      &:nth-child(1) {
        animation: ${Scale} 2s 0.1s ease-in-out infinite;
      }
      &:nth-child(2) {
        animation: ${Scale} 2s 0.2s ease-in-out infinite;
      }
      &:nth-child(3) {
        animation: ${Scale} 2s 0.3s ease-in-out infinite;
      }
      &:nth-child(4) {
        animation: ${Scale} 2s 0.4s ease-in-out infinite;
      }
      &:nth-child(5) {
        animation: ${Scale} 2s 0.5s ease-in-out infinite;
      }
      &:nth-child(6) {
        animation: ${Scale} 2s 0.6s ease-in-out infinite;
      }
      &:nth-child(7) {
        animation: ${Scale} 2s 0.7s ease-in-out infinite;
      }
      &:nth-child(8) {
        animation: ${Scale} 2s 0.8s ease-in-out infinite;
      }
      &:nth-child(9) {
        animation: ${Scale} 2s 0.9s ease-in-out infinite;
      }
      &:nth-child(10) {
        animation: ${Scale} 2s 1s ease-in-out infinite;
      }
      &:nth-child(11) {
        animation: ${Scale} 2s 1.1s ease-in-out infinite;
      }
      &:nth-child(12) {
        animation: ${Scale} 2s 1.2s ease-in-out infinite;
      }
      &:nth-child(13) {
        animation: ${Scale} 2s 1.3s ease-in-out infinite;
      }
      &:nth-child(14) {
        animation: ${Scale} 2s 1.4s ease-in-out infinite;
      }
      &:nth-child(15) {
        animation: ${Scale} 2s 1.5s ease-in-out infinite;
      }
      &:nth-child(16) {
        animation: ${Scale} 2s 1.6s ease-in-out infinite;
      }
      &:nth-child(17) {
        animation: ${Scale} 2s 1.7s ease-in-out infinite;
      }
      &:nth-child(18) {
        animation: ${Scale} 2s 1.8s ease-in-out infinite;
      }
      &:nth-child(19) {
        animation: ${Scale} 2s 1.9s ease-in-out infinite;
      }
      &:nth-child(20) {
        animation: ${Scale} 2s 0s ease-in-out infinite;
      }
      &:nth-child(21) {
        animation: ${Scale} 2s 0.1s ease-in-out infinite;
      }
      &:nth-child(22) {
        animation: ${Scale} 2s 0.2s ease-in-out infinite;
      }
      &:nth-child(23) {
        animation: ${Scale} 2s 0.3s ease-in-out infinite;
      }
      &:nth-child(24) {
        animation: ${Scale} 2s 0.4s ease-in-out infinite;
      }
      &:nth-child(25) {
        animation: ${Scale} 2s 0.5s ease-in-out infinite;
      }
      &:nth-child(26) {
        animation: ${Scale} 2s 0.6s ease-in-out infinite;
      }
      &:nth-child(27) {
        animation: ${Scale} 2s 0.7s ease-in-out infinite;
      }
      &:nth-child(28) {
        animation: ${Scale} 2s 0.8s ease-in-out infinite;
      }
      &:nth-child(29) {
        animation: ${Scale} 2s 0.9s ease-in-out infinite;
      }
      &:nth-child(30) {
        animation: ${Scale} 2s 1s ease-in-out infinite;
      }
      &:nth-child(31) {
        animation: ${Scale} 2s 1.1s ease-in-out infinite;
      }
      &:nth-child(32) {
        animation: ${Scale} 2s 1.2s ease-in-out infinite;
      }
      &:nth-child(33) {
        animation: ${Scale} 2s 1.3s ease-in-out infinite;
      }
      &:nth-child(34) {
        animation: ${Scale} 2s 1.4s ease-in-out infinite;
      }
      &:nth-child(35) {
        animation: ${Scale} 2s 1.5s ease-in-out infinite;
      }
      &:nth-child(36) {
        animation: ${Scale} 2s 1.6s ease-in-out infinite;
      }
      &:nth-child(37) {
        animation: ${Scale} 2s 1.7s ease-in-out infinite;
      }
      &:nth-child(38) {
        animation: ${Scale} 2s 1.8s ease-in-out infinite;
      }
      &:nth-child(39) {
        animation: ${Scale} 2s 1.9s ease-in-out infinite;
      }
      &:last-item {
        padding-right: 40px;
      }
      img {
        height: 80px;
      }
    }
  }
`;
function Sponsors() {
  return (
    <SponsorsWrapper>
      <div className="inner-wrapper">
        <div className="sponsor-logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo2} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo3} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo4} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo5} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo6} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo7} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo8} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo9} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo10} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo11} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo12} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo13} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo14} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo15} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo16} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo17} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo18} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo19} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo20} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo1} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo2} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo3} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo4} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo5} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo6} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo7} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo8} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo9} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo10} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo11} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo12} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo13} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo14} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo15} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo16} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo17} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo18} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo19} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo20} alt="logo" />
        </div>
        <div className="sponsor-logo">
          <img src={logo21} alt="logo" />
        </div>
      </div>
    </SponsorsWrapper>
  );
}

export default Sponsors;
