// Styles
import styled, { keyframes } from "styled-components"
// Assets
import MusicFestivalLogo from "./MusicFestivalLogo.js"
import herobg from "../../public/images/hero/bg1-web.png"
import barBottom from "../../public/images/music-festival/bar-bottom.png"
import barTop from "../../public/images/music-festival/bar-top.png"
import bgWeb from "../../public/images/music-festival/bg-web.png"
import logo from "../../public/images/music-festival/decentraland-logo.png"
import wiggle from "../../public/images/music-festival/wiggle.png"

const Hero = () => {
  return (
    <StyledHero>
      <InnerHero>
        <img src={barTop} alt="hero background" />
        <Content>
          <h4>Save The Date</h4>
          <div className="logo">
            <MusicFestivalLogo />
          </div>
          <div className="wiggle">
            <img src={wiggle} alt="hero background" />
          </div>
          <div className="dates">
            <span className="date">
              <span>From</span>
              <span>
                <h5>Wed</h5>
                <h5>Nov</h5>
                <h5>20</h5>
              </span>
            </span>

            <span className="date">
              <span>To</span>
              <span>
                <h5>Sat</h5>
                <h5>Nov</h5>
                <h5>23</h5>
              </span>
            </span>
          </div>

          <div className="bottom">
            <img src={logo} alt="hero background" />
            <a>RSVP</a>
          </div>
        </Content>
        <img src={barBottom} alt="hero background" />
      </InnerHero>
    </StyledHero>
  )
}

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-item: center;
  width: 100%;
  background-image: url(${bgWeb});
  // background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-size: cover;
    background-position: center;
  }
`

const InnerHero = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0.65);

  @media (min-width: 468px) {
    transform: scale(1);
  }

  > h4:is(:first-child) {
    border-bottom: 2px solid white;
    padding-bottom: 8px;
    text-align: left;
    width: 100%;
  }

  > .logo {
    padding-block: 40px;
    svg {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation:
        ${draw} 2s ease-in-out forwards,
        ${fadeIn} 2s ease-in-out;
    }
  }

  > .wiggle {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid white;
    padding-bottom: 8px;
  }

  > .dates {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 24px;
    gap: 8px;
    border-bottom: 2px solid white;

    > .date {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      > span:last-child {
        display: flex;
        gap: 8px;
        align-items: center;
        h5 {
          font-size: 32px;
          font-weight: 300;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      padding: 8px 16px;
      color: black;
      border-radius: 60px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid white;
      color: white;
      cursor: pointer;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: 2px;
    }
  }
`
export default Hero
