import styled from "styled-components"
import decentralandLogo from "../../img/music-festival/logo.png"
import { breakpoints } from "../../utils/theme.js"
import { Discord } from "../icons/Vector-Discord.jsx"
import { Instagram } from "../icons/Vector-Instagram.jsx"
import { Twitter } from "../icons/Vector-Twitter.jsx"
const Footer = () => {
  return (
    <StyledFooter className="Footer">
      <Nav>
        <FooterLeft>
          <a
            href="https://decentraland.org/?utm_org=dcl&utm_source=decentraland&utm_medium=musiclanding&utm_campaign=musicfestival24"
            target="_blank"
            rel="noreferrer"
          >
            <LogoContainer>
              <LogoImage src={decentralandLogo} alt="DMF 2024 Logo" />
            </LogoContainer>
          </a>
          <FooterText
            href="https://decentraland.org/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Terms & Services
          </FooterText>
          <FooterText
            href="https://decentraland.org/privacy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </FooterText>
        </FooterLeft>

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
    </StyledFooter>
  )
}

const StyledFooter = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #131313;
`

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  width: 50%;
`
const FooterText = styled.a`
  color: #efefef;
  font-size: 12px;
  font-weight: 700;
  font-family: "InterMedium", sans-serif;
  letter-spacing: 3px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
`

const SocialIcon = styled.a`
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

const Nav = styled.nav`
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

const LogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  height: 24px;
  width: auto;
`

// eslint-disable-next-line import/no-default-export
export default Footer
