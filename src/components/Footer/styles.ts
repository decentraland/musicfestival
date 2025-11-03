import { motion } from "framer-motion"
import { styled } from "styled-components"
import { breakpoints } from "../../utils/theme"

const StyledFooter = styled(motion.section).attrs({})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(10, 9, 43, 1);
`

const FooterLeft = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 72px;
  width: 50%;

  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 42px;
    align-items: flex-start;
    width: 100%;
  }
`

const FooterText = styled(motion.a).attrs({})`
  color: #efefef;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  max-width: 90px;
  cursor: pointer;
  width: fit-content;

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`

const SocialIcon = styled(motion.a).attrs({})`
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  transition: opacity 0.4s ease;

  :hover {
    opacity: 0.7;
    transition: opacity 0.4s ease;
    will-change: opacity;
  }

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: white;
      transition: fill 0.4s ease;
    }
  }
`

const Nav = styled(motion.nav).attrs({})`
  width: 100%;
  display: flex;
  padding: 60px 24px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 72px;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 40px;
  }
`

const LogoContainer = styled(motion.a).attrs({})`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LogoImage = styled(motion.img).attrs({})`
  height: 40px;
  width: auto;

  @media (max-width: ${breakpoints.md}) {
    height: 72px;
  }
`

const SocialIconsWrapper = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  gap: 16px;
`

export {
  StyledFooter,
  FooterLeft,
  FooterText,
  SocialIcon,
  Nav,
  LogoContainer,
  LogoImage,
  SocialIconsWrapper,
}
