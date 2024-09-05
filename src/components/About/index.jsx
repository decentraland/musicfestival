import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import { Container } from "../Container";
import customBulletIcon from '../../images/Layer_1.png';
import bgAbout from "../../images/bg-about.png";


const About = (props) => {
  return (
    <Section id="about">
      <Container>        
        <StyledAbout>          
          <AboutHeader>
            <AboutTitle>DECENTRALAND MUSIC FESTIVAL</AboutTitle>            
          </AboutHeader>
          <Aboutbody>       
          <AboutBodyText>
              <AboutBodyParagraph>
              Save the Date: Jump into Decentraland <TextHighlight>November 20-23</TextHighlight> for the 4th edition of the virtual Decentraland Music Festival & embark on a cosmic EDM journey across the galaxy.
                <br />
                <br />
                <ul className="custom-bullet-list">
                  <li>Dance across <TextHighlight>4 days of exclusive sets</TextHighlight> from international DJs</li>
                  <li>Connect with <TextHighlight>EDM innovators & fans</TextHighlight> from around the world</li>
                  <li>Collect <TextHighlight>10+ free, special edition Wearables & Emotes</TextHighlight></li>
                  <li>Explore <TextHighlight>immersive interstellar visuals</TextHighlight> & two new parkour runs</li>
                  <li>Discover <TextHighlight>the latest developments in electronic music</TextHighlight> at live panel talks & expo booths</li>
                </ul>
                <br />
                The first major event to be held since the platform's beta launch of <TextHighlight>Decentraland 2.0</TextHighlight>—offering smooth performance, stunning visuals & new features—<TextHighlight>#DCLMF24</TextHighlight> is a festival you can't miss. Prepare your best deep-space drip & join the EDM community on the virtual dance floor of <TextHighlight>Decentraland</TextHighlight>. Entry is free — jump in from anywhere!
                <br />
              </AboutBodyParagraph>
            </AboutBodyText>
          </Aboutbody>
          <AboutButtonContainer href="https://decentraland.beehiiv.com/subscribe?utm_source=musicfestival.decentraland.org&utm_medium=organic&utm_campaign=DCLMF24" target="_blank">
            <AboutButtonLink>
              Sign up for the Decentraland Newsletter
            </AboutButtonLink>
          </AboutButtonContainer>
        </StyledAbout>
      </Container>
    </Section>
  );
};

const MVFont = styled.span `
  font-family: 'SaintRegular';
}`

const AboutTitle = styled.h2`
  font-family: 'Nasalization', sans-serif;
  font-size: 60px;
  background: linear-gradient(90deg, #3EFFA3 0%, #56A7FF 50%, #FB01FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap; /* Prevents the title from breaking into multiple lines */
  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 54px;
  }
`;

const Section = styled.section`
  position: relative;
  background-image: url(${bgAbout}); /* Background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 25px 0; /* Reduced padding */
`;

const StyledAbout = styled.div`
  margin: auto;
  padding: 96px 0;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: center; /* Ensures the title is centered */
  align-items: center;
  width: 100%; /* Ensure it takes the full width */
  max-width: 1200px; /* Limit max width to avoid too wide title on large screens */
  margin-bottom: 56px;
  text-align: center;
  overflow: hidden; /* Prevents overflow */
`;

const SideIcon = styled.img`
  width: 150px;
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const Aboutbody = styled.section`
  display: flex;
`;

const AboutBodyText = styled.div`
letter-spacing: 0.1em;
font-weight: 300;
margin-left: 8px;
@media screen and (min-width: ${breakpoints.md}) {
  margin-left: 120px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  padding-right: 64px;
  max-width: 700px;
}
`;

const AboutBodyParagraph = styled.p`
  font-family: "Gothic", sans-serif;
  font-size: 16px;
  line-height: 21px;

  ul {
    list-style: inside;
    padding: 16px;

    li {
      font-family: Gothic;
      padding: 16px 0;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;  
  margin: 45px 0;
`;

const AboutBodyImg = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;
  padding-right: 40px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 5px 0;
    width: 70px;
    height: 479px;
    margin-left: 8px;
  }
`;

const TextHighlight = styled.span`
  font-family: "Gothic", sans-serif;
  color: white;
  font-weight: 700;

  a {
    font-family: "Gothic", sans-serif;
    color: white;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const AboutButtonContainer = styled.a`
  margin-top: 5px; /* Increased margin for more space */
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 80px; /* Even more space for larger screens */
  }
`;

const AboutButtonLink = styled.button`
  position: relative;
  width: 100%;
  max-width: 600px; /* Limit the width to keep the button in good shape */
  text-transform: uppercase;
  height: auto;
  background: linear-gradient(90deg, #3EFFA3 0%, #56A7FF 50%, #FB01FF 100%);
  font-size: 16px;
  letter-spacing: 2px;
  font-family: "Nasalization";
  padding: 20px 40px; /* Increased padding */
  border: none; /* Removed border to match the design */
  border-radius: 30px; /* Lowered border radius for more rectangular shape */
  font-weight: 700;
  transition: all 0.4s ease;
  cursor: pointer;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Ensure text color is white */

  &:hover {
    color: black;
    background-color: #f37877;
    box-shadow: 0 0 20px #fff, 0 0 10px violet, 0 0 5px blue;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 20px;
    padding: 24px 72px;
  }
`;

const ButtonDecorator = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 27px;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 47px;
    height: 52px;
    top: 0;
    right: -5px;
}
`
const TextHighlightGradient = styled.span`
  background: linear-gradient(90deg, #3EFFA3 0%, #56A7FF 50%, #FB01FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700; /* Keep it bold */
`;

export default About;
