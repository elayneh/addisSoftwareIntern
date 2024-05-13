import React from "react";
import styled, { keyframes } from "styled-components";

import backgroundImage from "../../../../public/assets/images/music1.jpeg";
import { useNavigate } from "react-router-dom";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const HomePageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  text-align: center;
  color: white;
`;

const FloatingButton = styled.button`
  position: absolute;
  bottom: 150px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  animation: ${floatAnimation} 3s ease-in-out infinite; /* Apply the floating animation */
`;

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/songlist");
  };

  return (
    <HomePageContainer>
      <ContentContainer>
        <h1>Welcome to Addis Software Media Player</h1>
        <p>Explore and discover amazing songs!</p>
        <FloatingButton onClick={handleButtonClick}>Get In</FloatingButton>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default Index;
