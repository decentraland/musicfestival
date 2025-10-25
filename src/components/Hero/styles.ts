import { motion } from "framer-motion"
import { styled } from "styled-components"
import { breakpoints } from "../../utils/theme"

const StyledHero = styled(motion.div).attrs({})`
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

const HeroContainer = styled(motion.div).attrs({})`
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

const CharacterImage = styled(motion.img).attrs({})`
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

const MainContentRow = styled(motion.div).attrs({})`
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

const LeftColumn = styled(motion.div).attrs({})`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
    gap: 25px;
  }
`

const RightColumn = styled(motion.div).attrs({})`
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

const OpenToEveryone = styled(motion.div).attrs({})`
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

const OpenToEveryoneContent = styled(motion.div).attrs({})`
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

const OpenToEveryoneIcon = styled(motion.img).attrs({})`
  height: 28px;
  width: 28px;
  object-fit: contain;

  @media (max-width: ${breakpoints.md}) {
    height: 24px;
    width: 24px;
  }
`

const OpenLineWrapper = styled(motion.div).attrs({})`
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

const OpenLine = styled(motion.img).attrs({})`
  width: 100%;
  height: 2px;
  flex: 1;

  @media (max-width: ${breakpoints.md}) {
    height: 1.5px;
  }
`

const EndBox = styled(motion.div).attrs({})`
  width: 8px;
  height: 8px;
  background: white;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}) {
    width: 6px;
    height: 6px;
  }
`

const DateBadge = styled(motion.div).attrs({})`
  display: flex;
  align-items: stretch;
  gap: 0;
  font-weight: bold;

  @media (max-width: ${breakpoints.md}) {
    gap: 0;
  }
`

const ArrowBox = styled(motion.div).attrs({})`
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

const DateBox = styled(motion.div).attrs({})`
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

const LogoWrapper = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;

  @media (max-width: ${breakpoints.md}) {
    padding-left: 1rem;
  }
`

const StyledLogo = styled(motion.img).attrs({})`
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

const Tagline = styled(motion.h2).attrs({})`
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

const Description = styled(motion.p).attrs({})`
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: -0.5px;
  max-width: 500px;

  @media (max-width: ${breakpoints.md}) {
    font-size: 14px;
  }
`

const BottomSection = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FeaturesList = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 8px;
  align-items: flex-start;
`

const FeatureRow = styled(motion.div).attrs({})`
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

const FeatureItem = styled(motion.span).attrs({})`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.05em;

  @media (max-width: ${breakpoints.s}) {
    font-size: 11px;
  }
`

const SeparatorIcon = styled(motion.img).attrs({})`
  height: 12px;
  width: auto;
  object-fit: contain;

  @media (max-width: ${breakpoints.s}) {
    height: 10px;
  }
`

const SeparatorLine = styled(motion.img).attrs({})`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 4px 0;

  @media (max-width: ${breakpoints.s}) {
    max-width: 100%;
  }
`

const StarsContainer = styled(motion.div).attrs({})`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 40px;

  @media (max-width: ${breakpoints.s}) {
    max-width: 100%;
    height: 32px;
  }
`

const StarsBlurred = styled(motion.img).attrs({})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: left;
`

const StarsImage = styled(motion.img).attrs({})`
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

const SignupBox = styled(motion.div).attrs({})`
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

const SignupContent = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
  flex: 1;

  @media (max-width: ${breakpoints.s}) {
    text-align: center;
  }
`

const SignupTitle = styled(motion.h3).attrs({})`
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

const SignupSubtitle = styled(motion.p).attrs({})`
  font-size: 15px;
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;

  @media (max-width: ${breakpoints.s}) {
    font-size: 13px;
  }
`

const SignupButton = styled(motion.button).attrs({})`
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

const DiamondImage = styled(motion.img).attrs({})`
  height: 24px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 16px;
  }
`

export {
  StyledHero,
  HeroContainer,
  CharacterImage,
  MainContentRow,
  LeftColumn,
  RightColumn,
  OpenToEveryone,
  OpenToEveryoneContent,
  OpenToEveryoneIcon,
  OpenLineWrapper,
  OpenLine,
  EndBox,
  DateBadge,
  ArrowBox,
  DateBox,
  LogoWrapper,
  StyledLogo,
  Tagline,
  Description,
  BottomSection,
  FeaturesList,
  FeatureRow,
  FeatureItem,
  SeparatorIcon,
  SeparatorLine,
  StarsContainer,
  StarsBlurred,
  StarsImage,
  SignupBox,
  SignupContent,
  SignupTitle,
  SignupSubtitle,
  SignupButton,
  DiamondImage,
}
