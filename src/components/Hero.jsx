import styled from "styled-components"
import DCLLogoPath from "../../public/dcl-logo-new.svg"
import { breakpoints } from "../../utils/theme"
import bgHero from "../images/bg-hero.png"
import header from "../images/header-dcl-music.svg"

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <Header>
          <img src={header} alt="Icon 1" />
        </Header>
        {/* Main Title */}
        <SaveTheDate>Save the Date</SaveTheDate> {/* New Text */}
        <Line />
        <StyledLogo src={DCLLogoPath} />
        <Line />
        <EventDate>November 20-23</EventDate>
        {/* Bottom Section */}
        <BottomSection>
          <DCLLogoItem src={"../public/decentraland-logo.png"} />
          <RSVPButton
            href="https://decentraland.org/events/event/?id=9831c4be-4f94-4bb2-a828-8f48d28a1520"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSVP
          </RSVPButton>
        </BottomSection>
      </HeroContainer>
    </StyledHero>
  )
}

const SaveTheDate = styled.p`
  font-family: "InterMedium", sans-serif;
  font-size: 20px;
  color: white;
  text-transform: none;
  margin-bottom: 24px; /* Add space between this text and the line below */
  margin-top: 48px; /* Reset margin on top */
`

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
  overflow: hidden; /* Hide overflow content */
`

const HeroContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1.5px solid transparent;
  position: relative;

  border-image: linear-gradient(90deg, #ff00ff, #00ffcc) 1;
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, 0.9);
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* Hide overflow content */
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
  font-family: "InterMedium", sans-serif;
  font-size: 20px;
  color: white;
  text-align: center;
  width: fit-content;
  margin: 0 auto; /* Alinea al centro */
  padding: 12px 24px; /* Añade padding para dar espacio al contenido */

  /* Solo bordes izquierdo, derecho y abajo */
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 2px solid transparent;

  /* Bordes con gradiente */
  border-image: linear-gradient(90deg, #3effa3 0%, #56a7ff 50%, #fb01ff 100%);
  border-image-slice: 1;

  /* Borde superior inexistente */
  border-top: none;

  /* Radios de las esquinas inferiores */
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

const BottomSection = styled.div`
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: space-between; /* Space between logo and button */
  width: 100%; /* Ensure full width */
  margin-top: 40px;
  padding: 0 20px; /* Optional: Add horizontal padding */
`

const StyledLogo = styled.img`
  width: 100%;
  padding: 32px;
  max-width: 700px;
  height: auto; /* Maintain aspect ratio */
`

const DCLLogoItem = styled.img`
  max-width: 100px;
`

const Line = styled.div`
  position: relative;
  width: calc(100% + 40px); /* Extend the line slightly beyond the container */
  height: 1.5px;
  background: linear-gradient(90deg, #ff00ff, #00ffcc); /* Gradient */
  margin: 0 -20px; /* Shift it left and right by the padding size */
`

const RSVPButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px 24px !important;
  font-family: "InterMedium", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  color: white;
  border: 1.5px solid; /* Ancho del borde */
  border-image: linear-gradient(90deg, #3effa3 0%, #56a7ff 50%, #fb01ff 100%);
  border-image-slice: 1; /* Permite que el gradiente cubra todo el borde */
  transition: all 0.4s ease;
  text-decoration: none;
  cursor: pointer;
  min-width: 60px; /* Asegura un ancho mínimo para un tamaño adecuado del botón */
  height: 15px; /* Altura fija */
  text-align: center;
  line-height: 20px; /* Ajusta el line-height para centrar el texto verticalmente */

  &:hover {
    box-shadow:
      0 0 20px rgba(255, 255, 255, 0.4),
      0 0 10px violet,
      0 0 5px blue;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 16px;
    padding: 12px 24px;
    height: 36px;
    margin-top: 0; /* Ajusta márgenes en pantallas más grandes */
    margin-bottom: 8px;
  }
`

// eslint-disable-next-line import/no-default-export
export default Hero
