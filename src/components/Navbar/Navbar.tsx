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

          <div>
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
          </div>
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

  /* Adding the gradient border at the bottom */
  border-image: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff) 1; /* Gradient applied to the border */
`

const SocialIcon = styled.a`
  margin-left: 24px;
  cursor: pointer;
  display: inline-block;
  padding: 8px;
  border-radius: 50%; /* Make it circular like the icons */
  transition: transform 0.4s ease; /* Smooth animation */

  /* Apply gradient on hover behind the icon */
  :hover {
    transform: scale(1.1); /* Scale the icon on hover */
    transition: transform 0.4s ease; /* Smooth animation */
    will-change: transform; /* Optimize the animation */
  }

  svg {
    width: 24px;
    height: 24px;

    path {
      fill: white; /* Default color */
      transition: fill 0.4s ease;
    }

    :hover path {
      fill: black; /* Change icon color on hover */
    }
  }
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0px 62px;
  }
`

const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  /* Removed the rotation animation */
`

const LogoImage = styled.img`
  height: 60px; /* Adjust this size as needed */
  width: auto;
`

export { Navbar }
