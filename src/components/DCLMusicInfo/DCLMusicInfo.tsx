import { styled } from "styled-components"
import bgHero2 from "../../img/music-festival/bg-hero-2.png"
import DclBullet from "../../img/music-festival/dcl-bullet.png"
import DMF25Logo from "../../img/music-festival/DMF25-Logo.svg"
import { DownloadLink } from "../DownloadButton"
import { Faq } from "../Faq/Faq.styled"
import { StyledLogo } from "../Hero/Hero"

const DCLMusicInfo = () => {
  return (
    <StyledHero id="about">
      <HeroContainer>
        <InfoContainer>
          <StyledLogo src={DMF25Logo} />
          <p>
            Enter Decentraland on 20-23 November and teleport to an <b>EDM</b>{" "}
            <b>festival</b> like no other:
          </p>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Experience <b>4 days of exclusive sets</b> from international DJs
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Discover <b>the future of electronic music</b> with immersive
              visuals, live VIP talks & virtual expo
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Collect <b>15+ free special edition Wearables & Emotes</b>
            </h5>
          </InfoItem>

          <p>
            Get ready by downloading the new version of <b>Decentraland—</b> the
            virtual social world with smooth performance and stunning visuals.
            Entry is free— jump in from anywhere!
          </p>
        </InfoContainer>
        <DownloadLink useJump />
        <Faq />
      </HeroContainer>
    </StyledHero>
  )
}

const StyledHero = styled.div`
  position: relative;
  min-height: 240vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  background-image: url(${bgHero2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeroContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 100px;
  margin-bottom: 50px;

  > img {
    width: 100%;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  > p {
    letter-spacing: 1.5px;
    line-height: 1.25;
    font-weight: 300;
    font-size: 21px;
  }
`

const InfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  align-items: baseline;
  font-weight: 300;

  > p {
    font-family: "Inter", sans-serif !important;
  }

  > img {
    width: 12px;
    position: relative;
  }

  > h5 {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    font-family: "Inter", sans-serif !important;
    font-size: 21px;
  }
`
export { DCLMusicInfo }
