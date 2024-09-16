// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components"
// import Button from "./Button"
// import { Container } from "./Container"
// import dclLogo from "../../images/music-festival/decentraland-logo.png"
import DclBullet from "../../../public/img/music-festival/dcl-bullet.png"
import logo from "../../../public/img/music-festival/info-dcl-logo.png"
// import DclBullet from "../images/dcl-bullet.png"
import bgHero from "../../../public/img/music-festival/music-info-bg.png"
import signUpNasa from "../../../public/img/music-festival/sign-u-nasa.png"
import { BannerMarquee } from "../Marquee/Marquee"
// import { breakpoints } from "../../utils/theme.js"

const DCLMusicInfo = () => {
  return (
    <StyledHero>
      <MarqueeContainer>
        <BannerMarquee />
      </MarqueeContainer>
      <HeroContainer>
        <InfoContainer>
          <img src={logo} alt="Decentraland Music Festival" />
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
          <NewsletterButton
            href="https://decentraland.beehiiv.com/subscribe?utm_source=musicfestival.decentraland.org&utm_medium=organic&utm_campaign=DCLMF24"
            target="_blank"
            rel="noopener"
          >
            <img
              src={signUpNasa}
              alt="Sign Up for the Decentraland Newsletter"
            />
          </NewsletterButton>
        </InfoContainer>
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${bgHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeroContainer = styled.div`
  max-width: 600px;
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

  > img {
    width: 100%;
    margin-bottom: 12px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  border-image: linear-gradient(90deg, #ff00ff, #00ffcc) 1;

  /* Radio de borde solo en las esquinas inferiores */
  border-radius: 8px;
  background-clip: padding-box;

  /* Color de fondo con transparencia */
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px;

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

  > img {
    width: 20px;
    position: relative;
    top: -4px;
  }

  > h5 {
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
  }
`

const NewsletterButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 12px 24px !important;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #3effa3 0%, #56a7ff 50%, #fb01ff 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.4s ease;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  min-width: 60px;

  > img {
    width: 100%;
  }

  &:hover {
    color: black;
    background-color: #f37877;
    box-shadow:
      0 0 20px #fff,
      0 0 10px violet,
      0 0 5px blue;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
    height: 36px;
    margin-top: px; /* Smaller top margin for larger screens */
    margin-bottom: 8px; /* Smaller bottom margin for larger screens */
  }
`

export { DCLMusicInfo }
