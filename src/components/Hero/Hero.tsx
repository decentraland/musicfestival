import styled from "styled-components"
import bgHero from "../../img/music-festival/bg-mf-new.png"
import frameDate from "../../img/music-festival/DCL_MF24_contenedores_desktop 1_transparent.png"
import headerDclLogo from "../../img/music-festival/DMF24-Logo.png"
// import bottomDclLogo from "../../img/music-festival/decentraland-logo.png"
import headerImage from "../../img/music-festival/header-dcl-music.svg"
import { breakpoints } from "../../utils/theme"
// import { breakpoints } from "../../utils/theme"

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <Header>
          <img src={headerImage} alt="header icon" rel="noopener" />
        </Header>
        {/* Main Title */}
        <SaveTheDate>Save the Date</SaveTheDate> {/* New Text */}
        <Line />
        <StyledLogo src={headerDclLogo} />
        <Line />
        <EventDate>November 20-23</EventDate>
        {/* Bottom Section */}
        <BottomSection>
          <RSVPButton
            href="https://decentraland.org/events/event/?id=9831c4be-4f94-4bb2-a828-8f48d28a1520"
            target="_blank"
            rel="noopener"
          >
            <h3>RSVP</h3>
          </RSVPButton>
        </BottomSection>
      </HeroContainer>
    </StyledHero>
  )
}

const SaveTheDate = styled.p`
  font-family: "InterMedium", sans-serif;
  font-size: 32px;
  color: white;
  text-transform: none;
  font-weight: 600;
  margin-bottom: 24px; /* Add space between this text and the line below */
  margin-top: 48px; /* Reset margin on top */
`

const StyledHero = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`

const HeroContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin-inline: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 180px;

  @media (min-width: ${breakpoints.s}) {
    margin-top: 120px;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 80px;
  }

  /* Pseudo-element for the gradient border */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0; /* Ensure it is behind the content */
    border-radius: inherit; /* Inherit border-radius from the container */
    padding: 2px; /* Same width as the border you want */
    background: linear-gradient(90deg, #ff00ff, #00ffcc);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0); /* Mask to clip background */
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }
`

const Header = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: -3px;
  left: 0;
  transform: scale(1.01); /* Scale the image */

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const EventDate = styled.p`
  position: relative;
  top: -2px;
  font-family: "InterMedium", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: 12px 24px;
  background-image: url(${frameDate});
  background-size: cover;
  background-size: contain;
  background-position: top center;
  margin-bottom: 24px;
  background-repeat: no-repeat;
`

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-block: 16px;
  padding: 0 20px;
`

const StyledLogo = styled.img`
  width: 100%;
  padding: 32px;
  max-width: 700px;
  height: auto;
`

// const DCLLogoItem = styled.img`
//   max-width: 100px;
// `

const Line = styled.div`
  position: relative;
  width: calc(100% + 40px); /* Extend the line slightly beyond the container */
  height: 2px;
  background: linear-gradient(90deg, #ff00ff, #00ffcc); /* Gradient */
  margin: 0 -20px; /* Shift it left and right by the padding size */
`

const RSVPButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: "InterMedium", sans-serif;
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: 700;
  color: black !important;
  border-radius: 32px; /* Bordes curvados */
  padding: 10px;
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  line-height: 20px;
  width: 100%;
  max-width: 180px;

  background: linear-gradient(
    -90deg,
    #3effa3 2.3%,
    #56a7ff 51.15%,
    #fb01ff 100%
  );

  > h3 {
    z-index: 2;
    color: black;
  }

  &:hover {
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.4),
      0 0 10px violet,
      0 0 5px blue;
  }
`

// eslint-disable-next-line import/no-default-export
export default Hero
