import { styled } from "styled-components"
import separatorImage1 from "../../img/music-festival/cruz-separate-1.png"
import separatorImage2 from "../../img/music-festival/cruz-separate-2.png"
import separatorImage3 from "../../img/music-festival/cruz-separate-3.png"
import groupImage4 from "../../img/music-festival/dj-lag-icon.png"
import headerDclLogo from "../../img/music-festival/DMF24-Logo.png"
import bgHero from "../../img/music-festival/hero-background1.png"
import diamondImageLeft from "../../img/music-festival/left-diamond.png"
import groupImage2 from "../../img/music-festival/matzo-icon.png"
import diamondImage from "../../img/music-festival/middle-diamond.png"
import diamondImageRight from "../../img/music-festival/right-diamond.png"
import groupImage1 from "../../img/music-festival/sam-holo-icon.png"
import dateImage from "../../img/music-festival/top-date.png"
import groupImage3 from "../../img/music-festival/whipped-cream-icon.png"
import { breakpoints } from "../../utils/theme"
import { DownloadLink } from "../DownloadButton"

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <DateRow>
          <DiamondImage src={diamondImageLeft} alt="left diamond" />
          <DateImage src={dateImage} alt="November 20 - 23" />
          <DiamondImage src={diamondImageRight} alt="right diamond" />
        </DateRow>
        <StyledLogo src={headerDclLogo} />
        <ContentWrapper>
          <TextRow>
            <GroupText>
              <b>FREE</b> ENTRY
            </GroupText>
            <TextImage src={separatorImage1} alt="separator" />
            <GroupText>
              <b>EXCLUSIVE</b> SETS
            </GroupText>
            <TextImage src={separatorImage2} alt="separator" />
            <GroupText>
              EPIC <b>GIVEAWAYS</b>
            </GroupText>
            <TextImage src={separatorImage3} alt="separator" />
            <GroupText>
              LIVE <b>VIP</b> TALKS
            </GroupText>
          </TextRow>
          <DiamondLine>
            <DiamondImage src={diamondImage} alt="diamond" />
          </DiamondLine>
          <GroupImages>
            <GroupImage src={groupImage1} alt="group 1" />
            <GroupImage src={groupImage2} alt="group 2" />
            <GroupImage src={groupImage3} alt="group 3" />
            <GroupImage src={groupImage4} alt="group 4" />
          </GroupImages>
        </ContentWrapper>
        <GetReadyContainer>
          <GetReadyText>↓GET READY↓</GetReadyText>
        </GetReadyContainer>
        <DownloadLink />
      </HeroContainer>
    </StyledHero>
  )
}

const DateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}) {
    gap: 8px;
    margin-bottom: 24px;
  }
`

const DateImage = styled.img`
  height: 29px;
  width: 361px;

  @media (max-width: ${breakpoints.md}) {
    height: 24px;
    width: 300px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 20px;
    width: 250px;
  }
`

const TextRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  font-size: 19px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
    gap: 3px;
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 14px;
    flex-wrap: wrap;
  }
`

const TextImage = styled.img`
  height: 9px;

  @media (max-width: ${breakpoints.md}) {
    height: 7px;
  }
`

const GroupText = styled.p`
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: ${breakpoints.s}) {
    margin: 5px 0;
  }
`

const DiamondLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 44%;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #8a2be2;
    z-index: 1;
  }

  & > img {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 24px;
  }
`

const DiamondImage = styled.img`
  height: 24px;

  @media (max-width: ${breakpoints.md}) {
    height: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 16px;
  }
`

const GroupImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: ${breakpoints.md}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.s}) {
    gap: 8px;
  }
`

const GroupImage = styled.img`
  height: 74px;

  @media (max-width: ${breakpoints.md}) {
    height: 60px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 50px;
  }
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
  height: auto;
  max-width: 800px;
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 180px;
  padding: 20px;

  @media (min-width: ${breakpoints.s}) {
    margin-top: 120px;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 80px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 90%;
  }
`

const GetReadyContainer = styled.div`
  margin-bottom: 20px;
`

const GetReadyText = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 20px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 18px;
  }
`

const ContentWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${breakpoints.md}) {
    max-width: 90%;
  }
`

const StyledLogo = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;

  @media (max-width: ${breakpoints.md}) {
    max-width: 90%;
  }
`

export { Hero, StyledLogo }
