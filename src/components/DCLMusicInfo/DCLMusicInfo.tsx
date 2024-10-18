import { styled } from "styled-components"
import bgHero2 from "../../img/music-festival/bg-hero-2.png"
import DclBullet from "../../img/music-festival/dcl-bullet.png"
import headerDclLogo from "../../img/music-festival/DMF24-Logo.png"
import { DownloadLink } from "../DownloadButton"
import { Faq } from "../Faq/Faq"
import { StyledLogo } from "../Hero/Hero"
import { BannerMarquee } from "../Marquee/Marquee"

const DCLMusicInfo = () => {
  return (
    <StyledHero id="about">
      <MarqueeContainer>
        <BannerMarquee />
      </MarqueeContainer>
      <HeroContainer>
        <InfoContainer>
          <StyledLogo src={headerDclLogo} />
          <p>
            Save the Date: Jump into <b>Decentraland</b> November 20-23 for the
            4th edition of the virtual <b>Decentraland Music Festival</b> &
            embark on a cosmic EDM journey across the galaxy.
          </p>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Dance across <b>4 days of exclusive</b> sets from international
              DJs.
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Connect with <b>EDM innovators & fans</b> from around the world.
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Collect <b>10+ free, special edition Wearables & Emotes</b>
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Explore <b>immersive interstellar visuals</b> and two new parkour
              runs.
            </h5>
          </InfoItem>

          <InfoItem>
            <img src={DclBullet} alt="Decentraland Bullet" />
            <h5>
              Discover the <b>latest developments in electronic music</b> at
              live panel talks & expo booths.
            </h5>
          </InfoItem>
          <p>
            Save the Date: Jump into <b>Decentraland</b> November 20-23 for the
            4th edition of the virtual <b>Decentraland Music Festival</b> &
            embark on a cosmic EDM journey across the galaxy.
          </p>
        </InfoContainer>
        <DownloadLink />
        <Faq />
      </HeroContainer>
    </StyledHero>
  )
}

const MarqueeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledHero = styled.div`
  position: relative;
  min-height: 240vh;
  display: flex;
  align-items: center;
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
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
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
  }
`

const InfoItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  font-weight: 300;

  > p {
    font-family: "Inter", sans-serif !important;
  }

  > img {
    width: 12px;
    position: relative;
    bottom: -4px;
  }

  > h5 {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
  }
`
export { DCLMusicInfo }
