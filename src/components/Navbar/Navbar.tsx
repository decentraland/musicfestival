import {
  DecentralandLogoImage,
  DecentralandLogoLink,
  Header,
  LeftSection,
  LogoContainer,
  LogoImage,
  Nav,
  NavLink,
  NavLinks,
  SocialIcon,
  SocialIconsContainer,
  StyledNavbar,
} from "./styles"
import DMF25Logo from "../../img/music-festival/DMF25-Logo.svg"
import decentralandLogo from "../../img/music-festival/logo.png"
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

export { Navbar }
