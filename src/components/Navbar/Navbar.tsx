import { styled } from "styled-components"
import dmf24Logo from "../../img/music-festival/DMF24-Logo.png"
import { breakpoints } from "../../utils/theme"
import { Discord } from "../icons/Vector-Discord"
import { Instagram } from "../icons/Vector-Instagram"
import { Twitter } from "../icons/Vector-Twitter"

const Navbar = () => {
  return (
    <Header>
      <StyledNavbar className="navbar">
        <Nav>
          <LogoContainer
            href="https://decentraland.org"
            target="_blank"
            rel="noreferrer"
          >
            <LogoImage src={dmf24Logo} alt="DMF 2024 Logo" />
          </LogoContainer>

          <NavLinks>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#lineup">LINEUP</NavLink>
            <NavLink href="#livetalks">LIVETALKS</NavLink>
            <NavLink href="#map">MAP</NavLink>
            <NavLink href="#exhibitors">EXHIBITORS</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </NavLinks>

          <SocialIconsContainer>
            <SocialIcon
              href="https://twitter.com/decentraland"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </SocialIcon>
            <SocialIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </SocialIcon>
          </SocialIconsContainer>
        </Nav>
      </StyledNavbar>
    </Header>
  )
}

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 100;
`

const StyledNavbar = styled.section`
  position: relative;
  border-bottom: 5px solid transparent;
  display: flex;
  justify-content: space-between;
  background-color: black;
  border-image: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff) 1;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0px 62px;
  }
`

const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  height: 40px;
  width: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 60px;
  }
`

const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s ease;
  letter-spacing: 3%;

  &:hover {
    color: #3effa3;
  }
`

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`

const SocialIcon = styled.a`
  margin-left: 16px;
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;

    @media screen and (min-width: ${breakpoints.md}) {
      width: 24px;
      height: 24px;
    }

    path {
      fill: white;
      transition: fill 0.4s ease;
    }

    &:hover path {
      fill: #3effa3;
    }
  }
`

export { Navbar }
