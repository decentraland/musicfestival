import styled from "styled-components"
import bgHero from "../../../public/img/music-festival/bg-mf-new.png"
import frameDate from "../../../public/img/music-festival/DCL_MF24_contenedores_desktop 1_transparent.png"
// import { breakpoints } from "../../utils/theme.js"

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <Header>
          <img
            src={"../../../public/img/music-festival/header-dcl-music.svg"}
            alt="header icon"
            rel="noopener"
          />
        </Header>
        {/* Main Title */}
        <SaveTheDate>Save the Date</SaveTheDate> {/* New Text */}
        <Line />
        <StyledLogo
          src={"../../../public/img/music-festival/dcl-logo-new.svg"}
        />
        <Line />
        <EventDate>November 20-23</EventDate>
        {/* Bottom Section */}
        <BottomSection>
          {/* <DCLLogoItem
            src={"../../../public/img/music-festival/decentraland-logo.png"}
          /> */}
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
  overflow: hidden; /* Hide overflow content */
`

const HeroContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 2.5px solid transparent;
  position: relative;

  border-image: linear-gradient(90deg, #ff00ff, #00ffcc) 1;
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* Hide overflow content */
  margin-inline: 12px;
`

const Header = styled.div`
  position: absolute;
  width: 100%;
  top: -5px;
  left: 0;
  transform: scale(1.01); /* Scale the image */

  > img {
    width: 100%;
  }
`

const EventDate = styled.p`
  position: relative;
  top: -2px;
  font-family: "InterMedium", sans-serif;
  font-size: 20px;
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
  margin-top: 40px;
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
