import { motion } from "framer-motion"
import { styled } from "styled-components"
import { breakpoints } from "../../utils/theme"

const StyledFooter = styled(motion.section).attrs({})`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #131313;
`

const FooterLeft = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  width: 50%;
`

const FooterText = styled(motion.a).attrs({})`
  color: #efefef;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
`

const SocialIcon = styled(motion.a).attrs({})`
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  transition: transform 0.4s ease;

  :hover {
    transform: scale(1.1);
    transition: transform 0.4s ease;
    will-change: transform;
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: white;
      transition: fill 0.4s ease;
    }

    :hover path {
      fill: black;
    }
  }
`

const Nav = styled(motion.nav).attrs({})`
  width: 100%;
  display: flex;
  padding: 24px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 62px;
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
`

export {
  StyledFooter,
  FooterLeft,
  FooterText,
  SocialIcon,
  Nav,
  LogoContainer,
  LogoImage,
}
