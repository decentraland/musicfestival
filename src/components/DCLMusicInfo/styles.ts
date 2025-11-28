import { motion } from "framer-motion"
import { styled } from "styled-components"
import dclMusicInfoBg from "../../img/about/bg.webp"

const StyledHero = styled(motion.div).attrs({})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 120px 0px;
  background: rgba(26, 13, 62, 0.9);
  backdrop-filter: blur(20px);
  background-image: url(${dclMusicInfoBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 60px 0px;
  }
`

const HeroContainer = styled(motion.div).attrs({})`
  max-width: 1200px;
  width: 100%;
  position: relative;
`

const ContentWrapper = styled(motion.div).attrs({})`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 72px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 24px;
    gap: 40px;
    grid-template-columns: 1fr;
  }
`

const LightStickImage = styled(motion.img).attrs({})`
  width: 100%;
`

const LeftContent = styled(motion.div).attrs({})`
  grid-column: 1 / 3;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`

const RightContent = styled(motion.div).attrs({})`
  grid-column: 3 / 6;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    grid-column: 1;
  }
`

const RightImage = styled(motion.img).attrs({})`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`

const TitleWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  flex-wrap: nowrap;
  overflow: visible;
`

const TitleLightStick = styled(motion.img).attrs({})`
  position: static;
  width: 120px;
  flex: 0 0 120px;
  pointer-events: none;
  user-select: none;

  @media (max-width: 1024px) {
    width: 120px;
    flex-basis: 120px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled(motion.h2).attrs({})`
  font-family: "Ethnocentric", sans-serif;
  font-size: 56px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-transform: uppercase;
  width: auto;
  margin: 0;
  /* soft glow similar to Credit List headings */
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.45),
    0 0 16px rgba(255, 255, 255, 0.35),
    0 0 32px rgba(255, 255, 255, 0.25);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const Description = styled(motion.p).attrs({})`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 300;
  margin: 0;
  opacity: 0.95;
  margin-top: -8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const BulletList = styled(motion.div).attrs({})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const BulletItem = styled(motion.div).attrs({})`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const BulletIcon = styled(motion.img).attrs({})`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 4px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`

const BulletText = styled(motion.p).attrs({})`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin: 0;
  text-align: left;
`

const TextGradient = styled(motion.span).attrs({})`
  background: linear-gradient(90deg, #ffffff 0%, #0ff3f2 70.67%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline;
`

const RightBadge = styled(motion.div).attrs({})`
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: flex-start;
  }
`

const BadgeContent = styled(motion.div).attrs({})`
  font-family: "Ethnocentric", sans-serif;
  font-size: 16px;
  letter-spacing: -0.5px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export {
  StyledHero,
  HeroContainer,
  ContentWrapper,
  LeftContent,
  RightContent,
  RightImage,
  Title,
  Description,
  BulletList,
  BulletItem,
  BulletIcon,
  BulletText,
  TextGradient,
  RightBadge,
  BadgeContent,
  LightStickImage,
  TitleWrapper,
  TitleLightStick,
}
