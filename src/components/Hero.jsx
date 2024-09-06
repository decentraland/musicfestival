import React from "react";
import styled from "styled-components";
import Button from "./Button";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import starBust from "../images/Starbust1.png";
import polygon from "../images/STD-polygon.svg";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import icon4 from "../images/icon-4.png";
import { Container } from "./Container";
import bgHero from "../images/bg-hero.png";

const SaveTheDate = styled.p`
  font-family: 'InterMedium', sans-serif;
  font-size: 20px;
  color: white;
  text-transform: none;
  margin-bottom: 24px; /* Add space between this text and the line below */
  margin-top: 0; /* Reset margin on top */
`;

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeroContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 3px solid transparent;
  border-radius: 16px;
  border-image: linear-gradient(90deg, #ff00ff, #00ffcc) 1;  /* Gradient border */
  background-color: rgba(0, 0, 0, 0.9);  /* Black background with slight transparency */
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Optional shadow for more depth */
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const MainTitle = styled.h1`
  font-family: 'Nasalization', sans-serif;
  font-size: 48px; /* This is the size used for spacing */
  font-weight: 900;
  line-height: 1.2;
  color: white;
    margin-top: 48px; /* Adding space equal to the font size */
`;

const GradientText = styled.span`
  font-family: 'Nasalization', sans-serif;
  font-size: 48px; /* This is the size used for spacing */
  font-weight: 900;
  background: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block; /* Ensure block-level element for proper spacing */
  margin-top: 0px; /* Adding space equal to the font size above the subtitle */
  margin-bottom: 48px; /* Adding bottom margin as well */
`;

const EventDetails = styled.div`
  margin-top: 30px;
  font-size: 18px;
`;

const EventDate = styled.p`
  font-family: 'InterMedium', sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 24px 0; /* Set both top and bottom margin to 24px */
`;

const EventLocation = styled.p`
  font-size: 24px;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: space-between; /* Space between logo and button */
  width: 100%; /* Ensure full width */
  margin-top: 40px;
  padding: 0 20px; /* Optional: Add horizontal padding */
`;

const StyledLogo = styled.img`
  width: 140px;
  height: auto; /* Maintain aspect ratio */
`;

const JumpButton = styled.a`
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid red;
  color: red;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const Line = styled.div`
  position: relative;
  width: calc(100% + 40px); /* Extend the line slightly beyond the container */
  height: 2px;
  background: linear-gradient(90deg, #ff00ff, #00ffcc); /* Gradient */
  margin: 0 -20px; /* Shift it left and right by the padding size */
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 2px solid;
  border-image: linear-gradient(90deg, #ff00ff, #00ffcc) 1;
  border-radius: 10px;
  margin: 20px 0;
`;

const RSVPButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px 24px !important;
  font-family: 'InterMedium', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #3EFFA3 0%, #56A7FF 50%, #FB01FF 100%);
  border: none;
  border-radius: 30px;
  transition: all 0.4s ease;
  text-decoration: none;
  cursor: pointer;
  min-width: 60px; /* Ensure a minimum width for proper button size */
  height: 15px; /* Set a fixed height to match logo */
  text-align: center;
  line-height: 20px; /* Adjust line-height to center text vertically */

  &:hover {
    color: black;
    background-color: #f37877;
    box-shadow: 0 0 20px #fff, 0 0 10px violet, 0 0 5px blue;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
    padding: 12px 24px;
    height: 36px;
    margin-top: px; /* Smaller top margin for larger screens */
    margin-bottom: 8px; /* Smaller bottom margin for larger screens */
  }
`;

const AboutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px; /* Adjust the space above the button */
  width: 100%;
  font-family: 'InterMedium', sans-serif; /* Add font-family here */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        {/* Icons Section */}
        <IconContainer>
          <img src={icon1} alt="Icon 1" />
          <img src={icon2} alt="Icon 2" />
          <img src={icon3} alt="Icon 3" />
          <img src={icon4} alt="Icon 4" />
        </IconContainer>

        {/* Main Title */}
        <SaveTheDate>Save the Date</SaveTheDate> {/* New Text */}
        <Line /> {/* Top Line */}
        <MainTitle>DECENTRALAND</MainTitle>
        <GradientText>MUSIC FESTIVAL</GradientText>
        <Line /> {/* Bottom Line */}

        {/* Date Section */}
          <EventDate>November 20-23</EventDate>

        {/* Bottom Section */}
        <BottomSection>
          <StyledLogo src={dclLogo} alt="Decentraland Logo" />
          <RSVPButton href="https://decentraland.org/events/event/?id=9831c4be-4f94-4bb2-a828-8f48d28a1520" target="_blank" rel="noopener noreferrer"> RSVP</RSVPButton>
        </BottomSection>
      </HeroContainer>
    </StyledHero>
  );
};
export default Hero;