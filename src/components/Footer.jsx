import React from "react";
import styled from "styled-components";
import { Discord } from "./icons/Vector-Discord.js";
import { Twitter } from "./icons/Vector-Twitter.js";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";
import { Instagram } from "./icons/Vector-Instagram.js";

const Footer = (props) => {
  const pages = [
    {
      name: "TERMS & SERVICES",
      url: "https://decentraland.org/terms/",
    },
    {
      name: "PRIVACY POLICIES",
      url: "https://decentraland.org/privacy/"
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      file: Twitter,
      url: "https://twitter.com/decentraland",
    },
    {
      name: "Instagram",
      file: Instagram,
      url: "https://www.instagram.com/decentraland_foundation/",
    },
    {
      name: "Discord",
      file: Discord,
      url: "https://decentraland.org/discord",
    },
  ];
  
  return (
    <StyledFooter>
      <StyledLogoContainer>
        <a href="https://play.decentraland.org/" target="_blank">
          <StyledLogo alt={"Decentraland Logo"} src={dclLogo} />
        </a>
      </StyledLogoContainer>
      <StyledLinks>
        <StyledLinksList>
          {pages.map((page) => (
            <PageLink key={page.name}>
              <a target="_blank" href={page.url}>
                {page.name}
              </a>
            </PageLink>
          ))}
        </StyledLinksList>
      </StyledLinks>
      <StyledSocialLinksContainer>
        <StyledSocialLinks>
          {socialLinks.map(({ name, url, file: File }) => (
            <StyledSocialLink key={name}>
              <a height={100} target="_blank" href={url}>
                <File />
                {/* <img src={socialLink.file} width={24} height={24} /> */}
              </a>
            </StyledSocialLink>
          ))}
        </StyledSocialLinks>
      </StyledSocialLinksContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
  backdrop-filter: blur(32px);

  @media screen and (min-width: ${breakpoints.l}) {
    padding: 48px 62px 40px;
    flex-direction: row;
    justify-content: space-between; /* Ensure spacing between elements */
    align-items: center; /* Vertical alignment */
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center; /* Vertical centering */
`;

const StyledLogo = styled.img`
  height: 35px;
  margin-bottom: 32px;
  @media screen and (min-width: ${breakpoints.l}) {
    margin-bottom: unset;
    margin-right: 78px;
  }
`;

const StyledSocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

const StyledLinks = styled.div`
  display: flex;
  flex: 1;
`;

const StyledLinksList = styled.ul`
  display: flex;
  align-items: center;
  vertical-align: center;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.l}) {
    flex-direction: row;
  }
`;

const PageLink = styled.li`
  font-family: "Gothic";
  text-align: center;
  line-height: 22px;
  margin: 16px 0;

  a {
    transition: color 0.5s ease;
    cursor: pointer;
    
    /* Apply gradient hover effect */
    &:hover {
      background: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  @media screen and (min-width:${breakpoints.l}) {
    margin: unset;
    max-width: 160px;
    margin-right: 67px;
    text-align: left;
  }
`;

const StyledSocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align social icons to the right */
  margin-top: 32px;

  @media screen and (min-width: ${breakpoints.l}) {
    margin-top: 0;
  }

  a svg {
    width: 25px;
    height: 25px;
  }
`;

const StyledSocialLink = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  
  a {
    cursor: pointer;
    display: inline-block;
    padding: 8px;
    border-radius: 50%; /* Circular background */
    transition: background 0.4s ease;
    
    /* Apply gradient on hover behind the icon */
    &:hover {
      background: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff);
    }
  }

  svg {
    width: 25px;
    height: 25px;

    path {
      fill: white;  /* Default color */
      transition: fill 0.4s ease;
    }

    a:hover path {
      fill: black;  /* Change icon color on hover */
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin-right: unset;
    margin-left: 40px;
  }
`;

export default Footer;
