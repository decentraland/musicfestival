import { motion } from "framer-motion"
import { styled } from "styled-components"
import { breakpoints } from "../../utils/theme"

const Header = styled(motion.header).attrs({})`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(32px);
  z-index: 100;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const StyledNavbar = styled(motion.section).attrs({})`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`

const Nav = styled(motion.nav).attrs({})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 16px 40px;
  }
`

const LeftSection = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 48px;
  }
`

const LogoContainer = styled(motion.a).attrs({})`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
`

const LogoImage = styled(motion.img).attrs({})`
  height: 40px;
  width: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 40px;
  }
`

const DecentralandLogoLink = styled(motion.a).attrs({})`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 16px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

const DecentralandLogoImage = styled(motion.img).attrs({})`
  height: 20px;
  width: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 20px;
  }
`

const NavLinks = styled(motion.div).attrs({})`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`

const NavLink = styled(motion.a).attrs({})`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.3s ease;
  letter-spacing: -0.75px;

  &:hover {
    opacity: 0.7;
  }
`

const SocialIconsContainer = styled(motion.div).attrs({})`
  display: flex;
  align-items: center;
`

const SocialIcon = styled(motion.a).attrs({})`
  margin-left: 16px;
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 18px;
    height: 18px;

    @media screen and (min-width: ${breakpoints.md}) {
      width: 20px;
      height: 20px;
    }

    path {
      fill: white;
      transition: opacity 0.3s ease;
    }
  }
`

export {
  Header,
  StyledNavbar,
  Nav,
  LeftSection,
  LogoContainer,
  LogoImage,
  DecentralandLogoLink,
  DecentralandLogoImage,
  NavLinks,
  NavLink,
  SocialIconsContainer,
  SocialIcon,
}
