import styled from "styled-components"
import leftDiamond from "../img/music-festival/left-diamond.png"
import rightDiamond from "../img/music-festival/right-diamond.png"
import { breakpoints } from "../utils/theme"

const StyledTitle = styled.h2`
  font-size: 40px;
  margin: 40px 0;
  text-transform: uppercase;
  background: linear-gradient(90deg, #3effa3, #56a7ff, #fb01ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: flex;
  text-align: center;
  letter-spacing: 4px;
  align-items: center;
  justify-content: center;
  font-family: "Nasalization" !important;
  font-weight: 400;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin: 0 20px 0 10px;
  }

  &::before {
    background-image: url(${leftDiamond});
  }

  &::after {
    background-image: url(${rightDiamond});
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 30px;
    margin: 30px 0;

    &::before,
    &::after {
      width: 25px;
      height: 25px;
      margin: 0 10px;
    }
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 24px;
    margin: 20px 0;

    &::before,
    &::after {
      width: 20px;
      height: 20px;
      margin: 0 5px;
    }
  }
`

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>
}

export { Title }
