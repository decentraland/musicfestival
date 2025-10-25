import {
  FooterLeft,
  FooterText,
  LogoContainer,
  LogoImage,
  Nav,
  SocialIcon,
  StyledFooter,
} from "./styles"
import decentralandLogo from "../../img/music-festival/logo.png"
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

// eslint-disable-next-line import/no-default-export
export default Footer
