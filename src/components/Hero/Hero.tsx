import { useEffect, useState } from "react"
import { styled } from "styled-components"
import bgHero from "../../img/hero/bg.jpg"
import dateArrow from "../../img/hero/date-arrow.svg"
import lightstickImage from "../../img/hero/lightstick.png"
import openToEveryoneIcon from "../../img/hero/open-to-everyone.svg"
import DMF25Logo from "../../img/music-festival/DMF25-Logo.svg"
import bgHeroMobile from "../../img/music-festival/hero-background-mobile.png"
import { breakpoints } from "../../utils/theme"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768)
    })
  }, [])

  return (
    <StyledHero>
      <BackgroundImage
        src={isMobile ? bgHeroMobile : bgHero}
        alt="background"
      />
      <HeroContainer>
        <TopRow>
          <OpenToEveryone>
            <OpenToEveryoneIcon
              src={openToEveryoneIcon}
              alt="DMF25 - Decentraland Music Festival 2025"
            />
            OPEN TO EVERYONE
          </OpenToEveryone>
          <DateBadge>
            <ArrowBox>
              <img src={dateArrow} alt="arrow" />
            </ArrowBox>
            <DateBox>DEC 3-6</DateBox>
            <DateBox>2025</DateBox>
          </DateBadge>
        </TopRow>

        {/* Main Content Row - Two Columns */}
        <MainContentRow>
          {/* Left Column */}
          <LeftColumn>
            <LogoWrapper>
              <StyledLogo src={DMF25Logo} alt="Decentraland Music Festival" />
              <Tagline>
                WHERE THE STREAM HITS
                <br />
                THE MAIN STAGE
              </Tagline>
              <Description>
                A four-day festival celebrating music born on stream, where fans
                and performers redefine &ldquo;going live.&rdquo;
              </Description>
            </LogoWrapper>

            <FeaturesList>
              <FeatureRow>
                <FeatureItem>STREAM-NATIVE LINEUP</FeatureItem>
                <Separator>«««</Separator>
                <FeatureItem>ICONIC STAGES</FeatureItem>
                <Separator>»»»</Separator>
                <FeatureItem>NO HEADSET NEEDED</FeatureItem>
              </FeatureRow>
              <FeatureRow>
                <FeatureItem>NEW FAN EXPERIENCES</FeatureItem>
                <Separator>«««</Separator>
                <FeatureItem>FREE TO ENTER</FeatureItem>
                <Separator>»»»</Separator>
                <FeatureItem>OPEN TO EVERYONE</FeatureItem>
              </FeatureRow>
            </FeaturesList>

            <StarRow>
              {[...Array(10)].map((_, i) => (
                <Star key={i}>✦</Star>
              ))}
            </StarRow>
          </LeftColumn>

          {/* Right Column - Character Image */}
          <RightColumn>
            <CharacterImage src={lightstickImage} alt="Festival Character" />
          </RightColumn>
        </MainContentRow>
      </HeroContainer>
      <SignupBox>
        <SignupContent>
          <SignupTitle>BE PART OF THE FESTIVAL</SignupTitle>
          <SignupSubtitle>
            Get updates, live event alerts and more.
          </SignupSubtitle>
        </SignupContent>
        <SignupButton>SIGN UP NOW</SignupButton>
      </SignupBox>
    </StyledHero>
  )
}

// Top Row Components
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  position: relative;
  z-index: 5;

  @media (max-width: ${breakpoints.md}) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
`

const OpenToEveryone = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Ethnocentric", sans-serif;
  letter-spacing: -1px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 18px;
  }
`

const OpenToEveryoneIcon = styled.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
  margin-right: 0.5rem;
`

const DateBadge = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    gap: 0;
  }
`

const ArrowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 8px 16px;
  border: 1px solid white;
  border-right: none;

  img {
    height: 20px;
    width: auto;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 6px 12px;

    img {
      height: 16px;
    }
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 4px 8px;

    img {
      height: 14px;
    }
  }
`

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border: 1px solid white;
  border-left: none;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: bold;
  background: transparent;
  min-width: 100px;

  &:first-of-type {
    border-left: none;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 18px;
    padding: 6px 16px;
    min-width: 80px;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 14px;
    padding: 4px 12px;
    min-width: 70px;
  }
`

// Main Content Row Components
const MainContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 60px;
  gap: 60px;
  z-index: 2;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    padding: 20px;
    gap: 30px;
  }
`

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 25px;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-left: 3rem;
`

const Tagline = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -1px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 22px;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 20px;
  }
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: -0.5px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

const FeatureItem = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;

  @media (max-width: ${breakpoints.s}) {
    font-size: 11px;
  }
`

const Separator = styled.span`
  color: cyan;
  font-size: 16px;

  @media (max-width: ${breakpoints.s}) {
    font-size: 12px;
  }
`

const StarRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: ${breakpoints.s}) {
    gap: 10px;
  }
`

const Star = styled.span`
  font-size: 24px;
  color: white;
  opacity: 0.8;

  @media (max-width: ${breakpoints.s}) {
    font-size: 18px;
  }
`

const CharacterImage = styled.img`
  position: absolute;
  height: 90vh;
  width: auto;
  bottom: 0;
  right: 0;
  z-index: 1;
  object-fit: contain;
`

const SignupBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: rgba(38, 6, 81, 0.3);
  backdrop-filter: blur(12px);
  position: absolute;
  bottom: 40px;
  right: 40px;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  z-index: 10;

  @media (max-width: ${breakpoints.md}) {
    bottom: 20px;
    right: 20px;
    left: 20px;
    max-width: none;
    padding: 15px 20px;
    gap: 15px;
  }

  @media (max-width: ${breakpoints.s}) {
    flex-direction: column;
    gap: 10px;
    padding: 15px;
  }
`

const SignupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
  flex: 1;

  @media (max-width: ${breakpoints.s}) {
    text-align: center;
  }
`

const SignupTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.05em;
  line-height: 1.2;

  @media (max-width: ${breakpoints.s}) {
    font-size: 14px;
  }
`

const SignupSubtitle = styled.p`
  font-size: 15px;
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;

  @media (max-width: ${breakpoints.s}) {
    font-size: 13px;
  }
`

const SignupButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 28px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 32px;
  cursor: pointer;
  letter-spacing: 0.08em;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.1),
    inset 2px 2px 3px rgba(255, 255, 255, 0.15),
    inset -1px -1px 2px rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow:
      0 3px 10px rgba(0, 0, 0, 0.15),
      inset 2px 2px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 2px rgba(0, 0, 0, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 1px 1px 2px rgba(255, 255, 255, 0.1),
      inset -1px -1px 2px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 9px 24px;
    font-size: 12px;
    width: 100%;
  }
`

const StyledHero = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  z-index: 4;
  padding: 0;

  @media (max-width: ${breakpoints.md}) {
    padding: 0;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;

  @media (max-width: ${breakpoints.md}) {
    max-width: 400px;
  }

  @media (max-width: ${breakpoints.s}) {
    max-width: 300px;
  }
`

const DiamondImage = styled.img`
  height: 24px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 16px;
  }
`

export { Hero, StyledLogo, DiamondImage }
