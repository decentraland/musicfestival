import { styled } from "styled-components"
import DMF25Logo from "../../img/music-festival/DMF25-Logo.svg"
import decentralandLogo from "../../img/music-festival/logo.png"
import { breakpoints } from "../../utils/theme"
import { Discord } from "../icons/Vector-Discord"
import { Instagram } from "../icons/Vector-Instagram"
import { Twitter } from "../icons/Vector-Twitter"

const Navbar = () => {
  return (
    <Header>
      <StyledNavbar className="navbar">
        <Nav>
          <LeftSection>
            <LogoContainer
              href="https://decentraland.org"
              target="_blank"
              rel="noreferrer"
            >
              <LogoImage src={DMF25Logo} alt="DMF 2025 Logo" />
            </LogoContainer>

            <NavLinks>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#faq">FAQs</NavLink>
            </NavLinks>
          </LeftSection>

          <SocialIconsContainer>
            <DecentralandLogoLink
              href="https://decentraland.org"
              target="_blank"
              rel="noreferrer"
            >
              <DecentralandLogoImage
                src={decentralandLogo}
                alt="Decentraland Logo"
              />
            </DecentralandLogoLink>
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
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(32px);
  z-index: 100;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const StyledNavbar = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 16px 40px;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${breakpoints.md}) {
    gap: 48px;
  }
`

const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
`

const LogoImage = styled.img`
  height: 40px;
  width: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 40px;
  }
`

const DecentralandLogoLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 16px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`

const DecentralandLogoImage = styled.img`
  height: 20px;
  width: auto;

  @media screen and (min-width: ${breakpoints.md}) {
    height: 20px;
  }
`

const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`

const NavLink = styled.a`
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

export { Navbar }
