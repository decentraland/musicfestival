import React, { useState } from "react"
import styled from "styled-components"
import theme, { breakpoints } from "../../../utils/theme.js"
import Logo from "../../images/DMF24-Logo.svg" // Import the logo here
import border from "../../images/navbar-border.png"
import { Discord } from "../icons/Vector-Discord.jsx"
import { Instagram } from "../icons/Vector-Instagram.jsx"
import { Twitter } from "../icons/Vector-Twitter.jsx"

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const Links = [
    {
      label: "ABOUT",
      targetId: "about",
    },
    {
      label: "LINE UP",
      targetId: "lineup",
    },
    {
      label: "STAGES",
      targetId: "stages",
    },
    {
      label: "EXPERIENCES",
      targetId: "experiences",
    },
    {
      label: "SITEMAP",
      targetId: "sitemap",
    },
    {
      label: "FAQ",
      targetId: "faq",
    },
    // {
    //   label: 'SPONSORS',
    //   targetId: 'sponsors'
    // },
  ]

  const scrollTo = (targetId) => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView()
    }
  }

  return (
    <Header>
      <StyledNavbar className="navbar">
        <Nav>
          <LogoContainer href="#">
            <LogoImage src={Logo} alt="DMF 2024 Logo" />
          </LogoContainer>

          {/* Temporarily hide the MenuList by commenting it out */}
          {/* <div>
            <MenuList>
              {Links.map((link, i) => (
                <MenuItem key={i}>
                  <a
                    onClick={() => {
                      scrollTo(link.targetId);
                    }}
                  >
                    {link.label}
                  </a>
                </MenuItem>
              ))}
            </MenuList>
          </div> */}

          {/* Keep the social icons on the right */}
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
      <StyledBorder src={border} />
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
    padding: 18px 62px;
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

const MenuItem = styled.li`
  font-family: "Gothic";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  letter-spacing: 2px;
  cursor: pointer;

  a {
    transition: color 0.5s ease;
  }

  /* Gradient hover effect */
  a:hover {
    background: linear-gradient(
      90deg,
      #3effa3,
      #56a7ff,
      #fb01ff
    ); /* Gradient applied */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; /* Gradient fills the text */
  }
`

const MenuList = styled.ul`
  display: none;
  justify-content: space-between;
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
  }
`

const StyledBorder = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;

  /* Adding the gradient border at the bottom */
  background: linear-gradient(
    90deg,
    #3effa3,
    #56a7ff,
    #fb01ff
  ); /* Gradient applied */
`

// eslint-disable-next-line import/no-default-export
export default Navbar
