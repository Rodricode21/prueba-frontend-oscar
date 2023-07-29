import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const PopUpMovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg); /* Cambia a 360deg si quieres una vuelta */
  }
`;
const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #007bff; /* Color del loader, puedes cambiarlo a tu gusto */
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;

  ${(props) =>
    props.stopAnimation &&
    css`
      animation: none;
      border-color: #007bff; /* Color del borde cuando la animación se detiene */
    `}
`;

const PopupMovieSaved = () => {
  const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopAnimation(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PopUpMovieWrapper>
      <p>the movie has been saved successfully</p>
      <Loader stopAnimation={stopAnimation} />
    </PopUpMovieWrapper>
  );
};

export default PopupMovieSaved;
