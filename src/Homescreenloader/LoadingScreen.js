import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  animation: ${fadeIn} 2s ease-in-out;
  background:black;
`;

const SonyLogo = styled.img`
  max-width: 100%;
`;
const image121 = "https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png";

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <SonyLogo src={image121} alt="Sony Logo" />
    </LoadingContainer>
  );
};

export default LoadingScreen;
