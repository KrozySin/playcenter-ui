import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  const rotate = keyframes`
  0% {
    top: ${size / 2}px;
    left: ${size / 2}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: ${size / 2}px;
    left: ${size / 2}px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: ${size / 2}px;
    left: ${size / 2}px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: ${size}px;
    height: ${size}px;
    opacity: 0;
  }
`;

  const Container = styled.div`
    display: inline-block;
    position: relative;
    width: ${size + 8}px;
    height: ${size + 8}px;

    div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: -0.5s;
    }
  `;

  return (
    <Container>
      <div></div>
      <div></div>
    </Container>
  );
};

export default Spinner;
