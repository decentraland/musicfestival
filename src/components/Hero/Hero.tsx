import { useEffect, useState } from "react"
import {
  ArrowBox,
  BottomSection,
  CharacterImage,
  DateBadge,
  DateBox,
  Description,
  DiamondImage,
  EndBox,
  FeatureItem,
  FeatureRow,
  FeaturesList,
  HeroContainer,
  LeftColumn,
  LogoWrapper,
  MainContentRow,
  OpenLine,
  OpenLineWrapper,
  OpenToEveryone,
  OpenToEveryoneContent,
  OpenToEveryoneIcon,
  RightColumn,
  SeparatorIcon,
  SeparatorLine,
  SignupBox,
  SignupButton,
  SignupContent,
  SignupSubtitle,
  SignupTitle,
  StarsBlurred,
  StarsContainer,
  StarsImage,
  StyledHero,
  StyledLogo,
  Tagline,
} from "./styles"
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
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: scrollY * 0.2,
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 1, delay: 0 },
          scale: { duration: 1, delay: 0.5 },
        }}
      />
      <HeroContainer>
        {/* Main Content Row - Two Columns */}
        <MainContentRow>
          {/* Left Column */}
          <LeftColumn>
            <OpenToEveryone
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
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

            <LogoWrapper
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
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

            <BottomSection
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
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
            <DateBadge
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
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
          <SignupBox
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
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

export { Hero, StyledLogo, DiamondImage }
