import { motion } from "framer-motion"
import { styled } from "styled-components"

const StyledHero = styled(motion.div).attrs({})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 120px 0px;
  background: rgba(26, 13, 62, 0.9);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`

const HeroContainer = styled(motion.div).attrs({})`
  max-width: 1200px;
  width: 100%;
  position: relative;
`

const ContentWrapper = styled(motion.div).attrs({})`
  position: relative;
  display: flex;
  gap: 72px;
  padding: 60px;
  background: rgba(26, 13, 62, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 30px;
    gap: 40px;
  }
`

const LeftContent = styled(motion.div).attrs({})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const RightContent = styled(motion.div).attrs({})`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

const RightImage = styled(motion.img).attrs({})`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const Title = styled(motion.h2).attrs({})`
  font-family: "Ethnocentric", sans-serif;
  font-size: 42px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const Description = styled(motion.p).attrs({})`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 300;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const BulletList = styled(motion.div).attrs({})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
  gap: 20px;
  margin-top: 12px;
`

const BulletItem = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const BulletIcon = styled(motion.img).attrs({})`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  margin-top: 4px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`

const BulletText = styled(motion.p).attrs({})`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const RightBadge = styled(motion.div).attrs({})`
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: center;
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
  RightBadge,
  BadgeContent,
}
