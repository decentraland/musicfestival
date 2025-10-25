import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { styled } from "styled-components"
import cyanArrowLeft from "../../img/hero/cyan-arrow-left.png"
import cyanArrowRight from "../../img/hero/cyan-arrow-right.svg"
import dateArrow from "../../img/hero/date-arrow.svg"
import lightstickImage from "../../img/hero/lightstick.png"
import openLine from "../../img/hero/open-line.svg"
import openToEveryoneIcon from "../../img/hero/open-to-everyone.svg"
import separator from "../../img/hero/separator.svg"
import starsBlurred from "../../img/hero/stars-blured.png"
import stars from "../../img/hero/stars.png"
import DMF25Logo from "../../img/music-festival/DMF25-Logo.svg"
import { breakpoints } from "../../utils/theme"

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StyledHero>
      <CharacterImage
        src={lightstickImage}
        alt="Festival Character"
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          y: scrollY * 0.3,
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1, delay: 0.5 },
          scale: { duration: 1, delay: 0.5 },
          y: { duration: 0, delay: 0 },
        }}
      />
      <HeroContainer>
        {/* Main Content Row - Two Columns */}
        <MainContentRow>
          {/* Left Column */}
          <LeftColumn>
            <OpenToEveryone>
              <OpenToEveryoneContent>
                <OpenToEveryoneIcon
                  src={openToEveryoneIcon}
                  alt="DMF25 - Decentraland Music Festival 2025"
                />
                OPEN TO EVERYONE
              </OpenToEveryoneContent>
              <OpenLineWrapper>
                <OpenLine src={openLine} alt="" />
                <EndBox />
              </OpenLineWrapper>
            </OpenToEveryone>

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

            <BottomSection>
              <FeaturesList>
                <FeatureRow>
                  <FeatureItem>STREAM-NATIVE LINEUP</FeatureItem>
                  <SeparatorIcon src={cyanArrowLeft} alt="" />
                  <FeatureItem>ICONIC STAGES</FeatureItem>
                  <SeparatorIcon src={cyanArrowRight} alt="" />
                  <FeatureItem>NO HEADSET NEEDED</FeatureItem>
                </FeatureRow>
                <SeparatorLine src={separator} alt="" />
                <FeatureRow>
                  <FeatureItem>NEW FAN EXPERIENCES</FeatureItem>
                  <SeparatorIcon src={cyanArrowLeft} alt="" />
                  <FeatureItem>FREE TO ENTER</FeatureItem>
                  <SeparatorIcon src={cyanArrowRight} alt="" />
                  <FeatureItem>OPEN TO EVERYONE</FeatureItem>
                </FeatureRow>
              </FeaturesList>

              <StarsContainer>
                <StarsBlurred src={starsBlurred} alt="" />
                <StarsImage src={stars} alt="" />
              </StarsContainer>
            </BottomSection>
          </LeftColumn>

          {/* Right Column */}
          <RightColumn>
            <DateBadge>
              <ArrowBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <img src={dateArrow} alt="arrow" />
              </ArrowBox>
              <DateBox>DEC 3-6</DateBox>
              <DateBox>2025 {/* TODO: Add the year dynamically */}</DateBox>
            </DateBadge>
          </RightColumn>
          <SignupBox>
            <SignupContent>
              <SignupTitle>BE PART OF THE FESTIVAL</SignupTitle>
              <SignupSubtitle>
                Get updates, live event alerts and more.
              </SignupSubtitle>
            </SignupContent>
            <SignupButton>SIGN UP NOW</SignupButton>
          </SignupBox>
        </MainContentRow>
      </HeroContainer>
    </StyledHero>
  )
}

// Top Components
const OpenToEveryone = styled(motion.div).attrs({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
})`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

const OpenToEveryoneContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Ethnocentric", sans-serif;
  letter-spacing: -1px;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }
`

const OpenToEveryoneIcon = styled.img`
  height: 28px;
  width: 28px;
  object-fit: contain;

  @media (max-width: ${breakpoints.md}) {
    height: 24px;
    width: 24px;
  }
`

const OpenLineWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
  gap: 0;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    margin-left: 0;
  }
`

const OpenLine = styled.img`
  width: 100%;
  height: 2px;
  flex: 1;

  @media (max-width: ${breakpoints.md}) {
    height: 1.5px;
  }
`

const EndBox = styled.div`
  width: 8px;
  height: 8px;
  background: white;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}) {
    width: 6px;
    height: 6px;
  }
`

const DateBadge = styled(motion.div).attrs({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
})`
  display: flex;
  align-items: stretch;
  gap: 0;
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    gap: 0;
  }
`

const ArrowBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 8px 16px;
  border: 1px solid white;
  border-right: none;
  overflow: hidden;

  img {
    height: 28px;
    width: auto;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 6px 12px;

    img {
      height: 28px;
    }
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 4px 8px;

    img {
      height: 28px;
    }
  }
`

const DateBox = styled(motion.div)`
  display: grid;
  place-items: center;
  font-family: "Ethnocentric", sans-serif;
  line-height: 1;
  letter-spacing: -1px;
  padding: 10px 20px;
  border: 1px solid white;
  border-left: none;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  background: transparent;
  min-width: 90px;
  overflow: hidden;

  &:first-of-type {
    border-left: none;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 18px;
    padding: 8px 16px;
    min-width: 80px;
    transform: translateY(-1px);
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 14px;
    padding: 6px 12px;
    min-width: 70px;
    transform: translateY(-1px);
  }
`

// Main Content Row Components
const MainContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 40px 60px 80px 60px;
  gap: 60px;
  flex: 1;
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

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    gap: 25px;
  }
`

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    height: auto;
    align-items: center;
  }
`

const LogoWrapper = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
})`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;

  @media (max-width: ${breakpoints.md}) {
    padding-left: 1rem;
  }
`

const Tagline = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: -1px;
  margin-top: 2rem;
  margin-bottom: 0.5rem;

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
  max-width: 500px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`

const BottomSection = styled(motion.div).attrs({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 8px;
  align-items: flex-start;
`

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoints.s}) {
    gap: 8px;
  }
`

const FeatureItem = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;

  @media (max-width: ${breakpoints.s}) {
    font-size: 11px;
  }
`

const SeparatorIcon = styled.img`
  height: 12px;
  width: auto;
  object-fit: contain;

  @media (max-width: ${breakpoints.s}) {
    height: 10px;
  }
`

const SeparatorLine = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 4px 0;

  @media (max-width: ${breakpoints.s}) {
    max-width: 100%;
  }
`

const StarsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 40px;

  @media (max-width: ${breakpoints.s}) {
    max-width: 100%;
    height: 32px;
  }
`

const StarsBlurred = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: left;
`

const StarsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: left;
  padding-left: 8px;
  padding-right: 8px;
`

const CharacterImage = styled(motion.img)`
  position: absolute;
  height: 85vh;
  width: auto;
  bottom: 0;
  right: 5%;
  z-index: 3;
  object-fit: contain;
  pointer-events: none;
  will-change: transform;

  @media (max-width: ${breakpoints.md}) {
    height: 60vh;
    right: 0;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 50vh;
    right: -10%;
  }
`

const SignupBox = styled(motion.div).attrs({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
})`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: rgba(38, 6, 81, 0.3);
  backdrop-filter: blur(12px);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding-top: 72px;
  background: transparent;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  max-width: 1600px;
  z-index: 4;
  padding: 0;
  height: 100%;
  padding-top: 32px;
  padding-bottom: 32px;

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
